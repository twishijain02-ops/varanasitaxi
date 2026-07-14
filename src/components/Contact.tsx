import { CONTACT_INFO } from "../data";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-navy mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-black mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-medium text-navy mb-6">Get in Touch</h3>
              <p className="text-gray-600 mb-8">
                Ready to book your ride or have a question? Reach out to us via phone, WhatsApp, or email. We are available 24/7.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 text-black rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold mb-1">Phone Number</p>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-lg font-medium text-navy hover:text-black transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black/10 text-black rounded-full flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold mb-1">WhatsApp</p>
                  <a href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-navy hover:text-black transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 text-black rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold mb-1">Email</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg font-medium text-navy hover:text-black transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 text-black rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold mb-1">Business Hours</p>
                  <p className="text-lg font-medium text-navy">{CONTACT_INFO.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 text-black rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold mb-1">Address</p>
                  <p className="text-lg font-medium text-navy max-w-[250px]">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[400px] lg:h-auto rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <iframe 
              src={CONTACT_INFO.mapUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
