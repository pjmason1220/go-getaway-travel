import Image from 'next/image';
import Link from 'next/link';
import { Property } from '@/types';
import StarRating from './StarRating';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="card group">
      {/* Image */}
      <Link href={`/properties/${property.slug}`} className="block relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.images[0].src}
          alt={property.images[0].alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-white text-sm font-medium">{property.location}</p>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        <Link href={`/properties/${property.slug}`}>
          <h3 className="text-xl font-display font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
            {property.name}
          </h3>
        </Link>
        <p className="text-neutral-600 mt-1">{property.tagline}</p>

        {/* Stats */}
        <div className="flex items-center gap-4 mt-4 text-sm text-neutral-600">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            {property.bedrooms} Beds
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
            {property.bathrooms} Baths
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Sleeps {property.sleeps}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-4">
          <StarRating rating={property.rating} size="sm" />
          <span className="text-sm text-neutral-600">
            {property.rating} ({property.reviewCount} reviews)
          </span>
        </div>

        {/* CTA */}
        <div className="mt-6 flex gap-3">
          <Link
            href={`/properties/${property.slug}`}
            className="btn-secondary flex-1 text-center text-sm py-2"
          >
            View Details
          </Link>
          <a
            href={`${property.vrboUrl}&utm_source=gogetaway&utm_medium=website&utm_campaign=property_card`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-1 text-center text-sm py-2"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}
