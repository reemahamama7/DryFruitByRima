import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Hero = () => {
  const slides = [
    { id: 1, image: "/1.jpg", title: "Welcome to Modern Website", description: "Experience the future of design" },
    { id: 2, image: "/2.jpg", title: "Innovative Solutions", description: "Transforming ideas into reality" },
    { id: 3, image: "/3.jpg", title: "Creative Excellence", description: "Unleash your imagination with us" },
  ];

  const [activeSlide, setActiveSlide] = useState(slides[0]);

  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <Swiper modules={[Autoplay]} spaceBetween={10} slidesPerView={1} loop={true} autoplay={{ delay: 3000, disableOnInteraction: false }} className="h-full" onSlideChange={(swiper) => setActiveSlide(slides[swiper.realIndex])}>
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full h-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${slide.image})` }}>
              {/* Animated Content */}
              <div className={`text-center text-white bg-black/50 p-6 md:p-8 rounded-lg shadow-lg transition-all duration-700 ${activeSlide.id === slide.id ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-fade-in-down">{slide.title}</h1>
                <p className="text-sm sm:text-base md:text-lg animate-fade-in-up">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
