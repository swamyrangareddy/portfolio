import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCompass, FaMapMarkerAlt } from 'react-icons/fa';
import { GiPineTree } from 'react-icons/gi';

gsap.registerPlugin(ScrollTrigger);
import expIll from '../assets/exp_ill.png';
import mountainsIll from '../assets/mountains.png';
import TiltWrapper from './TiltWrapper';

const Experience = ({ id }) => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const experiences = [
    {
      role: 'Data Scientist / Full Stack AI Developer',
      company: 'Einsteinium Labs',
      duration: '2023 - Present',
      description: 'Leading AI and full-stack development initiatives, building scalable applications and data solutions.',
      location: 'Remote / Hybrid',
      projects: [
        {
          title: 'ATS Application',
          tech: 'ReactJS, Material UI, Flask, MongoDB, Gemini API',
          details: 'Built a comprehensive Applicant Tracking System with resume parsing via Gemini API and semantic search.'
        },
        {
          title: 'Data Visualization Dashboards',
          tech: 'Python, Streamlit',
          details: 'Analyzed complex CSV datasets and built interactive dashboards to visualize key business metrics.'
        },
        {
          title: 'Company Website',
          tech: 'Web Tech, Google Sheets API',
          details: 'Developed the official company website (einsteiniumlabs.com) with custom form integration.',
          link: 'https://www.einsteiniumlabs.com/'
        },
        {
          title: 'Object Detection System',
          tech: 'YOLOv8, Computer Vision',
          details: 'Trained and deployed a custom YOLOv8 model for x-ray bag scanning to detect prohibited items.'
        }
      ]
    }
  ];

  useEffect(() => {
    const cards = cardsRef.current;
    
    if (cards.length > 0) {
      cards.forEach((card) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            }
          }
        );
      });
    }
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <div id={id} className="py-20 transition-colors duration-300 relative overflow-hidden">
        {/* Background Watercolor Splashes */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-wc-blue rounded-full watercolor-splash opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-wc-rose rounded-full watercolor-splash opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative mb-20 text-center">
             <div className="inline-block p-4 bg-white/60 backdrop-blur-sm border-2 border-ink/5 rounded-full shadow-lg watercolor-border mb-4 animate-spin-slow">
                <FaCompass className="text-4xl text-wc-blue" />
             </div>
             <br />
             <h2 className="text-3xl md:text-4xl font-bold font-heading text-ink transform rotate-1 relative z-10 inline-block">
               The Road <span className="text-white bg-wc-teal/80 px-4 py-1 watercolor-border shadow-lg transform -rotate-2 inline-block rounded-lg">North</span>
             </h2>
             <p className="mt-2 text-lg text-ink font-sans font-medium">"A chronological journey through the wilderness."</p>
             
             {/* Running Character Illustration - Watercolor Style */}
             <div className="hidden lg:block absolute -top-10 right-[15%] w-32 h-32 animate-bounce grayscale opacity-50" style={{animationDuration: '3s'}}>
                <img src={expIll} alt="Journey" className="w-full h-full object-contain filter drop-shadow-[4px_4px_10px_rgba(0,0,0,0.1)]" />
             </div>
        </div>

        {/* Mountain Range Footer - Subtle Watercolor Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 z-0 pointer-events-none opacity-20 grayscale contrast-150">
           <img src={mountainsIll} alt="Wilderness Mountains" className="w-full h-full object-cover object-bottom" />
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pb-12 last:pb-0">
              {/* Timeline Line - Soft Watercolor Style */}
              <div className="absolute top-0 left-6 h-full w-1 bg-ink/5 hidden md:block"></div>

              <div ref={addToRefs} className="relative md:pl-16">
                {/* Timeline Dot - Checkpoint */}
                <div className="absolute top-0 left-6 w-10 h-10 rounded-full bg-wc-teal text-white border-2 border-transparent hidden md:flex items-center justify-center transform -translate-x-1/2 z-10 watercolor-border shadow-lg">
                    <GiPineTree className="text-white text-xl" />
                </div>

                <div className="bg-transparent p-8 shadow-xl hover:scale-[1.01] transition-all group relative transform rotate-1 wc-wobbly-bg rounded-xl">
                    
                    {/* Stamp - Subtle Watercolor Dab */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-wc-rose rounded-full flex items-center justify-center transform -rotate-12 opacity-80 pointer-events-none wc-wobbly-bg bg-white/40 shadow-xl z-20">
                        <span className="font-heading font-black text-wc-rose text-sm uppercase text-center">
                             Log Entry <br/> 2023
                        </span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 relative z-10">
                    <div>
                      <h3 className="text-2xl font-black font-heading text-ink mb-1 group-hover:text-wc-blue transition-colors underline decoration-dotted decoration-wc-yellow/50">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-wc-rose font-black font-sans text-base">
                          <FaMapMarkerAlt />
                          {exp.company}
                      </div>
                    </div>
                    <span className="inline-block px-4 py-1.5 mt-4 md:mt-0 bg-ink text-wc-blue group-hover:text-wc-yellow font-heading font-black text-lg border-2 border-ink shadow-hard-sm transform rotate-2 rounded-lg wc-wobbly-bg relative z-20">
                      {exp.duration}
                    </span>
                  </div>

                  <p className="text-ink mb-6 leading-relaxed text-base md:text-lg font-sans border-l-4 border-wc-yellow/60 pl-4 font-bold">
                    {exp.description}
                  </p>

                    <div className="space-y-6">
                      {exp.projects.map((project, idx) => (
                        <TiltWrapper key={idx} className="bg-transparent p-6 hover:bg-wc-blue/5 transition-all relative wc-wobbly-bg rounded-lg shadow-sm overflow-hidden group/prj">
                          {/* Project-specific watercolor splotch */}
                          <div className={`absolute -right-10 -bottom-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover/prj:opacity-20 transition-opacity pointer-events-none -z-10 ${
                            idx % 5 === 0 ? 'bg-wc-blue' : 
                            idx % 5 === 1 ? 'bg-wc-rose' : 
                            idx % 5 === 2 ? 'bg-wc-teal' : 
                            idx % 5 === 3 ? 'bg-wc-yellow' : 
                            'bg-wc-violet'
                          }`}></div>
                        
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-xl font-bold font-heading text-ink flex items-center gap-2">
                            <span className="text-wc-rose">•</span> {project.title}
                          </h4>
                          {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs font-bold font-sans uppercase tracking-widest bg-wc-teal text-wc-blue  group-hover:text-wc-yellow px-4 py-1.5 rounded-full shadow-md hover:scale-105 transition-transform wc-wobbly-bg">
                                Visit
                            </a>
                          )}
                        </div>
                        <p className="text-ink text-base mb-3 leading-relaxed font-sans font-bold">
                          {project.details}
                        </p>
                        <div className="flex flex-wrap gap-2">
                           <span className="font-bold text-xs uppercase text-ink/60 mr-2 self-center">Gear:</span>
                          {project.tech.split(',').map((tech, tIdx) => (
                            <span key={tIdx} className="px-3 py-0.5 text-xs bg-white text-ink border border-ink/30 font-bold font-sans rounded-full shadow-sm">
                              {tech.trim()}
                            </span>
                          ))}
                        </div>
                        </TiltWrapper>
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

export default Experience;
