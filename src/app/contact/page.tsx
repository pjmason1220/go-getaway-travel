import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Go Get Away',
  description:
    'Get in touch with Go Get Away for questions about our Lake Cumberland vacation rentals. We\'re here to help you plan your perfect getaway.',
};

export default function ContactPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-neutral-900">
            Contact Us
          </h1>
          <p className="mt-4 text-xl text-neutral-600 max-w-2xl mx-auto">
            Have questions about our properties or need help planning your Lake
            Cumberland getaway? We&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Response Time Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Quick Response</h3>
                  <p className="text-neutral-700">We typically respond within 24 hours</p>
                  <p className="text-sm text-neutral-500 mt-1">
                    Use the form to send us a message
                  </p>
                </div>
              </div>
            </div>

            {/* Social Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-pink-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Follow Us</h3>
                  <a
                    href="https://instagram.com/go_getaway"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-700 transition-colors"
                  >
                    @go_getaway
                  </a>
                  <p className="text-sm text-neutral-500 mt-1">
                    See our latest photos and updates
                  </p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-primary-600"
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
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Location</h3>
                  <p className="text-neutral-700">Jamestown, Kentucky</p>
                  <p className="text-sm text-neutral-500 mt-1">
                    Lake Cumberland region
                  </p>
                </div>
              </div>
            </div>

            {/* Book Direct Card */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl shadow-lg p-6 text-white">
              <h3 className="font-semibold mb-2">Ready to Book?</h3>
              <p className="text-primary-100 text-sm mb-4">
                View our properties and check availability on VRBO for instant
                booking confirmation.
              </p>
              <div className="space-y-2">
                <a
                  href="https://www.vrbo.com/1995504?dateless=true&utm_source=gogetaway&utm_medium=website&utm_campaign=contact_page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2 bg-white/20 rounded-lg text-white hover:bg-white/30 transition-colors text-sm"
                >
                  Book Shady Lake Hideaway
                </a>
                <a
                  href="https://www.vrbo.com/2145760?dateless=true&utm_source=gogetaway&utm_medium=website&utm_campaign=contact_page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2 bg-white/20 rounded-lg text-white hover:bg-white/30 transition-colors text-sm"
                >
                  Book Sunset Ridge
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
