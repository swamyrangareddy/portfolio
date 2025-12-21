import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CompanyProjects from './components/CompanyProjects';
import PersonalProjects from './components/PersonalProjects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import SectionWrapper from './components/SectionWrapper';
// import Passport from './components/Passport';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Custom Cursor Logic
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    const follower = document.getElementById('cursor-follower');
    
    const moveCursor = (e) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
      gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.3 });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-x-hidden cursor-none">
       {/* Custom Cursor Elements */}
       <div id="custom-cursor" className="fixed top-0 left-0 w-4 h-4 bg-ink rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"></div>
       <div id="cursor-follower" className="fixed top-0 left-0 w-8 h-8 border-2 border-ink rounded-full pointer-events-none z-[99] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out opacity-50"></div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="w-full">
        <Hero />
        
        <SectionWrapper id="about">
          <About />
        </SectionWrapper>

        {/* <SectionWrapper id="summary">
            <Passport />
        </SectionWrapper> */}
        
        <CompanyProjects />
        
        <SectionWrapper id="personal-projects">
           <PersonalProjects />
        </SectionWrapper>
        
        <SectionWrapper id="skills">
          <Skills />
        </SectionWrapper>
        
        <SectionWrapper id="experience">
          <Experience />
        </SectionWrapper>
        
        <SectionWrapper id="contact">
          <Contact />
        </SectionWrapper>
      </main>
    </div>
  );
}

export default App;
