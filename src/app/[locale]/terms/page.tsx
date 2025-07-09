import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface TermsPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: TermsPageProps) {
  const { locale } = await params
  return {
    title: `Terms of Service - Z-Library Links`,
    description: 'Terms of Service and usage guidelines for Z-Library Links website and services.',
  }
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { locale } = await params
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Please read these terms carefully before using our website and services.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: January 8, 2025
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Z-Library Links ("we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service ("Terms") govern your use of our website located at various domains (the "Service") operated by Z-Library Links.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">2. Description of Service</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Z-Library Links is an informational website that provides:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Current information about Z-Library access points and domains</li>
                <li>• Educational content about digital libraries and academic resources</li>
                <li>• Safety guidelines for accessing online educational materials</li>
                <li>• Blog content related to digital libraries and academic research</li>
                <li>• Multilingual support for global users</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Important:</strong> We are not affiliated with, owned by, or operated by Z-Library. We do not host, store, or distribute any copyrighted materials.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">3. User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                By using our service, you agree to:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Use the information provided for educational and informational purposes only</li>
                <li>• Comply with all applicable local, state, national, and international laws and regulations</li>
                <li>• Respect copyright laws and intellectual property rights in your jurisdiction</li>
                <li>• Not use our service for any unlawful or prohibited activities</li>
                <li>• Not attempt to harm, disable, or otherwise interfere with our website's functionality</li>
                <li>• Not reproduce, redistribute, or republish our content without permission</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">4. Legal Disclaimer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-muted-foreground leading-relaxed">
                  <strong>IMPORTANT LEGAL NOTICE:</strong> The legal status of shadow libraries and similar services varies by jurisdiction. We strongly recommend that users research and comply with their local copyright laws before accessing any third-party services mentioned on our website.
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We provide information about Z-Library access points but do not endorse, guarantee, or take responsibility for the legality of accessing Z-Library in any particular jurisdiction. Users are solely responsible for ensuring their actions comply with applicable laws.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">5. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Z-Library Links, its officers, directors, employees, or agents, be liable to you for any direct, indirect, incidental, special, punitive, or consequential damages whatsoever resulting from any:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Use or inability to use our service</li>
                <li>• Unauthorized access to or alteration of your transmissions or data</li>
                <li>• Statements or conduct of any third party on the service</li>
                <li>• Legal consequences of accessing third-party services</li>
                <li>• Any other matter relating to the service</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">6. Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The content, organization, graphics, design, compilation, magnetic translation, digital conversion, and other matters related to the Site are protected under applicable copyrights, trademarks, and other proprietary (including but not limited to intellectual property) rights.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The copying, redistribution, use, or publication by you of any such matters or any part of the Site, except as allowed by Section 7 below, is strictly prohibited.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">7. Fair Use and Educational Purpose</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Limited reproduction of our content may be permissible under fair use for educational, non-commercial purposes, provided that:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Proper attribution is given to Z-Library Links</li>
                <li>• The use is for educational or informational purposes only</li>
                <li>• No commercial gain is derived from the use</li>
                <li>• The reproduction does not substantially reproduce our entire content</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">8. Privacy and Data Collection</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Our Privacy Policy, which is incorporated into these Terms by reference, describes how we collect, use, and protect your information when you use our Service. By using our Service, you agree to the collection and use of information in accordance with our Privacy Policy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">9. Modifications to Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of significant changes by posting the new Terms on this page and updating the "Last updated" date at the top of these Terms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">10. Termination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Upon termination, your right to use the Service will cease immediately.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">11. Governing Law</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be interpreted and governed by the laws of the jurisdiction in which our service operates, without regard to its conflict of law provisions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">12. Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us through our contact page or via email.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}