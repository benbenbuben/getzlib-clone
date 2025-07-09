import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PenTool, ExternalLink, Star, Zap, CheckCircle, Users, FileText, Brain } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Academic Writing Essential Tools | Best Software & Resources for Researchers',
  description: 'Comprehensive guide to academic writing tools including reference managers, writing software, grammar checkers, and collaboration platforms for researchers and students.',
  keywords: 'academic writing tools, research software, reference management, writing software, grammar checker, collaboration tools, academic productivity'
}

const writingTools = [
  {
    category: 'Reference Management',
    icon: FileText,
    description: 'Organize citations and manage bibliographies',
    tools: [
      {
        name: 'Zotero',
        url: 'https://www.zotero.org/',
        price: 'Free',
        rating: 5,
        description: 'Open-source reference management with excellent browser integration',
        features: ['Web library sync', 'PDF annotation', 'Group collaboration', 'Word integration'],
        pros: ['Completely free', 'Active community', 'Excellent web capture'],
        cons: ['Limited cloud storage', 'Learning curve for advanced features'],
        bestFor: 'Students, researchers on budget, collaborative projects'
      },
      {
        name: 'Mendeley',
        url: 'https://www.mendeley.com/',
        price: 'Free/Premium',
        rating: 4,
        description: 'Academic social network with reference management features',
        features: ['Academic networking', 'Research analytics', 'PDF reader', 'Citation styles'],
        pros: ['Social features', 'Good PDF management', 'Institution integration'],
        cons: ['Limited free storage', 'Owned by Elsevier', 'Interface changes'],
        bestFor: 'Academic networking, collaborative research, institutional use'
      },
      {
        name: 'EndNote',
        url: 'https://endnote.com/',
        price: 'Premium',
        rating: 4,
        description: 'Professional reference management software',
        features: ['Comprehensive database', 'Advanced search', 'PDF annotation', 'Collaboration'],
        pros: ['Professional features', 'Excellent Word integration', 'Large style library'],
        cons: ['Expensive', 'Complex interface', 'Steep learning curve'],
        bestFor: 'Professional researchers, institutions, complex projects'
      }
    ]
  },
  {
    category: 'Writing Software',
    icon: PenTool,
    description: 'Specialized tools for academic writing and manuscript preparation',
    tools: [
      {
        name: 'LaTeX',
        url: 'https://www.latex-project.org/',
        price: 'Free',
        rating: 5,
        description: 'Professional typesetting system for academic documents',
        features: ['Professional formatting', 'Mathematical notation', 'Bibliography management', 'Cross-referencing'],
        pros: ['Professional output', 'Excellent for math/science', 'Version control friendly'],
        cons: ['Steep learning curve', 'Complex syntax', 'Time-consuming setup'],
        bestFor: 'STEM fields, dissertations, journal articles, technical documents'
      },
      {
        name: 'Overleaf',
        url: 'https://www.overleaf.com/',
        price: 'Free/Premium',
        rating: 5,
        description: 'Online LaTeX editor with real-time collaboration',
        features: ['Real-time collaboration', 'Template gallery', 'Git integration', 'Rich text mode'],
        pros: ['No installation required', 'Easy collaboration', 'Great templates'],
        cons: ['Limited free features', 'Requires internet', 'Can be slow'],
        bestFor: 'LaTeX beginners, collaborative writing, journal submissions'
      },
      {
        name: 'Scrivener',
        url: 'https://www.literatureandlatte.com/scrivener/',
        price: 'One-time purchase',
        rating: 4,
        description: 'Writing software designed for long-form academic projects',
        features: ['Research organization', 'Outlining tools', 'Manuscript formatting', 'Target setting'],
        pros: ['Excellent organization', 'Great for long projects', 'Research integration'],
        cons: ['Learning curve', 'Expensive', 'Complex interface'],
        bestFor: 'Dissertations, books, long-form academic writing'
      }
    ]
  },
  {
    category: 'Grammar & Style',
    icon: CheckCircle,
    description: 'Tools for improving writing quality and academic style',
    tools: [
      {
        name: 'Grammarly',
        url: 'https://www.grammarly.com/',
        price: 'Free/Premium',
        rating: 4,
        description: 'AI-powered grammar and writing assistant',
        features: ['Grammar checking', 'Style suggestions', 'Plagiarism detection', 'Tone adjustment'],
        pros: ['Easy to use', 'Good free version', 'Multiple integrations'],
        cons: ['Limited free features', 'Subscription cost', 'Not specialized for academic writing'],
        bestFor: 'General writing improvement, non-native speakers, quick checks'
      },
      {
        name: 'ProWritingAid',
        url: 'https://prowritingaid.com/',
        price: 'Free/Premium',
        rating: 4,
        description: 'Comprehensive writing analysis and improvement tool',
        features: ['Detailed reports', 'Style analysis', 'Readability scores', 'Integration options'],
        pros: ['Comprehensive analysis', 'Good value', 'Detailed explanations'],
        cons: ['Can be overwhelming', 'Slower than competitors', 'Learning curve'],
        bestFor: 'Detailed writing analysis, academic style improvement, budget-conscious users'
      },
      {
        name: 'Hemingway Editor',
        url: 'https://hemingwayapp.com/',
        price: 'Free/Premium',
        rating: 3,
        description: 'Tool for improving readability and clarity',
        features: ['Readability analysis', 'Sentence structure', 'Passive voice detection', 'Word count'],
        pros: ['Simple interface', 'Good for clarity', 'Affordable'],
        cons: ['Limited features', 'Not academic-specific', 'Basic grammar checking'],
        bestFor: 'Improving readability, clear writing, simple editing'
      }
    ]
  },
  {
    category: 'Collaboration',
    icon: Users,
    description: 'Platforms for collaborative academic writing and research',
    tools: [
      {
        name: 'Google Docs',
        url: 'https://docs.google.com/',
        price: 'Free',
        rating: 4,
        description: 'Cloud-based collaborative document editing',
        features: ['Real-time collaboration', 'Comment system', 'Version history', 'Offline access'],
        pros: ['Free', 'Easy sharing', 'Good collaboration features'],
        cons: ['Limited formatting', 'Not ideal for complex documents', 'Privacy concerns'],
        bestFor: 'Collaborative drafting, simple documents, team projects'
      },
      {
        name: 'Microsoft Word Online',
        url: 'https://www.office.com/',
        price: 'Free/Premium',
        rating: 4,
        description: 'Online version of Microsoft Word with collaboration features',
        features: ['Real-time co-authoring', 'Comment and track changes', 'Cross-platform sync', 'Template library'],
        pros: ['Familiar interface', 'Good collaboration', 'Professional features'],
        cons: ['Requires Microsoft account', 'Limited offline access', 'Subscription for full features'],
        bestFor: 'Traditional academic writing, institutional use, familiar workflows'
      },
      {
        name: 'Notion',
        url: 'https://www.notion.so/',
        price: 'Free/Premium',
        rating: 4,
        description: 'All-in-one workspace for notes, documents, and collaboration',
        features: ['Database integration', 'Template system', 'Multi-media support', 'Team collaboration'],
        pros: ['Versatile', 'Great for organization', 'Good free tier'],
        cons: ['Learning curve', 'Can be slow', 'Not traditional writing focused'],
        bestFor: 'Research organization, project management, team coordination'
      }
    ]
  },
  {
    category: 'Research Organization',
    icon: Brain,
    description: 'Tools for organizing research and managing academic projects',
    tools: [
      {
        name: 'Obsidian',
        url: 'https://obsidian.md/',
        price: 'Free/Premium',
        rating: 5,
        description: 'Knowledge management system with linking capabilities',
        features: ['Linked notes', 'Graph view', 'Plugin ecosystem', 'Markdown support'],
        pros: ['Powerful linking', 'Great for research', 'Extensible'],
        cons: ['Learning curve', 'Complex for beginners', 'Requires setup'],
        bestFor: 'Research organization, knowledge management, academic note-taking'
      },
      {
        name: 'Roam Research',
        url: 'https://roamresearch.com/',
        price: 'Premium',
        rating: 4,
        description: 'Networked thought tool for research organization',
        features: ['Bidirectional linking', 'Block references', 'Daily notes', 'Graph database'],
        pros: ['Innovative approach', 'Great for research', 'Flexible structure'],
        cons: ['Expensive', 'Learning curve', 'Can be overwhelming'],
        bestFor: 'Research synthesis, idea development, academic research'
      },
      {
        name: 'Logseq',
        url: 'https://logseq.com/',
        price: 'Free',
        rating: 4,
        description: 'Open-source knowledge management with privacy focus',
        features: ['Local storage', 'Block-based editing', 'Graph view', 'Plugin support'],
        pros: ['Privacy-focused', 'Open source', 'Local storage'],
        cons: ['Newer platform', 'Limited features', 'Learning curve'],
        bestFor: 'Privacy-conscious researchers, open-source advocates, local storage preference'
      }
    ]
  },
  {
    category: 'Productivity',
    icon: Zap,
    description: 'Tools for managing academic productivity and workflows',
    tools: [
      {
        name: 'Todoist',
        url: 'https://todoist.com/',
        price: 'Free/Premium',
        rating: 4,
        description: 'Task management with academic project support',
        features: ['Project organization', 'Due dates', 'Collaboration', 'Templates'],
        pros: ['Great organization', 'Good free tier', 'Cross-platform'],
        cons: ['Limited free features', 'Can be complex', 'Subscription cost'],
        bestFor: 'Task management, project organization, deadline tracking'
      },
      {
        name: 'Toggl Track',
        url: 'https://toggl.com/',
        price: 'Free/Premium',
        rating: 4,
        description: 'Time tracking for academic research and writing',
        features: ['Time tracking', 'Project categorization', 'Reporting', 'Team features'],
        pros: ['Simple interface', 'Good reporting', 'Free tier available'],
        cons: ['Limited free features', 'Can be distracting', 'Subscription cost'],
        bestFor: 'Time management, productivity tracking, billing hours'
      },
      {
        name: 'Forest',
        url: 'https://www.forestapp.cc/',
        price: 'One-time purchase',
        rating: 3,
        description: 'Focus app that helps maintain writing concentration',
        features: ['Focus sessions', 'Gamification', 'Statistics', 'Cross-platform'],
        pros: ['Gamified approach', 'Good for focus', 'Affordable'],
        cons: ['Simple features', 'Not academic-specific', 'Limited functionality'],
        bestFor: 'Focus improvement, distraction management, writing sessions'
      }
    ]
  }
]

