import React from "react";
import background1 from "../assets/background1.jpg";
import background2 from "../assets/background2.jpg";

const FrontPage = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <img
        src={background1}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      />
      <img
        src={background2}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover md:hidden"
      />
    </div>
  );
};

export default FrontPage;
