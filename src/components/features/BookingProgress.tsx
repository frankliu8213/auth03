'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface Step {
  title: string
  description: string
}

interface BookingProgressProps {
  steps: Step[]
  currentStep: number
  onStepClick?: (step: number) => void
}

export default function BookingProgress({ steps, currentStep, onStepClick }: BookingProgressProps) {
  return (
    <div className="w-full">
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute top-5 left-0 w-full h-1 bg-gray-200">
          <motion.div
            className="h-full bg-[#6B46C1]"
            initial={{ width: '0%' }}
            animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Steps */}
        <div className="relative flex justify-between">
          {steps.map((step, index) => {
            const isCompleted = index < currentStep
            const isCurrent = index === currentStep

            return (
              <div
                key={index}
                className="flex flex-col items-center"
                onClick={() => onStepClick?.(index)}
              >
                <motion.div
                  className={`w-10 h-10 rounded-full flex items-center justify-center relative cursor-pointer
                    ${isCompleted ? 'bg-[#6B46C1]' : isCurrent ? 'bg-white border-2 border-[#6B46C1]' : 'bg-white border-2 border-gray-200'}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isCompleted ? (
                    <Check className="h-5 w-5 text-white" />
                  ) : (
                    <span className={`${isCurrent ? 'text-[#6B46C1]' : 'text-gray-400'}`}>
                      {index + 1}
                    </span>
                  )}

                  {/* Tooltip */}
                  <motion.div
                    className="absolute bottom-full mb-2 bg-black text-white text-sm px-3 py-1 rounded whitespace-nowrap"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {step.title}
                  </motion.div>
                </motion.div>
                
                <motion.div
                  className="mt-2 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <p className={`text-sm font-medium ${isCurrent ? 'text-[#6B46C1]' : 'text-gray-600'}`}>
                    {step.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1 max-w-[120px]">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
} 