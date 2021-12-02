import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Carts";
import ProductDetail from "./pages/productDetail";
import Navbar from "./components/navbar";
import ProductModal from "./modals/product_modal";
import NotFoundPage from "./pages/404";
import Home from "./pages/home";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate replace to="products" />} />
          <Route path="products" element={<Home />}>
            <Route path="/products" element={<ProductList />} />
            <Route path=":slug" element={<ProductDetail />} />
          </Route>
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <ProductModal />
      </Router>
    </div>
  );
}

export default App;
