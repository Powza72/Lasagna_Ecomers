import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";


export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-gray-500">
        กำลังโหลดข้อมูลสินค้า...
      </div>
    );

  if (!product)
    return (
      <div className="flex flex-col justify-center items-center h-screen text-red-500">
        ไม่พบข้อมูลสินค้า
        <Link to="/products" className="mt-4 text-blue-500 underline">
          กลับไปหน้ารวมสินค้า
        </Link>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto p-6 mt-20">
      {/* ปุ่มกลับ */}
      <Link
        to="/products"
        className="inline-block mb-6 text-red-500 hover:text-red-700 transition"
      >
        ← กลับไปหน้ารวมสินค้า
      </Link>

      <div className="flex flex-col md:flex-row gap-10 bg-white shadow-lg rounded-2xl p-6">
        {/* รูปสินค้า */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full max-w-sm rounded-xl object-contain"
          />
        </div>

        {/* รายละเอียดสินค้า */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {product.description}
          </p>

          <div className="flex items-center justify-between mb-6">
            <span className="text-2xl font-bold text-red-600">
              {product.price} ฿
            </span>
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
              {product.category}
            </span>
          </div>

          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl w-full transition-all">
            🛒 เพิ่มลงตะกร้า
          </button>

          <h2 className="text-2xl font-bold mb-6 border-b pb-2">
            COMMENTS
          </h2>

          {product.reviews && product.reviews.length > 0 ? (
            <div className="space-y-4">
              {product.reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-xl p-4 flex flex-col md:flex-row md:justify-between items-start md:items-center transition hover:shadow-xl"
                >
                  {/* ชื่อผู้รีวิวและวันที่ */}
                  <div className="mb-2 md:mb-0">
                    <p className="font-semibold text-gray-800">
                      {review.reviewerName}
                    </p>
                    <p className="text-sm text-gray-400">
                      {new Date(review.date).toLocaleDateString()}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="ml-6 flex items-center gap-2 mb-2 md:mb-0">
                    <span className="text-yellow-500 font-bold">
                      ⭐ {review.rating}
                    </span>
                  </div>

                  {/* คอมเมนต์ */}
                  <p className="text-gray-700 italic mt-2 md:mt-0 md:ml-4 flex-1">
                    "{review.comment}"
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic">ยังไม่มีรีวิวสำหรับสินค้านี้</p>
          )}
        </div>
      </div>
    </div>
  );
}
