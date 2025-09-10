import React from "react";
import ResumeButton from "@/components/ResumeButton";

const About = () => {
  return (
    <section className="flex font-josefin font-xslim flex-col items-center gap-6 text-white">
      <div className="w-px h-40 bg-white/70"></div>

      <div className="relative h-16 w-10 rounded-full border-2 border-white/80">
        <span className="absolute left-1/2 top-3 h-2.5 w-2.5 rounded-full bg-white/90 animate-mousedot"></span>
      </div>
      <div className="flex flex-col max-w-2xl text-center mx-auto">
        <h4 className="text-white text-large flex justify-center pb-6 font-medium">
          Jr. UI Developer & Designer
        </h4>
        <p className="text-white text-medium text-center flex justify-center mx-auto font-slim">
          Junior software engineer with UI project experience, problem solving
          skills, and a proven track record of meaningful contributions. Mostly
          focused on testing, bugs, vulnerabilities, and updates.
        </p>
      </div>
      <ResumeButton />
    </section>
  );
};

export default About;
