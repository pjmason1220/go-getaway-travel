import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Go Get Away | Lake Cumberland Vacation Rentals',
  description:
    'Discover your perfect lakeside escape at Lake Cumberland, Kentucky. Book Shady Lake Hideaway or Sunset Ridge for an unforgettable vacation experience.',
  keywords: [
    'Lake Cumberland',
    'vacation rental',
    'Kentucky',
    'Jamestown',
    'lake house',
    'cabin rental',
    'family vacation',
    'Shady Lake Hideaway',
    'Sunset Ridge',
  ],
  authors: [{ name: 'Go Get Away LLC' }],
  openGraph: {
    title: 'Go Get Away | Lake Cumberland Vacation Rentals',
    description:
      'Discover your perfect lakeside escape at Lake Cumberland, Kentucky.',
    url: 'https://gogetaway.travel',
    siteName: 'Go Get Away',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Go Get Away | Lake Cumberland Vacation Rentals',
    description:
      'Discover your perfect lakeside escape at Lake Cumberland, Kentucky.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex flex-col min-h-screen font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
