import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import FeaturedProducts from "../components/FeaturedProducts";
import AboutUs from "../components/AboutUs";
import Gallery from "../components/Gallery";

import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Hero2 />
      <FeaturedProducts />
      <AboutUs />
      <Gallery />

      <Testimonials />
      <Contact />
      <div className="mt-12">
        <div className="w-full h-80 bg-gray-200 rounded-md overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0926521960745!2d-122.4194154846819!3d37.77492977975865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b2a40870f%3A0x37d7d3847f3e1c58!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
            title="Google Maps"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};
export default Home;
