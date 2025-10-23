import { TrendingUp, Zap, Star } from "lucide-react";

// Feature Card Component
function FeatureCard({ icon, title, desc, color }) {
  return (
    <div className="mt-12 bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div
        className={`bg-gradient-to-br ${color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-4 transform rotate-3 hover:rotate-6 transition-transform`}
      >
        {icon}
      </div>
      <h3 className="font-bold text-xl text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

// Features Section
export default function Features() {
  const features = [
    { icon: <TrendingUp className="w-8 h-8" />, title: "Best Prices", desc: "Unbeatable deals daily", color: "from-blue-500 to-cyan-500" },
    { icon: <Zap className="w-8 h-8" />, title: "Fast Delivery", desc: "Get it in 30 minutes", color: "from-purple-500 to-pink-500" },
    { icon: <Star className="w-8 h-8" />, title: "Top Quality", desc: "Premium products", color: "from-orange-500 to-red-500" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {features.map((feature, idx) => (
        <FeatureCard
          key={idx}
          icon={feature.icon}
          title={feature.title}
          desc={feature.desc}
          color={feature.color}
        />
      ))}
    </div>
  );
}
