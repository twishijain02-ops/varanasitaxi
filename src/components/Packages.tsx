import { PACKAGES } from "../data";
import { Clock, Map, Car } from "lucide-react";

export default function Packages() {
  const scrollToForm = () => {
    document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-4">Popular Tour Packages</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-4">
            Curated itineraries for the best experience in and around Varanasi.
          </p>
          <div className="w-24 h-1 bg-black mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PACKAGES.map((pkg, idx) => (
            <div key={idx} className="bg-navy-800 rounded-xl p-6 border border-gray-700 hover:border-black/50 transition-colors">
              <h3 className="font-medium text-xl text-white mb-4">{pkg.title}</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Duration</p>
                    <p className="text-gray-100">{pkg.duration}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Map className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Places Covered</p>
                    <p className="text-gray-100">{pkg.places}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Vehicle Options</p>
                    <p className="text-gray-100">{pkg.vehicles}</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={scrollToForm}
                className="w-full py-3 bg-white/10 hover:bg-black hover:text-navy text-white font-medium rounded-lg transition-colors"
              >
                Enquire Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
