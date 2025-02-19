'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface Extra {
  id: string
  name: string
  description: string
  price: number
}

interface ExtrasSelectorProps {
  selectedExtras: string[]
  onChange: (extras: string[]) => void
}

const availableExtras: Extra[] = [
  {
    id: 'wifi',
    name: 'In-car WiFi',
    description: 'Stay connected throughout your journey',
    price: 5,
  },
  {
    id: 'child-seat',
    name: 'Child Seat',
    description: 'Safe seating for children',
    price: 10,
  },
  {
    id: 'luggage',
    name: 'Extra Luggage',
    description: 'Additional space for your belongings',
    price: 15,
  },
  {
    id: 'pet',
    name: 'Pet Transport',
    description: 'Safe transport for your pets',
    price: 20,
  },
]

export default function ExtrasSelector({ selectedExtras, onChange }: ExtrasSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('booking')

  const toggleExtra = (extraId: string) => {
    const newExtras = selectedExtras.includes(extraId)
      ? selectedExtras.filter(id => id !== extraId)
      : [...selectedExtras, extraId]
    onChange(newExtras)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-2 bg-gray-50 border border-gray-200 rounded-md text-left"
      >
        {selectedExtras.length === 0 
          ? t('chooseExtras')
          : t('extrasSelected', { count: selectedExtras.length })}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg p-4 z-50">
          {availableExtras.map((extra) => (
            <div
              key={extra.id}
              onClick={() => toggleExtra(extra.id)}
              className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0 cursor-pointer hover:bg-gray-50"
            >
              <div className="flex items-center space-x-3">
                <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                  selectedExtras.includes(extra.id)
                    ? 'bg-[#6B46C1] border-[#6B46C1]'
                    : 'border-gray-300'
                }`}>
                  {selectedExtras.includes(extra.id) && (
                    <Check className="h-3 w-3 text-white" />
                  )}
                </div>
                <div>
                  <h4 className="font-medium">{extra.name}</h4>
                  <p className="text-sm text-gray-600">{extra.description}</p>
                </div>
              </div>
              <span className="text-[#6B46C1] font-medium">+${extra.price}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 