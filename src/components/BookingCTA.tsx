interface BookingCTAProps {
  vrboUrl: string;
  propertyName: string;
  propertySlug: string;
}

export default function BookingCTA({ vrboUrl, propertyName, propertySlug }: BookingCTAProps) {
  const bookingUrl = `${vrboUrl}&utm_source=gogetaway&utm_medium=website&utm_campaign=${propertySlug}_cta`;

  return (
    <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl shadow-lg p-6 md:p-8 text-white">
      <h3 className="text-2xl font-display font-bold mb-2">
        Ready to Book {propertyName}?
      </h3>
      <p className="text-primary-100 mb-6">
        Check availability and secure your dates on VRBO. Booking directly ensures
        you get the best rates and instant confirmation.
      </p>

      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-lg font-semibold text-primary-700 bg-white rounded-lg hover:bg-primary-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        Book Now on VRBO
      </a>

      <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-primary-100">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span>Instant confirmation</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span>Secure payment</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span>24/7 support</span>
        </div>
      </div>
    </div>
  );
}
