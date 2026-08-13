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
    title: "AI-Powered Resume Screening Platform",
    category: "Full Stack AI",
    problem: "HR and recruiting teams spent hours manually parsing resumes and matching candidate skills.",
    solution: "Developed an automated candidate screening platform using NLP (SpaCy, NLTK), Gemini API, and role-based access control.",
    stack: ["ReactJS", "Flask", "MongoDB", "Python", "SpaCy", "NLTK", "Gemini API", "JWT"],
    impact: "Automated candidate skill matching and candidate evaluation for HRs and recruiters.",
    bgCol: "bg-purple-50",
    color: "from-violet-500 to-purple-400",
    milestone: "Base Camp"
  },
  {
    id: 2,
    title: "Predictive Analytics for Business Forecasting",
    category: "Machine Learning",
    problem: "Business stakeholders needed accurate forecasting for demand patterns and operational trends.",
    solution: "Developed predictive ML models using scikit-learn, performed in-depth EDA, and deployed an interactive Streamlit app.",
    stack: ["Python", "scikit-learn", "Pandas", "SQL", "Streamlit", "AWS S3"],
    impact: "Identified key business drivers and enabled data-driven forecasting.",
    bgCol: "bg-cyan-50",
    color: "from-blue-500 to-cyan-400",
    milestone: "The Trailhead"
  },
  {
    id: 3,
    title: "Automated Data Visualization & Reporting",
    category: "Data Analytics",
    problem: "Clients struggled to aggregate and analyze raw data from databases, APIs, and CSV files.",
    solution: "Built unified real-time tracking dashboards combining Power BI, Tableau, and Streamlit with interactive Plotly visual charts.",
    stack: ["Power BI", "Tableau", "Python", "SQL", "Plotly", "Streamlit"],
    impact: "Delivered unified reporting and real-time tracking of key performance metrics.",
    bgCol: "bg-orange-50",
    color: "from-orange-500 to-amber-400",
    milestone: "The Rocky Ridge"
  },
  {
    id: 4,
    title: "Data Warehousing & ETL Pipeline",
    category: "Data Engineering",
    problem: "Processing bottlenecks and high latency when querying large structured and unstructured datasets.",
    solution: "Designed scalable ETL pipelines using Apache Spark and optimized data storage performance on AWS Redshift and BigQuery.",
    stack: ["SQL", "Python", "Apache Spark", "AWS Redshift", "Google BigQuery"],
    impact: "Boosted data processing speeds significantly and streamlined data warehousing.",
    bgCol: "bg-red-50",
    color: "from-red-500 to-rose-400",
    milestone: "The Summit"
  },
  {
    id: 5,
    title: "Einsteinium Labs Website",
    category: "Web Development",
    problem: "Needed a modern corporate web presence with automated client inquiry collection.",
    solution: "Responsive corporate website integrated with Google Sheets API and EmailJS for seamless lead intake.",
    stack: ["React", "Tailwind CSS", "Google Sheets API", "EmailJS"],
    impact: "Established official digital presence and automated client lead management.",
    url: "https://www.einsteiniumlabs.com/",
    bgCol: "bg-green-50",
    color: "from-emerald-500 to-teal-400",
    milestone: "The Deep Woods"
  },
];

