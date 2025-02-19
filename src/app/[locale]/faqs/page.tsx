'use client'

import { useState } from 'react'
import ContentLayout from '@/components/layout/ContentLayout'
import { Search, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react'

const faqCategories = [
  { id: 'booking', name: 'Booking Process' },
  { id: 'payment', name: 'Payment & Pricing' },
  { id: 'service', name: 'Service Information' },
  { id: 'cancellation', name: 'Cancellation & Refunds' },
  { id: 'account', name: 'Account Management' },
]

const faqs = [
  {
    category: 'booking',
    question: 'How do I make a booking?',
    answer:
      'You can make a booking through our website or mobile app. Simply enter your pickup and drop-off locations, select your preferred date and time, and follow the booking process.',
  },
  {
    category: 'booking',
    question: 'Can I book a ride for someone else?',
    answer:
      'Yes, you can book a ride for someone else. Just make sure to provide their contact information during the booking process.',
  },
  {
    category: 'payment',
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards, debit cards, and digital payment methods including PayPal and Apple Pay.',
  },
  {
    category: 'payment',
    question: 'How is the fare calculated?',
    answer:
      'Fares are calculated based on distance, time of day, and vehicle type. You can see the estimated fare before confirming your booking.',
  },
  {
    category: 'service',
    question: 'What types of vehicles are available?',
    answer:
      'We offer a range of vehicles including sedans, SUVs, and luxury vehicles to meet your transportation needs.',
  },
  {
    category: 'cancellation',
    question: 'What is your cancellation policy?',
    answer:
      'You can cancel your booking up to 24 hours before the scheduled pickup time for a full refund. Cancellations within 24 hours may incur a fee.',
  },
  {
    category: 'account',
    question: 'How do I create an account?',
    answer:
      'You can create an account by clicking the "Sign Up" button and following the registration process. You will need to provide your email and create a password.',
  },
]

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState('booking')
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedQuestions, setExpandedQuestions] = useState<string[]>([])

  const toggleQuestion = (question: string) => {
    setExpandedQuestions((prev) =>
      prev.includes(question)
        ? prev.filter((q) => q !== question)
        : [...prev, question]
    )
  }

  const filteredFaqs = faqs.filter(
    (faq) =>
      (activeCategory === 'all' || faq.category === activeCategory) &&
      (faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const sidebar = (
    <div className="space-y-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search FAQs..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B46C1]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-2">
        <h3 className="font-medium text-gray-900">Categories</h3>
        {faqCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`block w-full text-left px-4 py-2 rounded-md ${
              activeCategory === category.id
                ? 'bg-[#6B46C1] text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Support CTA */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium text-gray-900 mb-2">Need More Help?</h3>
        <p className="text-sm text-gray-600 mb-4">
          Contact our support team for assistance
        </p>
        <button className="w-full flex items-center justify-center space-x-2 bg-[#6B46C1] text-white px-4 py-2 rounded-md hover:bg-[#5a3aa1]">
          <MessageSquare className="h-5 w-5" />
          <span>Contact Support</span>
        </button>
      </div>
    </div>
  )

  return (
    <ContentLayout
      breadcrumbs={[{ label: 'FAQs', href: '/faqs' }]}
      sidebar={sidebar}
      showSidebar={true}
    >
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600">
            Find answers to common questions about our services. Cannot find what
            you are looking for? Contact our support team.
          </p>
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(faq.question)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {expandedQuestions.includes(faq.question) ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {expandedQuestions.includes(faq.question) && (
                <div className="px-4 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </ContentLayout>
  )
} 