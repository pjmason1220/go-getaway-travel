import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { properties, getPropertyBySlug, getAllPropertySlugs } from '@/lib/properties';
import PhotoGallery from '@/components/PhotoGallery';
import Calendar from '@/components/Calendar';
import Reviews from '@/components/Reviews';
import BookingCTA from '@/components/BookingCTA';
import StarRating from '@/components/StarRating';

interface PropertyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPropertySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    return {
      title: 'Property Not Found | Go Get Away',
    };
  }

  return {
    title: `${property.name} | Go Get Away`,
    description: `${property.tagline}. ${property.bedrooms} bedrooms, ${property.bathrooms} bathrooms, sleeps ${property.sleeps}. Book your Lake Cumberland vacation today!`,
    openGraph: {
      title: `${property.name} | Go Get Away`,
      description: property.tagline,
      images: [property.images[0].src],
    },
  };
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  return (
    <div className="pb-20">
      {/* Hero/Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <PhotoGallery images={property.images} propertyName={property.name} />
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Property Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-neutral-900">
                {property.name}
              </h1>
              <p className="text-xl text-neutral-600 mt-2">{property.tagline}</p>
              <div className="flex items-center gap-2 mt-4">
                <StarRating rating={property.rating} size="md" showValue />
                <span className="text-neutral-600">
                  ({property.reviewCount} reviews)
                </span>
              </div>
              <p className="flex items-center gap-2 mt-3 text-neutral-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {property.location}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary-600">{property.bedrooms}</div>
                  <div className="text-neutral-600 text-sm">Bedrooms</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">{property.bathrooms}</div>
                  <div className="text-neutral-600 text-sm">Bathrooms</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">{property.sleeps}</div>
                  <div className="text-neutral-600 text-sm">Guests</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4">
                About This Property
              </h2>
              <div className="prose prose-neutral max-w-none">
                {property.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-neutral-700 leading-relaxed mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4">
                Highlights
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {property.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-3 text-neutral-700">
                    <svg
                      className="w-5 h-5 text-primary-500 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4">
                Amenities
              </h2>
              <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {property.amenities.map((amenity) => (
                  <li key={amenity} className="flex items-center gap-2 text-neutral-700">
                    <svg
                      className="w-4 h-4 text-neutral-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>

            {/* Reviews */}
            <Reviews
              reviews={property.reviews}
              rating={property.rating}
              reviewCount={property.reviewCount}
              propertyName={property.name}
            />
          </div>

          {/* Right Column - Booking Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Sticky container */}
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Booking CTA */}
              <BookingCTA
                vrboUrl={property.vrboUrl}
                propertyName={property.name}
                propertySlug={property.slug}
              />

              {/* Calendar */}
              <Calendar icalUrl={property.icalUrl} propertyName={property.name} />

              {/* Contact Link */}
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Have Questions?
                </h3>
                <p className="text-neutral-600 text-sm mb-4">
                  We&apos;re happy to help you plan your perfect getaway.
                </p>
                <a
                  href="/contact"
                  className="btn-secondary w-full"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
