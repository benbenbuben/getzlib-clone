import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Database, ExternalLink, BookOpen, Globe, FileText, Users, Zap, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Free Academic Resources | Open Access Journals & Databases',
  description: 'Comprehensive directory of free academic resources including open access journals, databases, repositories, and educational platforms for students and researchers.',
  keywords: 'free academic resources, open access journals, academic databases, educational resources, research tools, scholarly content'
}

const freeResources = [
  {
    category: 'Open Access Journals',
    icon: BookOpen,
    description: 'High-quality peer-reviewed journals with free access',
    resources: [
      {
        name: 'DOAJ (Directory of Open Access Journals)',
        url: 'https://doaj.org/',
        description: 'Comprehensive directory of quality open access journals',
        subjects: ['All disciplines'],
        features: ['Quality controlled', 'Peer-reviewed', 'Searchable database', 'Journal metrics']
      },
      {
        name: 'PLOS (Public Library of Science)',
        url: 'https://plos.org/',
        description: 'Leading open access scientific journals',
        subjects: ['Science', 'Medicine', 'Biology'],
        features: ['High impact factor', 'CC licensing', 'Data availability', 'Peer review transparency']
      },
      {
        name: 'BMC (BioMed Central)',
        url: 'https://www.biomedcentral.com/',
        description: 'Pioneer in open access scientific publishing',
        subjects: ['Biology', 'Medicine', 'Health Sciences'],
        features: ['Immediate open access', 'Research data', 'Peer review reports', 'Usage statistics']
      },
      {
        name: 'Hindawi',
        url: 'https://www.hindawi.com/',
        description: 'Open access journals across multiple disciplines',
        subjects: ['STEM', 'Medicine', 'Social Sciences'],
        features: ['Fast publication', 'Global reach', 'Article processing', 'Quality editorial board']
      }
    ]
  },
  {
    category: 'Educational Platforms',
    icon: Globe,
    description: 'Free online courses and educational content',
    resources: [
      {
        name: 'MIT OpenCourseWare',
        url: 'https://ocw.mit.edu/',
        description: 'Free access to MIT course materials',
        subjects: ['Engineering', 'Science', 'Mathematics'],
        features: ['Course materials', 'Lecture notes', 'Assignments', 'Exams']
      },
      {
        name: 'Khan Academy',
        url: 'https://www.khanacademy.org/',
        description: 'Free educational resources for all levels',
        subjects: ['Mathematics', 'Science', 'Programming'],
        features: ['Interactive exercises', 'Video lessons', 'Progress tracking', 'Personalized learning']
      },
      {
        name: 'Coursera (Audit)',
        url: 'https://www.coursera.org/',
        description: 'University courses available for audit',
        subjects: ['All disciplines'],
        features: ['University partnerships', 'Video lectures', 'Assignments', 'Community discussion']
      },
      {
        name: 'edX (Audit)',
        url: 'https://www.edx.org/',
        description: 'High-quality courses from top universities',
        subjects: ['Computer Science', 'Business', 'Sciences'],
        features: ['University-level content', 'Interactive labs', 'Discussion forums', 'Mobile access']
      }
    ]
  },
  {
    category: 'Research Repositories',
    icon: Database,
    description: 'Open repositories of research papers and data',
    resources: [
      {
        name: 'arXiv',
        url: 'https://arxiv.org/',
        description: 'Preprint repository for STEM fields',
        subjects: ['Physics', 'Mathematics', 'Computer Science'],
        features: ['Preprint access', 'LaTeX support', 'Subject categories', 'Email alerts']
      },
      {
        name: 'bioRxiv',
        url: 'https://www.biorxiv.org/',
        description: 'Preprint server for biology',
        subjects: ['Biology', 'Life Sciences'],
        features: ['Biology focus', 'Rapid publication', 'Peer feedback', 'Journal submissions']
      },
      {
        name: 'SSRN',
        url: 'https://www.ssrn.com/',
        description: 'Social sciences research network',
        subjects: ['Economics', 'Finance', 'Social Sciences'],
        features: ['Working papers', 'Research rankings', 'Author profiles', 'Citation tracking']
      },
      {
        name: 'RePEc',
        url: 'https://www.repec.org/',
        description: 'Research papers in economics',
        subjects: ['Economics', 'Finance'],
        features: ['Economics focus', 'Author rankings', 'Institution rankings', 'Paper series']
      }
    ]
  },
  {
    category: 'Digital Libraries',
    icon: FileText,
    description: 'Free access to books and historical documents',
    resources: [
      {
        name: 'Project Gutenberg',
        url: 'https://www.gutenberg.org/',
        description: 'Free e-books in public domain',
        subjects: ['Literature', 'History', 'Philosophy'],
        features: ['Public domain works', 'Multiple formats', 'No DRM', 'Volunteer digitization']
      },
      {
        name: 'Internet Archive',
        url: 'https://archive.org/',
        description: 'Digital library of books, movies, and more',
        subjects: ['All disciplines'],
        features: ['Wayback Machine', 'Book lending', 'Historical documents', 'Software preservation']
      },
      {
        name: 'Google Books',
        url: 'https://books.google.com/',
        description: 'Search and preview millions of books',
        subjects: ['All disciplines'],
        features: ['Book search', 'Preview pages', 'Full text for public domain', 'Library links']
      },
      {
        name: 'HathiTrust',
        url: 'https://www.hathitrust.org/',
        description: 'Digital library from academic libraries',
        subjects: ['All disciplines'],
        features: ['Academic partnership', 'Copyright respect', 'Full-text search', 'Emergency access']
      }
    ]
  },
  {
    category: 'Government Resources',
    icon: Users,
    description: 'Government-funded research and publications',
    resources: [
      {
        name: 'PubMed Central',
        url: 'https://www.ncbi.nlm.nih.gov/pmc/',
        description: 'Free full-text biomedical literature',
        subjects: ['Medicine', 'Biology', 'Health Sciences'],
        features: ['NIH funded', 'Full-text articles', 'Advanced search', 'Link to PubMed']
      },
      {
        name: 'NASA Technical Reports',
        url: 'https://ntrs.nasa.gov/',
        description: 'NASA research and technical publications',
        subjects: ['Aerospace', 'Engineering', 'Physics'],
        features: ['NASA research', 'Technical reports', 'Historical documents', 'High-quality content']
      },
      {
        name: 'ERIC (Education)',
        url: 'https://eric.ed.gov/',
        description: 'Educational resources and research',
        subjects: ['Education', 'Educational Research'],
        features: ['Education focus', 'Research articles', 'Reports', 'Theses and dissertations']
      },
      {
        name: 'Government Publishing Office',
        url: 'https://www.govinfo.gov/',
        description: 'Official US government publications',
        subjects: ['Law', 'Policy', 'Government'],
        features: ['Official publications', 'Historical documents', 'Legal resources', 'Policy papers']
      }
    ]
  },
  {
    category: 'Academic Tools',
    icon: Zap,
    description: 'Free tools for research and academic work',
    resources: [
      {
        name: 'Zotero',
        url: 'https://www.zotero.org/',
        description: 'Free reference management software',
        subjects: ['Research Management'],
        features: ['Citation management', 'PDF annotation', 'Group collaboration', 'Browser integration']
      },
      {
        name: 'Mendeley',
        url: 'https://www.mendeley.com/',
        description: 'Academic social network and reference manager',
        subjects: ['Research Management'],
        features: ['Reference management', 'Academic networking', 'PDF reader', 'Research analytics']
      },
      {
        name: 'Connected Papers',
        url: 'https://www.connectedpapers.com/',
        description: 'Visual tool for academic paper discovery',
        subjects: ['Research Discovery'],
        features: ['Visual graphs', 'Paper relationships', 'Literature mapping', 'Citation analysis']
      },
      {
        name: 'Sci-Hub Alternative Tools',
        url: '#',
        description: 'Legal alternatives for accessing research',
        subjects: ['Research Access'],
        features: ['Legal access methods', 'Institutional access', 'Author requests', 'Open access versions']
      }
    ]
  }
]

