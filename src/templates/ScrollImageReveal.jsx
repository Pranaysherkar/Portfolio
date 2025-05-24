import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import IMG1 from "../assets/cardsimg/IMG1.avif";
import IMG2 from "../assets/cardsimg/IMG2.avif";
import IMG3 from "../assets/cardsimg/IMG3.avif";
import IMG4 from "../assets/cardsimg/IMG4.avif";

const ScrollImageReveal = () => {
  const initialImages = [
    {
      url:IMG1,
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: IMG2,
      top: "60%",
      left: "40%",
      isActive: false,
    },
    {
      url: IMG3,
      top: "70%",
      left: "60%",
      isActive: false,
    },
    {
      url: IMG4,
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
    showImages(Math.floor(latest * 50));
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
    <div className="hidden md:block imgContainer absolute md:h-[25vh] md:w-1/5 lg:h-[40%] lg:w-1/6 translate-x-11/12 translate-y-1/2 md:top-1/2 lg:top-1/4 right-1/5 rounded-lg z-10">
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
