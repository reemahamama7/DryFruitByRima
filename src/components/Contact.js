import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Title */}
        <motion.h2 initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-3xl font-semibold text-center text-[#805e36]">
          Contact Us
        </motion.h2>
        <motion.div initial={{ width: 0 }} whileInView={{ width: "4rem" }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="mt-2 border-t-2 border-[#805e36] w-0 mx-auto"></motion.div>

        {/* Contact Information */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 text-center">
          {[
            {
              icon: <FaMapMarkerAlt className="text-4xl text-[#805e36] mb-4 mx-auto" />,
              title: "Our Office Address",
              content: "Palm Court Bldg M, 501/8, 5th Floor, New Link Road, Behind Goregaon Sports Complex, Malad West, Mumbai, Maharashtra 400064",
            },
            {
              icon: <FaEnvelope className="text-4xl text-[#805e36] mb-4 mx-auto" />,
              title: "General Enquiries",
              content: "Support@upnq8.com",
            },
            {
              icon: <FaPhoneAlt className="text-4xl text-[#805e36] mb-4 mx-auto" />,
              title: "Call Us",
              content: "+965 516 75316",
            },
            {
              icon: <FaClock className="text-4xl text-[#805e36] mb-4 mx-auto" />,
              title: "Our Timings",
              content: "Mon - Sun: 10:00 AM - 07:00 PM",
            },
          ].map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 * index }} viewport={{ once: true }} className="text-center">
              {item.icon}
              <h3 className="font-medium text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{item.content}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mt-12">
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <input type="text" placeholder="Full Name" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-[#805e36] focus:border-[#805e36]" />
            <input type="text" placeholder="Mobile Number" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-[#805e36] focus:border-[#805e36]" />
            <input type="email" placeholder="Email ID" className="w-full col-span-2 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-[#805e36] focus:border-[#805e36]" />
            <textarea placeholder="Message" rows="4" className="w-full col-span-2 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-[#805e36] focus:border-[#805e36]"></textarea>
            <button type="submit" className="col-span-2 bg-[#805e36] text-white rounded-md py-3 px-6 font-medium hover:bg-[#674824] transition duration-300">
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
