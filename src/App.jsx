// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import ProductsList from "./pages/ProductList.jsx";
import All from "./pages/All.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Beauty from "./pages/Beauty_Products.jsx";
import Fragrances from "./pages/Fragrances_Products.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";

function App() {
  return (
    <Router>
      <Navbar />

      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/all" element={<All />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/fragrances" element={<Fragrances />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
