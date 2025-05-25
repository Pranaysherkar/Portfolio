import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/Logo.png";
import FlowingMenu from "../templates/FlowingMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);

  const demoItems = [
    { link: "#home", text: "Home", image: "https://picsum.photos/600/400?random=1" },
    { link: "#about", text: "About", image: "https://picsum.photos/600/400?random=2" },
    { link: "#projects", text: "Projects", image: "https://picsum.photos/600/400?random=3" },
    { link: "#connect", text: "Connect", image: "https://picsum.photos/600/400?random=4" },
    { link: "https://drive.google.com/file/d/1AR4LoJQdNkIdSAYWr6aOlIc6Hw2ODTqJ/view?usp=sharing", text: "Resume↗", image: "https://picsum.photos/600/400?random=5" },
  ];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x: x / 5, y: y / 5 });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`selection-none fixed top-0 left-0 w-full z-50 px-6 pt-4 flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? "bg-black-/50 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <motion.div
        className="h-12 w-12 sm:h-16 sm:w-16 md:h-14 md:w-14 border rounded-xl overflow-hidden cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <img src={Logo} alt="p." className="h-full w-full object-cover" />
      </motion.div>

      {/* Hamburger Icon */}
      <div
        className="relative w-10 h-6 cursor-pointer z-20 flex items-center justify-center sm:w-12 sm:h-7 md:w-12 md:h-5"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: "transform 0.1s ease-out",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`absolute h-[0.8px] md:h-1 w-5 md:w-8 bg-white rounded transition-all duration-600 ease-in-out ${
            isOpen ? "rotate-45 top-2" : "top-1"
          }`}
        />
        <span
          className={`absolute h-[0.8px] md:h-1 w-5 md:w-8 bg-white rounded transition-all duration-600 ease-in-out ${
            isOpen ? "-rotate-45 top-2" : "top-3"
          }`}
        />
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-screen w-full sm:w-3/4 md:w-1/3 bg-black/40 backdrop-blur-xl flex items-center justify-center z-10 p-6 text-white"
          >
            <ul className="space-y-4 h-11/12 w-10/12 flex flex-col items-center justify-center rounded-lg shadow-lg text-4xl font-semibold">
              <div className="h-1/2 w-full flex items-center justify-center">
                <FlowingMenu
                  className="rounded-2xl overflow-hidden"
                  items={demoItems}
                />
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
