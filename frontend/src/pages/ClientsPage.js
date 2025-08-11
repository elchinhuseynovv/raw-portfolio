import React from 'react';
import { motion } from 'framer-motion';
import { useInView as useInViewHook } from 'react-intersection-observer';

const ClientsPage = () => {
  return (
    <div className="clients-page">
      {/* Hero Section */}
      <ClientsHeroSection />
      
      {/* Fashion Clients Section */}
      <FashionClientsSection />
      
      {/* Other Clients Sections can be added here */}
      <OtherClientsSection />
    </div>
  );
};

const ClientsHeroSection = () => {
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
            OUR
          </h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-black text-gray-200/80 leading-none tracking-tight -mt-8"
          >
            CLIENTS
          </motion.h2>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-gray-300/70 text-lg md:text-xl mt-12 max-w-3xl mx-auto font-light tracking-wide leading-relaxed"
        >
          From underground culture to luxury fashion, from award-winning campaigns to groundbreaking content - we've partnered with brands that dare to tell authentic stories.
        </motion.p>
      </div>
    </section>
  );
};

const FashionClientsSection = () => {
  const [ref, inView] = useInViewHook({
    threshold: 0.3,
    triggerOnce: true,
  });

  const fashionBrands = [
    {
      name: "Cropp",
      location: "Poland",
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8"
    },
    {
      name: "MISBHV",
      location: "Poland", 
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
    },
    {
      name: "The Attico",
      location: "Italy",
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b"
    },
    {
      name: "Mossi",
      location: "France",
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
    },
    {
      name: "TEYÓ by Teona Gardapkhadze",
      location: "Georgia",
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2"
    },
    {
      name: "Tatuna Nikolaishvili",
      location: "Georgia", 
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050"
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
          className="text-center mb-16"
        >
          <h1 className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-black text-gray-200/90 leading-none tracking-tight mb-8">
            FASHION
          </h1>
          <h2 className="text-[3rem] md:text-[4rem] lg:text-[6rem] font-black text-gray-300/70 leading-none tracking-tight -mt-6 mb-8">
            EMERGING EUROPE
          </h2>
          <p className="text-gray-300/80 text-lg md:text-xl font-light leading-relaxed max-w-4xl mx-auto mb-12">
            We've worked with and captured fashion brands that blend craftsmanship, authenticity, and fresh vision—spanning Italy, France, Czech Republic and Georgia.
          </p>
          <div className="text-gray-400/60 text-sm font-light tracking-widest mb-16">
            SELECTED BRAND COLLABORATIONS:
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fashionBrands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
              className="relative group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-gray-100 mb-2">{brand.name}</h3>
                  <p className="text-gray-300/80 font-light text-sm tracking-wider">{brand.location}</p>
                  <div className="mt-2 px-3 py-1 bg-gray-200/10 backdrop-blur-sm rounded-full inline-block">
                    <span className="text-gray-200 text-xs font-light tracking-wider">{brand.category}</span>
                  </div>
                </div>
                
                <motion.div
                  className="absolute top-4 right-4 w-12 h-12 bg-gray-200/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  whileHover={{ rotate: 90 }}
                >
                  <div className="text-gray-200 text-lg">↗</div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OtherClientsSection = () => {
  const [ref, inView] = useInViewHook({
    threshold: 0.3,
    triggerOnce: true,
  });

  const clientCategories = [
    {
      category: "LUXURY TRAVEL",
      brands: ["Aman", "Mandarin Oriental", "Ritz-Carlton", "W Hotels", "Edition"],
      description: "Crafting cinematic content for world-class hospitality brands."
    },
    {
      category: "ENTERTAINMENT",
      brands: ["Netflix", "Amazon Prime", "Disney+", "HBO", "National Geographic"],
      description: "Producing award-winning documentaries and premium content."
    },
    {
      category: "LIFESTYLE & TECH",
      brands: ["Google", "Nike", "Porsche", "Apple", "Adidas"],
      description: "Creating authentic brand narratives that resonate globally."
    },
    {
      category: "AIRLINES & TOURISM",
      brands: ["Lufthansa", "Emirates", "Turkish Airlines", "Qatar Airways"],
      description: "Developing destination storytelling that drives bookings."
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
          <h1 className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-black text-gray-200/80 leading-none tracking-tight mb-8">
            GLOBAL
          </h1>
          <h2 className="text-[3rem] md:text-[4rem] lg:text-[6rem] font-black text-gray-300/60 leading-none tracking-tight -mt-6 mb-8">
            PARTNERSHIPS
          </h2>
          <p className="text-gray-300/70 text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Working with industry leaders across entertainment, luxury, technology, and travel sectors.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {clientCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 + (index * 0.15) }}
              className="bg-gradient-to-br from-gray-900/20 to-gray-800/10 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/20"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-200/90 mb-4 tracking-wider">
                {category.category}
              </h3>
              <p className="text-gray-300/70 font-light leading-relaxed mb-6">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {category.brands.map((brand, brandIndex) => (
                  <div
                    key={brandIndex}
                    className="px-4 py-2 bg-gray-200/5 backdrop-blur-sm rounded-full border border-gray-600/20"
                  >
                    <span className="text-gray-300/80 text-sm font-light tracking-wide">{brand}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-center mt-20"
        >
          <div className="text-gray-400/40 text-sm tracking-[0.3em] font-light">
            500+ BILLION VIEWS • EMMY® AWARD WINNING • 25+ YEARS EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsPage;