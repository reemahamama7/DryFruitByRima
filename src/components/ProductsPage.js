import React, { useState } from "react";
import Filters from "./Filters";
import ProductCard from "./ProductCard";
import products from "../data/products";

const ProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isFilterVisible, setFilterVisible] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Filters Section */}
      <div className={`${isFilterVisible ? "block" : "hidden"} lg:block lg:w-1/4 bg-white shadow-md p-4`}>
        <Filters products={products} setFilteredProducts={setFilteredProducts} />
      </div>

      {/* Products Section */}
      <div className="flex-1 p-6">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Products</h2>
          <button className="lg:hidden bg-[#805e36] text-white px-3 py-2 rounded" onClick={() => setFilterVisible(!isFilterVisible)}>
            {isFilterVisible ? "Close Filters" : "Open Filters"}
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3  gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
