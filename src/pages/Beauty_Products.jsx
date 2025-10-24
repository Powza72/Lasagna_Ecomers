// src/components/Beauty.jsx
import { useEffect, useState } from "react"; 
import ProductCard from "../components/ProductCard.jsx";
import { Link } from "react-router-dom";

export default function Beauty() {
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
      .catch(() => setError("เกิดข้อผิดพลาดในการโหลดข้อมูล กรุณาลองใหม่อีกครั้ง"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="p-4 text-center">กำลังโหลดข้อมูล...</div>
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

  const beautyProducts = products.filter(
    (item) => item.category === "beauty"
  );

  return (
    <div className="mt-12 max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {beautyProducts.length > 0 ? (
          beautyProducts.map((item) => (
            <Link key={item.id} to={`/products/${item.id}`}>
            <ProductCard
              des={item.description}
              key={item.id}
              image={item.thumbnail}
              name={item.title}
              price={item.price}
              category={item.category}
              rate={item.rating}
            />
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            ไม่มีสินค้าประเภทนี้ในขณะนี้
          </p>
        )}
      </div>
    </div>
  );
}
