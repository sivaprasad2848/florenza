import React from "react";
import { FaRegHeart } from "react-icons/fa";

function MostSellingProducts({ image, title, price, sizes}) {
  return (
    <div className="relative group rounded-lg shadow-sm p-2 flex flex-col items-center bg-white transition hover:shadow-md">
      {/* Image + Badge */}
      <div className="relative w-full overflow-hidden rounded-md">
        <img
          src={image}
          alt={title}
          className="w-full h-[400px] object-cover rounded-md"
        />

        {/* Top-left badge */}
     

        {/* ❤️ Heart icon (only on hover) */}
        <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow opacity-0 group-hover:opacity-100 transition">
          <FaRegHeart size={16} />
        </button>

        {/* 🎀 Hover Button: full-width pink at bottom */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full bg-pink-800 text-white py-2 text-sm font-medium">
            Select Option
          </button>
        </div>
      </div>

      {/* Sizes */}
      <div className="flex flex-wrap justify-center gap-1 mt-2">
        {sizes?.map((size) => (
          <span
            key={size}
            className="border rounded-full px-2 py-0.5 text-xs text-gray-700 hover:bg-black hover:text-white transition"
          >
            {size}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="text-center text-xs font-medium mt-2 text-gray-800 leading-snug line-clamp-2">
        {title}
      </h3>

      {/* Price */}
      <p className="text-red-500 font-semibold mt-1 text-sm">₹{price}</p>
    </div>
  );
}

export default MostSellingProducts;
