import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const ResumeButton = ({ name,link }) => {
  const btnRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    const bg = bgRef.current;

    const handleEnter = () => {
      gsap.to(bg, {
        width: "100%",
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleLeave = () => {
      gsap.to(bg, {
        width: "0%",
        duration: 0.4,
        ease: "power2.out",
      });
    };

    btn.addEventListener("mouseenter", handleEnter);
    btn.addEventListener("mouseleave", handleLeave);

    return () => {
      btn.removeEventListener("mouseenter", handleEnter);
      btn.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <motion.button
      ref={btnRef}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden px-6 py-2 text-lg font-semibold text-violet-200 border border-violet-500 bg-black rounded-2xl cursor-pointer"
    >
      <span
        ref={bgRef}
        className="absolute right-0 top-0 h-full w-0 bg-violet-800 z-0"
      />
      <span className="relative z-10">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
        >
          {name} ↗
        </a>
      </span>
    </motion.button>
  );
};

export default ResumeButton;
