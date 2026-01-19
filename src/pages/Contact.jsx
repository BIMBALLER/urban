import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header Section - Updated with Customer Service Image */}
      <section 
        className="relative py-32 text-white text-center bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(17, 17, 17, 0.75), rgba(255, 165, 0, 0.4)), url('https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=1973&auto=format&fit=crop')` 
        }}
      >
        <div className="relative z-10 px-6">
          <div className="inline-block px-4 py-1 rounded-full bg-onels-orange/20 border border-onels-orange/50 text-onels-orange font-bold text-xs uppercase tracking-widest mb-4">
            Customer Support Center
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
            We Are <span className="text-onels-orange underline decoration-white/20">Listening</span>
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-medium leading-relaxed">
            From Offa to the rest of the world, our dedicated support team ensures 
            your journey is as smooth as a peacock's glide.
          </p>
        </div>
        
        {/* Subtle bottom curve for elegance */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 fill-white">
            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"></path>
          </svg>
        </div>
      </section>

      <div className="max-w-[1300px] mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Column: Contact Details & The Old Phone Image */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-black text-onels-dark mb-6 tracking-tight">Direct Support</h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Skip the wait. Reach out to our logistics specialists directly for real-time tracking, 
                quote requests, or delivery partnership inquiries.
              </p>
            </div>

            {/* Classic Telephone Image - Permanent Overlay */}
            <div className="rounded-[2.5rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] h-80 relative border-4 border-onels-orange/10 group">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDHi1e-f-Idk0cVu-YsAI5zJrB8x9ZZGv6JA&s" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                alt="" 
              />
              <div className="absolute inset-0 bg-onels-dark/50 flex flex-col items-center justify-center backdrop-blur-[1px]">
                <div className="bg-onels-orange p-5 rounded-3xl mb-4 shadow-xl transform group-hover:rotate-12 transition-transform">
                  <i className="fas fa-phone-alt text-white text-3xl"></i>
                </div>
                <p className="text-white font-black tracking-[0.3em] uppercase text-sm">Reliability First</p>
                <div className="mt-2 h-1 w-12 bg-onels-orange rounded-full"></div>
                <p className="text-onels-orange text-xs mt-3 uppercase font-bold tracking-widest">Available 24/7</p>
              </div>
            </div>

            {/* Contact Details Cards */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-onels-orange/30 transition-colors">
                <i className="fas fa-map-marker-alt text-onels-orange text-2xl mb-4"></i>
                <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Our Base</p>
                <p className="text-onels-dark font-bold">Ijagbo-Offa, Kwara State</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-onels-orange/30 transition-colors">
                <i className="fab fa-whatsapp text-onels-orange text-2xl mb-4"></i>
                <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Hotline</p>
                <p className="text-onels-dark font-bold">Instant Response</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-[0_35px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-100">
            <h3 className="text-2xl font-black mb-10 text-onels-dark uppercase tracking-tight flex items-center gap-3">
              <span className="w-8 h-1 bg-onels-orange inline-block"></span>
              Send a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase text-gray-400 ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-onels-orange transition-all font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase text-gray-400 ml-1">Email</label>
                  <input type="email" placeholder="john@onels.com" className="w-full p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-onels-orange transition-all font-medium" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase text-gray-400 ml-1">Subject</label>
                <input type="text" placeholder="Shipment Tracking #123" className="w-full p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-onels-orange transition-all font-medium" />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase text-gray-400 ml-1">Your Message</label>
                <textarea rows="5" placeholder="How can we assist you today?" className="w-full p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-onels-orange transition-all resize-none font-medium"></textarea>
              </div>

              <button className="w-full bg-onels-dark text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-onels-orange transition-all transform hover:-translate-y-1 shadow-2xl active:scale-95">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;