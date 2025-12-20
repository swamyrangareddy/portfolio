import { useState, useEffect } from 'react';
import { HiMenu, HiX, HiMoon, HiSun } from 'react-icons/hi';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#company-projects' },
    { name: 'Side Projects', href: '#personal-projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-paper/95 shadow-hard-sm border-b-2 border-ink' 
        : 'bg-transparent border-transparent'
    }`}>
       {/* Hiking Trail Scroll Progress - Into the Wild Colors */}
       <div className="absolute bottom-0 left-0 h-1.5 bg-ink/10 w-full">
           <div 
             className="h-full bg-gradient-to-r from-cyan-600 via-teal-500 to-yellow-400 relative" 
             style={{width: `${scrollProgress}%`}}
           >
               {/* Hiker/Bus Icon walking the trail */}
               <div className="absolute -right-3 -top-3.5 text-xl transform -scale-x-100 transition-all duration-500">
                   {scrollProgress > 98 ? '🚌' : '🚶'}
               </div>
           </div>
       </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-heading font-bold tracking-tighter group flex items-center gap-1">
              <span className="text-ink group-hover:text-primary transition-colors transform -rotate-3 inline-block border-2 border-ink bg-white px-2 py-1 shadow-hard-sm">SR</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold text-ink hover:text-primary transition-colors hover:scale-110 transform hover:-rotate-2 inline-block decoration-wavy hover:underline decoration-2"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-6 w-0.5 bg-ink mx-4 rotate-12"></div>
              {/* Theme Toggle Commented Out as requested */}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-white border-2 border-ink text-ink hover:bg-accent transition-all shadow-hard-sm"
              >
                {theme === 'dark' ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg bg-white border-2 border-ink text-ink hover:bg-primary hover:text-white transition-all shadow-hard-sm focus:outline-none"
            >
              {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-paper border-b-2 border-ink shadow-hard p-4 absolute w-full top-20 left-0">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg border-2 border-ink bg-white text-lg font-bold text-ink hover:bg-primary hover:text-white hover:shadow-hard-sm transition-all transform hover:-rotate-1"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
