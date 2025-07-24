// Additional components and utilities for Void Studios clone
import React from 'react';
import { motion } from 'framer-motion';

// Animation variants for consistent motion design
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  }
};

export const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: -60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  }
};

export const fadeInRight = {
  hidden: { 
    opacity: 0, 
    x: 60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  }
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Loading screen component
export const LoadingScreen = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-gradient-to-b from-[#F5DDD1] to-[#DEB499] flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
      style={{ pointerEvents: 'none' }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="mb-4 flex justify-center">
          <img 
            src="https://raw.githubusercontent.com/elchinhuseynovv/raw-portfolio/main/Raw%20Media%20Project/Raw%20Visual%20Studio%20.png" 
            alt="Raw Visual Studio Logo" 
            className="h-20 w-auto brightness-75"
          />
        </div>
        <div className="text-xl text-white/50 tracking-widest">STUDIOS</div>
      </motion.div>
    </motion.div>
  );
};

// Scroll indicator component
export const ScrollIndicator = () => {
  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 3 }}
    >
      <div className="text-white/40 text-xs tracking-[0.2em] font-light mb-2 text-center">
        SCROLL
      </div>
      <motion.div 
        className="w-1 h-6 bg-white/30 mx-auto"
        animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

// Client logos section
export const ClientLogos = () => {
  const clients = [
    'AMAN', 'MANDARIN ORIENTAL', 'RITZ-CARLTON', 'W HOTELS', 
    'LUFTHANSA', 'NEW YORK TIMES', 'GOOGLE', 'NIKE', 'PORSCHE'
  ];

  return (
    <section className="py-20 bg-black/10">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h3 className="text-white/40 text-sm tracking-[0.3em] font-light mb-8">
            TRUSTED BY INDUSTRY LEADERS
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-white/30 text-xs tracking-wider hover:text-white/50 transition-colors cursor-pointer"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Stats section
export const StatsSection = () => {
  const stats = [
    { number: '500+', label: 'BILLION VIEWS' },
    { number: '25+', label: 'YEARS EXPERIENCE' },
    { number: '100+', label: 'LUXURY BRANDS' },
    { number: '50+', label: 'COUNTRIES' }
  ];

  return (
    <section className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="text-4xl md:text-6xl font-black text-white/70 mb-2 group-hover:text-white/90 transition-colors">
                {stat.number}
              </div>
              <div className="text-white/40 text-xs tracking-[0.2em] font-light">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Video play button component
export const PlayButton = ({ onClick, className = "" }) => {
  return (
    <motion.button
      className={`group relative ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
        <motion.div
          className="text-white text-2xl ml-1"
          whileHover={{ x: 2 }}
        >
          ▶
        </motion.div>
      </div>
      <div className="absolute inset-0 rounded-full bg-white/10 group-hover:bg-white/5 transition-all duration-300" />
    </motion.button>
  );
};

// Custom cursor component
export const CustomCursor = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-white/50 rounded-full pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: 0,
        y: 0,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 500
      }}
    />
  );
};

// Parallax text component
export const ParallaxText = ({ children, className = "", speed = 0.5 }) => {
  const [offsetY, setOffsetY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={className}
      style={{
        transform: `translateY(${offsetY * speed}px)`
      }}
    >
      {children}
    </div>
  );
};