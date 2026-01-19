import React from 'react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-onels-dark py-24 text-white text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-4">OUR <span className="text-onels-orange">STORY</span></h1>
        <p className="text-xl opacity-70 max-w-2xl mx-auto px-6">The Agility of a Hawk. The Beauty of a Peacock.</p>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 max-w-[1300px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-onels-dark mb-6">Our Philosophy</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-onels-orange rounded-full flex items-center justify-center shrink-0">
                <i className="fas fa-feather-alt text-white"></i>
              </div>
              <div>
                <h4 className="text-xl font-bold">Hawk-Like Agility</h4>
                <p className="text-gray-600">We move through the logistics landscape with precision and speed, ensuring your goods take the fastest route possible.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-onels-dark rounded-full flex items-center justify-center shrink-0">
                <i className="fas fa-eye text-white"></i>
              </div>
              <div>
                <h4 className="text-xl font-bold">Peacock-Like Beauty</h4>
                <p className="text-gray-600">We believe in the beauty of service. Every package is handled with meticulous care and presented professionally.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px]">
          <img src="/late.JPG" alt="ONELS Team" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Local Heritage */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-[1300px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 uppercase tracking-widest text-onels-orange">Rooted in Offa</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
            ONELS was born from the need to connect Offa and the Kwara environment to the rest of Nigeria. 
            We started with a single truck and a vision to make shipping as easy as a local errand.
          </p>
          <div className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-xl">
             <div className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-onels-orange overflow-hidden">
                <img src="/unnamed.jpg" alt="CEO" className="w-full h-full object-cover" />
             </div>
             <h3 className="text-2xl font-bold">Fatimah Yusuf</h3>
             <p className="text-onels-orange font-bold uppercase mb-4">Founder & CEO</p>
             <p className="text-gray-500 italic text-sm">"Logistics is the heartbeat of commerce. We make sure that heart beats strong in Offa."</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;