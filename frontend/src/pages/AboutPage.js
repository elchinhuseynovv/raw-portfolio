import React from 'react';
import { motion } from 'framer-motion';
import { useInView as useInViewHook } from 'react-intersection-observer';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <AboutHeroSection />
      
      {/* Story Section */}
      <StorySection />
      
      {/* Team Section */}
      <TeamSection />
      
      {/* Values Section */}
      <ValuesSection />
    </div>
  );
};

const AboutHeroSection = () => {
  const [ref, inView] = useInViewHook({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section 
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-[#F5DDD1] via-[#E8C4B0] to-[#DEB499] flex items-center justify-center relative overflow-hidden"
    >
      <div className="text-center px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          <h1 className="text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-black text-white/70 leading-none tracking-tight">
            ABOUT
          </h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] font-black text-white/50 leading-none tracking-tight -mt-8"
          >
            VOID STUDIOS
          </motion.h2>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-white/60 text-lg md:text-xl mt-12 max-w-3xl mx-auto font-light tracking-wide leading-relaxed"
        >
          We are an Emmy® award-winning creative studio specializing in sustainable storytelling. Our mission is to transform how brands connect with audiences through authentic, cinematic narratives that drive both engagement and revenue.
        </motion.p>
      </div>
    </section>
  );
};

const StorySection = () => {
  const [ref, inView] = useInViewHook({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section 
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-[#DEB499] to-[#D1A887] flex items-center justify-center relative"
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="flex-1 pr-12"
        >
          <h1 className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-black text-white/80 leading-none tracking-tight mb-8">
            OUR STORY
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-8">
            Founded with a vision to revolutionize storytelling in the digital age, Void Studios has grown from a small creative collective to an internationally recognized production house.
          </p>
          <p className="text-white/60 text-lg font-light leading-relaxed max-w-2xl">
            With over 25 years of combined experience and 500+ billion views across all platforms, we've crafted narratives for luxury travel brands, tourism boards, and Fortune 500 companies.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="flex-1 max-w-lg"
        >
          <div className="relative group">
            <img 
              src="https://images.unsplash.com/photo-1577190651915-bf62d54d5b36"
              alt="Our Story"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-black/20 rounded-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const [ref, inView] = useInViewHook({
    threshold: 0.3,
    triggerOnce: true,
  });

  const teamMembers = [
    {
      name: "Creative Directors",
      role: "Visionary Leadership",
      image: "https://images.unsplash.com/photo-1588747020836-451633b46e87"
    },
    {
      name: "Production Team",
      role: "Technical Excellence",
      image: "https://images.unsplash.com/photo-1586425254691-f556554aeb12"
    },
    {
      name: "Story Architects",
      role: "Narrative Crafting",
      image: "https://images.unsplash.com/photo-1586425254904-66e1576a340a"
    }
  ];

  return (
    <section 
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-[#D1A887] to-[#C8956D] flex items-center justify-center relative"
    >
      <div className="max-w-7xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-[6rem] md:text-[8rem] lg:text-[12rem] font-black text-white/60 leading-none tracking-tight mb-16">
            TEAM
          </h1>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 + (index * 0.2) }}
              className="text-center"
            >
              <div className="relative group mb-6">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-64 h-64 object-cover rounded-full mx-auto shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 rounded-full group-hover:bg-black/10 transition-all duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-white/80 mb-2">{member.name}</h3>
              <p className="text-white/60 font-light">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ValuesSection = () => {
  const [ref, inView] = useInViewHook({
    threshold: 0.3,
    triggerOnce: true,
  });

  const values = [
    {
      title: "AUTHENTICITY",
      description: "We believe in genuine storytelling that resonates with real emotions and experiences."
    },
    {
      title: "SUSTAINABILITY",
      description: "Our approach ensures long-term brand value through responsible and ethical content creation."
    },
    {
      title: "INNOVATION",
      description: "Pushing boundaries with cutting-edge techniques and fresh perspectives in every project."
    },
    {
      title: "EXCELLENCE",
      description: "Emmy® award-winning quality is not just our achievement, it's our standard."
    }
  ];

  return (
    <section 
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-[#C8956D] to-[#481500] flex items-center justify-center relative"
    >
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h1 className="text-[6rem] md:text-[8rem] lg:text-[12rem] font-black text-white/60 leading-none tracking-tight mb-8">
            VALUES
          </h1>
          <p className="text-white/50 text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Our core values guide every decision, every frame, and every story we tell.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 + (index * 0.2) }}
              className="text-center p-8"
            >
              <h3 className="text-3xl md:text-4xl font-black text-white/70 mb-6 tracking-wider">
                {value.title}
              </h3>
              <p className="text-white/60 text-lg font-light leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;