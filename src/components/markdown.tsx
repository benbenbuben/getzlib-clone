'use client'

import { FC, useMemo } from 'react'

interface MarkdownProps {
  content: string
}

export const Markdown: FC<MarkdownProps> = ({ content }) => {
  const htmlContent = useMemo(() => {
    // Simple markdown to HTML converter
    // This is a basic implementation - in production you'd want to use a proper markdown parser
    let html = content
      // Headers
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mb-4 mt-6">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mb-6 mt-8">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mb-8 mt-10">$1</h1>')
      // Bold
      .replace(/\*\*(.*)\*\*/gim, '<strong class="font-semibold">$1</strong>')
      // Italic
      .replace(/\*(.*)\*/gim, '<em class="italic">$1</em>')
      // Code
      .replace(/`([^`]*)`/gim, '<code class="bg-muted px-2 py-1 rounded text-sm">$1</code>')
      // Links
      .replace(/\[([^\]]*)\]\(([^\)]*)\)/gim, '<a href="$2" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">$1</a>')
      // Line breaks
      .replace(/\n\n/gim, '</p><p class="mb-4">')
      // Lists
      .replace(/^\* (.*$)/gim, '<li class="mb-2">$1</li>')
      .replace(/(<li.*<\/li>)/g, '<ul class="list-disc list-inside mb-4 space-y-2">$1</ul>')

    // Wrap in paragraphs
    if (!html.startsWith('<')) {
      html = '<p class="mb-4">' + html + '</p>'
    }

    return html
  }, [content])

  return (
    <div 
      className="prose prose-neutral dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  )
}