'use client'

import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { X } from 'lucide-react'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [showNewsletter, setShowNewsletter] = useState(false)

  // Show newsletter popup after 5 seconds
  useState(() => {
    const timer = setTimeout(() => {
      setShowNewsletter(true)
    }, 5000)
    return () => clearTimeout(timer)
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />

      {/* Newsletter Popup */}
      {showNewsletter && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowNewsletter(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            <h3 className="text-2xl font-bold mb-4">Stay Updated!</h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for exclusive deals and updates.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B46C1]"
              />
              <button
                type="submit"
                className="w-full bg-[#6B46C1] text-white py-2 rounded-md hover:bg-[#5a3aa1]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
} 