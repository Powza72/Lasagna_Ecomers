import { useEffect, useState } from "react";
import { X } from "lucide-react";
import HeroSection from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Features from "../components/FeatureCard";
import GrocerySection from "../components/GrocerySection";
import Beauty from "../components/Beauty";
import ProductShowcase from "../components/ProductShowcase";
import Fragrances from "../components/Fragrances";
// Loading Skeleton
function LoadingSkeleton() {
  return (
    <div className="space-y-8">
      {/* Hero Skeleton */}
      <div className="animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 h-56 sm:h-72 md:h-80 lg:h-96 rounded-3xl"></div>

      {/* Feature Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="animate-pulse bg-gray-200 h-24 sm:h-28 md:h-32 rounded-2xl"
          ></div>
        ))}
      </div>

      {/* Product Skeleton */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="animate-pulse space-y-4">
            <div className="bg-gray-200 h-40 sm:h-48 md:h-56 rounded-2xl"></div>
            <div className="bg-gray-200 h-5 w-3/4 rounded"></div>
            <div className="bg-gray-200 h-5 w-1/2 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("ไม่สามารถเชื่อมต่อกับ API ได้");
        return res.json();
      })
      .then((data) => setProducts(data.products))
      .catch(() =>
        setError("เกิดข้อผิดพลาดในการโหลดข้อมูล กรุณาลองใหม่อีกครั้ง")
      )
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 p-4 sm:p-6 lg:p-8">
        <LoadingSkeleton />
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl p-6 sm:p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <X className="w-8 h-8 text-red-500" />
            </div>
          </div>
          <p className="text-red-600 font-semibold text-lg sm:text-xl mb-6">
            {error}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            🔁 ลองใหม่อีกครั้ง
          </button>
        </div>
      </div>
    );

  const groceryProducts = products.filter(
    (item) => item.category === "groceries"
  );
  const beautyProducts = products.filter(
    (item) => item.category === "beauty"
  );
  const fragrances = products.filter(
    (item) => item.category === "fragrances"
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <HeroSection />

        {/* Features */}
        <div className="mt-10 sm:mt-12">
          <Features />
        </div>

        {/* Grocery Section */}
        <div className="mt-12 sm:mt-16">
          <GrocerySection groceryProducts={groceryProducts} />
        </div>

        {/* Beauty Section */}
        <div className="mt-12 sm:mt-16">
          <Beauty beautyProducts={beautyProducts} />
        </div>

        <div className="mt-12 sm:mt-16">
          <Fragrances fragrances={fragrances} />
        </div>

        
      </div>
    </div>
  );
}
