import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Search, BookOpen, Target, Lightbulb, Database, Filter } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Academic Resource Search Tips | Advanced Research Techniques',
  description: 'Master advanced search techniques for finding academic papers, journals, and research materials. Learn effective keywords, database navigation, and research strategies.',
  keywords: 'academic search, research techniques, scholarly articles, academic databases, literature review, research methodology'
}

export default async function AcademicSearchTips({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Academic Resource Search Tips
          </h1>
          <p className="text-xl text-muted-foreground">
            Master advanced techniques for discovering academic papers and research materials
          </p>
        </div>

        <div className="space-y-8">
          {/* Search Strategy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-blue-500" />
                Developing Your Search Strategy
              </CardTitle>
              <CardDescription>
                Plan your research approach before you start searching
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">1. Define Your Research Question</h3>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">
                      Start with a clear, specific research question. Break it down into key concepts:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• <strong>What</strong> are you studying?</li>
                      <li>• <strong>Who</strong> is your target population?</li>
                      <li>• <strong>Where</strong> is the context?</li>
                      <li>• <strong>When</strong> is the time frame?</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">2. Identify Key Concepts</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Primary Concepts</h4>
                      <p className="text-sm text-muted-foreground">Main topics directly related to your research question</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Secondary Concepts</h4>
                      <p className="text-sm text-muted-foreground">Related topics that might provide context or supporting evidence</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Keyword Strategy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-yellow-500" />
                Keyword Strategy & Techniques
              </CardTitle>
              <CardDescription>
                Learn how to choose and use effective search terms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Keyword Selection</h3>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Synonyms</h4>
                      <p className="text-sm text-muted-foreground">Different words for the same concept</p>
                      <div className="mt-2 text-xs text-muted-foreground">
                        Example: "elderly" vs "aged" vs "older adults"
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Variations</h4>
                      <p className="text-sm text-muted-foreground">Different forms of the same word</p>
                      <div className="mt-2 text-xs text-muted-foreground">
                        Example: "education" vs "educational" vs "educate"
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Specificity</h4>
                      <p className="text-sm text-muted-foreground">Broad vs narrow terms</p>
                      <div className="mt-2 text-xs text-muted-foreground">
                        Example: "medicine" vs "cardiology" vs "heart surgery"
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Boolean Search Operators</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-4 p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                      <div className="font-mono text-sm bg-primary/10 px-2 py-1 rounded">AND</div>
                      <div className="text-sm">
                        <p className="font-medium">Narrows search</p>
                        <p className="text-muted-foreground">climate AND change (finds documents with both terms)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                      <div className="font-mono text-sm bg-primary/10 px-2 py-1 rounded">OR</div>
                      <div className="text-sm">
                        <p className="font-medium">Broadens search</p>
                        <p className="text-muted-foreground">teenager OR adolescent (finds documents with either term)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                      <div className="font-mono text-sm bg-primary/10 px-2 py-1 rounded">NOT</div>
                      <div className="text-sm">
                        <p className="font-medium">Excludes terms</p>
                        <p className="text-muted-foreground">apple NOT fruit (finds documents about Apple company, not the fruit)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Search Techniques */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-green-500" />
                Advanced Search Techniques
              </CardTitle>
              <CardDescription>
                Professional techniques for more effective searches
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Phrase Searching</h3>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">
                      Use quotation marks to search for exact phrases:
                    </p>
                    <div className="font-mono text-sm bg-white dark:bg-gray-800 p-2 rounded">
                      "machine learning algorithms"
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Truncation & Wildcards</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-4 p-3 border rounded-lg">
                      <div className="font-mono text-sm bg-primary/10 px-2 py-1 rounded">*</div>
                      <div className="text-sm">
                        <p className="font-medium">Truncation</p>
                        <p className="text-muted-foreground">psychol* finds psychology, psychological, psychologist</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-3 border rounded-lg">
                      <div className="font-mono text-sm bg-primary/10 px-2 py-1 rounded">?</div>
                      <div className="text-sm">
                        <p className="font-medium">Single character wildcard</p>
                        <p className="text-muted-foreground">wom?n finds woman, women</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Field Searching</h3>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="p-3 border rounded-lg">
                      <div className="font-mono text-sm mb-1">author:"Smith, J"</div>
                      <p className="text-xs text-muted-foreground">Search by author name</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="font-mono text-sm mb-1">title:"climate change"</div>
                      <p className="text-xs text-muted-foreground">Search in title field</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="font-mono text-sm mb-1">year:2020</div>
                      <p className="text-xs text-muted-foreground">Search by publication year</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="font-mono text-sm mb-1">subject:"artificial intelligence"</div>
                      <p className="text-xs text-muted-foreground">Search by subject</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Database-Specific Tips */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-purple-500" />
                Database-Specific Search Tips
              </CardTitle>
              <CardDescription>
                Optimize your search for different academic databases
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">General Academic Databases</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Z-Library</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Use exact titles for books</li>
                        <li>• Try author's last name first</li>
                        <li>• Include edition numbers</li>
                        <li>• Search by ISBN for textbooks</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Google Scholar</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Use specific academic terms</li>
                        <li>• Search within cited papers</li>
                        <li>• Use advanced search filters</li>
                        <li>• Set up alerts for new papers</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Subject-Specific Databases</h3>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">PubMed (Medical)</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Use MeSH terms</li>
                        <li>• Filter by study type</li>
                        <li>• Use clinical queries</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">IEEE Xplore (Engineering)</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Search by IEEE terms</li>
                        <li>• Filter by document type</li>
                        <li>• Use command search</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">JSTOR (Humanities)</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Use subject headings</li>
                        <li>• Filter by discipline</li>
                        <li>• Search full text</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Search Evaluation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-orange-500" />
                Evaluating Search Results
              </CardTitle>
              <CardDescription>
                How to assess and refine your search results
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Quality Indicators</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <h4 className="font-medium mb-2 text-green-700 dark:text-green-300">Good Results</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Peer-reviewed articles</li>
                        <li>• Recent publications</li>
                        <li>• Relevant to your topic</li>
                        <li>• From reputable sources</li>
                        <li>• Properly cited</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <h4 className="font-medium mb-2 text-red-700 dark:text-red-300">Watch Out For</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Predatory journals</li>
                        <li>• Outdated information</li>
                        <li>• Biased sources</li>
                        <li>• Incomplete citations</li>
                        <li>• Poor methodology</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Refining Your Search</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                      <div>
                        <h4 className="font-medium">Too Many Results?</h4>
                        <p className="text-sm text-muted-foreground">Add more specific terms, use AND operator, apply filters</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                      <div>
                        <h4 className="font-medium">Too Few Results?</h4>
                        <p className="text-sm text-muted-foreground">Use synonyms, try broader terms, use OR operator</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                      <div>
                        <h4 className="font-medium">Irrelevant Results?</h4>
                        <p className="text-sm text-muted-foreground">Use more specific terms, exclude unwanted terms with NOT</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Research Organization */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5 text-indigo-500" />
                Organizing Your Research
              </CardTitle>
              <CardDescription>
                Keep track of your searches and sources
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="font-semibold mb-2">Documentation Tips</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Keep a search log with databases, keywords, and results</li>
                    <li>• Save search strategies that work well</li>
                    <li>• Use reference management software</li>
                    <li>• Create folders for different topics</li>
                    <li>• Note search dates and versions</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <h3 className="font-semibold mb-2">Citation Management</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Use tools like Zotero, Mendeley, or EndNote</li>
                    <li>• Export citations directly from databases</li>
                    <li>• Organize by project or topic</li>
                    <li>• Include abstracts and notes</li>
                    <li>• Regular backup of your library</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Master these techniques to become a more effective researcher.
          </p>
          <div className="flex justify-center gap-4">
            <a href={`/${locale}/tutorials/zlibrary-usage`} className="text-primary hover:underline">
              ← Previous: Z-Library Usage
            </a>
            <a href={`/${locale}/tutorials/format-conversion`} className="text-primary hover:underline">
              Next: Format Conversion →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}