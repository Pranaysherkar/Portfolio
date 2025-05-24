import React, { useEffect, useRef, useState } from "react";
import {
  FaReact,
  FaTv,
  FaGithub,
  FaGoogle,
  FaServer,
  FaNpm,
  FaBell,
} from "react-icons/fa";
import { IoPrismOutline, IoLogoVercel, IoLogoNodejs } from "react-icons/io5";
import {
  SiTailwindcss,
  SiFramer,
  SiRedux,
  SiReactrouter,
  SiAxios,
  SiNetlify,
  SiExpress,
  SiPostman,
  SiVite,
  SiEslint,
  SiPostcss,
} from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri";
import imgMoive from "../assets/projectsImg/movie.png";
import adminIMG from "../assets/projectsImg/adminIMG.png";
import codeIMG from "../assets/projectsImg/codeReview.png";
import empIMG from "../assets/projectsImg/empIMG.png";
import xIMG from "../assets/projectsImg/xIMG.png";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GoLiveCircle from "./GoLiveCircle";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    img: xIMG,
    heading: "AI Agent - X ",
    subheading: "Terminal-based AI Assistant with Twitter & Tool Integration",
    description:
      "AI Agent is a CLI-based assistant powered by Gemini API that executes tasks via MCP tools and can post directly to Twitter(X).",
    features: [
      "Chat-like terminal interface for commands and questions.",
      "Executes tools using Model Context Protocol (MCP).",
      "Posts updates directly to Twitter(X) via API.",
      "Context-aware conversation with memory.",
      "Modular design for adding new tools easily.",
    ],
    tech: [
      { name: "Node.js", icon: <IoLogoNodejs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "NPM", icon: <FaNpm /> },
      { name: "Gemini API", icon: <FaGoogle /> },
      { name: "MCP Server", icon: <FaServer /> },
      { name: "Twitter API", icon: <RiTwitterXLine /> },
    ],
    liveLink: "https://github.com/Pranaysherkar/AI-agent",
  },
  {
    img: codeIMG,
    heading: "Code Review",
    subheading: "AI-Powered Multi-language Code Review & Code Generation",
    description:
      "Code Review lets users paste code or ask questions, providing instant AI feedback and code generation with multi-language support.",
    features: [
      "Supports multiple programming languages with syntax-highlighted editor.",
      "AI-powered real-time code review and code generation via Google's Gemini API.",
      "Ask questions like 'Write code for me' and get AI-generated code snippets.",
      "Markdown support for well-formatted feedback and answers.",
    ],
    tech: [
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Prism.js", icon: <IoPrismOutline /> },
      { name: "Express.js", icon: <SiFramer /> },
      { name: "Axios", icon: <SiAxios /> },
      { name: "React Markdown", icon: <SiFramer /> },
      { name: "Gemini API", icon: <FaGoogle /> },
      { name: "Vercel", icon: <IoLogoVercel /> },
      { name: "Github", icon: <FaGithub /> },
    ],
    liveLink: "https://code-review-xzjs.vercel.app/",
  },
  {
    img: imgMoive,
    heading: "ShowSpot TMDB",
    subheading: "Discover Movies, Web Series & TV Shows Instantly",
    description:
      "ShowSpot is a dynamic platform where users can explore trending movies, web series, and TV shows using TMDB API. It delivers a smooth and engaging browsing experience with fast loading and rich UI animations.",
    features: [
      "Integrated TMDB API using Axios for comprehensive movie and TV show data.",
      "Dynamic search bar with real-time suggestions and detailed info.",
      "Added trailers and a recommended section for trending and popular content.",
    ],
    tech: [
      { name: "React", icon: <FaReact /> },
      { name: "Redux Toolkit", icon: <SiRedux /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "NPM", icon: <FaNpm /> },
      { name: "TMDB API", icon: <FaTv /> },
      { name: "Framer Motion", icon: <SiFramer /> },
      { name: "Axios", icon: <SiAxios /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Netlify", icon: <SiNetlify /> },
      { name: "Github", icon: <FaGithub /> },
    ],
    liveLink: "https://show-spot.netlify.app/",
  },
  {
    img: empIMG,
    heading: "TrackEmp",
    subheading: "Simple Employee Management System",
    description:
      "TrackEmp is a web app to manage employee records with create, read, update, and delete (CRUD) features using localStorage.",
    features: [
      "Add, edit, and delete employee details.",
      "Data stored persistently using localStorage.",
      "Responsive and user-friendly UI.",
      "Form validations to prevent empty inputs.",
      "Clear button to reset entire record list.",
    ],
    tech: [
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <IoLogoNodejs /> },
      { name: "NPM", icon: <FaNpm /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "ESLint", icon: <SiEslint /> },
      { name: "PostCSS", icon: <SiPostcss /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "Netlify", icon: <SiNetlify /> },
      { name: "Github", icon: <FaGithub /> },
    ],
    liveLink: "https://trackemp.netlify.app/",
  },
  {
    img: adminIMG,
    heading: "E-commerce Admin Panel",
    subheading: "Product Management Dashboard",
    description:
      "A responsive admin panel to manage products with category-wise filtering, local storage, CRUD operations, and API integration for seamless control.",
    features: [
      "Fetch product data from external API using Axios.",
      "Create, update, and delete products with real-time UI updates.",
      "Filter and render products by category.",
      "View detailed product info on click.",
      "Data persistence using localStorage.",
      "Responsive UI with toast notifications for actions.",
    ],
    tech: [
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Axios", icon: <SiAxios /> },
      { name: "Node.js", icon: <IoLogoNodejs /> },
      { name: "React Router DOM", icon: <SiReactrouter /> },
      { name: "React Toastify", icon: <FaBell /> },
      { name: "Netlify", icon: <SiNetlify /> },
      { name: "Github", icon: <FaGithub /> },
    ],
    liveLink: "https://e-commerce-admin-pannel.netlify.app/",
  },
];

