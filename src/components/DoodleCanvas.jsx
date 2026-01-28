import { useEffect, useRef } from 'react';

const DoodleCanvas = () => {
    const canvasRef = useRef(null);
    const points = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);
        resize();

        const handleMouseMove = (e) => {
            points.current.push({
                x: e.clientX,
                y: e.clientY,
                life: 1.0,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1
            });

            if (points.current.length > 100) points.current.shift();
        };

        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            
            ctx.strokeStyle = '#18181b';
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            for (let i = 1; i < points.current.length; i++) {
                const p1 = points.current[i - 1];
                const p2 = points.current[i];
                
                if (p1.life <= 0) continue;

                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.lineWidth = p1.size * p1.life;
                ctx.globalAlpha = p1.life * 0.15;
                ctx.stroke();

                p1.life -= 0.01;
                p1.x += p1.vx;
                p1.y += p1.vy;
            }

            points.current = points.current.filter(p => p.life > 0);
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            className="doodle-canvas hidden lg:block"
        />
    );
};

export default DoodleCanvas;
