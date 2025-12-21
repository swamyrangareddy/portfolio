import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGlobeAmericas, FaPassport, FaStamp, FaCode, FaCoffee } from 'react-icons/fa';
import { SiReact, SiPython, SiTensorflow } from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const Passport = () => {
  const containerRef = useRef(null);
  const passportRef = useRef(null);

  useEffect(() => {
    const el = passportRef.current;
    
    gsap.fromTo(el,
      { rotationY: -15, rotationX: 10, scale: 0.9, opacity: 0 },
      {
        rotationY: 0,
        rotationX: 0,
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="py-20 bg-paper relative overflow-hidden flex justify-center items-center perspective-1000">
      {/* Background World Map Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
         <FaGlobeAmericas className="w-full h-full text-ink animate-spin-slow" style={{animationDuration: '60s'}} />
      </div>

      <div ref={passportRef} className="relative w-full max-w-4xl mx-4 bg-[#f4e4bc] border-2 border-[#8b5a2b] rounded-lg shadow-[10px_10px_20px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col md:flex-row" style={{backgroundImage: 'repeating-linear-gradient(#f4e4bc 0px, #f4e4bc 24px, #e8dcb5 25px)'}}>
        
        {/* Left Page (Identity) */}
        <div className="w-full md:w-1/2 p-8 border-b-2 md:border-b-0 md:border-r-2 border-[#8b5a2b]/30 relative flex flex-col items-center text-center">
            {/* Photo Area */}
            <div className="w-32 h-40 bg-gray-200 border-4 border-white shadow-md rotate-[-2deg] mb-6 relative overflow-hidden">
                <img src="https://placehold.co/400x500/18181b/ffffff/png?text=Explorer" alt="Profile" className="w-full h-full object-cover grayscale contrast-125" />
                {/* Stamp over photo */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 border-4 border-red-500/50 rounded-full flex items-center justify-center rotate-[-20deg]">
                    <span className="text-red-500/50 text-[10px] font-bold uppercase">Authorized</span>
                </div>
            </div>

            <h3 className="font-heading text-3xl font-bold text-[#8b5a2b] uppercase tracking-widest mb-1">Swamyrangareddy</h3>
            <p className="font-sans text-ink/60 text-sm uppercase tracking-widest mb-6">Full Stack AI Developer</p>

            <div className="w-full text-left space-y-2 font-mono text-sm text-ink/80">
                <div className="flex justify-between border-b border-[#8b5a2b]/20 pb-1">
                    <span>Nationality:</span>
                    <span className="font-bold">Digital Nomad</span>
                </div>
                <div className="flex justify-between border-b border-[#8b5a2b]/20 pb-1">
                    <span>DOB:</span>
                    <span className="font-bold">Est. 2023</span>
                </div>
                <div className="flex justify-between border-b border-[#8b5a2b]/20 pb-1">
                    <span>Code:</span>
                    <span className="font-bold">JS / PY / AI</span>
                </div>
                <div className="flex justify-between border-b border-[#8b5a2b]/20 pb-1">
                    <span>Issued By:</span>
                    <span className="font-bold">Muthumula HQ</span>
                </div>
            </div>
            
             {/* Signature */}
            <div className="mt-8 font-heading text-2xl text-ink/70 -rotate-2">
                Swamy R. Muthumula
            </div>
        </div>

        {/* Right Page (Stamps & Stats) */}
        <div className="w-full md:w-1/2 p-8 relative overflow-hidden bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.5)_0%,transparent_100%)]">
            <h4 className="font-heading text-xl text-[#8b5a2b]/50 uppercase tracking-widest text-center mb-8 border-b border-[#8b5a2b]/20 pb-2">Expedition Visas</h4>

            <div className="grid grid-cols-2 gap-6">
                {/* Stamp 1 */}
                <div className="group relative w-24 h-24 border-4 border-green-600/60 rounded-full flex flex-col items-center justify-center p-2 rotate-12 hover:scale-110 transition-transform cursor-default">
                    <FaStamp className="text-green-600/40 text-2xl mb-1" />
                    <span className="text-green-600/80 font-bold text-xs uppercase text-center leading-tight">Project<br/>Shipped</span>
                    <span className="absolute bottom-2 text-[8px] text-green-600/60 font-mono">APPROVED</span>
                </div>

                {/* Stamp 2 */}
                <div className="group relative w-28 h-20 border-4 border-blue-600/50 rounded-lg flex flex-col items-center justify-center p-2 -rotate-6 hover:scale-110 transition-transform cursor-default ml-auto">
                    <FaCode className="text-blue-600/40 text-2xl mb-1" />
                    <span className="text-blue-600/80 font-bold text-xs uppercase text-center leading-tight">Full Stack<br/>Cleared</span>
                </div>

                {/* Stamp 3 */}
                <div className="group relative w-24 h-24 border-double border-4 border-red-500/60 rounded-full flex flex-col items-center justify-center p-2 rotate-[-10deg] hover:scale-110 transition-transform cursor-default mt-4">
                    <SiReact className="text-red-500/40 text-3xl" />
                    <span className="text-red-500/60 font-bold text-[10px] uppercase mt-1">Class A</span>
                </div>

                 {/* Stamp 4 */}
                 <div className="group relative w-28 h-20 border-dashed border-2 border-purple-600/60 rounded flex flex-col items-center justify-center p-2 rotate-3 hover:scale-110 transition-transform cursor-default mt-2">
                    <div className="flex gap-2">
                        <SiPython className="text-purple-600/40 text-xl" />
                        <SiTensorflow className="text-purple-600/40 text-xl" />
                    </div>
                    <span className="text-purple-600/80 font-bold text-xs uppercase text-center leading-tight mt-1">AI/ML<br/>Certified</span>
                </div>
            </div>

            {/* Fun Stat Stamp */}
            <div className="absolute bottom-4 right-4 text-[#8b5a2b]/40 rotate-[-15deg]">
                <div className="flex items-center gap-1 font-heading text-sm">
                    <FaCoffee /> Infinite Refills
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Passport;
