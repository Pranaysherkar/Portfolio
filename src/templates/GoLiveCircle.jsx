import { motion } from "framer-motion";

const GoLiveCircle = () => {
  return (
    <div className="relative w-20 h-20  bg-black/50 backdrop-blur-3xl rounded-full">
      {/* Rotating SVG Circle */}
      <motion.div
        className="w-full h-full"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        <svg
          viewBox="0 0 160 160"
          className="w-full h-full rounded-full p-1"
        >
          <defs>
            <path
              id="circlePath"
              d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
            />
          </defs>
          <text fill="#ffffff" fontSize="20" className="font-semibold tracking-wider">
            <textPath href="#circlePath" startOffset="0%">
              Go Live ✦ Go Live ✦ Go Live ✦
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* Static ✦ in Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold ">
        ✦
      </div>
    </div>
  );
};

export default GoLiveCircle;
