import { motion } from "motion/react";
import { CONTACT_INFO } from "../data";

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-end justify-start overflow-hidden pb-24">
      {/* Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 w-full h-full object-cover"
      >
        <source src="https://v1.pinimg.com/videos/iht/expMp4/e1/6a/09/e16a09e54591856fe131763e32eed0af_720w.mp4" type="video/mp4" />
      </video>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 text-left">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-tight mb-6 drop-shadow-lg"
        >
          Your Trusted Taxi Service in <br className="hidden md:block" />
          <span className="text-white">Varanasi & North India</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-100 mb-10 max-w-3xl font-medium drop-shadow-md"
        >
          Local Sightseeing • Airport Transfers • Outstation Trips • Nepal Tours
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-start justify-start gap-4"
        >
          <button 
            onClick={scrollToForm}
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-100 text-black font-medium rounded-lg text-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            Book Now
          </button>
          
          <a 
            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hi, I want to book a taxi.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-black hover:bg-gray-900 text-white font-medium rounded-lg text-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            WhatsApp Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
