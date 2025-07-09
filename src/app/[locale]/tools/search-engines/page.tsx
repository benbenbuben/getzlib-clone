import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Search, ExternalLink, Star, Globe, Database, BookOpen, GraduationCap, Microscope } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Academic Search Engines | Best Research Databases & Platforms',
  description: 'Comprehensive list of academic search engines and research databases. Find scholarly articles, papers, and academic content from Google Scholar, PubMed, IEEE, and more.',
  keywords: 'academic search engines, research databases, Google Scholar, PubMed, IEEE Xplore, JSTOR, scholarly articles, academic papers'
}

const searchEngines = [
  {
    name: 'Google Scholar',
    description: 'Comprehensive academic search engine by Google',
    url: 'https://scholar.google.com/',
    category: 'General Academic',
    access: 'Free',
    rating: 5,
    features: [
      'Largest academic database',
      'Citation tracking',
      'Author profiles',
      'Institutional access',
      'Related articles',
      'Legal documents'
    ],
    subjects: ['All disciplines'],
    pros: ['Comprehensive coverage', 'Easy to use', 'Free access', 'Citation metrics'],
    cons: ['Quality varies', 'Limited filtering', 'No full-text guarantee'],
    tips: 'Use quotation marks for exact phrases, set up alerts for new papers, check cited by count for impact'
  },
  {
    name: 'PubMed',
    description: 'Medical and life sciences literature database',
    url: 'https://pubmed.ncbi.nlm.nih.gov/',
    category: 'Medical/Life Sciences',
    access: 'Free',
    rating: 5,
    features: [
      'MEDLINE database',
      'MeSH terms',
      'Advanced filters',
      'Clinical queries',
      'Similar articles',
      'PMC full text'
    ],
    subjects: ['Medicine', 'Biology', 'Health Sciences'],
    pros: ['High quality sources', 'Peer-reviewed', 'Advanced search', 'MeSH vocabulary'],
    cons: ['Medical focus only', 'Complex for beginners', 'Limited full text'],
    tips: 'Use MeSH terms for precise searching, apply filters for study types, check PMC for free full text'
  },
  {
    name: 'IEEE Xplore',
    description: 'Engineering and technology research database',
    url: 'https://ieeexplore.ieee.org/',
    category: 'Engineering/Technology',
    access: 'Subscription/Limited Free',
    rating: 4,
    features: [
      'IEEE publications',
      'Conference papers',
      'Standards',
      'Technical reports',
      'Citation analysis',
      'Author search'
    ],
    subjects: ['Engineering', 'Computer Science', 'Technology'],
    pros: ['High-quality technical content', 'Latest research', 'Conference papers', 'Standards access'],
    cons: ['Requires subscription', 'Limited free access', 'Technical focus only'],
    tips: 'Use IEEE thesaurus terms, filter by document type, check conference rankings'
  },
  {
    name: 'JSTOR',
    description: 'Academic journals and books archive',
    url: 'https://www.jstor.org/',
    category: 'Humanities/Social Sciences',
    access: 'Subscription/Limited Free',
    rating: 4,
    features: [
      'Academic journals',
      'Books',
      'Primary sources',
      'Research reports',
      'Data for research',
      'Digital collections'
    ],
    subjects: ['Humanities', 'Social Sciences', 'Arts'],
    pros: ['High-quality journals', 'Historical content', 'Multiple formats', 'Reliable sources'],
    cons: ['Subscription required', 'Moving wall for recent content', 'Limited STEM'],
    tips: 'Check for free access through institutions, use subject browsing, explore Data for Research'
  },
  {
    name: 'arXiv',
    description: 'Preprint repository for physics, mathematics, and more',
    url: 'https://arxiv.org/',
    category: 'STEM Preprints',
    access: 'Free',
    rating: 4,
    features: [
      'Preprint papers',
      'LaTeX support',
      'Subject classification',
      'Author submissions',
      'Email alerts',
      'RSS feeds'
    ],
    subjects: ['Physics', 'Mathematics', 'Computer Science', 'Biology'],
    pros: ['Latest research', 'Free access', 'Pre-publication', 'High-quality STEM'],
    cons: ['Not peer-reviewed', 'STEM focus only', 'Preprint quality varies'],
    tips: 'Check for published versions, use subject categories, set up alerts for new submissions'
  },
  {
    name: 'Semantic Scholar',
    description: 'AI-powered academic search engine',
    url: 'https://www.semanticscholar.org/',
    category: 'AI-Powered Search',
    access: 'Free',
    rating: 4,
    features: [
      'AI-powered search',
      'Citation analysis',
      'Paper summaries',
      'Influential citations',
      'Author disambiguation',
      'PDF reader'
    ],
    subjects: ['Computer Science', 'Medicine', 'General Sciences'],
    pros: ['AI-enhanced results', 'Good visualizations', 'Free access', 'Modern interface'],
    cons: ['Limited coverage', 'Newer platform', 'Less comprehensive than Google Scholar'],
    tips: 'Use the AI-generated summaries, check influential citations, explore paper recommendations'
  },
  {
    name: 'CORE',
    description: 'Open access research papers aggregator',
    url: 'https://core.ac.uk/',
    category: 'Open Access',
    access: 'Free',
    rating: 4,
    features: [
      'Open access papers',
      'Repository aggregation',
      'Full-text search',
      'API access',
      'Data mining',
      'Discovery tools'
    ],
    subjects: ['All disciplines with open access content'],
    pros: ['All open access', 'Large collection', 'Full-text available', 'API for researchers'],
    cons: ['Quality varies', 'Limited metadata', 'Interface could be better'],
    tips: 'Focus on full-text search, check repository sources, use for open access content'
  },
  {
    name: 'BASE',
    description: 'Bielefeld Academic Search Engine',
    url: 'https://www.base-search.net/',
    category: 'Open Access',
    access: 'Free',
    rating: 3,
    features: [
      'Academic web resources',
      'OAI-PMH harvesting',
      'Multiple languages',
      'Institutional repositories',
      'Subject browsing',
      'Advanced search'
    ],
    subjects: ['All disciplines'],
    pros: ['Multilingual', 'Open access focus', 'Academic quality', 'Repository coverage'],
    cons: ['Complex interface', 'Variable quality', 'Less user-friendly'],
    tips: 'Use subject browsing, filter by document type, check source repositories'
  }
]

