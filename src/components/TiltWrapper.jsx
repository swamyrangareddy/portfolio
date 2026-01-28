import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const TiltWrapper = ({ children, className = "", scale = 1.05 }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    
    const handleMouseMove = (e) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      const rotateX = (y - 0.5) * -20;
      const rotateY = (x - 0.5) * 20;

      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        scale: scale,
        duration: 0.3,
        ease: 'power2.out',
        transformPerspective: 1000
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out'
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [scale]);

  return (
    <div 
      ref={cardRef} 
      className={`tilt-card ${className}`}
    >
      {children}
    </div>
  );
};

export default TiltWrapper;
