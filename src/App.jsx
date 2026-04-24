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


function App() {
  const [theme, setTheme] = useState('light');



  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
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
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
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
