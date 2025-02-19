'use client'

import { useEffect, useState } from 'react'
import { DollarSign, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'

interface PriceSummaryProps {
  basePrice: number
  extras: string[]
  passengers: {
    adults: number
    children: number
    infants: number
  }
  isRoundtrip: boolean
  onProceed: () => void
}

const extraPrices = {
  'wifi': 5,
  'child-seat': 10,
  'luggage': 15,
  'pet': 20,
}

export default function PriceSummary({ 
  basePrice, 
  extras, 
  passengers, 
  isRoundtrip,
  onProceed 
}: PriceSummaryProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [total, setTotal] = useState(0)
  const t = useTranslations('booking')

  useEffect(() => {
    // Calculate base price
    let calculatedTotal = basePrice
    
    // Passenger costs
    calculatedTotal *= (passengers.adults + passengers.children * 0.5)
    
    // Extra service costs
    const extrasCost = extras.reduce((sum, extra) => sum + (extraPrices[extra as keyof typeof extraPrices] || 0), 0)
    calculatedTotal += extrasCost
    
    // Round trip price
    if (isRoundtrip) {
      calculatedTotal *= 1.8 // 20% discount for round trip
    }
    
    setTotal(calculatedTotal)
  }, [basePrice, extras, passengers, isRoundtrip])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">{t('priceSummary')}</h3>
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="text-[#6B46C1] hover:text-[#5a3aa1] font-medium"
          >
            {isVisible ? t('hideDetails') : t('showDetails')}
          </button>
        </div>

        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="space-y-3 mb-6"
            >
              <div className="flex justify-between text-gray-600">
                <span>{t('baseFare')}</span>
                <span>${basePrice}</span>
              </div>
              
              {passengers.adults > 0 && (
                <div className="flex justify-between text-gray-600">
                  <span>{t('adults')} (x{passengers.adults})</span>
                  <span>${basePrice * passengers.adults}</span>
                </div>
              )}
              
              {passengers.children > 0 && (
                <div className="flex justify-between text-gray-600">
                  <span>{t('children')} (x{passengers.children})</span>
                  <span>${basePrice * passengers.children * 0.5}</span>
                </div>
              )}
              
              {extras.map((extra) => (
                <div key={extra} className="flex justify-between text-gray-600">
                  <span>{t(extra)}</span>
                  <span>+${extraPrices[extra as keyof typeof extraPrices]}</span>
                </div>
              ))}
              
              {isRoundtrip && (
                <div className="flex justify-between text-[#6B46C1] font-medium">
                  <span>{t('roundTripDiscount')}</span>
                  <span>{t('discountAmount')}</span>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <div>
            <p className="text-sm text-gray-600">{t('totalPrice')}</p>
            <p className="text-2xl font-bold">${total}</p>
          </div>
          <button
            onClick={onProceed}
            className="bg-[#6B46C1] text-white px-6 py-3 rounded-md hover:bg-[#5a3aa1] flex items-center space-x-2"
          >
            <span>{t('proceed')}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  )
} 