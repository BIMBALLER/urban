import React, { useState } from 'react';

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);

  const services = [
    { 
      title: "Interstate Shipping", 
      price: "From ₦5,000", 
      img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80",
      desc: "Reliable haulage from Offa to Lagos, Abuja, and Port Harcourt daily."
    },
    { 
      title: "Express Bike Delivery", 
      price: "From ₦1,500", 
      img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80",
      desc: "Instant delivery within Offa and Ilorin environments for small packages."
    },
    { 
      title: "Corporate Logistics", 
      price: "Custom Quote", 
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
      desc: "Bulk warehousing and supply chain solutions for businesses."
    }
  ];

  return (
    <div className="bg-white pb-20">
      <section className="bg-onels-orange py-24 text-center text-white">
        <h1 className="text-5xl font-black mb-4">PREMIUM SOLUTIONS</h1>
        <p className="text-xl max-w-2xl mx-auto opacity-90 px-6">Combining the agility of a hawk with the meticulous beauty of a peacock.</p>
      </section>

      <div className="max-w-[1300px] mx-auto px-6 -mt-12 grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="bg-white rounded-3xl shadow-2xl overflow-hidden group hover:-translate-y-2 transition-all">
            <div className="h-56 overflow-hidden">
              <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
              <p className="text-gray-500 mb-6 text-sm leading-relaxed">{s.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-onels-orange font-black text-xl">{s.price}</span>
                <button onClick={() => {setIsModalOpen(true); setStep(1)}} className="bg-onels-dark text-white px-6 py-2 rounded-xl font-bold hover:bg-onels-orange transition-colors">Book</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal logic remains the same as previous version */}
    </div>
  );
};

export default Services;