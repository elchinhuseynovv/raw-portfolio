import React from 'react';
import { motion } from 'framer-motion';
import { useInView as useInViewHook } from 'react-intersection-observer';

const VideosPage = () => {
  return (
    <div className="videos-page">
      {/* Hero Section */}
      <VideosHeroSection />
      
      {/* Showreel Section */}
      <ShowreelSection />
      
      {/* Portfolio Grid */}
      <PortfolioGrid />
      
      {/* Client Showcase */}
      <ClientShowcase />
    </div>
  );
};

const VideosHeroSection = () => {
  const [ref, inView] = useInViewHook({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section 
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-[#1a1a1a] via-[#111111] to-[#0a0a0a] flex items-center justify-center relative overflow-hidden"
    >
      <div className="text-center px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          <h1 className="text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-black text-gray-200/80 leading-none tracking-tight">
            VIDEOS
          </h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] font-black text-gray-300/60 leading-none tracking-tight -mt-8"
          >
            PORTFOLIO
          </motion.h2>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-gray-300/70 text-lg md:text-xl mt-12 max-w-3xl mx-auto font-light tracking-wide leading-relaxed"
        >
          Explore our award-winning collection of cinematic storytelling. From luxury travel narratives to branded content that drives engagement, our portfolio showcases 500+ billion views of compelling visual experiences.
        </motion.p>
      </div>
    </section>
  );
};

const ShowreelSection = () => {
  const [ref, inView] = useInViewHook({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section 
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#000000] flex items-center justify-center relative"
    >
      <div className="max-w-7xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="text-[6rem] md:text-[8rem] lg:text-[12rem] font-black text-gray-200/70 leading-none tracking-tight mb-12">
            SHOWREEL
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="relative group cursor-pointer max-w-4xl mx-auto"
        >
          <img 
            src="https://images.unsplash.com/photo-1639701386739-449a0e789367"
            alt="Showreel"
            className="w-full h-[60vh] object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 rounded-2xl group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
            <motion.div
              className="w-24 h-24 bg-gray-200/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-gray-200/30 transition-all duration-300"
              whileHover={{ rotate: 90, scale: 1.1 }}
            >
              <div className="text-gray-200 text-4xl ml-2">▶</div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="text-gray-300/60 text-lg mt-8 font-light tracking-wide"
        >
          Our latest showreel featuring Emmy® award-winning work for luxury brands worldwide
        </motion.p>
      </div>
    </section>
  );
};

const PortfolioGrid = () => {
  const [ref, inView] = useInViewHook({
    threshold: 0.3,
    triggerOnce: true,
  });

  const portfolioItems = [
    {
      title: "LUXURY RESORTS",
      category: "Hospitality",
      image: "https://images.unsplash.com/photo-1661827452166-98dd61eb38cc",
      description: "Cinematic storytelling for world-class destinations"
    },
    {
      title: "TRAVEL DOCUMENTARIES",
      category: "Documentary",
      image: "https://images.unsplash.com/photo-1531651008558-ed1740375b39",
      description: "Award-winning narratives that inspire wanderlust"
    },
    {
      title: "BRAND CAMPAIGNS",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1639701386739-449a0e789367",
      description: "Branded content that drives engagement and revenue"
    },
    {
      title: "DESTINATION MARKETING",
      category: "Tourism",
      image: "https://images.unsplash.com/photo-1577190651915-bf62d54d5b36",
      description: "Tourism board campaigns with global reach"
    },
    {
      title: "STREAMING CONTENT",
      category: "Platform",
      image: "https://images.unsplash.com/photo-1661827452166-98dd61eb38cc",
      description: "High-production content for Netflix, Amazon, Disney"
    },
    {
      title: "CORPORATE STORIES",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1531651008558-ed1740375b39",
      description: "Authentic narratives for Fortune 500 companies"
    }
  ];

  return (
    <section 
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-[#000000] to-[#0a0a0a] py-20"
    >
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h1 className="text-[6rem] md:text-[8rem] lg:text-[12rem] font-black text-gray-200/70 leading-none tracking-tight mb-8">
            PORTFOLIO
          </h1>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500" />
                <div className="absolute top-4 right-4">
                  <span className="bg-gray-200/20 backdrop-blur-sm px-3 py-1 rounded-full text-gray-200 text-xs font-light tracking-wider">
                    {item.category}
                  </span>
                </div>
                <motion.div
                  className="absolute bottom-4 right-4 w-12 h-12 bg-gray-200/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-gray-200/30 transition-all duration-300"
                  whileHover={{ rotate: 90 }}
                >
                  <div className="text-gray-200 text-lg">▶</div>
                </motion.div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-200/90 mb-2">{item.title}</h3>
                <p className="text-gray-300/70 text-sm font-light leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ClientShowcase = () => {
  const [ref, inView] = useInViewHook({
    threshold: 0.3,
    triggerOnce: true,
  });

  const clients = [
    "AMAN RESORTS", "MANDARIN ORIENTAL", "RITZ-CARLTON", "W HOTELS",
    "LUFTHANSA", "NEW YORK TIMES", "NETFLIX", "AMAZON PRIME",
    "DISNEY+", "GOOGLE", "NIKE", "PORSCHE"
  ];

  return (
    <section 
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#000000] flex items-center justify-center relative"
    >
      <div className="max-w-7xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-[6rem] md:text-[8rem] lg:text-[12rem] font-black text-gray-200/70 leading-none tracking-tight mb-12">
            CLIENTS
          </h1>
          <p className="text-gray-300/60 text-lg max-w-3xl mx-auto font-light leading-relaxed mb-16">
            Trusted by industry leaders worldwide to create compelling visual narratives
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + (index * 0.1) }}
              className="text-gray-400/50 text-sm font-light tracking-wider hover:text-gray-300/70 transition-colors cursor-pointer p-4"
            >
              {client}
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-20"
        >
          <div className="text-gray-400/40 text-lg tracking-[0.2em] font-light">
            500+ BILLION VIEWS WORLDWIDE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideosPage;