import { FLEET } from "../data";
import { Users, Briefcase, Snowflake } from "lucide-react";

export default function Fleet() {
  const scrollToForm = (vehicleName: string) => {
    // Optionally we could pre-select the vehicle in the form, 
    // but scrolling is fine for now.
    document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-navy mb-4">Our Fleet</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4">
            A wide range of well-maintained vehicles to suit your travel needs, from solo trips to large groups.
          </p>
          <div className="w-24 h-1 bg-black mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {FLEET.map((vehicle, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="h-56 overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-medium text-xl text-navy">{vehicle.name}</h3>
                    <p className="text-gray-600 font-medium text-sm">Best for: {vehicle.bestFor}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Users className="w-4 h-4 text-navy" />
                    <span>{vehicle.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Briefcase className="w-4 h-4 text-navy" />
                    <span>{vehicle.luggage}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Snowflake className="w-4 h-4 text-navy" />
                    <span>{vehicle.ac ? 'AC Available' : 'Non AC'}</span>
                  </div>
                </div>

                <button 
                  onClick={() => scrollToForm(vehicle.name)}
                  className="w-full py-3 bg-navy text-white font-medium rounded-lg hover:bg-navy-800 transition-colors"
                >
                  Book {vehicle.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
