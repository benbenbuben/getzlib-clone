import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const BASE_URL = 'https://aiforai.xyz'

function getAllPages(dir: string, prefix = ''): string[] {
  let urls: string[] = []
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
      urls = urls.concat(getAllPages(fullPath, path.join(prefix, file)))
    } else if (file === 'page.tsx') {
      let url = prefix.replace(/\\/g, '/').replace(/\[locale\]/g, '')
      if (url.endsWith('/')) url = url.slice(0, -1)
      if (url === '') url = '/'
      urls.push(url)
    }
  }
  return urls
}

export async function GET() {
  const appDir = path.join(process.cwd(), 'src/app/[locale]')
  let urls: string[] = []
  try {
    urls = getAllPages(appDir)
  } catch (e) {
    urls = ['/']
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(
      (url) => `  <url>\n    <loc>${BASE_URL}${url}</loc>\n    <changefreq>daily</changefreq>\n    <priority>${url === '/' ? '1.0' : '0.8'}</priority>\n  </url>`
    )
    .join('\n')}\n</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
} 