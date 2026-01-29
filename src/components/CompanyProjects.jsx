import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from './SplitText';
import mountainsIll from '../assets/mountains.png';
import footstepsIll from '../assets/footsteps.png';
import TiltWrapper from './TiltWrapper';
import { 
  SiPython, 
  SiStreamlit, 
  SiPandas, 
  SiPlotly, 
  SiNumpy, 
  SiAmazonwebservices, 
  SiFlask, 
  SiMongodb, 
  SiGoogle, 
  SiReact, 
  SiTailwindcss, 
  SiPytorch,
  SiOpencv,
  SiTensorflow
} from 'react-icons/si';
import { 
  FaAws, 
  FaRobot, 
  FaFileExcel, 
  FaEnvelope,
  FaDatabase,
  FaBrain
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Data Analysis & Visualization Dashboards",
    category: "Data Science",
    problem: "Clients struggled to interpret raw CSV/Excel data for business decisions.",
    solution: "Built interactive Streamlit dashboards converting raw data into actionable KPIs and charts.",
    stack: ["Python", "Streamlit", "Pandas", "Plotly", "Pandas", "Numpy", "AWS", "S3", "Ec2 instance"],
    impact: "Enabled data-driven decisions for non-technical stakeholders.",
    bgCol: "bg-cyan-50",
    color: "from-blue-500 to-cyan-400",
    milestone: "Base Camp"
  },
  {
    id: 2,
    title: "AI-Powered ATS System",
    category: "Full Stack AI",
    problem: "HR teams spent hours manually screening resumes.",
    solution: "Developed an automated resume parser & scorer using Gemini API & Sentence Transformers.",
    stack: ["React", "Flask", "MongoDB", "Gemini API", "Sentence Transformers", "Python", "Matrial UI", "AWS", "S3", "Ec2 instance","Axios", "JWT"],
    impact: "Reduced screening time by 70% with semantic search capabilities.",
    bgCol: "bg-purple-50",
    color: "from-violet-500 to-purple-400",
    milestone: "The Trailhead"
  },
  
  {
    id: 3,
    title: "Einsteinium Labs Website",
    category: "Web Development",
    problem: "Needed a professional corporate presence with lead generation.",
    solution: "Responsive corporate site with Google Sheets integration for zero-cost backend.",
    stack: ["React", "Tailwind", "Google Sheets API", "EmailJS",],
    impact: "Established digital presence and automated lead collection.",
    url: "https://www.einsteiniumlabs.com/",
    bgCol: "bg-orange-50",
    color: "from-orange-500 to-amber-400",
    milestone: "The Rocky Ridge"
  },
  {
    id: 4,
    title: "X-Ray Weapon Detection",
    category: "Computer Vision",
    problem: "Security bottlenecks in manual baggage screening.",
    solution: "Trained YOLOv8 model to detect guns and knives in X-ray imagery.",
    stack: ["YOLOv8", "Python", "OpenCV", "PyTorch", "Streamit"],
    impact: "Enhanced security throughput with automated threat detection.",
    bgCol: "bg-red-50",
    color: "from-red-500 to-rose-400",
    milestone: "The Summit"
  },
];

const CompanyProjects = ({ id }) => {
  const [expandedId, setExpandedId] = useState(1);
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // Desktop - Horizontal Scroll
        "(min-width: 1024px)": function() {
          gsap.to(
            sectionRef.current,
            {
              xPercent: -100 * ((projects.length - 1) / projects.length),
              ease: "none",
              scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: () => `+=${triggerRef.current.offsetWidth * (projects.length - 1)}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            }
          );
        },
        // Mobile - Accordion view (no GSAP scroll needed)
        "(max-width: 1023px)": function() {
           // Standard scroll is used for the vertical list
        } 
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id={id} className="relative z-10 overflow-hidden bg-white/20">
      {/* 
        Desktop Layout: Horizontal Scroll (GSAP Pin)
      */}
      <div 
        ref={triggerRef} 
        className="hidden lg:block h-screen w-full overflow-hidden"
      >
        <div 
          ref={sectionRef} 
          className="flex flex-row h-screen w-[400vw]"
        >
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="w-screen h-screen flex-shrink-0 flex flex-col justify-center items-center px-20 relative border-r-2 border-dashed border-ink/10"
            >
              {/* Vibrant Watercolor Backdrop */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 animate-fadeIn">
                <div className={`absolute inset-0 opacity-20 ${project.bgCol}`}></div>
                <div className={`absolute top-[-20%] right-[-10%] w-[90%] h-[90%] rounded-full watercolor-splash opacity-40 blur-[120px] ${project.bgCol.replace('bg-', 'bg-wc-').replace('-50', '')}`}></div>
                <div className={`absolute bottom-[-10%] left-[-15%] w-[80%] h-[80%] rounded-full watercolor-splash opacity-35 blur-[140px] ${project.bgCol.replace('bg-', 'bg-wc-').replace('-50', '')}`}></div>
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-10 mix-blend-overlay ${project.bgCol}`}></div>
              </div>

              <div className="absolute top-10 left-10 text-9xl text-ink/5 font-heading -rotate-12 select-none -z-10">
                  {index + 1}
               </div>

              <div className="max-w-6xl w-full z-10 grid grid-cols-2 gap-12 items-center">
                  <TiltWrapper className="order-1">
                    <div className="space-y-12 relative mt-0">
                        <div className="relative inline-block mb-4">
                            <div className="transform -rotate-3 z-20 wc-wobbly-bg rounded-lg">
                                <span className="text-2xl font-bold font-heading text-ink px-4 py-1">{project.category}</span>
                                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-wc-rose rounded-full border-2 border-transparent wc-wobbly-bg shadow-md"></div>
                            </div>
                        </div>
                        <h2 className="text-5xl font-heading font-semibold text-ink leading-tight transform rotate-1">
                          <SplitText>{project.title}</SplitText>
                        </h2>
                        <div className="bg-transparent p-8 shadow-xl transform -rotate-1 relative wc-wobbly-bg rounded-xl">
                            <span className="relative inline-block mb-4">
                                <span className="relative z-10 text-black px-4 py-1 text-sm font-bold rounded-full">The Problem</span>
                                <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-wc-yellow/30 -rotate-1"></span>
                            </span>
                            <p className="text-2xl text-ink leading-relaxed font-sans pt-1 font-bold">{project.problem}</p>
                        </div>
                    </div>
                  </TiltWrapper>

                  <TiltWrapper className="order-2">
                    <div className="p-12 bg-transparent shadow-xl rotate-1 relative wc-wobbly-bg rounded-2xl">
                        <div className="absolute inset-16 bg-wc-blue/5 rounded-full blur-3xl -z-10"></div>
                        <div className="space-y-12 relative z-10">
                          <div>
                              <h4 className="text-4xl font-bold font-heading text-ink mb-4 relative inline-block">
                                  The Solution
                                  <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-wc-blue/30 -rotate-1"></span>
                              </h4>
                              <p className="text-ink leading-relaxed text-xl font-sans font-bold">{project.solution}</p>
                          </div>
                          <div>
                              <h4 className="text-4xl font-bold font-heading text-ink mb-4 relative inline-block">
                                  The Impact
                                  <span className="absolute -bottom-1 left-0 w-full h-2 bg-wc-teal/40 rotate-1"></span>
                              </h4>
                              <p className="text-ink leading-relaxed text-xl font-sans font-bold">{project.impact}</p>
                          </div>
                          {/* Tech Stack (Gear) - Desktop */}
                          <div className="pt-6">
                              <h4 className="text-sm font-bold font-heading text-ink/40 dark:text-zinc-500 uppercase tracking-widest mb-4">Gear</h4>
                              <div className="flex flex-wrap gap-3">
                                  {project.stack.map((tech, i) => {
                                      const getSkillColor = (skill) => {
                                          const s = skill.toLowerCase();
                                          if (s.includes('react')) return 'bg-wc-blue';
                                          if (s.includes('supabase') || s.includes('mongodb') || s.includes('postgres') || s.includes('sheets')) return 'bg-wc-teal';
                                          if (s.includes('python') || s.includes('flask')) return 'bg-wc-yellow';
                                          if (s.includes('gemini') || s.includes('yolo') || s.includes('streamlit')) return 'bg-wc-rose';
                                          if (s.includes('aws') || s.includes('ec2') || s.includes('s3') || s.includes('pytorch')) return 'bg-wc-violet';
                                          return 'bg-wc-blue';
                                      };

                                      const getSkillIcon = (skill) => {
                                          const s = skill.toLowerCase();
                                          if (s.includes('python')) return <SiPython className="text-[#3776AB]" />;
                                          if (s.includes('streamlit')) return <SiStreamlit className="text-[#FF4B4B]" />;
                                          if (s.includes('pandas')) return <SiPandas className="text-[#150458]" />;
                                          if (s.includes('plotly')) return <SiPlotly className="text-[#3F4F75]" />;
                                          if (s.includes('numpy')) return <SiNumpy className="text-[#013243]" />;
                                          if (s.includes('aws') || s.includes('s3') || s.includes('ec2')) return <FaAws className="text-[#FF9900]" />;
                                          if (s.includes('flask')) return <SiFlask className="text-ink" />;
                                          if (s.includes('mongo')) return <SiMongodb className="text-[#47A248]" />;
                                          if (s.includes('gemini')) return <SiGoogle className="text-[#4285F4]" />;
                                          if (s.includes('react')) return <SiReact className="text-[#61DAFB]" />;
                                          if (s.includes('tailwind')) return <SiTailwindcss className="text-[#06B6D4]" />;
                                          if (s.includes('pytorch')) return <SiPytorch className="text-[#EE4C2C]" />;
                                          if (s.includes('opencv')) return <SiOpencv className="text-[#5C3EE8]" />;
                                          if (s.includes('yolo')) return <FaRobot className="text-rose-500" />;
                                          if (s.includes('transformer')) return <FaBrain className="text-purple-500" />;
                                          if (s.includes('sheets')) return <FaFileExcel className="text-[#1D6F42]" />;
                                          if (s.includes('email')) return <FaEnvelope className="text-blue-400" />;
                                          return <FaDatabase className="text-slate-400" />;
                                      };

                                      const colorClass = getSkillColor(tech);
                                      return (
                                          <span key={i} className="relative inline-block group/tag">
                                              <span className="relative z-10 flex items-center gap-2 text-[10px] font-black font-heading text-ink dark:text-zinc-200 px-3 py-1.5 uppercase tracking-tight">
                                                  <span className="text-xs">{getSkillIcon(tech)}</span>
                                                  {tech}
                                              </span>
                                              <span className={`absolute inset-0 ${colorClass}/20 dark:${colorClass}/10 wc-wobbly-bg transform ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'} group-hover/tag:scale-110 transition-transform`}></span>
                                          </span>
                                      );
                                  })}
                              </div>
                          </div>

                          {project.url && (
                              <div className="pt-8 border-t-2 border-ink/5 flex justify-end">
                                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="bg-wc-rose rounded-full px-4 py-2 text-white hover:bg-wc-blue/80 transition-colors">
                                  See It Live <span className="transform group-hover:rotate-45 transition-transform inline-block b">&rarr;</span>
                                  </a>
                              </div>
                          )}
                        </div>
                    </div>
                  </TiltWrapper>
              </div>

               <div className="absolute bottom-2 right-10 w-64 h-48 opacity-90 pointer-events-none z-0 flex flex-col items-end">
                   <p className="font-heading text-2xl text-ink/60 rotate-[-5deg] mr-12 mb-[-20px] transform translate-y-4">{project.milestone || `Camp ${index + 1}`}</p>
                   <img src={mountainsIll} alt="Mountain Milestone" className="w-full h-full object-contain object-bottom" />
               </div>

               {index !== projects.length - 1 && (
                  <div className="absolute bottom-10 -right-32 w-48 h-24 opacity-30 pointer-events-none transform rotate-12 z-0">
                      <img src={footstepsIll} alt="Trail" className="w-full h-full object-contain filter contrast-125 grayscale" />
                  </div>
               )}
            </div>
          ))}
        </div>
      </div>

      {/* 
        Mobile Layout: Vertical Accordion List
      */}
      <div className="lg:hidden py-16 px-4 space-y-6">
        <div className="mb-12 text-center relative z-10 px-4">
             <h2 className="text-3xl font-bold font-heading text-ink transform rotate-1 inline-block relative px-4 py-2">
               Project <span className="text-ink bg-wc-rose px-3 py-1 wc-wobbly-bg shadow-md ml-1">Archive</span>
             </h2>
             <p className="mt-4 text-ink/60 font-sans font-bold text-sm uppercase tracking-widest">Select a trail to explore details</p>
        </div>

        {projects.map((project, index) => (
          <div key={project.id} className="relative">
            {/* Project Header (Accordion Trigger) */}
            <button 
              onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
              className={`w-full text-left p-6 transition-all duration-300 relative z-10 rounded-xl wc-wobbly-bg shadow-lg flex items-center justify-between
                ${expandedId === project.id ? 'bg-wc-blue text-white scale-[1.02]' : 'bg-white text-ink'}
              `}
            >
              <div className="flex flex-col">
                <span className={`text-[10px] uppercase font-bold tracking-widest mb-1 ${expandedId === project.id ? 'text-wc-rose/80' : 'text-wc-rose'}`}>
                    {project.category}
                </span>
                <h3 className={`text-xl font-bold font-heading leading-tight ${expandedId === project.id ? 'text-wc-blue' : 'text-ink'}`}>{project.title}</h3>
              </div>
              <span className="text-2xl transition-all duration-300">
                {expandedId === project.id ? '↑' : '↓'}
              </span>
            </button>

            {/* Accordion Content */}
            <div className={`
              overflow-hidden transition-all duration-500 ease-in-out
              ${expandedId === project.id ? 'max-h-[2000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}
            `}>
              <div className="space-y-6 px-2 pb-8">
                {/* Problem Card */}
                <div className="p-6 bg-white shadow-md transform -rotate-1 wc-wobbly-bg rounded-lg border border-ink/5">
                    <span className="inline-block bg-wc-rose text-white text-[10px] font-bold px-2 py-0.5 rounded mb-3 uppercase">The Problem</span>
                    <p className="text-lg text-ink font-bold font-sans leading-relaxed">{project.problem}</p>
                </div>

                {/* Solution & Impact Card */}
                <div className="p-6 bg-white shadow-md transform rotate-1 wc-wobbly-bg rounded-lg border border-ink/5 space-y-8">
                    <div>
                        <span className="inline-block bg-wc-teal text-white text-[10px] font-bold px-2 py-0.5 rounded mb-3 uppercase">The Solution</span>
                        <p className="text-base text-ink font-bold font-sans leading-relaxed">{project.solution}</p>
                    </div>
                    <div>
                        <span className="inline-block bg-wc-yellow text-ink text-[10px] font-bold px-2 py-0.5 rounded mb-3 uppercase">The Impact</span>
                        <p className="text-base text-ink font-bold font-sans leading-relaxed">{project.impact}</p>
                    </div>
                    
                    {/* Tech Stack (Gear) - Mobile */}
                    <div className="py-2">
                        <span className="inline-block text-[10px] font-bold text-ink/40 uppercase tracking-widest mb-3">Gear</span>
                        <div className="flex flex-wrap gap-3">
                            {project.stack.map((tech, i) => {
                                const getSkillColor = (skill) => {
                                    const s = skill.toLowerCase();
                                    if (s.includes('react')) return 'bg-wc-blue';
                                    if (s.includes('supabase') || s.includes('mongodb') || s.includes('postgres') || s.includes('sheets')) return 'bg-wc-teal';
                                    if (s.includes('python') || s.includes('flask')) return 'bg-wc-yellow';
                                    if (s.includes('gemini') || s.includes('yolo') || s.includes('streamlit')) return 'bg-wc-rose';
                                    if (s.includes('aws') || s.includes('ec2') || s.includes('s3') || s.includes('pytorch')) return 'bg-wc-violet';
                                    return 'bg-wc-blue';
                                };

                                const getSkillIcon = (skill) => {
                                    const s = skill.toLowerCase();
                                    if (s.includes('python')) return <SiPython className="text-[#3776AB]" />;
                                    if (s.includes('streamlit')) return <SiStreamlit className="text-[#FF4B4B]" />;
                                    if (s.includes('pandas')) return <SiPandas className="text-[#150458]" />;
                                    if (s.includes('plotly')) return <SiPlotly className="text-[#3F4F75]" />;
                                    if (s.includes('numpy')) return <SiNumpy className="text-[#013243]" />;
                                    if (s.includes('aws') || s.includes('s3') || s.includes('ec2')) return <FaAws className="text-[#FF9900]" />;
                                    if (s.includes('flask')) return <SiFlask className="text-ink" />;
                                    if (s.includes('mongo')) return <SiMongodb className="text-[#47A248]" />;
                                    if (s.includes('gemini')) return <SiGoogle className="text-[#4285F4]" />;
                                    if (s.includes('react')) return <SiReact className="text-[#61DAFB]" />;
                                    if (s.includes('tailwind')) return <SiTailwindcss className="text-[#06B6D4]" />;
                                    if (s.includes('pytorch')) return <SiPytorch className="text-[#EE4C2C]" />;
                                    if (s.includes('opencv')) return <SiOpencv className="text-[#5C3EE8]" />;
                                    if (s.includes('yolo')) return <FaRobot className="text-rose-500" />;
                                    if (s.includes('transformer')) return <FaBrain className="text-purple-500" />;
                                    if (s.includes('sheets')) return <FaFileExcel className="text-[#1D6F42]" />;
                                    if (s.includes('email')) return <FaEnvelope className="text-blue-400" />;
                                    return <FaDatabase className="text-slate-400" />;
                                };

                                const colorClass = getSkillColor(tech);
                                return (
                                    <span key={i} className="relative inline-block group/tag">
                                        <span className="relative z-10 flex items-center gap-2 text-[9px] font-black font-heading text-ink dark:text-zinc-200 px-2.5 py-1.5 uppercase tracking-tight">
                                            <span className="text-xs">{getSkillIcon(tech)}</span>
                                            {tech}
                                        </span>
                                        <span className={`absolute inset-0 ${colorClass}/20 dark:${colorClass}/10 wc-wobbly-bg transform ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'} group-hover/tag:scale-110 transition-transform`}></span>
                                    </span>
                                );
                            })}
                        </div>
                    </div>

                    {project.url && (
                        <a 
                          href={project.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center justify-center gap-2 w-full py-4 bg-wc-blue text-wc-rose font-bold rounded-lg shadow-xl wc-wobbly-bg text-lg active:scale-95 transition-transform mt-4"
                        >
                          See It Live &rarr;
                        </a>
                    )}

                    {/* Minimize Button */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedId(null);
                      }}
                      className="flex items-center justify-center gap-2 w-full py-3 bg-white text-ink font-bold rounded-lg border-2 border-dashed border-ink/10 shadow-sm active:scale-95 transition-transform mt-4"
                    >
                      <span className="text-xl">↑</span> Minimize Details
                    </button>
                </div>
              </div>
            </div>
            
            {/* Visual connector steps between items */}
            {index !== projects.length - 1 && (
              <div className="flex justify-center py-4 opacity-10">
                <div className="w-1 h-12 border-l-2 border-dashed border-ink"></div>
              </div>
            )}
          </div>
        ))}
        
        {/* Mobile View: Small mountain stamp at end */}
        <div className="flex justify-center pt-16 opacity-30 transform scale-75">
            <img src={mountainsIll} alt="end of trail" className="w-48" />
        </div>
      </div>
    </section>
  );
};

export default CompanyProjects;
