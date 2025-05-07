import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Loader from "./components/Loader"; // Import the Loader component

const App = () => {
  const [loading, setLoading] = useState(true);

  // Simulating loading state for 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the duration as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-screen bg-black/90 overflow-x-hidden text-white">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }} // Move the loader upwards
            transition={{ duration: 1, ease: "easeInOut" }} // Smooth animation
          >
            <Loader />
          </motion.div>
        ) : (
          <Header />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;