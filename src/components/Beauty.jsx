import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function Beauty({ beautyProducts }) {
  return (
    <section className="mb-16  px-2 sm:px-4">
      {/* หัวข้อ + ปุ่ม */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-3 leading-tight">
             Beauty & Skincare
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Explore our finest beauty and skincare collections
          </p>
        </div>

        {/* ปุ่มดูทั้งหมด */}
        <Link
          to="/beauty"
          className="relative group inline-flex items-center justify-center w-full sm:w-auto overflow-hidden px-6 sm:px-8 py-3 sm:py-4 font-semibold text-lg sm:text-xl md:text-2xl text-white rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95"
          style={{
            backgroundImage: "url('/assets/b.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <span className="absolute inset-0 bg-black/25 rounded-2xl transition-all duration-300 group-hover:bg-black/35"></span>

          <span className="relative z-10">View All Products</span>

          {/* Glow Effect */}
          <span className="absolute inset-0 rounded-2xl bg-white opacity-10 blur-xl animate-pulse"></span>
        </Link>
      </div>

      {/* แสดงสินค้า */}
      {beautyProducts && beautyProducts.length > 0 ? (
        <div
          className="
            grid 
            grid-cols-2 
            sm:grid-cols-3 
            md:grid-cols-4 
            lg:grid-cols-5 
            gap-4 
            sm:gap-6 
            md:gap-8 
            mb-12
          "
        >
          {beautyProducts.slice(0, 5).map((item) => (
            <ProductCard
              key={item.id}
              image={item.thumbnail}
              name={item.title}
              price={item.price}
              category={item.category}
              rating={item.rating}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50 rounded-3xl shadow-inner">
          
        </div>
      )}
    </section>
  );
}
