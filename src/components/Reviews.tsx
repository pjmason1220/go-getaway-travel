import { Review } from '@/types';
import StarRating from './StarRating';
import { format, parseISO } from 'date-fns';

interface ReviewsProps {
  reviews: Review[];
  rating: number;
  reviewCount: number;
  propertyName: string;
}

export default function Reviews({ reviews, rating, reviewCount, propertyName }: ReviewsProps) {
  return (
    <section className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h3 className="text-2xl font-display font-bold text-neutral-900">
            Guest Reviews
          </h3>
          <p className="text-neutral-600 mt-1">
            See what our guests are saying about {propertyName}
          </p>
        </div>
        <div className="flex items-center gap-3 bg-neutral-50 px-4 py-3 rounded-lg">
          <div className="text-3xl font-bold text-neutral-900">{rating}</div>
          <div>
            <StarRating rating={rating} size="sm" />
            <p className="text-sm text-neutral-600">{reviewCount} reviews</p>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <article
            key={review.id}
            className="border-b border-neutral-100 last:border-0 pb-6 last:pb-0"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-primary-700 font-semibold text-sm">
                    {review.author.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">{review.author}</p>
                  <p className="text-sm text-neutral-500">
                    {format(parseISO(review.date), 'MMMM yyyy')}
                  </p>
                </div>
              </div>
              <StarRating rating={review.rating} size="sm" />
            </div>
            <p className="mt-3 text-neutral-700 leading-relaxed">{review.text}</p>
          </article>
        ))}
      </div>

      {/* View More Link */}
      {reviewCount > reviews.length && (
        <div className="mt-6 text-center">
          <p className="text-sm text-neutral-500">
            Showing {reviews.length} of {reviewCount} reviews.
          </p>
        </div>
      )}
    </section>
  );
}
