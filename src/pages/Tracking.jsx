import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Tracking = () => {
  const [trackingNum, setTrackingNum] = useState('');
  const [result, setResult] = useState(null);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero with Image Background */}
      <section className="relative py-32 flex items-center justify-center text-white overflow-hidden">
        <img src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover" alt="Tracking Background" />
        <div className="absolute inset-0 bg-onels-dark/70"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">Track Your Goods</h1>
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-2 rounded-2xl flex flex-col md:flex-row gap-2 border border-white/20">
            <input 
              className="flex-1 bg-transparent p-4 outline-none text-white placeholder:text-gray-300 font-bold"
              placeholder="Enter Tracking ID (e.g. ONL123456)"
              onChange={(e) => setTrackingNum(e.target.value)}
            />
            <button className="bg-onels-orange text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-onels-orange transition-all">
              LOCATE NOW
            </button>
          </div>
        </div>
      </section>

      {/* Map results follow same logic as before */}
    </div>
  );
};

export default Tracking;