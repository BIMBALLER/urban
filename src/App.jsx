import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/layout/WhatsAppFloat';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Tracking from './pages/Tracking';
import UserDashboard from './pages/Dashboard/UserDashboard';

function App() {
  return (
    <Router>
      {/* Container to keep footer at bottom */}
      <div className="flex flex-col min-h-screen font-sans">
        
        {/* Navbar: Visible on all pages */}
        <Navbar />

        {/* Main Content: Changes based on route */}
        <main className="flex-grow pt-20"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/dashboard" element={<UserDashboard />} />
          </Routes>
        </main>

        {/* Footer & WhatsApp: Visible on all pages */}
        <Footer />
        <WhatsAppFloat />

      </div>
    </Router>
  );
}

export default App;