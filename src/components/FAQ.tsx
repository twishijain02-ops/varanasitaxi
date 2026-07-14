import { useState } from "react";
import { FAQS } from "../data";
import { ChevronDown } from "lucide-react";
import { cn } from "../utils";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-navy mb-4">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-black mx-auto rounded-full" />
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={cn(
                  "border rounded-lg overflow-hidden transition-colors duration-300",
                  isOpen ? "bg-white border-black shadow-sm" : "bg-white border-gray-200"
                )}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-medium text-navy pr-8">{faq.q}</span>
                  <ChevronDown className={cn("w-5 h-5 text-gray-500 shrink-0 transition-transform duration-300", isOpen && "rotate-180 text-black")} />
                </button>
                <div 
                  className={cn(
                    "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-48 pb-5 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
