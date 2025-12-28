import React from "react";
import ResumeButton from "@/components/ResumeButton";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-10 px-6">
      <div className="flex flex-col max-w-2xl text-center">
        <h4 className="text-medium font-regular">
          Jr. UI Developer & Designer
        </h4>

        <p className="mt-8 text-medium font-light leading-relaxed">
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