const workflowSteps = [
  {
    step: 'Research Phase',
    tools: ['Zotero/Mendeley', 'Obsidian/Roam', 'Google Scholar'],
    description: 'Collect, organize, and synthesize sources',
    tips: [
      'Set up reference management early',
      'Use consistent tagging system',
      'Take detailed notes with source links',
      'Create research question templates'
    ]
  },
  {
    step: 'Planning Phase',
    tools: ['Scrivener', 'Notion', 'Todoist'],
    description: 'Structure your argument and plan sections',
    tips: [
      'Create detailed outlines',
      'Set realistic deadlines',
      'Break large tasks into smaller ones',
      'Plan citation integration points'
    ]
  },
  {
    step: 'Writing Phase',
    tools: ['LaTeX/Overleaf', 'Scrivener', 'Google Docs'],
    description: 'Draft your academic manuscript',
    tips: [
      'Write first, edit later',
      'Use templates for formatting',
      'Keep track of word counts',
      'Maintain consistent citation style'
    ]
  },
  {
    step: 'Review Phase',
    tools: ['Grammarly', 'ProWritingAid', 'Hemingway'],
    description: 'Edit and improve your writing',
    tips: [
      'Check for clarity and flow',
      'Verify all citations',
      'Ensure consistent formatting',
      'Get feedback from peers'
    ]
  },
  {
    step: 'Collaboration Phase',
    tools: ['Google Docs', 'Overleaf', 'Slack'],
    description: 'Work with co-authors and receive feedback',
    tips: [
      'Use track changes effectively',
      'Set clear revision deadlines',
      'Maintain version control',
      'Communicate changes clearly'
    ]
  },
  {
    step: 'Submission Phase',
    tools: ['EndNote', 'LaTeX', 'Journal templates'],
    description: 'Format for submission and manage revisions',
    tips: [
      'Follow journal guidelines exactly',
      'Create submission checklists',
      'Prepare for peer review',
      'Keep detailed revision logs'
    ]
  }
]

