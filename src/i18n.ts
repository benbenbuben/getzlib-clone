import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'zh', 'ja', 'hi'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/about': '/about',
    '/contact': '/contact',
    '/blog': '/blog',
    '/blog/[slug]': '/blog/[slug]',
    '/privacy': '/privacy',
    '/terms': '/terms',
  }
});

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation(routing);