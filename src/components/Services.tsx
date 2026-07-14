import { SERVICES } from "../data";
import { ArrowRight } from "lucide-react";

export default function Services() {
  const scrollToForm = () => {
    document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-navy mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-black mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="group rounded-xl overflow-hidden shadow-md border border-gray-100 flex flex-col bg-white">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.img} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 text-white font-medium text-lg leading-tight">
                  {service.title}
                </h3>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between">
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {service.desc}
                </p>
                <button 
                  onClick={scrollToForm}
                  className="text-navy hover:text-gray-600 font-semibold text-sm flex items-center gap-1 transition-colors"
                >
                  Book Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
