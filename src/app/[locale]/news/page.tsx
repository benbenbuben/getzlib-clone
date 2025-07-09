import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Newspaper, TrendingUp, Globe, BookOpen, Calendar, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Academic News & Updates | Z-Library News, Research Trends',
  description: 'Stay updated with the latest Z-Library news, academic publishing trends, open access developments, and research policy changes.',
  keywords: 'Z-Library news, academic news, research trends, open access, academic publishing, scholarly communication'
}

const newsCategories = [
  {
    id: 'zlibrary-news',
    title: 'Z-Library Updates',
    description: 'Latest developments and changes',
    icon: BookOpen,
    color: 'blue',
    items: [
      {
        title: 'New Z-Library Mirror Domains Available',
        summary: 'Access Z-Library through new working domains with improved security and performance.',
        date: '2025-01-08',
        category: 'Domain Updates',
        trending: true
      },
      {
        title: 'Z-Library Mobile App Updates',
        summary: 'Enhanced mobile experience with new features for better book discovery and reading.',
        date: '2025-01-05',
        category: 'App Updates',
        trending: false
      },
      {
        title: 'Z-Library Registration Benefits Expanded',
        summary: 'New features for registered users including increased download limits and personal libraries.',
        date: '2025-01-02',
        category: 'Features',
        trending: false
      }
    ]
  },
  {
    id: 'academic-trends',
    title: 'Academic World News',
    description: 'Research and education updates',
    icon: TrendingUp,
    color: 'green',
    items: [
      {
        title: 'Major Universities Embrace Open Access Mandates',
        summary: 'Leading universities implement new policies requiring open access publication of research.',
        date: '2025-01-07',
        category: 'Policy Changes',
        trending: true
      },
      {
        title: 'AI Tools Revolutionize Academic Research',
        summary: 'New AI-powered tools are transforming how researchers discover and analyze literature.',
        date: '2025-01-04',
        category: 'Technology',
        trending: true
      },
      {
        title: 'International Research Collaboration Growth',
        summary: 'Cross-border research partnerships reach new heights in 2025.',
        date: '2025-01-01',
        category: 'Collaboration',
        trending: false
      }
    ]
  },
  {
    id: 'open-access',
    title: 'Open Access Updates',
    description: 'Open access policy changes and trends',
    icon: Globe,
    color: 'purple',
    items: [
      {
        title: 'New Open Access Funding Models Emerge',
        summary: 'Alternative funding approaches make open access more sustainable for publishers.',
        date: '2025-01-06',
        category: 'Funding',
        trending: true
      },
      {
        title: 'Government Mandates Accelerate Open Access',
        summary: 'National research agencies strengthen requirements for open access publication.',
        date: '2025-01-03',
        category: 'Government Policy',
        trending: false
      },
      {
        title: 'Publishers Adapt to Open Access Transition',
        summary: 'Major academic publishers announce new strategies for open access future.',
        date: '2024-12-30',
        category: 'Publishing',
        trending: false
      }
    ]
  }
]

const trendingTopics = [
  {
    topic: 'AI in Academic Research',
    description: 'How artificial intelligence is transforming research methodology',
    growth: '+245%',
    color: 'bg-blue-500'
  },
  {
    topic: 'Open Science Practices',
    description: 'Transparency and reproducibility in scientific research',
    growth: '+189%',
    color: 'bg-green-500'
  },
  {
    topic: 'Digital Humanities',
    description: 'Technology applications in humanities research',
    growth: '+156%',
    color: 'bg-purple-500'
  },
  {
    topic: 'Research Data Management',
    description: 'Best practices for handling and sharing research data',
    growth: '+134%',
    color: 'bg-orange-500'
  }
]

const upcomingEvents = [
  {
    title: 'Open Access Week 2025',
    date: '2025-10-21',
    description: 'Global event promoting open access to research',
    type: 'Global Event'
  },
  {
    title: 'Academic Publishing Innovation Summit',
    date: '2025-03-15',
    description: 'Latest trends in scholarly communication',
    type: 'Conference'
  },
  {
    title: 'Research Data Alliance Meeting',
    date: '2025-04-20',
    description: 'International collaboration on research data',
    type: 'Professional Meeting'
  }
]

export default async function NewsPage({
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
            Academic News & Updates
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Stay informed about Z-Library developments, academic publishing trends, 
            and research policy changes affecting the scholarly community.
          </p>
        </div>

        {/* Trending Topics */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              Trending in Academic World
            </CardTitle>
            <CardDescription>
              Hot topics and emerging trends in academic research and publishing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {trendingTopics.map((topic, index) => (
                <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-3 h-3 rounded-full ${topic.color}`}></div>
                    <span className="text-sm font-medium text-green-600">{topic.growth}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{topic.topic}</h3>
                  <p className="text-sm text-muted-foreground">{topic.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* News Categories */}
        <div className="space-y-8">
          {newsCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card key={index} className="overflow-hidden">
                <CardHeader className={`bg-gradient-to-r from-${category.color}-500/10 to-${category.color}-500/5`}>
                  <CardTitle className="flex items-center gap-2">
                    <Icon className={`h-6 w-6 text-${category.color}-500`} />
                    {category.title}
                  </CardTitle>
                  <CardDescription>
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {category.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 border rounded-lg hover:shadow-sm transition-shadow">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {item.trending && (
                              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                                Trending
                              </span>
                            )}
                            <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">
                              {item.category}
                            </span>
                          </div>
                          <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                          <p className="text-muted-foreground mb-3">{item.summary}</p>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              {new Date(item.date).toLocaleDateString()}
                            </div>
                            <button className="text-primary hover:underline text-sm font-medium flex items-center gap-1">
                              Read More <ArrowRight className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t">
                    <a 
                      href={`/${locale}/news/${category.id}`}
                      className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                    >
                      View All {category.title} <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Upcoming Events */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-500" />
              Upcoming Academic Events
            </CardTitle>
            <CardDescription>
              Important dates and events for the academic community
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      {new Date(event.date).getDate()}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                      {event.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Newsletter Signup */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Newspaper className="h-5 w-5 text-green-500" />
              Stay Updated
            </CardTitle>
            <CardDescription>
              Get the latest academic news and Z-Library updates delivered to your inbox
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="max-w-md mx-auto text-center">
              <p className="text-muted-foreground mb-4">
                Subscribe to our newsletter for weekly updates on academic trends, 
                Z-Library news, and research resources.
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Archive Links */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Looking for older news? Browse our archives or explore related content.
          </p>
          <div className="flex justify-center gap-4">
            <a href={`/${locale}/news/archive`} className="text-primary hover:underline">
              News Archive
            </a>
            <a href={`/${locale}/blog`} className="text-primary hover:underline">
              Blog Articles
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}