const disciplineEngines = [
  {
    discipline: 'Medicine & Health',
    engines: [
      { name: 'PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
      { name: 'Cochrane Library', url: 'https://www.cochranelibrary.com/' },
      { name: 'MEDLINE', url: 'https://www.nlm.nih.gov/medline/' },
      { name: 'EMBASE', url: 'https://www.embase.com/' }
    ],
    icon: Microscope
  },
  {
    discipline: 'Engineering & Technology',
    engines: [
      { name: 'IEEE Xplore', url: 'https://ieeexplore.ieee.org/' },
      { name: 'ACM Digital Library', url: 'https://dl.acm.org/' },
      { name: 'Engineering Village', url: 'https://www.engineeringvillage.com/' },
      { name: 'Inspec', url: 'https://www.theiet.org/publishing/inspec/' }
    ],
    icon: GraduationCap
  },
  {
    discipline: 'Humanities & Arts',
    engines: [
      { name: 'JSTOR', url: 'https://www.jstor.org/' },
      { name: 'Project MUSE', url: 'https://muse.jhu.edu/' },
      { name: 'MLA International Bibliography', url: 'https://www.mla.org/Publications/MLA-International-Bibliography' },
      { name: 'Oxford Art Online', url: 'https://www.oxfordartonline.com/' }
    ],
    icon: BookOpen
  },
  {
    discipline: 'Social Sciences',
    engines: [
      { name: 'Web of Science', url: 'https://www.webofscience.com/' },
      { name: 'Scopus', url: 'https://www.scopus.com/' },
      { name: 'PsycINFO', url: 'https://www.apa.org/pubs/databases/psycinfo' },
      { name: 'SSRN', url: 'https://www.ssrn.com/' }
    ],
    icon: Globe
  }
]

export default async function SearchEnginesPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Academic Search Engines
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Comprehensive directory of academic search engines and research databases. 
            Find scholarly articles, papers, and academic content across all disciplines.
          </p>
        </div>

        {/* Search Strategy Guide */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5 text-blue-500" />
              How to Choose the Right Search Engine
            </CardTitle>
            <CardDescription>
              Strategic approach to academic searching
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">1. Start Broad</h3>
                <p className="text-sm text-muted-foreground">
                  Begin with Google Scholar for comprehensive coverage, then narrow down to specialized databases.
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">2. Check Discipline</h3>
                <p className="text-sm text-muted-foreground">
                  Use subject-specific databases for deeper coverage in your field of study.
                </p>
              </div>
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">3. Consider Access</h3>
                <p className="text-sm text-muted-foreground">
                  Check institutional access for subscription databases, or focus on open access alternatives.
                </p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">4. Cross-Reference</h3>
                <p className="text-sm text-muted-foreground">
                  Use multiple sources to ensure comprehensive coverage and validate your findings.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Search Engines */}
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold">General Academic Search Engines</h2>
          
          <div className="space-y-6">
            {searchEngines.map((engine, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Search className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{engine.name}</CardTitle>
                        <CardDescription className="mt-1">
                          {engine.description}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < engine.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                        {engine.access}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 lg:grid-cols-4">
                    <div>
                      <h4 className="font-medium mb-2">Features</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {engine.features.map((feature, i) => (
                          <li key={i}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Subjects</h4>
                      <div className="text-sm text-muted-foreground space-y-1">
                        {engine.subjects.map((subject, i) => (
                          <div key={i} className="bg-secondary/50 px-2 py-1 rounded text-xs">
                            {subject}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Pros & Cons</h4>
                      <div className="space-y-2">
                        <div>
                          <div className="text-xs font-medium text-green-600 mb-1">Pros:</div>
                          {engine.pros.slice(0, 2).map((pro, i) => (
                            <div key={i} className="text-xs text-muted-foreground">• {pro}</div>
                          ))}
                        </div>
                        <div>
                          <div className="text-xs font-medium text-red-600 mb-1">Cons:</div>
                          {engine.cons.slice(0, 2).map((con, i) => (
                            <div key={i} className="text-xs text-muted-foreground">• {con}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Search Tips</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {engine.tips}
                      </p>
                      <a 
                        href={engine.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary hover:underline text-sm font-medium"
                      >
                        Visit {engine.name} <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <span className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                        {engine.category}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Discipline-Specific Engines */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Subject-Specific Databases</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            {disciplineEngines.map((discipline, index) => {
              const Icon = discipline.icon
              return (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-primary" />
                      {discipline.discipline}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {discipline.engines.map((engine, i) => (
                        <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                          <span className="font-medium">{engine.name}</span>
                          <a 
                            href={engine.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline flex items-center gap-1"
                          >
                            Visit <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Search Best Practices */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Academic Search Best Practices</CardTitle>
            <CardDescription>
              Maximize your research efficiency with these proven strategies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold mb-3">Search Strategy</h3>
                <div className="space-y-3">
                  <div className="p-3 border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium">Start with Keywords</h4>
                    <p className="text-sm text-muted-foreground">
                      Begin with 2-3 key terms, then expand or narrow based on results
                    </p>
                  </div>
                  <div className="p-3 border-l-4 border-green-500 pl-4">
                    <h4 className="font-medium">Use Multiple Databases</h4>
                    <p className="text-sm text-muted-foreground">
                      Different databases have different coverage and strengths
                    </p>
                  </div>
                  <div className="p-3 border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-medium">Check Citations</h4>
                    <p className="text-sm text-muted-foreground">
                      Follow citation trails to find related and foundational work
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Quality Assessment</h3>
                <div className="space-y-3">
                  <div className="p-3 border-l-4 border-purple-500 pl-4">
                    <h4 className="font-medium">Peer Review Status</h4>
                    <p className="text-sm text-muted-foreground">
                      Prioritize peer-reviewed sources for academic credibility
                    </p>
                  </div>
                  <div className="p-3 border-l-4 border-red-500 pl-4">
                    <h4 className="font-medium">Publication Date</h4>
                    <p className="text-sm text-muted-foreground">
                      Balance currency with established research in your field
                    </p>
                  </div>
                  <div className="p-3 border-l-4 border-indigo-500 pl-4">
                    <h4 className="font-medium">Source Reputation</h4>
                    <p className="text-sm text-muted-foreground">
                      Consider journal impact factor and publisher reputation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Access Tips */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Maximizing Access to Research</CardTitle>
            <CardDescription>
              Tips for accessing academic content when you don't have institutional access
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">Open Access Options</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Check author's personal websites</li>
                  <li>• Look for preprint versions on arXiv</li>
                  <li>• Use CORE for open access papers</li>
                  <li>• Search institutional repositories</li>
                </ul>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">Library Access</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Check your local public library</li>
                  <li>• Alumni access to university libraries</li>
                  <li>• Interlibrary loan services</li>
                  <li>• Professional association memberships</li>
                </ul>
              </div>
              
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">Contact Authors</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Email authors for copies</li>
                  <li>• Request through ResearchGate</li>
                  <li>• Social media academic networks</li>
                  <li>• Conference networking</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Need help with search techniques? Check out our detailed tutorials.
          </p>
          <div className="flex justify-center gap-4">
            <a href={`/${locale}/tutorials/academic-search`} className="text-primary hover:underline">
              Academic Search Tutorial
            </a>
            <a href={`/${locale}/tools/free-resources`} className="text-primary hover:underline">
              Free Academic Resources →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}