import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCompass, FaMapMarkerAlt } from 'react-icons/fa';
import { GiPineTree } from 'react-icons/gi';

gsap.registerPlugin(ScrollTrigger);
import expIll from '../assets/exp_ill.png';
import mountainsIll from '../assets/mountains.png';

const Experience = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const experiences = [
    {
      role: 'Data Scientist / Full Stack AI Developer',
      company: 'Startup',
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
          title: 'Medical Appointment System',
          tech: 'ReactJS, Full Stack',
          details: 'Developing a multi-user platform for doctors, patients, and labs with role-based access control.'
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
    <div className="py-20 bg-paper transition-colors duration-300 relative overflow-hidden" id="experience">
        {/* Background Grid - Map Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative mb-20 text-center">
             <div className="inline-block p-3 border-2 border-ink rounded-full bg-white shadow-hard mb-4 animate-spin-slow">
                <FaCompass className="text-4xl text-primary" />
             </div>
             <br />
             <h2 className="text-4xl md:text-5xl font-bold font-heading text-ink transform rotate-1 relative z-10 inline-block">
               The Road <span className="text-white bg-primary px-2 border-2 border-ink shadow-hard-sm transform -rotate-2 inline-block">North</span>
             </h2>
             <p className="mt-4 text-xl text-ink/70 font-sans italic">"A chronological journey through the wilderness."</p>
             
             {/* Running Character Illustration */}
             <div className="hidden lg:block absolute -top-10 right-[15%] w-32 h-32 animate-bounce" style={{animationDuration: '3s'}}>
                <img src={expIll} alt="Journey" className="w-full h-full object-contain filter drop-shadow-[4px_4px_0px_rgba(24,24,27,1)]" />
             </div>
        </div>

        {/* Mountain Range Footer */}
        <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 z-0 pointer-events-none opacity-50">
           <img src={mountainsIll} alt="Wilderness Mountains" className="w-full h-full object-cover object-bottom" />
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pb-12 last:pb-0">
              {/* Timeline Line - Hand drawn style */}
              <div className="absolute top-0 left-6 h-full w-2 border-l-2 border-dashed border-ink hidden md:block"></div>

              <div ref={addToRefs} className="relative md:pl-16">
                {/* Timeline Dot - Checkpoint */}
                <div className="absolute top-0 left-6 w-8 h-8 rounded-full bg-secondary border-2 border-ink hidden md:flex items-center justify-center transform -translate-x-1/2 z-10 box-content shadow-hard-sm">
                    <GiPineTree className="text-white text-lg" />
                </div>

                <div className="bg-paper rounded-none border-2 border-ink p-8 shadow-hard hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all group relative transform rotate-1">
                    {/* Tape */}
                    <div className="absolute -top-3 right-1/2 translate-x-1/2 w-32 h-8 bg-yellow-100/80 border-l border-r border-white/20 -rotate-2 z-20 shadow-sm"></div>

                    {/* Stamp */}
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-primary/30 rounded-full flex items-center justify-center transform -rotate-12 opacity-70 pointer-events-none">
                        <span className="font-heading font-bold text-primary/30 text-xs uppercase text-center p-2">
                             Log Entry <br/> 2023
                        </span>
                    </div>

                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 relative z-10">
                    <div>
                      <h3 className="text-3xl font-bold font-heading text-ink mb-1 group-hover:text-primary transition-colors underline decoration-wavy decoration-accent/50">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-primary-dark font-bold font-sans text-lg">
                          <FaMapMarkerAlt />
                          {exp.company}
                      </div>
                    </div>
                    <span className="inline-block px-4 py-2 mt-4 md:mt-0 bg-ink text-white font-heading font-bold text-lg border-2 border-transparent shadow-[4px_4px_0px_white,6px_6px_0px_black] transform rotate-2">
                      {exp.duration}
                    </span>
                  </div>

                  <p className="text-ink/80 mb-8 leading-relaxed text-lg font-sans border-l-4 border-accent pl-4 italic">
                    {exp.description}
                  </p>

                  <div className="space-y-6">
                    {exp.projects.map((project, idx) => (
                      <div key={idx} className="bg-white p-6 border-2 border-ink hover:bg-accent/10 transition-colors relative">
                        

                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-xl font-bold font-heading text-ink flex items-center gap-2">
                            <span className="text-primary">•</span> {project.title}
                          </h4>
                          {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs font-bold font-sans uppercase tracking-widest border-2 border-ink px-3 py-1 bg-secondary text-white hover:bg-ink hover:text-white transition-colors shadow-hard-sm">
                                Visit
                            </a>
                          )}
                        </div>
                        <p className="text-ink/70 text-base mb-3 leading-relaxed font-sans">
                          {project.details}
                        </p>
                        <div className="flex flex-wrap gap-2">
                           <span className="font-bold text-xs uppercase text-ink/40 mr-2 self-center">Gear:</span>
                          {project.tech.split(',').map((tech, tIdx) => (
                            <span key={tIdx} className="px-2 py-0.5 text-xs bg-gray-100 text-ink border border-ink font-bold font-sans rounded-sm">
                              {tech.trim()}
                            </span>
                          ))}
                        </div>
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

export default Experience;
