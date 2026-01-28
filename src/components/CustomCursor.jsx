import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const containerRef = useRef(null);
  const [splats, setSplats] = useState([]);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      });

      // Trail particle effect
      const trailParticle = {
        id: Math.random(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 8 + 4,
        color: ['#16b8f3', '#f783ac', '#fab005', '#12b886', '#7950f2'][Math.floor(Math.random() * 5)]
      };

      setSplats(prev => [...prev.slice(-15), trailParticle]);

      setTimeout(() => {
        setSplats(prev => prev.filter(s => s.id !== trailParticle.id));
      }, 500);
    };

    const handleMouseDown = (e) => {
      const newSplat = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 40 + 30,
        color: ['#16b8f3', '#f783ac', '#fab005', '#12b886', '#7950f2'][Math.floor(Math.random() * 5)]
      };
      
      setSplats(prev => [...prev, newSplat]);

      // Remove splat after animation
      setTimeout(() => {
        setSplats(prev => prev.filter(s => s.id !== newSplat.id));
      }, 1000);

      // Scale cursor down on click
      gsap.to(cursor, { scale: 0.8, duration: 0.1 });
    };

    const handleMouseUp = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.3 });
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="custom-cursor-container hidden lg:block">
      <div ref={cursorRef} className="brush-cursor"></div>
      {splats.map(splat => (
        <div 
          key={splat.id}
          className="cursor-splat animate-ping"
          style={{
            left: splat.x,
            top: splat.y,
            width: splat.size,
            height: splat.size,
            backgroundColor: splat.color,
            opacity: 0.6
          }}
        />
      ))}
    </div>
  );
};

export default CustomCursor;
