// /templates/ScrollImageReveal.jsx
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const ScrollImageReveal = () => {
  const initialImages = [
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "70%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "80%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "90%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "100%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "110%",
      left: "50%",
      isActive: false,
    },
  ];

  const [images, setImages] = useState(initialImages);
  const [hasScrolled, setHasScrolled] = useState(false);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.1 && !hasScrolled) {
      setHasScrolled(true);
    }
    showImages(Math.floor(latest * 10));
  });

  const showImages = (key) => {
    const img = (arr) => {
      setImages((prev) =>
        prev.map((item, i) =>
          arr.includes(i) ? { ...item, isActive: true } : { ...item, isActive: false }
        )
      );
    };

    switch (key) {
      case 0: img([0]); break;
      case 1: img([0, 1]); break;
      case 2: img([0, 1, 2]); break;
      case 3: img([0, 1, 2, 3]); break;
      case 4: img([0, 1, 2, 3, 4]); break;
      case 5: img([0, 1, 2, 3, 4, 5]); break;
      case 6: img([0, 1, 2, 3, 4, 5, 6]); break;
      default: img([]); break;
    }
  };

  return (
    <div className="imgContainer absolute h-1/3 w-1/6 translate-x-11/12 -translate-y-1/3 top-1/2 right-1/5 rounded-lg z-10">
      {!hasScrolled && (
        <img
          className="w-full h-full absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl"
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png"
          style={{ top: "50%", left: "50%" }}
          alt="Default"
        />
      )}
     {images.map(
  (item, i) =>
    item.isActive && (
      <motion.img
        key={i}
        className="w-full h-full absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl"
        style={{ top: item.top, left: item.left }}
        src={item.url}
        alt=""
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    )
)}    </div>
  );
};

export default ScrollImageReveal;
//