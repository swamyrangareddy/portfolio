import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitText from './SplitText';
import magicBus from '../assets/magic_bus.png';


const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const buttonsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro Animation
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(heroRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5 }
      )
      .fromTo(textRef.current.querySelectorAll('.char'), // Animate SplitText chars if they exist
         { y: 20, opacity: 0 },
         { y: 0, opacity: 1, stagger: 0.05, duration: 0.5 },
         "-=1.0"
      )
      .fromTo(textRef.current.children,
        { y: 100, opacity: 0, skewY: 10 },
        { y: 0, opacity: 1, skewY: 0, duration: 1.2, stagger: 0.15 }
      )
      .fromTo(subRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 }, 
        "-=0.8"
      )
      .fromTo(ctaRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2 },
        "-=0.8"
      )
      .fromTo(".magic-bus", 
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5, ease: "back.out(1.2)" },
        "-=1.2"
      );

      // Magnetic Buttons Effect
      buttonsRef.current.forEach((btn) => {
        if (!btn) return;
        
        btn.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          gsap.to(btn, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.4)'
          });
        });
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const addToButtonsRef = (el) => {
    if (el && !buttonsRef.current.includes(el)) {
      buttonsRef.current.push(el);
    }
  };

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-paper"
    >
      {/* Background Elements - Doodles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         {/* Dot Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#18181b_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"></div>
        
        {/* Abstract Doodle Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-light/30 rounded-full border-2 border-ink animate-pulse" style={{borderRadius: '63% 37% 39% 61% / 44% 56% 44% 56%'}}></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary-light/30 border-2 border-ink" style={{borderRadius: '41% 59% 41% 59% / 54% 38% 62% 46%'}}></div>
      </div>

      {/* Background Elements - Doodles */}
      <div className="container  mx-auto px-4 z-10 text-center relative">
        <div ref={textRef} className="mb-8 relative inline-block">
          {/* Highlighter effect behind title */}
          <div className="absolute -inset-2 bg-accent/40 w-full  transform -rotate-1 skew-x-3 rounded-lg -z-10 border-2 border-ink"></div>
          
          <p className="text-xl md:text-2xl font-handwriting text-ink/80 mb-4 transform -rotate-2" style={{fontFamily: 'cursive'}}>
            Hi there! I'm <span className="font-bold text-primary-dark underline decoration-wavy">Swamyrangareddy Muthumula</span>
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight text-ink transform -rotate-2">
            <span className="block mb-2">I build</span> 
            <span className="text-primary-dark underline decoration-wavy decoration-2 inline-block">
                <SplitText>AI Products</SplitText>
            </span>
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-ink mt-4 transform rotate-1">
             that make an <span className="bg-secondary px-2 border-2 border-ink text-white inline-block transform -rotate-2 shadow-hard-sm">
                <SplitText delay={0.5}>Impact!</SplitText>
             </span>
          </h1>
        </div>

        <p ref={subRef} className="text-xl md:text-2xl text-ink/80 mb-12 font-sans max-w-2xl mx-auto leading-relaxed border-2 border-ink p-6 bg-white shadow-hard rotate-1 relative z-20">
          Data Scientist | Full Stack AI Developer | Startup Builder
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-8 justify-center items-center relative z-20">
          <a 
            href="#company-projects"
            ref={addToButtonsRef}
            className="group px-8 py-4 bg-primary text-white border-2 border-ink rounded-lg font-bold text-xl transition-all shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            check_my_work()
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            ref={addToButtonsRef}
            className="group px-8 py-4 bg-white text-ink border-2 border-ink rounded-lg font-bold text-xl transition-all shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
             Download Resume &rarr;
          </a>
        </div>

        {/* Decorative Quote Stamp - Top Left */}
        <div className="hidden lg:block absolute top-10 left-10 w-64 p-4 bg-yellow-100 border-2 border-ink shadow-hard transform -rotate-3 z-0 opacity-80 pointer-events-none sticky-note">
            <p className="font-heading text-ink text-lg leading-tight">
                "The Core of Man's Spirit comes from New Experiences"
            </p>
            <p className="text-xs font-bold text-ink/60 mt-2 text-right uppercase">- Alexander Supertramp</p>
        </div>

        {/* Decorative Magic Bus - Absolute Positioned */}
        <div className="hidden lg:block absolute bottom-0 right-0 w-64 h-64 opacity-80 transform rotate-[15deg] translate-y-12 translate-x-12 z-10 magic-bus pointer-events-none">
            <img 
                 src={magicBus} 
                 alt="Magic Bus 142" 
                 className="w-full h-full object-contain filter drop-shadow-[4px_4px_0px_rgba(24,24,27,0.5)]"
            />
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
         <span className="text-ink font-heading text-xl">Scroll Down ↓</span>
      </div>
    </section>
  );
};

export default Hero;
