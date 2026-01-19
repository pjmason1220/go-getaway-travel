import Image from 'next/image';
import Link from 'next/link';
import { properties } from '@/lib/properties';
import PropertyCard from '@/components/PropertyCard';
import InstagramFeed from '@/components/InstagramFeed';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        <Image
          src="/images/shared/hero-lake-cumberland-aerial.jpg"
          alt="Aerial view of Lake Cumberland dam and lake"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold max-w-3xl text-balance">
            Your Perfect Lakeside Escape Awaits
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-white/90 max-w-2xl">
            Experience the beauty of Lake Cumberland with our handpicked vacation
            rentals in Jamestown, Kentucky.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="#properties" className="btn-primary text-center">
              View Our Properties
            </Link>
            <Link href="/contact" className="btn-secondary text-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Our Properties</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              Choose from our carefully curated Lake Cumberland vacation rentals,
              each offering unique experiences and unforgettable memories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Why Choose Go Get Away?</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              We&apos;re dedicated to making your Lake Cumberland vacation exceptional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Thoughtfully Curated
              </h3>
              <p className="text-neutral-600">
                Each property is personally selected and maintained to ensure
                comfort, cleanliness, and an authentic Lake Cumberland experience.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Prime Location
              </h3>
              <p className="text-neutral-600">
                Minutes from Jamestown Marina, our properties offer easy access to
                boating, fishing, and all the adventures Lake Cumberland has to offer.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Personal Touch
              </h3>
              <p className="text-neutral-600">
                We&apos;re dedicated owners who love sharing Lake Cumberland with our guests.
                Count on us for responsive support and helpful recommendations to make your stay memorable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lake Cumberland Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/shared/lake-cumberland-boat.webp"
                alt="Boat cruising on Lake Cumberland"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="section-heading">Discover Lake Cumberland</h2>
              <p className="text-neutral-600 mt-4 leading-relaxed">
                Known as the &quot;Houseboat Capital of the World,&quot; Lake Cumberland
                spans over 65,000 acres and offers 1,255 miles of shoreline.
                Whether you&apos;re here for fishing, boating, swimming, or simply
                relaxing by the water, Lake Cumberland delivers unforgettable
                experiences year-round.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'World-class fishing (bass, trout, catfish)',
                  'Boat rentals at Jamestown Marina',
                  'Hiking and nature trails',
                  'Swimming and water sports',
                  'Beautiful sunsets and stargazing',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-neutral-700">
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
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <InstagramFeed />

      {/* CTA Section */}
      <section className="py-20 bg-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Ready for Your Lake Cumberland Adventure?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Book your stay today and create memories that will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#properties"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-700 bg-white rounded-lg hover:bg-primary-50 transition-colors"
            >
              Browse Properties
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
