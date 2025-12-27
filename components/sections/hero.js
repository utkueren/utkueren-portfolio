import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pb-[72px]">
      {/* pb: tape yüksekliği kadar boşluk (gerekirse 64/80 yap) */}
      <div className="flex flex-row items-center justify-center">
        <div className="text-xxlarge flex flex-row leading-heroLine">
          <h1 className="leading-heroLineUI">UI</h1>
          <h1 className="leading-heroLineAlt">/</h1>
        </div>

        <div className="flex flex-col justify-center">
          <div className="text-xlarge leading-heroLine">
            <h1>DESIGNER</h1>
          </div>
          <div className="text-xlarge leading-heroLine">
            <h1>DEVELOPER</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
