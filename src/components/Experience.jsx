import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiBriefcase, HiChip, HiCode, HiChartBar, HiGlobeAlt } from 'react-icons/hi';

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
      projects: [
        {
          title: 'ATS Application',
          tech: 'ReactJS, Material UI, Flask, MongoDB, Gemini API, all-mpnet-base-v2',
          details: 'Built a comprehensive Applicant Tracking System with resume parsing via Gemini API and semantic search using embeddings. Features include dashboard, recruiter management, and candidate scoring.'
        },
        {
          title: 'Medical Appointment System',
          tech: 'ReactJS, Full Stack',
          details: 'Developing a multi-user platform for doctors, patients, and labs. Features appointment scheduling, lab report management, and role-based access control.'
        },
        {
          title: 'Data Visualization Dashboards',
          tech: 'Python, Streamlit',
          details: 'Analyzed complex CSV datasets and built interactive dashboards to visualize key business metrics and trends.'
        },
        {
          title: 'Company Website',
          tech: 'Web Tech, Google Sheets API',
          details: 'Developed the official company website (einsteiniumlabs.com) with a custom form integration that stores submissions directly to Google Sheets.',
          link: 'https://www.einsteiniumlabs.com/'
        },
        {
          title: 'Object Detection System',
          tech: 'YOLOv8, Computer Vision',
          details: 'Trained and deployed a custom YOLOv8 model for x-ray bag scanning to detect prohibited items like guns and knives.'
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
    <div className="py-20 bg-white transition-colors duration-300 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative mb-20 text-center">
             <h2 className="text-4xl md:text-5xl font-bold font-heading text-ink transform rotate-1 relative z-10 inline-block">
               The Road <span className="text-white bg-primary px-2 border-2 border-ink shadow-hard-sm transform -rotate-2 inline-block">North</span>
             </h2>
             <p className="mt-4 text-xl text-ink/70 font-sans italic">"A chronological journey through the wilderness."</p>
             
             {/* Running Character Illustration */}
             <div className="hidden lg:block absolute -top-10 right-20 w-40 h-40 animate-bounce" style={{animationDuration: '3s'}}>
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
              <div className="absolute top-0 left-6 h-full w-1 bg-ink hidden md:block" style={{borderRadius: '40% 60% 40% 60% / 60% 40% 60% 40%'}}></div>

              <div ref={addToRefs} className="relative md:pl-16">
                {/* Timeline Dot */}
                <div className="absolute top-0 left-3 w-7 h-7 rounded-full bg-accent border-2 border-ink hidden md:block transform -translate-x-1/2 z-10 box-content shadow-hard-sm"></div>

                <div className="bg-paper rounded-none border-2 border-ink p-8 shadow-hard hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all group relative">
                    {/* Tape */}
                    <div className="absolute -top-3 right-10 w-24 h-6 bg-red-200/80 border-l-2 border-r-2 border-white/20 rotate-3 z-20"></div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold font-heading text-ink mb-1 group-hover:text-primary transition-colors">{exp.role}</h3>
                      <p className="text-lg text-primary-dark font-bold font-sans">{exp.company}</p>
                    </div>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white border-2 border-ink text-ink text-sm font-bold mt-2 md:mt-0 shadow-hard-sm transform -rotate-1">
                      {exp.duration}
                    </span>
                  </div>

                  <p className="text-ink/80 mb-8 leading-relaxed text-lg font-sans">
                    {exp.description}
                  </p>

                  <div className="space-y-4">
                    {exp.projects.map((project, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-6 border-2 border-ink hover:bg-accent/20 transition-colors relative">
                        {/* Project Decoration */}
                        <div className="absolute top-2 left-2 w-2 h-2 rounded-full border border-ink bg-ink"></div>
                        <div className="absolute top-2 right-2 w-2 h-2 rounded-full border border-ink bg-ink"></div>

                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-lg font-bold font-heading text-ink flex items-center gap-2">
                            {project.title}
                          </h4>
                          {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-dark hover:underline flex-shrink-0 font-bold font-sans border-2 border-ink px-2 bg-white hover:bg-primary hover:text-white transition-colors">
                               Visit &rarr;
                            </a>
                          )}
                        </div>
                        <p className="text-ink/70 text-sm mb-4 leading-relaxed font-sans">
                          {project.details}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.split(',').map((tech, tIdx) => (
                            <span key={tIdx} className="px-2.5 py-1 text-xs bg-paper text-ink border-2 border-ink font-bold font-sans shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
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
