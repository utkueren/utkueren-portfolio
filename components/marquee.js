import React from "react";

const Marquee = () => {
  const mail = "UTKUERENBULUT0@GMAIL.COM";

  return (
    <div className="overflow-hidden whitespace-nowrap bg-gray-100 py-4">
      <div className="flex animate-marquee">
        <span className="mx-8 text-xl font-bold text-gray-800">{mail}</span>
        <span className="mx-8 text-xl font-bold text-gray-800">{mail}</span>
      </div>
    </div>
  );
};

export default Marquee;
