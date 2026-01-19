import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-onels-dark text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-onels-orange">ONELS</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            The agility of a hawk and the beauty of a peacock. Premier logistics from Offa to the world.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6 text-onels-orange uppercase tracking-widest">Links</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/tracking" className="hover:text-white transition-colors">Tracking</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6 text-onels-orange uppercase tracking-widest">Contact</h4>
          <ul className="space-y-3 text-gray-400 text-sm font-medium">
            <li>Offa, Kwara State</li>
            <li>080-ONELS-NOW</li>
            <li>info@onels.com.ng</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6 text-onels-orange uppercase tracking-widest">Follow Us</h4>
          <div className="flex gap-4 text-2xl text-gray-400">
            <i className="fab fa-facebook hover:text-white cursor-pointer transition-colors"></i>
            <i className="fab fa-instagram hover:text-white cursor-pointer transition-colors"></i>
            <i className="fab fa-twitter hover:text-white cursor-pointer transition-colors"></i>
          </div>
        </div>
      </div>
      <div className="text-center mt-16 pt-8 border-t border-white/5 text-gray-500 text-xs uppercase tracking-tighter">
        &copy; {new Date().getFullYear()} ONELS Logistics Services. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;