import { useState } from "react";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

export default function ProductCard({ image, name, price, category, rate,des, reviews = 128, badge = null }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2500);
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };



  return (
    <div className="mt-12 group h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 flex flex-col">
      {/* Image Container */}
      <div className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="pt-[100%] relative">
          {/* Skeleton Loader */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
          
          <img
            src={image}
            alt={name}
            onLoad={() => setImageLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Badge */}
          {badge && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
              {badge}
            </div>
          )}

          {/* Favorite Button */}
          <button
            onClick={handleFavorite}
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-full p-2.5 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white transform hover:scale-110 active:scale-95"
            aria-label="Add to favorites"
          >
            <FaHeart
              className={`text-lg transition-all duration-300 ${
                isFavorite ? "text-red-500" : "text-gray-400"
              }`}
            />
          </button>

          {/* Add to Cart Button */}
          <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <button
              onClick={handleAddToCart}
              className={`w-full py-3 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                isAdded
                  ? "bg-green-500 text-white"
                  : "bg-gray-900 text-white hover:bg-black active:scale-95"
              }`}
            >
              <FaShoppingCart className="text-base" />
              {isAdded ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>

          {/* Gradient Overlay for Button */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-4 md:p-5 flex flex-col justify-between">
        {/* Category & Title */}
        <div>
          <p className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
            {category}
          </p>
          <h3 className="text-sm md:text-base lg:text-lg font-bold text-green-600 line-clamp-2 leading-tight mb-3 group-hover:text-green-800 transition-colors">
            {name}
          </h3>
          <p className="hidden sm:block">{des}</p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-xs ${
                    i < Math.floor(rate)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                
                />
              ))}
            </div>
            <span className="text-xs text-gray-600">
              <span className="font-semibold text-gray-900">{rate}</span>
              
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="border-t border-gray-100 pt-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl md:text-3xl font-bold text-gray-900">
              ${price}
            </span>
            
          </div>
        </div>
      </div>
    </div>
  );
}