import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface PrivacyPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PrivacyPageProps) {
  const { locale } = await params
  return {
    title: `Privacy Policy - Z-Library Links`,
    description: 'Privacy Policy for Z-Library Links - Learn how we collect, use, and protect your information.',
  }
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: January 8, 2025
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">1. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-semibold">Information You Provide</h3>
              <p className="text-muted-foreground leading-relaxed">
                We only collect information that you voluntarily provide to us when you:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Contact us through our contact forms or email</li>
                <li>• Subscribe to our newsletter (if available)</li>
                <li>• Participate in surveys or feedback forms</li>
              </ul>

              <h3 className="font-semibold mt-6">Automatically Collected Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                When you visit our website, we may automatically collect certain information including:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• IP address and general location information</li>
                <li>• Browser type and version</li>
                <li>• Device information (mobile, desktop, etc.)</li>
                <li>• Pages visited and time spent on our website</li>
                <li>• Referring website information</li>
                <li>• Language preferences</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">2. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We use the information we collect for the following purposes:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• To provide and maintain our service</li>
                <li>• To respond to your inquiries and support requests</li>
                <li>• To improve our website and user experience</li>
                <li>• To analyze website traffic and usage patterns</li>
                <li>• To detect and prevent technical issues</li>
                <li>• To comply with legal obligations</li>
                <li>• To send you important updates about our service (with your consent)</li>
              </ul>
              
              <div className="bg-muted/50 p-4 rounded-lg mt-4">
                <p className="text-muted-foreground text-sm">
                  <strong>Important:</strong> We never sell, rent, or trade your personal information to third parties for marketing purposes.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">3. Cookies and Tracking Technologies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="font-semibold">Essential Cookies</h3>
              <p className="text-muted-foreground leading-relaxed">
                We use essential cookies that are necessary for our website to function properly, including:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Language preference storage</li>
                <li>• Theme preferences (dark/light mode)</li>
                <li>• Session management</li>
              </ul>

              <h3 className="font-semibold mt-6">Analytics Cookies</h3>
              <p className="text-muted-foreground leading-relaxed">
                We use Google Analytics to understand how visitors use our website. This helps us improve our service and content. Google Analytics may collect:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Pages visited and time spent on each page</li>
                <li>• Geographic location (country/city level)</li>
                <li>• Device and browser information</li>
                <li>• Traffic sources and referral information</li>
              </ul>

              <h3 className="font-semibold mt-6">Advertising</h3>
              <p className="text-muted-foreground leading-relaxed">
                We may display advertisements through Google AdSense. Google may use cookies to show you relevant ads based on your interests. You can control ad personalization through your Google account settings.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">4. Information Sharing and Disclosure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:
              </p>
              
              <h3 className="font-semibold">Service Providers</h3>
              <p className="text-muted-foreground leading-relaxed">
                We may share information with trusted third-party service providers who assist us in operating our website, such as:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Web hosting services</li>
                <li>• Analytics providers (Google Analytics)</li>
                <li>• Email service providers (for contact responses)</li>
                <li>• Content delivery networks</li>
              </ul>

              <h3 className="font-semibold mt-6">Legal Requirements</h3>
              <p className="text-muted-foreground leading-relaxed">
                We may disclose your information if required by law or in good faith belief that such action is necessary to:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Comply with legal obligations</li>
                <li>• Protect and defend our rights or property</li>
                <li>• Prevent or investigate possible wrongdoing</li>
                <li>• Protect user safety</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">5. Data Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• HTTPS encryption for all data transmission</li>
                <li>• Regular security audits and updates</li>
                <li>• Access controls and authentication measures</li>
                <li>• Secure data storage practices</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">6. Data Retention</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Contact form submissions: 2 years from last contact</li>
                <li>• Analytics data: 26 months (Google Analytics default)</li>
                <li>• Email communications: Until you request deletion</li>
                <li>• Website logs: 90 days</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">7. Your Rights and Choices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              
              <h3 className="font-semibold">Access and Portability</h3>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Request a copy of your personal information</li>
                <li>• Request information about how we use your data</li>
              </ul>

              <h3 className="font-semibold mt-4">Correction and Deletion</h3>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Correct inaccurate personal information</li>
                <li>• Request deletion of your personal information</li>
              </ul>

              <h3 className="font-semibold mt-4">Control and Objection</h3>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Opt out of marketing communications</li>
                <li>• Disable cookies through your browser settings</li>
                <li>• Object to certain processing activities</li>
              </ul>

              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise these rights, please contact us using the information provided in our Contact section.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">8. International Data Transfers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Our website may be accessed from around the world. If you are visiting from the European Union or other regions with laws governing data collection and use, your information may be transferred to countries that do not have the same data protection laws as your jurisdiction.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When we transfer your information, we ensure appropriate safeguards are in place to protect your privacy and rights.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">9. Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Our service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete such information.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">10. Changes to This Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">11. Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Through our contact page</li>
                <li>• By email for privacy-specific inquiries</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                We will respond to privacy-related inquiries within 30 days of receipt.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}