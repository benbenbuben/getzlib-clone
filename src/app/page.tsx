'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Copy, Menu, Sun, Moon, Globe, Check } from 'lucide-react'
import Domains from '@/components/domains'
import { Domain } from '@/types/domain'

export default function Home() {
  const [isDark, setIsDark] = useState(false)
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
        const response = await fetch('/api/domains')
        if (!response.ok) throw new Error('Failed to fetch domain')
        const data = await response.json()
        setDomain(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }
    fetchDomain()
  }, [])

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

  const faqData = [
    {
      question: "What is Z-Library?",
      answer: "Z-Library is a shadow library project for file-sharing access to scholarly journal articles, academic texts, and general-interest books. As one of the world's largest online libraries, Z-Library provides access to millions of books and articles."
    },
    {
      question: "Is Z-Library legal?",
      answer: "The legal status of Z-Library varies by jurisdiction. While Z-Library operates as a resource for educational materials, many countries have copyright laws that may restrict some of Z-Library's activities. We recommend checking your local laws and regulations before using Z-Library services."
    },
    {
      question: "Why do Z-Library domains change?",
      answer: "Z-Library domains change frequently due to various legal challenges and copyright enforcement actions. As a shadow library, Z-Library adapts by changing domain names to maintain service availability. We help track the latest working Z-Library domains."
    },
    {
      question: "How can I access Z-Library when official domains are blocked?",
      answer: "When official Z-Library domains are blocked, you can use alternative access methods such as the Z-Library Tor network, Z-Library mirror sites, or Z-Library's personal domains. Our website provides up-to-date information on the latest Z-Library access points."
    },
    {
      question: "Do I need an account to use Z-Library?",
      answer: "While Z-Library allows basic access without registration, creating a free Z-Library account provides benefits such as increased download limits, personal Z-Library domain, and better Z-Library service features. Z-Library also offers premium accounts with additional privileges."
    },
    {
      question: "Is it safe to use Z-Library?",
      answer: "Z-Library itself focuses on providing access to books and articles, but as with any online service, users should practice standard internet safety. When accessing Z-Library, use trusted links (like those we verify), avoid suspicious download prompts, and consider using a VPN for additional privacy when visiting Z-Library sites."
    },
    {
      question: "What's the difference between Z-Library and other digital libraries?",
      answer: "Z-Library distinguishes itself from other digital libraries by its vast collection size (millions of books and articles), free access model, and resilient infrastructure. Unlike many official digital libraries, Z-Library operates independently of traditional publishing constraints, allowing it to provide broader access to materials."
    },
    {
      question: "What file formats does Z-Library support?",
      answer: "Z-Library supports multiple e-book and document formats, including PDF, EPUB, MOBI, AZW, AZW3, FB2, and more. This makes Z-Library compatible with virtually all e-readers, tablets, and computers, providing flexibility for how you access and read Z-Library content."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center gap-6 md:gap-8">
              <a className="flex items-center space-x-2" href="/en">
                <span className="font-bold text-lg md:text-xl">Get Z-Library</span>
              </a>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <Button variant="ghost" size="sm" className="gap-1">
                <Globe className="h-4 w-4" />
              </Button>
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsDark(!isDark)}
                  className="h-8 w-8 md:h-9 md:w-9"
                >
                  {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  <span className="sr-only">Toggle theme</span>
                </Button>
              )}
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
            Get Z-Library
          </h1>
          <p className="mx-auto max-w-2xl leading-normal text-muted-foreground text-base sm:text-xl sm:leading-8">
            Find the latest working links to Z-Library
          </p>
        </section>

        {/* Latest Working Domains */}
        <section className="py-8 md:py-12">
          <Card className="p-4 md:p-8">
            <CardHeader className="p-0 mb-4 md:mb-6">
              <CardTitle className="text-xl md:text-2xl font-bold">Latest Working Domains</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-4">
                {loading ? (
                  <div className="p-4 text-center">Loading domain...</div>
                ) : error ? (
                  <div className="p-4 text-center text-red-500">{error}</div>
                ) : !domain ? (
                  <div className="p-4 text-center">No domain found.</div>
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
                          title="Copy to clipboard"
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
                        Last checked: {new Date(domain.lastChecked).toLocaleString()}
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
              <CardTitle className="text-xl md:text-2xl font-bold">Magic Email</CardTitle>
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
                        title="Copy to clipboard"
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
                      Last checked: 2025-05-18 22:40:49
                    </span>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground ml-2">
                  Send any message to this email and you will receive the latest Z-Library access link within 3-5 minutes.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="py-8 md:py-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-8">Frequently Asked Questions</h2>
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
      </main>

      {/* Footer */}
      <footer className="border-t mt-12 md:mt-24 bg-background/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="py-8 md:py-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-base font-semibold mb-3 md:mb-4">About</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We help users find the latest working Z-Library domains.
                </p>
              </div>
            </div>

            {/* 删除 Available Languages 区块 */}
            {/*
            <h3 className="text-base font-semibold mb-4 text-center md:text-left">Available Languages</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a className="flex items-center gap-2 px-3 py-2 rounded-md transition-colors bg-primary/10 text-primary font-medium" href="/en">
                <span>English</span>
              </a>
              <a className="flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-muted/50 text-muted-foreground hover:text-foreground" href="/zh">
                <span>中文</span>
              </a>
              <a className="flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-muted/50 text-muted-foreground hover:text-foreground" href="/ja">
                <span>日本語</span>
              </a>
              <a className="flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-muted/50 text-muted-foreground hover:text-foreground" href="/hi">
                <span>हिन्दी</span>
              </a>
            </div>
            */}

            <div className="mt-8 md:mt-10 pt-6 border-t flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <p className="text-center md:text-left text-xs md:text-sm text-muted-foreground">
                © 2025 Z-Library Links. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
