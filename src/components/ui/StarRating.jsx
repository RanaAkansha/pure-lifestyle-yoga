import React from 'react';
import { Star } from 'lucide-react';

export default function StarRating({ rating, maxStars = 5, size = 16, showValue = true }) {
  return (
    <div className="inline-flex items-center gap-1">
      {Array.from({ length: maxStars }, (_, i) => {
        const filled = i < Math.floor(rating);
        const partial = !filled && i < rating;

        return (
          <Star
            key={i}
            size={size}
            className={`
              ${filled ? 'text-gold-500 fill-gold-500' : ''}
              ${partial ? 'text-gold-500 fill-gold-500/50' : ''}
              ${!filled && !partial ? 'text-warm-gray-300' : ''}
            `}
          />
        );
      })}
      {showValue && (
        <span className="ml-1 text-sm font-medium text-warm-gray-600">
          {rating}
        </span>
      )}
    </div>
  );
}
