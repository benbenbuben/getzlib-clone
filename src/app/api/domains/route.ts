import { NextResponse } from 'next/server';
import redis from '@/lib/redis';
import { crawlDomains } from '@/scripts/crawler';

const REDIS_KEY = 'zlib:domains';
const EXPIRE_SECONDS = 86400; // 1天

export async function GET() {
  // 1. 先查 Redis
  const cached = await redis.get(REDIS_KEY);
  console.log('[API] Redis cached:', cached);
  if (cached) {
    try {
      const parsed = JSON.parse(cached);
      console.log('[API] Redis parsed:', parsed);
      return NextResponse.json(parsed.domains[0] || null);
    } catch (e) {
      console.error('[API] Redis JSON parse error:', e);
    }
  }

  // 2. 没有缓存，爬取数据
  console.log('[API] No cache, start crawling...');
  const data = await crawlDomains();
  console.log('[API] Crawler result:', data);
  
  // 3. 返回数据（Redis 的更新已经在 crawlDomains 中处理）
  console.log('[API] Return data:', data.domains[0] || null);
  return NextResponse.json(data.domains[0] || null);
} 