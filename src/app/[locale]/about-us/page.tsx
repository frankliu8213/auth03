import Image from 'next/image'
import ContentLayout from '@/components/layout/ContentLayout'
import { useTranslations } from 'next-intl'

const teamMembers = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    image: 'https://picsum.photos/200/200?random=1',
    bio: 'Over 15 years of experience in transportation industry.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Operations Director',
    image: 'https://picsum.photos/200/200?random=2',
    bio: 'Expert in logistics and customer service excellence.',
  },
  {
    name: 'Michael Chen',
    role: 'Technology Lead',
    image: 'https://picsum.photos/200/200?random=3',
    bio: 'Driving innovation in transportation technology.',
  },
  {
    name: 'Emma Davis',
    role: 'Customer Relations',
    image: 'https://picsum.photos/200/200?random=4',
    bio: 'Dedicated to creating exceptional customer experiences.',
  },
]

const timeline = [
  {
    year: '2018',
    title: 'Company Founded',
    description:
      'TransportEase was established with a vision to revolutionize transportation.',
  },
  {
    year: '2019',
    title: 'Regional Expansion',
    description: 'Expanded services to cover major cities in the region.',
  },
  {
    year: '2020',
    title: 'Technology Integration',
    description: 'Launched our innovative booking platform and mobile app.',
  },
  {
    year: '2021',
    title: 'Service Excellence Award',
    description: 'Recognized for outstanding customer service and reliability.',
  },
  {
    year: '2023',
    title: 'Sustainability Initiative',
    description: 'Introduced eco-friendly vehicles to our fleet.',
  },
]

const testimonials = [
  {
    quote:
      "TransportEase has transformed how we handle our transportation needs. Their service is exceptional!",
    author: 'David Wilson',
    company: 'Tech Solutions Inc.',
  },
  {
    quote:
      "Reliable, professional, and always on time. The best transportation service we have ever used.",
    author: 'Lisa Anderson',
    company: 'Global Enterprises',
  },
]

export default function AboutPage() {
  const t = useTranslations('about')

  return (
    <ContentLayout>
      {/* Hero Section */}
      <section className="relative h-[400px] -mt-8 mb-16">
        <Image
          src="https://picsum.photos/1920/400?random=5"
          alt={t('heroAlt')}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">{t('heroTitle')}</h1>
            <p className="text-xl max-w-2xl mx-auto">
              {t('heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mb-16 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">{t('missionTitle')}</h2>
        <p className="text-xl text-gray-600">
          {t('missionText')}
        </p>
      </section>

      {/* Timeline */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('journeyTitle')}</h2>
        <div className="max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="flex gap-8 mb-8 relative before:absolute before:left-[2.5rem] before:top-0 before:h-full before:w-px before:bg-gray-200 last:before:hidden"
            >
              <div className="w-20 h-20 bg-[#6B46C1] text-white rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                {item.year}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t(`timeline.${index}.title`)}</h3>
                <p className="text-gray-600">{t(`timeline.${index}.description`)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('teamTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={t(`team.${index}.name`)}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t(`team.${index}.name`)}</h3>
              <p className="text-[#6B46C1] mb-2">{t(`team.${index}.role`)}</p>
              <p className="text-gray-600">{t(`team.${index}.bio`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-16 bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t('testimonialsTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <p className="text-lg mb-4 italic text-gray-600">
                  "{t(`testimonials.${index}.quote`)}"
                </p>
                <div>
                  <p className="font-semibold">{t(`testimonials.${index}.author`)}</p>
                  <p className="text-gray-500">{t(`testimonials.${index}.company`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ContentLayout>
  )
} 
