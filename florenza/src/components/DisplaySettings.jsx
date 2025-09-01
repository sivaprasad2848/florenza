import { useState } from 'react';

export default function DisplaySettings() {
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [gridSize, setGridSize] = useState('2x2');
  const itemOptions = [12, 16, 20, 24];
  const gridOptions = ['2x2', '3x3', '4x4'];

  return (
    <div className="flex items-center justify-between p-4 bg-white">
      {/* Left Side: Image */}
      <img
        src="/your-image.jpg"
        alt="Preview"
        className="w-16 h-16 object-cover rounded-md"
      />

      {/* Right Side: Selector + Grid Toggle */}
      <div className="flex items-center gap-6 text-sm text-gray-600">
        {/* Item Count Selector */}
        <div>
          <span className="mr-2">Show:</span>
          {itemOptions.map((num, index) => (
            <span key={num} className="inline-block">
              <button
                onClick={() => setItemsPerPage(num)}
                className={`px-1 ${
                  itemsPerPage === num ? 'font-bold text-black' : 'text-gray-500'
                }`}
              >
                {num}
              </button>
              {index < itemOptions.length - 1 && <span className="mx-1">/</span>}
            </span>
          ))}
        </div>

        {/* Grid Size Toggle */}
        <div className="flex gap-2">
          {gridOptions.map((size) => (
            <button
              key={size}
              onClick={() => setGridSize(size)}
              className={`px-2 py-1 ${
                gridSize === size ? 'font-bold text-black' : 'text-gray-500'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
