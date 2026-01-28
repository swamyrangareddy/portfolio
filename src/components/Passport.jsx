import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import magicBus from '../assets/magic_bus.png';

const pages = [
  {
    title: "The Traveler",
    type: "Personal ID",
    content: (
      <div className="space-y-4">
        <div className="w-32 h-32 bg-ink/5 watercolor-border mx-auto flex items-center justify-center overflow-hidden">
             <img src={magicBus} alt="Profile" className="w-24 opacity-50 grayscale" />
        </div>
        <div className="text-center space-y-1">
          <p className="text-xs font-heading font-black opacity-40 uppercase">Surname / Nom</p>
          <p className="text-xl font-heading font-bold">MUTHUMULA</p>
          <p className="text-xs font-heading font-black opacity-40 uppercase mt-2">Given Names / Prénoms</p>
          <p className="text-xl font-heading font-bold">SWAMYRANGAREDDY</p>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-4 text-center border-t border-ink/5">
             <div>
                <p className="text-[10px] font-heading font-black opacity-40 uppercase">Nationality</p>
                <p className="font-bold">Indian</p>
             </div>
             <div>
                <p className="text-[10px] font-heading font-black opacity-40 uppercase">Specialty</p>
                <p className="font-bold text-wc-blue">AI/ML</p>
             </div>
        </div>
      </div>
    )
  },
  {
    title: "Visa: Data Analytics",
    type: "Entry Permit",
    content: (
      <div className="relative h-full flex flex-col justify-center">
        <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-wc-teal/30 rounded-full flex items-center justify-center -rotate-12">
            <span className="text-wc-teal font-black text-xs text-center leading-tight">ENTRY<br/>GRANTED<br/>2021</span>
        </div>
        <div className="space-y-4">
             <h4 className="text-xl md:text-2xl font-heading font-black text-ink/80">The Foundation</h4>
             <p className="text-base text-ink/60 font-sans italic">"Mapping thousands of data points into actionable insights. Mastered the art of visualization and structural analysis."</p>
             <ul className="text-sm space-y-2 font-bold text-ink/70">
                <li>• Python / Pandas Mastery</li>
                <li>• SQL Deep Diving</li>
                <li>• Tableau Dashboarding</li>
             </ul>
        </div>
      </div>
    )
  },
  {
    title: "Visa: Deep Learning",
    type: "Advanced Access",
    content: (
      <div className="relative h-full flex flex-col justify-center">
         <div className="absolute -bottom-4 -left-4 w-24 h-24 border-4 border-wc-rose/30 flex items-center justify-center rotate-12">
            <span className="text-wc-rose font-black text-xs text-center leading-tight">BRAIN<br/>MAPPED<br/>2023</span>
        </div>
        <div className="space-y-4">
             <h4 className="text-xl md:text-2xl font-heading font-black text-ink/80">Neural Frontiers</h4>
             <p className="text-base text-ink/60 font-sans italic">"Detecting anomalies in the invisible. Built systems that see what the human eye misses."</p>
             <ul className="text-sm space-y-2 font-bold text-ink/70">
                <li>• Computer Vision / CNNs</li>
                <li>• Gemini / LLM Integration</li>
                <li>• PyTorch Workflows</li>
             </ul>
        </div>
      </div>
    )
  }
];

const Passport = ({ id }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setDirection(1);
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <div id={id} className="relative py-20 flex flex-col items-center">
      <div className="mb-6 text-center">
         <h2 className="text-3xl md:text-4xl font-heading font-black text-ink mb-1">Technical Passport</h2>
         <p className="text-base text-ink/60 font-sans font-bold">A journey through technologies and milestones</p>
      </div>

      <div className="relative w-full max-w-4xl aspect-[4/3] md:aspect-[16/9] flex items-center justify-center">
        {/* Passport Cover / Base */}
        <div className="absolute inset-0 bg-ink/5 watercolor-border rounded-[2rem] -z-10 shadow-2xl skew-x-1"></div>
        
        <div className="w-full h-full grid grid-cols-2 bg-white/60 backdrop-blur-md rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-ink/10 perspective-1000">
             
             {/* Left Page (Static Backdrop) */}
             <div className="relative p-8 md:p-12 border-r-2 border-ink/5 flex flex-col bg-[#fdfaf6]">
                  <div className="absolute top-4 left-6 text-[8px] font-black opacity-30 select-none">OFFICIAL TRAVEL DOCUMENT</div>
                  <div className="h-full flex flex-col">
                      <div className="flex justify-between items-start mb-10">
                           <span className="text-3xl">🇮🇳</span>
                           <div className="text-right">
                               <p className="font-heading font-black text-xl">PASSPORT</p>
                               <p className="text-[10px] font-black opacity-40">REPUPLIC OF INDIA</p>
                           </div>
                      </div>
                      
                      {/* Left Page Changes based on context (Fixed for now) */}
                      <div className="mt-autop-6 bg-wc-blue/5 watercolor-border rotate-1">
                           <p className="text-xs font-bold leading-relaxed opacity-60">"The bearer of this passport is authorized to map unknown territories of technology and deploy AI models in the wild."</p>
                      </div>
                  </div>
             </div>

             {/* Right Page (The Animated Active Page) */}
             <div className="relative p-8 md:p-12 overflow-hidden bg-[#faf7f2]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage}
                        initial={{ rotateY: direction > 0 ? 90 : -90, opacity: 0 }}
                        animate={{ rotateY: 0, opacity: 1 }}
                        exit={{ rotateY: direction > 0 ? -90 : 90, opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="w-full h-full"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <span className="text-[10px] font-black opacity-40 uppercase tracking-widest">{pages[currentPage].type}</span>
                            <span className="text-2xl font-heading font-black text-wc-blue/20">P-{currentPage + 1}</span>
                        </div>
                        
                        <div className="h-full">
                            {pages[currentPage].content}
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="absolute bottom-6 right-8 flex gap-4">
                    <button 
                         onClick={prevPage}
                         disabled={currentPage === 0}
                         className="w-10 h-10 flex items-center justify-center bg-white border-2 border-ink/10 shadow-lg rounded-full disabled:opacity-30 hover:bg-wc-rose hover:text-white transition-all transform hover:-rotate-12"
                    >
                        &larr;
                    </button>
                    <button 
                         onClick={nextPage}
                         disabled={currentPage === pages.length - 1}
                         className="w-10 h-10 flex items-center justify-center bg-white border-2 border-ink/10 shadow-lg rounded-full disabled:opacity-30 hover:bg-wc-blue hover:text-white transition-all transform hover:rotate-12"
                    >
                        &rarr;
                    </button>
                </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Passport;
