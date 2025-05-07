import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/Logo.png";
import FlowingMenu from "../templates/FlowingMenu"; // Adjust the import path as necessary

const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  const demoItems = [
    {
      link: "#",
      text: "Home",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      link: "#",
      text: "About",
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      link: "#",
      text: "Projects",
      image: "https://picsum.photos/600/400?random=3",
    },
    {
      link: "#",
      text: "Connect",
      image: "https://picsum.photos/600/400?random=4",
    },
  ];

  return (
    <div className="selection-none w-screen flex justify-between items-center px-10 py-6 fixed bg-transparent z-50">
      {/* Logo */}
      <div className="h-14 w-14 bg-black rounded-full overflow-hidden">
        <img src={Logo} alt="p." className="h-full w-full object-cover" />
      </div>

      {/* Hamburger Icon */}
      <div
        className="relative w-8 h-8 cursor-pointer z-20"
        onClick={() => setisOpen(!isOpen)}
      >
        <span
          className={`absolute left-0 h-1 w-full bg-white rounded transition-all duration-600 ease-in-out
      ${isOpen ? "rotate-45 top-3.5" : "top-1"}`}
        />
        <span
          className={`absolute left-0 h-1 w-full bg-white rounded transition-all duration-600 ease-in-out
      ${isOpen ? "-rotate-45 top-3.5" : "bottom-1"}`}
        />
      </div>

      {/* Sidebar with Yellow Background */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-screen w-full sm:w-1/4 bg-black/50 backdrop-blur-xl flex items-center justify-center z-10 p-6 text-white"
          >
            <ul className="space-y-4 h-11/12 w-11/12 flex flex-col items-center justify-center rounded-lg shadow-lg text-4xl font-semibold">
              <div className="h-1/2 w-full flex items-center justify-center ">
                <FlowingMenu className="rounded-2xl overflow-hidden" items={demoItems} />
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
