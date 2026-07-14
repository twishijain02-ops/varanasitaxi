import { Clock, Users, IndianRupee, ShieldCheck, HeartHandshake, MapPin } from "lucide-react";

const REASONS = [
  { icon: Clock, title: "24/7 Service", desc: "Available round the clock for your convenience." },
  { icon: Users, title: "Professional Drivers", desc: "Experienced, polite, and route-aware chauffeurs." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Transparent rates with no hidden charges." },
  { icon: ShieldCheck, title: "Clean & Sanitized", desc: "Well-maintained cars for a hygienic ride." },
  { icon: HeartHandshake, title: "Safe & Comfortable", desc: "Your safety is our utmost priority." },
  { icon: MapPin, title: "On-Time Pickup", desc: "Punctual service ensuring you never miss a flight." }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-navy mb-4">Why Choose Us</h2>
          <div className="w-24 h-1 bg-black mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((reason, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                <reason.icon className="w-8 h-8" />
              </div>
              <h3 className="font-medium text-xl text-navy mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
