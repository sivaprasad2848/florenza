import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaSearch, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import Logo from "../assets/logo.webp";
import CartSidebar from "./CartSidebar";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full shadow bg-white relative">
      {/* Top Row */}
      <div className="flex justify-between items-center py-3 px-4 md:px-8 relative">
        {/* Left: Social Icons (desktop only) */}
        <div className="hidden md:flex gap-3">
          <a href="#" className="border rounded-full p-2 hover:bg-gray-100"><FaFacebookF /></a>
          <a href="#" className="border rounded-full p-2 hover:bg-gray-100"><FaInstagram /></a>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
          <img className="h-14 object-contain" src={Logo} alt="Floranza Logo" />
        </div>

        {/* Right: Desktop & Mobile Buttons */}
        <div className="flex items-center gap-4">
          {/* Search icon (mobile only) */}
          <button className="md:hidden text-xl" onClick={() => alert("Search clicked!")}>
            <FaSearch />
          </button>

          {/* Desktop buttons */}
          <div className="hidden md:flex gap-3 items-center">
            <button className="flex items-center gap-1 border px-3 py-1 rounded-full hover:bg-gray-100 text-sm md:text-base">
              <FiLogIn /> Signin / Register
            </button>
            <button className="bg-pink-600 text-white px-3 py-1 rounded-full flex items-center gap-1 hover:bg-pink-700 text-sm md:text-base">
              Search <FaSearch />
            </button>
          </div>

          {/* Cart icon (always right side) */}
          <button className="text-xl" onClick={() => setIsCartOpen(true)}>
            <FaShoppingBag />
          </button>

          {/* Mobile menu button */}
          <div className="md:hidden text-2xl">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex w-full justify-center gap-8 py-3 text-gray-800 font-medium bg-gray-50">
        <a href="#" className="hover:text-pink-600">Home</a>
        <a href="#" className="hover:text-pink-600">Saree</a>
        <a href="#" className="hover:text-pink-600">Kurtis</a>
        <a href="#" className="hover:text-pink-600">Orders Tracking</a>
        <a href="#" className="hover:text-pink-600">About Us</a>
        <a href="#" className="hover:text-pink-600">Contact</a>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <nav className="flex flex-col md:hidden w-full bg-gray-50 px-6 py-4 text-gray-800 font-medium space-y-3">
          <a href="#" className="hover:text-pink-600">Home</a>
          <a href="#" className="hover:text-pink-600">Saree</a>
          <a href="#" className="hover:text-pink-600">Kurtis</a>
          <a href="#" className="hover:text-pink-600">Orders Tracking</a>
          <a href="#" className="hover:text-pink-600">About Us</a>
          <a href="#" className="hover:text-pink-600">Contact</a>

          {/* Signin & Search on mobile */}
          <button className="flex items-center gap-1 border px-3 py-2 rounded-full hover:bg-gray-100 text-sm">
            <FiLogIn /> Signin / Register
          </button>
          <button className="flex items-center gap-1 bg-pink-600 text-white px-3 py-2 rounded-full hover:bg-pink-700 text-sm">
            Search <FaSearch />
          </button>
        </nav>
      )}

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Navbar;
