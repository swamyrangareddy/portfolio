import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import magicBus from '../assets/magic_bus.png';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    
    gsap.fromTo(textRef.current,
      { opacity: 0, y: 50, rotate: -2 },
      {
        opacity: 1,
        y: 0,
        rotate: 1,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        }
      }
    );

    gsap.fromTo(timelineRef.current.children,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 85%",
          }
        }
      );

  }, []);

  return (
    <div className="py-20 md:py-32 bg-paper transition-colors duration-300 relative overflow-hidden" id="about">
      {/* Background doodles */}
      <div className="absolute top-10 right-10 w-20 h-20 border-2 border-ink rounded-full opacity-20 pointer-events-none animate-bounce"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-primary opacity-10 rotate-12 pointer-events-none"></div>

      {/* Magic Bus Stamp - Watermark Style (Left) */}
      <div className="absolute top-24 left-0 md:left-4 w-48 h-48 md:w-64 md:h-64 opacity-50 mix-blend-multiply -rotate-12 pointer-events-none select-none z-0">
          <img src={magicBus} alt="Magic Bus" className="w-full h-full object-contain contrast-125 sepia-[.3]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-16 text-ink flex items-center gap-4 transform -rotate-1">
          <span className="w-12 h-1 bg-ink rounded-full"></span>
          The Journal
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Bio Text - Journal Entry Style */}
            <div ref={textRef} className="space-y-6 relative group">
                {/* Journal Page Background */}
                <div className="absolute -inset-4 bg-[#fdf6e3] border-l-4 border-ink/20 shadow-hard rotate-1 -z-10" style={{clipPath: "polygon(0% 0%, 100% 2%, 98% 100%, 1% 98%)"}}></div>
                
                <div className="p-2 relative">
                     {/* "Entry #142" Date Stamp */}
                    <span className="absolute -top-8 -left-2 text-red-700 font-heading font-bold text-lg -rotate-6 border-2 border-red-700 px-2 py-1 opacity-90 mix-blend-multiply" style={{maskImage: 'url(https://grainy-gradients.vercel.app/noise.svg)'}}>
                        ENTRY #142
                    </span>
                    
                     <p className="text-xl md:text-2xl text-ink leading-relaxed font-sans font-medium">
                        I'm <span className="text-primary-dark font-bold bg-primary-light/20 px-1 transform -skew-x-6 inline-block">Swamyrangareddy Muthumula</span>, a Data Scientist and Full Stack AI Developer mapping the unknown territories of tech.
                    </p>
                </div>
                
                <p className="text-lg md:text-xl text-ink/90 leading-relaxed pl-6 border-l-2 border-secondary font-handwriting" style={{fontFamily: 'cursive'}}>
                    "My specialty is bridging the gap between <span className="font-bold underline decoration-wavy decoration-secondary">complex AI models</span> and <span className="font-bold underline decoration-wavy decoration-secondary">human experience</span>."
                </p>
                
                <p className="text-lg md:text-xl text-ink/90 leading-relaxed font-sans">
                   From computer vision systems detecting threats in X-rays to AI-powered ATS systems, I build products that solve real problems in the wild.
                </p>
            </div>

            {/* Visual Timeline / Stats - Field Notes Style */}
            <div ref={timelineRef} className="space-y-8 relative">
                 {/* Connecting Line */}
                <div className="absolute left-8 top-10 bottom-10 w-1 bg-ink/20 bg-dashed border-l-2 border-dashed border-ink/30 -z-10"></div>

                <div className="relative pl-4">
                    <div className="p-6 bg-white border-2 border-ink shadow-hard transform hover:-rotate-1 hover:shadow-none transition-all duration-300 relative">
                        {/* Tape */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-yellow-100/90 rotate-2 border-l border-r border-white/50 backdrop-blur-sm shadow-sm"></div>
                        <h3 className="text-2xl font-bold font-heading text-ink mb-2">Data Science Roots</h3>
                        <p className="text-ink/70 font-bold font-mono text-sm">CSV Analysis • Visualization • Python & Streamlit</p>
                    </div>
                </div>

                <div className="relative pl-4 translate-x-4">
                    <div className="p-6 bg-white border-2 border-ink shadow-hard transform hover:-rotate-1 hover:shadow-none transition-all duration-300 relative">
                        {/* Tape */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-yellow-100/90 -rotate-1 border-l border-r border-white/50 backdrop-blur-sm shadow-sm"></div>
                        <h3 className="text-2xl font-bold font-heading text-ink mb-2">AI Product Development</h3>
                        <p className="text-ink/70 font-bold font-mono text-sm">Gemini API • NLP • Computer Vision</p>
                    </div>
                </div>

                <div className="relative pl-4 translate-x-8">
                    <div className="p-6 bg-white border-2 border-ink shadow-hard transform hover:-rotate-1 hover:shadow-none transition-all duration-300 relative">
                        {/* Tape */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-yellow-100/90 rotate-3 border-l border-r border-white/50 backdrop-blur-sm shadow-sm"></div>
                        <h3 className="text-2xl font-bold font-heading text-ink mb-2">Full Stack Engineering</h3>
                        <p className="text-ink/70 font-bold font-mono text-sm">ReactJS • Flask (REST APIs) • MongoDB</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;