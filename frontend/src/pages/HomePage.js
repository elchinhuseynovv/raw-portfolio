import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useInView as useInViewHook } from 'react-intersection-observer';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Emmy Award Section */}
      <EmmySection />
      
      {/* Services Grid */}
      <ServicesGrid />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

const HeroSection = () => {
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
            SUSTAINABLE
          </h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-black text-gray-200/80 leading-none tracking-tight -mt-8"
          >
            STORYTELLING
          </motion.h2>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-gray-300/70 text-lg md:text-xl mt-12 max-w-2xl mx-auto font-light tracking-wide"
        >
          Storytelling is our superpower. As an EMMY® award-winning creative studio with 500+ billion views on all screens we help hotels, tourism boards, airlines, and luxury brands to drive reach and revenue.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16"
        >
          <div className="text-gray-400/60 text-sm tracking-[0.3em] font-light">
            Scroll For GOOSEBUMPS CONTENT
          </div>
          <motion.div 
            className="w-1 h-8 bg-gray-300/40 mx-auto mt-4"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

const EmmySection = () => {
  const [ref, inView] = useInViewHook({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section 
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#000000] flex items-center justify-center relative"
    >
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative"
        >
          <h1 className="text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[24rem] font-black text-gray-200/70 leading-none tracking-tight">
            EMMY
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="text-gray-300/60 text-xl tracking-[0.2em] font-light">
              AWARD-WINNING
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20"
        >
          <img 
            src="https://images.unsplash.com/photo-1650240852447-46505dba4726?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxhd2FyZCUyMGNlcmVtb255fGVufDB8fHx8MTc1MjkyNTk3Nnww&ixlib=rb-4.1.0&q=85"
            alt="Emmy Awards"
            className="w-96 h-64 object-cover mx-auto rounded-lg shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

const ServicesGrid = () => {
  const services = [
    {
      title: "LUXURY TRAVEL",
      description: "Crafting cinematic content for high-end brands such as Aman, Mandarin Oriental, and Ritz-Carlton.",
      image: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnR8ZW58MHx8fHwxNzUyOTI1OTM2fDA&ixlib=rb-4.1.0&q=85",
      bgColor: "from-[#000000] to-[#0a0a0a]"
    },
    {
      title: "TRAVELTELLING",
      description: "Developing award-winning narratives for clients like Lufthansa and The New York Times.",
      image: "https://images.unsplash.com/photo-1549294413-26f195200c16?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjByZXNvcnR8ZW58MHx8fHwxNzUyOTI1OTM2fDA&ixlib=rb-4.1.0&q=85",
      bgColor: "from-[#0a0a0a] to-[#111111]"
    },
    {
      title: "LIFESTYLE TRAVEL",
      description: "Creating engaging social media storytelling for brands like W Hotels and Edition.",
      image: "https://images.unsplash.com/photo-1650826895380-855d0b9da6fd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxsaWZlc3R5bGUlMjB0cmF2ZWx8ZW58MHx8fHwxNzUyODI4OTE2fDA&ixlib=rb-4.1.0&q=85",
      bgColor: "from-[#111111] to-[#1a1a1a]"
    },
    {
      title: "TOURISM & DESTINATIONS",
      description: "Producing destination storytelling for tourism boards, hotels, airlines, and cruise lines.",
      image: "https://images.unsplash.com/photo-1530596078615-b72e87529028?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxsaWZlc3R5bGUlMjB0cmF2ZWx8ZW58MHx8fHwxNzUyODI4OTE2fDA&ixlib=rb-4.1.0&q=85",
      bgColor: "from-[#1a1a1a] to-[#222222]"
    },
    {
      title: "GEN Z GEN ALPHA",
      description: "Designing content and campaigns tailored for newer generations with fresh perspectives.",
      image: "https://images.unsplash.com/photo-1664277497084-92c27082bc08?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxzdHJlYW1pbmclMjBjb250ZW50fGVufDB8fHx8MTc1MjkyNTk2OXww&ixlib=rb-4.1.0&q=85",
      bgColor: "from-[#222222] to-[#2a2a2a]"
    },
    {
      title: "NETFLIX",
      description: "Producing high-quality documentaries and films for platforms such as Netflix, Amazon, and Disney.",
      image: "https://images.unsplash.com/photo-1664277497084-92c27082bc08?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxzdHJlYW1pbmclMjBjb250ZW50fGVufDB8fHx8MTc1MjkyNTk2OXww&ixlib=rb-4.1.0&q=85",
      bgColor: "from-[#2a2a2a] to-[#1a1a1a]"
    },
    {
      title: "BRANDED STORYTELLING",
      description: "Creating branded content for companies like Google, Nike, and Porsche with authentic narratives.",
      image: "https://images.unsplash.com/photo-1530596078615-b72e87529028?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxsaWZlc3R5bGUlMjB0cmF2ZWx8ZW58MHx8fHwxNzUyODI4OTE2fDA&ixlib=rb-4.1.0&q=85",
      bgColor: "from-[#1a1a1a] to-[#111111]"
    },
    {
      title: "REAL ESTATE",
      description: "Developing authentic narratives for the real estate sector with cinematic storytelling.",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwbHV4dXJ5fGVufDB8fHx8MTc1MjkyNTk2MXww&ixlib=rb-4.1.0&q=85",
      bgColor: "from-[#111111] to-[#000000]"
    }
  ];

  return (
    <div className="services-container">
      {services.map((service, index) => (
        <ServiceSection key={index} service={service} index={index} />
      ))}
    </div>
  );
};

const ServiceSection = ({ service, index }) => {
  const [ref, inView] = useInViewHook({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <section 
      ref={ref}
      className={`min-h-screen bg-gradient-to-b ${service.bgColor} flex items-center justify-center relative overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="flex-1 pr-12"
        >
          <h1 className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-black text-gray-200/90 leading-none tracking-tight mb-8">
            {service.title}
          </h1>
          <p className="text-gray-300/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            {service.description}
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="flex-1 max-w-lg"
        >
          <div className="relative group cursor-pointer">
            <img 
              src={service.image}
              alt={service.title}
              className="w-full h-96 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 rounded-2xl group-hover:bg-black/20 transition-all duration-500" />
            <motion.div
              className="absolute top-4 right-4 w-16 h-16 bg-gray-200/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-gray-200/30 transition-all duration-300"
              whileHover={{ rotate: 90 }}
            >
              <div className="text-gray-200 text-2xl">▶</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  const [ref, inView] = useInViewHook({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <footer 
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-[#000000] to-[#000000] flex items-center justify-center relative"
    >
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="text-[6rem] md:text-[8rem] lg:text-[12rem] font-black text-gray-200/70 leading-none tracking-tight mb-8">
            SAPPHIRE
          </h1>
          <h2 className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-black text-gray-300/50 leading-none tracking-tight -mt-8">
            STORYTELLING
          </h2>
          <h3 className="text-[2rem] md:text-[3rem] lg:text-[4rem] font-black text-gray-400/40 leading-none tracking-tight -mt-4">
            SYSTEM™
          </h3>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-gray-300/60 text-lg max-w-3xl mx-auto mt-12 font-light leading-relaxed"
        >
          Our proprietary system designed to convert viewers into loyal customers by turning attention into action and curiosity into bookings. Experience authentic and sustainable storytelling that enhances brand presence and cultural relevance.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex flex-col items-center space-y-4"
        >
          <div className="text-gray-400/40 text-sm tracking-[0.3em] font-light">
            500+ BILLION VIEWS • 25+ YEARS EXPERIENCE
          </div>
          <div className="text-gray-500/30 text-xs tracking-widest font-light">
            © 2025 VOID STUDIOS • SUSTAINABLE STORYTELLING
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default HomePage;