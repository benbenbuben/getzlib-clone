import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Search, BookOpen, Globe, Database, Users, Shield, Target, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Find Free Academic Resources | Complete Guide for Students & Researchers',
  description: 'Comprehensive guide to finding free academic resources including scholarly articles, e-books, databases, and research tools. Save money while accessing quality academic content.',
  keywords: 'free academic resources, scholarly articles, research papers, academic databases, open access, student resources, research tools'
}

const resourceStrategies = [
  {
    title: 'Open Access Journals',
    icon: BookOpen,
    description: 'Access peer-reviewed research without subscription fees',
    methods: [
      'Use Directory of Open Access Journals (DOAJ)',
      'Check PubMed Central for life sciences',
      'Explore PLOS ONE and other major OA journals',
      'Search for subject-specific open access journals'
    ],
    tips: [
      'Look for CC (Creative Commons) licensing',
      'Verify journal quality and peer review process',
      'Check for article processing charges (APCs)',
      'Use institutional OA repositories'
    ]
  },
  {
    title: 'Academic Search Engines',
    icon: Search,
    description: 'Find scholarly content across multiple databases',
    methods: [
      'Start with Google Scholar for comprehensive coverage',
      'Use BASE for European academic content',
      'Try Semantic Scholar for AI-powered search',
      'Explore CORE for open access aggregation'
    ],
    tips: [
      'Use specific academic terminology',
      'Apply date filters for recent research',
      'Check citation counts for impact',
      'Look for full-text availability indicators'
    ]
  },
  {
    title: 'Government Resources',
    icon: Shield,
    description: 'Access government-funded research and publications',
    methods: [
      'Browse NASA Technical Reports Server',
      'Use ERIC for education research',
      'Check NIH databases for health research',
      'Explore government agency publications'
    ],
    tips: [
      'Government-funded research is often free',
      'Look for technical reports and working papers',
      'Check for policy and white papers',
      'Use advanced search features'
    ]
  },
  {
    title: 'Digital Libraries',
    icon: Database,
    description: 'Access digitized books and historical documents',
    methods: [
      'Use Project Gutenberg for public domain books',
      'Browse Internet Archive for diverse content',
      'Check HathiTrust for academic libraries',
      'Explore Google Books for previews'
    ],
    tips: [
      'Focus on public domain works',
      'Use full-text search capabilities',
      'Check for copyright restrictions',
      'Look for digitized historical documents'
    ]
  },
  {
    title: 'Institutional Access',
    icon: Users,
    description: 'Leverage library and organizational memberships',
    methods: [
      'Use your university library access',
      'Check public library database subscriptions',
      'Look for alumni access privileges',
      'Join professional associations'
    ],
    tips: [
      'Access remotely through VPN or proxy',
      'Ask librarians for research assistance',
      'Check for reciprocal borrowing agreements',
      'Use interlibrary loan services'
    ]
  },
  {
    title: 'Alternative Access Methods',
    icon: Target,
    description: 'Creative approaches to accessing research',
    methods: [
      'Contact authors directly for papers',
      'Use ResearchGate for article requests',
      'Check author personal websites',
      'Look for preprint versions on arXiv'
    ],
    tips: [
      'Be polite and professional in requests',
      'Explain your research purpose',
      'Offer to cite their work',
      'Check for conference presentations'
    ]
  }
]

const stepByStepGuide = [
  {
    step: 1,
    title: 'Define Your Research Needs',
    description: 'Clearly identify what type of content you need',
    actions: [
      'Determine your subject area and scope',
      'Identify preferred publication types (articles, books, reports)',
      'Set date ranges for relevant research',
      'Consider language and geographical preferences'
    ]
  },
  {
    step: 2,
    title: 'Start with Free General Resources',
    description: 'Begin with broadly accessible academic content',
    actions: [
      'Search Google Scholar for initial overview',
      'Check Wikipedia for background and references',
      'Use library websites for subject guides',
      'Explore government databases in your field'
    ]
  },
  {
    step: 3,
    title: 'Target Subject-Specific Resources',
    description: 'Focus on specialized databases and collections',
    actions: [
      'Identify key databases for your field',
      'Check professional association resources',
      'Look for subject-specific repositories',
      'Use discipline-focused search engines'
    ]
  },
  {
    step: 4,
    title: 'Leverage Institutional Access',
    description: 'Maximize available library and organizational resources',
    actions: [
      'Log in to your institution\'s library portal',
      'Check for remote access options',
      'Ask librarians about available databases',
      'Use interlibrary loan for unavailable items'
    ]
  },
  {
    step: 5,
    title: 'Explore Alternative Access',
    description: 'Use creative methods to find hard-to-access content',
    actions: [
      'Contact authors for paper copies',
      'Check social academic networks',
      'Look for preprint and working paper versions',
      'Use citation trails to find related work'
    ]
  },
  {
    step: 6,
    title: 'Organize and Verify',
    description: 'Manage your findings and ensure quality',
    actions: [
      'Use reference management software',
      'Verify source credibility and peer review',
      'Check for more recent publications',
      'Organize materials by project or topic'
    ]
  }
]

const commonMistakes = [
  {
    mistake: 'Only Using Google Scholar',
    solution: 'Diversify your search across multiple databases and platforms',
    impact: 'Missing specialized content and alternative perspectives'
  },
  {
    mistake: 'Ignoring Publication Dates',
    solution: 'Balance recent research with seminal works in your field',
    impact: 'Outdated information or missing current developments'
  },
  {
    mistake: 'Not Checking Source Quality',
    solution: 'Verify peer review, publisher reputation, and citation metrics',
    impact: 'Using unreliable or low-quality sources'
  },
  {
    mistake: 'Overlooking Library Resources',
    solution: 'Fully utilize institutional and public library access',
    impact: 'Paying for content that\'s freely available'
  },
  {
    mistake: 'Poor Search Strategy',
    solution: 'Use specific keywords, Boolean operators, and filters',
    impact: 'Inefficient searching and missed relevant content'
  }
]

