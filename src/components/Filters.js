import React, { useState } from "react";

const Filters = ({ products, setFilteredProducts }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("");

  const handleFilter = () => {
    const filtered = products.filter((product) => {
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      const matchesPrice = selectedPrice === "low" ? product.price < 50 : selectedPrice === "medium" ? product.price >= 50 && product.price <= 200 : selectedPrice === "high" ? product.price > 200 : true;

      return matchesCategory && matchesPrice;
    });

    setFilteredProducts(filtered);
  };

  const categories = ["nuts", "spices", "almonds", "fruits"];
  const priceRanges = [
    { label: "Below $50", value: "low" },
    { label: "$50 - $200", value: "medium" },
    { label: "Above $200", value: "high" },
  ];

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>

      {/* Category Selection */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Category</h4>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button key={category} onClick={() => setSelectedCategory(category.toLowerCase())} className={`px-4 py-2 rounded-lg border transition ${selectedCategory === category.toLowerCase() ? "bg-[#805e36] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Selection */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Price Range</h4>
        <div className="flex flex-wrap gap-2">
          {priceRanges.map((range) => (
            <button key={range.value} onClick={() => setSelectedPrice(range.value)} className={`px-4 py-2 rounded-lg border transition ${selectedPrice === range.value ? "bg-[#805e36] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Apply Button */}
      <button onClick={handleFilter} className="w-full bg-[#805e36] text-white py-2 rounded-lg hover:bg-[#6b4f2e] transition">
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
