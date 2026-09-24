import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const images = [
    { src: "/1.jpg", description: "A breathtaking mountain view at sunset." },
    { src: "/2.jpg", description: "A serene beach with crystal-clear water." },
    { src: "/3.jpg", description: "A lush forest with sunlight streaming through the trees." },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        {/* Title */}
        <motion.h2 initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-3xl font-semibold text-[#805e36]">
          Gallery
        </motion.h2>
        <motion.div initial={{ width: 0 }} whileInView={{ width: "4rem" }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="mt-2 border-t-2 border-[#805e36] w-0 mx-auto"></motion.div>

        {/* Gallery Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 * index,
                duration: 0.8,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => openModal(image)}
            >
              <img src={image.src} alt={`Gallery ${index + 1}`} className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}>
              {/* Close Button */}
              <button className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition-transform transform hover:scale-110" onClick={closeModal} aria-label="Close Modal">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content */}
              <img src={selectedImage.src} alt="Selected" className="w-full h-64 object-cover rounded-md mb-4" />
              <p className="text-gray-700 text-center">{selectedImage.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
