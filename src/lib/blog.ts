import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author?: string
  tags?: string[]
  locale: string
  readingTime?: string
  content: string
}

const contentDirectory = path.join(process.cwd(), 'src/content/blog')

export function getAllBlogPosts(locale: string = 'en'): BlogPost[] {
  try {
    const localeDir = path.join(contentDirectory, locale)
    
    if (!fs.existsSync(localeDir)) {
      return []
    }

    const fileNames = fs.readdirSync(localeDir)
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
      .map((fileName) => {
        const slug = fileName.replace(/\.(md|mdx)$/, '')
        const fullPath = path.join(localeDir, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
          slug,
          title: data.title || '',
          description: data.description || '',
          date: data.date || '',
          author: data.author,
          tags: data.tags || [],
          locale,
          readingTime: data.readingTime,
          content,
        } as BlogPost
      })

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

export function getBlogPost(slug: string, locale: string = 'en'): BlogPost | null {
  try {
    const localeDir = path.join(contentDirectory, locale)
    const fullPath = path.join(localeDir, `${slug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      // Try .mdx extension
      const mdxPath = path.join(localeDir, `${slug}.mdx`)
      if (!fs.existsSync(mdxPath)) {
        return null
      }
      const fileContents = fs.readFileSync(mdxPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || '',
        description: data.description || '',
        date: data.date || '',
        author: data.author,
        tags: data.tags || [],
        locale,
        readingTime: data.readingTime,
        content,
      } as BlogPost
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      author: data.author,
      tags: data.tags || [],
      locale,
      readingTime: data.readingTime,
      content,
    } as BlogPost
  } catch (error) {
    console.error('Error reading blog post:', error)
    return null
  }
}

export function getBlogPostSlugs(locale: string = 'en'): string[] {
  try {
    const localeDir = path.join(contentDirectory, locale)
    
    if (!fs.existsSync(localeDir)) {
      return []
    }

    const fileNames = fs.readdirSync(localeDir)
    return fileNames
      .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
      .map((fileName) => fileName.replace(/\.(md|mdx)$/, ''))
  } catch (error) {
    console.error('Error reading blog post slugs:', error)
    return []
  }
}