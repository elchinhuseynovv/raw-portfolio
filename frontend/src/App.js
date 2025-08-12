import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useInView as useInViewHook } from 'react-intersection-observer';

// Import page components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import VideosPage from './pages/VideosPage';
import ForbesPage from './pages/ForbesPage';
import ContactPage from './pages/ContactPage';
import PresetsPage from './pages/PresetsPage';
import ClientsPage from './pages/ClientsPage';
import CustomCursor from './components/CustomCursor';

const App = () => {
  return (
    <Router>
      <div className="App">
        <VoidStudiosApp />
      </div>
    </Router>
  );
};

const VoidStudiosApp = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="void-studios">
      {/* Custom Cursor - Global */}
      <CustomCursor />
      
      {/* Navigation Header - shown on all pages */}
      <Header />
      
      {/* Route-based content */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/forbes" element={<ForbesPage />} />
        <Route path="/presets" element={<PresetsPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div 
          className="cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={closeMenu}
        >
          <img 
            src="/raw-visual-studio-logo.png" 
            alt="Raw Visual Studio Logo" 
            className="h-16 w-auto brightness-90"
          />
        </motion.div>
        <motion.div 
          className="text-gray-200 text-sm font-light tracking-widest cursor-pointer hover:text-gray-300 transition-colors"
          whileHover={{ scale: 1.05 }}
          onClick={toggleMenu}
        >
          BRING IT ON ✦✦✦
        </motion.div>
      </motion.header>

      {/* Navigation Menu Overlay */}
      <NavigationMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
};

const NavigationMenu = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const menuItems = [
    { name: 'HOME', path: '/home' },
    { name: 'ABOUT', path: '/about' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'CLIENTS', path: '/clients' },
    { name: 'SERVICES', path: '/services' },
    { name: 'PRESETS', path: '/presets' },
    { name: 'CONTACT', path: '/contact' }
  ];

  const handleNavigation = (path, name) => {
    navigate(path);
    onClose();
    console.log(`Navigate to ${name}`);
  };

  return (
    <motion.div
      className={`fixed inset-0 z-[100] bg-gradient-to-b from-[#0a0a0a] to-[#000000] ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Close Button */}
      <motion.button
        className="absolute top-8 right-8 text-gray-200 text-2xl font-light hover:text-gray-400 transition-colors z-[110]"
        onClick={onClose}
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: isOpen ? 1 : 0, rotate: isOpen ? 0 : -90 }}
        transition={{ duration: 0.3, delay: isOpen ? 0.2 : 0 }}
        whileHover={{ scale: 1.1, rotate: 90 }}
      >
        ✕
      </motion.button>

      {/* Logo */}
      <motion.div
        className="absolute top-8 left-8 cursor-pointer"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
        transition={{ duration: 0.5, delay: isOpen ? 0.1 : 0 }}
        onClick={() => handleNavigation('/home', 'HOME')}
      >
        <img 
          src="/raw-visual-studio-logo.png" 
          alt="Raw Visual Studio Logo" 
          className="h-16 w-auto brightness-90"
        />
      </motion.div>

      {/* Navigation Items */}
      <div className="flex items-center justify-center min-h-screen">
        <motion.nav
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 50 }}
          transition={{ duration: 0.6, delay: isOpen ? 0.3 : 0 }}
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 30 }}
              transition={{ 
                duration: 0.5, 
                delay: isOpen ? 0.4 + (index * 0.1) : 0,
                ease: "easeOut"
              }}
              className="mb-6"
            >
              <HoverSlideText 
                text={item.name} 
                onClick={() => handleNavigation(item.path, item.name)} 
              />
            </motion.div>
          ))}
        </motion.nav>
      </div>
    </motion.div>
  );
};

const HoverSlideText = ({ text, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <motion.div
        className="text-[4rem] md:text-[5rem] font-black text-gray-300/90 leading-none tracking-tight"
        animate={{
          y: isHovered ? '-100%' : '0%',
        }}
        transition={{
          duration: 0.4,
          ease: [0.23, 1, 0.320, 1], // Custom cubic bezier for smooth easing
        }}
      >
        {text}
      </motion.div>
      <motion.div
        className="absolute top-0 left-0 text-[4rem] md:text-[5rem] font-black text-gray-100 leading-none tracking-tight"
        animate={{
          y: isHovered ? '0%' : '100%',
        }}
        transition={{
          duration: 0.4,
          ease: [0.23, 1, 0.320, 1], // Custom cubic bezier for smooth easing
        }}
      >
        {text}
      </motion.div>
    </div>
  );
};

export default App;