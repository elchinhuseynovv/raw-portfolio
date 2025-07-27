import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView as useInViewHook } from 'react-intersection-observer';

const PresetsPage = () => {
  const [presets, setPresets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    fetchPresets();
  }, []);

  const fetchPresets = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/presets`);
      if (response.ok) {
        const data = await response.json();
        setPresets(data);
      }
    } catch (error) {
      console.error('Error fetching presets:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPresets = selectedType === 'all' 
    ? presets 
    : presets.filter(preset => preset.type === selectedType);

  return (
    <div className="presets-page min-h-screen bg-gradient-to-b from-[#1a1a1a] via-[#111111] to-[#0a0a0a]">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Filter Section */}
      <FilterSection selectedType={selectedType} setSelectedType={setSelectedType} />
      
      {/* Presets Grid */}
      {loading ? (
        <LoadingSection />
      ) : (
        <PresetsGrid presets={filteredPresets} />
      )}
      
      {/* Contact Section */}
      <ContactSection />
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
      className="min-h-screen bg-gradient-to-b from-[#1a1a1a] via-[#111111] to-[#0a0a0a] flex items-center justify-center relative overflow-hidden pt-32"
    >
      <div className="text-center px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          <h1 className="text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-black text-gray-200/80 leading-none tracking-tight">
            PRESETS
          </h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="text-[6rem] md:text-[8rem] lg:text-[12rem] xl:text-[16rem] font-black text-gray-200/60 leading-none tracking-tight -mt-8"
          >
            & LUTS
          </motion.h2>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-gray-300/70 text-lg md:text-xl mt-12 max-w-3xl mx-auto font-light tracking-wide"
        >
          Professional-grade presets and LUTs crafted by our EMMY® award-winning team. Transform your photos and videos with the same color grading techniques used in our acclaimed productions.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16"
        >
          <div className="text-gray-400/60 text-sm tracking-[0.3em] font-light">
            PROFESSIONAL QUALITY • INSTANT DELIVERY
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

const FilterSection = ({ selectedType, setSelectedType }) => {
  const [ref, inView] = useInViewHook({
    threshold: 0.5,
    triggerOnce: true,
  });

  const filters = [
    { key: 'all', label: 'ALL PRODUCTS' },
    { key: 'preset', label: 'PRESETS' },
    { key: 'lut', label: 'LUTS' }
  ];

  return (
    <section 
      ref={ref}
      className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#000000]"
    >
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex justify-center space-x-8"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.key}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onClick={() => setSelectedType(filter.key)}
              className={`px-8 py-4 text-lg font-light tracking-[0.2em] transition-all duration-300 border-b-2 ${
                selectedType === filter.key
                  ? 'text-gray-200 border-gray-200'
                  : 'text-gray-400/60 border-transparent hover:text-gray-300 hover:border-gray-300/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const LoadingSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#000000] to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-2 border-gray-300/20 border-t-gray-300/80 rounded-full mx-auto mb-4"
        />
        <p className="text-gray-400/60 text-lg tracking-[0.2em] font-light">
          LOADING PRESETS...
        </p>
      </div>
    </section>
  );
};

const PresetsGrid = ({ presets }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#000000] to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {presets.map((preset, index) => (
            <PresetCard key={preset.id} preset={preset} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PresetCard = ({ preset, index }) => {
  const [ref, inView] = useInViewHook({
    threshold: 0.3,
    triggerOnce: true,
  });

  const handleInquire = () => {
    const subject = encodeURIComponent(`Inquiry about ${preset.name}`);
    const body = encodeURIComponent(`Hi, I'm interested in purchasing the ${preset.name} for $${preset.price}. Please provide payment details and delivery information.`);
    window.location.href = `mailto:info@rawvisualstudio.com?subject=${subject}&body=${body}`;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, delay: index * 0.2 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500">
        
        {/* Preview Image */}
        <div className="relative h-96 overflow-hidden">
          <img 
            src={preset.preview_image}
            alt={preset.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Type Badge */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 text-xs font-semibold tracking-widest rounded-full ${
              preset.type === 'preset' 
                ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
            }`}>
              {preset.type.toUpperCase()}
            </span>
          </div>
          
          {/* Price */}
          <div className="absolute top-4 right-4">
            <span className="px-4 py-2 bg-black/60 backdrop-blur-sm text-gray-200 text-lg font-bold rounded-full">
              ${preset.price}
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-8">
          <h3 className="text-3xl font-black text-gray-200 mb-4 group-hover:text-gray-100 transition-colors duration-300">
            {preset.name}
          </h3>
          
          <p className="text-gray-400/80 text-base leading-relaxed mb-6">
            {preset.description}
          </p>
          
          {/* Details */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <span className="text-gray-500 text-sm tracking-wide">FILES</span>
              <p className="text-gray-300 font-semibold">{preset.file_count} Files</p>
            </div>
            <div>
              <span className="text-gray-500 text-sm tracking-wide">DELIVERY</span>
              <p className="text-gray-300 font-semibold">Email</p>
            </div>
          </div>
          
          {/* Compatibility */}
          <div className="mb-8">
            <span className="text-gray-500 text-sm tracking-wide block mb-2">COMPATIBILITY</span>
            <div className="flex flex-wrap gap-2">
              {preset.compatibility.map((software, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700/50"
                >
                  {software}
                </span>
              ))}
            </div>
          </div>
          
          {/* Action Button */}
          <motion.button
            onClick={handleInquire}
            className="w-full py-4 bg-gradient-to-r from-gray-700/50 to-gray-600/50 hover:from-gray-600/60 hover:to-gray-500/60 text-gray-200 font-semibold tracking-[0.1em] rounded-xl border border-gray-600/50 hover:border-gray-500/50 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            INQUIRE TO PURCHASE
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const ContactSection = () => {
  const [ref, inView] = useInViewHook({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section 
      ref={ref}
      className="py-32 bg-gradient-to-b from-[#0a0a0a] to-[#000000]"
    >
      <div className="max-w-4xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-[4rem] md:text-[6rem] font-black text-gray-200/70 leading-none tracking-tight mb-8">
            CUSTOM WORK
          </h2>
          <p className="text-gray-300/60 text-lg max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Need something specific? Our team can create custom presets and LUTs tailored to your brand and vision. 
            Let's craft something unique together.
          </p>
          
          <motion.a
            href="mailto:info@rawvisualstudio.com?subject=Custom Preset/LUT Inquiry"
            className="inline-block px-12 py-4 bg-gradient-to-r from-gray-600/40 to-gray-500/40 hover:from-gray-500/50 hover:to-gray-400/50 text-gray-200 font-semibold tracking-[0.2em] rounded-xl border border-gray-500/40 hover:border-gray-400/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GET CUSTOM QUOTE
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default PresetsPage;