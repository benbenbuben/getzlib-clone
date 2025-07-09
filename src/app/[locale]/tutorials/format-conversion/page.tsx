import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { RefreshCw, FileText, Tablet, Monitor, ExternalLink, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'E-book Format Conversion Guide | PDF, EPUB, MOBI, AZW3',
  description: 'Learn how to convert between different e-book formats including PDF, EPUB, MOBI, AZW3. Complete guide with tools and step-by-step instructions.',
  keywords: 'e-book conversion, PDF to EPUB, MOBI converter, AZW3 format, Calibre, format conversion tools'
}

export default async function FormatConversionGuide({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  const converterTools = [
    {
      name: 'Calibre',
      description: 'Free and comprehensive e-book management software',
      url: 'https://calibre-ebook.com/',
      features: ['Supports 20+ formats', 'Batch conversion', 'Metadata editing', 'Library management'],
      price: 'Free'
    },
    {
      name: 'Online-Convert',
      description: 'Web-based format converter',
      url: 'https://www.online-convert.com/file-format/ebook',
      features: ['No software installation', 'Quick conversion', 'Multiple formats', 'Cloud-based'],
      price: 'Free with limits'
    },
    {
      name: 'Zamzar',
      description: 'Online file conversion service',
      url: 'https://www.zamzar.com/',
      features: ['Email delivery', 'Large file support', 'Multiple formats', 'Simple interface'],
      price: 'Free/Premium'
    },
    {
      name: 'CloudConvert',
      description: 'API-based conversion service',
      url: 'https://cloudconvert.com/',
      features: ['High quality', 'API access', 'Batch processing', 'Advanced options'],
      price: 'Pay per conversion'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            E-book Format Conversion Guide
          </h1>
          <p className="text-xl text-muted-foreground">
            Learn how to convert between different e-book formats for optimal reading experience
          </p>
        </div>

        <div className="space-y-8">
          {/* Format Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-500" />
                Understanding E-book Formats
              </CardTitle>
              <CardDescription>
                Know the differences between popular e-book formats
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="h-4 w-4 text-red-500" />
                      <h3 className="font-semibold">PDF</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Portable Document Format - preserves exact layout and formatting
                    </p>
                    <div className="text-xs text-muted-foreground">
                      <strong>Best for:</strong> Academic papers, textbooks, documents with complex layouts
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Tablet className="h-4 w-4 text-green-500" />
                      <h3 className="font-semibold">EPUB</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Electronic Publication - reflowable text that adapts to screen size
                    </p>
                    <div className="text-xs text-muted-foreground">
                      <strong>Best for:</strong> E-readers, tablets, mobile reading
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Monitor className="h-4 w-4 text-orange-500" />
                      <h3 className="font-semibold">MOBI</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Mobipocket format - optimized for Kindle devices
                    </p>
                    <div className="text-xs text-muted-foreground">
                      <strong>Best for:</strong> Kindle e-readers, Amazon ecosystem
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <RefreshCw className="h-4 w-4 text-purple-500" />
                      <h3 className="font-semibold">AZW3</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Amazon's newer format with enhanced features
                    </p>
                    <div className="text-xs text-muted-foreground">
                      <strong>Best for:</strong> Modern Kindle devices, improved typography
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">Format Compatibility</h3>
                <div className="grid gap-3 md:grid-cols-3 text-sm">
                  <div>
                    <strong>Kindle:</strong> MOBI, AZW3, PDF
                  </div>
                  <div>
                    <strong>iPad/iPhone:</strong> EPUB, PDF
                  </div>
                  <div>
                    <strong>Android:</strong> EPUB, PDF, MOBI
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conversion Tools */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5 text-green-500" />
                Recommended Conversion Tools
              </CardTitle>
              <CardDescription>
                External tools for converting between different formats
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {converterTools.map((tool, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{tool.name}</h3>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {tool.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {tool.description}
                    </p>
                    <ul className="text-xs text-muted-foreground mb-3 space-y-1">
                      {tool.features.map((feature, i) => (
                        <li key={i}>• {feature}</li>
                      ))}
                    </ul>
                    <a 
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:underline text-sm"
                    >
                      Visit Website <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Calibre Tutorial */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="h-5 w-5 text-purple-500" />
                Using Calibre for Conversion
              </CardTitle>
              <CardDescription>
                Step-by-step guide to using the most popular e-book converter
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h3 className="font-semibold mb-2">Why Choose Calibre?</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Completely free and open source</li>
                    <li>• Supports the most formats</li>
                    <li>• Advanced conversion options</li>
                    <li>• Built-in e-book library management</li>
                    <li>• Regular updates and community support</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Installation & Setup</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                      <div>
                        <h4 className="font-medium">Download Calibre</h4>
                        <p className="text-sm text-muted-foreground">Visit calibre-ebook.com and download for your operating system</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                      <div>
                        <h4 className="font-medium">Install & Launch</h4>
                        <p className="text-sm text-muted-foreground">Follow installation instructions and launch the application</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                      <div>
                        <h4 className="font-medium">Initial Setup</h4>
                        <p className="text-sm text-muted-foreground">Choose your e-book reader device and set up library location</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Basic Conversion Process</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                      <div>
                        <h4 className="font-medium">Add Book</h4>
                        <p className="text-sm text-muted-foreground">Click "Add books" or drag & drop files into Calibre</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                      <div>
                        <h4 className="font-medium">Select Book</h4>
                        <p className="text-sm text-muted-foreground">Click on the book you want to convert</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                      <div>
                        <h4 className="font-medium">Convert Books</h4>
                        <p className="text-sm text-muted-foreground">Click "Convert books" button in the toolbar</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                      <div>
                        <h4 className="font-medium">Choose Format</h4>
                        <p className="text-sm text-muted-foreground">Select output format (EPUB, MOBI, PDF, etc.)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">5</div>
                      <div>
                        <h4 className="font-medium">Start Conversion</h4>
                        <p className="text-sm text-muted-foreground">Click "OK" to begin the conversion process</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Common Conversion Scenarios */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5 text-orange-500" />
                Common Conversion Scenarios
              </CardTitle>
              <CardDescription>
                Specific guidance for popular format conversions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">PDF to EPUB</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Convert fixed-layout PDFs to reflowable EPUB format
                    </p>
                    <div className="text-xs text-muted-foreground">
                      <strong>Best for:</strong> Reading on mobile devices and e-readers
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      <strong>Note:</strong> May require manual formatting adjustments
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">EPUB to MOBI</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Convert EPUB files for Kindle compatibility
                    </p>
                    <div className="text-xs text-muted-foreground">
                      <strong>Best for:</strong> Reading on Kindle devices
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      <strong>Note:</strong> Usually maintains formatting well
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">MOBI to EPUB</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Convert Kindle books to universal EPUB format
                    </p>
                    <div className="text-xs text-muted-foreground">
                      <strong>Best for:</strong> Reading on non-Kindle devices
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      <strong>Note:</strong> May lose some Kindle-specific features
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Any Format to PDF</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Convert e-books to PDF for printing or sharing
                    </p>
                    <div className="text-xs text-muted-foreground">
                      <strong>Best for:</strong> Printing, archiving, or sharing
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      <strong>Note:</strong> Fixed layout, not ideal for mobile reading
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Advanced Tips */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
                Advanced Conversion Tips
              </CardTitle>
              <CardDescription>
                Pro tips for better conversion results
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Calibre Advanced Settings</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h4 className="font-medium mb-2">Structure Detection</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Auto-detect chapters</li>
                        <li>• Remove page breaks</li>
                        <li>• Format paragraph spacing</li>
                        <li>• Detect and format headers</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <h4 className="font-medium mb-2">Page Setup</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Adjust margins</li>
                        <li>• Set output profile</li>
                        <li>• Configure page orientation</li>
                        <li>• Optimize for device</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Quality Optimization</h3>
                  <div className="space-y-3">
                    <div className="p-3 border-l-4 border-blue-500 pl-4">
                      <h4 className="font-medium">Image Handling</h4>
                      <p className="text-sm text-muted-foreground">
                        Adjust image quality and size for target device - higher quality for tablets, compressed for e-readers
                      </p>
                    </div>
                    <div className="p-3 border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium">Font Management</h4>
                      <p className="text-sm text-muted-foreground">
                        Embed fonts for consistent appearance across devices, or use device defaults for better performance
                      </p>
                    </div>
                    <div className="p-3 border-l-4 border-yellow-500 pl-4">
                      <h4 className="font-medium">Metadata Editing</h4>
                      <p className="text-sm text-muted-foreground">
                        Edit title, author, cover, and description for better organization and discovery
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Common Issues & Solutions</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <h4 className="font-medium mb-1">Formatting Issues</h4>
                      <p className="text-sm text-muted-foreground">
                        <strong>Problem:</strong> Text appears jumbled or improperly formatted
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Solution:</strong> Try different structure detection settings or manual cleanup
                      </p>
                    </div>
                    <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                      <h4 className="font-medium mb-1">Large File Sizes</h4>
                      <p className="text-sm text-muted-foreground">
                        <strong>Problem:</strong> Converted files are too large for device
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Solution:</strong> Compress images, reduce image quality, or remove unnecessary elements
                      </p>
                    </div>
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h4 className="font-medium mb-1">Missing Images</h4>
                      <p className="text-sm text-muted-foreground">
                        <strong>Problem:</strong> Images don't appear in converted file
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Solution:</strong> Check image processing settings and ensure images are properly embedded
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* DRM Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                Important Legal Information
              </CardTitle>
              <CardDescription>
                Understanding DRM and legal considerations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <h3 className="font-semibold mb-2">DRM Protection</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Many commercially purchased e-books have Digital Rights Management (DRM) protection that prevents conversion.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• DRM-protected books cannot be converted without removing DRM first</li>
                    <li>• Removing DRM may violate terms of service</li>
                    <li>• Check your local laws regarding DRM removal</li>
                    <li>• Consider purchasing DRM-free books when possible</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="font-semibold mb-2">Legal Alternatives</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Purchase books from DRM-free stores</li>
                    <li>• Use public domain books from Project Gutenberg</li>
                    <li>• Check if publishers offer multiple format downloads</li>
                    <li>• Look for open access academic papers</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            With these tools and techniques, you can read your books on any device.
          </p>
          <div className="flex justify-center gap-4">
            <a href={`/${locale}/tutorials/academic-search`} className="text-primary hover:underline">
              ← Previous: Academic Search
            </a>
            <a href={`/${locale}/tutorials/citation-tools`} className="text-primary hover:underline">
              Next: Citation Tools →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}