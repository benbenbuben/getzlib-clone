import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Wrench, ExternalLink, Star, FileText, RefreshCw, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Format Conversion Tools | PDF, EPUB, MOBI Converters',
  description: 'Best online and offline tools for converting between document and e-book formats. Convert PDF, EPUB, MOBI, AZW3, and other formats easily.',
  keywords: 'format converter, PDF converter, EPUB converter, MOBI converter, e-book conversion, document converter'
}

const converterTools = [
  {
    name: 'Calibre',
    description: 'Free, open-source e-book management and conversion software',
    url: 'https://calibre-ebook.com/',
    type: 'Desktop Software',
    price: 'Free',
    rating: 5,
    features: [
      'Supports 20+ formats',
      'Batch conversion',
      'Metadata editing',
      'Library management',
      'E-book editing',
      'Cross-platform'
    ],
    pros: ['Completely free', 'Most comprehensive', 'Active development', 'Great community'],
    cons: ['Learning curve', 'Interface could be better'],
    bestFor: 'Power users, library management, offline work'
  },
  {
    name: 'Online-Convert',
    description: 'Web-based file conversion service',
    url: 'https://www.online-convert.com/',
    type: 'Web Service',
    price: 'Free/Premium',
    rating: 4,
    features: [
      'No software installation',
      'Multiple format support',
      'Batch conversion',
      'OCR for scanned PDFs',
      'Quality settings',
      'API access'
    ],
    pros: ['Easy to use', 'No installation', 'Good quality', 'Fast conversion'],
    cons: ['File size limits', 'Internet required', 'Privacy concerns'],
    bestFor: 'Quick conversions, occasional use, mobile users'
  },
  {
    name: 'CloudConvert',
    description: 'API-based conversion service with high quality output',
    url: 'https://cloudconvert.com/',
    type: 'Web Service',
    price: 'Pay-per-use',
    rating: 4,
    features: [
      'High-quality conversion',
      'API integration',
      'Batch processing',
      'Advanced options',
      'Format preservation',
      'Secure processing'
    ],
    pros: ['Excellent quality', 'Developer-friendly', 'Reliable', 'Good documentation'],
    cons: ['Not free', 'Complex pricing', 'Requires account'],
    bestFor: 'Developers, professional use, high-quality needs'
  },
  {
    name: 'Zamzar',
    description: 'Simple online file conversion service',
    url: 'https://www.zamzar.com/',
    type: 'Web Service',
    price: 'Free/Premium',
    rating: 3,
    features: [
      'Simple interface',
      'Email delivery',
      'Large file support',
      'Format detection',
      'Conversion history',
      'Mobile app'
    ],
    pros: ['Very simple', 'Email delivery', 'Large file support', 'Good for beginners'],
    cons: ['Limited free tier', 'Slower processing', 'Basic features'],
    bestFor: 'Beginners, simple conversions, email delivery'
  },
  {
    name: 'SmallPDF',
    description: 'PDF-focused conversion and editing tools',
    url: 'https://smallpdf.com/',
    type: 'Web Service',
    price: 'Free/Premium',
    rating: 4,
    features: [
      'PDF conversion',
      'Compression',
      'Editing tools',
      'OCR support',
      'Batch processing',
      'Mobile apps'
    ],
    pros: ['PDF specialist', 'Good compression', 'Clean interface', 'Mobile support'],
    cons: ['Limited to PDF', 'Daily limits', 'Premium required for advanced'],
    bestFor: 'PDF-focused work, compression, simple editing'
  },
  {
    name: 'ILovePDF',
    description: 'Comprehensive PDF toolkit',
    url: 'https://www.ilovepdf.com/',
    type: 'Web Service',
    price: 'Free/Premium',
    rating: 4,
    features: [
      'PDF conversion',
      'Merge & split',
      'Compress',
      'OCR',
      'Digital signatures',
      'Batch processing'
    ],
    pros: ['Comprehensive PDF tools', 'Good free tier', 'Fast processing', 'Clean design'],
    cons: ['PDF-only', 'File size limits', 'Watermarks on free tier'],
    bestFor: 'PDF workflows, document management, quick tasks'
  }
]

const formatSupport = [
  {
    format: 'PDF',
    description: 'Portable Document Format',
    uses: 'Academic papers, reports, books',
    compatibility: 'Universal',
    icon: FileText
  },
  {
    format: 'EPUB',
    description: 'Electronic Publication',
    uses: 'E-books, reflowable content',
    compatibility: 'Most e-readers',
    icon: RefreshCw
  },
  {
    format: 'MOBI',
    description: 'Mobipocket e-book format',
    uses: 'Kindle books',
    compatibility: 'Kindle devices',
    icon: FileText
  },
  {
    format: 'AZW3',
    description: 'Amazon Kindle format',
    uses: 'Modern Kindle books',
    compatibility: 'Kindle devices',
    icon: RefreshCw
  },
  {
    format: 'DOCX',
    description: 'Microsoft Word document',
    uses: 'Documents, manuscripts',
    compatibility: 'Microsoft Office',
    icon: FileText
  },
  {
    format: 'TXT',
    description: 'Plain text format',
    uses: 'Simple text content',
    compatibility: 'Universal',
    icon: FileText
  }
]

