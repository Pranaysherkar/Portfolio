import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedRopeLine from "../templates/AnimatedRopeLine";

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
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const text = `I focus on building user-friendly and responsive websites with smooth animations that not only address practical user needs but also create a more engaging and enjoyable experience.`;

  return (
    <div className="w-full min-h-screen px-6 mx-14">
      <div className="info w-full mt-18">
        <p ref={paragraphRef} className="text-4xl w-2/3 flex flex-wrap leading-relaxed capitalize">
          {text.split(" ").map((word, i) => (
            <span key={i} className="word mr-2 inline-block text-violet-300">
              {word}
            </span>
          ))}
        </p>

        <h2 className="uppercase mt-5 tracking-wide text-slate-200">
          This is me!
        </h2>
        <div className="-mt-4 w-11/12">
          <AnimatedRopeLine />
        </div>
      </div>
    </div>
  );
};

export default About;
