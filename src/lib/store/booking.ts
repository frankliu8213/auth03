import { create } from 'zustand'

interface Passenger {
  adults: number
  children: number
  infants: number
}

interface BookingState {
  pickup: string
  destination: string
  date: string
  isRoundtrip: boolean
  returnDate?: string
  pickupTime: {
    isAutomated: boolean
    time?: string
    flightNumber?: string
  }
  passengers: Passenger
  extras: string[]
  step: number
  // Actions
  setPickup: (pickup: string) => void
  setDestination: (destination: string) => void
  setDate: (date: string) => void
  toggleRoundtrip: () => void
  setReturnDate: (date: string) => void
  setPickupTime: (time: { isAutomated: boolean; time?: string; flightNumber?: string }) => void
  setPassengers: (passengers: Passenger) => void
  setExtras: (extras: string[]) => void
  setStep: (step: number) => void
  reset: () => void
}

const initialState = {
  pickup: '',
  destination: '',
  date: '',
  isRoundtrip: false,
  pickupTime: {
    isAutomated: true,
  },
  passengers: {
    adults: 1,
    children: 0,
    infants: 0,
  },
  extras: [],
  step: 1,
}

export const useBookingStore = create<BookingState>((set) => ({
  ...initialState,
  setPickup: (pickup) => set({ pickup }),
  setDestination: (destination) => set({ destination }),
  setDate: (date) => set({ date }),
  toggleRoundtrip: () => set((state) => ({ isRoundtrip: !state.isRoundtrip })),
  setReturnDate: (returnDate) => set({ returnDate }),
  setPickupTime: (pickupTime) => set({ pickupTime }),
  setPassengers: (passengers) => set({ passengers }),
  setExtras: (extras) => set({ extras }),
  setStep: (step) => set({ step }),
  reset: () => set(initialState),
})) 