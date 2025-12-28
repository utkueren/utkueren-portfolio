import React from "react";

const Marquee = () => {
  const mail = "UTKUERENBULUT0@GMAIL.COM";

  return (
    <div className="overflow-hidden bg-gray-100 py-4">
      {/* Menü padding'i ile aynı */}
      <div className="px-86">
        <div className="flex whitespace-nowrap animate-marquee gap-10">
          {[...Array(12)].map((_, index) => (
            <span
              key={index}
              className="text-small tracking-10p font-light text-black"
            >
              {mail}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
