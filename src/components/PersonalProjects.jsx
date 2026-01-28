import { useRef } from 'react';
import campfireIll from '../assets/campfire.png';
import TiltWrapper from './TiltWrapper';

const projects = [
  {
    title: "Village Festival Sharing App",
    description: "A community-driven app for sharing village festival event details, expenses, and image galleries.",
    stack: ["React.js", "Supabase", "PostgreSQL","Gallery", "Charts", "Tables", "Multi-tenant Architecture"],
    url: "https://kpl-festivals.vercel.app/",
    tags: "Community App",
    img: "https://placehold.co/600x400/1e293b/FFFFFF/png?text=Festival+App+UI" 
  },
  {
    title: "ShopSync – Multi-tenant Business App",
    description: "Inventory and worker management SaaS for small businesses. Features dashboards, graphs, and multi-tenant architecture.",
    stack: ["React.js", "Supabase", "PostgreSQL","Charts", "Tables", "Expense Tracking", "WhatsApp Sharing", "Invoice Generation", "Multi-tenant Architecture", ],
    url: "https://shopsync-three.vercel.app/",
    tags: "SaaS Product",
    img: "https://placehold.co/600x400/3b82f6/FFFFFF/png?text=ShopSync+Dashboard"
  }
];

const PersonalProjects = ({ id }) => {
  return (
    <div id={id} className="py-20 md:py-32 relative overflow-hidden">
       {/* Background Decoration - Watercolor Splash */}
       <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-wc-violet rounded-full watercolor-splash opacity-10 pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-wc-teal rounded-full watercolor-splash opacity-10 pointer-events-none"></div>

       <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-2 border-ink/10 pb-4 relative">
            <div>
              <div className="flex items-center gap-4 mb-2">
                 <h2 className="text-2xl md:text-4xl font-heading font-bold text-ink">
                    Personal Projects
                 </h2>
                 {/* Campfire Stamp */}
                 <div className="w-16 h-16 md:w-24 md:h-24 opacity-60 mix-blend-multiply flex-shrink-0 transform rotate-6 grayscale">
                    <img src={campfireIll} alt="Campfire" className="w-full h-full object-contain filter contrast-125" />
                 </div>
              </div>
              <p className="text-ink font-heading text-lg rotate-1 ml-2 font-medium">
                ( Campfire Stories & Night Hacks )
              </p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12">
            {projects.map((project, index) => (
                <TiltWrapper 
                  key={index} 
                  className={`group relative min-h-[500px] lg:h-[500px] transition-transform duration-500 hover:scale-[1.02] ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
                >
                    <a 
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative block h-full w-full bg-transparent shadow-2xl wc-wobbly-bg rounded-2xl overflow-hidden"
                    >
                        {/* Organic Splotch behind card content - Unique per project */}
                        <div className={`absolute inset-0 opacity-10 transition-opacity rounded-xl ${index % 2 === 0 ? 'bg-wc-rose' : 'bg-wc-blue'}`}></div>
                        <div className={`absolute -top-32 -right-32 w-80 h-80 rounded-full blur-[100px] opacity-25 -z-10 ${index % 2 === 0 ? 'bg-wc-rose' : 'bg-wc-blue'}`}></div>
                        <div className={`absolute -bottom-32 -left-32 w-80 h-80 rounded-full blur-[100px] opacity-20 -z-10 ${index % 2 === 0 ? 'bg-wc-teal' : 'bg-wc-yellow'}`}></div>

                        <div className="relative p-8 md:p-12 flex flex-col h-full z-10">
                            <div className="flex justify-between items-start mb-8">
                                <span className="relative inline-block">
                                    <span className="relative z-10 px-6 py-2 text-sm font-bold font-heading uppercase tracking-wider text-wc-blue">
                                        {project.tags}
                                    </span>
                                    <span className={`absolute inset-0 ${index % 2 === 0 ? 'bg-wc-rose' : 'bg-wc-blue'} wc-wobbly-bg transform ${index % 2 === 0 ? '-rotate-3' : 'rotate-3'} scale-110 shadow-lg`}></span>
                                </span>
                                
                                <div className="p-4 bg-white/80 border-2 border-ink/5 text-ink rounded-full shadow-md ">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                </div>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold font-heading text-ink mb-4 group-hover:text-wc-blue transition-colors">
                                {project.title}
                            </h3>
                            
                            <p className="text-ink text-lg mb-8 leading-relaxed font-sans font-medium border-l-4 border-wc-yellow pl-6">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-x-6 gap-y-4 mt-auto">
                                {project.stack.map((tech, i) => {
                                    const highlightColors = ['wc-highlight-blue', 'wc-highlight-rose', 'wc-highlight-yellow'];
                                    const hColor = highlightColors[i % highlightColors.length];
                                    return (
                                        <span key={i} className="relative inline-block group/tech">
                                            <span className={`absolute inset-y-1 -inset-x-2 ${hColor} opacity-40 rounded-sm`}></span>
                                            <span className="relative z-10 text-base font-bold font-heading text-ink">
                                                #{tech}
                                            </span>
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    </a>
                </TiltWrapper>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalProjects;
