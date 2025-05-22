import React from "react";
import { FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiFramer,
  SiMongodb,
} from "react-icons/si";
import imgMoive from "../assets/projectsImg/movie.png";

const projects = [
  {
    img: imgMoive,
    heading: "Next Ventures",
    subheading: "A space for startup ideas & exposure.",
    description:
      "Platform for entrepreneurs to pitch, explore, and gain exposure with blazing speed and compelling design.",
    features: [
      "Leveraged Partial Prerendering and After for faster loading.",
      "Simplified idea submission with a clean, intuitive design.",
      "Enhanced browsing with seamless performance optimization.",
    ],
    tech: [
      { name: "Next.js", icon: <FaReact /> },
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Framer Motion", icon: <SiFramer /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    img: imgMoive,
    heading: "Next Ventures",
    subheading: "A space for startup ideas & exposure.",
    description:
      "Platform for entrepreneurs to pitch, explore, and gain exposure with blazing speed and compelling design.",
    features: [
      "Leveraged Partial Prerendering and After for faster loading.",
      "Simplified idea submission with a clean, intuitive design.",
      "Enhanced browsing with seamless performance optimization.",
    ],
    tech: [
      { name: "Next.js", icon: <FaReact /> },
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Framer Motion", icon: <SiFramer /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    img: imgMoive,
    heading: "Next Ventures",
    subheading: "A space for startup ideas & exposure.",
    description:
      "Platform for entrepreneurs to pitch, explore, and gain exposure with blazing speed and compelling design.",
    features: [
      "Leveraged Partial Prerendering and After for faster loading.",
      "Simplified idea submission with a clean, intuitive design.",
      "Enhanced browsing with seamless performance optimization.",
    ],
    tech: [
      { name: "Next.js", icon: <FaReact /> },
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Framer Motion", icon: <SiFramer /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    img: imgMoive,
    heading: "Next Ventures",
    subheading: "A space for startup ideas & exposure.",
    description:
      "Platform for entrepreneurs to pitch, explore, and gain exposure with blazing speed and compelling design.",
    features: [
      "Leveraged Partial Prerendering and After for faster loading.",
      "Simplified idea submission with a clean, intuitive design.",
      "Enhanced browsing with seamless performance optimization.",
    ],
    tech: [
      { name: "Next.js", icon: <FaReact /> },
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Framer Motion", icon: <SiFramer /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  // More projects can go here
];

const ProjectCard = () => (
  <div className="space-y-8 flex flex-col items-center justify-center p-4">
    {projects.map((project, index) => (
      <div
        key={index}
        className="w-10/12 flex flex-col md:flex-row items-center gap-6 bg-black rounded-3xl p-8 shadow-xl border border-neutral-800"
      >
        <div className="bg-gradient-to-br from-pink-500/60 to-fuchsia-800/50 rounded-2xl p-4 w-full md:w-[50%]">
          <img
            src={project.img}
            alt={project.heading}
            className="rounded-xl shadow-xl border border-black"
          />
        </div>
        <div className="w-full md:w-[50%] text-white space-y-5">
          <h2 className="text-fuchsia-400 text-xl font-semibold">
            {project.heading}
          </h2>
          <p className="text-white text-sm font-medium">{project.subheading}</p>
          <p className="text-sm text-gray-300">{project.description}</p>
          <ul className="list-disc pl-2 space-y-1 text-sm">
            {project.features.map((point, i) => (
              <li className="text-white font-medium before:content-['✦'] before:mr-2 before:text-pink-400 list-none">
                {" "}
                {point}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 pt-2">
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
      </div>
    ))}
  </div>
);

export default ProjectCard;
