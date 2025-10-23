import Slider from "react-slick";
import ProductCard from "./ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductShowcase({ products }) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      className="relative py-20 px-6 sm:px-10 lg:px-16 overflow-hidden"
      style={{
        backgroundImage: "url('/assets/e.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay สีพื้นหลัง */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h4 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-md">
          🛍️ Browse Our Products
        </h4>
        <p className="mt-3 text-lg sm:text-xl font-semibold text-white/90">
          We now have{" "}
          <span className="text-green-400 font-bold">{products.length}</span>{" "}
          products available!
        </p>

        {/* Slider สำหรับ Desktop/Tablet */}
        <div className="mt-12 hidden sm:block">
          <Slider {...sliderSettings}>
            {products.map((item) => (
              <div key={item.id} className="px-3">
                <ProductCard
                  image={item.thumbnail}
                  name={item.title}
                  price={item.price}
                  category={item.category}
                  rating={item.rating}
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Grid สำหรับมือถือ */}
        <div className="mt-12 sm:hidden grid grid-cols-1 gap-4">
          {products.slice(0.4).map((item) => (
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
      </div>

      {/* เอฟเฟกต์แสง */}
      <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full blur-3xl animate-pulse bg-pink-300/30"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl animate-pulse bg-yellow-200/20"></div>
    </section>
  );
}
