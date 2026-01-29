import campfireIll from '../assets/campfire.png';
import TiltWrapper from './TiltWrapper';
import { 
  SiReact, 
  SiSupabase, 
  SiPostgresql, 
  SiMongodb, 
  SiWhatsapp, 
  SiJavascript 
} from 'react-icons/si';
import { 
  FaChartPie, 
  FaImages, 
  FaUsersCog, 
  FaFileInvoice 
} from 'react-icons/fa';

const projects = [
  {
    id: "fest-hub",
    title: "Fest Hub Application",
    description: "A community-driven app for sharing village festival event details, expenses, and image galleries.",
    stack: ["React.js", "Supabase", "PostgreSQL", "Gallery", "Charts", "Multi-tenant"],
    url: "https://fest-hub-livid.vercel.app/",
    tags: "Community App",
    img: "https://placehold.co/600x400/1e293b/FFFFFF/png?text=Festival+App+UI" 
  },
  {
    id: "shop-sync",
    title: "ShopSync – Business SaaS",
    description: "Inventory and worker management SaaS for small businesses. Features dashboards, graphs, and multi-tenant architecture.",
    stack: ["React.js", "Supabase", "PostgreSQL", "WhatsApp API", "Invoice Gen", "Dashboards"],
    url: "https://shopsync-three.vercel.app/",
    tags: "SaaS Product",
    img: "https://placehold.co/600x400/3b82f6/FFFFFF/png?text=ShopSync+Dashboard"
  }
];

const PersonalProjects = ({ id }) => {
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
                ( Code, Creation & Midnight Stories )
              </p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12">
            {projects.map((project, index) => (
                <TiltWrapper 
                  key={project.id} 
                  className={`group relative min-h-[450px] transition-transform duration-500 hover:scale-[1.02] ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
                >
                    <a 
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative block h-full w-full bg-white dark:bg-zinc-900 shadow-2xl wc-wobbly-bg rounded-2xl overflow-hidden group"
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
                                
                                <div className="p-3 bg-white/90 dark:bg-zinc-800/90 border-2 border-ink/10 dark:border-white/10 text-ink dark:text-zinc-100 rounded-full shadow-sm group-hover:bg-wc-blue group-hover:text-white transition-all transform group-hover:rotate-12">
                                     <span className="text-xl">&rarr;</span>
                                </div>
                            </div>

                            <h3 className="text-2xl md:text-4xl font-bold font-heading text-ink dark:text-zinc-100 mb-6 group-hover:text-wc-blue transition-colors">
                                {project.title}
                            </h3>
                            
                            <p className="text-ink/80 dark:text-zinc-400 text-lg mb-8 leading-relaxed font-sans font-bold border-l-4 border-wc-yellow pl-6">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-4 mt-auto">
                                {project.stack.map((tech, i) => {
                                    const getSkillColor = (skill) => {
                                        const s = skill.toLowerCase();
                                        if (s.includes('react')) return 'bg-wc-blue';
                                        if (s.includes('supabase') || s.includes('mongodb') || s.includes('postgres')) return 'bg-wc-teal';
                                        if (s.includes('dashboard') || s.includes('charts')) return 'bg-wc-yellow';
                                        if (s.includes('gallery') || s.includes('whatsapp') || s.includes('invoice')) return 'bg-wc-rose';
                                        return 'bg-wc-violet';
                                    };

                                    const getSkillIcon = (skill) => {
                                        const s = skill.toLowerCase();
                                        if (s.includes('react')) return <SiReact className="text-[#61DAFB]" />;
                                        if (s.includes('supabase')) return <SiSupabase className="text-[#3ECF8E]" />;
                                        if (s.includes('postgres')) return <SiPostgresql className="text-[#336791]" />;
                                        if (s.includes('mongodb')) return <SiMongodb className="text-[#47A248]" />;
                                        if (s.includes('whatsapp')) return <SiWhatsapp className="text-[#25D366]" />;
                                        if (s.includes('chart')) return <FaChartPie className="text-amber-500" />;
                                        if (s.includes('gallery')) return <FaImages className="text-rose-400" />;
                                        if (s.includes('tenant')) return <FaUsersCog className="text-slate-500" />;
                                        if (s.includes('invoice')) return <FaFileInvoice className="text-blue-500" />;
                                        return <SiJavascript className="text-yellow-400" />;
                                    };

                                    const colorClass = getSkillColor(tech);
                                    return (
                                        <span key={i} className="relative inline-block group/tag">
                                            <span className="relative z-10 flex items-center gap-2 text-xs font-black font-heading text-ink dark:text-zinc-200 px-3 py-1.5 uppercase tracking-tight">
                                                <span className="text-sm">{getSkillIcon(tech)}</span>
                                                {tech}
                                            </span>
                                            <span className={`absolute inset-0 ${colorClass}/20 dark:${colorClass}/10 wc-wobbly-bg transform ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'} group-hover/tag:scale-110 transition-transform`}></span>
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
