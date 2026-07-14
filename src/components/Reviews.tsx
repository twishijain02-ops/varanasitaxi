import { REVIEWS } from "../data";
import { Star, Quote } from "lucide-react";

export default function Reviews() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-navy mb-4">Customer Reviews</h2>
          <div className="w-24 h-1 bg-black mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-gray-100" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-black text-black" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                "{review.text}"
              </p>
              
              <div className="mt-auto">
                <h4 className="font-medium text-navy">{review.name}</h4>
                <p className="text-sm font-medium text-gray-600">{review.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
