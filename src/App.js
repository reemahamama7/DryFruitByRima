import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import ProductsPage from "./components/ProductsPage";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <Routes>
      {/* Wrap all pages with the Layout component */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
};

export default App;
