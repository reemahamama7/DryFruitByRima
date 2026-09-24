import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <motion.h2 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">
          Have questions? We'd love to hear from you! Get in touch with us using the form below.
        </motion.p>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Section - Contact Info */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h3>
            <p className="text-gray-600 mb-4">Reach out to us through any of the channels below.</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <i className="fas fa-phone-alt text-lg text-[#805e36]"></i>
                <span className="text-gray-700">+965 516 75316</span>
              </div>
              <div className="flex items-center space-x-4">
                <i className="fas fa-envelope text-lg text-[#805e36]"></i>
                <span className="text-gray-700">Support@upnq8.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <i className="fas fa-map-marker-alt text-lg text-[#805e36]"></i>
                <span className="text-gray-700">1234 Elm Street, Anytown, Kuwait</span>
              </div>
            </div>
          </motion.div>

          {/* Right Section - Contact Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input type="text" id="name" className="w-full mt-1 border rounded-md p-2 focus:ring-2 focus:ring-[#805e36] focus:outline-none" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input type="email" id="email" className="w-full mt-1 border rounded-md p-2 focus:ring-2 focus:ring-[#805e36] focus:outline-none" placeholder="Your Email" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea id="message" rows="5" className="w-full mt-1 border rounded-md p-2 focus:ring-2 focus:ring-[#805e36] focus:outline-none" placeholder="Your Message"></textarea>
              </div>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" className="w-full py-2 px-4 bg-[#805e36] text-white font-medium rounded-md hover:bg-[#6e502f] transition">
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="mt-16">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">Find Us Here</h3>
          <div className="relative w-full h-64 sm:h-96 rounded-lg overflow-hidden">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.117657944208!2d-122.0859472846817!3d37.42199817982559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02d8467c67%3A0xc29d239c5ff9b97e!2sGoogleplex!5e0!3m2!1sen!2sus!4v1614673846623!5m2!1sen!2sus"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="absolute inset-0 border-0"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
