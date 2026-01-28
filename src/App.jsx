import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CompanyProjects from './components/CompanyProjects';
import PersonalProjects from './components/PersonalProjects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Passport from './components/Passport';
import Contact from './components/Contact';
import SectionWrapper from './components/SectionWrapper';
// import Passport from './components/Passport';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import CustomCursor from './components/CustomCursor';
import DoodleCanvas from './components/DoodleCanvas';
import TrailMap from './components/TrailMap';

function App() {
  const [theme, setTheme] = useState('light');

  // Audio assets (using creative commons placeholder logic or base64 if needed)
  // For now, we'll implement the logic to play sounds on hover/scroll
  const playSound = (type) => {
    // We can use a small sound pool for "rustle"
    const audio = new Audio(`https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3`); // Short paper rustle
    audio.volume = 0.1;
    audio.play().catch(() => {}); // Catch browser autoplay blocks
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    playSound('rustle');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Global refresh for ScrollTrigger to handle dynamic layouts
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1500);

    return () => clearTimeout(timer);
  }, [theme]);

  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-x-hidden">
       <CustomCursor playSound={playSound} />
       <DoodleCanvas />
       <TrailMap playSound={playSound} />

      <Navbar theme={theme} toggleTheme={toggleTheme} playSound={playSound} />
      
      <main className="w-full">
        <Hero id="hero" />
        
        <Experience id="experience" />

        <Passport id="summary" />

        <Skills id="skills" />
        
        <CompanyProjects id="company-projects" />
        
        <PersonalProjects id="personal-projects" />

        <About id="about" />
        
        <Contact id="contact" />
      </main>

      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true" focusable="false">
        <filter id="watercolor-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
        </filter>
        <filter id="watercolor-filter-v2">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="4" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
        </filter>
      </svg>
    </div>
  );
}

export default App;
