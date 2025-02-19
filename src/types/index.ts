export interface SpecialRoute {
  id: string;
  title: string;
  from: string;
  to: string;
  originalPrice: number;
  discountPrice: number;
  image: string;
  savings: string;
  features: string[];
}

export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  price: number;
  duration: string;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  comment: string;
  rating: number;
  type: string;
} 