import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-row align-middle justify-center">
      <div className="text-hero-xl flex flex-row leading-heroLine">
        <h1 className="leading-heroLineUI">UI</h1>
        <h1 className="leading-heroLineAlt">/</h1>
      </div>
      <div className="flex flex-col justify-center">
        <div className="text-hero-md leading-heroLine">
          <h1>DESIGNER</h1>
        </div>
        <div className="text-hero-sm leading-heroLine">
          <h1>DEVELOPER</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
