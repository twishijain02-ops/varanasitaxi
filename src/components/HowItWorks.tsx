import { FileText, IndianRupee, CheckCircle2, Car } from "lucide-react";

const STEPS = [
  { icon: FileText, title: "Fill Enquiry Form", desc: "Share your travel details with us." },
  { icon: IndianRupee, title: "Receive Fare Quote", desc: "Get the best affordable pricing." },
  { icon: CheckCircle2, title: "Confirm Booking", desc: "Confirm your ride instantly." },
  { icon: Car, title: "Enjoy Your Journey", desc: "Travel safely and comfortably." }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-navy mb-4">How Booking Works</h2>
          <div className="w-24 h-1 bg-black mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (visible on large screens) */}
          <div className="hidden lg:block absolute top-12 left-1/8 right-1/8 h-0.5 bg-gray-200 z-0" />
          
          {STEPS.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white border-4 border-gray-50 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center shadow-inner">
                  <step.icon className="w-8 h-8" />
                </div>
              </div>
              <h3 className="font-medium text-lg text-navy mb-2">
                <span className="text-gray-600 mr-2">{idx + 1}.</span>
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm max-w-[200px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
