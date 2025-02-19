'use client'

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from 'next-intl';
import { 
  ArrowRight, Car, Clock, Shield, Star, MapPin, Calendar, DollarSign, Compass,
  Plane, Train, Bus, Briefcase, Heart, Award, Gift, Sparkles, Navigation2,
  Zap, CheckCircle2, ThumbsUp, Users, Coffee, Headphones
} from "lucide-react";
import { useBookingStore } from "@/lib/store/booking";
import PassengerSelector from "@/components/features/PassengerSelector";
import ExtrasSelector from "@/components/features/ExtrasSelector";
import PriceSummary from "@/components/features/PriceSummary";
import BookingProgress from "@/components/features/BookingProgress";
import LanguageSwitcher from "@/components/features/LanguageSwitcher";
import { specialRoutes, popularDestinations, testimonials } from '@/data';
import MapPreview from "@/components/features/MapPreview";

export default function Home() {
  const t = useTranslations();
  const booking = useBookingStore();

  const handlePassengerChange = (type: 'adults' | 'children' | 'infants', value: number) => {
    booking.setPassengers({ ...booking.passengers, [type]: value });
  };

  const handleProceed = () => {
    booking.setStep(booking.step + 1)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 8px 20px rgba(0,0,0,0.1)",
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Booking Progress */}
        <motion.div 
          className="mb-8 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <BookingProgress
            steps={[
              {
                title: t('booking.pickupDetails'),
                description: t('booking.pickupAddress')
              },
              {
                title: t('booking.pickupTime'),
                description: t('booking.automated')
              },
              {
                title: t('booking.passengersAndExtras'),
                description: t('booking.passengers')
              },
              {
                title: t('booking.reviewPayment'),
                description: t('booking.fillInformation')
              }
            ]}
            currentStep={booking.step - 1}
            onStepClick={(step) => booking.setStep(step + 1)}
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Booking Form */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-200">
              {/* Pickup Details */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">{t('booking.pickupDetails')}</h2>
                  <button className="text-gray-400">
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="space-y-6">
                  {/* Addresses */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">{t('booking.pickupAddress')}</label>
                      <input
                        type="text"
                        placeholder={t('booking.pickupAddress')}
                        value={booking.pickup}
                        onChange={(e) => booking.setPickup(e.target.value)}
                        className="w-full p-2 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6B46C1]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">{t('booking.destinationAddress')}</label>
                      <input
                        type="text"
                        placeholder={t('booking.destinationAddress')}
                        value={booking.destination}
                        onChange={(e) => booking.setDestination(e.target.value)}
                        className="w-full p-2 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6B46C1]"
                      />
                    </div>
                  </div>

                  {/* Map Preview */}
                  <div className="mt-4">
                    <MapPreview
                      pickup={booking.pickup}
                      destination={booking.destination}
                      className="h-[200px]"
                    />
                  </div>

                  {/* Trip Type */}
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">{t('booking.departureDate')}</label>
                    <div className="flex gap-4 mb-4">
                      <button
                        onClick={() => !booking.isRoundtrip && booking.toggleRoundtrip()}
                        className={`flex-1 py-2 px-4 ${
                          !booking.isRoundtrip
                            ? 'bg-[#6B46C1] text-white'
                            : 'bg-gray-50 text-gray-700'
                        } rounded-md hover:bg-opacity-90`}
                      >
                        {t('booking.oneWay')}
                      </button>
                      <button
                        onClick={() => booking.isRoundtrip && booking.toggleRoundtrip()}
                        className={`flex-1 py-2 px-4 ${
                          booking.isRoundtrip
                            ? 'bg-[#6B46C1] text-white'
                            : 'bg-gray-50 text-gray-700'
                        } rounded-md hover:bg-opacity-90`}
                      >
                        {t('booking.roundtrip')}
                      </button>
                    </div>

                    {/* Date Selection */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-gray-600 mb-2">{t('booking.departureDate')}</label>
                        <input
                          type="date"
                          value={booking.date}
                          onChange={(e) => booking.setDate(e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full p-2 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6B46C1]"
                        />
                      </div>
                      
                      {booking.isRoundtrip && (
                        <div>
                          <label className="block text-sm text-gray-600 mb-2">{t('booking.returnDate')}</label>
                          <input
                            type="date"
                            value={booking.returnDate}
                            onChange={(e) => booking.setReturnDate(e.target.value)}
                            min={booking.date || new Date().toISOString().split('T')[0]}
                            className="w-full p-2 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6B46C1]"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Flight Number (for automated pickup) */}
                  {booking.pickupTime.isAutomated && (
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">{t('booking.flightNumber')}</label>
                      <input
                        type="text"
                        placeholder={t('booking.flightNumberPlaceholder')}
                        value={booking.pickupTime.flightNumber || ''}
                        onChange={(e) => booking.setPickupTime({ 
                          ...booking.pickupTime, 
                          flightNumber: e.target.value 
                        })}
                        className="w-full p-2 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6B46C1]"
                      />
                      <p className="text-sm text-gray-500 mt-1">{t('booking.flightNumberDescription')}</p>
                    </div>
                  )}

                  {/* Manual Time Selection */}
                  {!booking.pickupTime.isAutomated && (
                    <div>
                      <label className="block text-sm text-gray-600 mb-2">{t('booking.pickupTime')}</label>
                      <input
                        type="time"
                        value={booking.pickupTime.time || ''}
                        onChange={(e) => booking.setPickupTime({ 
                          ...booking.pickupTime, 
                          time: e.target.value 
                        })}
                        className="w-full p-2 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6B46C1]"
                      />
                      <p className="text-sm text-gray-500 mt-1">{t('booking.pickupTimeDescription')}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Passengers & Extras */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">{t('booking.passengersAndExtras')}</h2>
                  <button className="text-gray-400">
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">{t('booking.passengers')}</label>
                    <PassengerSelector
                      passengers={booking.passengers}
                      onChange={handlePassengerChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">{t('booking.extras')}</label>
                    <ExtrasSelector
                      selectedExtras={booking.extras}
                      onChange={booking.setExtras}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-8">
              {/* Main Content */}
              <div>
                <h1 className="text-3xl font-bold mb-4">{t('booking.title')}</h1>
                <p className="text-gray-600 mb-8">{t('booking.description')}</p>

                {/* Featured Image */}
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="https://picsum.photos/800/400?random=1"
                    alt="Booking"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Information Section */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-6">{t('booking.fillInformation')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-4">{t('booking.pickupDetails')}</h3>
                    <p className="text-gray-600">
                      {t('booking.description')}
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-semibold mb-4">{t('booking.reviewPayment')}</h3>
                    <p className="text-gray-600">
                      {t('booking.description')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Price Summary */}
              <PriceSummary
                basePrice={199}
                extras={booking.extras}
                passengers={booking.passengers}
                isRoundtrip={booking.isRoundtrip}
                onProceed={handleProceed}
              />
            </div>
          </motion.div>
        </div>

        {/* Special Routes Section */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <h2 className="text-xl font-semibold">{t('specialRoutes.title')}</h2>
                <button className="text-gray-400">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {specialRoutes.map((route, index) => (
                <motion.div
                  key={route.id}
                  variants={itemVariants}
                  whileHover={cardHoverVariants.hover}
                  className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200"
                >
                  <Link href={`/routes/${route.id}`} className="block">
                    <div className="relative h-48">
                      <Image
                        src={route.image}
                        alt={t(`specialRoutes.routes.${route.id}.title`)}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-[#6B46C1] bg-opacity-90 text-white px-3 py-1 rounded-md text-sm">
                        {t('specialRoutes.save')} {route.savings}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium mb-2">{t(`specialRoutes.routes.${route.id}.title`)}</h3>
                      <div className="flex items-center text-gray-600 mb-3 text-sm">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{t(`specialRoutes.routes.${route.id}.from`)} → {t(`specialRoutes.routes.${route.id}.to`)}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-sm text-gray-500 line-through">¥{route.originalPrice}</span>
                          <span className="text-lg font-semibold text-[#6B46C1] ml-2">¥{route.discountPrice}</span>
                        </div>
                        <span className="text-[#6B46C1] hover:text-[#5a3aa1] text-sm font-medium">
                          {t('specialRoutes.viewDetails')}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Popular Destinations Section */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8"
        >
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <h2 className="text-xl font-semibold">{t('popularDestinations.title')}</h2>
                <button className="text-gray-400">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {popularDestinations.map((destination) => (
                <motion.div
                  key={destination.id}
                  variants={itemVariants}
                  whileHover={cardHoverVariants.hover}
                  className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200"
                >
                  <Link href={`/destinations/${destination.id}`} className="block">
                    <div className="relative h-40">
                      <Image
                        src={destination.image}
                        alt={t(`popularDestinations.destinations.${destination.id}.name`)}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium mb-2">{t(`popularDestinations.destinations.${destination.id}.name`)}</h3>
                      <p className="text-gray-600 text-sm mb-3">{t(`popularDestinations.destinations.${destination.id}.description`)}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-sm">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span>{destination.rating}</span>
                          <span className="text-gray-400 ml-2">{destination.duration}</span>
                        </div>
                        <span className="text-[#6B46C1] font-medium">¥{destination.price}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gray-50 py-16 mt-8 border-t border-gray-200"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="text-center"
                whileHover={{ y: -5 }}
              >
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <div className="absolute inset-0 bg-[#6B46C1] rounded-full opacity-10 animate-pulse"></div>
                  <div className="relative w-16 h-16 bg-[#6B46C1] rounded-full flex items-center justify-center">
                    <Car className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{t('features.premiumVehicles.title')}</h3>
                <div className="flex items-center justify-center space-x-1 text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <p>{t('features.premiumVehicles.description')}</p>
                </div>
              </motion.div>

              <motion.div 
                className="text-center"
                whileHover={{ y: -5 }}
              >
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <div className="absolute inset-0 bg-[#6B46C1] rounded-full opacity-10 animate-pulse"></div>
                  <div className="relative w-16 h-16 bg-[#6B46C1] rounded-full flex items-center justify-center">
                    <Headphones className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{t('features.service.title')}</h3>
                <div className="flex items-center justify-center space-x-1 text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <p>{t('features.service.description')}</p>
                </div>
              </motion.div>

              <motion.div 
                className="text-center"
                whileHover={{ y: -5 }}
              >
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <div className="absolute inset-0 bg-[#6B46C1] rounded-full opacity-10 animate-pulse"></div>
                  <div className="relative w-16 h-16 bg-[#6B46C1] rounded-full flex items-center justify-center">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{t('features.secureBooking.title')}</h3>
                <div className="flex items-center justify-center space-x-1 text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <p>{t('features.secureBooking.description')}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Floating Action Buttons */}
        <div className="fixed bottom-8 right-8 flex flex-col space-y-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-[#6B46C1] rounded-full flex items-center justify-center text-white shadow-lg"
          >
            <Coffee className="w-6 h-6" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-[#6B46C1] rounded-full flex items-center justify-center text-white shadow-lg"
          >
            <Gift className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </div>
  );
} 
