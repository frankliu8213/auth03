'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { MapPin, Clock, Star, ArrowRight, Info, Calendar } from 'lucide-react'
import { popularDestinations } from '@/data'

export default function DestinationDetailPage() {
  const t = useTranslations()
  const params = useParams()
  const destination = popularDestinations.find(d => d.id === params.id)

  if (!destination) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">景点未找到</h1>
          <p className="mt-2 text-gray-600">抱歉，您请求的景点不存在。</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
        <Image
          src={destination.image}
          alt={t(`popularDestinations.destinations.${destination.id}.name`)}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">
              {t(`popularDestinations.destinations.${destination.id}.name`)}
            </h1>
            <div className="flex items-center justify-center space-x-2">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="text-xl">{destination.rating}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Destination Details */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">景点详情</h2>
            <p className="text-gray-600 mb-6">
              {t(`popularDestinations.destinations.${destination.id}.description`)}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4">
                <Clock className="h-5 w-5 text-[#6B46C1]" />
                <div>
                  <p className="font-medium">建议游览时间</p>
                  <p className="text-gray-600">{destination.duration}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Calendar className="h-5 w-5 text-[#6B46C1]" />
                <div>
                  <p className="font-medium">开放时间</p>
                  <p className="text-gray-600">09:00 - 17:30</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-5 w-5 text-[#6B46C1]" />
                <div>
                  <p className="font-medium">地址</p>
                  <p className="text-gray-600">市中心文化区</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Info className="h-5 w-5 text-[#6B46C1]" />
                <div>
                  <p className="font-medium">提示</p>
                  <p className="text-gray-600">建议提前预约</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-6">注意事项</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Star className="h-5 w-5 text-[#6B46C1] mt-1" />
                <p className="text-gray-600">请携带有效身份证件</p>
              </div>
              <div className="flex items-start space-x-3">
                <Star className="h-5 w-5 text-[#6B46C1] mt-1" />
                <p className="text-gray-600">景区内请保持安静</p>
              </div>
              <div className="flex items-start space-x-3">
                <Star className="h-5 w-5 text-[#6B46C1] mt-1" />
                <p className="text-gray-600">禁止携带食物和饮料入内</p>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-3xl font-bold text-[#6B46C1]">¥{destination.price}</p>
                <p className="text-sm text-gray-500">每人</p>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="font-medium">{destination.rating}</span>
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
              可免费取消
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 