const accessTips = [
  {
    title: 'University Library Access',
    description: 'Access databases through your institution',
    tips: [
      'Use your student/faculty login',
      'Access remotely through VPN',
      'Check alumni access privileges',
      'Use library computers on campus'
    ]
  },
  {
    title: 'Public Library Resources',
    description: 'Many public libraries offer database access',
    tips: [
      'Get a library card',
      'Access from library computers',
      'Check online database portals',
      'Ask librarians for help'
    ]
  },
  {
    title: 'Professional Associations',
    description: 'Join professional organizations for access',
    tips: [
      'Student memberships often cheaper',
      'Conference proceedings access',
      'Professional development resources',
      'Networking opportunities'
    ]
  },
  {
    title: 'Author Contact',
    description: 'Directly contact researchers for papers',
    tips: [
      'Email authors politely',
      'Use ResearchGate requests',
      'Check author websites',
      'Academic social networks'
    ]
  }
]

export default async function FreeResourcesPage({
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
            Free Academic Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Comprehensive directory of free academic resources including open access journals, 
            educational platforms, research repositories, and academic tools.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-4 mb-8">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-600">10,000+</div>
            <div className="text-sm text-muted-foreground">Open Access Journals</div>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600">1M+</div>
            <div className="text-sm text-muted-foreground">Free Research Papers</div>
          </div>
          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg text-center">
            <div className="text-2xl font-bold text-yellow-600">500+</div>
            <div className="text-sm text-muted-foreground">Educational Platforms</div>
          </div>
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-center">
            <div className="text-2xl font-bold text-purple-600">100%</div>
            <div className="text-sm text-muted-foreground">Free Access</div>
          </div>
        </div>

        {/* Resource Categories */}
        <div className="space-y-8">
          {freeResources.map((category, index) => {
            const Icon = category.icon
            return (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                  <CardTitle className="flex items-center gap-2">
                    <Icon className="h-6 w-6 text-primary" />
                    {category.category}
                  </CardTitle>
                  <CardDescription>
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    {category.resources.map((resource, i) => (
                      <div key={i} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-lg">{resource.name}</h3>
                          <a 
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline flex items-center gap-1"
                          >
                            Visit <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-3">
                          {resource.description}
                        </p>
                        
                        <div className="mb-3">
                          <div className="text-xs font-medium mb-1">Subjects:</div>
                          <div className="flex flex-wrap gap-1">
                            {resource.subjects.map((subject, j) => (
                              <span key={j} className="bg-secondary/50 text-secondary-foreground px-2 py-1 rounded-full text-xs">
                                {subject}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-xs font-medium mb-1">Key Features:</div>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            {resource.features.map((feature, j) => (
                              <li key={j}>• {feature}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Access Tips */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-yellow-500" />
              Maximizing Your Access to Academic Resources
            </CardTitle>
            <CardDescription>
              Strategic approaches to accessing research when you don't have institutional subscriptions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              {accessTips.map((tip, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{tip.description}</p>
                  <ul className="text-sm space-y-1">
                    {tip.tips.map((item, i) => (
                      <li key={i} className="text-muted-foreground">• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Open Access Movement */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Understanding Open Access</CardTitle>
            <CardDescription>
              Learn about the movement to make research freely available
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h3 className="font-semibold mb-2 text-green-700 dark:text-green-300">Gold Open Access</h3>
                <p className="text-sm text-muted-foreground">
                  Articles published in open access journals where the publisher makes content freely available immediately upon publication.
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Green Open Access</h3>
                <p className="text-sm text-muted-foreground">
                  Authors self-archive their work in institutional or subject repositories, often after an embargo period.
                </p>
              </div>
              
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h3 className="font-semibold mb-2 text-purple-700 dark:text-purple-300">Hybrid Open Access</h3>
                <p className="text-sm text-muted-foreground">
                  Traditional subscription journals that offer open access options for individual articles, usually for a fee.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Best Practices for Using Free Resources</CardTitle>
            <CardDescription>
              Make the most of free academic resources while respecting copyright and terms of use
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="font-semibold mb-2">Quality Assessment</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Check if journals are peer-reviewed</li>
                    <li>• Verify publisher reputation</li>
                    <li>• Look for editorial boards</li>
                    <li>• Check indexing in major databases</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h3 className="font-semibold mb-2">Citation Practices</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Always cite sources properly</li>
                    <li>• Include DOI when available</li>
                    <li>• Note open access status</li>
                    <li>• Check for CC licensing terms</li>
                  </ul>
                </div>
              </div>
              
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">Legal and Ethical Considerations</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>• Respect copyright and licensing terms</p>
                  <p>• Use content for educational and research purposes</p>
                  <p>• Don't redistribute copyrighted material without permission</p>
                  <p>• Support open access initiatives when possible</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Discover more ways to access academic content through our comprehensive guides.
          </p>
          <div className="flex justify-center gap-4">
            <a href={`/${locale}/tutorials/academic-search`} className="text-primary hover:underline">
              Academic Search Guide
            </a>
            <a href={`/${locale}/tools/search-engines`} className="text-primary hover:underline">
              ← Search Engines
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}