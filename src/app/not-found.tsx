import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-display font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-neutral-600 mb-8 max-w-md mx-auto">
          Oops! It looks like this page got lost on the lake. Let&apos;s get you back
          on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
