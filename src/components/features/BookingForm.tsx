'use client'

import { useState } from 'react'
import { MapPin, Calendar, Users, Clock, ArrowRight } from 'lucide-react'

export default function BookingForm() {
  const [isRoundtrip, setIsRoundtrip] = useState(false)
  const [isAutomatedTime, setIsAutomatedTime] = useState(true)

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Book Your Ride</h2>

      {/* Trip Type Toggle */}
      <div className="mb-6">
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded-md ${
              !isRoundtrip
                ? 'bg-[#6B46C1] text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
            onClick={() => setIsRoundtrip(false)}
          >
            One Way
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              isRoundtrip
                ? 'bg-[#6B46C1] text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
            onClick={() => setIsRoundtrip(true)}
          >
            Round Trip
          </button>
        </div>
      </div>

      {/* Pickup Details */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center space-x-4">
          <MapPin className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Pickup Location"
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B46C1]"
          />
        </div>
        <div className="flex items-center space-x-4">
          <MapPin className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Drop-off Location"
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B46C1]"
          />
        </div>
      </div>

      {/* Date & Time Selection */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center space-x-4">
          <Calendar className="h-5 w-5 text-gray-400" />
          <input
            type="date"
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B46C1]"
          />
        </div>

        {/* Time Selection Toggle */}
        <div className="space-y-2">
          <div className="flex space-x-4">
            <button
              className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
                isAutomatedTime
                  ? 'bg-[#6B46C1] text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
              onClick={() => setIsAutomatedTime(true)}
            >
              <Clock className="h-4 w-4" />
              <span>Automated Time</span>
            </button>
            <button
              className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
                !isAutomatedTime
                  ? 'bg-[#6B46C1] text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
              onClick={() => setIsAutomatedTime(false)}
            >
              <Clock className="h-4 w-4" />
              <span>Manual Time</span>
            </button>
          </div>
          {!isAutomatedTime && (
            <input
              type="time"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6B46C1]"
            />
          )}
        </div>
      </div>

      {/* Passenger Configuration */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-gray-400" />
            <span>Passengers</span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              -
            </button>
            <span className="w-8 text-center">1</span>
            <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              +
            </button>
          </div>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="mb-6">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="rounded text-[#6B46C1]" />
          <span className="text-sm text-gray-600">
            I agree to the terms and conditions
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <button className="w-full bg-[#6B46C1] text-white py-3 rounded-md flex items-center justify-center space-x-2 hover:bg-[#5a3aa1]">
        <span>Continue to Payment</span>
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  )
} 