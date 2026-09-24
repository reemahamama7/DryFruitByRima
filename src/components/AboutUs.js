import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        {/* Title */}
        <motion.h2 initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-3xl font-semibold text-[#805e36]">
          About Us
        </motion.h2>
        <motion.div initial={{ width: 0 }} whileInView={{ width: "4rem" }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }} className="mt-2 border-t-2 border-[#805e36] w-0 mx-auto"></motion.div>

        {/* Content */}
        <div className="mt-8">
          {/* Image */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true }} className="w-full">
            <img
              src="/1.jpg" // Replace with your image URL
              alt="About Us"
              className="rounded-md shadow-lg mx-auto object-cover w-full max-w-4xl"
            />
          </motion.div>

          {/* Text */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="mt-6 text-gray-700 leading-relaxed max-w-4xl mx-auto">
            <p>
              Dry fruits have been a part of our diet and culture since times immemorial. We, Fresh Dry Fruits located in Malad West, Mumbai, Maharashtra, provide roasted & salted almond, cashew, pistachios & raisin of premium quality. Our carefully chosen nuts & dry fruits are
              roasted, flavored & packed in a state-of-the-art manner. We believe in gathering the best of nature & making it affordable to our customers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
