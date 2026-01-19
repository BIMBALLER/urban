import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Contact Hero Section */}
      <section className="relative bg-onels-dark py-24 text-center text-white">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80" 
            alt="Contact Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter">CONTACT <span className="text-onels-orange">US</span></h1>
          <p className="text-xl max-w-2xl mx-auto font-light">
            We are always ready to help you move your goods anywhere in Offa and beyond.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-[1300px] mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
        
        {/* Contact Form */}
        <div className="bg-slate-50 p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
          <h2 className="text-3xl font-bold mb-8 text-onels-dark">Get In Touch</h2>
          
          {submitted ? (
            <div className="bg-green-100 text-green-700 p-6 rounded-2xl animate-bounce">
              <p className="font-bold text-center">Thank you! Your message has been sent successfully.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    required 
                    className="w-full p-4 rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-onels-orange outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    required 
                    className="w-full p-4 rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-onels-orange outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="Enter your phone number" 
                  required 
                  className="w-full p-4 rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-onels-orange outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Message</label>
                <textarea 
                  rows="5" 
                  placeholder="How can we help you?" 
                  required 
                  className="w-full p-4 rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-onels-orange outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-onels-orange text-white py-4 rounded-xl font-bold text-lg hover:bg-onels-dark transition-all transform hover:-translate-y-1 shadow-lg shadow-orange-500/20"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Info Blocks */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="group p-8 rounded-2xl hover:bg-onels-orange hover:text-white transition-all duration-300 shadow-sm border border-slate-100">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-orange-100 text-onels-orange rounded-full flex items-center justify-center text-2xl group-hover:bg-white">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold">Our Office</h3>
                <p className="opacity-80">Offa, Kwara State, Nigeria</p>
              </div>
            </div>
          </div>

          <div className="group p-8 rounded-2xl hover:bg-onels-orange hover:text-white transition-all duration-300 shadow-sm border border-slate-100">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-orange-100 text-onels-orange rounded-full flex items-center justify-center text-2xl group-hover:bg-white">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold">Email Us</h3>
                <p className="opacity-80">info@onels.com.ng</p>
              </div>
            </div>
          </div>

          <div className="group p-8 rounded-2xl hover:bg-onels-orange hover:text-white transition-all duration-300 shadow-sm border border-slate-100">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-orange-100 text-onels-orange rounded-full flex items-center justify-center text-2xl group-hover:bg-white">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold">Call Center</h3>
                <p className="opacity-80">080-ONELS-NOW</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// THIS IS THE LINE YOU WERE MISSING
export default Contact;