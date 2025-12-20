import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SiLinkedin, SiGithub, SiGmail } from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);
import contactIll from '../assets/contact_ill.png';

const Contact = () => {
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
    <div className="py-20 bg-paper transition-colors duration-300 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-ink opacity-10 rotate-1"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1 bg-ink opacity-10 -rotate-1"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div ref={contentRef} className="max-w-2xl mx-auto p-8 border-2 border-ink bg-white shadow-hard rotate-1 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-black rounded-full border-2 border-white z-20"></div>
            
            {/* Mail Illustration */}
            <div className="absolute -top-24 -right-12 w-40 h-40 hidden md:block transform rotate-12 hover:scale-110 transition-transform">
               <img src={contactIll} alt="Send Mail" className="w-full h-full object-contain filter drop-shadow-[4px_4px_0px_rgba(24,24,27,1)]" />
            </div>

          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight text-ink transform -rotate-2">
            Let's <span className="text-white bg-secondary px-2 border-2 border-ink shadow-hard-sm transform rotate-2 inline-block">Connect</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-ink/80 mb-10 font-sans max-w-lg mx-auto leading-relaxed border-l-4 border-ink pl-6 italic">
            "I'm always looking for new opportunities and interesting projects to work on."
          </p>

          {/* Decorative Quote Stamp */}
          <div className="hidden lg:block absolute -bottom-10 -left-20 w-56 p-4 bg-white border-2 border-ink shadow-hard transform rotate-6 z-20" style={{backgroundImage: 'repeating-linear-gradient(#f0f0f0 0px, #f0f0f0 24px, #e5e5e5 25px)'}}>
               <div className="w-8 h-8 bg-red-100 rounded-full border-2 border-ink mx-auto mb-2 opacity-50"></div>
              <p className="font-heading text-ink text-center text-lg leading-tight">
                  "Happiness Only Real When Shared"
              </p>
          </div>

          <div className="flex justify-center gap-8 mb-16">
            <a 
              href="https://www.linkedin.com/in/swamyrangareddy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-white border-2 border-ink rounded-full shadow-hard hover:shadow-none hover:bg-blue-100 hover:translate-x-[2px] hover:translate-y-[2px] transition-all group"
              aria-label="LinkedIn"
            >
              <SiLinkedin className="w-8 h-8 text-ink group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="mailto:swamyrangareddy@example.com" 
              className="p-4 bg-white border-2 border-ink rounded-full shadow-hard hover:shadow-none hover:bg-red-100 hover:translate-x-[2px] hover:translate-y-[2px] transition-all group"
              aria-label="Email"
            >
              <SiGmail className="w-8 h-8 text-ink group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://github.com/swamyrangareddy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-white border-2 border-ink rounded-full shadow-hard hover:shadow-none hover:bg-slate-200 hover:translate-x-[2px] hover:translate-y-[2px] transition-all group"
              aria-label="GitHub"
            >
              <SiGithub className="w-8 h-8 text-ink group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <footer className="pt-8 border-t-2 border-ink border-dashed text-ink/60 text-sm font-bold font-sans">
            <p>&copy; {new Date().getFullYear()} Swamyrangareddy Muthumula.</p>
            <p className="mt-2 text-xs">Hand Coded with &hearts; using React & Tailwind</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Contact;
