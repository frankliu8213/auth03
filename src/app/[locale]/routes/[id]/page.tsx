'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { MapPin, Clock, Users, Star, ArrowRight } from 'lucide-react'
import { specialRoutes } from '@/data'

export default function RouteDetailPage() {
  const t = useTranslations()
  const params = useParams()
  const route = specialRoutes.find(r => r.id === params.id)

  if (!route) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">路线未找到</h1>
          <p className="mt-2 text-gray-600">抱歉，您请求的路线不存在。</p>
        </div>
      </div>
    )
  }

  // 获取所有feature的键
  const featureKeys = ['feature1', 'feature2', 'feature3']
  const features = featureKeys.map(key => 
    t(`specialRoutes.routes.${route.id}.features.${key}`)
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
        <Image
          src={route.image}
          alt={t(`specialRoutes.routes.${route.id}.title`)}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">
              {t(`specialRoutes.routes.${route.id}.title`)}
            </h1>
            <p className="text-xl">
              {t(`specialRoutes.routes.${route.id}.from`)} → {t(`specialRoutes.routes.${route.id}.to`)}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Route Details */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">路线详情</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <MapPin className="h-5 w-5 text-[#6B46C1]" />
                <div>
                  <p className="font-medium">行程路线</p>
                  <p className="text-gray-600">
                    {t(`specialRoutes.routes.${route.id}.from`)} → {t(`specialRoutes.routes.${route.id}.to`)}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="h-5 w-5 text-[#6B46C1]" />
                <div>
                  <p className="font-medium">预计时间</p>
                  <p className="text-gray-600">约45分钟</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Users className="h-5 w-5 text-[#6B46C1]" />
                <div>
                  <p className="font-medium">建议人数</p>
                  <p className="text-gray-600">1-4人</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">服务特色</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
                >
                  <Star className="h-5 w-5 text-[#6B46C1]" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-sm text-gray-500 line-through">¥{route.originalPrice}</p>
                <p className="text-3xl font-bold text-[#6B46C1]">¥{route.discountPrice}</p>
              </div>
              <div className="bg-[#6B46C1] text-white px-3 py-1 rounded-md">
                {t('specialRoutes.save')} {route.savings}
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#6B46C1] text-white py-3 rounded-md flex items-center justify-center space-x-2 hover:bg-[#5a3aa1]"
            >
              <span>立即预订</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
            <p className="text-sm text-gray-500 mt-4 text-center">
              价格包含所有税费
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 
