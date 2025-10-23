import { useState } from "react";
import { FaUser, FaHeart, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full top-0 left-0 z-50 ">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo + Text */}
        <Link to="/" className="flex flex-col items-center leading-tight">
          <span className="flex items-center gap-2">
            <img
              src="/assets/Logo.jpg"
              alt="Lasagna Logo"
              className="w-12 h-12 rounded-lg object-cover shadow-sm"
            />
            <span className="text-xl font-bold text-gray-800">
              <span className="text-red-600">Lasagna</span> Store
            </span>
          </span>
          <span className="text-xs text-gray-500 tracking-wider mt-1">
            E-Commerce
          </span>
        </Link>

        {/* Icons (Desktop) */}
        <div className="hidden md:flex space-x-6 text-gray-700 text-xl">
          <FaUser className="cursor-pointer hover:text-red-600 transition-colors" />
          <FaHeart className="cursor-pointer hover:text-red-600 transition-colors" />
          <FaShoppingBag className="cursor-pointer hover:text-red-600 transition-colors" />
        </div>

        
      </div>

      {/* Mobile Menu */}
      
      
    </nav>
  );
}
