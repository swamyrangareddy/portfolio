import { useRef, useEffect } from 'react';
import SplitText from './SplitText';
import backpackIll from '../assets/backpack.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  SiReact, SiTailwindcss, SiFlask, SiMongodb, SiPython, 
  SiStreamlit, SiGreensock, SiMui, SiGoogle, SiKeras,
  SiHtml5, SiCss3, SiJavascript, SiGit, SiDocker, SiLinux,
  SiPostgresql, SiNodedotjs
} from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  // Categorized Stacks
  const categories = [
      {
          id: 'frontend',
          title: 'Frontend Ecosystem',
          icon: '🎨',
          description: 'Building responsive, pixel-perfect user interfaces.',
          skills: [
              { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
              { name: 'CSS3', icon: <SiCss3 className="text-blue-500" /> },
              { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
              { name: 'React.js', icon: <SiReact className="text-blue-400" /> },
              { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
              { name: 'GSAP', icon: <SiGreensock className="text-green-500" /> },
              { name: 'Material UI', icon: <SiMui className="text-blue-500" /> },
          ]
      },
      {
          id: 'backend',
          title: 'Backend Ecosystem',
          icon: '⚙️',
          description: 'Scalable server-side logic and API development.',
          skills: [
              { name: 'Python', icon: <SiPython className="text-yellow-300" /> },
              { name: 'Flask', icon: <SiFlask className="text-slate-500" /> },
              { name: 'Node.js', icon: <SiNodedotjs className="text-green-600" /> }, // Inferred from projects
          ]
      },
      {
          id: 'database',
          title: 'Database & Tools',
          icon: '💽',
          description: 'Data persistence, management, and visualization.',
          skills: [
              { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
              { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" /> }, // Inferred from projects
              { name: 'Streamlit', icon: <SiStreamlit className="text-red-500" /> },
          ]
      },
      {
          id: 'ai',
          title: 'AI & Machine Learning',
          icon: '🤖',
          description: 'Integrating intelligence into applications.',
          skills: [
              { name: 'YOLOv8', icon: <span className="font-bold text-sm">Y8</span> },
              { name: 'Gemini API', icon: <SiGoogle className="text-blue-500" /> },
              { name: 'Embeddings', icon: <SiKeras className="text-red-600" /> },
          ]
      }
  ];

  return (
    <div className="py-20 bg-paper transition-colors duration-300 relative overflow-hidden" id="skills">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-ink transform rotate-1 mb-4 inline-block relative z-10">
              My <span className="text-white bg-primary px-2 border-2 border-ink shadow-hard-sm transform -rotate-2 inline-block">Survival Gear</span>
            </h2>
            <p className="text-xl text-ink/70 font-sans italic max-w-md mx-auto">
                "The tools I carry into the wild to build things that last."
            </p>
            
            {/* Backpack Illustration - Floating/Sticker Style */}
            <div className="hidden md:block absolute -top-8 right-[20%] w-32 h-32 transform rotate-12 transition-transform hover:scale-110">
                 <img src={backpackIll} alt="Survival Backpack" className="w-full h-full object-contain filter drop-shadow-[4px_4px_0px_rgba(24,24,27,0.5)]" />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {categories.map((category, index) => (
                <div key={category.id} className="group relative h-full">
                    {/* Sketchy Card Design */}
                    <div className={`
                        relative p-8 border-2 border-ink transition-all duration-300
                        bg-white h-full
                        shadow-hard
                        hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none
                        ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}
                    `} style={{borderRadius: 'var(--border-radius-hand, 10px)'}}>
                         {/* Tape effect */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-100/80 border-l border-r border-white/50 rotate-2 opacity-80 backdrop-blur-sm z-20" style={{boxShadow: '0 1px 2px rgba(0,0,0,0.1)'}}></div>

                        <div className="flex flex-col gap-6 relative z-10 h-full">
                            
                            {/* Header Section */}
                            <div className="flex items-start gap-6 border-b-2 border-ink/10 pb-6">
                                <span className="text-5xl p-4 bg-paper border-2 border-ink rounded-full shadow-hard-sm flex-shrink-0">
                                    {category.icon}
                                </span>
                                <div>
                                    <h3 className={`text-3xl font-bold font-heading tracking-tight text-ink`}>
                                        {category.title}
                                    </h3>
                                    <p className="text-ink/70 font-sans text-lg leading-snug mt-2">
                                        {category.description}
                                    </p>
                                </div>
                            </div>

                            {/* Skills Grid - now comfortably wrapping */}
                            <div className="flex flex-wrap gap-3 mt-auto">
                                {category.skills.map((skill, idx) => (
                                    <div 
                                        key={idx} 
                                        className="
                                            group/skill flex items-center gap-3 px-4 py-2 
                                            bg-paper border-2 border-ink 
                                            rounded-lg transition-all duration-300
                                            hover:bg-accent hover:scale-110 hover:-rotate-2
                                            shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                                            cursor-default
                                        "
                                    >
                                        <span className="text-xl text-ink group-hover/skill:animate-bounce">
                                            {skill.icon}
                                        </span>
                                        <span className="font-bold text-ink text-base font-heading">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
