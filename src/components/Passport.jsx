import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import magicBus from '../assets/magic_bus.png';
import { 
  SiPython, SiPandas, SiPostgresql, SiPlotly, SiPytorch, SiGoogle, SiOpencv, SiReact 
} from 'react-icons/si';
import { FaDatabase, FaBrain, FaRobot, FaTable } from 'react-icons/fa';

const TechTag = ({ name, color = 'bg-wc-blue' }) => {
  const getSkillIcon = (skill) => {
    const s = skill.toLowerCase();
    if (s.includes('python')) return <SiPython className="text-[#3776AB]" />;
    if (s.includes('pandas')) return <SiPandas className="text-[#150458]" />;
    if (s.includes('sql') || s.includes('postgres')) return <SiPostgresql className="text-[#336791]" />;
    if (s.includes('tableau') || s.includes('chart') || s.includes('plot')) return <SiPlotly className="text-[#3F4F75]" />;
    if (s.includes('vision') || s.includes('opencv')) return <SiOpencv className="text-[#5C3EE8]" />;
    if (s.includes('gemini') || s.includes('llm') || s.includes('google')) return <SiGoogle className="text-[#4285F4]" />;
    if (s.includes('pytorch')) return <SiPytorch className="text-[#EE4C2C]" />;
    if (s.includes('react')) return <SiReact className="text-[#61DAFB]" />;
    if (s.includes('neural') || s.includes('brain') || s.includes('cnn')) return <FaBrain className="text-purple-500" />;
    return <FaDatabase className="text-slate-400" />;
  };

  const getSkillColor = (skill) => {
    const s = skill.toLowerCase();
    if (s.includes('python')) return 'bg-wc-yellow';
    if (s.includes('pandas') || s.includes('sql') || s.includes('postgres')) return 'bg-wc-teal';
    if (s.includes('vision') || s.includes('gemini') || s.includes('ai') || s.includes('cnn')) return 'bg-wc-rose';
    if (s.includes('pytorch')) return 'bg-wc-violet';
    return 'bg-wc-blue';
  };

  const colorClass = getSkillColor(name);

  return (
    <span className="relative inline-block group/tag mx-1 my-1">
      <span className="relative z-10 flex items-center gap-1.5 text-[9px] font-black font-heading text-ink px-2.5 py-1 uppercase tracking-tight">
          <span className="text-xs">{getSkillIcon(name)}</span>
          {name}
      </span>
      <span className={`absolute inset-0 ${colorClass}/20 wc-wobbly-bg transform rotate-1 group-hover/tag:scale-110 transition-transform`}></span>
    </span>
  );
};

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
            <span className="text-wc-teal font-black text-xs text-center leading-tight">ENTRY<br/>GRANTED<br/>2022</span>
        </div>
        <div className="space-y-4">
             <h4 className="text-xl md:text-2xl font-heading font-black text-ink/80">The Foundation</h4>
             <p className="text-base text-ink/60 font-sans italic">"Mapping thousands of data points into actionable insights. Mastered the art of visualization and structural analysis."</p>
             <div className="flex flex-wrap pt-2">
                <TechTag name="Python / Pandas" />
                <TechTag name="SQL" />
                <TechTag name="Tableau" />
                <TechTag name="Plotly" />
             </div>
        </div>
      </div>
    )
  },
  {
    title: "Visa: Deep Learning",
    type: "Advanced Access",
    content: (
      <div className="relative h-full flex flex-col justify-center">
         <div className="absolute -top-8 -right-4 w-24 h-24 border-4 border-wc-rose/30 flex items-center justify-center rotate-12">
            <span className="text-wc-rose font-black text-xs text-center leading-tight">BRAIN<br/>MAPPED<br/>2023</span>
        </div>
        <div className="space-y-4">
             <img src={magicBus} alt="Profile" className="w-24 opacity-50 grayscale mx-auto" />
             <h4 className="text-xl md:text-2xl font-heading font-black text-ink/80">Neural Frontiers</h4>
             <p className="text-base text-ink/60 font-sans italic">"Detecting anomalies in the invisible. Built systems that see what the human eye misses."</p>
             <div className="flex flex-wrap pt-2 justify-center">
                <TechTag name="Computer Vision" />
                <TechTag name="CNNs" />
                <TechTag name="Gemini" />
                <TechTag name="LLMs" />
                <TechTag name="PyTorch" />
             </div>
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

      <div className="relative w-full max-w-4xl min-h-[500px] md:aspect-[16/9] flex items-center justify-center px-4">
        {/* Passport Cover / Base */}
        <div className="absolute inset-0 bg-ink/5 watercolor-border rounded-[1.5rem] md:rounded-[2rem] -z-10 shadow-2xl skew-x-1"></div>
        
        <div className="w-full h-full flex flex-col md:grid md:grid-cols-2 bg-white/60 backdrop-blur-md rounded-[1.2rem] md:rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-ink/10 md:perspective-1000">
             
             {/* Left Page (Identity Page / Info) */}
             <div className="relative p-6 md:p-12 border-b-2 md:border-b-0 md:border-r-2 border-ink/5 flex flex-col bg-[#fdfaf6]">
                  <div className="absolute top-3 left-4 md:top-4 md:left-6 text-[7px] md:text-[8px] font-black opacity-30 select-none tracking-widest">OFFICIAL TRAVEL DOCUMENT</div>
                  <div className="h-full flex flex-col">
                      <div className="flex justify-between items-start mb-6 md:mb-10 mt-2 md:mt-0">
                           <span className="text-2xl md:text-3xl">🇮🇳</span>
                           <div className="text-right">
                               <p className="font-heading font-black text-lg md:text-xl leading-none">PASSPORT</p>
                               <p className="text-[8px] md:text-[10px] font-black opacity-40 uppercase">Republic of India</p>
                           </div>
                      </div>
                      
                      <div className="mt-auto p-4 md:p-6 bg-wc-blue/5 rounded-xl border border-wc-blue/10">
                           <p className="text-sm md:text-xl font-bold leading-relaxed opacity-70 italic font-sans italic">
                             "The bearer of this passport is authorized to map unknown territories of technology and deploy AI models in the wild."
                           </p>
                      </div>
                  </div>
             </div>

             {/* Right Page (The Animated Active Page) */}
             <div className="relative p-6 md:p-12 overflow-hidden bg-[#faf7f2] min-h-[400px] md:min-h-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage}
                        initial={{ rotateY: direction > 0 ? 80 : -80, opacity: 0 }}
                        animate={{ rotateY: 0, opacity: 1 }}
                        exit={{ rotateY: direction > 0 ? -80 : 80, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                        className="w-full h-full"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <span className="text-[9px] md:text-[10px] font-black opacity-40 uppercase tracking-widest">{pages[currentPage].type}</span>
                            <span className="text-xl md:text-2xl font-heading font-black text-wc-blue/20">P-{currentPage + 1}</span>
                        </div>
                        
                        <div className="h-full pb-16 md:pb-0">
                            {pages[currentPage].content}
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons - Adjusted for mobile position */}
                <div className="absolute bottom-6 right-6 md:right-8 flex gap-3 md:gap-4 z-20">
                    <button 
                         onClick={prevPage}
                         disabled={currentPage === 0}
                         className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-white border-2 border-ink shadow-hard-sm rounded-full disabled:opacity-30 disabled:grayscale hover:bg-wc-rose hover:text-white transition-all transform hover:-rotate-12 active:scale-90"
                    >
                        &larr;
                    </button>
                    <button 
                         onClick={nextPage}
                         disabled={currentPage === pages.length - 1}
                         className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-white border-2 border-ink shadow-hard-sm rounded-full disabled:opacity-30 disabled:grayscale hover:bg-wc-blue hover:text-white transition-all transform hover:rotate-12 active:scale-90"
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
