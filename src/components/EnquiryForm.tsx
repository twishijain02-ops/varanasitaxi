import { useState } from "react";
import { CONTACT_INFO } from "../data";
import { Send } from "lucide-react";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    pickup: "",
    drop: "",
    date: "",
    time: "",
    service: "Local Sightseeing",
    vehicle: "Swift Dzire",
    passengers: "1",
    bags: "0",
    roundTrip: "No",
    needDriver: "Yes",
    notes: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*New Taxi Booking Enquiry*

*Name:* ${formData.name}
*Phone:* ${formData.mobile}
${formData.email ? `*Email:* ${formData.email}\n` : ''}
*Pickup:* ${formData.pickup}
*Drop:* ${formData.drop}
*Date:* ${formData.date}
*Time:* ${formData.time}

*Service:* ${formData.service}
*Vehicle:* ${formData.vehicle}
*Passengers:* ${formData.passengers}
*Bags:* ${formData.bags}
*Round Trip:* ${formData.roundTrip}
*Need Driver:* ${formData.needDriver}

*Additional Notes:* 
${formData.notes || 'None'}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="booking-form" className="py-20 bg-navy text-white relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-4">Book Your Ride Now</h2>
          <p className="text-gray-300">Fill out the details below to get an instant fare quote on WhatsApp.</p>
          <div className="w-24 h-1 bg-black mx-auto rounded-full mt-6" />
        </div>

        <form onSubmit={handleSubmit} className="bg-white text-navy rounded-2xl p-6 md:p-10 shadow-xl">
          
          <h3 className="text-xl font-medium mb-6 text-gray-600 border-b pb-2">Personal Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm font-semibold mb-2">Full Name *</label>
              <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all" placeholder="Rahul Sharma" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Mobile Number *</label>
              <input required type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all" placeholder="9876543210" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email (Optional)</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all" placeholder="rahul@example.com" />
            </div>
          </div>

          <h3 className="text-xl font-medium mb-6 text-gray-600 border-b pb-2">Trip Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Pickup Location *</label>
              <input required type="text" name="pickup" value={formData.pickup} onChange={handleChange} className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-black outline-none" placeholder="Varanasi Airport / Hotel Name" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Drop Location *</label>
              <input required type="text" name="drop" value={formData.drop} onChange={handleChange} className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-black outline-none" placeholder="Kashi Vishwanath / Destination" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Date *</label>
              <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-black outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Time *</label>
              <input required type="time" name="time" value={formData.time} onChange={handleChange} className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-black outline-none" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Select Service</label>
              <select name="service" value={formData.service} onChange={handleChange} className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-black outline-none cursor-pointer">
                <option>Local Sightseeing</option>
                <option>Airport Pickup</option>
                <option>Railway Pickup</option>
                <option>Outstation</option>
                <option>Nepal Tour</option>
                <option>Wedding</option>
                <option>Corporate</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Select Vehicle</label>
              <select name="vehicle" value={formData.vehicle} onChange={handleChange} className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-black outline-none cursor-pointer">
                <option>Swift Dzire</option>
                <option>Maruti Ertiga</option>
                <option>Toyota Innova</option>
                <option>Innova Crysta</option>
                <option>Force Urbania</option>
                <option>Tempo Traveller</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Number of Passengers</label>
              <select name="passengers" value={formData.passengers} onChange={handleChange} className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-black outline-none cursor-pointer">
                {[...Array(20)].map((_, i) => <option key={i}>{i + 1}</option>)}
                <option>20+</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm font-semibold mb-2">Number of Bags</label>
              <select name="bags" value={formData.bags} onChange={handleChange} className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-black outline-none cursor-pointer">
                {[...Array(11)].map((_, i) => <option key={i}>{i}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Round Trip?</label>
              <div className="flex gap-4 mt-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="roundTrip" value="Yes" checked={formData.roundTrip === "Yes"} onChange={handleChange} className="accent-black w-4 h-4" /> Yes
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="roundTrip" value="No" checked={formData.roundTrip === "No"} onChange={handleChange} className="accent-black w-4 h-4" /> No
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Need Driver?</label>
              <div className="flex gap-4 mt-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="needDriver" value="Yes" checked={formData.needDriver === "Yes"} onChange={handleChange} className="accent-black w-4 h-4" /> Yes
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="needDriver" value="No" checked={formData.needDriver === "No"} onChange={handleChange} className="accent-black w-4 h-4" /> No
                </label>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-semibold mb-2">Additional Requirements</label>
            <textarea 
              name="notes" 
              value={formData.notes} 
              onChange={handleChange} 
              rows={3} 
              className="w-full border-gray-300 rounded-lg p-3 bg-gray-50 focus:ring-2 focus:ring-black outline-none resize-none" 
              placeholder="E.g., Need child seat, hotel pickup, early morning pickup etc."
            />
          </div>

          <div className="flex justify-center">
            <button 
              type="submit" 
              className="w-full md:w-auto px-10 py-4 bg-black hover:bg-gray-800 text-white font-medium rounded-lg text-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <Send className="w-5 h-5" />
              Get Fare on WhatsApp
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
