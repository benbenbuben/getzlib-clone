import { NextResponse } from 'next/server';
import redis from '@/lib/redis';
import { crawlDomains } from '@/scripts/crawler';

const REDIS_KEY = 'zlib:domains';
const EXPIRE_SECONDS = 86400; // 1天

export async function GET() {
  // 1. 先查 Redis
  const cached = await redis.get(REDIS_KEY);
  if (cached) {
    return NextResponse.json(JSON.parse(cached));
  }

  // 2. 没有缓存，爬取数据
  const data = await crawlDomains();
  // 3. 写入 Redis，设置过期
  await redis.set(REDIS_KEY, JSON.stringify(data), 'EX', EXPIRE_SECONDS);
  return NextResponse.json(data);
} 