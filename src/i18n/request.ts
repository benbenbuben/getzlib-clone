import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  // Default to 'en' if no locale is provided
  const locale = await requestLocale || 'en';

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});