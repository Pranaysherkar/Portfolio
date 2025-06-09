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
    if (loading) {
      document.body.classList.add("noscroll");
    } else {
      document.body.classList.remove("noscroll");
    }
  }, [loading]);
  
  useEffect(() => {
    const wait = setTimeout(() => {
      requestAnimationFrame(() => {
        const images = Array.from(document.images);
        const totalImages = images.length;
        console.log(images, totalImages);
        let loadedCount = 0;

        const updateProgress = () => {
          const percent = totalImages ? (loadedCount / totalImages) * 90 : 90;
          setProgress(Math.min(100, Math.round(percent)));
        };

        const onImageLoad = () => {
          loadedCount++;
          updateProgress();
          if (loadedCount === totalImages) {
            document.fonts.ready.then(() => {
              setProgress(100);
              setTimeout(() => setLoading(false), 500);
            });
          }
        };

        if (totalImages === 0) {
          updateProgress();
          onImageLoad();
        } else {
          images.forEach((img) => {
            if (img.complete) onImageLoad();
            else {
              img.addEventListener("load", onImageLoad);
              img.addEventListener("error", onImageLoad);
            }
          });
        }
      });
    }, 100);

    return () => clearTimeout(wait);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-tr from-[#252525f8] via-black to-[#330f5c] overflow-x-hidden text-white cursor-none">
      <div
        className={`${
          loading ? "opacity-0 invisible" : "opacity-100 visible"
        } transition-opacity duration-500`}
      >
        <Cursor />
        <Header />
        <section id="home">
          <Home loading={loading} />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="techstack">
          <TechStack />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="connect">
          <Connect />
        </section>
      </div>

      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            className="absolute top-0 left-0 w-full h-full z-50"
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Loader count={progress} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
