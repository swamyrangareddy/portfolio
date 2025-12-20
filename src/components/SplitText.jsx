import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SplitText = ({ children, className = "", delay = 0 }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const chars = elementRef.current.querySelectorAll('.char');
    
    gsap.fromTo(chars, 
      { 
        opacity: 0, 
        y: 20, 
        rotate: 10 
      },
      { 
        opacity: 1, 
        y: 0, 
        rotate: 0, 
        duration: 0.4, 
        stagger: 0.03, 
        delay: delay,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, [delay, children]);

  if (typeof children !== 'string') {
      return <span className={className}>{children}</span>;
  }

  return (
    <span ref={elementRef} className={`inline-block ${className}`} aria-label={children}>
      {children.split('').map((char, index) => (
        <span 
            key={index} 
            className="char inline-block" 
            aria-hidden="true"
            style={{ minWidth: char === ' ' ? '0.25em' : 'auto' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default SplitText;
