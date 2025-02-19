import { getRequestConfig } from 'next-intl/server';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { locales, defaultLocale } from './settings';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming locale is valid
  if (!locales.includes(locale as any)) {
    locale = defaultLocale;
  }

  const messages = (await import(`../messages/${locale}.json`)).default;
  
  return {
    messages,
    locale,
    timeZone: 'Asia/Shanghai',
    now: new Date()
  };
});

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales }); 