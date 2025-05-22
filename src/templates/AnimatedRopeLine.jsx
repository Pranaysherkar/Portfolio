// components/AnimatedRopeLine.jsx
import React, { useRef } from "react";
import { gsap } from "gsap";

const AnimatedRopeLine = ({ width = 900, stroke = "white", strokeWidth = 1 }) => {
  const svgRef = useRef(null);

  const createPath = (bend = 0) => {
    const mid = width / 2;
    return `M0,50 Q${mid},${50 + bend} ${width},50`;
  };

  const handleMouseEnter = (e) => {
    const svg = svgRef.current;
    const bbox = svg.getBoundingClientRect();
    const mouseY = e.clientY - bbox.top;

    const fromTop = mouseY < bbox.height / 2;
    const path = svg.querySelector("path");

    gsap.to(path, {
      duration: 0.3,
      attr: {
        d: createPath(fromTop ? 30 : -30),
      },
      ease: "power2.out",
      onComplete: () => {
        gsap.to(path, {
          duration: 0.5,
          attr: {
            d: createPath(0),
          },
          ease: "elastic.out(1, 0.3)",
        });
      },
    });
  };

  return (
    <svg
      ref={svgRef}
      onMouseEnter={handleMouseEnter}
      viewBox={`0 0 ${width} 100`}
      preserveAspectRatio="none"
      width="100%"
      height="100"
      className="mt-1"
    >
      <path
        d={`M0,50 Q${width / 2},50 ${width},50`}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill="transparent"
        opacity={0.5}
      />
    </svg>
  );
};

export default AnimatedRopeLine;
