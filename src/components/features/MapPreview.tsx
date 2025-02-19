'use client'

import { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'
import { useTranslations } from 'next-intl'

interface MapPreviewProps {
  pickup: string
  destination: string
  className?: string
}

export default function MapPreview({ pickup, destination, className = '' }: MapPreviewProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const t = useTranslations('booking')

  useEffect(() => {
    if (!pickup || !destination || !mapRef.current) return

    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
      version: 'weekly',
      libraries: ['places']
    })

    loader.load().then(async (googleMaps) => {
      const map = new googleMaps.maps.Map(mapRef.current!, {
        center: { lat: 0, lng: 0 },
        zoom: 12,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }]
          }
        ]
      })

      const directionsService = new googleMaps.maps.DirectionsService()
      const directionsRenderer = new googleMaps.maps.DirectionsRenderer({
        map,
        suppressMarkers: false,
        polylineOptions: {
          strokeColor: '#6B46C1',
          strokeWeight: 5
        }
      })

      const geocoder = new googleMaps.maps.Geocoder()
      
      try {
        // Convert addresses to coordinates and display route
        const [originResult, destinationResult] = await Promise.all([
          new Promise<google.maps.LatLng>((resolve, reject) => {
            geocoder.geocode(
              { address: pickup },
              (
                results: google.maps.GeocoderResult[] | null,
                status: google.maps.GeocoderStatus
              ) => {
                if (status === 'OK' && results && results[0]) {
                  resolve(results[0].geometry.location)
                } else {
                  reject(new Error('Geocoding failed'))
                }
              }
            )
          }),
          new Promise<google.maps.LatLng>((resolve, reject) => {
            geocoder.geocode(
              { address: destination },
              (
                results: google.maps.GeocoderResult[] | null,
                status: google.maps.GeocoderStatus
              ) => {
                if (status === 'OK' && results && results[0]) {
                  resolve(results[0].geometry.location)
                } else {
                  reject(new Error('Geocoding failed'))
                }
              }
            )
          })
        ])

        const route = await new Promise<google.maps.DirectionsResult>((resolve, reject) => {
          directionsService.route(
            {
              origin: originResult,
              destination: destinationResult,
              travelMode: googleMaps.maps.TravelMode.DRIVING
            },
            (
              result: google.maps.DirectionsResult | null,
              status: google.maps.DirectionsStatus
            ) => {
              if (status === 'OK' && result) {
                resolve(result)
              } else {
                reject(new Error('Route calculation failed'))
              }
            }
          )
        })

        directionsRenderer.setDirections(route)
        
        // Fit map to route bounds
        const bounds = new googleMaps.maps.LatLngBounds()
        bounds.extend(originResult)
        bounds.extend(destinationResult)
        map.fitBounds(bounds)
      } catch (error) {
        console.error('Map error:', error)
        // Here you might want to show an error message to the user
      }
    })
  }, [pickup, destination])

  if (!pickup || !destination) {
    return (
      <div className={`${className} bg-gray-100 rounded-lg flex items-center justify-center`}>
        <p className="text-gray-500">{t('enterAddresses')}</p>
      </div>
    )
  }

  return <div ref={mapRef} className={`${className} rounded-lg overflow-hidden`} />
} 