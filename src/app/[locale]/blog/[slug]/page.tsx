import { notFound } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { getBlogPost, getBlogPostSlugs } from '@/lib/blog'
import { Markdown } from '@/components/markdown'

interface BlogPostPageProps {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  const locales = ['en', 'zh', 'ja', 'hi']
  const paths = []

  for (const locale of locales) {
    const slugs = getBlogPostSlugs(locale)
    for (const slug of slugs) {
      paths.push({ locale, slug })
    }
  }

  return paths
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { locale, slug } = await params
  const post = getBlogPost(slug, locale)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} - Z-Library Links Blog`,
    description: post.description,
    keywords: post.tags?.join(', '),
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params
  const post = getBlogPost(slug, locale)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link 
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>

        <article>
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString(locale, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              {post.readingTime && (
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readingTime}
                </div>
              )}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {post.title}
            </h1>
            
            {post.description && (
              <p className="text-xl text-muted-foreground mb-4">
                {post.description}
              </p>
            )}
            
            {post.author && (
              <p className="text-muted-foreground mb-4">
                By {post.author}
              </p>
            )}
            
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </header>

          <Card>
            <CardContent className="p-6 md:p-8">
              <Markdown content={post.content} />
            </CardContent>
          </Card>
        </article>
      </div>
    </div>
  )
}