import Image from 'next/image'
import ContentLayout from '@/components/layout/ContentLayout'
import FormLayout from '@/components/layout/FormLayout'
import { Mail, Phone, MapPin, MessageSquare, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const contactSteps = [
  {
    id: 1,
    name: 'Contact Information',
    description: 'Fill in your contact details',
    status: 'current' as const,
  },
]

const officeLocations = [
  {
    city: 'New York',
    address: '123 Business Avenue, NY 10001',
    phone: '+1 (212) 555-0123',
    email: 'nyc@transportease.com',
    image: 'https://picsum.photos/400/300?random=10',
  },
  {
    city: 'Los Angeles',
    address: '456 Sunset Boulevard, LA 90001',
    phone: '+1 (310) 555-0123',
    email: 'la@transportease.com',
    image: 'https://picsum.photos/400/300?random=11',
  },
  {
    city: 'Chicago',
    address: '789 Lake Street, CH 60601',
    phone: '+1 (312) 555-0123',
    email: 'chicago@transportease.com',
    image: 'https://picsum.photos/400/300?random=12',
  },
]

export default function ContactPage() {
  return (
    <ContentLayout
      breadcrumbs={[{ label: 'Contact', href: '/contact' }]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <FormLayout steps={contactSteps} currentStep={1}>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6B46C1] focus:ring-[#6B46C1]"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6B46C1] focus:ring-[#6B46C1]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6B46C1] focus:ring-[#6B46C1]"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6B46C1] focus:ring-[#6B46C1]"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6B46C1] focus:ring-[#6B46C1]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#6B46C1] text-white py-2 px-4 rounded-md hover:bg-[#5a3aa1]"
            >
              Send Message
            </button>
          </form>
        </FormLayout>

        {/* Contact Information */}
        <div className="space-y-8">
          {/* Quick Contact */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Quick Contact</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-[#6B46C1]" />
                <span>+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-[#6B46C1]" />
                <span>support@transportease.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MessageSquare className="h-5 w-5 text-[#6B46C1]" />
                <span>Live Chat Available 24/7</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-100 p-3 rounded-full hover:bg-gray-200"
              >
                <Facebook className="h-6 w-6 text-[#6B46C1]" />
              </a>
              <a
                href="#"
                className="bg-gray-100 p-3 rounded-full hover:bg-gray-200"
              >
                <Twitter className="h-6 w-6 text-[#6B46C1]" />
              </a>
              <a
                href="#"
                className="bg-gray-100 p-3 rounded-full hover:bg-gray-200"
              >
                <Instagram className="h-6 w-6 text-[#6B46C1]" />
              </a>
              <a
                href="#"
                className="bg-gray-100 p-3 rounded-full hover:bg-gray-200"
              >
                <Linkedin className="h-6 w-6 text-[#6B46C1]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Our Offices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {officeLocations.map((office, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={office.image}
                  alt={office.city}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{office.city}</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-[#6B46C1] mt-1" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[#6B46C1]" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-[#6B46C1]" />
                    <span>{office.email}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </ContentLayout>
  )
} 