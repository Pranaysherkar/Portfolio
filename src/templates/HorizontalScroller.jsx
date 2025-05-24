import React, { useRef } from "react";
import { gsap } from "gsap";
import { MdArrowOutward } from "react-icons/md";
import { useGSAP } from "@gsap/react";

const HorizontalScroller = ({ words = [] }) => {
  const scrollerRef1 = useRef();

  useGSAP(() => {
    gsap.to(scrollerRef1.current, {
      xPercent: -100,
      repeat: -1,
      ease: "none",
      duration: 30,
    });
  }, []);

  const repeatedWords = [...words, ...words, ...words]; // Repeat for seamless scrolling

  return (
    <div className="w-full space-y-4 mt-20 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 rounded-2xl py-1">
      {/* Top Scroller */}
      <div className="w-full h-20 rounded-2xl overflow-hidden flex items-center justify-center">
        <div className="w-full overflow-hidden">
          <div className="whitespace-nowrap flex" ref={scrollerRef1}>
            {repeatedWords.map((word, index) => (
              <div
                key={index}
                className="text-white text-3xl md:text-4xl font-light px-6 flex items-center gap-3"
              >
                {word}
                <span className="inline-block text-white">
                  <MdArrowOutward />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroller;