const ProjectCard = () => {
  const cardsRef = useRef([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        { autoAlpha: 0, y: 50 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="h-1/2 w-full space-y-8 flex flex-col items-center justify-center p-4 mt-20 tracking-wider">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="w-10/12 flex flex-col md:flex-row items-center gap-6 bg-black rounded-3xl p-8 shadow-xl border border-neutral-800"
        >
          <div
            className="relative bg-gradient-to-br from-purple-900 via-black/70 to-purple-900 rounded-2xl p-4 w-[50%]"
            onClick={() =>
              window.open(project.liveLink, "_blank", "noopener,noreferrer")
            }
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              setMousePos({ x, y });
              setHoveredCard(index);
            }}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img
              src={project.img}
              alt={project.heading}
              className="rounded-xl shadow-xl border border-black w-full h-full object-cover cursor-pointer"
            />

            {hoveredCard === index && (
              <div
                className="absolute pointer-events-none"
                style={{
                  top: mousePos.y - 40,
                  left: mousePos.x - 40,
                }}
              >
                <GoLiveCircle />
              </div>
            )}
          </div>

          <div className="w-full md:w-[50%] text-white space-y-5">
            <h2 className="text-fuchsia-400 text-xl font-semibold">
              {project.heading}
            </h2>
            <p className="text-white text-sm font-medium">
              {project.subheading}
            </p>
            <p className="text-sm text-gray-300">{project.description}</p>
            <ul className="list-disc pl-2 space-y-1 text-sm">
              {project.features.map((point, i) => (
                <li
                  key={i}
                  className="text-white font-medium before:content-['✦'] before:mr-2 before:text-pink-400 list-none"
                >
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 pt-2 tracking-wider">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1 bg-neutral-900 text-white px-2 py-1 rounded-xl text-xs shadow-sm border border-neutral-700"
                >
                  {tech.icon}
                  <span className="capitalize">{tech.name}</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectCard;
