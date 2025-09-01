import React from "react";
import ProductCard from '../components/ProductCard'
import FilterInput from "../components/FilterInput";

const CategoryProducts = () => {
  // Example products data (replace with API or props)
  const products = [
    { id: 1, name: "Kurthi 1", price: "₹799" },
    { id: 2, name: "Kurthi 2", price: "₹899" },
    { id: 3, name: "Kurthi 3", price: "₹999" },
    { id: 4, name: "Kurthi 4", price: "₹699" },
    { id: 5, name: "Kurthi 5", price: "₹1099" },
    { id: 6, name: "Kurthi 6", price: "₹1199" },
  ];
  const  productFilters = [
    { id: 1, name: "Kurthi 1"},
    { id: 2, name: "Kurthi 2" },
    { id: 3, name: "Kurthi 3" },
    { id: 4, name: "Kurthi 3" }
  ];

  return (
    <>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
        
         {productFilters.map((productFilters) => (
          <FilterInput key={productFilters.id}  />
        ))}

        </div>
    
        <div className="grid grid-cols-1 mobile-lg:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
   </>
   
  );
};

export default CategoryProducts;