export default async function FormatConvertersPage({
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
            Format Conversion Tools
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Professional tools and services for converting between document and e-book formats. 
            Transform PDF, EPUB, MOBI, and other formats with ease.
          </p>
        </div>

        {/* Format Support Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RefreshCw className="h-5 w-5 text-blue-500" />
              Supported Formats
            </CardTitle>
            <CardDescription>
              Common file formats and their typical uses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {formatSupport.map((format, index) => {
                const Icon = format.icon
                return (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="h-4 w-4 text-primary" />
                      <h3 className="font-semibold">{format.format}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {format.description}
                    </p>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <div><strong>Uses:</strong> {format.uses}</div>
                      <div><strong>Compatibility:</strong> {format.compatibility}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Tool Recommendations */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Recommended Conversion Tools</h2>
          
          <div className="grid gap-6 lg:grid-cols-1">
            {converterTools.map((tool, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Wrench className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{tool.name}</CardTitle>
                        <CardDescription className="mt-1">
                          {tool.description}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < tool.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                        {tool.price}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                      <h4 className="font-medium mb-2">Features</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {tool.features.map((feature, i) => (
                          <li key={i}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2 text-green-700 dark:text-green-300">Pros</h4>
                      <ul className="text-sm space-y-1">
                        {tool.pros.map((pro, i) => (
                          <li key={i} className="text-muted-foreground">• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2 text-red-700 dark:text-red-300">Cons</h4>
                      <ul className="text-sm space-y-1">
                        {tool.cons.map((con, i) => (
                          <li key={i} className="text-muted-foreground">• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-medium">Best for: </span>
                        <span className="text-sm text-muted-foreground">{tool.bestFor}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                          {tool.type}
                        </span>
                        <a 
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-primary hover:underline"
                        >
                          Visit Website <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Security & Privacy */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-500" />
              Security & Privacy Considerations
            </CardTitle>
            <CardDescription>
              Important factors to consider when using conversion tools
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h3 className="font-semibold mb-2 text-green-700 dark:text-green-300">Safe Practices</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Use reputable, established services</li>
                    <li>• Read privacy policies carefully</li>
                    <li>• Avoid uploading sensitive documents</li>
                    <li>• Use offline tools for confidential files</li>
                    <li>• Check file deletion policies</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Desktop vs Online</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div><strong>Desktop:</strong> Better privacy, no file size limits</div>
                    <div><strong>Online:</strong> Convenient, no installation needed</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <h3 className="font-semibold mb-2 text-yellow-700 dark:text-yellow-300">Red Flags</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Excessive ads or pop-ups</li>
                    <li>• Requests for personal information</li>
                    <li>• No clear privacy policy</li>
                    <li>• Suspicious download prompts</li>
                    <li>• Poor website security (no HTTPS)</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <h3 className="font-semibold mb-2 text-red-700 dark:text-red-300">Copyright Notice</h3>
                  <p className="text-sm text-muted-foreground">
                    Only convert files you own or have permission to modify. Respect copyright laws and terms of service.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Tips */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Conversion Tips & Best Practices</CardTitle>
            <CardDescription>
              Get the best results from your format conversions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold mb-3">Quality Tips</h3>
                <div className="space-y-2">
                  <div className="text-sm">
                    <strong>Start with high-quality source files</strong> - Better input = better output
                  </div>
                  <div className="text-sm">
                    <strong>Choose appropriate formats</strong> - PDF for layout, EPUB for reflowable text
                  </div>
                  <div className="text-sm">
                    <strong>Test conversion settings</strong> - Try different options for optimal results
                  </div>
                  <div className="text-sm">
                    <strong>Verify output quality</strong> - Always check converted files before using
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Efficiency Tips</h3>
                <div className="space-y-2">
                  <div className="text-sm">
                    <strong>Use batch conversion</strong> - Convert multiple files at once
                  </div>
                  <div className="text-sm">
                    <strong>Save conversion profiles</strong> - Reuse settings for similar files
                  </div>
                  <div className="text-sm">
                    <strong>Organize your workflow</strong> - Keep source and converted files organized
                  </div>
                  <div className="text-sm">
                    <strong>Learn keyboard shortcuts</strong> - Speed up repetitive tasks
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Need help with specific conversion tasks? Check out our detailed tutorials.
          </p>
          <div className="flex justify-center gap-4">
            <a href={`/${locale}/tutorials/format-conversion`} className="text-primary hover:underline">
              Format Conversion Guide
            </a>
            <a href={`/${locale}/tools/search-engines`} className="text-primary hover:underline">
              Academic Search Engines →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}