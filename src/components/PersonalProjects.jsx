import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import campfireIll from '../assets/campfire.png';
import TiltWrapper from './TiltWrapper';

const projects = [
  {
    id: "fest-hub",
    title: "Fest Hub Application",
    description: "A community-driven app for sharing village festival event details, expenses, and image galleries.",
    problem: "Lack of transparency in village festival fund management and no centralized platform to preserve festival memories.",
    solution: "Built a multi-tenant platform with expense tracking dashboards and high-fidelity image galleries for community sharing.",
    impact: "Digitized records for local festivals, improving transparency and creating a lasting digital archive of traditions.",
    stack: ["React.js", "Supabase", "PostgreSQL", "Gallery", "Charts", "Multi-tenant"],
    url: "https://fest-hub-livid.vercel.app/",
    tags: "Community App",
    img: "https://placehold.co/600x400/1e293b/FFFFFF/png?text=Festival+App+UI" 
  },
  {
    id: "shop-sync",
    title: "ShopSync – Business SaaS",
    description: "Inventory and worker management SaaS for small businesses. Features dashboards, graphs, and multi-tenant architecture.",
    problem: "Small businesses struggle with paper-based tracking and fragmented inventory data.",
    solution: "Developed an all-in-one SaaS with inventory dashboards, worker management, and direct WhatsApp reporting.",
    impact: "Streamlined operations for 5+ local businesses, reducing administrative time by 40%.",
    stack: ["React.js", "Supabase", "PostgreSQL", "WhatsApp API", "Invoice Gen", "Dashboards"],
    url: "https://shopsync-three.vercel.app/",
    tags: "SaaS Product",
    img: "https://placehold.co/600x400/3b82f6/FFFFFF/png?text=ShopSync+Dashboard"
  }
];

