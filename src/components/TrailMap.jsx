import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import magicBus from '../assets/magic_bus.png';
import campfire from '../assets/campfire.png';
import mountains from '../assets/mountains.png';
import footsteps from '../assets/footsteps.png';

const sections = [
  { id: 'hero', label: 'The Trailhead', icon: '🏕️', colorClass: 'wc-bg-blue' },
  { id: 'experience', label: 'Expedition Log', icon: '📜', colorClass: 'wc-bg-violet' },
  { id: 'summary', label: 'Technical Passport', icon: '🛂', colorClass: 'wc-bg-teal' },
  { id: 'skills', label: 'My Survival Gear', icon: '🛠️', colorClass: 'wc-bg-green' },
  { id: 'company-projects', label: 'Professional Peaks', icon: '🏔️', colorClass: 'wc-bg-yellow' },
  { id: 'personal-projects', label: 'Campfire Stories', icon: '🔥', colorClass: 'wc-bg-orange' },
  { id: 'about', label: 'Traveler\'s Journal', icon: '📓', colorClass: 'wc-bg-rose' },
  { id: 'contact', label: 'Final Campsite', icon: '⛺', colorClass: 'wc-bg-rose' }
];

const TrailMap = ({ playSound }) => {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Refresh ScrollTrigger after a slight delay to account for component mounting and pinned heights
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
      
      sections.forEach((section) => {
        ScrollTrigger.create({
          trigger: `#${section.id}`,
          start: 'top 40%',
          end: 'bottom 40%',
          onToggle: (self) => {
            if (self.isActive) setActiveSection(section.id);
          },
          invalidateOnRefresh: true,
        });
      });
    }, 2000); // Increased delay for stability with pinned sections

    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id) => {
    playSound?.('rustle');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getActiveIndex = () => {
    const index = sections.findIndex(s => s.id === activeSection);
    return index !== -1 ? index : 0;
  };

  return (
    <div className="trail-map-container hidden lg:flex flex-col items-center gap-6">
      <div className="relative h-[600px] w-12 flex flex-col items-center justify-between py-8">
        {/* The Dotted Trail Path */}
        <div className="absolute top-0 w-1 h-full dotted-grid opacity-30 -z-10 bg-ink/10 rounded-full"></div>
        
        {/* The Moving Character (Bus) - Locked to active index */}
        <motion.div 
            className="absolute z-20 w-12 h-12 flex items-center justify-center p-1 bg-white border-2 border-ink shadow-hard-sm rounded-lg"
            animate={{ 
              top: `${(getActiveIndex() / (sections.length - 1)) * (600 - 32)}px` 
            }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
            <img src={magicBus} alt="Moving Bus" className="w-full h-full object-contain" />
        </motion.div>

        {sections.map((section, idx) => (
          <div 
            key={section.id}
            className="relative group w-full flex justify-center"
          >
            {/* Path Marker */}
            <button
              onClick={() => scrollTo(section.id)}
              onMouseEnter={() => playSound?.('rustle')}
              className={`
                w-4 h-4 rounded-full border-2 border-ink transition-all duration-300 z-10
                ${activeSection === section.id 
                  ? 'bg-wc-yellow scale-150 rotate-45 shadow-hard-sm' 
                  : 'bg-white hover:bg-accent hover:scale-125'}
              `}
            >
                {/* Visual Connector Line Shadow */}
                {idx < sections.length - 1 && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-full bg-ink/10 -z-20"></div>
                )}
            </button>
          </div>
        ))}
      </div>
      
      {/* Scroll to Top / Bottom Character Accent */}
      <div className="text-2xl mt-4 opacity-40 hover:opacity-100 transition-opacity cursor-pointer transform hover:scale-110">
         🏔️
      </div>
    </div>
  );
};

export default TrailMap;
