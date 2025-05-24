// /templates/ScrollImageReveal.jsx
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const ScrollImageReveal = () => {
  const initialImages = [
    {
      url: "https://i.pinimg.com/736x/bb/cb/04/bbcb04c422df47f244e813cf3b6e1779.jpg",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/736x/dc/48/39/dc4839f576eeb8a2c1f73809d73c456b.jpg",
      top: "60%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/736x/77/a2/28/77a228533edc2e1e1f4ddca2bbfdc591.jpg",
      top: "70%",
      left: "60%",
      isActive: false,
    },
    {
      url: "https://i.pinimg.com/736x/82/89/93/8289935ee850fe84deb1baa365f60ef1.jpg",
      top: "90%",
      left: "40%",
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
    showImages(Math.floor(latest * 30));
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
      default: img([]); break;
    }
  };

  return (
    <div className="imgContainer absolute h-[40%] w-1/6 translate-x-11/12 translate-y-1/2 top-1/4 right-1/5 rounded-lg z-10">
      {!hasScrolled && (
        <img
          className="w-full h-full absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl"
          src="https://i.pinimg.com/736x/bb/cb/04/bbcb04c422df47f244e813cf3b6e1779.jpg"
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
        transition={{ duration: .2, ease: "easeOut" }}
      />
    )
)}    </div>
  );
};

export default ScrollImageReveal;
//