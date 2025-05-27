import axios from 'axios';
import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as path from 'path';
import { Domain, DomainData } from '../types/domain';

async function crawlDomains(): Promise<DomainData> {
  try {
    const response = await axios.get('https://www.tboxn.com/sites/320.html');
    const $ = cheerio.load(response.data);

    const title = $('h2:contains("最新官网地址")');
    console.log('h2:contains("最新官网地址") found:', title.length);
    let domains: Domain[] = [];
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
            let strongHtml = $(elem).html() || '';
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
      console.log('未找到 h2:contains("最新官网地址")');
    }

    const data = {
      domains,
      lastUpdated: new Date().toISOString()
    };
    console.log('精准爬取到的域名:', domains);
    updateLocalDomains(data);
    return data;
  } catch (error) {
    console.error('爬虫获取失败:', error);
    return getLocalDomains();
  }
}

function getLocalDomains(): DomainData {
  const filePath = path.join(process.cwd(), 'src', 'data', 'domains.json');
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // 如果文件不存在，返回空数据
    return {
      domains: [],
      lastUpdated: new Date().toISOString()
    };
  }
}

function updateLocalDomains(data: DomainData): void {
  const filePath = path.join(process.cwd(), 'src', 'data', 'domains.json');
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

export { crawlDomains, getLocalDomains, updateLocalDomains }; 