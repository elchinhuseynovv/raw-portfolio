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
            ABOUT
          </h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] font-black text-gray-300/60 leading-none tracking-tight -mt-8"
          >
            RAW VISUAL STUDIO
          </motion.h2>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-gray-300/70 text-lg md:text-xl mt-12 max-w-3xl mx-auto font-light tracking-wide leading-relaxed"
        >
          We’ve been crafting visuals for over 11 years, long before algorithms cared. Our online presence might trace back just five, but our roots run deep in the underground scenes, backstage chaos, and brand stories most cameras miss. From gritty warehouse raves to polished hotel suites, we film what others overlook and we do it with cinematic precision, emotional weight, and raw intent.
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
      className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#000000] flex items-center justify-center relative"
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="flex-1 pr-12"
        >
          <h1 className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-black text-gray-200/90 leading-none tracking-tight mb-8">
            OUR STORY
          </h1>
          <p className="text-gray-300/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-8">
            Born in the shadows of underground raves and abandoned warehouses, Raw Visual Studio began as a passion project capturing raw, unfiltered energy where most cameras wouldn’t dare to go.
          </p>
          <p className="text-gray-300/70 text-lg font-light leading-relaxed max-w-2xl">
            Fast forward to now, our lens has traveled far beyond the dance floor. From documenting war zones to working with luxury travel brands, from music festivals to government campaigns, fashion shows to private weddings  we’ve shot it all. We don’t just create content  we craft emotion, energy, and moments that last.
            With over 15 million views and counting, Raw Visual Studio has grown into a trusted name across industries. Whether it’s a global brand launch or a secret warehouse party, we tell stories that punch through the noise.
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
            <div className="absolute inset-0 bg-black/30 rounded-2xl" />
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
      name: "Huseyn Gurbanli",
      role: "Production Team",
      image: "https://customer-assets.emergentagent.com/job_gallery-showcase-5/artifacts/aewl3dea_DSC08851.jpg"
    },
    {
      name: "Mukhtar Hasanov",
      role: "Creative Director",
      image: "https://customer-assets.emergentagent.com/job_gallery-showcase-5/artifacts/skl9c6h5_DSC08796.jpg"
    },
    {
      name: "Story Architects",
      role: "Colorist",
      image: "https://images.unsplash.com/photo-1586425254904-66e1576a340a"
    }
  ];

  return (
    <section 
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-[#000000] to-[#0a0a0a] flex items-center justify-center relative"
    >
      <div className="max-w-7xl mx-auto px-8 text-center">
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
                <div className="absolute inset-0 bg-black/30 rounded-full group-hover:bg-black/20 transition-all duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-200/90 mb-2">{member.name}</h3>
              <p className="text-gray-300/70 font-light">{member.role}</p>
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
            VALUES
          </h1>
          <p className="text-gray-300/60 text-lg max-w-3xl mx-auto font-light leading-relaxed">
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
              <h3 className="text-3xl md:text-4xl font-black text-gray-200/80 mb-6 tracking-wider">
                {value.title}
              </h3>
              <p className="text-gray-300/70 text-lg font-light leading-relaxed">
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