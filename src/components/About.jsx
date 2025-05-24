import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedRopeLine from "../templates/AnimatedRopeLine";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import ResumeButton from "../templates/ResumeButton";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const paragraphRef = useRef(null);

  useEffect(() => {
    const words = gsap.utils.toArray(".word");

    gsap.set(words, { opacity: 0.1 });

    gsap.to(words, {
      opacity: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "top 90%",
        end: "bottom 50%",
        scrub: true,
        // markers: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const text = `I focus on building user-friendly and responsive websites with smooth animations that not only address practical user needs but also create a more engaging and enjoyable experience.`;

  return (
    <div className="w-full min-h-screen px-6 mx-14">
      <div className="info w-full mt-18">
        <p
          ref={paragraphRef}
          className="text-4xl w-2/3 flex flex-wrap leading-relaxed capitalize"
        >
          {text.split(" ").map((word, i) => (
            <span key={i} className="word mr-2 inline-block text-violet-300">
              {word}
            </span>
          ))}
        </p>

        <h2 className="uppercase mt-5 tracking-wide text-slate-200">
          This is me!
        </h2>
        <div className="-mt-6 w-11/12">
          <AnimatedRopeLine />
        </div>
      </div>
      <div className="details w-full flex items-start gap-32">
        <div className="nameAndLinks w-1/3 h-64 flex flex-col items-start justify-between">
          <h1 className="text-3xl capitalize tracking-widest">
            Namaste, I'm Pranay.
          </h1>

          <div className="Links flex justify-between gap-4 text-2xl w-2/3 text-indigo-300 [&>*]:cursor-pointer [&>*]:hover:text-violet-400 transition-all duration-300">
            <FaGithub />
            <FaLinkedinIn />
            <BsTwitterX />
            <BsInstagram />
          </div>
        </div>

        <div className="description w-1/2 text-lg tracking-widest text-slate-400 leading-relaxed">
          I'm a MERN stack web developer passionate about building fast,
          interactive, and visually rich web apps. I craft smooth UI/UX using
          React, Tailwind, Three.js, GSAP, Framer Motion, Locomotive.js, and
          Shery.js. On the backend, I work with Node.js, Express, MongoDB,
          Mongoose, EJS, JWT, bcrypt, and Socket.io, following the MCP
          architecture for clean, scalable code. I also use AI tools in
          development and have built custom AI agents to automate tasks and
          improve performance. Always learning, always building secure, smart,
          full-stack solutions.
        </div>
      </div>
      <div className="mt-12 w-11/12 flex flex-col items-center">
        <ResumeButton name={"Resume"} link={"https://drive.google.com/file/d/1AR4LoJQdNkIdSAYWr6aOlIc6Hw2ODTqJ/view?usp=sharing"} />
        <AnimatedRopeLine />
      </div>
    </div>
  );
};

export default About;
