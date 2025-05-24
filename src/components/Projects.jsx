import React, { useEffect, useRef } from "react";
import windmill from "../assets/windmill.png";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "../templates/ProjectCard";
import HorizontalScroller from "../templates/HorizontalScroller";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      subHeadingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: subHeadingRef.current,
          start: "top 90%",
          toggleActions: "restart none none none",
          // markers:true
        },
      }
    );

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen w-full bg-transparent flex flex-col items-center pt-12 sm:pt-16 px-4 sm:px-8 mt-10">
      <div className="flex flex-col items-center">
        <h3
          ref={subHeadingRef}
          className="text-sm sm:text-base tracking-widest text-violet-100 uppercase text-center"
        >
          FEATURED CASE STUDIES
        </h3>

        <h1
          ref={headingRef}
          className="relative border-b-1 rounded-xl px-3 py-4 sm:px-5 sm:py-4 backdrop-blur-3xl text-3xl sm:text-4xl md:text-6xl tracking-wider font-semibold text-[#b5acd8] text-center"
        >
          Curated w
          <span className="inline-block h-8 sm:h-12 w-10 sm:w-16 relative align-middle">
            <motion.img
              src={windmill}
              alt="Flower"
              className="absolute w-10 sm:w-16 brightness-100"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 2,
              }}
            />
          </span>
          rk
        </h1>
      </div>

      {/* Responsive ProjectCard */}
      <div className="w-full mt-10 sm:mt-16">
        <ProjectCard />
      </div>

      {/* HorizontalScroller */}
      <div className="mt-10 sm:mt-16 w-full">
        <HorizontalScroller
          words={[
            "Connect",
            "Collaborate",
            "Create",
            "Build",
            "Deploy",
            "Explore",
            "Innovate",
            "Network",
            "Solve",
          ]}
        />
      </div>
    </div>
  );
};

export default Projects;
