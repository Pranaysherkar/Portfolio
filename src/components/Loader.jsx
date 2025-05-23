import React from "react";
import { motion } from "framer-motion";

const Loader = ({ count }) => {
  return (
    <div className="h-screen w-screen bg-black flex flex-col justify-center items-center gap-8 relative px-4">
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-purple-900 via-black to-blue-900 opacity-40 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      <div className="text-[6vw] sm:text-[5vw] md:text-[4vw] lg:text-[3.5vw] font-bold italic leading-snug tracking-tight text-white z-20 w-full max-w-[90%]">
        <h1 className="flex flex-col">
          Your <br />
          Web Experiences is
          <div className="flex items-center justify-between w-full">
            <span className="flex items-center gap-1 md:gap-3">
              loading right{" "}
              <motion.span
                className="text-transparent"
                style={{ WebkitTextStroke: "2px #fff" }}
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
              >
                Now
              </motion.span>
            </span>

            <span className="text-xs sm:text-sm md:text-lg lg:text-xl font-light mt-3 tracking-wider md:ml-0 ml-2">
              100-<span className="inline-block w-10 text-center">{count}</span> %
            </span>
          </div>
        </h1>

        <span
          style={{ width: `${count}%`, transition: "width 0.3s ease-out" }}
          className="inline-block h-1 bg-white mt-4"
        ></span>
      </div>
    </div>
  );
};

export default Loader;
