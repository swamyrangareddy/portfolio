import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitText from './SplitText';
import magicBus from '../assets/magic_bus.png';


const Hero = ({ id }) => {
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
      id={id}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Elements - Watercolor Splashes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle Paper Texture Overflow (optional, already in body) */}
        
        {/* Watercolor Splashes */}
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-wc-blue rounded-full watercolor-splash opacity-20"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] bg-wc-rose rounded-full watercolor-splash opacity-15"></div>
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-wc-blue rounded-full watercolor-splash opacity-40"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] bg-wc-rose rounded-full watercolor-splash opacity-30"></div>
        <div className="absolute bottom-[-5%] left-[10%] w-[30%] h-[30%] bg-wc-teal rounded-full watercolor-splash opacity-40"></div>
        <div className="absolute bottom-[15%] right-[20%] w-[25%] h-[25%] bg-wc-yellow rounded-full watercolor-splash opacity-20"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10 text-center relative">
        <div ref={textRef} className="mb-10 relative inline-block">
          {/* Watercolor Brush Stroke behind title */}
          <div className="absolute -inset-10 bg-wc-yellow/20 w-full h-full transform -rotate-2 -z-10 blur-3xl"></div>
          
          <p className="text-lg md:text-xl font-heading text-ink mb-4 transform -rotate-1 font-medium">
            Hi there! I'm <span className="relative inline-block px-1">
                <span className="relative z-10 font-bold">Swamyrangareddy Muthumula</span>
                <span className="absolute inset-y-1 -inset-x-2 wc-highlight-rose opacity-40 -rotate-1 rounded-sm"></span>
            </span>
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-ink leading-tight">
            <span className="block">I build</span> 
            <span className="relative inline-block mt-2">
                <span className="relative z-10 italic"><SplitText>AI Products</SplitText></span>
                <span className="absolute inset-x-0 bottom-2 h-4 md:h-8 bg-wc-blue opacity-30 -rotate-2 watercolor-border-varied"></span>
            </span>
          </h1>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-ink mt-6 transform rotate-1">
             that make an <span className="relative inline-block">
                <span className="relative z-10 text-white px-4 py-1"><SplitText delay={0.5}>Impact!</SplitText></span>
                <span className="absolute inset-0 bg-wc-teal watercolor-border-varied -rotate-2 scale-110 shadow-2xl"></span>
             </span>
          </h1>
        </div>

        <div ref={subRef} className="max-w-3xl mx-auto mb-12 px-4 font-bold">
            <p className="text-lg md:text-2xl text-ink font-sans leading-relaxed p-6 md:p-8 bg-transparent shadow-xl rotate-1 relative z-20 wc-wobbly-bg rounded-xl">
                Data Scientist <span className="text-wc-rose mx-2">•</span> Full Stack AI Developer <span className="text-wc-teal mx-2">•</span> Startup Builder
            </p>
        </div>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-20">
          <a 
            href="#company-projects"
            ref={addToButtonsRef}
            className="group px-8 py-4 bg-white text-black border-2 border-ink watercolor-border-varied rounded-xl font-black text-xl transition-all shadow-xl hover:scale-105 hover:bg-black hover:text-white"
          >
            check_my_work()
          </a>
          <a 
            href="#contact" 
            ref={addToButtonsRef}
            className="group px-8 py-4 bg-ink text-white border-2 border-ink watercolor-border-varied rounded-xl font-black text-xl transition-all shadow-xl hover:scale-105 hover:bg-white hover:text-ink"
          >
             Say Hello &rarr;
          </a>
        </div>

        {/* Decorative Quote Stamp - Top Left */}
        <div className="hidden lg:block absolute top-10 left-10 w-64 p-6 bg-wc-violet/20 backdrop-blur-sm wc-wobbly-bg transform -rotate-3 z-0 opacity-100 pointer-events-none shadow-xl">
            <p className="font-heading text-ink text-lg leading-tight font-bold">
                "The Core of Man's Spirit comes from New Experiences"
            </p>
            <p className="text-xs font-bold text-ink/60 mt-2 text-right uppercase">- Alexander Supertramp</p>
        </div>

        {/* Decorative Magic Bus - Absolute Positioned */}
        <div className="hidden lg:block absolute bottom-0 right-0 w-64 h-64 opacity-80 transform rotate-[15deg] translate-y-12 translate-x-12 z-10 magic-bus pointer-events-none">
            <img 
                 src={magicBus} 
                 alt="Magic Bus 142" 
                 className="w-full h-full object-contain filter drop-shadow-[4px_4px_10px_rgba(0,0,0,0.2)]"
            />
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
         <span className="text-ink/60 font-heading text-xl">Scroll Down ↓</span>
      </div>
    </section>
  );
};

export default Hero;
