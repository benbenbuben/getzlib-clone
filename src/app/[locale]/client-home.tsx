'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Copy, Menu, Sun, Moon, Globe, Check } from 'lucide-react'
import Domains from '@/components/domains'
import { Domain } from '@/types/domain'
import Script from 'next/script'
import { useTranslations } from 'next-intl'
import { BlogPost } from '@/lib/blog'
import ThemeToggle from '@/components/theme-toggle'

interface ClientHomeProps {
  locale: string
  blogPosts: BlogPost[]
}

export default function ClientHome({ locale, blogPosts }: ClientHomeProps) {
  const t = useTranslations()
  const [copiedText, setCopiedText] = useState('')
  const [mounted, setMounted] = useState(false)
  const [domain, setDomain] = useState<Domain | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
    // 获取最新域名
    const fetchDomain = async () => {
      try {
        const response = await fetch('/api/domains?t=' + Date.now())
        if (!response.ok) throw new Error('Failed to fetch domain')
        const data = await response.json()
        setDomain(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : t('status.error'))
      } finally {
        setLoading(false)
      }
    }
    fetchDomain()
  }, [t])

  const copyToClipboard = async (text: string) => {
    if (!mounted) return
    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(text)
      setTimeout(() => setCopiedText(''), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  // Get FAQ data directly from the message file
  const faqData = [
    { question: t('faq.items.0.question'), answer: t('faq.items.0.answer') },
    { question: t('faq.items.1.question'), answer: t('faq.items.1.answer') },
    { question: t('faq.items.2.question'), answer: t('faq.items.2.answer') },
    { question: t('faq.items.3.question'), answer: t('faq.items.3.answer') },
    { question: t('faq.items.4.question'), answer: t('faq.items.4.answer') },
    { question: t('faq.items.5.question'), answer: t('faq.items.5.answer') },
    { question: t('faq.items.6.question'), answer: t('faq.items.6.answer') },
    { question: t('faq.items.7.question'), answer: t('faq.items.7.answer') },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3879688830596920"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center gap-6 md:gap-8">
              <a className="flex items-center space-x-2" href={`/${locale}`}>
                <span className="font-bold text-lg md:text-xl">{t('hero.title')}</span>
              </a>
              <nav className="hidden md:flex items-center gap-6">
                <a href={`/${locale}`} className="text-sm font-medium hover:text-primary transition-colors">
                  {t('nav.home')}
                </a>
                <a href={`/${locale}/blog`} className="text-sm font-medium hover:text-primary transition-colors">
                  {t('nav.blog')}
                </a>
              </nav>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <div className="relative group">
                <Button variant="ghost" size="sm" className="gap-1">
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">{t('nav.language')}</span>
                </Button>
                <div className="absolute top-full right-0 mt-2 w-48 bg-background border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2 space-y-1">
                    <a href="/en" className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                      locale === 'en' ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground'
                    }`}>
                      {t('languages.en')}
                    </a>
                    <a href="/zh" className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                      locale === 'zh' ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground'
                    }`}>
                      {t('languages.zh')}
                    </a>
                    <a href="/ja" className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                      locale === 'ja' ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground'
                    }`}>
                      {t('languages.ja')}
                    </a>
                    <a href="/hi" className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                      locale === 'hi' ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground'
                    }`}>
                      {t('languages.hi')}
                    </a>
                  </div>
                </div>
              </div>
              <ThemeToggle />
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Open main menu</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-12 md:py-24 space-y-6 md:space-y-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight lg:text-5xl">
            {t('hero.title')}
          </h1>
          <p className="mx-auto max-w-2xl leading-normal text-muted-foreground text-base sm:text-xl sm:leading-8">
            {t('hero.subtitle')}
          </p>
        </section>

        {/* Latest Working Domains */}
        <section className="py-8 md:py-12">
          <Card className="p-4 md:p-8">
            <CardHeader className="p-0 mb-4 md:mb-6">
              <CardTitle className="text-xl md:text-2xl font-bold">{t('sections.latestDomains')}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-4">
                {loading ? (
                  <div className="p-4 text-center">{t('status.loading')}</div>
                ) : error ? (
                  <div className="p-4 text-center text-red-500">{error}</div>
                ) : !domain ? (
                  <div className="p-4 text-center">{t('status.noData')}</div>
                ) : (
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between p-4 md:p-6 rounded-lg border bg-background/50 gap-4">
                    <div className="flex items-center gap-2">
                      <a
                        href={domain.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-base md:text-lg break-all"
                      >
                        {domain.url}
                      </a>
                      {mounted && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-full flex-shrink-0"
                          onClick={() => copyToClipboard(domain.url)}
                          title={t('actions.copy')}
                        >
                          {copiedText === domain.url ? (
                            <Check className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      )}
                    </div>
                    <div className="flex items-center gap-4 md:flex-shrink-0">
                      <span className="text-green-500">●</span>
                      <span className="text-xs md:text-sm text-muted-foreground whitespace-nowrap">
                        {t('status.lastChecked')} {new Date(domain.lastChecked).toLocaleString()}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Magic Email */}
        <section className="py-8 md:py-12">
          <Card className="p-4 md:p-8">
            <CardHeader className="p-0 mb-4 md:mb-6">
              <CardTitle className="text-xl md:text-2xl font-bold">{t('sections.magicEmail')}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between p-4 md:p-6 rounded-lg border bg-background/50 gap-4">
                  <div className="flex items-center gap-2">
                    <a
                      href="mailto:blackbox@zbox.ph"
                      className="text-primary hover:underline text-base md:text-lg break-all"
                    >
                      blackbox@zbox.ph
                    </a>
                    {mounted && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full flex-shrink-0"
                        onClick={() => copyToClipboard('blackbox@zbox.ph')}
                        title={t('actions.copy')}
                      >
                        {copiedText === 'blackbox@zbox.ph' ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    )}
                  </div>
                  <div className="flex items-center gap-4 md:flex-shrink-0">
                    <span className="text-green-500">●</span>
                    <span className="text-xs md:text-sm text-muted-foreground whitespace-nowrap">
                      {t('status.lastChecked')} 2025-05-18 22:40:49
                    </span>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground ml-2">
                  {t('magicEmail.description')}
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="py-8 md:py-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-8">{t('sections.faq')}</h2>
          <div className="space-y-4 md:space-y-6">
            {faqData.map((faq) => (
              <Card key={faq.question} className="p-4 md:p-8">
                <CardHeader className="p-0 mb-3 md:mb-4">
                  <CardTitle className="text-lg md:text-xl font-semibold">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        {blogPosts.length > 0 && (
          <section className="py-8 md:py-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl md:text-2xl font-bold">{t('sections.blog')}</h2>
              <a 
                href={`/${locale}/blog`}
                className="text-primary hover:underline font-medium"
              >
                View all →
              </a>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-sm text-muted-foreground mb-2">
                      {new Date(post.date).toLocaleDateString(locale, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </div>
                    <CardTitle className="text-lg hover:text-primary transition-colors line-clamp-2">
                      <a href={`/${locale}/blog/${post.slug}`}>
                        {post.title}
                      </a>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {post.description}
                    </p>
                    <a 
                      href={`/${locale}/blog/${post.slug}`}
                      className="text-primary hover:underline text-sm font-medium"
                    >
                      {t('actions.readMore')}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t mt-12 md:mt-24 bg-background/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="py-8 md:py-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-base font-semibold mb-3 md:mb-4">{t('footer.about')}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t('footer.aboutText')}
                </p>
              </div>
            </div>

            <h3 className="text-base font-semibold mb-4 text-center md:text-left mt-8">{t('footer.languages')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <a className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                locale === 'en' ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground'
              }`} href="/en">
                <span>{t('languages.en')}</span>
              </a>
              <a className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                locale === 'zh' ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground'
              }`} href="/zh">
                <span>{t('languages.zh')}</span>
              </a>
              <a className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                locale === 'ja' ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground'
              }`} href="/ja">
                <span>{t('languages.ja')}</span>
              </a>
              <a className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                locale === 'hi' ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground'
              }`} href="/hi">
                <span>{t('languages.hi')}</span>
              </a>
            </div>

            <div className="mt-8 md:mt-10 pt-6 border-t flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <p className="text-center md:text-left text-xs md:text-sm text-muted-foreground">
                {t('footer.copyright')}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}