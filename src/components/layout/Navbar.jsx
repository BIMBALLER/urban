import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle background color change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${scrolled ? 'bg-onels-dark py-2 shadow-2xl' : 'bg-onels-orange py-4'}`}>
      <nav className="max-w-[1300px] mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          {/* Replicated SVG Logo from index.html */}
          <svg width="200" height="80" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
            {/* Falcon Body (Sharp & Fast) */}
            <path d="M10 40 Q30 20 50 40 T90 40" fill="none" stroke="#ffa500" strokeWidth="4" />
            
            {/* Wings (Speed Lines) */}
            <path d="M20 30 L10 10 M40 35 L30 15 M60 40 L50 20" stroke="#ffa500" strokeWidth="3" fill="none" />
            
            {/* Peacock Tail Feathers (Offa Touch) */}
            <path d="M90 40 Q120 20 140 40 Q160 60 180 40" fill={scrolled ? "transparent" : "#FFFFFF"} stroke="#ffa500" strokeWidth="3" />
            
            {/* Feather Eyes (Trustworthy Gaze) */}
            <circle cx="110" cy="30" r="3" fill="#ffa500" />
            <circle cx="130" cy="35" r="2" fill={scrolled ? "#ffa500" : "#FFFFFF"} />
            <circle cx="150" cy="30" r="3" fill="#ffa500" />
            
            {/* Text: ONELS */}
            <text x="10" y="65" fontFamily="Segoe UI, sans-serif" fontSize="24" fontWeight="900" fill={scrolled ? "#ffa500" : "#FFFFFF"}>
              ONELS
            </text>
          </svg>
        </Link>

        {/* Mobile Toggle */}
        <button className={`md:hidden text-2xl ${scrolled ? 'text-white' : 'text-onels-dark'}`} onClick={() => setIsOpen(!isOpen)}>
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        {/* Navigation Links */}
        <ul className={`fixed md:relative top-20 md:top-0 left-0 w-full md:w-auto flex flex-col md:flex-row items-center gap-8 py-10 md:py-0 transition-all ${scrolled ? 'bg-onels-dark text-white' : 'bg-onels-orange text-onels-dark'} ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
          <li><Link to="/" className="font-bold hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" className="font-bold hover:text-white transition-colors" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/services" className="font-bold hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/contact" className="font-bold hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li><Link to="/tracking" className="font-bold hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Tracking</Link></li>
          <li>
            <Link to="/dashboard" className={`px-6 py-2 rounded-full font-bold transition-all ${scrolled ? 'bg-onels-orange text-white' : 'bg-onels-dark text-white'}`} onClick={() => setIsOpen(false)}>
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;