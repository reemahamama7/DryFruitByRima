import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#d9b48f]">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center space-x-4 text-white text-sm">
          <a href="/products" className="flex items-center space-x-1">
            <i className="fas fa-phone-alt"></i>
            <span>+965 516 75316</span>
          </a>
          <a href="mailto:Support@upnq8.com" className="flex items-center space-x-1">
            <i className="fas fa-envelope"></i>
            <span>Support@upnq8.com</span>
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center  mt-2 sm:mt-0 text-white text-sm  space-x-1">
          <i className="fas fa-map-marker-alt"></i>
          <span>Kuwait</span>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/logo.jpeg" alt="Fresh Dry Fruits" className="h-10" />
            <h1 className="text-2xl font-bold text-[#805e36]">Fresh Dry Fruits</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" className={({ isActive }) => (isActive ? "text-gray-600 font-bold" : "text-gray-600 hover:text-[#805e36] transition")}>
              Home
            </NavLink>
            <NavLink to="/products" className={({ isActive }) => (isActive ? "text-gray-600 font-bold" : "text-gray-600 hover:text-[#805e36] transition")}>
              Dry Fruits and Nuts
            </NavLink>

            <NavLink to="/products" className={({ isActive }) => (isActive ? "text-gray-600 font-bold" : "text-gray-600 hover:text-[#805e36] transition")}>
              Products
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "text-gray-600 font-bold" : "text-gray-600 hover:text-[#805e36] transition")}>
              About Us
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-gray-600 font-bold" : "text-gray-600 hover:text-[#805e36] transition")}>
              Contact Us
            </NavLink>
          </nav>

          {/* Mobile Hamburger Button */}
          <button className="md:hidden text-gray-600 text-3xl focus:outline-none" onClick={handleMenuToggle}>
            {isMenuOpen ? (
              <i className="fas fa-times"></i> // Close icon when menu is open
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Search and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <input type="text" placeholder="Search" className="border rounded-md px-3 py-1 text-sm" />
            <i className="fas fa-shopping-cart text-gray-600 text-lg"></i>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`md:hidden fixed inset-0 bg-white z-50 transition-transform transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-bold text-[#805e36]">Menu</h2>
            <button onClick={handleMenuToggle} className="text-gray-600 focus:outline-none text-2xl">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="p-4 space-y-4">
            <NavLink to="/" className="block text-gray-600 hover:text-[#805e36] py-2" onClick={handleMenuToggle}>
              Home
            </NavLink>
            <a href="/products" className="block text-gray-600 hover:text-[#805e36] py-2" onClick={handleMenuToggle}>
              Dry Fruits and Nuts
            </a>
            <NavLink to="/products" className="block text-gray-600 hover:text-[#805e36] py-2" onClick={handleMenuToggle}>
              Products
            </NavLink>
            <NavLink to="/about" className="block text-gray-600 hover:text-[#805e36] py-2" onClick={handleMenuToggle}>
              About Us
            </NavLink>
            <NavLink to="/contact" className="block text-gray-600 hover:text-[#805e36] py-2" onClick={handleMenuToggle}>
              Contact Us
            </NavLink>
          </div>
          <div className="p-4">
            <input type="text" placeholder="Search" className="w-full border rounded-md px-4 py-2 text-sm mb-4" />
            <button className="w-full flex justify-center items-center py-2 bg-[#805e36] text-white rounded-lg hover:bg-[#6b4e2b] transition">
              <i className="fas fa-shopping-cart mr-2"></i> Go to Cart
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
