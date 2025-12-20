import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionWrapper = ({ children, id, className = "" }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    
    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%", // Trigger when top of section hits 80% viewport height
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section id={id} ref={sectionRef} className={`w-full ${className}`}>
      {children}
    </section>
  );
};

export default SectionWrapper;
