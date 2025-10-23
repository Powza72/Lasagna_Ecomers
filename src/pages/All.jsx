import { useEffect, useState } from "react"; 
import ProductCard from "../components/ProductCard.jsx";
import ProductShowcase from "../components/ProductShowcase";

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
      .then((data) => setProducts(data.products)) // ✅ ต้องใช้ .products
      .catch(() => setError("เกิดข้อผิดพลาดในการโหลดข้อมูล กรุณาลองใหม่อีกครั้ง"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="p-4">
        <div className="animate-pulse bg-gray-200 h-72 w-full mb-4 rounded"></div>
        <div className="animate-pulse bg-gray-200 h-6 w-3/4 mb-2 rounded"></div>
        <div className="animate-pulse bg-gray-200 h-6 w-1/2 rounded"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <p className="text-red-500 font-semibold mb-3">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          ลองใหม่
        </button>
      </div>
    );
  }

  const product = products;

  return (
  <div className="mt-24 text-center my-10">
  <div className="min-h-screen bg-white">
      <ProductShowcase products={products} />
  </div>
  <div className="mt-12 max-w-6xl mx-auto px-4 py-8">
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {product.length > 0 ? (
        product.map((item) => (
          <ProductCard
            des = {item.description}
            key={item.id}
            image={item.thumbnail}
            name={item.title}   
            price={item.price}
            category={item.category}
            rate={item.rating}
          />
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">
          ไม่มีสินค้าประเภทนี้ในขณะนี้
        </p>
      )}
    </div>
  </div>
  </div>
);
}