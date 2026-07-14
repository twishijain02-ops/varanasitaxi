/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Fleet from './components/Fleet';
import HowItWorks from './components/HowItWorks';
import Packages from './components/Packages';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import EnquiryForm from './components/EnquiryForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Car } from 'lucide-react';

function Navbar() {
  const scrollToForm = () => {
    document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 bg-white/70 backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl max-w-7xl mx-auto">
      <div className="px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center shadow-inner">
            <Car className="w-6 h-6 text-white" />
          </div>
          <span className="font-display font-medium text-2xl tracking-tight text-black">
            Varanasi<span className="text-gray-500">Taxi</span>
          </span>
        </div>
        
        <button 
          onClick={scrollToForm}
          className="px-6 py-2 bg-black hover:bg-gray-800 text-white font-medium rounded-lg transition-colors shadow-sm"
        >
          Book Now
        </button>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <Fleet />
        <HowItWorks />
        <Packages />
        <Reviews />
        <Gallery />
        <FAQ />
        <EnquiryForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

