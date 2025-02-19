'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface PassengerType {
  label: string
  count: number
  description: string
}

interface PassengerSelectorProps {
  passengers: {
    adults: number
    children: number
    infants: number
  }
  onChange: (type: 'adults' | 'children' | 'infants', value: number) => void
}

export default function PassengerSelector({ passengers, onChange }: PassengerSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('booking')

  const passengerTypes: { [key: string]: PassengerType } = {
    adults: {
      label: t('adults'),
      count: passengers.adults,
      description: t('adultsDescription'),
    },
    children: {
      label: t('children'),
      count: passengers.children,
      description: t('childrenDescription'),
    },
    infants: {
      label: t('infants'),
      count: passengers.infants,
      description: t('infantsDescription'),
    },
  }

  const handleIncrement = (type: 'adults' | 'children' | 'infants') => {
    onChange(type, passengers[type] + 1)
  }

  const handleDecrement = (type: 'adults' | 'children' | 'infants') => {
    if (passengers[type] > 0) {
      onChange(type, passengers[type] - 1)
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-2 bg-gray-50 border border-gray-200 rounded-md text-left"
      >
        {`${passengers.adults} ${t('adults')}, ${passengers.children} ${t('children')}, ${passengers.infants} ${t('infants')}`}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg p-4 z-50">
          {Object.entries(passengerTypes).map(([type, info]) => (
            <div key={type} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
              <div>
                <h4 className="font-medium">{info.label}</h4>
                <p className="text-sm text-gray-600">{info.description}</p>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleDecrement(type as 'adults' | 'children' | 'infants')}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                  disabled={info.count === 0}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center">{info.count}</span>
                <button
                  onClick={() => handleIncrement(type as 'adults' | 'children' | 'infants')}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 