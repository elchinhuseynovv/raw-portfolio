import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView as useInViewHook } from 'react-intersection-observer';

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <GalleryHeroSection />
      
      {/* Filter Section */}
      <GalleryFilterSection />
      
      {/* Gallery Grid */}
      <GalleryGrid />
      
      {/* Behind the Scenes */}
      <BehindTheScenesSection />
    </div>
  );
};

const GalleryHeroSection = () => {
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
            GALLERY
          </h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] font-black text-gray-300/60 leading-none tracking-tight -mt-8"
          >
            SHOWCASE
          </motion.h2>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-gray-300/70 text-lg md:text-xl mt-12 max-w-3xl mx-auto font-light tracking-wide leading-relaxed"
        >
          Step into our visual universe. From luxury resorts to underground scenes, from Emmy®-winning documentaries to branded masterpieces - explore the moments we've captured and the stories we've told.
        </motion.p>
      </div>
    </section>
  );
};

const GalleryFilterSection = () => {
  const [ref, inView] = useInViewHook({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [activeFilter, setActiveFilter] = useState('ALL');
  
  const filters = [
    'ALL', 'LUXURY TRAVEL', 'DOCUMENTARY', 'BRANDED CONTENT', 
    'TOURISM', 'STREAMING', 'FASHION', 'EVENTS'
  ];

  return (
    <section 
      ref={ref}
      className="bg-gradient-to-b from-[#0a0a0a] to-[#000000] py-20"
    >
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-black text-gray-200/70 leading-none tracking-tight mb-8">
            EXPLORE
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full text-sm font-light tracking-wider transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-gray-200/20 text-gray-200 border border-gray-400/50' 
                  : 'bg-gray-800/30 text-gray-400/70 border border-gray-600/30 hover:bg-gray-700/40 hover:text-gray-300/80'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const GalleryGrid = () => {
  const [ref, inView] = useInViewHook({
    threshold: 0.2,
    triggerOnce: true,
  });

  const galleryItems = [
    {
      title: "Mandarin Oriental Paradise",
      category: "LUXURY TRAVEL",
      image: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnR8ZW58MHx8fHwxNzUyOTI1OTM2fDA&ixlib=rb-4.1.0&q=85",
      description: "Cinematic resort showcase",
      featured: true
    },
    {
      title: "Travel Stories Untold",
      category: "DOCUMENTARY",
      image: "https://images.unsplash.com/photo-1577190651915-bf62d54d5b36",
      description: "Emmy® nominated documentary",
      featured: false
    },
    {
      title: "Nike Global Campaign",
      category: "BRANDED CONTENT",
      image: "https://images.unsplash.com/photo-1639701386739-449a0e789367",
      description: "Multi-platform brand story",
      featured: true
    },
    {
      title: "Hidden Prague",
      category: "TOURISM",
      image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9",
      description: "Tourism board collaboration",
      featured: false
    },
    {
      title: "Netflix Original",
      category: "STREAMING",
      image: "https://images.unsplash.com/photo-1664277497084-92c27082bc08?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxzdHJlYW1pbmclMjBjb250ZW50fGVufDB8fHx8MTc1MjkyNTk2OXww&ixlib=rb-4.1.0&q=85",
      description: "Streaming platform exclusive",
      featured: true
    },
    {
      title: "Milan Fashion Week",
      category: "FASHION",
      image: "https://images.unsplash.com/photo-1586425254904-66e1576a340a",
      description: "Backstage luxury fashion",
      featured: false
    },
    {
      title: "Porsche Launch Event",
      category: "EVENTS",
      image: "https://images.unsplash.com/photo-1593029062025-a3a14de2ddac",
      description: "Exclusive brand launch",
      featured: true
    },
    {
      title: "Aman Resort Collection",
      category: "LUXURY TRAVEL",
      image: "https://images.unsplash.com/photo-1549294413-26f195200c16?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjByZXNvcnR8ZW58MHx8fHwxNzUyOTI1OTM2fDA&ixlib=rb-4.1.0&q=85",
      description: "Global resort campaign",
      featured: false
    },
    {
      title: "Underground Culture",
      category: "DOCUMENTARY",
      image: "https://images.unsplash.com/photo-1531651008558-ed1740375b39",
      description: "Raw culture exploration",
      featured: true
    }
  ];

  return (
    <section 
      ref={ref}
      className="bg-gradient-to-b from-[#000000] to-[#0a0a0a] py-20"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.1 * index }}
              className={`break-inside-avoid cursor-pointer group ${
                item.featured ? 'mb-12' : 'mb-8'
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src={item.image}
                  alt={item.title}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                    item.featured ? 'h-96' : 'h-64'
                  }`}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gray-200/20 backdrop-blur-sm px-3 py-1 rounded-full text-gray-200 text-xs font-light tracking-wider">
                    {item.category}
                  </span>
                </div>
                
                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-500/30 backdrop-blur-sm px-3 py-1 rounded-full text-yellow-200 text-xs font-light tracking-wider">
                      FEATURED
                    </span>
                  </div>
                )}
                
                {/* Play Button */}
                <motion.div
                  className="absolute bottom-4 right-4 w-12 h-12 bg-gray-200/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-gray-200/30 transition-all duration-300"
                  whileHover={{ rotate: 90, scale: 1.1 }}
                >
                  <div className="text-gray-200 text-lg ml-1">▶</div>
                </motion.div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-bold text-gray-200/90 mb-2">{item.title}</h3>
                  <p className="text-gray-300/70 text-sm font-light">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BehindTheScenesSection = () => {
  const [ref, inView] = useInViewHook({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section 
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#000000] flex items-center justify-center relative"
    >
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h1 className="text-[6rem] md:text-[8rem] lg:text-[12rem] font-black text-gray-200/70 leading-none tracking-tight mb-8">
            BEHIND
          </h1>
          <h2 className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-black text-gray-300/50 leading-none tracking-tight -mt-8">
            THE SCENES
          </h2>
          <p className="text-gray-300/60 text-lg max-w-3xl mx-auto font-light leading-relaxed mt-8">
            The raw, unfiltered moments that happen between action and cut. Our process, our passion, our people.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative group cursor-pointer"
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_gallery-showcase-5/artifacts/aewl3dea_DSC08851.jpg"
              alt="Behind the Scenes"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 rounded-2xl group-hover:bg-black/20 transition-all duration-500" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold text-gray-200/90 mb-2">ON SET</h3>
              <p className="text-gray-300/70 text-sm font-light">Creating magic in real-time</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="relative group cursor-pointer"
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_gallery-showcase-5/artifacts/skl9c6h5_DSC08796.jpg"
              alt="Creative Process"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 rounded-2xl group-hover:bg-black/20 transition-all duration-500" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold text-gray-200/90 mb-2">CREATIVE PROCESS</h3>
              <p className="text-gray-300/70 text-sm font-light">Where vision becomes reality</p>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="text-gray-400/40 text-lg tracking-[0.2em] font-light">
            500+ BILLION VIEWS • 11+ YEARS OF STORYTELLING
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryPage;