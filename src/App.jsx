import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components (Make sure these files exist in src/components/layout/)
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/layout/WhatsAppFloat';

// Page Components (Make sure these files exist in src/pages/)
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Tracking from './pages/Tracking';
import Contact from './pages/Contact';
import UserDashboard from './pages/Dashboard/UserDashboard';

/**
 * ONELS Logistics - Main Application Component
 * Built with React, Tailwind CSS, and Framer-like transitions.
 */
function App() {
  return (
    <Router>
      {/* The flex-col and min-h-screen classes ensure that the 
        footer stays at the bottom even on pages with little content.
      */}
      <div className="flex flex-col min-h-screen font-sans bg-white selection:bg-onels-orange selection:text-white">
        
        {/* Navigation Bar - Stays fixed at the top */}
        <Navbar />

        {/* Main Content Area 
          pt-20 (Padding Top) ensures content starts below the fixed Navbar 
        */}
        <main className="flex-grow pt-20">
          <Routes>
            {/* Landing Page */}
            <Route path="/" element={<Home />} />

            {/* About Page (Heritage & Vision) */}
            <Route path="/about" element={<About />} />

            {/* Services Page (Shipping Options) */}
            <Route path="/services" element={<Services />} />

            {/* Tracking Page (Live Map Integration) */}
            <Route path="/tracking" element={<Tracking />} />

            {/* Contact Page (Inquiry Form) */}
            <Route path="/contact" element={<Contact />} />

            {/* User Dashboard (Stats & History) */}
            <Route path="/dashboard" element={<UserDashboard />} />

            {/* 404 Fallback - Redirects to Home if page not found */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Universal Footer - Visible on all pages */}
        <Footer />

        {/* Floating WhatsApp Action Button */}
        <WhatsAppFloat />

      </div>
    </Router>
  );
}

export default App;