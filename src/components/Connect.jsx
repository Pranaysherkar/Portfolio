import React from "react";
import ResumeButton from "../templates/ResumeButton";
import Footer from "../templates/Footer";

const Connect = () => {
  return (
    <div className="min-h-screen flex flex-col items-center gap-10 mt-14 ">
      <h1 className="text-center mt-20 text-3xl leading-10 tracking-widest">
        FROM CONCEPT TO{" "}
        <span className="font-bold text-purple-500">CREATION</span> <br /> LET's
        MAKE IT <span className="font-bold text-purple-500">HAPPEN! </span>
      </h1>

      <ResumeButton name={"Let's connect"} link={"https://www.linkedin.com/in/pranay-sherkar-6a0975234/"} />

      <h3 className="text-lg tracking-wider text-white">
        I'm available for full-time roles & freelance projects.
      </h3>

      <p className="w-1/3 text-center text-md tracking-wider text-white">
        Have a project in mind? <br />{" "}
        <span className="shine inline-block text-violet-500 font-bold tracking-wider text-xl">
          pranaysherkar19@gmail.com
        </span>
      </p>

      <Footer />
    </div>
  );
};

export default Connect;
