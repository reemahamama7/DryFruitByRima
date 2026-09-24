import React from "react";

const ProductCard = ({ product }) => {
  // Add a safeguard to ensure product data is available
  if (!product) {
    return null; // or you can return a placeholder card if no product is passed
  }

  return (
    <div className="group relative border p-4 rounded-md shadow-lg hover:shadow-xl transition duration-300">
      {/* Product Image */}
      <div className="relative w-full h-48">
        <img
          src={product.image || "/default-image.jpg"} // fallback to a default image if product.image is undefined
          alt={product.name}
          className="w-full h-full object-cover rounded-md"
        />

        {/* Add to Cart Button (Centered with a light background) */}
        <button className="absolute inset-0 bg-white bg-opacity-75 text-[#805e36] text-lg font-semibold flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">Add to Cart</button>
      </div>

      {/* Product Info */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.description}</p>
        <p className="mt-2 text-xl font-semibold text-[#805e36]">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
