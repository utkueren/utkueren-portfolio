import React from "react";
import Svg from "@/components/svg/heroIcon";

const Marquee = () => {
  const mail = "UTKUERENBULUT0@GMAIL.COM";

  return (
    <div className="relative overflow-hidden bg-gray-100 py-4">
      {/* İçeriği taşıyan ve kayan yapı */}
      <div className="flex flex-row animate-marquee">
        {/* Yeterli sayıda kopya oluştur */}
        {[...Array(8)].map((_, index) => (
          <span key={index} className="flex items-center">
            <span className="text-large font-light text-black whitespace-nowrap">
              {mail}
            </span>
            <Svg />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
