import React from "react";
import ResumeButton from "../templates/ResumeButton";
import Footer from "../templates/Footer";

const Connect = () => {
  return (
    <div className="min-h-screen flex flex-col items-center gap-10 mt-14 px-1 md:px-0">
      <h1 className="text-center mt-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug tracking-widest text-white">
        FROM CONCEPT TO{" "}
        <span className="font-bold text-purple-500">CREATION</span> <br />
        LET&apos;S MAKE IT{" "}
        <span className="font-bold text-purple-500">HAPPEN!</span>
      </h1>

      <ResumeButton
        name={"Let's connect"}
        link={"https://www.linkedin.com/in/pranay-sherkar-6a0975234/"}
      />

      <h3 className="text-center text-sm sm:text-base md:text-lg tracking-wider text-white">
        I'm available for full-time roles & freelance projects.
      </h3>

      <p className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2 text-center text-sm sm:text-base md:text-lg tracking-wider text-white">
        Have a project in mind? <br />
        <span className="shine inline-block text-violet-500 font-bold tracking-wider text-base sm:text-lg md:text-xl mt-2">
          pranaysherkar19@gmail.com
        </span>
      </p>

      <Footer />
    </div>
  );
};

export default Connect;
