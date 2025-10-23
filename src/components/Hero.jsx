import { Zap, ShoppingBag, TrendingUp, Package, Star, ArrowRight, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  // Floating Stats Component
  const FloatingStat = ({ icon: Icon, value, label, delay }) => (
    <div 
      className=" bg-white backdrop-blur-sm rounded-2xl p-4 shadow-xl flex items-center gap-3 animate-float"
      style={{ animationDelay: delay }}
    >
      <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
        <p className="text-xs text-gray-600">{label}</p>
      </div>
    </div>
  );

  // Trust Badges
  const TrustBadge = ({ icon: Icon, text }) => (
    <div className="flex items-center gap-2 text-white/90">
      <Icon className="w-5 h-5" />
      <span className="text-sm font-medium">{text}</span>
    </div>
  );

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
      `}</style>

      <div className="mt-12 relative bg-gradient-to-br from-red-600 via-red-600 to-pink-500 text-white rounded-3xl overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMSAxLjc5IDQgNCA0czQtMS43OSA0LTQtMS43OS00LTQtNC00IDEuNzktNCA0em0wIDI0YzAgMi4yMSAxLjc5IDQgNCA0czQtMS43OSA0LTQtMS43OS00LTQtNC00IDEuNzktNCA0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 p-6 sm:p-8 lg:p-16">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-tight animate-slide-up" style={{animationDelay: '0.1s'}}>
              Fresh Groceries<br />
              <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
                Delivered Fast
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl mb-8 text-white/90 max-w-xl animate-slide-up" style={{animationDelay: '0.2s'}}>
              Premium quality products at unbeatable prices. Experience same-day delivery and exclusive deals for our members!
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 sm:gap-6 mb-8 animate-slide-up" style={{animationDelay: '0.3s'}}>
              <TrustBadge icon={Clock} text="30-Min Delivery" />
              <TrustBadge icon={Shield} text="100% Secure" />
              <TrustBadge icon={Package} text="Free Returns" />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
             <Link to = "ALl">
              <button className="group bg-white text-red-300 px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 group-hover:rotate-12 transition-transform hover:placeholder-shown:" />
                Start Shopping
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              </Link>
            </div>

            {/* Additional Info */}
            <div className="mt-8 flex items-center gap-2 text-sm text-white/80 animate-slide-up" style={{animationDelay: '0.5s'}}>
              <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              <span className="font-semibold">4.9/5</span>
              <span>from 12,000+ happy customers</span>
            </div>
          </div>

          {/* Right Content - Floating Stats & Image */}
          <div className="relative hidden lg:flex items-center justify-center">
            {/* Decorative Product Image Placeholder */}
            <div className="relative">
              <div className="w-80 h-80 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border-4 border-white/20">
                <div className="w-64 h-64 bg-gradient-to-br from-white/20 to-transparent rounded-full flex items-center justify-center">
                  <ShoppingBag className="w-32 h-32 text-white/40" />
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -left-4">
                <FloatingStat 
                  icon={TrendingUp} 
                  value="50%" 
                  label="Discount" 
                  delay="0s"
                />
              </div>
              
              <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
                <FloatingStat 
                  icon={Package} 
                  value="1000+" 
                  label="Products" 
                  delay="0.5s"
                />
              </div>
              
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <FloatingStat 
                  icon={Star} 
                  value="4.9★" 
                  label="Rating" 
                  delay="1s"
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-300/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-pink-300/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>

        {/* Bottom Wave Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
    </>
  );
}