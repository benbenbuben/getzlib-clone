import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, MessageCircle, Shield, Globe } from 'lucide-react'

interface ContactPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: ContactPageProps) {
  const { locale } = await params
  return {
    title: `Contact Us - Z-Library Links`,
    description: 'Get in touch with us for questions, feedback, or to report issues with Z-Library access information.',
  }
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                General Inquiries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                For general questions about our website, services, or to report broken links and outdated information.
              </p>
              <a 
                href="mailto:contact@zlibrarylinks.com" 
                className="text-primary hover:underline font-medium"
              >
                contact@zlibrarylinks.com
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security & Privacy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                For security concerns, privacy questions, or to report suspicious activity.
              </p>
              <a 
                href="mailto:security@zlibrarylinks.com" 
                className="text-primary hover:underline font-medium"
              >
                security@zlibrarylinks.com
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">What We Can Help With</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Website & Information
                  </h3>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Reporting broken or outdated links</li>
                    <li>• Suggesting new content or features</li>
                    <li>• Website technical issues</li>
                    <li>• Content accuracy concerns</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    Partnerships & Collaboration
                  </h3>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    <li>• Educational institution partnerships</li>
                    <li>• Content collaboration opportunities</li>
                    <li>• Research project support</li>
                    <li>• Media and press inquiries</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Important Notice</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <strong>Please note:</strong> We are not affiliated with Z-Library or any shadow library services. We cannot provide direct support for Z-Library accounts, downloads, or technical issues with Z-Library platforms. Our service is limited to providing access information and educational resources.
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                For direct Z-Library support, please use their official channels or the magic email service mentioned on our homepage.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Response Times</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">24-48h</div>
                  <div className="text-sm text-muted-foreground">General Inquiries</div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">2-4h</div>
                  <div className="text-sm text-muted-foreground">Broken Links</div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-2">1-2h</div>
                  <div className="text-sm text-muted-foreground">Security Issues</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Language Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We provide support in multiple languages to serve our global community. While our primary support language is English, we can also assist in:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-3 bg-muted/30 rounded-lg">
                  <div className="font-medium">English</div>
                  <div className="text-sm text-muted-foreground">Native</div>
                </div>
                <div className="p-3 bg-muted/30 rounded-lg">
                  <div className="font-medium">中文</div>
                  <div className="text-sm text-muted-foreground">Chinese</div>
                </div>
                <div className="p-3 bg-muted/30 rounded-lg">
                  <div className="font-medium">日本語</div>
                  <div className="text-sm text-muted-foreground">Japanese</div>
                </div>
                <div className="p-3 bg-muted/30 rounded-lg">
                  <div className="font-medium">हिन्दी</div>
                  <div className="text-sm text-muted-foreground">Hindi</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}