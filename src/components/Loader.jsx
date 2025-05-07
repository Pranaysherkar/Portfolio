import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loader = () => {
  const [count, setCount] = useState(0); // Initialize state for the counter

  useEffect(() => {
    // Set up interval to increment count from 0 to 100
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 100) {
          clearInterval(interval); // Stop when the count reaches 100
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 100); // Adjust the speed of the animation

    return () => clearInterval(interval); // Clean up the interval when the component unmounts
  }, []);

  return (
    <div className="h-screen w-screen bg-black flex flex-col justify-center items-center gap-8">
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-purple-900 via-black to-blue-900 opacity-40 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      {/* Custom Loading Text */}
      <div className="text-[7vw] font-bold italic leading-24 tracking-tight flex flex-col items-start gap-10 text-white z-20 ">
        <h1>
          <span className="inline-block w-1/4 pl-5 h-auto text-[3.5vw] font-light tracking-wide">
            100-{count}
          </span>{" "}
          Your <br />
          Web Experiences is
          <br /> loading right{" "}
          <motion.span
            className="inline-block text-transparent"
            style={{
              WebkitTextStroke: "2px #fff", // Blue stroke      
            }}
            animate={{
              opacity: [1, 0.5, 1], // Blinking effect
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            Now
          </motion.span>
        </h1>
        <span
          style={{ width: `${count}%`, transition: "width 0.1s ease-out" }}
          className={`inline-block h-1 bg-white z-20`}
        ></span>
      </div>
    </div>
  );
};

export default Loader;
