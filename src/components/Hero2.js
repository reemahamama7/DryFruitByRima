import React from "react";
import { motion } from "framer-motion";

const Hero2 = () => {
  const items = [
    { id: 1, title: "Almond", image: "/1.jpg" },
    { id: 2, title: "Raisins", image: "/2.jpg" },
    { id: 3, title: "Cashews", image: "/3.jpg" },
    { id: 4, title: "Walnuts", image: "/4.jpg" },
    { id: 5, title: "Pistachios", image: "/5.jpg" },
    { id: 6, title: "Brazil Nuts", image: "/6.jpg" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2 className="text-3xl font-semibold text-center text-[#805e36]" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          Dry Fruits and Nuts
        </motion.h2>
        <motion.div className="mt-2 border-t-2 border-[#805e36] w-16 mx-auto" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}></motion.div>

        {/* Grid Items */}
        <motion.div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {items.map((item) => (
            <motion.div key={item.id} className="relative bg-white shadow-md rounded-md overflow-hidden group transform transition-transform duration-500 hover:scale-[1.02] hover:rotate-1" variants={cardVariants}>
              {/* Image with overlay */}
              <div className="relative">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                {/* Hover Overlay */}
                <div className="absolute inset-[-10px] bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
              </div>

              {/* Title */}
              <div className="p-4">
                <h3 className="text-lg font-medium text-center text-gray-700 group-hover:text-[#805e36] transition-colors duration-300">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero2;
