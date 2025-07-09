import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Search, RefreshCw, Quote } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Z-Library Tutorials & Guides | Complete Usage Instructions',
  description: 'Learn how to use Z-Library effectively with our comprehensive tutorials covering registration, search techniques, downloads, and academic research.',
  keywords: 'Z-Library tutorial, how to use Z-Library, academic research guide, e-book download tutorial, Z-Library registration, citation tools'
}

const tutorials = [
  {
    id: 'zlibrary-usage',
    icon: BookOpen,
    title: 'Z-Library Usage Guide',
    description: 'Complete step-by-step tutorial for using Z-Library effectively',
    href: '/tutorials/zlibrary-usage'
  },
  {
    id: 'academic-search',
    icon: Search,
    title: 'Academic Resource Search Tips',
    description: 'Advanced techniques for discovering academic papers and research',
    href: '/tutorials/academic-search'
  },
  {
    id: 'format-conversion',
    icon: RefreshCw,
    title: 'E-book Format Conversion Guide',
    description: 'Learn how to convert PDF, EPUB, MOBI, and other formats',
    href: '/tutorials/format-conversion'
  },
  {
    id: 'citation-tools',
    icon: Quote,
    title: 'Citation Management Tools',
    description: 'Comprehensive guide to reference management software',
    href: '/tutorials/citation-tools'
  }
]

export default async function TutorialsPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = useTranslations()

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            {t('tutorials.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('tutorials.subtitle')}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {tutorials.map((tutorial) => {
            const Icon = tutorial.icon
            return (
              <Card key={tutorial.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">
                        <a 
                          href={`/${locale}${tutorial.href}`}
                          className="hover:text-primary transition-colors"
                        >
                          {t(`tutorials.${tutorial.id}.title`)}
                        </a>
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {t(`tutorials.${tutorial.id}.subtitle`)}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {t(`tutorials.${tutorial.id}.description`)}
                  </p>
                  <a 
                    href={`/${locale}${tutorial.href}`}
                    className="text-primary hover:underline font-medium"
                  >
                    Read Tutorial →
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Content Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            Why Use Our Tutorials?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Comprehensive Coverage</h3>
              <p className="text-muted-foreground">
                From basic registration to advanced search techniques, our tutorials cover everything you need to know.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Step-by-Step Instructions</h3>
              <p className="text-muted-foreground">
                Clear, easy-to-follow instructions with screenshots and examples for better understanding.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Regularly Updated</h3>
              <p className="text-muted-foreground">
                Our tutorials are kept up-to-date with the latest Z-Library features and changes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}