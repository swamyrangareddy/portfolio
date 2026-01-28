import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SiLinkedin, SiGithub, SiGmail } from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);
import contactIll from '../assets/contact_ill.png';

const Contact = ({ id }) => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(contentRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <div id={id} className="py-20 transition-colors duration-300 relative overflow-hidden">
        {/* Background Watercolor Splashes - Enhanced atmosphere */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-wc-violet rounded-full watercolor-splash opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-wc-rose rounded-full watercolor-splash opacity-15 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div ref={contentRef} className="max-w-2xl mx-auto p-12 border-2 border-ink/5 bg-white/90 backdrop-blur-sm shadow-2xl rotate-1 relative watercolor-border wc-paper-stack rounded-2xl">
            {/* Thumbtack / Pin */}
            <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full z-20 shadow-lg watercolor-border bg-wc-teal`}>
                <div className="absolute inset-1.5 border-2 border-white/30 rounded-full"></div>
            </div>
            
            {/* Mail Illustration - Watercolor Style */}
            <div className="absolute -top-24 -right-12 w-40 h-40 hidden md:block transform rotate-12 hover:scale-110 transition-transform grayscale opacity-40">
               <img src={contactIll} alt="Send Mail" className="w-full h-full object-contain filter drop-shadow-[4px_4px_10px_rgba(0,0,0,0.1)]" />
            </div>

          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 tracking-tight text-ink transform -rotate-2">
            Let's <span className="relative inline-block">
                <span className="relative z-10 text-wc-blue px-3 py-1">Connect</span>
                <span className="absolute inset-0 bg-wc-teal/80 wc-wobbly-bg rotate-2 scale-110"></span>
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-ink mb-10 font-sans max-w-md mx-auto leading-relaxed border-l-4 border-wc-yellow/60 pl-6 font-medium">
            "I'm always looking for new opportunities and interesting projects to work on."
          </p>

          <div className="flex justify-center gap-8 mb-16">
            <a 
              href="https://www.linkedin.com/in/swamyrangareddy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-5 bg-wc-blue/80 border-2 border-ink/5 rounded-full shadow-lg hover:scale-110 hover:bg-wc-white hover:text-black transition-all group watercolor-border"
              aria-label="LinkedIn"
            >
               <SiLinkedin className="w-8 h-8 text-black group-hover:text-white transition-colors" />
            </a>
            <a 
              href="mailto:swamyrangareddy@example.com" 
              className="p-5 bg-wc-rose/80 border-2 border-ink/5 rounded-full shadow-lg hover:scale-110 hover:bg-wc-white hover:text-black transition-all group watercolor-border"
              aria-label="Email"
            >
               <SiGmail className="w-8 h-8 text-black group-hover:text-white transition-colors" />
            </a>
            <a 
              href="https://github.com/swamyrangareddy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-5 bg-wc-yellow/80 border-2 border-ink/5 rounded-full shadow-lg hover:scale-110 hover:bg-wc-white hover:text-black transition-all group watercolor-border"
              aria-label="GitHub"
            >
               <SiGithub className="w-8 h-8 text-black group-hover:text-white transition-colors" />
            </a>
          </div>
           {/* Decorative Quote Stamp - Post-it Style */}
          <div className="hidden lg:block absolute -bottom-10 -left-16 w-56 p-4 bg-wc-yellow/20 border-2 border-ink/5 shadow-xl transform rotate-6 z-20 wc-wobbly-bg rounded-lg backdrop-blur-sm">
               <div className="w-8 h-8 bg-wc-rose/20 rounded-full border-2 border-transparent watercolor-border mx-auto mb-3 opacity-50"></div>
              <p className="font-heading text-ink text-center text-lg leading-tight font-bold">
                  "Happiness Only Real When Shared"
              </p>
          </div>

          <footer className="pt-8 border-t-2 border-ink/5 border-dashed text-ink/40 text-sm font-bold font-sans">
            <p>&copy; {new Date().getFullYear()} Swamyrangareddy Muthumula.</p>
            <p className="mt-2 text-xs font-bold">Hand Coded with &hearts; using React & Tailwind</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Contact;
