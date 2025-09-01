import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Logo from"../assets/logo.webp"

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Top Logo */}
      <div className="flex flex-col items-center py-6">
        <img
          src={Logo} // replace with your logo path
          alt="Floranza Logo"
          className="h-24 mb-4"
        />

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-gray-800">
          <a href="#">ABOUT US</a>
          <a href="#">CONTACT US</a>
          <a href="#">PRIVACY POLICY</a>
          <a href="#">TERMS & CONDITION</a>
          <a href="#">RETURNS & EXCHANGE</a>
          <a href="#">SHIPPING & DELIVERY</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
          >
            <FaInstagram size={18} />
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-sm text-gray-500">
          © 2025 Floranza Fashion Boutique.
        </p>
      </div>

      {/* Flower Border Bottom */}
      <div className="mt-6">
        <img
          src="/flowers.png" // replace with your flower border image
          alt="Flower Border"
          className="w-full"
        />
      </div>
    </footer>
  );
}

export default Footer;
