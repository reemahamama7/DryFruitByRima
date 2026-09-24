import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const products = [
    {
      id: 1,
      title: "Premium Almonds",
      description: "Our premium almonds are sourced directly from organic farms, ensuring the highest quality for your health.",
      image: "/4.jpg",
    },
    {
      id: 2,
      title: "Golden Raisins",
      description: "Sweet and tangy golden raisins, perfect for snacking or adding to your favorite recipes.",
      image: "/1.jpg",
    },
    {
      id: 3,
      title: "Natural Cashews",
      description: "Rich and buttery cashews, ideal for cooking, baking, or enjoying as a snack.",
      image: "/3.jpg",
    },
  ];
  const values = [
    { title: "Quality", description: "We never compromise on quality." },
    { title: "Sustainability", description: "We care for the planet." },
    { title: "Trust", description: "Your trust is our priority." },
  ];

  const team = [
    { name: "John Doe", role: "Founder & CEO", image: "/team1.jpeg" },
    { name: "Jane Smith", role: "Head of Operations", image: "/team2.jpeg" },
    { name: "Emily Johnson", role: "Marketing Lead", image: "/team3.jpeg" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <motion.h2 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          About Us
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto text-center">
          At Fresh Dry Fruits, we deliver the finest quality products to promote a healthy and delicious lifestyle. Discover more about who we are.
        </motion.p>

        {/* Top Products Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2 * index,
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img src={product.image} alt={product.title} className="w-full h-48 sm:h-56 lg:h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{product.title}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Our Values Section */}
        <div className="mb-16">
          <motion.h3 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-2xl font-bold text-center text-gray-800 mb-6">
            Our Values
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div key={value.title} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 * index, duration: 0.5 }} className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <motion.h3 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-2xl font-bold text-center text-gray-800 mb-6">
            Meet Our Team
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.2 * index,
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img src={member.image} alt={member.name} className="w-full h-48 sm:h-56 lg:h-64 object-cover" />
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="bg-[#805e36] text-white py-10 rounded-lg shadow-lg text-center">
          <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-xl font-semibold mb-4">
            Ready to Explore the Best Dry Fruits?
          </motion.h3>
          <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="px-6 py-2 bg-white text-[#805e36] rounded-md font-medium hover:bg-gray-200 transition">
            Shop Now
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
