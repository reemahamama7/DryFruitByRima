import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="bg-white border-t border-gray-200 py-10 px-6">
        <div className="container mx-auto">
          {/* Footer Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* MiniStore Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 ">USEFUL LINKS</h3>

              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="/products" className="hover:text-gray-900">
                    HOME
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:text-gray-900">
                    ABOUT
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:text-gray-900">
                    SHOP
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:text-gray-900">
                    BLOGS
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:text-gray-900">
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="/products" className="hover:text-gray-900">
                    HOME
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:text-gray-900">
                    ABOUT
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:text-gray-900">
                    SHOP
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:text-gray-900">
                    BLOGS
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:text-gray-900">
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>

            {/* Help & Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 ">CONTACT</h3>

              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="/products" className="hover:text-gray-900">
                    TRACK YOUR ORDER
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:text-gray-900">
                    RETURNS POLICIES
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:text-gray-900">
                    SHIPPING + DELIVERY
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:text-gray-900">
                    CONTACT US
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:text-gray-900">
                    FAQS
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">CONNECT</h4>

              <div className="flex gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-700 rounded-full hover:bg-[#1877f2] transition duration-300">
                  <FaFacebookF className="text-white text-xl" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-700 rounded-full hover:bg-[#1da1f2] transition duration-300">
                  <FaTwitter className="text-white text-xl" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-700 rounded-full hover:bg-[#e1306c] transition duration-300">
                  <FaInstagram className="text-white text-xl" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-700 rounded-full hover:bg-[#0077b5] transition duration-300">
                  <FaLinkedinIn className="text-white text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="border-t border-gray-200 mt-10 pt-6 text-center space-y-4">
            <p className="text-gray-600">
              © Copyright 2024 Fresh Dry Fruits. Design by{" "}
              <a href="/products" className="hover:text-gray-900">
                UPNQ8
              </a>
              . Distribution by{" "}
              <a href="/products" className="hover:text-gray-900">
                UPNQ8
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
