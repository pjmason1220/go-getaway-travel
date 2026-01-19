export interface Property {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sleeps: number;
  amenities: string[];
  highlights: string[];
  images: PropertyImage[];
  reviews: Review[];
  rating: number;
  reviewCount: number;
  vrboUrl: string;
  icalUrl: string;
}

export interface PropertyImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  text: string;
}

export interface CalendarEvent {
  start: Date;
  end: Date;
  summary: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  propertyInterest: 'shady-lake' | 'sunset-ridge' | 'both' | 'general';
  message: string;
}
