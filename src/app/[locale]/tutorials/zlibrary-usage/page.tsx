import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, AlertCircle, Info, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Z-Library Usage Guide | How to Register, Search & Download',
  description: 'Complete step-by-step guide on how to use Z-Library effectively. Learn registration, search techniques, download methods, and best practices.',
  keywords: 'Z-Library tutorial, how to use Z-Library, Z-Library registration, Z-Library search, Z-Library download, academic research'
}

export default async function ZLibraryUsageGuide({
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
            Z-Library Usage Guide
          </h1>
          <p className="text-xl text-muted-foreground">
            Complete step-by-step tutorial for using Z-Library effectively
          </p>
        </div>

        <div className="space-y-8">
          {/* Getting Started */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-blue-500" />
                Getting Started with Z-Library
              </CardTitle>
              <CardDescription>
                Everything you need to know before you begin
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">What is Z-Library?</h3>
                <p className="text-sm text-muted-foreground">
                  Z-Library is one of the world's largest online libraries containing millions of books, articles, and academic papers. It provides free access to a vast collection of educational materials.
                </p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4" />
                  Important Note
                </h3>
                <p className="text-sm text-muted-foreground">
                  Always use the latest working domains and be aware of your local copyright laws when accessing Z-Library content.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Registration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Step 1: Account Registration
              </CardTitle>
              <CardDescription>
                Create your Z-Library account for enhanced features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                  <div>
                    <h3 className="font-semibold">Visit Z-Library</h3>
                    <p className="text-sm text-muted-foreground">Go to the current working Z-Library domain (check our homepage for the latest link)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                  <div>
                    <h3 className="font-semibold">Click "Sign Up"</h3>
                    <p className="text-sm text-muted-foreground">Look for the registration button, usually in the top right corner</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                  <div>
                    <h3 className="font-semibold">Fill Registration Form</h3>
                    <p className="text-sm text-muted-foreground">Enter your email, create a password, and complete any required fields</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                  <div>
                    <h3 className="font-semibold">Verify Email</h3>
                    <p className="text-sm text-muted-foreground">Check your email for a verification link and click it to activate your account</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">Benefits of Registration:</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Higher download limits (up to 10 books per day)</li>
                  <li>• Access to personal domain</li>
                  <li>• Book recommendations</li>
                  <li>• Reading history</li>
                  <li>• Personal library management</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Search Techniques */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Step 2: Effective Search Techniques
              </CardTitle>
              <CardDescription>
                Master the art of finding the right books and papers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Search Methods</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Basic Search</h4>
                      <p className="text-sm text-muted-foreground">Enter book title, author name, or keywords in the main search box</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Advanced Search</h4>
                      <p className="text-sm text-muted-foreground">Use filters for language, year, file type, and more precise results</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Search Tips</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-0.5 text-primary" />
                      <span className="text-sm">Use exact titles in quotes for precise matches</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-0.5 text-primary" />
                      <span className="text-sm">Include ISBN numbers for academic textbooks</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-0.5 text-primary" />
                      <span className="text-sm">Try different keyword combinations</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-0.5 text-primary" />
                      <span className="text-sm">Use author's last name first</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Download Process */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Step 3: Download Process
              </CardTitle>
              <CardDescription>
                How to download books safely and efficiently
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                  <div>
                    <h3 className="font-semibold">Select Your Book</h3>
                    <p className="text-sm text-muted-foreground">Click on the book title from search results</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                  <div>
                    <h3 className="font-semibold">Choose Format</h3>
                    <p className="text-sm text-muted-foreground">Select preferred format (PDF, EPUB, MOBI, etc.)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                  <div>
                    <h3 className="font-semibold">Click Download</h3>
                    <p className="text-sm text-muted-foreground">Click the download button and wait for processing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                  <div>
                    <h3 className="font-semibold">Save File</h3>
                    <p className="text-sm text-muted-foreground">Save the downloaded file to your device</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">File Formats Explained:</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div><strong>PDF:</strong> Best for academic papers and textbooks with complex formatting</div>
                  <div><strong>EPUB:</strong> Ideal for e-readers and mobile devices</div>
                  <div><strong>MOBI:</strong> Perfect for Kindle devices</div>
                  <div><strong>TXT:</strong> Simple text format for any device</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Best Practices */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-yellow-500" />
                Best Practices & Tips
              </CardTitle>
              <CardDescription>
                Important guidelines for using Z-Library responsibly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <h3 className="font-semibold mb-2">Safety Tips</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Always use verified Z-Library domains</li>
                    <li>• Consider using a VPN for additional privacy</li>
                    <li>• Scan downloaded files with antivirus software</li>
                    <li>• Be cautious of suspicious pop-ups or ads</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h3 className="font-semibold mb-2">Usage Guidelines</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Respect daily download limits</li>
                    <li>• Use content for educational purposes</li>
                    <li>• Consider purchasing books you frequently use</li>
                    <li>• Be aware of your local copyright laws</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Troubleshooting */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-red-500" />
                Common Issues & Solutions
              </CardTitle>
              <CardDescription>
                Troubleshooting common Z-Library problems
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold mb-1">Site Not Loading</h3>
                  <p className="text-sm text-muted-foreground">Check our homepage for the latest working domain or try using a VPN</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="font-semibold mb-1">Download Limit Reached</h3>
                  <p className="text-sm text-muted-foreground">Wait 24 hours or consider registering/upgrading your account</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold mb-1">Book Not Found</h3>
                  <p className="text-sm text-muted-foreground">Try different search terms, check spelling, or search for alternative editions</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold mb-1">Download Failed</h3>
                  <p className="text-sm text-muted-foreground">Try again later, check internet connection, or try a different format</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Need more help? Check out our other tutorials or contact our support team.
          </p>
          <div className="flex justify-center gap-4">
            <a href={`/${locale}/tutorials`} className="text-primary hover:underline">
              ← Back to Tutorials
            </a>
            <a href={`/${locale}/tutorials/academic-search`} className="text-primary hover:underline">
              Next: Academic Search Tips →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}