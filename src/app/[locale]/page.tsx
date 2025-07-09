import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Copy, Menu, Sun, Moon, Globe, Check } from 'lucide-react'
import { Domain } from '@/types/domain'
import Script from 'next/script'
import { getAllBlogPosts } from '@/lib/blog'
import { useTranslations } from 'next-intl'
import ClientHome from './client-home'

interface HomePageProps {
  params: Promise<{ locale: string }>
}

export default async function Home({ params }: HomePageProps) {
  const { locale } = await params
  const blogPosts = getAllBlogPosts(locale).slice(0, 3) // Show latest 3 posts

  return <ClientHome locale={locale} blogPosts={blogPosts} />
}