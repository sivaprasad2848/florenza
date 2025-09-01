import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const slides = [
    {
      title: "NEW ARRIVALS",
      heading: "Stylish kurthis",
      link: "https://www.floranzafashion.com/product-catogery/kurtis",
      img: "https://cdn.floranzafashion.com/uploads/large_1837370657933700_1752253206.webp",
    },
    {
      title: "NEW SEASON",
      heading: "Kids Collection",
      link: "https://www.floranzafashion.com/product-catogery/kids",
      img: "https://cdn.floranzafashion.com/uploads/large_1837370744434158_1752253288.webp",
    },
    {
      title: "LATEST TRENDS",
      heading: "Women Fashion",
      link: "https://www.floranzafashion.com/product-catogery/women",
      img: "https://cdn.floranzafashion.com/uploads/large_1837370816902256_1752253361.webp",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 1000); // 1 sec change
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative aspect-[3/2] md:aspect-[8/3] mb-12 overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.img}
            alt={slide.heading}
            className="w-full h-full object-cover absolute inset-0"
          />

          {/* Overlay */}
          <div className="absolute w-full h-full bg-gradient-to-r from-black/70 to-transparent"></div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-start px-6 md:px-16">
            <div className="text-white max-w-xl">
              <h2 className="text-xl md:text-2xl font-medium mb-2">
                {slide.title}
              </h2>
              <h1 className="text-3xl md:text-6xl font-bold mb-4">
                {slide.heading}
              </h1>
              <a href={slide.link} target="_blank" rel="noopener noreferrer">
                <button className="bg-pink-600 hover:bg-pink-700 transition text-white font-medium px-5 py-2 rounded-md shadow">
                  Explore Now
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroSection;
