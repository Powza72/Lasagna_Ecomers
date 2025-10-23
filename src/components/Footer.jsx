import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-red-500 text-shadow-gray-50 mt-16 border-t border-gray-200">
      
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* --- Brand / About --- */}
        <div>
          <h2 className="text-xl font-extrabold text-white">
            Lasagna<span className="text-yellow-500">.</span>
          </h2>
          <p className="text-sm text-white mt-2">
            Your daily pick of fashion and lifestyle products.  
            Designed with simplicity, comfort, and sustainability.
          </p>
        </div>

        {/* --- Shop --- */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Shop</h3>
          <ul className="space-y-2 text-sm text-white">
            <li className="hover:text-gray-400 cursor-pointer">New Arrivals</li>
            <li className="hover:text-gray-400 cursor-pointer">Best Sellers</li>
            <li className="hover:text-gray-400 cursor-pointer">Men</li>
            <li className="hover:text-gray-400 cursor-pointer">Women</li>
          </ul>
        </div>

        {/* --- About --- */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">About</h3>
          <ul className="space-y-2 text-sm text-white">
            <li className="hover:text-gray-400 cursor-pointer">Our Story</li>
            <li className="hover:text-gray-400 cursor-pointer">Sustainability</li>
            <li className="hover:text-gray-400 cursor-pointer">Careers</li>
            <li className="hover:text-gray-400 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* --- Newsletter --- */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Stay Updated</h3>
          <p className="text-sm text-white mb-3">Subscribe to our newsletter</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-l-lg focus:outline-none focus:border-white"
            />
            <button className="bg-white text-black px-4 py-2 rounded-r-lg hover:bg-gray-400 transition">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* --- Bottom --- */}
      <div className="border-t border-gray-200 mt-6 py-4 text-center text-sm text-white">
        © {new Date().getFullYear()} YDP. All rights reserved.
      </div>
    </footer>
  );
}
