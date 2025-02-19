import createMiddleware from 'next-intl/middleware';
import { defaultLocale } from './i18n/settings';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'zh', 'es'],
  
  // Used when no locale matches
  defaultLocale,

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  localePrefix: 'always'
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 