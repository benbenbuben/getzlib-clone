import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useTranslations } from 'next-intl'

interface AboutPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: AboutPageProps) {
  const { locale } = await params
  return {
    title: `About Us - Z-Library Links`,
    description: 'Learn about our mission to provide reliable access information for Z-Library and digital libraries.',
  }
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params
  
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            About Us
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your trusted source for Z-Library access information and digital library resources
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We are dedicated to providing reliable, up-to-date information about Z-Library access points and digital library resources. Our mission is to help students, researchers, and knowledge seekers find legitimate ways to access educational materials while promoting responsible use of digital libraries.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In an era where access to knowledge should be universal, we bridge the gap between users and educational resources by maintaining current information about library access methods, safety guidelines, and legal considerations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">What We Do</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Monitor and verify the latest working Z-Library domains and access points</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Provide safety guidelines and best practices for accessing digital libraries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Offer educational content about digital libraries and academic resources</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Maintain multilingual support to serve a global community of learners</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Share information about legal alternatives and open access resources</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Values</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Education First</h3>
                  <p className="text-muted-foreground text-sm">
                    We believe knowledge should be accessible to everyone, regardless of economic circumstances or geographic location.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Responsible Use</h3>
                  <p className="text-muted-foreground text-sm">
                    We promote responsible use of digital resources and respect for intellectual property rights.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Safety & Privacy</h3>
                  <p className="text-muted-foreground text-sm">
                    User safety and privacy are paramount in all our recommendations and guidance.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Community Support</h3>
                  <p className="text-muted-foreground text-sm">
                    We serve a global community of learners and provide support in multiple languages.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Legal & Ethical Considerations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We acknowledge that the legal status of shadow libraries like Z-Library varies by jurisdiction. Our role is informational only - we provide access information while encouraging users to:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Research and comply with local copyright laws</li>
                <li>• Use resources primarily for educational and research purposes</li>
                <li>• Support authors and publishers when financially able</li>
                <li>• Explore legal alternatives and open access resources</li>
                <li>• Practice good digital citizenship and online safety</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We welcome feedback, suggestions, and reports about the accuracy of our information. While we cannot provide direct support for Z-Library services, we're happy to help with questions about our website and the information we provide.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For general inquiries or to report broken links, please visit our contact page. We typically respond within 24-48 hours.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}