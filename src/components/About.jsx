import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import magicBus from '../assets/magic_bus.png';

gsap.registerPlugin(ScrollTrigger);

const About = ({ id }) => {
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
    <div id={id} className="py-20 md:py-32 transition-colors duration-300 relative overflow-hidden">
      {/* Background watercolor splashes */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-wc-blue rounded-full watercolor-splash opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-wc-rose opacity-10 rounded-full watercolor-splash pointer-events-none"></div>

      {/* Magic Bus Stamp - Watermark Style (Left) */}
      <div className="absolute top-24 left-0 md:left-4 w-48 h-48 md:w-64 md:h-64 opacity-30 mix-blend-multiply -rotate-12 pointer-events-none select-none z-0">
          <img src={magicBus} alt="Magic Bus" className="w-full h-full object-contain contrast-125 sepia-[.3]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-12 text-ink flex items-center gap-4 transform -rotate-1">
          <span className="w-10 h-1.5 bg-wc-blue rounded-full watercolor-border"></span>
          The Journal
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Bio Text - Journal Entry Style */}
            <div ref={textRef} className="space-y-12 relative group p-12 lg:p-20">
                {/* Journal Page Background - Watercolor Style */}
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm watercolor-border shadow-2xl rounded-2xl wc-paper-stack -z-10"></div>
                
                <div className="relative">
                     {/* "Entry #142" Date Stamp */}
                    <span className="absolute -top-16 -left-8 text-black font-heading font-bold text-2xl -rotate-6 px-6 py-2 opacity-100 wc-wobbly-bg bg-wc-rose shadow-xl">
                        ENTRY #142
                    </span>
                    
                     <div className="text-3xl md:text-5xl text-ink leading-[1.1] font-heading font-black">
                        I'm <span className="relative inline-block">
                            <span className="relative z-10 italic">Swamyrangareddy Muthumula</span>
                            <span className="absolute inset-x-0 bottom-2 h-3 bg-wc-blue opacity-100 -rotate-1 rounded-sm wc-wobbly-bg"></span>
                        </span>
                        <div className="mt-4 text-2xl md:text-4xl font-sans font-bold text-ink">
                            a Data Scientist and Full Stack AI Developer mapping the unknown territories of tech.
                        </div>
                    </div>
                </div>
                
                <div className="space-y-8">
                    <p className="text-2xl md:text-3xl text-ink leading-snug font-heading italic text-center py-4">
                        "My specialty is bridging the gap between <span className="relative inline-block px-1"><span className="relative z-10 px-2 rounded-sm bg-wc-blue text-white shadow-lg">complex AI models</span></span> and <span className="relative inline-block px-1"><span className="relative z-10 px-2 rounded-sm bg-wc-rose text-ink shadow-lg">human experience</span></span>."
                    </p>
                    
                    <p className="text-xl md:text-2xl text-ink leading-relaxed font-sans font-semibold relative border-t-2 border-ink/10 pt-6">
                       From computer vision systems detecting threats in X-rays to AI-powered ATS systems, I build products that solve real problems in the wild.
                       {/* Splotch underline */}
                       <span className="absolute -bottom-3 left-0 w-48 h-2 bg-wc-yellow opacity-100 rounded-full wc-wobbly-bg shadow-md"></span>
                    </p>
                </div>
            </div>

            {/* Visual Timeline / Stats - Field Notes Style */}
            <div ref={timelineRef} className="space-y-16 relative px-6">
                 {/* Connecting Line - Watercolor Dabbed Style */}
                <div className="absolute left-14 top-10 bottom-10 w-1 bg-ink/10 border-l-2 border-dashed border-ink/20 -z-10"></div>

                <div className="relative pl-12">
                    <div className="p-8 bg-white/95 backdrop-blur-sm watercolor-border shadow-xl transform rotate-1 hover:rotate-0 transition-all duration-300 relative border-2 border-ink/5 rounded-2xl wc-paper-stack">
                        <div className="absolute -left-14 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-wc-blue shadow-lg watercolor-border border-2 border-white/50"></div>
                        <h3 className="text-2xl md:text-3xl font-bold font-heading text-ink mb-3 relative inline-block">
                           Data Science Roots
                           <span className="absolute bottom-1 left-0 w-full h-1 bg-wc-blue/30"></span>
                        </h3>
                        <p className="text-ink font-bold font-sans text-base border-t-2 border-ink/10 pt-4 mt-2">CSV Analysis • Visualization • Python & Streamlit</p>
                    </div>
                </div>

                <div className="relative pl-12 translate-x-0 md:translate-x-8">
                    <div className="p-8 bg-white/95 backdrop-blur-sm watercolor-border shadow-xl transform -rotate-1 hover:rotate-0 transition-all duration-300 relative border-2 border-ink/5 rounded-2xl wc-paper-stack">
                        <div className="absolute -left-14 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-wc-rose shadow-lg watercolor-border border-2 border-white/50"></div>
                        <h3 className="text-2xl md:text-3xl font-bold font-heading text-ink mb-3 relative inline-block">
                           AI Product Development
                           <span className="absolute bottom-1 left-0 w-full h-1 bg-wc-rose/30"></span>
                        </h3>
                        <p className="text-ink font-bold font-sans text-base border-t-2 border-ink/10 pt-4 mt-2">Gemini API • NLP • Computer Vision</p>
                    </div>
                </div>

                <div className="relative pl-12 translate-x-0 md:translate-x-16">
                    <div className="p-8 bg-white/95 backdrop-blur-sm watercolor-border shadow-xl transform rotate-1 hover:rotate-0 transition-all duration-300 relative border-2 border-ink/5 rounded-2xl wc-paper-stack">
                        <div className="absolute -left-14 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-wc-teal shadow-lg watercolor-border border-2 border-white/50"></div>
                        <h3 className="text-2xl md:text-3xl font-bold font-heading text-ink mb-3 relative inline-block">
                           Full Stack Engineering
                           <span className="absolute bottom-1 left-0 w-full h-1 bg-wc-teal/30"></span>
                        </h3>
                        <p className="text-ink font-bold font-sans text-base border-t-2 border-ink/10 pt-4 mt-2">ReactJS • Flask (REST APIs) • MongoDB</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;