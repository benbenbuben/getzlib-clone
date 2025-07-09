import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Wrench, Search, Database, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Academic Tools & Resources | Essential Research Tools',
  description: 'Discover essential tools for academic research including format converters, search engines, and free resources for students and researchers.',
  keywords: 'academic tools, research tools, format converters, academic search engines, free resources, student tools'
}

const toolCategories = [
  {
    id: 'converters',
    icon: Wrench,
    title: 'Format Conversion Tools',
    description: 'Convert between different file formats',
    details: 'External tools for converting documents and e-books between PDF, EPUB, MOBI, and other formats',
    href: '/tools/converters'
  },
  {
    id: 'search-engines',
    icon: Search,
    title: 'Academic Search Engines',
    description: 'Find scholarly articles and papers',
    details: 'Comprehensive list of academic search platforms and databases for discovering research content',
    href: '/tools/search-engines'
  },
  {
    id: 'free-resources',
    icon: Database,
    title: 'Free Academic Resources',
    description: 'Open access journals and databases',
    details: 'Discover free scholarly content, open access journals, and academic databases',
    href: '/tools/free-resources'
  }
]

export default async function ToolsPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Academic Tools & Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Essential tools for researchers and students to enhance productivity and streamline academic work
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
          {toolCategories.map((category) => {
            const Icon = category.icon
            return (
              <Card key={category.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">
                        <a 
                          href={`/${locale}${category.href}`}
                          className="hover:text-primary transition-colors"
                        >
                          {category.title}
                        </a>
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {category.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {category.details}
                  </p>
                  <a 
                    href={`/${locale}${category.href}`}
                    className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                  >
                    Explore Tools <ExternalLink className="h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Features Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Use These Tools?
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Productivity Boost</h3>
              <p className="text-muted-foreground">
                Streamline your research workflow with tools designed specifically for academic work, saving you time and effort.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Better Discovery</h3>
              <p className="text-muted-foreground">
                Access specialized search engines and databases that surface academic content not found in general search engines.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Free Resources</h3>
              <p className="text-muted-foreground">
                Discover high-quality academic content and tools that are freely available, reducing costs for students and researchers.
              </p>
            </div>
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Enhance Your Research?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Start exploring our curated collection of academic tools and resources. Each category contains carefully selected tools that can significantly improve your research efficiency.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a 
                href={`/${locale}/tools/converters`}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Wrench className="h-4 w-4" />
                Format Converters
              </a>
              <a 
                href={`/${locale}/tools/search-engines`}
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <Search className="h-4 w-4" />
                Search Engines
              </a>
              <a 
                href={`/${locale}/tools/free-resources`}
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg hover:bg-accent/80 transition-colors"
              >
                <Database className="h-4 w-4" />
                Free Resources
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}