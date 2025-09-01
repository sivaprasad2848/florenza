import React from "react";

const CartSidebar = ({ isOpen, onClose, items = [] }) => {
  const subtotal = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={onClose}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Shopping cart</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-col h-full">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center flex-grow text-center p-6">
              <div className="text-6xl mb-4">👜</div>
              <h3 className="text-lg font-semibold">Your cart is empty</h3>
              <p className="text-gray-500 text-sm mt-2">
                Add some products to your cart to see them here.
              </p>
            </div>
          ) : (
            <div className="flex-grow overflow-y-auto p-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between mb-3 border-b pb-2"
                >
                  <span>{item.name}</span>
                  <span className="font-semibold">₹{item.price}</span>
                </div>
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="p-4 border-t">
            <div className="flex justify-between mb-3">
              <span>Subtotal:</span>
              <span className="font-semibold text-pink-600">₹{subtotal}</span>
            </div>
            <button className="w-full bg-pink-500 text-white py-2 rounded mb-2">
              Go to cart
            </button>
            <button className="w-full bg-pink-600 text-white py-2 rounded">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
