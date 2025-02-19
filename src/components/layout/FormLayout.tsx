'use client'

import { Check } from 'lucide-react'

interface Step {
  id: number
  name: string
  description: string
  status: 'complete' | 'current' | 'upcoming'
}

interface FormLayoutProps {
  children: React.ReactNode
  steps: Step[]
  currentStep: number
}

export default function FormLayout({
  children,
  steps,
  currentStep,
}: FormLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Steps */}
        <nav aria-label="Progress">
          <ol className="overflow-hidden">
            {steps.map((step, stepIdx) => (
              <li
                key={step.id}
                className={`relative ${
                  stepIdx !== steps.length - 1 ? 'pb-10' : ''
                }`}
              >
                {stepIdx !== steps.length - 1 && (
                  <div
                    className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                    aria-hidden="true"
                  />
                )}
                <div className="group relative flex items-start">
                  <span className="flex h-9 items-center">
                    {step.status === 'complete' ? (
                      <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#6B46C1]">
                        <Check className="h-5 w-5 text-white" />
                      </span>
                    ) : step.status === 'current' ? (
                      <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#6B46C1] bg-white">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#6B46C1]" />
                      </span>
                    ) : (
                      <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white">
                        <span className="h-2.5 w-2.5 rounded-full bg-transparent" />
                      </span>
                    )}
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span
                      className={`text-sm font-medium ${
                        step.status === 'complete'
                          ? 'text-[#6B46C1]'
                          : step.status === 'current'
                          ? 'text-[#6B46C1]'
                          : 'text-gray-500'
                      }`}
                    >
                      {step.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {step.description}
                    </span>
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </nav>

        {/* Form Content */}
        <div className="mt-8 bg-white rounded-lg shadow-sm">
          <div className="px-4 py-5 sm:p-6">{children}</div>
        </div>
      </div>
    </div>
  )
} 