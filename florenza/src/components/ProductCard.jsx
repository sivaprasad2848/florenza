import React from "react";

const ProductCard = () => {
  return (
    <div className="h-full group flex flex-col">
      {/* Product Image */}
      <a
        href="#"
        className="w-full aspect-[3/4] relative overflow-hidden bg-gray-100 rounded-md"
      >
        {/* Wishlist Icon (Desktop - Hover) */}
        <div className="absolute right-2 top-2 hidden md:flex items-center justify-center bg-white rounded-full h-10 w-10 opacity-0 group-hover:opacity-100 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </div>

        {/* Wishlist Icon (Mobile) */}
        <div className="absolute top-3 right-3 flex md:hidden items-center justify-center rounded-full bg-white h-7 w-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </div>

        {/* Product Image */}
        <img
          src="https://cdn.floranzafashion.com/uploads/large_1841504114811641_1756195177.webp"
          alt="Premium Bottom - Olive Green"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Labels */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <span className="bg-green-500/90 text-white text-[10px] font-semibold px-2 py-1 rounded-sm">
            New
          </span>
          <span className="bg-blue-500/90 text-white text-[10px] font-semibold px-2 py-1 rounded-sm">
            Pre-Order
          </span>
        </div>
      </a>

      {/* Product Details */}
      <div className="mt-3 flex flex-col flex-grow">
        {/* Sizes */}
        <div className="flex justify-center flex-wrap gap-1 mb-2">
          {["S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"].map((size) => (
            <span
              key={size}
              className="text-xs px-2 py-0.5 border rounded-sm cursor-pointer transition hover:bg-gray-200"
            >
              {size}
            </span>
          ))}
        </div>

        {/* Title & Price */}
        <div className="text-center">
          <h3 className="text-xs md:text-sm whitespace-pre-wrap mb-2">
            Pre-Book - Our Own Brand Premium Bottom in Thar Laffer Cotton -
            Olive plus Parrot Green
          </h3>
          <p className="text-pink-600 text-xs md:text-sm font-semibold">₹399</p>
        </div>

        {/* Spacer */}
        <div className="flex-grow min-h-2"></div>

        {/* Select Option Button */}
        <div className="mt-2 flex justify-center">
          <button className="bg-pink-600 hover:bg-pink-700 text-white text-xs font-medium px-4 py-2 rounded-full transition">
            SELECT OPTION
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
