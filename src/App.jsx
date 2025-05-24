import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "./components/Loader";
import Cursor from "./templates/Cursor";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Connect from "./components/Connect";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const images = Array.from(document.images);
    const totalImages = images.length;
    let loadedCount = 0;

    const onImageLoad = () => {
      loadedCount++;
      setProgress(Math.round((loadedCount / totalImages) * 100));
      if (loadedCount === totalImages) {
        checkFonts();
      }
    };

    const checkFonts = () => {
      document.fonts.ready.then(() => {
        setLoading(false);
      });
    };

    if (totalImages === 0) {
      checkFonts(); // no images, just wait fonts
    } else {
      images.forEach((img) => {
        if (img.complete) {
          onImageLoad();
        } else {
          img.addEventListener("load", onImageLoad);
          img.addEventListener("error", onImageLoad);
        }
      });
    }

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", onImageLoad);
        img.removeEventListener("error", onImageLoad);
      });
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-tr from-[#252525f8] via-black to-[#330f5c] overflow-x-hidden text-white cursor-none">
      <Cursor />{" "}
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Loader count={progress} />
          </motion.div>
        ) : (
          <>
            <Header />
            <Home />
            <About />
            <TechStack />
            <Projects />
            <Connect />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
