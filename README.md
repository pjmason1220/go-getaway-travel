# Go Get Away - Lake Cumberland Vacation Rentals

A modern vacation rental website for Go Get Away LLC, featuring two properties on Lake Cumberland, Kentucky.

## Properties

- **Shady Lake Hideaway** - 3 bed, 3 bath, sleeps 8
- **Sunset Ridge** - 5 bed, 3.5 bath, sleeps 16

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Forms**: Formspree
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/pjmason1220/go-getaway-travel.git
cd go-getaway-travel

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Configuration

### Formspree Setup (Already Configured)

The contact form uses Formspree for form submissions. The form is already configured with endpoint `mwvvbyvl`.

To manage form submissions:
1. Go to [https://formspree.io](https://formspree.io) and sign in
2. Access the form dashboard to view submissions
3. Configure email notifications and auto-reply messages as needed

### Instagram Feed Setup (Optional)

The Instagram feed on the homepage can display live posts from @go_getaway using a third-party widget service. Currently, it shows beautiful property photos as a fallback.

**To enable live Instagram feed with Behold.so:**

1. Go to [https://behold.so](https://behold.so) and create a free account
2. Connect your Instagram account (@go_getaway)
3. Create a new feed widget and customize its appearance
4. Copy your Feed ID from the widget settings
5. Edit `src/components/InstagramFeed.tsx`:

```typescript
const BEHOLD_ENABLED = true;
const BEHOLD_FEED_ID = 'your-actual-feed-id';
```

**Alternative services:**
- [ElfSight](https://elfsight.com/instagram-feed-widget/) - Free tier available
- [SnapWidget](https://snapwidget.com) - Has watermark on free tier

**Note:** Without a live feed configured, the component displays property photos that link to the Instagram profile.

## Deployment to Vercel

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Go Get Away vacation rental website"

# Add remote (after creating repo on GitHub)
git remote add origin https://github.com/pjmason1220/go-getaway-travel.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [https://vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New Project"
3. Import the `go-getaway-travel` repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

### Step 3: Connect Custom Domain (gogetaway.travel)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add `gogetaway.travel`
4. Configure DNS at your domain registrar:

#### DNS Configuration

Add these DNS records at your domain registrar:

| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

**Or** if your registrar supports it, use Vercel nameservers:
- ns1.vercel-dns.com
- ns2.vercel-dns.com

5. Wait for DNS propagation (can take up to 48 hours, usually faster)
6. Vercel will automatically provision SSL certificate

## Deployment Checklist

- [x] Formspree form ID configured in `ContactForm.tsx`
- [ ] Formspree email notifications set up in dashboard
- [x] Code pushed to GitHub
- [ ] Vercel project created and deployed
- [ ] Custom domain added in Vercel (gogetaway.travel)
- [ ] DNS records configured at domain registrar
- [ ] SSL certificate active (automatic)
- [ ] Test contact form submission
- [ ] Test all pages and links
- [ ] Verify images load correctly
- [ ] Check mobile responsiveness
- [ ] (Optional) Instagram feed configured with Behold.so

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── contact/page.tsx    # Contact page
│   ├── properties/
│   │   └── [slug]/page.tsx # Property detail pages
│   └── api/
│       └── calendar/       # iCal calendar API
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── PropertyCard.tsx
│   ├── PhotoGallery.tsx
│   ├── Calendar.tsx
│   ├── Reviews.tsx
│   ├── BookingCTA.tsx
│   ├── ContactForm.tsx
│   └── InstagramFeed.tsx
├── lib/
│   ├── properties.ts       # Property data
│   └── ical.ts            # iCal parsing
└── types/
    └── index.ts           # TypeScript types
```

## Customization

### Updating Property Information

Edit `src/lib/properties.ts` to update:
- Property descriptions
- Amenities
- Images and captions
- Reviews
- Ratings

### Updating Images

1. Add images to `public/images/[property-name]/`
2. Update image paths in `src/lib/properties.ts`

### Styling

- Colors and theme: `tailwind.config.ts`
- Global styles: `src/app/globals.css`

## Features

- Responsive design (mobile-first)
- Image gallery with lightbox
- Availability calendar (syncs from VRBO iCal feeds)
- Guest reviews display
- Contact form (via Formspree)
- Instagram feed integration
- SEO optimized
- Fast loading (optimized images)

## License

Private - Go Get Away LLC
