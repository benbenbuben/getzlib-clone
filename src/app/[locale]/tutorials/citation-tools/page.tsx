import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Quote, BookOpen, Database, Users, ExternalLink, Star, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Citation Management Tools Guide | Zotero, Mendeley, EndNote',
  description: 'Complete guide to reference management software including Zotero, Mendeley, EndNote. Learn how to organize research, create citations, and manage bibliographies.',
  keywords: 'citation tools, reference management, Zotero, Mendeley, EndNote, bibliography, academic writing, research organization'
}

const citationTools = [
  {
    name: 'Zotero',
    description: 'Free, open-source reference management software',
    url: 'https://www.zotero.org/',
    price: 'Free',
    rating: 5,
    pros: ['Completely free', 'Open source', 'Great browser integration', 'Excellent PDF annotation'],
    cons: ['Limited online storage (300MB)', 'Learning curve for advanced features'],
    bestFor: 'Students, researchers, budget-conscious users'
  },
  {
    name: 'Mendeley',
    description: 'Academic social network with reference management',
    url: 'https://www.mendeley.com/',
    price: 'Free/Premium',
    rating: 4,
    pros: ['Good social features', 'Automatic PDF import', 'Cross-platform sync', 'Academic networking'],
    cons: ['Limited free storage', 'Interface can be slow', 'Owned by Elsevier'],
    bestFor: 'Collaborative research, academic networking'
  },
  {
    name: 'EndNote',
    description: 'Professional reference management by Clarivate',
    url: 'https://endnote.com/',
    price: 'Premium',
    rating: 4,
    pros: ['Powerful features', 'Excellent Word integration', 'Large style library', 'Professional support'],
    cons: ['Expensive', 'Complex interface', 'Steep learning curve'],
    bestFor: 'Professional researchers, institutions with budget'
  },
  {
    name: 'RefWorks',
    description: 'Cloud-based reference management platform',
    url: 'https://refworks.proquest.com/',
    price: 'Premium',
    rating: 3,
    pros: ['Cloud-based', 'Institution licensing', 'Good collaboration', 'Multiple language support'],
    cons: ['Subscription required', 'Limited free features', 'Interface updates'],
    bestFor: 'Institutional users, collaborative projects'
  }
]

