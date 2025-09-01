import React from "react";

function ProductCard({ image, title }) {
  return (
    <div className="w-full max-w-sm bg-white">
      {/* Product Image */}
      <div className="w-full">
        <img
          src={image}
          alt={title}
          className="w-full object-cover"
        />
      </div>

      {/* Product Title */}
      <div className="mt-2 text-center">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      </div>
    </div>
  );
}

export default ProductCard;
