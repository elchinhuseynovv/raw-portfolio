import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView as useInViewHook } from 'react-intersection-observer';

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <ContactHeroSection />
      
      {/* Contact Form Section */}
      <ContactFormSection />
      
      {/* Office Info Section */}
      <OfficeInfoSection />
      
      {/* Connect Section */}
      <ConnectSection />
    </div>
  );
};

const ContactHeroSection = () => {
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
            CONTACT
          </h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] font-black text-gray-300/60 leading-none tracking-tight -mt-8"
          >
            US
          </motion.h2>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-gray-300/70 text-lg md:text-xl mt-12 max-w-3xl mx-auto font-light tracking-wide leading-relaxed"
        >
          Ready to create something extraordinary together? Let's start a conversation about your next project. We're here to transform your vision into compelling visual narratives that drive results.
        </motion.p>
      </div>
    </section>
  );
};

const ContactFormSection = () => {
  const [ref, inView] = useInViewHook({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <section 
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#000000] flex items-center justify-center relative py-20"
    >
      <div className="max-w-4xl mx-auto px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-black text-gray-200/70 leading-none tracking-tight mb-8">
            GET IN TOUCH
          </h1>
        </motion.div>
        
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300/80 text-sm font-light mb-2">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-gray-800/50 border border-gray-600/30 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-400/50 focus:outline-none focus:border-gray-500/50 transition-colors"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300/80 text-sm font-light mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-gray-800/50 border border-gray-600/30 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-400/50 focus:outline-none focus:border-gray-500/50 transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300/80 text-sm font-light mb-2">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full bg-gray-800/50 border border-gray-600/30 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-400/50 focus:outline-none focus:border-gray-500/50 transition-colors"
                placeholder="Your company"
              />
            </div>
            <div>
              <label className="block text-gray-300/80 text-sm font-light mb-2">Project Type</label>
              <select
                name="project"
                value={formData.project}
                onChange={handleInputChange}
                className="w-full bg-gray-800/50 border border-gray-600/30 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-gray-500/50 transition-colors"
              >
                <option value="" className="bg-gray-800">Select project type</option>
                <option value="luxury-travel" className="bg-gray-800">Luxury Travel</option>
                <option value="documentary" className="bg-gray-800">Documentary</option>
                <option value="branded-content" className="bg-gray-800">Branded Content</option>
                <option value="tourism" className="bg-gray-800">Tourism & Destinations</option>
                <option value="streaming" className="bg-gray-800">Streaming Platform</option>
                <option value="other" className="bg-gray-800">Other</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-gray-300/80 text-sm font-light mb-2">Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="6"
              className="w-full bg-gray-800/50 border border-gray-600/30 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-400/50 focus:outline-none focus:border-gray-500/50 transition-colors resize-none"
              placeholder="Tell us about your project..."
              required
            ></textarea>
          </div>
          
          <motion.button
            type="submit"
            className="w-full bg-gray-700/30 hover:bg-gray-600/40 border border-gray-600/40 rounded-lg px-8 py-4 text-gray-200 font-light tracking-wider transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            SEND MESSAGE
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

const OfficeInfoSection = () => {
  const [ref, inView] = useInViewHook({
    threshold: 0.3,
    triggerOnce: true,
  });

  const contactInfo = [
    {
      title: "EMAIL",
      details: ["info@rawvisualstudio.com", "projects@rawvisualstudio.com"],
      icon: "✉"
    },
    {
      title: "PHONE",
      details: ["+48 (555) 123-4567",],
      icon: "☎"
    },
    {
      title: "OFFICE",
      details: ["123 Creative District", "Warsaw, Poland"],
      icon: "📍"
    }
  ];

  return (
    <section 
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-[#000000] to-[#0a0a0a] flex items-center justify-center relative py-20"
    >
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h1 className="text-[6rem] md:text-[8rem] lg:text-[12rem] font-black text-gray-200/70 leading-none tracking-tight mb-8">
            REACH US
          </h1>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="flex-1"
          >
            <img 
              src="https://images.unsplash.com/photo-1554104683-c7063687d649"
              alt="Office"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="flex-1 space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 + (index * 0.2) }}
                className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{info.icon}</span>
                  <h3 className="text-xl font-bold text-gray-200/90">{info.title}</h3>
                </div>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-300/70 font-light mb-1">{detail}</p>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ConnectSection = () => {
  const [ref, inView] = useInViewHook({
    threshold: 0.3,
    triggerOnce: true,
  });

  const socialLinks = [
    { name: "INSTAGRAM", handle: "@raw_visualstudio", url: "https://instagram.com/raw_visualstudio" },
    { name: "LINKEDIN", handle: "/company/rawvisualstudio", url: "https://linkedin.com/company/rawvisualstudio" },
    { name: "X", handle: "@raw_visualstudio", url: "https://x.com/raw_visualstudio" },
    { name: "FACEBOOK", handle: "@raw_visualstudio", url: "https://facebook.com/raw_visualstudio" },
    { name: "YOUTUBE", handle: "@raw_visualstudio", url: "https://youtube.com/@raw_visualstudio" }
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
            CONNECT
          </h1>
          <p className="text-gray-300/60 text-lg max-w-3xl mx-auto font-light leading-relaxed mb-16">
            Follow our journey and stay updated with our latest projects and insights
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
          {socialLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + (index * 0.1) }}
              className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-900/50 transition-all duration-300 cursor-pointer group"
            >
              <h3 className="text-gray-300/80 font-bold mb-2 group-hover:text-gray-200/90 transition-colors">{link.name}</h3>
              <p className="text-gray-400/60 text-sm font-light">{link.handle}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="space-y-4"
        >
          <div className="text-gray-400/40 text-lg tracking-[0.2em] font-light">
            LET'S CREATE SOMETHING EXTRAORDINARY
          </div>
          <div className="text-gray-500/30 text-sm tracking-widest font-light">
            © 2025 Raw Visual Studio • SUSTAINABLE STORYTELLING
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;