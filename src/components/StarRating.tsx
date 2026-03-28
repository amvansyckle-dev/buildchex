"use client";

interface StarRatingProps {
  rating: number;
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
  onRate?: (rating: number) => void;
}

export default function StarRating({
  rating,
  size = "md",
  interactive = false,
  onRate,
}: StarRatingProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="flex gap-1 items-center">
      {stars.map((star) => (
        <button
          key={star}
          onClick={() => interactive && onRate?.(star)}
          disabled={!interactive}
          className={`transition-all ${interactive ? "cursor-pointer hover:scale-110" : "cursor-default"}`}
        >
          {star <= Math.floor(rating) ? (
            <svg
              className={`${sizeClasses[size]} fill-teal`}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ) : star - 1 < rating && rating % 1 !== 0 ? (
            <svg
              className={`${sizeClasses[size]} fill-teal`}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id={`half-${star}`}>
                  <stop offset="50%" stopColor="currentColor" />
                  <stop offset="50%" stopColor="#e5e7eb" />
                </linearGradient>
              </defs>
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                fill={`url(#half-${star})`}
              />
            </svg>
          ) : (
            <svg
              className={`${sizeClasses[size]} stroke-gray-300 fill-gray-100`}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          )}
        </button>
      ))}
      {rating > 0 && (
        <span className="text-sm font-medium text-slate ml-1">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
