import React, { useEffect, useState } from "react";
import ProductCard from "../components/Productcard";
import dupatta from "../assets/dupatta.webp"
import jewllery from "../assets/jewllery.webp"
import churidar from "../assets/churidarMaterial.webp"
import HomeWear from "../assets/homewear.webp"
import LatestProducts from "../components/LatestProducts";
import MostSellingProducts from "../components/MostSellingProducts";

function Shop() {
     const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Simulating API call (replace with fetch if real API)
    const apiData = [
      {"category_id":"20","name":"Fashion","image":"https://plusgulf.com/fashionexperia/image/cache/catalog/category-banner-200x200.jpg"},
      {"category_id":"60","name":"Kids","image":null},
      {"category_id":"59","name":"Bags & Footwear","image":null},
      {"category_id":"58","name":"Dresses ","image":null},
      {"category_id":"25","name":"Jewels","image":"https://plusgulf.com/fashionexperia/image/cache/catalog/category-banner-200x200.jpg"},
      {"category_id":"17","name":"Duffel Coat","image":"https://plusgulf.com/fashionexperia/image/cache/catalog/category-banner-200x200.jpg"},
      {"category_id":"24","name":"Body Warmer","image":"https://plusgulf.com/fashionexperia/image/cache/catalog/category-banner-200x200.jpg"},
      {"category_id":"33","name":"Denim Jacket","image":"https://plusgulf.com/fashionexperia/image/cache/catalog/category-banner-200x200.jpg"}
    ];

    setCategories(apiData);
  }, []);


    return (

        <>
            <h3 className="text-center text-4xl font-semibold mt-4 mb-8">Shop By Category</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">

                 {categories.map((cat) => (
        <ProductCard key={cat.category_id} image={cat.image} title={cat.name} />
      ))}
            </div>

            <h3 className="text-center text-4xl font-semibold mt-4 mb-8">Latest Products</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6" >
                <LatestProducts
                    image={churidar}
                    title="Pre-Book - Our Own Brand Premium Bottom in Thar Laffer Cotton - Brick plus Rust"
                    price={399}
                    sizes={["S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"]}
                    isNew={true}
                    isPreOrder={true}
                />
                <LatestProducts
                    image={churidar}
                    title="Pre-Book - Our Own Brand Premium Bottom in Thar Laffer Cotton - Brick plus Rust"
                    price={399}
                    sizes={["S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"]}
                    isNew={true}
                    isPreOrder={true}
                />
                <LatestProducts
                    image={churidar}
                    title="Pre-Book - Our Own Brand Premium Bottom in Thar Laffer Cotton - Brick plus Rust"
                    price={399}
                    sizes={["S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"]}
                    isNew={true}
                    isPreOrder={true}
                />
                <LatestProducts
                    image={churidar}
                    title="Pre-Book - Our Own Brand Premium Bottom in Thar Laffer Cotton - Brick plus Rust"
                    price={399}
                    sizes={["S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"]}
                    isNew={true}
                    isPreOrder={true}
                />
            </div>

            <h3 className="text-center text-4xl font-semibold mt-4 mb-8">most selling products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <MostSellingProducts
                    image={dupatta} title="Onam Special Kurti - White"
                    price={849}
                    sizes={["M", "L", "XL", "XXL", "3XL"]}
                    isMostSelling={true}
                />
                <MostSellingProducts
                    image={HomeWear} title="Onam Special Kurti - White"
                    price={849}
                    sizes={["M", "L", "XL", "XXL", "3XL"]}
                    isMostSelling={true}
                />
                  <MostSellingProducts
                    image={churidar} title="Onam Special Kurti - White"
                    price={849}
                    sizes={["M", "L", "XL", "XXL", "3XL"]}
                    isMostSelling={true}
                />
                  <MostSellingProducts
                    image={jewllery} title="Onam Special Kurti - White"
                    price={849}
                    sizes={["M", "L", "XL", "XXL", "3XL"]}
                    isMostSelling={true}
                />
            </div>



        </>
    );
}

export default Shop;
// 