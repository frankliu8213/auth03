import BookingForm from '@/components/features/BookingForm'

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Book Your Transportation
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fill in the details below to book your ride. We'll make sure you get to
            your destination safely and comfortably.
          </p>
        </div>

        <BookingForm />

        {/* Additional Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Instant Confirmation</h3>
            <p className="text-gray-600">
              Receive your booking confirmation immediately via email
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Flexible Booking</h3>
            <p className="text-gray-600">
              Easy modification and cancellation options available
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Our customer service team is always here to help
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 