export default async function CitationToolsGuide({
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
            Citation Management Tools Guide
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive guide to reference management software for organizing research and creating citations
          </p>
        </div>

        <div className="space-y-8">
          {/* Why Use Citation Tools */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-500" />
                Why Use Citation Management Tools?
              </CardTitle>
              <CardDescription>
                The benefits of using dedicated reference management software
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h3 className="font-semibold mb-2">Organization Benefits</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Store thousands of references in one place</li>
                      <li>• Organize by projects, topics, or folders</li>
                      <li>• Search and filter your library instantly</li>
                      <li>• Tag and categorize references</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <h3 className="font-semibold mb-2">Writing Integration</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Insert citations while writing</li>
                      <li>• Automatically format bibliographies</li>
                      <li>• Switch citation styles instantly</li>
                      <li>• Collaborate with co-authors</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <h3 className="font-semibold mb-2">Research Efficiency</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Import references from databases</li>
                      <li>• Extract metadata from PDFs</li>
                      <li>• Sync across multiple devices</li>
                      <li>• Backup and version control</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <h3 className="font-semibold mb-2">Academic Compliance</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Ensure proper citation format</li>
                      <li>• Avoid plagiarism issues</li>
                      <li>• Meet journal requirements</li>
                      <li>• Maintain academic integrity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tool Comparison */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-green-500" />
                Citation Tool Comparison
              </CardTitle>
              <CardDescription>
                Detailed comparison of popular reference management tools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {citationTools.map((tool, index) => (
                  <div key={index} className="p-6 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-semibold">{tool.name}</h3>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < tool.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {tool.price}
                        </span>
                        <a 
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline flex items-center gap-1"
                        >
                          Visit <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{tool.description}</p>
                    
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <h4 className="font-medium mb-2 text-green-700 dark:text-green-300">Pros</h4>
                        <ul className="text-sm space-y-1">
                          {tool.pros.map((pro, i) => (
                            <li key={i} className="text-muted-foreground">• {pro}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                        <h4 className="font-medium mb-2 text-red-700 dark:text-red-300">Cons</h4>
                        <ul className="text-sm space-y-1">
                          {tool.cons.map((con, i) => (
                            <li key={i} className="text-muted-foreground">• {con}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <h4 className="font-medium mb-2 text-blue-700 dark:text-blue-300">Best For</h4>
                        <p className="text-sm text-muted-foreground">{tool.bestFor}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Zotero Tutorial */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5 text-purple-500" />
                Getting Started with Zotero
              </CardTitle>
              <CardDescription>
                Step-by-step guide to using the most popular free citation tool
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h3 className="font-semibold mb-2">Why Start with Zotero?</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Completely free with no premium tiers</li>
                    <li>• Open source and community-driven</li>
                    <li>• Excellent browser integration</li>
                    <li>• Works with all major word processors</li>
                    <li>• Strong privacy and data ownership</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Installation & Setup</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                      <div>
                        <h4 className="font-medium">Download Zotero</h4>
                        <p className="text-sm text-muted-foreground">Visit zotero.org and download the desktop application</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                      <div>
                        <h4 className="font-medium">Install Browser Connector</h4>
                        <p className="text-sm text-muted-foreground">Add the Zotero browser extension for Chrome, Firefox, or Safari</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                      <div>
                        <h4 className="font-medium">Create Account</h4>
                        <p className="text-sm text-muted-foreground">Sign up for a free Zotero account for syncing across devices</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                      <div>
                        <h4 className="font-medium">Install Word Plugin</h4>
                        <p className="text-sm text-muted-foreground">Install the plugin for Microsoft Word or Google Docs</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Basic Workflow</h3>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">1. Collecting References</h4>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>• Click the Zotero icon in your browser when viewing academic papers</p>
                        <p>• Import from library catalogs and databases</p>
                        <p>• Manually add references using the green "+" button</p>
                        <p>• Drag and drop PDFs into Zotero</p>
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">2. Organizing Your Library</h4>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>• Create collections for different projects</p>
                        <p>• Use tags to categorize references</p>
                        <p>• Add notes and annotations</p>
                        <p>• Attach PDFs and supplementary files</p>
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">3. Writing and Citing</h4>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>• Use the Word plugin to insert citations</p>
                        <p>• Switch citation styles as needed</p>
                        <p>• Generate bibliographies automatically</p>
                        <p>• Collaborate with shared group libraries</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Advanced Features */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-orange-500" />
                Advanced Features & Tips
              </CardTitle>
              <CardDescription>
                Make the most of your citation management tool
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Collaboration Features</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Shared Libraries</h4>
                      <p className="text-sm text-muted-foreground">
                        Create group libraries for research teams. Share references, PDFs, and annotations with collaborators.
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Real-time Sync</h4>
                      <p className="text-sm text-muted-foreground">
                        Keep your library synchronized across all devices. Changes appear instantly for all team members.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Organization Strategies</h3>
                  <div className="space-y-3">
                    <div className="p-3 border-l-4 border-blue-500 pl-4">
                      <h4 className="font-medium">Project-Based Organization</h4>
                      <p className="text-sm text-muted-foreground">
                        Create separate collections for each research project or paper you're working on.
                      </p>
                    </div>
                    <div className="p-3 border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium">Topic-Based Tagging</h4>
                      <p className="text-sm text-muted-foreground">
                        Use consistent tags like "methodology," "theoretical," or "empirical" to categorize content.
                      </p>
                    </div>
                    <div className="p-3 border-l-4 border-yellow-500 pl-4">
                      <h4 className="font-medium">Status Tracking</h4>
                      <p className="text-sm text-muted-foreground">
                        Tag references as "to-read," "read," "cited," or "review" to track your progress.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Power User Tips</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h4 className="font-medium mb-2">Batch Operations</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Select multiple items to apply tags</li>
                        <li>• Bulk edit metadata fields</li>
                        <li>• Mass export or delete items</li>
                        <li>• Duplicate detection and merging</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <h4 className="font-medium mb-2">Search & Filters</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Use advanced search operators</li>
                        <li>• Save search queries</li>
                        <li>• Filter by item type or date</li>
                        <li>• Search within PDF contents</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Citation Styles */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Quote className="h-5 w-5 text-red-500" />
                Understanding Citation Styles
              </CardTitle>
              <CardDescription>
                Choose the right citation style for your discipline
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">APA Style</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      American Psychological Association
                    </p>
                    <div className="text-xs text-muted-foreground">
                      <strong>Used in:</strong> Psychology, Education, Social Sciences
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      <strong>Format:</strong> Author-date system
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">MLA Style</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Modern Language Association
                    </p>
                    <div className="text-xs text-muted-foreground">
                      <strong>Used in:</strong> Literature, Arts, Humanities
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      <strong>Format:</strong> Author-page system
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Chicago Style</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Chicago Manual of Style
                    </p>
                    <div className="text-xs text-muted-foreground">
                      <strong>Used in:</strong> History, Literature, Arts
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      <strong>Format:</strong> Notes-bibliography or author-date
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Choosing the Right Style</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h4 className="font-medium mb-1">Check Journal Requirements</h4>
                      <p className="text-sm text-muted-foreground">
                        Most academic journals specify their preferred citation style in their submission guidelines.
                      </p>
                    </div>
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <h4 className="font-medium mb-1">Follow Institutional Guidelines</h4>
                      <p className="text-sm text-muted-foreground">
                        Your university or department may have specific requirements for theses and dissertations.
                      </p>
                    </div>
                    <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                      <h4 className="font-medium mb-1">Consider Your Field</h4>
                      <p className="text-sm text-muted-foreground">
                        Different academic disciplines have traditional preferences for citation styles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Best Practices */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                Best Practices for Citation Management
              </CardTitle>
              <CardDescription>
                Tips for maintaining a clean and useful reference library
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Data Quality</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <h4 className="font-medium mb-2">Good Practices</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Verify imported metadata</li>
                        <li>• Use consistent naming conventions</li>
                        <li>• Include DOIs when available</li>
                        <li>• Attach original PDFs</li>
                        <li>• Add relevant tags and notes</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <h4 className="font-medium mb-2">Common Mistakes</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Accepting poor import quality</li>
                        <li>• Inconsistent author name formats</li>
                        <li>• Missing publication information</li>
                        <li>• Duplicate entries</li>
                        <li>• Inadequate backup strategies</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Workflow Integration</h3>
                  <div className="space-y-3">
                    <div className="p-3 border-l-4 border-blue-500 pl-4">
                      <h4 className="font-medium">Reading Workflow</h4>
                      <p className="text-sm text-muted-foreground">
                        Add references as you discover them, not when you're ready to write. Include notes about relevance to your project.
                      </p>
                    </div>
                    <div className="p-3 border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium">Writing Workflow</h4>
                      <p className="text-sm text-muted-foreground">
                        Insert citations as you write, don't wait until the end. Use the "Add/Edit Citation" feature frequently.
                      </p>
                    </div>
                    <div className="p-3 border-l-4 border-yellow-500 pl-4">
                      <h4 className="font-medium">Revision Workflow</h4>
                      <p className="text-sm text-muted-foreground">
                        Review and update citations during revision. Check that all references are cited and all citations have references.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Backup & Security</h3>
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <h4 className="font-medium mb-2">Protect Your Work</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Enable automatic syncing to cloud</li>
                      <li>• Export your library regularly</li>
                      <li>• Keep local backups of important PDFs</li>
                      <li>• Document your organization system</li>
                      <li>• Test citation integration before deadlines</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Master these tools to streamline your research and writing process.
          </p>
          <div className="flex justify-center gap-4">
            <a href={`/${locale}/tutorials/format-conversion`} className="text-primary hover:underline">
              ← Previous: Format Conversion
            </a>
            <a href={`/${locale}/tutorials`} className="text-primary hover:underline">
              Back to Tutorials →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}