export default async function AcademicResourcesGuide({
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
            How to Find Free Academic Resources
          </h1>
          <p className="text-xl text-muted-foreground">
            Complete guide to accessing scholarly content without breaking the bank. 
            Discover strategies, tools, and techniques for finding quality academic materials.
          </p>
        </div>

        {/* Quick Start Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-green-500" />
              Quick Start: Essential Free Resources
            </CardTitle>
            <CardDescription>
              Start here for immediate access to academic content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Universal Access</h3>
                <ul className="text-sm space-y-1">
                  <li>• <a href="https://scholar.google.com" className="text-primary hover:underline">Google Scholar</a> - Comprehensive academic search</li>
                  <li>• <a href="https://www.base-search.net" className="text-primary hover:underline">BASE</a> - Academic web search engine</li>
                  <li>• <a href="https://core.ac.uk" className="text-primary hover:underline">CORE</a> - Open access research aggregator</li>
                  <li>• <a href="https://doaj.org" className="text-primary hover:underline">DOAJ</a> - Directory of open access journals</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Subject-Specific</h3>
                <ul className="text-sm space-y-1">
                  <li>• <a href="https://pubmed.ncbi.nlm.nih.gov" className="text-primary hover:underline">PubMed</a> - Medical and life sciences</li>
                  <li>• <a href="https://arxiv.org" className="text-primary hover:underline">arXiv</a> - Physics, math, computer science</li>
                  <li>• <a href="https://www.ssrn.com" className="text-primary hover:underline">SSRN</a> - Social sciences research</li>
                  <li>• <a href="https://eric.ed.gov" className="text-primary hover:underline">ERIC</a> - Education research</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resource Strategies */}
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold">Resource Discovery Strategies</h2>
          
          <div className="grid gap-6">
            {resourceStrategies.map((strategy, index) => {
              const Icon = strategy.icon
              return (
                <Card key={index} className="overflow-hidden">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-primary" />
                      {strategy.title}
                    </CardTitle>
                    <CardDescription>
                      {strategy.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="font-medium mb-3">Methods</h4>
                        <ul className="space-y-2">
                          {strategy.methods.map((method, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {method}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">Pro Tips</h4>
                        <ul className="space-y-2">
                          {strategy.tips.map((tip, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Step-by-Step Guide */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Step-by-Step Research Process</CardTitle>
            <CardDescription>
              Follow this systematic approach for efficient resource discovery
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {stepByStepGuide.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-3">{step.description}</p>
                    <ul className="space-y-1">
                      {step.actions.map((action, i) => (
                        <li key={i} className="text-sm text-muted-foreground">
                          • {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Common Mistakes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Common Mistakes to Avoid</CardTitle>
            <CardDescription>
              Learn from these frequent errors in academic resource discovery
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {commonMistakes.map((mistake, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-red-700 dark:text-red-300 mb-1">
                        {mistake.mistake}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Impact:</strong> {mistake.impact}
                      </p>
                      <p className="text-sm">
                        <strong>Solution:</strong> {mistake.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Advanced Tips */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Advanced Resource Discovery Techniques</CardTitle>
            <CardDescription>
              Professional strategies for comprehensive research
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold mb-3">Search Optimization</h3>
                <div className="space-y-3">
                  <div className="p-3 border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium">Boolean Operators</h4>
                    <p className="text-sm text-muted-foreground">
                      Use AND, OR, NOT to refine search results
                    </p>
                  </div>
                  <div className="p-3 border-l-4 border-green-500 pl-4">
                    <h4 className="font-medium">Phrase Searching</h4>
                    <p className="text-sm text-muted-foreground">
                      Use quotation marks for exact phrases
                    </p>
                  </div>
                  <div className="p-3 border-l-4 border-purple-500 pl-4">
                    <h4 className="font-medium">Truncation</h4>
                    <p className="text-sm text-muted-foreground">
                      Use wildcards (*) for word variations
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Quality Assessment</h3>
                <div className="space-y-3">
                  <div className="p-3 border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-medium">Peer Review Status</h4>
                    <p className="text-sm text-muted-foreground">
                      Verify if content has been peer-reviewed
                    </p>
                  </div>
                  <div className="p-3 border-l-4 border-red-500 pl-4">
                    <h4 className="font-medium">Impact Metrics</h4>
                    <p className="text-sm text-muted-foreground">
                      Check citation counts and journal rankings
                    </p>
                  </div>
                  <div className="p-3 border-l-4 border-indigo-500 pl-4">
                    <h4 className="font-medium">Source Credibility</h4>
                    <p className="text-sm text-muted-foreground">
                      Evaluate publisher reputation and author credentials
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resource Management */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Managing Your Research Resources</CardTitle>
            <CardDescription>
              Tools and techniques for organizing your academic findings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">Reference Management</h3>
                <ul className="text-sm space-y-1">
                  <li>• Use Zotero or Mendeley</li>
                  <li>• Import citations directly</li>
                  <li>• Organize by project</li>
                  <li>• Tag and annotate</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">Note-Taking</h3>
                <ul className="text-sm space-y-1">
                  <li>• Summarize key points</li>
                  <li>• Note methodology</li>
                  <li>• Record page numbers</li>
                  <li>• Link related concepts</li>
                </ul>
              </div>
              
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">Progress Tracking</h3>
                <ul className="text-sm space-y-1">
                  <li>• Keep search logs</li>
                  <li>• Document strategies</li>
                  <li>• Track what works</li>
                  <li>• Note gaps in literature</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Legal and Ethical Considerations */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-yellow-500" />
              Legal and Ethical Considerations
            </CardTitle>
            <CardDescription>
              Important guidelines for responsible use of academic resources
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">Copyright Awareness</h3>
                <ul className="text-sm space-y-1">
                  <li>• Respect copyright restrictions</li>
                  <li>• Understand fair use limitations</li>
                  <li>• Check Creative Commons licenses</li>
                  <li>• Cite sources properly</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">Ethical Research Practices</h3>
                <ul className="text-sm space-y-1">
                  <li>• Give proper attribution</li>
                  <li>• Avoid plagiarism</li>
                  <li>• Use content for educational purposes</li>
                  <li>• Support open access initiatives</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Ready to start your research journey? Explore our tools and tutorials for more guidance.
          </p>
          <div className="flex justify-center gap-4">
            <a href={`/${locale}/tools/free-resources`} className="text-primary hover:underline">
              Free Resources Directory
            </a>
            <a href={`/${locale}/tutorials/academic-search`} className="text-primary hover:underline">
              Academic Search Tutorial
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}