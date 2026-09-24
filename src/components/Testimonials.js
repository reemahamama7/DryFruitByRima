import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules"; // Correct import for Swiper 8+

const Testimonials = () => {
  const testimonials = [
    {
      quote: "They offer world-class quality dry fruits. I have known them for a long time.",
      author: "Preeti Jha",
    },
    {
      quote: "Amazing products and excellent service. Highly recommend them!",
      author: "Rahul Sharma",
    },
    {
      quote: "Their dry fruits are fresh, flavorful, and of top-notch quality.",
      author: "Sneha Kapoor",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl font-semibold text-[#805e36]">Testimonials</h2>
        <div className="mt-2 border-t-2 border-[#805e36] w-16 mx-auto"></div>
        <Swiper
          className="mt-8"
          modules={[Pagination]} // Register Pagination module
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          style={{ height: "12rem" }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center">
                <div className="text-6xl text-[#805e36]">❝</div>
                <p className="mt-4 text-lg text-gray-700 max-w-2xl">{testimonial.quote}</p>
                <p className="mt-2 text-lg font-medium text-gray-900">{testimonial.author}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