export default async function WritingToolsGuide({
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
            Academic Writing Essential Tools
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Comprehensive guide to the best tools for academic writing, research organization, 
            and scholarly productivity. Find the right software for every stage of your research.
          </p>
        </div>

        {/* Quick Start Recommendations */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-500" />
              Quick Start: Essential Tool Stack
            </CardTitle>
            <CardDescription>
              Recommended tools for getting started with academic writing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">Budget-Friendly Stack</h3>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Zotero</strong> - Reference management</li>
                  <li>• <strong>Google Docs</strong> - Writing & collaboration</li>
                  <li>• <strong>Grammarly</strong> - Grammar checking</li>
                  <li>• <strong>Notion</strong> - Research organization</li>
                </ul>
                <div className="mt-2 text-xs text-muted-foreground">
                  Total cost: Free - $12/month
                </div>
              </div>
              
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">Professional Stack</h3>
                <ul className="text-sm space-y-1">
                  <li>• <strong>EndNote</strong> - Reference management</li>
                  <li>• <strong>Scrivener</strong> - Writing software</li>
                  <li>• <strong>ProWritingAid</strong> - Grammar & style</li>
                  <li>• <strong>Overleaf</strong> - LaTeX editing</li>
                </ul>
                <div className="mt-2 text-xs text-muted-foreground">
                  Total cost: $300-500/year
                </div>
              </div>
              
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">STEM Research Stack</h3>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Mendeley</strong> - Reference management</li>
                  <li>• <strong>Overleaf</strong> - LaTeX writing</li>
                  <li>• <strong>Obsidian</strong> - Research organization</li>
                  <li>• <strong>Toggl</strong> - Time tracking</li>
                </ul>
                <div className="mt-2 text-xs text-muted-foreground">
                  Total cost: $50-150/year
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tool Categories */}
        <div className="space-y-8">
          {writingTools.map((category, index) => {
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
                  <div className="space-y-6">
                    {category.tools.map((tool, i) => (
                      <div key={i} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <div>
                              <h3 className="font-semibold text-lg">{tool.name}</h3>
                              <p className="text-sm text-muted-foreground">{tool.description}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[...Array(5)].map((_, starIndex) => (
                                <Star 
                                  key={starIndex} 
                                  className={`h-4 w-4 ${starIndex < tool.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                />
                              ))}
                            </div>
                            <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
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
                        
                        <div className="grid gap-4 lg:grid-cols-4">
                          <div>
                            <h4 className="font-medium mb-2">Features</h4>
                            <ul className="text-sm space-y-1">
                              {tool.features.map((feature, j) => (
                                <li key={j} className="text-muted-foreground">• {feature}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-medium mb-2 text-green-600">Pros</h4>
                            <ul className="text-sm space-y-1">
                              {tool.pros.map((pro, j) => (
                                <li key={j} className="text-muted-foreground">• {pro}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-medium mb-2 text-red-600">Cons</h4>
                            <ul className="text-sm space-y-1">
                              {tool.cons.map((con, j) => (
                                <li key={j} className="text-muted-foreground">• {con}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-medium mb-2">Best For</h4>
                            <p className="text-sm text-muted-foreground">{tool.bestFor}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Academic Writing Workflow */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Academic Writing Workflow</CardTitle>
            <CardDescription>
              How to integrate these tools into your research and writing process
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {workflowSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{step.step}</h3>
                    <p className="text-muted-foreground mb-3">{step.description}</p>
                    <div className="mb-3">
                      <strong className="text-sm">Recommended Tools:</strong>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {step.tools.map((tool, i) => (
                          <span key={i} className="bg-secondary/50 text-secondary-foreground px-2 py-1 rounded text-xs">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <strong className="text-sm">Tips:</strong>
                      <ul className="text-sm space-y-1 mt-1">
                        {step.tips.map((tip, i) => (
                          <li key={i} className="text-muted-foreground">• {tip}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Best Practices for Academic Writing Tools</CardTitle>
            <CardDescription>
              Make the most of your writing software and maintain productivity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold mb-3">Tool Selection</h3>
                <div className="space-y-3">
                  <div className="p-3 border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium">Start Simple</h4>
                    <p className="text-sm text-muted-foreground">
                      Begin with basic tools and gradually add complexity as needed
                    </p>
                  </div>
                  <div className="p-3 border-l-4 border-green-500 pl-4">
                    <h4 className="font-medium">Integration Matters</h4>
                    <p className="text-sm text-muted-foreground">
                      Choose tools that work well together and support your workflow
                    </p>
                  </div>
                  <div className="p-3 border-l-4 border-purple-500 pl-4">
                    <h4 className="font-medium">Budget Wisely</h4>
                    <p className="text-sm text-muted-foreground">
                      Invest in tools that save time and improve quality, not just features
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Workflow Optimization</h3>
                <div className="space-y-3">
                  <div className="p-3 border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-medium">Regular Backups</h4>
                    <p className="text-sm text-muted-foreground">
                      Use cloud storage and version control to protect your work
                    </p>
                  </div>
                  <div className="p-3 border-l-4 border-red-500 pl-4">
                    <h4 className="font-medium">Consistent Habits</h4>
                    <p className="text-sm text-muted-foreground">
                      Develop regular routines for writing, citing, and organizing
                    </p>
                  </div>
                  <div className="p-3 border-l-4 border-indigo-500 pl-4">
                    <h4 className="font-medium">Stay Updated</h4>
                    <p className="text-sm text-muted-foreground">
                      Keep your tools updated and learn new features regularly
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Ready to enhance your academic writing? Explore our tutorials and guides for more help.
          </p>
          <div className="flex justify-center gap-4">
            <a href={`/${locale}/tutorials/citation-tools`} className="text-primary hover:underline">
              Citation Tools Guide
            </a>
            <a href={`/${locale}/guides/academic-resources`} className="text-primary hover:underline">
              Academic Resources Guide
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}