import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollImageReveal from "../templates/ScrollImageReveal";
import ResumeButton from "../templates/ResumeButton";

const Home = ({ loading }) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollDown = () => {
    const start = window.scrollY;
    const end = window.innerHeight;
    const duration = 1800;

    let startTime = null;

    const animateScroll = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const easeInOutQuad =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;

      window.scrollTo(0, start + (end - start) * easeInOutQuad);

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <div className="relative flex flex-col items-start justify-center h-screen w-full overflow-hidden px-4 sm:px-6 md:px-8 text-white">
      {/* Background Glow */}
      <motion.div
        className="absolute"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      {/* Neon Glow Circle */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full bg-purple-900/50 opacity-30 filter blur-3xl animate-pulse" />

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
        className="relative mt-10 text-[10vw] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide uppercase drop-shadow-lg z-20 mix-blend-difference 
        ml-2 sm:ml-10 md:ml-20 mr-2 sm:mr-10 md:mr-32"
      >
        Crafting <br /> Futuristic <br /> Web Experiences
      </motion.h1>
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 2, ease: "easeOut" }}
        >
          <ScrollImageReveal />
        </motion.div>
      )}

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="relative mt-6 text-sm sm:text-base md:text-lg max-w-[95%] sm:max-w-xl text-left tracking-wide z-10 mix-blend-difference 
        ml-2 sm:ml-10 md:ml-20 mr-2 sm:mr-10 md:mr-48"
      >
        Namaste, I'm{" "}
        <span className="relative inline-block font-extrabold text-purple-400 shine">
          Pranay Sherkar
        </span>{" "}
        — Web developer crafting sleek animations and seamless backend
        experiences.
      </motion.p>

      <div className="ml-2 sm:ml-10 md:ml-20 mt-5">
        <ResumeButton
          name={"Hire me"}
          link={"https://www.linkedin.com/in/pranaysherkar/"}
        />
      </div>

      {/* Scroll Down Animation */}
      {!hasScrolled && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2,
            duration: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute translate-x-1/2 bottom-10 right-1/2 flex flex-col items-center text-white z-20 cursor-pointer"
          onClick={handleScrollDown}
        >
          <p className="text-sm tracking-wide font-medium mb-1">Scroll Down</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5 animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      )}
    </div>
  );
};

export default Home;
