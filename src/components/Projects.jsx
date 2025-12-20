import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiExternalLink, HiCode, HiUsers, HiLightningBolt } from 'react-icons/hi';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const projectsRef = useRef([]);

  const projects = [
    {
      title: 'ShopSync',
      category: 'SaaS / Business Tool',
      description: 'A multi-tenant inventory and management application for small businesses. Helps owners digitize their shops by tracking inventory, workers, and transactions.',
      features: ['Multi-tenant Architecture', 'Dashboard Analytics', 'Inventory Management', 'Worker Tracking'],
      link: 'https://shopsync-five.vercel.app/',
      color: 'from-blue-500 to-cyan-500',
      icon: <HiLightningBolt className="w-8 h-8 text-white" />
    },
    {
      title: 'Village Festival App',
      category: 'Community / Social',
      description: 'A digital platform to share festival details and updates for my village. Connects the community by providing centralized information about local events.',
      features: ['Event Schedules', 'Community Updates', 'Mobile First Design', 'Real-time Info'],
      link: 'https://kpl-festivals.vercel.app/',
      color: 'from-purple-500 to-pink-500',
      icon: <HiUsers className="w-8 h-8 text-white" />
    }
  ];

  useEffect(() => {
    projectsRef.current.forEach((project, index) => {
      gsap.fromTo(project,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: project,
            start: 'top 85%',
          }
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !projectsRef.current.includes(el)) {
      projectsRef.current.push(el);
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-center">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto">
          Personal initiatives solving real-world problems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              ref={addToRefs}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-slate-100 dark:border-slate-700"
            >
              <div className={`h-48 bg-gradient-to-r ${project.color} p-8 flex items-center justify-center relative overflow-hidden`}>
                 <div className="absolute top-0 left-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 <div className="transform scale-150 group-hover:scale-125 transition-transform duration-500">
                    {project.icon}
                 </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{project.title}</h3>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-100 dark:bg-slate-700 rounded-full text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors"
                  >
                    <HiExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