const CompanyProjects = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // Desktop - Horizontal Scroll
        "(min-width: 1024px)": function() {
          const pin = gsap.fromTo(
            sectionRef.current,
            { translateX: 0 },
            {
              translateX: "-400vw", // Move by 4 widths items (total 5 items - 1 viewport)
              ease: "none",
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
        },
        // Mobile - Vertical Stack (Optional animations)
        "(max-width: 1023px)": function() {
           // We can add simple fade-ins here if needed, but natural scroll is best for usability
        } 
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="company-projects" className="bg-paper relative z-10">
      {/* 
        Mobile: overflow-x-auto + snap-x for native horizontal scroll
        Desktop: overflow-hidden for GSAP pin 
      */}
      <div 
        ref={triggerRef} 
        className="h-screen w-full overflow-x-auto snap-x snap-mandatory lg:overflow-hidden lg:snap-none scrollbar-hide"
      >
        <div 
          ref={sectionRef} 
          className="flex flex-row h-screen w-[500vw]"
        >
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`w-screen h-screen flex-shrink-0 snap-center flex flex-col justify-center items-center px-4 md:px-20 relative border-r-2 border-dashed border-ink ${project.bgCol}`}
            >
              {/* Background Doodles specific to project */}
               <div className="absolute top-10 left-10 text-9xl text-ink/5 font-heading -rotate-12 select-none -z-10">
                  {index + 1}
               </div>

              <div className="max-w-6xl w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                 {/* Left Side: Problem & Title */}
                 <div className="space-y-6 md:space-y-8 relative order-2 md:order-1 mt-8 md:mt-0">
                     {/* Sticky Note Badge */}
                    <div className={`
                        absolute -top-10 md:-top-12 -left-2 md:-left-4 px-4 md:px-6 py-2 md:py-3 bg-white border-2 border-ink shadow-hard
                        transform -rotate-6 z-20
                    `}>
                        <span className="text-lg md:text-xl font-bold font-heading text-ink">
                            {project.category}
                        </span>
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-400 rounded-full border-2 border-ink"></div>
                    </div>

                    <h3 className="text-3xl md:text-6xl font-heading font-bold text-ink leading-[1.1] transform rotate-1 pt-6 md:pt-0">
                      <SplitText>{project.title}</SplitText>
                    </h3>
                     
                     <div className="bg-white p-4 md:p-6 border-2 border-ink shadow-hard transform -rotate-1 relative">
                        <span className="absolute -top-3 left-4 bg-primary text-white border-2 border-ink px-2 text-xs md:text-sm font-bold shadow-hard-sm">The Problem</span>
                        <p className="text-lg md:text-xl text-ink leading-relaxed font-sans pt-2">
                            {project.problem}
                        </p>
                     </div>
                    
                    <div className="pt-2 md:pt-4">
                       <h4 className="text-base md:text-lg font-bold font-heading text-ink mb-2 md:mb-4 underline decoration-wavy decoration-accent">Built With:</h4>
                       <div className="flex flex-wrap gap-2 md:gap-3">
                          {project.stack.map((tech, i) => (
                            <span key={i} className="px-2 md:px-3 py-1 bg-paper border-2 border-ink text-ink text-xs md:text-sm font-bold font-sans shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-110 transition-transform cursor-default">
                              {tech}
                            </span>
                          ))}
                       </div>
                    </div>
                 </div>

                 {/* Right Side: Solution Card */}
                 <div className="p-6 md:p-12 bg-white border-2 border-ink shadow-hard-xl rotate-1 relative order-1 md:order-2">
                    {/* Folder Tab Look */}
                    <div className="absolute -top-6 right-0 w-24 md:w-32 h-8 bg-white border-t-2 border-l-2 border-r-2 border-ink rounded-t-lg"></div>
                    
                    <div className="space-y-4 md:space-y-8 relative z-10">
                       <div>
                          <h4 className="text-xl md:text-2xl font-bold font-heading text-ink mb-2 border-b-2 border-accent inline-block">The Solution</h4>
                          <p className="text-ink leading-relaxed text-base md:text-lg font-sans">{project.solution}</p>
                       </div>
                       <div>
                          <h4 className="text-xl md:text-2xl font-bold font-heading text-ink mb-2 border-b-2 border-secondary inline-block">The Impact</h4>
                          <p className="text-ink leading-relaxed text-base md:text-lg font-sans">{project.impact}</p>
                       </div>
                       {project.url && (
                          <div className="pt-4 md:pt-6 border-t-2 border-dashed border-ink flex justify-end">
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-primary text-white border-2 border-ink font-bold font-heading shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-sm md:text-base">
                               See It Live 
                               <span className="transform group-hover:rotate-45 transition-transform inline-block">&rarr;</span>
                            </a>
                          </div>
                       )}
                    </div>
                 </div>
              </div>

               {/* Mountain Stamp & Milestone - Outside content grid, anchored to viewport */}
               <div className="absolute bottom-16 right-4 md:bottom-2 md:right-10 w-48 md:w-64 h-32 md:h-48 opacity-90 pointer-events-none z-0 flex flex-col items-end">
                   <p className="font-heading text-xl md:text-2xl text-ink rotate-[-5deg] mr-8 md:mr-12 mb-[-10px] md:mb-[-20px] transform translate-y-4">
                      {project.milestone || `Camp ${index + 1}`}
                   </p>
                   <img src={mountainsIll} alt="Mountain Milestone" className="w-full h-full object-contain object-bottom drop-shadow-xl" />
               </div>

               {/* Footsteps Trail - Connecting to next project */}
               {index !== projects.length - 1 && (
                  <div className="absolute bottom-10 -right-20 md:-right-32 w-32 md:w-48 h-16 md:h-24 opacity-60 pointer-events-none transform rotate-12 z-0 hidden lg:block">
                      <img src={footstepsIll} alt="Trail" className="w-full h-full object-contain filter contrast-125" />
                  </div>
               )}

                {/* Mobile Swipe Indicator (Only on first item) */}
                {index === 0 && (
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:hidden animate-pulse flex flex-col items-center gap-1 opacity-70">
                        <span className="font-heading font-bold text-ink text-sm">Swipe for Journey</span>
                        <div className="w-12 h-1 bg-ink rounded-full"></div>
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
