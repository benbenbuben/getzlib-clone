import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock } from 'lucide-react'
import Link from 'next/link'
import { getAllBlogPosts } from '@/lib/blog'
import { useTranslations } from 'next-intl'

interface BlogPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { locale } = await params
  return {
    title: `Blog - Z-Library Links`,
    description: 'Latest articles about Z-Library, e-books, digital libraries, and academic research.',
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params
  const posts = getAllBlogPosts(locale)

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Blog
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Latest articles about Z-Library, e-books, digital libraries, and academic research.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No blog posts available yet.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {posts.map((post) => (
              <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
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
                  <CardTitle className="hover:text-primary transition-colors">
                    <Link href={`/${locale}/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  {post.author && (
                    <p className="text-sm text-muted-foreground">
                      By {post.author}
                    </p>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {post.description}
                  </p>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                  <Link 
                    href={`/${locale}/blog/${post.slug}`}
                    className="text-primary hover:underline font-medium"
                  >
                    Read more →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}