'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight, Menu } from 'lucide-react'

interface Breadcrumb {
  label: string
  href: string
}

interface ContentLayoutProps {
  children: React.ReactNode
  breadcrumbs?: Breadcrumb[]
  sidebar?: React.ReactNode
  showSidebar?: boolean
}

export default function ContentLayout({
  children,
  breadcrumbs = [],
  sidebar,
  showSidebar = false,
}: ContentLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      {breadcrumbs.length > 0 && (
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex py-4" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-4">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-gray-700">
                    Home
                  </Link>
                </li>
                {breadcrumbs.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                    <Link
                      href={item.href}
                      className={`ml-4 ${
                        index === breadcrumbs.length - 1
                          ? 'text-gray-700 font-medium'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                      aria-current={
                        index === breadcrumbs.length - 1 ? 'page' : undefined
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar for desktop */}
          {showSidebar && sidebar && (
            <aside className="hidden md:block w-64 flex-shrink-0">
              {sidebar}
            </aside>
          )}

          {/* Mobile sidebar toggle */}
          {showSidebar && sidebar && (
            <div className="md:hidden">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <Menu className="h-6 w-6" />
                <span>Menu</span>
              </button>
            </div>
          )}

          {/* Mobile sidebar */}
          {showSidebar && sidebar && isSidebarOpen && (
            <div className="fixed inset-0 z-40 md:hidden">
              <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setIsSidebarOpen(false)} />
              <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
                <div className="p-4">
                  {sidebar}
                </div>
              </div>
            </div>
          )}

          {/* Main content */}
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
} 