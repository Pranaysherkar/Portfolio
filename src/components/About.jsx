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

  const text = `I focus on building intelligent, user-friendly applications with AI-powered features and full-stack systems that solve real problems and deliver engaging experiences.`;

  return (
    <div className="w-full min-h-screen lg:px-6 md:mx-14 mx-4 px-2">
      <div className="info w-full md:mt-18">
        <p
          ref={paragraphRef}
          className="text-base md:text-2xl lg:text-4xl w-full md:w-10/12 lg:w-2/3 md:flex md:flex-wrap leading-relaxed capitalize"
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
      <div className="details w-full flex lg:flex-row flex-col items-start lg:gap-32 gap-5">
        <div className="nameAndLinks lg:w-1/3 lg:h-64 h-20 flex flex-col items-start gap-5 lg:justify-between">
          <h1 className="text-xl sm:text-2xl lg:text-3xl capitalize tracking-widest">
            Namaste, I'm Pranay.
          </h1>

          <div className="Links flex justify-between gap-4 text-2xl w-2/3 text-indigo-300 [&>*]:cursor-pointer [&>*]:hover:text-violet-400 transition-all duration-300">
            <a
              href="https://github.com/Pranaysherkar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
           <a href="https://www.linkedin.com/in/pranay-sherkar-6a0975234/"
              target="_blank"
              rel="noopener noreferrer">
            <FaLinkedinIn />
            </a> 
           <a href="https://x.com/PranaySher14485"
              target="_blank"
              rel="noopener noreferrer">
            <BsTwitterX />
            </a> 
          </div>
        </div>

        <div className="description w-full sm:w-10/12 lg:w-1/2 lg:text-lg text-sm tracking-widest text-slate-400 leading-relaxed">
          I'm-Applied AI Engineer and Full Stack Developer specializing in intelligent automation and modern web systems. I design and deploy AI-powered products, RAG pipelines, and workflow automation using n8n, LangChain, Ollama, and vector databases like Qdrant and pgVector. My full-stack work spans React, Next.js, Node.js, Express, MongoDB, and PostgreSQL, with a focus on MCP-based tool integration. I'm driven by clean architecture, security, and scalability—building solutions that perform in production. Always learning, always shipping.
        </div>
      </div>
      <div className="mt-12 w-11/12 flex flex-col items-center">
        <ResumeButton
          name={"Resume"}
          link={
            "https://drive.google.com/file/d/1R0kU4AgZFxt-5gAoLnpNv9VgkpxCe06O/view?usp=sharing"
          }
        />
        <AnimatedRopeLine />
      </div>
    </div>
  );
};

export default About;
