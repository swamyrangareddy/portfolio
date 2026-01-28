import { useRef, useEffect } from 'react';
import backpackIll from '../assets/backpack.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  SiReact, SiTailwindcss, SiFlask, SiMongodb, SiPython, 
  SiStreamlit, SiMui, SiGoogle, SiKeras,
  SiHtml5, SiCss3, SiJavascript, SiGit, SiDocker,
  SiPostgresql, SiNodedotjs, SiPytorch, SiTensorflow, 
  SiHuggingface, SiFastapi, SiSqlite, SiAmazon, 
  SiGooglecloud, SiGithub, SiApachespark, SiApachehadoop, 
  SiPlotly, SiJsonwebtokens, SiScikitlearn, SiSupabase
} from 'react-icons/si';
import { FaBrain, FaNetworkWired, FaDatabase, FaCloud, FaChartBar } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Skills = ({ id }) => {
  // Categorized Stacks
  const categories = [
      {
          id: 'ai-ml',
          title: 'AI & Machine Learning',
          icon: <FaBrain />,
          description: 'Building intelligent models for NLP, CV, and predictive analysis.',
          skills: [
              { name: 'PyTorch', icon: <SiPytorch className="text-orange-600" /> },
              { name: 'TensorFlow', icon: <SiTensorflow className="text-orange-500" /> },
              { name: 'HuggingFace', icon: <SiHuggingface className="text-yellow-400" /> },
              { name: 'YOLOv8', icon: <span className="font-bold text-sm bg-black text-white px-1 rounded">Y8</span> },
              { name: 'NLP', icon: <span className="font-bold text-sm border border-current px-1 rounded">NLP</span> },
              { name: 'Deep Learning', icon: <SiKeras className="text-red-600" /> },
              { name: 'OpenCV', icon: <span className="font-bold text-sm border border-current px-1 rounded">CV</span> },
              { name: 'Transformers', icon: <span className="font-bold text-sm border border-current px-1 rounded">Trans</span> },
              { name: 'Scikit-learn', icon: <SiScikitlearn className="font-bold text-sm border border-current px-1 rounded" /> },
              { name: 'Pandas', icon: <span className="font-bold text-sm border border-current px-1 rounded">Pd</span> },
              { name: 'NumPy', icon: <span className="font-bold text-sm border border-current px-1 rounded">Num</span> },
          ]
      },
      {
          id: 'programming',
          title: 'Programming & Frameworks',
          icon: <FaNetworkWired />,
          description: 'Developing robust applications with modern stacks.',
          skills: [
              { name: 'Python', icon: <SiPython className="text-yellow-300" /> },
              { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
              { name: 'React.js', icon: <SiReact className="text-blue-400" /> },
              { name: 'Flask', icon: <SiFlask className="text-slate-500" /> },
              { name: 'FastAPI', icon: <SiFastapi className="text-teal-500" /> },
              { name: 'Material UI', icon: <SiMui className="text-blue-500" /> },
              { name: 'REST APIs', icon: <span className="font-bold text-sm">API</span> },
              { name: 'JWT Auth', icon: <SiJsonwebtokens className="text-pink-500" /> },
              { name: 'HTML', icon: <SiHtml5 className="text-blue-400" /> },
              { name: 'CSS', icon: <SiCss3 className="text-blue-400" /> },
              { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-blue-400" /> },
          ]
      },
      {
          id: 'data-engineering',
          title: 'Data & Engineering',
          icon: <FaDatabase />,
          description: 'Managing data pipelines, storage, and warehousing.',
          skills: [
              { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
              { name: 'SQL', icon: <SiPostgresql className="text-blue-400" /> },
              { name: 'SQLite', icon: <SiSqlite className="text-blue-300" /> },
              { name: 'Apache Spark', icon: <SiApachespark className="text-orange-500" /> },
              { name: 'Hadoop', icon: <SiApachehadoop className="text-yellow-500" /> },
              { name: 'ETL Pipelines', icon: <span className="font-bold text-sm">ETL</span> },
              {name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
          ]
      },
      {
          id: 'cloud-devops',
          title: 'Cloud & DevOps',
          icon: <FaCloud />,
          description: 'Deploying and managing scalable infrastructure.',
          skills: [
              { name: 'AWS (EC2, S3, Redshift)', icon: <SiAmazon className="text-orange-500" /> },
              { name: 'GCP (BigQuery)', icon: <SiGooglecloud className="text-blue-500" /> },
              { name: 'Docker', icon: <SiDocker className="text-blue-400" /> },
              { name: 'Git & GitHub', icon: <SiGithub className="text-black" /> },
              {name: "Supabase", icon: <SiSupabase className="text-blue-400" /> },
          ]
      },
      {
          id: 'visualization',
          title: 'Visualization',
          icon: <FaChartBar />,
          description: 'Turning data into actionable insights.',
          skills: [
              { name: 'Streamlit', icon: <SiStreamlit className="text-red-500" /> },
              { name: 'Plotly', icon: <SiPlotly className="text-blue-500" /> },
              { name: 'Matplotlib', icon: <span className="font-bold text-sm text-blue-600">Mpl</span> },
              {name: 'Seaborn', icon: <span className="font-bold text-sm text-blue-600">Snb</span> },
              {name: 'PowerBI', icon: <span className="font-bold text-sm text-blue-600">PBI</span> },
            ]
      }
  ];

  return (
    <div className="py-20 bg-paper transition-colors duration-300 relative overflow-hidden" id={id}>
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
            <div className="hidden md:block absolute -top-8 right-[10%] w-32 h-32 transform rotate-12 transition-transform hover:scale-110">
                 <img src={backpackIll} alt="Survival Backpack" className="w-full h-full object-contain filter drop-shadow-[4px_4px_0px_rgba(24,24,27,0.5)]" />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {categories.map((category, index) => (
                <div key={category.id} className="group relative h-full">
                    {/* Sketchy Card Design */}
                    <div className={`
                        relative p-6 border-2 border-ink transition-all duration-300
                        bg-white h-full flex flex-col
                        shadow-hard
                        hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none
                        ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}
                    `} style={{borderRadius: 'var(--border-radius-hand, 10px)'}}>
                         {/* Tape effect */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-100/80 border-l border-r border-white/50 rotate-2 opacity-80 backdrop-blur-sm z-20" style={{boxShadow: '0 1px 2px rgba(0,0,0,0.1)'}}></div>

                        <div className="flex flex-col gap-4 relative z-10 h-full">
                            
                            {/* Header Section */}
                            <div className="flex items-center gap-4 border-b-2 border-ink/10 pb-4">
                                <span className="text-3xl p-3 bg-paper border-2 border-ink rounded-full shadow-hard-sm flex-shrink-0 text-ink">
                                    {category.icon}
                                </span>
                                <div>
                                    <h3 className={`text-2xl font-bold font-heading tracking-tight text-ink`}>
                                        {category.title}
                                    </h3>
                                </div>
                            </div>
                            
                            <p className="text-ink/70 font-sans text-sm leading-snug">
                                {category.description}
                            </p>

                            {/* Skills Grid - now comfortably wrapping */}
                            <div className="flex flex-wrap gap-2 mt-auto pt-4">
                                {category.skills.map((skill, idx) => (
                                    <div 
                                        key={idx} 
                                        className="
                                            group/skill flex items-center gap-2 px-3 py-1.5 
                                            bg-paper border-2 border-ink 
                                            rounded-md transition-all duration-300
                                            hover:bg-accent hover:scale-105 hover:-rotate-2
                                            shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                                            cursor-default
                                        "
                                    >
                                        <span className="text-lg text-ink group-hover/skill:animate-bounce">
                                            {skill.icon}
                                        </span>
                                        <span className="font-bold text-ink text-sm font-heading">
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