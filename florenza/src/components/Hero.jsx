import React from "react"; 
const Hero = () => {
  return (
    <section
      className="h-60 flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('https://www.transparenttextures.com/patterns/flowers.png')",
        backgroundColor: "#f9c2d0",
        backgroundRepeat: "repeat",
      }}
    >
      <h2 className="text-4xl font-bold">Home Wear</h2>
    </section>
  );
};

export default Hero;
