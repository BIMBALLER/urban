import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover" 
            alt="Logistics Background" 
          />
          {/* The Gradient Overlay from your original CSS */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-none animate-in fade-in slide-in-from-left duration-1000">
              RELIABLE. <br/>
              <span className="text-onels-orange">FAST.</span> <br/>
              SECURE.
            </h1>
            <p className="text-xl md:text-2xl mb-10 font-light opacity-90 max-w-xl">
              Premium Logistics Services from Offa to every corner of Nigeria. 
              We don't just move boxes; we move businesses.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="bg-onels-orange hover:bg-white hover:text-onels-orange px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl shadow-orange-500/20">
                Book a Shipment
              </Link>
              <Link to="/tracking" className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-onels-dark px-10 py-4 rounded-full font-bold transition-all">
                Track Package
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Local Image */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1300px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-onels-orange uppercase tracking-tighter">Our Journey</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Founded in the heart of Offa, ONELS started with a simple mission: 
              to provide seamless and reliable logistics. Today, we are one of Nigeria's 
              fastest-growing logistics companies.
            </p>
            <div className="p-6 border-l-8 border-onels-orange bg-white shadow-sm rounded-r-2xl">
              <p className="font-bold italic text-onels-dark text-xl">
                "From humble beginnings to nationwide operations — we deliver excellence, every time."
              </p>
            </div>
          </div>
          
          {/* Image Container */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-onels-orange rounded-3xl rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-200 aspect-video">
                {/* IMPORTANT: Move your 'late.JPG' to the 'public' folder 
                   and it will appear here 
                */}
                <img 
                  src="/latee.JPG" 
                  alt="ONELS Fleet" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/800x600?text=Move+late.JPG+to+public+folder'; }}
                />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;