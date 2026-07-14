import { CONTACT_INFO } from "../data";
import { Car, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToForm = () => {
    document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-800 text-white pt-16 pb-8 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={scrollToTop}>
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-navy" />
              </div>
              <span className="font-display font-medium text-2xl tracking-tight">
                Varanasi<span className="text-white">Taxi</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted partner for safe, comfortable, and affordable rides in Varanasi and across North India.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><button onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors">Home</button></li>
              <li><button onClick={scrollToForm} className="text-gray-400 hover:text-white transition-colors">Book a Ride</button></li>
              <li><a href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">WhatsApp Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium text-lg mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Local Sightseeing</li>
              <li className="text-gray-400">Airport Transfers</li>
              <li className="text-gray-400">Outstation Trips</li>
              <li className="text-gray-400">Nepal Tour Packages</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-lg mb-6 text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400"><span className="text-gray-300 font-semibold block mb-1">Phone:</span> {CONTACT_INFO.phone}</li>
              <li className="text-gray-400"><span className="text-gray-300 font-semibold block mb-1">Email:</span> {CONTACT_INFO.email}</li>
              <li className="text-gray-400"><span className="text-gray-300 font-semibold block mb-1">Address:</span> {CONTACT_INFO.address}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Varanasi Taxi Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
