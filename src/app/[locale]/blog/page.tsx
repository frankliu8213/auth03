'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ContentLayout from '@/components/layout/ContentLayout'
import { Search, Calendar, User, ArrowRight } from 'lucide-react'

const featuredPosts = [
  {
    id: 1,
    title: 'The Future of Transportation: Trends to Watch',
    excerpt:
      'Explore the latest trends shaping the future of transportation, from electric vehicles to autonomous driving technology.',
    image: 'https://picsum.photos/800/400?random=20',
    author: 'John Smith',
    date: 'March 15, 2024',
    category: 'Industry Trends',
  },
  {
    id: 2,
    title: 'Sustainable Transportation Solutions',
    excerpt:
      'Discover how sustainable transportation options are helping to reduce environmental impact and create a greener future.',
    image: 'https://picsum.photos/800/400?random=21',
    author: 'Sarah Johnson',
    date: 'March 10, 2024',
    category: 'Sustainability',
  },
]

const recentPosts = [
  {
    id: 3,
    title: 'Tips for Safe and Comfortable Travel',
    excerpt:
      'Learn essential tips for making your journey safe and comfortable, whether you are traveling for business or pleasure.',
    image: 'https://picsum.photos/400/300?random=22',
    author: 'Michael Chen',
    date: 'March 5, 2024',
    category: 'Travel Tips',
  },
  {
    id: 4,
    title: 'Business Travel: A Complete Guide',
    excerpt:
      'Everything you need to know about efficient business travel, from booking to expense management.',
    image: 'https://picsum.photos/400/300?random=23',
    author: 'Emma Davis',
    date: 'March 1, 2024',
    category: 'Business',
  },
  {
    id: 5,
    title: 'Understanding Transportation Regulations',
    excerpt:
      'A comprehensive guide to transportation regulations and compliance requirements for businesses and individuals.',
    image: 'https://picsum.photos/400/300?random=24',
    author: 'David Wilson',
    date: 'February 25, 2024',
    category: 'Regulations',
  },
]

const categories = [
  { name: 'All', count: 12 },
  { name: 'Industry Trends', count: 4 },
  { name: 'Sustainability', count: 3 },
  { name: 'Travel Tips', count: 5 },
  { name: 'Business', count: 3 },
  { name: 'Regulations', count: 2 },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const sidebar = (
    <div className="space-y-8">
      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B46C1]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      {/* Categories */}
      <div>
        <h3 className="font-medium text-gray-900 mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`block w-full text-left px-4 py-2 rounded-md ${
                activeCategory === category.name
                  ? 'bg-[#6B46C1] text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="font-medium text-gray-900 mb-2">Subscribe to Our Blog</h3>
        <p className="text-sm text-gray-600 mb-4">
          Get the latest articles and industry updates right in your inbox
        </p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B46C1]"
          />
          <button
            type="submit"
            className="w-full bg-[#6B46C1] text-white px-4 py-2 rounded-md hover:bg-[#5a3aa1]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )

  return (
    <ContentLayout
      breadcrumbs={[{ label: 'Blog', href: '/blog' }]}
      sidebar={sidebar}
      showSidebar={true}
    >
      <div className="space-y-12">
        {/* Featured Posts */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-[#6B46C1] mb-2">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-[#6B46C1] hover:text-[#5a3aa1] flex items-center"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Posts */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Recent Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-[#6B46C1] mb-2">
                    {post.category}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-[#6B46C1] hover:text-[#5a3aa1] flex items-center text-sm"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </ContentLayout>
  )
} 
