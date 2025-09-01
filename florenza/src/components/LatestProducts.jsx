import React from "react";
import { FaRegHeart } from "react-icons/fa";

function LatestProducts({ image, title, price, sizes, isNew, isPreOrder }) {
  return (
    <div className="relative group rounded-xl shadow-sm p-4 flex flex-col items-center bg-white transition hover:shadow-lg">
      {/* Image + Badges */}
      <div className="relative w-full overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-[400px] object-cover rounded-lg"
        />

        {/* Top-left badges */}
        <div className="absolute top-2 left-2 flex gap-2">
          {isNew && (
            <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
              New
            </span>
          )}
          {isPreOrder && (
            <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
              Pre-Order
            </span>
          )}
        </div>

        {/* ❤️ Heart icon (only on hover) */}
        <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow opacity-0 group-hover:opacity-100 transition">
          <FaRegHeart size={18} />
        </button>

        {/* 🎀 Hover Button: full-width pink at bottom */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full bg-pink-600 text-white py-2 text-sm font-medium">
            Select Option
          </button>
        </div>
      </div>

      {/* Sizes */}
      <div className="flex flex-wrap justify-center gap-2 mt-3">
        {sizes?.map((size) => (
          <span
            key={size}
            className="border rounded-full px-3 py-1 text-sm text-gray-700 hover:bg-black hover:text-white transition"
          >
            {size}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="text-center text-sm font-medium mt-3 text-gray-800 leading-snug line-clamp-2">
        {title}
      </h3>

      {/* Price */}
      <p className="text-red-500 font-bold mt-2">₹{price}</p>
    </div>
  );
}

export default LatestProducts;
