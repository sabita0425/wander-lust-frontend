import { Star } from "lucide-react";
import React from "react";

const reviews = [
  {
    name: "sabita",
    rating: 5,
    date: "12 Aug 2026",
    review:
      "The trip planning experience was smooth and stress-free. Everything was organized beautifully, and the support team was incredibly helpful from start to finish.",
  },
  {
    name: "SaAsh",
    rating: 5,
    date: "03 Sep 2026",
    review:
      "I loved how easy it was to customize our itinerary. The platform made planning with friends simple, and we had a great time exploring together.",
  },
  {
    name: "FalconTec",
    rating: 4,
    date: "19 Sep 2026",
    review:
      "Very user-friendly and dependable. The recommendations were practical, and the overall experience felt premium and well thought out.",
  },
  {
    name: "Scaledux",
    rating: 5,
    date: "26 Sep 2026",
    review:
      "Amazing service and easy collaboration. We were able to manage all details in one place without any confusion or delays.",
  },
  {
    name: "Gowolo",
    rating: 4,
    date: "08 Oct 2026",
    review:
      "The interface is clean, fast, and genuinely helpful for planning. I appreciated the flexibility and the level of detail in the trip setup.",
  },
  {
    name: "Atypical",
    rating: 5,
    date: "15 Oct 2026",
    review:
      "A reliable and professional experience. From planning to execution, everything felt organised and stress-free, which made our trip a lot more enjoyable.",
  },
];

const Reviews = () => {
  return (
    <section className="px-20 py-24 bg-orange-50">
      <div>
        <h2 className="mb-20 text-5xl font-bold text-center">Reviews</h2>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div
            key={`${review.name}-${index}`}
            className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {review.name}
                </h3>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>

              <div className="flex items-center gap-1 rounded-full bg-orange-100 px-2.5 py-1 text-sm font-semibold text-orange-600">
                <span>{review.rating}.0</span>
                <Star size={14} fill="currentColor" strokeWidth={1.5} />
              </div>
            </div>

            <div className="mb-4 flex items-center gap-1 text-orange-500">
              {Array.from({ length: 5 }, (_, starIndex) => (
                <Star
                  key={`${review.name}-${starIndex}`}
                  size={18}
                  fill={starIndex < review.rating ? "currentColor" : "none"}
                  strokeWidth={1.8}
                />
              ))}
            </div>

            <p className="text-base leading-7 text-gray-700">
              “{review.review}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
