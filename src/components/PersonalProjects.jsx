import { useRef } from 'react';
import campfireIll from '../assets/campfire.png';

const projects = [
  {
    title: "Village Festival Sharing App",
    description: "A community-driven app for sharing village festival event details, expenses, and image galleries.",
    stack: ["React", "Firebase", "Gallery"],
    url: "https://kpl-festivals.vercel.app/",
    tags: "Community App",
    img: "https://placehold.co/600x400/1e293b/FFFFFF/png?text=Festival+App+UI" 
  },
  {
    title: "ShopSync – Multi-tenant Business App",
    description: "Inventory and worker management SaaS for small businesses. Features dashboards, graphs, and multi-tenant architecture.",
    stack: ["React", "Node.js", "MongoDB", "Charts.js"],
    url: "https://shopsync-five.vercel.app/",
    tags: "SaaS Product",
    img: "https://placehold.co/600x400/3b82f6/FFFFFF/png?text=ShopSync+Dashboard"
  }
];

const PersonalProjects = () => {
  return (
    <div className="py-20 md:py-32 bg-paper relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-0 right-0 w-64 h-64 border-l-2 border-b-2 border-ink rounded-bl-[100px] bg-accent/10 pointer-events-none"></div>

       <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-2 border-ink pb-4 relative">
            <div>
              <div className="flex items-center gap-4 mb-2">
                 <h2 className="text-3xl md:text-5xl font-heading font-bold text-ink">
                    Personal Projects
                 </h2>
                 {/* Campfire Stamp */}
                 <div className="w-16 h-16 md:w-24 md:h-24 opacity-80 mix-blend-multiply flex-shrink-0 transform rotate-6">
                    <img src={campfireIll} alt="Campfire" className="w-full h-full object-contain filter contrast-125" />
                 </div>
              </div>
              <p className="text-ink/60 font-heading text-xl rotate-1 ml-2">
                ( Campfire Stories & Night Hacks )
              </p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
                <div key={index} className="group relative h-[400px]">
                    <a 
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative block h-full w-full bg-white border-2 border-ink shadow-hard transition-all duration-300 group-hover:translate-x-[4px] group-hover:translate-y-[4px] group-hover:shadow-none"
                    >
                        {/* Hover Overlay - Color Fill */}
                        <div className="absolute inset-0 bg-secondary/10 z-0 transition-opacity opacity-0 group-hover:opacity-100"></div>

                        <div className="absolute inset-0 p-8 flex flex-col z-10">
                            <div className="flex justify-between items-start mb-6">
                                <span className="px-3 py-1 text-xs font-bold font-heading uppercase tracking-wider bg-accent border-2 border-ink text-ink shadow-hard-sm transform -rotate-2">
                                    {project.tags}
                                </span>
                                <div className="p-2 bg-white border-2 border-ink text-ink rounded-full shadow-hard-sm group-hover:bg-primary group-hover:text-white transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                </div>
                            </div>

                            <h3 className="text-3xl font-bold font-heading text-ink mb-4 group-hover:underline decoration-wavy decoration-primary">
                                {project.title}
                            </h3>
                            
                            <p className="text-ink/80 mb-8 leading-relaxed font-sans text-lg">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.stack.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 text-sm font-bold rounded-lg bg-paper border-2 border-ink text-ink">
                                        #{tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </a>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalProjects;
