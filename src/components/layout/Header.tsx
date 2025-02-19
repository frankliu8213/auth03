'use client'

import { Menu } from 'lucide-react'
import { Link, usePathname } from '@/i18n/request'
import { useTranslations } from 'next-intl'
import LanguageSwitcher from '@/components/features/LanguageSwitcher'

export default function Header() {
  const t = useTranslations('navigation')
  const pathname = usePathname()

  const navigation = [
    { name: t('booking'), href: '/booking' },
    { name: t('aboutUs'), href: '/about-us' },
    { name: t('contact'), href: '/contact' },
    { name: t('faqs'), href: '/faqs' },
    { name: t('blog'), href: '/blog' }
  ]

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-black">TransportEase</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-gray-700 hover:text-black ${
                  pathname === item.href ? 'font-medium' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Link
              href="/booking"
              className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#6B46C1] hover:bg-[#5a3aa1]"
            >
              {t('bookNow')}
            </Link>
            <button className="md:hidden p-2">
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
} 