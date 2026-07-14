import { GALLERY_IMAGES } from "../data";

export default function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-navy mb-4">Our Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4">
            Glimpses of our vehicles and happy customers on their journeys.
          </p>
          <div className="w-24 h-1 bg-black mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((img, idx) => (
            <div key={idx} className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img 
                src={img} 
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
