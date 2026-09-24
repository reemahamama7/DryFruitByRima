import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const FeaturedProducts = () => {
  const products = [
    { id: 1, name: "Almonds", price: "90$", image: "/1.jpg" },
    { id: 2, name: "Pistachio (Pista - without shell)", price: "20$", image: "/2.jpg" },
    { id: 3, name: "Almond - Intense Flavor (California)", price: "77$", image: "/3.jpg" },
    { id: 4, name: "Raisin (Green - Afghani - Premium)", price: "89$", image: "/4.jpg" },
    { id: 5, name: "DRAFT Roasted & Salted Tasty Cashew Nuts", price: "60$", image: "/5.jpg" },
    { id: 6, name: "Tulsi Walnut In Shell", price: "77$", image: "/6.jpg" },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-200 py-12">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center text-[#805e36] tracking-wide uppercase">Featured Products</h2>
        <div className="mt-2 border-t-4 border-[#805e36] w-20 mx-auto"></div>

        {/* Swiper */}
        <div className="relative overflow-hidden mt-12">
          <Swiper
            loop={true} // Enable looping
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="!overflow-visible"
            style={{ height: "24rem" }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-2xl hover:rotate-1 transition-transform duration-500">
                  {/* Product Image */}
                  <div className="relative w-full h-48 overflow-hidden rounded-t-3xl">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                    {/* Glass Overlay on Hover */}
                    <div className="absolute inset-0 bg-white bg-opacity-40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 truncate group-hover:text-[#805e36] transition duration-300">{product.name}</h3>
                    <p className="mt-2 text-gray-500 text-sm">High-quality, fresh, and delicious.</p>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-[#805e36] to-[#a38658] text-white text-sm px-4 py-2 rounded-full shadow-md">{product.price}</div>

                  {/* Add-to-Cart Floating Button */}
                  <button className="absolute bottom-6 right-6 bg-[#805e36] text-white px-5 py-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500">Add to Cart</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center space-x-4 z-10 mt-4">
            <button className="custom-prev bg-white border border-gray-300 p-3 rounded-full shadow-md hover:bg-[#805e36] hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="custom-next bg-white border border-gray-300 p-3 rounded-full shadow-md hover:bg-[#805e36] hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
