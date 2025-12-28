import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-86">
      <div className="grid grid-cols-[auto_auto] grid-rows-2 items-center gap-x-10">
        {/* UI/ iki satır kaplar */}
        <div className="row-span-2 text-xxlarge leading-hero-ui flex items-center translate-y-hero-nudge">
          <span className="-ml-2 inline-block translate-y-slash-nudge">UI</span>
          <span className="-ml-2 inline-block translate-y-slash-nudge">/</span>
        </div>
        <h1 className="text-xlarge leading-hero-word tracking-7p">DESIGNER</h1>
        <h1 className="text-xlarge leading-hero-word">DEVELOPER</h1>
      </div>
    </section>
  );
};

export default Hero;
