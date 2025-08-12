import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView as useInViewHook } from 'react-intersection-observer';

const ServicesPage = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <ServicesHeroSection />
      
      {/* Services Overview */}
      <ServicesOverview />
      
      {/* Services Grid */}
      <ServicesGrid />
      
      {/* Process Section */}
      <ProcessSection />
      
      {/* Pricing Section */}
      <PricingSection />
    </div>
  );
};

const ServicesHeroSection = () => {
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
            SERVICES
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
          From luxury travel narratives to Emmy®-winning documentaries, we transform your vision into compelling visual stories that drive engagement, revenue, and cultural relevance across all platforms.
        </motion.p>
      </div>
    </section>
  );
};

const ServicesOverview = () => {
  const [ref, inView] = useInViewHook({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    { number: "500+", label: "BILLION VIEWS" },
    { number: "11+", label: "YEARS EXPERIENCE" },
    { number: "25+", label: "COUNTRIES" },
    { number: "100+", label: "BRANDS SERVED" }
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
            WHAT WE DO
          </h2>
          <p className="text-gray-300/60 text-lg max-w-4xl mx-auto font-light leading-relaxed">
            We specialize in sustainable storytelling that converts viewers into loyal customers. Our proprietary Sapphire Storytelling System™ turns attention into action and curiosity into bookings through authentic, cinematic narratives.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
              className="text-center p-6 bg-gray-900/20 backdrop-blur-sm rounded-xl border border-gray-700/30"
            >
              <h3 className="text-4xl md:text-5xl font-black text-gray-200/90 mb-2">{stat.number}</h3>
              <p className="text-gray-400/70 text-sm font-light tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesGrid = () => {
  const [ref, inView] = useInViewHook({
    threshold: 0.2,
    triggerOnce: true,
  });

  const services = [
    {
      title: "LUXURY TRAVEL",
      subtitle: "Premium Hospitality Content",
      description: "Crafting cinematic content for high-end brands such as Aman, Mandarin Oriental, and Ritz-Carlton. We create compelling narratives that showcase luxury experiences and drive bookings.",
      features: ["Resort Showcases", "Destination Marketing", "Guest Experience Stories", "Brand Campaigns"],
      image: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnR8ZW58MHx8fHwxNzUyOTI1OTM2fDA&ixlib=rb-4.1.0&q=85",
      bgColor: "from-[#000000] to-[#0a0a0a]"
    },
    {
      title: "DOCUMENTARY",
      subtitle: "Award-Winning Narratives",
      description: "Emmy® nominated documentaries and films for platforms such as Netflix, Amazon, and Disney. We tell authentic stories that resonate with global audiences.",
      features: ["Travel Documentaries", "Cultural Stories", "Corporate Documentaries", "Streaming Content"],
      image: "https://images.unsplash.com/photo-1577190651915-bf62d54d5b36",
      bgColor: "from-[#0a0a0a] to-[#111111]"
    },
    {
      title: "BRANDED STORYTELLING",
      subtitle: "Authentic Brand Narratives",
      description: "Creating branded content for companies like Google, Nike, and Porsche with authentic narratives that drive engagement and build lasting brand connections.",
      features: ["Brand Campaigns", "Corporate Stories", "Product Launches", "Social Media Content"],
      image: "https://images.unsplash.com/photo-1639701386739-449a0e789367",
      bgColor: "from-[#111111] to-[#1a1a1a]"
    },
    {
      title: "TOURISM & DESTINATIONS",
      subtitle: "Destination Marketing Excellence",
      description: "Producing destination storytelling for tourism boards, hotels, airlines, and cruise lines that inspire wanderlust and drive visitor engagement.",
      features: ["Tourism Board Campaigns", "Destination Showcases", "Cultural Experiences", "Travel Inspiration"],
      image: "https://images.unsplash.com/photo-1530596078615-b72e87529028?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxsaWZlc3R5bGUlMjB0cmF2ZWx8ZW58MHx8fHwxNzUyODI4OTE2fDA&ixlib=rb-4.1.0&q=85",
      bgColor: "from-[#1a1a1a] to-[#222222]"
    },
    {
      title: "STREAMING PLATFORMS",
      subtitle: "High-Production Content",
      description: "Producing high-quality content for platforms such as Netflix, Amazon Prime, Disney+, and other streaming services with global reach and impact.",
      features: ["Original Series", "Documentary Films", "Short Form Content", "Platform Exclusives"],
      image: "https://images.unsplash.com/photo-1664277497084-92c27082bc08?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxzdHJlYW1pbmclMjBjb250ZW50fGVufDB8fHx8MTc1MjkyNTk2OXww&ixlib=rb-4.1.0&q=85",
      bgColor: "from-[#222222] to-[#2a2a2a]"
    },
    {
      title: "FASHION & EVENTS",
      subtitle: "Luxury Lifestyle Content",
      description: "Capturing fashion brands and exclusive events that blend craftsmanship, authenticity, and fresh vision across Europe and beyond.",
      features: ["Fashion Shows", "Luxury Events", "Brand Launches", "Celebrity Coverage"],
      image: "https://images.unsplash.com/photo-1586425254904-66e1576a340a",
      bgColor: "from-[#2a2a2a] to-[#1a1a1a]"
    }
  ];

  return (
    <div className="services-container">
      {services.map((service, index) => (
        <ServiceSection key={index} service={service} index={index} inView={inView} />
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
          <div className="mb-4">
            <span className="text-gray-400/60 text-sm tracking-[0.3em] font-light">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          <h1 className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-black text-gray-200/90 leading-none tracking-tight mb-4">
            {service.title}
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300/70 font-light mb-8 tracking-wide">
            {service.subtitle}
          </h2>
          <p className="text-gray-300/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-8">
            {service.description}
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            {service.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 + (idx * 0.1) }}
                className="text-gray-400/70 text-sm font-light flex items-center"
              >
                <span className="w-2 h-2 bg-gray-400/50 rounded-full mr-3"></span>
                {feature}
              </motion.div>
            ))}
          </div>
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

const ProcessSection = () => {
  const [ref, inView] = useInViewHook({
    threshold: 0.3,
    triggerOnce: true,
  });

  const processSteps = [
    {
      step: "01",
      title: "DISCOVERY",
      description: "We dive deep into your brand, audience, and objectives to understand your unique story and vision."
    },
    {
      step: "02",
      title: "STRATEGY",
      description: "Our team develops a comprehensive creative strategy using our Sapphire Storytelling System™."
    },
    {
      step: "03",
      title: "PRODUCTION",
      description: "From pre-production planning to shooting with Emmy®-winning cinematography techniques."
    },
    {
      step: "04",
      title: "POST-PRODUCTION",
      description: "World-class editing, color grading, and sound design to bring your story to life."
    },
    {
      step: "05",
      title: "DELIVERY",
      description: "Optimized content delivery across all platforms with ongoing support and analytics."
    }
  ];

  return (
    <section 
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#000000] flex items-center justify-center relative py-20"
    >
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h1 className="text-[6rem] md:text-[8rem] lg:text-[12rem] font-black text-gray-200/70 leading-none tracking-tight mb-8">
            PROCESS
          </h1>
          <p className="text-gray-300/60 text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Our proven 5-step process ensures every project delivers exceptional results and exceeds expectations.
          </p>
        </motion.div>
        
        <div className="space-y-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.2 + (index * 0.1) }}
              className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-12`}
            >
              <div className="flex-1">
                <div className="text-8xl font-black text-gray-200/10 mb-4">{step.step}</div>
                <h3 className="text-3xl md:text-4xl font-black text-gray-200/90 mb-4 tracking-wider">
                  {step.title}
                </h3>
                <p className="text-gray-300/70 text-lg font-light leading-relaxed max-w-lg">
                  {step.description}
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="w-32 h-32 bg-gray-800/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-600/30">
                  <span className="text-2xl font-black text-gray-200/70">{step.step}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  const [ref, inView] = useInViewHook({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section 
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-[#000000] to-[#0a0a0a] flex items-center justify-center relative"
    >
      <div className="max-w-7xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-[6rem] md:text-[8rem] lg:text-[12rem] font-black text-gray-200/70 leading-none tracking-tight mb-8">
            INVEST
          </h1>
          <h2 className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-black text-gray-300/50 leading-none tracking-tight -mt-8 mb-12">
            IN STORIES
          </h2>
          <p className="text-gray-300/60 text-lg max-w-3xl mx-auto font-light leading-relaxed mb-16">
            Every project is unique, and so is our approach. We work with brands of all sizes to create compelling visual narratives that drive results and cultural relevance.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-gray-900/20 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30">
            <h3 className="text-2xl font-black text-gray-200/90 mb-4">STARTER</h3>
            <p className="text-gray-300/70 text-sm mb-6">Perfect for small brands and emerging businesses</p>
            <div className="text-gray-400/60 text-sm font-light">
              • 1-2 minute content<br/>
              • Basic post-production<br/>
              • 1 revision round<br/>
              • 30-day delivery
            </div>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-600/50 transform scale-105">
            <div className="absolute top-4 right-4">
              <span className="bg-yellow-500/30 backdrop-blur-sm px-3 py-1 rounded-full text-yellow-200 text-xs font-light tracking-wider">
                POPULAR
              </span>
            </div>
            <h3 className="text-2xl font-black text-gray-200/90 mb-4">PREMIUM</h3>
            <p className="text-gray-300/70 text-sm mb-6">Ideal for established brands seeking impact</p>
            <div className="text-gray-400/60 text-sm font-light">
              • 3-5 minute content<br/>
              • Advanced cinematography<br/>
              • 3 revision rounds<br/>
              • 45-day delivery
            </div>
          </div>
          
          <div className="bg-gray-900/20 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30">
            <h3 className="text-2xl font-black text-gray-200/90 mb-4">ENTERPRISE</h3>
            <p className="text-gray-300/70 text-sm mb-6">For large-scale campaigns and streaming platforms</p>
            <div className="text-gray-400/60 text-sm font-light">
              • Unlimited duration<br/>
              • Emmy® level production<br/>
              • Unlimited revisions<br/>
              • Custom timeline
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="space-y-4"
        >
          <div className="text-gray-400/40 text-lg tracking-[0.2em] font-light">
            READY TO CREATE SOMETHING EXTRAORDINARY?
          </div>
          <motion.button
            className="bg-gray-700/30 hover:bg-gray-600/40 border border-gray-600/40 rounded-lg px-12 py-4 text-gray-200 font-light tracking-wider transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GET CUSTOM QUOTE
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPage;