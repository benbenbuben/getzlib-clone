import { NextResponse } from 'next/server';
import { getLocalDomains } from '@/scripts/crawler';

export async function GET() {
  try {
    const data = getLocalDomains();
    return NextResponse.json(data.domains[0] || null);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch domains' },
      { status: 500 }
    );
  }
} 