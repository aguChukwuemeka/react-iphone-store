import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Carts";
import ProductDetail from "./pages/productDetail";
import Navbar from "./components/navbar";
import ProductModal from "./modals/product_modal"
import NotFoundPage from "./pages/404";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductList/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/product-detail/:slug" element={<ProductDetail/>} />
          <Route element={<NotFoundPage/>} />
        </Routes>
        <ProductModal />
      </Router>
    </div>
  );
}

export default App;
