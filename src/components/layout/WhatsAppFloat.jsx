import React from 'react';

const WhatsAppFloat = () => {
  return (
    <a 
      href="https://wa.me/2348030000000" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center text-3xl shadow-2xl z-[9999] hover:scale-110 transition-transform animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppFloat;