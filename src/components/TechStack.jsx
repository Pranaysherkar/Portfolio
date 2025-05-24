import React, { useEffect, useRef } from "react";
import flower from "../assets/flower.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaServer,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiVercel,
  SiPostman,
  SiNpm,
  SiTypescript,
  SiNextdotjs,
  SiGit,
  SiPnpm,
  SiEjs,
  SiNetlify,
  SiThreedotjs,
  SiOpenai,
  SiMongoose,
  SiGreensock,
  SiScrollreveal,
  SiGithubpages,
} from "react-icons/si";
import HorizontalScroller from "../templates/HorizontalScroller";

gsap.registerPlugin(ScrollTrigger);

const techs = [
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <FaReact />, name: "ReactJS" },
  { icon: <SiNextdotjs />, name: "NextJS" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
  { icon: <SiFramer />, name: "Framer Motion" },
  { icon: <SiGreensock />, name: "GSAP" },
  { icon: <SiScrollreveal />, name: "Locomotive.js" },
  { icon: <SiThreedotjs />, name: "Three.js" },
  { icon: <FaNodeJs />, name: "NodeJS" },
  { icon: <SiExpress />, name: "ExpressJS" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiMongoose />, name: "Mongoose" },
  { icon: <SiEjs />, name: "EJS" },
  { icon: <SiGit />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <SiGithubpages />, name: "GitHub Pages" },
  { icon: <SiVercel />, name: "Vercel" },
  { icon: <SiNetlify />, name: "Netlify" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiNpm />, name: "npm" },
  { icon: <SiPnpm />, name: "pnpm" },
  { icon: <SiOpenai />, name: "AI Tools" },
  { icon: <FaServer />, name: "MCP Server" },
];

const TechStack = () => {
  const flowerRef = useRef(null);
  const iconsContainerRef = useRef(null);

  useEffect(() => {
    // Flower rotation on scroll
    gsap.to(flowerRef.current, {
      rotate: 360,
      ease: "none",
      scrollTrigger: {
        trigger: flowerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Icon animation (rotateY to mimic 2D turn)
    gsap.fromTo(
      iconsContainerRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: iconsContainerRef.current,
          start: "top 90%",
          end: "bottom 70%",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen w-full px-6 py-24 text-white relative flex flex-col items-center gap-10">
      {/* Centered Flower Image and Heading */}
      <div className="relative flex flex-col items-center">
        <img
          ref={flowerRef}
          src={flower}
          alt="Flower"
          className="w-60 md:w-80 lg:w-96 brightness-50"
        />

        <h3 className="absolute top-[60%] text-base tracking-widest text-violet-300 uppercase">
          I constantly try to improve
        </h3>

        <div className="absolute top-[70%] w-[130%] h-22 rounded-3xl bg-transparent backdrop-blur-md shadow-[0_20px_40px_rgba(255,255,255,0.2)] z-0" />

        <h1 className="absolute top-[72%] tracking-tight text-4xl md:text-6xl font-bold text-indigo-200 whitespace-nowrap z-10">
          My Tech Stack
        </h1>
      </div>
      {/* Tech Icons */}
      <div
        ref={iconsContainerRef}
        className="flex flex-wrap justify-center gap-4 mt-10 max-w-6xl"
      >
        {techs.map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-2 bg-[#1a1a1a] px-4 py-2 rounded-full text-sm text-white hover:text-blue-300 hover:bg-[#2a2a2a] transition-all duration-300 cursor-pointer"
          >
            <span className="text-xl">{tech.icon}</span>
            <span className="tracking-wider">{tech.name}</span>
          </div>
        ))}
      </div>
      <HorizontalScroller
        words={[
          "Scalable",
          "Responsive",
          "Engaging",
          "Fast",
          "Secure",
          "Interactive",
          "Modern",
          "Reliable",
          "Flexible",
        ]}
      />{" "}
    </div>
  );
};

export default TechStack;
