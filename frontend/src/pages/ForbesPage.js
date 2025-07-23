import React from 'react';
import { motion } from 'framer-motion';
import { useInView as useInViewHook } from 'react-intersection-observer';

const ForbesPage = () => {
  return (
    <div className="forbes-page">
      {/* Hero Section */}
      <ForbesHeroSection />
      
      {/* Press Coverage */}
      <PressCoverageSection />
      
      {/* Awards & Recognition */}
      <AwardsSection />
      
      {/* Media Mentions */}
      <MediaMentionsSection />
    </div>
  );
};

const ForbesHeroSection = () => {
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
            FORBES
          </h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] font-black text-gray-300/60 leading-none tracking-tight -mt-8"
          >
            RECOGNITION
          </motion.h2>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-gray-300/70 text-lg md:text-xl mt-12 max-w-3xl mx-auto font-light tracking-wide leading-relaxed"
        >
          Featured across leading publications for our groundbreaking approach to sustainable storytelling. From Forbes to Emmy® recognition, our work continues to shape the future of visual narrative.
        </motion.p>
      </div>
    </section>
  );
};

const PressCoverageSection = () => {
  const [ref, inView] = useInViewHook({
    threshold: 0.3,
    triggerOnce: true,
  });

  const pressItems = [
    {
      publication: "FORBES",
      headline: "The Future of Sustainable Storytelling",
      excerpt: "Void Studios is revolutionizing how luxury brands connect with conscious consumers through authentic narrative experiences.",
      date: "2024"
    },
    {
      publication: "VARIETY",
      headline: "Emmy-Winning Studio Breaks New Ground",
      excerpt: "With 500+ billion views, this creative studio is setting new standards for cinematic brand storytelling.",
      date: "2024"
    },
    {
      publication: "FAST COMPANY",
      headline: "Innovation in Visual Communication",
      excerpt: "How one studio transformed the luxury travel industry through the power of compelling visual narratives.",
      date: "2023"
    }
  ];

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
            PRESS
          </h1>
        </motion.div>
        
        <div className="space-y-12">
          {pressItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.2 + (index * 0.2) }}
              className="flex flex-col md:flex-row items-center gap-12"
            >
              <div className={`flex-1 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8">
                  <div className="text-gray-400/50 text-sm font-light tracking-wider mb-2">{item.publication} • {item.date}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-200/90 mb-4 leading-tight">{item.headline}</h3>
                  <p className="text-gray-300/70 text-lg font-light leading-relaxed">{item.excerpt}</p>
                </div>
              </div>
              <div className={`flex-1 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <img 
                  src="https://images.unsplash.com/photo-1588747020836-451633b46e87"
                  alt="Press Coverage"
                  className="w-full h-64 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AwardsSection = () => {
  const [ref, inView] = useInViewHook({
    threshold: 0.3,
    triggerOnce: true,
  });

  const awards = [
    {
      title: "EMMY® AWARD",
      category: "Outstanding Achievement",
      year: "2023",
      description: "Recognition for excellence in visual storytelling and narrative innovation"
    },
    {
      title: "CANNES LIONS",
      category: "Creative Excellence",
      year: "2023",
      description: "Gold Lion for breakthrough campaign in luxury hospitality sector"
    },
    {
      title: "WEBBY AWARDS",
      category: "Best Brand Experience",
      year: "2022",
      description: "Honored for immersive digital storytelling that drives engagement"
    },
    {
      title: "SHORTY AWARDS",
      category: "Best Visual Campaign",
      year: "2022",
      description: "Celebrating innovative approach to sustainable brand storytelling"
    }
  ];

  return (
    <section 
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-[#000000] to-[#0a0a0a] flex items-center justify-center relative"
    >
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h1 className="text-[6rem] md:text-[8rem] lg:text-[12rem] font-black text-gray-200/70 leading-none tracking-tight mb-8">
            AWARDS
          </h1>
          <p className="text-gray-300/60 text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Industry recognition for our commitment to excellence in visual storytelling
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 + (index * 0.2) }}
              className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-900/50 transition-all duration-300"
            >
              <div className="text-gray-400/50 text-sm font-light tracking-wider mb-2">{award.year}</div>
              <h3 className="text-2xl font-bold text-gray-200/90 mb-2">{award.title}</h3>
              <div className="text-gray-300/70 font-medium mb-4">{award.category}</div>
              <p className="text-gray-300/70 font-light leading-relaxed">{award.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MediaMentionsSection = () => {
  const [ref, inView] = useInViewHook({
    threshold: 0.3,
    triggerOnce: true,
  });

  const mentions = [
    "FORBES", "VARIETY", "FAST COMPANY", "WIRED", 
    "THE VERGE", "ADWEEK", "CAMPAIGN", "SHOTS",
    "CREATIVE REVIEW", "DESIGN WEEK", "BRAND NEW", "FWA"
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
            MEDIA
          </h1>
          <p className="text-gray-300/60 text-lg max-w-3xl mx-auto font-light leading-relaxed mb-16">
            Featured across leading publications for our innovative approach to visual storytelling
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {mentions.map((mention, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + (index * 0.1) }}
              className="text-gray-400/50 text-sm font-light tracking-wider hover:text-gray-300/70 transition-colors cursor-pointer p-4 bg-gray-900/20 rounded-lg backdrop-blur-sm"
            >
              {mention}
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="text-gray-400/40 text-lg tracking-[0.2em] font-light mb-4">
            GLOBAL MEDIA COVERAGE
          </div>
          <div className="text-gray-500/30 text-sm tracking-widest font-light">
            SHAPING THE FUTURE OF VISUAL STORYTELLING
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ForbesPage;