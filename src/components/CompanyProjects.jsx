import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from './SplitText';
import mountainsIll from '../assets/mountains.png';
import footstepsIll from '../assets/footsteps.png';

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
  {
    id: 5,
    title: "Healthcare Management   Platform",
    category: "Full Stack Web",
    problem: "Inefficient manual appointment booking and report delivery. patient report tracking.",
    solution: "Creating a role-based dashboard for medical booking, reports, and lab management.",
    stack: ["React", "Express", "SQlite", "Tailwind", "JWT"],
    impact: "Streamlining operations for doctors and patients (In Progress).",
    bgCol: "bg-green-50",
    color: "from-emerald-500 to-teal-400",
    milestone: "The Deep Woods"
  },
];

const CompanyProjects = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-400vw", // Move by 4 widths items (total 5 items - 1 viewport)
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=3000",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      }
    );

    ScrollTrigger.refresh();

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section id="company-projects" className="bg-paper relative z-10">
      <div ref={triggerRef} className="h-screen w-full overflow-hidden">
        <div ref={sectionRef} className="flex h-screen w-[500vw]">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`w-screen h-screen flex flex-col justify-center items-center px-4 md:px-20 relative border-r-2 border-dashed border-ink ${project.bgCol}`}
            >
              {/* Background Doodles specific to project */}
               <div className="absolute top-10 left-10 text-9xl text-ink/5 font-heading -rotate-12 select-none -z-10">
                  {index + 1}
               </div>

              <div className="max-w-6xl w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                 {/* Left Side: Problem & Title */}
                 <div className="space-y-8 relative">
                     {/* Sticky Note Badge */}
                    <div className={`
                        absolute -top-12 -left-4 px-6 py-3 bg-white border-2 border-ink shadow-hard
                        transform -rotate-6 z-20
                    `}>
                        <span className="text-xl font-bold font-heading text-ink">
                            {project.category}
                        </span>
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-400 rounded-full border-2 border-ink"></div>
                    </div>

                    <h3 className="text-4xl md:text-6xl font-heading font-bold text-ink leading-[1.1] transform rotate-1">
                      <SplitText>{project.title}</SplitText>
                    </h3>
                     
                     <div className="bg-white p-6 border-2 border-ink shadow-hard transform -rotate-1 relative">
                        <span className="absolute -top-3 left-4 bg-primary text-white border-2 border-ink px-2 text-sm font-bold shadow-hard-sm">The Problem</span>
                        <p className="text-xl text-ink leading-relaxed font-sans pt-2">
                            {project.problem}
                        </p>
                     </div>
                    
                    <div className="pt-4">
                       <h4 className="text-lg font-bold font-heading text-ink mb-4 underline decoration-wavy decoration-accent">Built With:</h4>
                       <div className="flex flex-wrap gap-3">
                          {project.stack.map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-paper border-2 border-ink text-ink text-sm font-bold font-sans shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-110 transition-transform cursor-default">
                              {tech}
                            </span>
                          ))}
                       </div>
                    </div>
                 </div>

                 {/* Right Side: Solution Card */}
                 <div className="p-8 md:p-12 bg-white border-2 border-ink shadow-hard-xl rotate-1 relative">
                    {/* Folder Tab Look */}
                    <div className="absolute -top-6 right-0 w-32 h-8 bg-white border-t-2 border-l-2 border-r-2 border-ink rounded-t-lg"></div>
                    
                    <div className="space-y-8 relative z-10">
                       <div>
                          <h4 className="text-2xl font-bold font-heading text-ink mb-2 border-b-2 border-accent inline-block">The Solution</h4>
                          <p className="text-ink leading-relaxed text-lg font-sans">{project.solution}</p>
                       </div>
                       <div>
                          <h4 className="text-2xl font-bold font-heading text-ink mb-2 border-b-2 border-secondary inline-block">The Impact</h4>
                          <p className="text-ink leading-relaxed text-lg font-sans">{project.impact}</p>
                       </div>
                       {project.url && (
                          <div className="pt-6 border-t-2 border-dashed border-ink flex justify-end">
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3 bg-primary text-white border-2 border-ink font-bold font-heading shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                               See It Live 
                               <span className="transform group-hover:rotate-45 transition-transform inline-block">&rarr;</span>
                            </a>
                          </div>
                       )}
                    </div>
                 </div>
              </div>

               {/* Mountain Stamp & Milestone - Outside content grid, anchored to viewport */}
               <div className="absolute bottom-0 right-0 md:bottom-2 md:right-10 w-64 h-48 opacity-90 pointer-events-none z-0 flex flex-col items-end">
                   <p className="font-heading text-2xl text-ink rotate-[-5deg] mr-12 mb-[-20px] transform translate-y-4">
                      {project.milestone || `Camp ${index + 1}`}
                   </p>
                   <img src={mountainsIll} alt="Mountain Milestone" className="w-full h-full object-contain object-bottom drop-shadow-xl" />
               </div>

               {/* Footsteps Trail - Connecting to next project */}
               {index !== projects.length - 1 && (
                  <div className="absolute bottom-10 -right-20 md:-right-32 w-48 h-24 opacity-60 pointer-events-none transform rotate-12 z-0 hidden md:block">
                      <img src={footstepsIll} alt="Trail" className="w-full h-full object-contain filter contrast-125" />
                  </div>
               )}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyProjects;
