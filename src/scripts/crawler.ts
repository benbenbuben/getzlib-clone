import axios from 'axios';
import * as cheerio from 'cheerio';
import { Domain, DomainData } from '../types/domain';
import redis from '@/lib/redis';

const REDIS_KEY = 'zlib:domains';
const EXPIRE_SECONDS = 86400; // 1天

async function crawlDomains(): Promise<DomainData> {
  try {
    console.log('[CRAWLER] Start crawling at', new Date().toISOString());
    const response = await axios.get('https://www.tboxn.com/sites/320.html');
    const $ = cheerio.load(response.data);

    const title = $('h2:contains("最新官网地址")');
    console.log('[CRAWLER] h2:contains("最新官网地址") found:', title.length);
    const domains: Domain[] = [];
    if (title.length > 0) {
      let next = title.next();
      let idx = 0;
      while (next.length && !/^h[23]$/i.test(next[0].tagName)) {
        // 查找 strong 标签，span 蓝色且内容包含"第三方"或"官方地址"
        next.find('strong').each((_, elem) => {
          const span = $(elem).find('span[style*="color: #0000ff"]');
          const label = span.text();
          if (/第三方|官方地址/.test(label)) {
            // strong 标签后面的文本节点
            const strongHtml = $(elem).html() || '';
            // strong 结束后可能直接跟着 url 文本，也可能在 strong 内部
            // 先尝试 strong 标签内的文本
            const matchInner = strongHtml.match(/<span[^>]*>.*?<\/span>([^<👉\s]+https?:\/\/[^👉\s<]+)/);
            if (matchInner && matchInner[1]) {
              const url = matchInner[1].replace(/[👉\s]+$/, '');
              if (!domains.some(d => d.url === url)) {
                domains.push({
                  url,
                  status: 'active',
                  lastChecked: new Date().toISOString(),
                  source: 'crawler',
                  note: label.replace(/[:：]/g, '')
                });
                console.log('[CRAWLER] Add domain:', url, 'label:', label);
              }
            } else {
              // strong 标签后面的文本节点
              const nextNode = elem.nextSibling;
              if (nextNode && nextNode.type === 'text') {
                const text = nextNode.data;
                const match = text.match(/https?:\/\/[^👉\s<]+/);
                if (match) {
                  const url = match[0].replace(/[👉\s]+$/, '');
                  if (!domains.some(d => d.url === url)) {
                    domains.push({
                      url,
                      status: 'active',
                      lastChecked: new Date().toISOString(),
                      source: 'crawler',
                      note: label.replace(/[:：]/g, '')
                    });
                    console.log('[CRAWLER] Add domain:', url, 'label:', label);
                  }
                }
              }
            }
          }
        });
        next = next.next();
        idx++;
      }
    } else {
      console.log('[CRAWLER] 未找到 h2:contains("最新官网地址")');
    }

    const data = {
      domains,
      lastUpdated: new Date().toISOString()
    };
    console.log('[CRAWLER] 精准爬取到的域名:', domains);

    // 直接更新 Redis，不再写入本地文件
    try {
      await redis.set(REDIS_KEY, JSON.stringify(data), 'EX', EXPIRE_SECONDS);
      console.log('[CRAWLER] Redis update success');
    } catch (error) {
      console.error('[CRAWLER] Redis update error:', error);
    }

    return data;
  } catch (error) {
    console.error('[CRAWLER] 爬虫获取失败:', error);
    // 如果爬取失败，尝试从 Redis 获取数据
    try {
      const cached = await redis.get(REDIS_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        console.log('[CRAWLER] Fallback to Redis cached data');
        return parsed;
      }
    } catch (e) {
      console.error('[CRAWLER] Redis fallback error:', e);
    }
    // 如果 Redis 也没有数据，返回空数据
    return {
      domains: [],
      lastUpdated: new Date().toISOString()
    };
  }
}

export { crawlDomains }; 