const PersonalProjects = ({ id }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const closeModal = () => setSelectedProject(null);

  return (
    <div id={id} className="py-20 md:py-32 relative overflow-hidden bg-white/40 dark:bg-zinc-950/40">
       {/* Background Decoration */}
       <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-wc-violet rounded-full watercolor-splash opacity-10 pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-wc-teal rounded-full watercolor-splash opacity-10 pointer-events-none"></div>

       <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-2 border-ink/10 dark:border-white/10 pb-4 relative">
            <div>
              <div className="flex items-center gap-4 mb-2">
                 <h2 className="text-2xl md:text-5xl font-heading font-bold text-ink dark:text-zinc-100">
                    Personal Projects
                 </h2>
                 <div className="w-16 h-16 md:w-24 md:h-24 opacity-60 dark:opacity-40 mix-blend-multiply dark:mix-blend-screen flex-shrink-0 transform rotate-6 grayscale">
                    <img src={campfireIll} alt="Campfire" className="w-full h-full object-contain filter contrast-125" />
                 </div>
              </div>
              <p className="hidden md:block text-ink dark:text-zinc-400 font-heading text-xl rotate-1 ml-2 font-medium opacity-80">
                ( Stories of Creation & Midnight Code )
              </p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12">
            {projects.map((project, index) => (
                <TiltWrapper 
                  key={project.id} 
                  className={`group relative min-h-[450px] transition-transform duration-500 hover:scale-[1.02] ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
                >
                    <div 
                        onClick={() => setSelectedProject(project)}
                        className="relative block h-full w-full bg-white dark:bg-zinc-900 shadow-2xl wc-wobbly-bg rounded-2xl overflow-hidden cursor-pointer group"
                    >
                        <div className={`absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity rounded-xl ${index % 2 === 0 ? 'bg-wc-rose' : 'bg-wc-blue'}`}></div>
                        
                        <div className="relative p-8 md:p-12 flex flex-col h-full z-10">
                            <div className="flex justify-between items-start mb-8">
                                <span className="relative inline-block">
                                    <span className="relative z-10 px-6 py-2 text-sm font-bold font-heading uppercase tracking-wider text-wc-yellow dark:text-zinc-100">
                                        {project.tags}
                                    </span>
                                    <span className={`absolute inset-0 ${index % 2 === 0 ? 'bg-wc-rose' : 'bg-wc-blue'} wc-wobbly-bg transform ${index % 2 === 0 ? '-rotate-3' : 'rotate-3'} scale-110 shadow-lg`}></span>
                                </span>
                                
                                <div className="hidden md:block p-3 bg-white/90 dark:bg-zinc-800/90 border-2 border-ink/10 dark:border-white/10 text-ink dark:text-zinc-100 rounded-full shadow-sm group-hover:bg-wc-blue group-hover:text-white transition-colors">
                                    <span className="text-sm font-bold uppercase tracking-tighter">View Story</span>
                                </div>
                            </div>

                            <h3 className="text-2xl md:text-4xl font-bold font-heading text-ink dark:text-zinc-100 mb-6 group-hover:text-wc-blue transition-colors">
                                {project.title}
                            </h3>
                            
                            <p className="text-ink/80 dark:text-zinc-400 text-lg mb-8 leading-relaxed font-sans font-bold border-l-4 border-wc-yellow pl-6">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-x-6 gap-y-4 mt-auto opacity-70 group-hover:opacity-100 transition-opacity">
                                {project.stack.map((tech, i) => (
                                    <span key={i} className="relative inline-block">
                                        <span className="relative z-10 text-sm font-bold font-heading text-ink/60 dark:text-zinc-500">
                                            #{tech}
                                        </span>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </TiltWrapper>
            ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center px-4 py-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-wc-blue/10 dark:bg-black/80 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              className="relative w-full max-w-[95%] lg:w-[1500px] bg-white dark:bg-zinc-900 wc-wobbly-bg rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 z-20 p-4 bg-ink/5 dark:bg-white/5 hover:bg-wc-rose hover:text-white dark:hover:bg-wc-rose rounded-full transition-all font-bold text-ink dark:text-zinc-100 shadow-sm"
              >
                ✕ Close
              </button>

              <div className="p-8 md:p-16 lg:p-20">
                <div className="mb-12">
                  <span className="inline-block px-5 py-2 bg-wc-rose text-white text-xs font-black uppercase tracking-widest rounded-full mb-6 shadow-lg">
                    Project Deep Dive
                  </span>
                  <h2 className="text-4xl md:text-7xl lg:text-8xl font-heading font-black text-ink dark:text-zinc-100 leading-[1.1] tracking-tight">
                    {selectedProject.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                      <div className="bg-white dark:bg-wc-yellow/10 p-8 rounded-2xl border-2 border-dashed border-wc-yellow/30 relative transform -rotate-1 shadow-sm">
                          <h4 className="text-xl font-bold font-heading text-ink dark:text-zinc-100 mb-3 flex items-center gap-2">
                             <span className="w-8 h-8 rounded-full bg-wc-yellow text-ink flex items-center justify-center text-sm">1</span>
                             The Challenge
                          </h4>
                          <p className="text-lg text-ink/80 dark:text-zinc-300 leading-relaxed font-bold font-sans">
                            {selectedProject.problem}
                          </p>
                      </div>
                      
                      <div className="bg-white dark:bg-wc-blue/10 p-8 rounded-2xl border-2 border-dashed border-wc-blue/30 relative transform rotate-1 shadow-sm">
                          <h4 className="text-xl font-bold font-heading text-ink dark:text-zinc-100 mb-3 flex items-center gap-2">
                             <span className="w-8 h-8 rounded-full bg-wc-blue text-white flex items-center justify-center text-sm">2</span>
                             The Build
                          </h4>
                          <p className="text-lg text-ink/80 dark:text-zinc-300 leading-relaxed font-bold font-sans">
                            {selectedProject.solution}
                          </p>
                      </div>

                      <div className="bg-white dark:bg-wc-teal/20 p-8 rounded-2xl border-2 border-dashed border-wc-teal/30 relative transform lg:rotate-1 shadow-sm">
                          <h4 className="text-xl font-bold font-heading text-ink dark:text-zinc-100 mb-3 flex items-center gap-2">
                             <span className="w-8 h-8 rounded-full bg-wc-teal text-white flex items-center justify-center text-sm">3</span>
                             The Result
                          </h4>
                          <p className="text-lg text-ink/80 dark:text-zinc-300 leading-relaxed font-bold font-sans">
                            {selectedProject.impact}
                          </p>
                      </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-12 border-t-2 border-ink/5 dark:border-white/5">
                   <div className="flex flex-wrap gap-3 justify-center lg:justify-start flex-1">
                      {selectedProject.stack.map((tech, i) => (
                        <span key={i} className="px-4 py-2 bg-ink/5 dark:bg-white/5 rounded-lg text-sm font-bold font-heading text-ink dark:text-zinc-300">
                          {tech}
                        </span>
                      ))}
                   </div>
                   
                   <a 
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-12 py-6 bg-wc-blue text-white font-black font-heading text-2xl rounded-2xl overflow-hidden shadow-xl hover:shadow-wc-blue/20 transition-all hover:-translate-y-1 active:scale-95 bg-wc-blue whitespace-nowrap"
                   >
                     <span className="relative z-10 flex items-center gap-3">
                        Visit Live Experience <span>&rarr;</span>
                     </span>
                     <div className="absolute inset-0 bg-wc-rose translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                   </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PersonalProjects;
