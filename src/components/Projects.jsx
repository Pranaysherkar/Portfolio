import React, { useEffect, useRef } from "react";
import windmill from "../assets/windmill.png";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "../templates/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);

  useEffect(() => {
    // Animate h3
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
          start: "top 80%",
          toggleActions: "restart none none none",
          // markers:true // re-animate on every scroll in
        },
      }
    );

    // Animate h1
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
          start: "top 80%",
          toggleActions: "restart none none none", // re-animate on every scroll in
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen w-full bg-transparent flex flex-col items-center pt-12 px-4 mt-10">
      <div className="flex flex-col items-center">
        <h3
          ref={subHeadingRef}
          className="text-base tracking-widest text-violet-100 uppercase"
        >
          FEATURED CASE STUDIES
        </h3>

        <h1
          ref={headingRef}
          className="relative border-b-1 rounded-xl px-5 py-4 backdrop-blur-3xl text-6xl tracking-wider font-semibold text-[#b5acd8] whitespace-nowrap"
        >
          Curated w
          <span className="inline-block h-12 w-16 relative">
            <motion.img
              src={windmill}
              alt="Flower"
              className="absolute w-16 brightness-100"
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
      {/* <div className="w-full max-h-[60vh] overflow-y-auto mt-20"> */}
        <ProjectCard />
      {/* </div> */}
    </div>
  );
};

export default Projects;