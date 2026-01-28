import { useState, useEffect } from 'react';
import { HiMenu, HiX, HiMoon, HiSun } from 'react-icons/hi';

const Navbar = ({ theme, toggleTheme, playSound }) => {
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
    { name: 'Experience', href: '#experience' },
    { name: 'Summary', href: '#summary' },
    { name: 'Skills', href: '#skills' },
    { name: 'Work', href: '#company-projects' },
    { name: 'Side Projects', href: '#personal-projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-paper/95 shadow-hard-sm border-b-2 border-ink' 
        : 'bg-transparent border-transparent'
    }`}>
       {/* Hiking Trail Scroll Progress - Into the Wild Colors */}
      <div className="absolute bottom-0 left-0 h-2 bg-ink/5 w-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-wc-blue via-wc-teal to-wc-yellow watercolor-border opacity-80" 
            style={{width: `${scrollProgress}%`}}
          >
               {/* Hiker/Bus Icon walking the trail */}
               <div className="absolute -right-3 -top-3 text-xl transform -scale-x-100 transition-all duration-500">
                   {scrollProgress > 98 ? '🚌' : '🚶'}
               </div>
          </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-heading font-bold tracking-tighter group flex items-center gap-1">
              <span className="text-ink group-hover:text-wc-blue transition-colors transform -rotate-3 inline-block watercolor-border bg-white/60 backdrop-blur-sm px-3 py-1 shadow-lg border-2 border-ink/5">SR</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => playSound('rustle')}
                  className="text-lg font-bold text-ink hover:text-wc-blue transition-all hover:scale-110 transform hover:-rotate-2 inline-block relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-wc-blue group-hover:w-full transition-all duration-300 rounded-full"></span>
                </a>
              ))}
              <div className="h-6 w-0.5 bg-ink/10 mx-4 rotate-12"></div>
              <button
                onClick={toggleTheme}
                onMouseEnter={() => playSound('rustle')}
                className="p-2 rounded-lg bg-white border-2 border-ink text-ink hover:bg-accent transition-all shadow-hard-sm"
              >
                {theme === 'dark' ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
              </button>
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
        <div className="md:hidden bg-paper/95 backdrop-blur-md border-b-2 border-ink shadow-hard p-4 absolute w-full top-20 left-0 animate-slideDown origin-top z-40">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg border-2 border-ink bg-white/80 text-lg font-bold text-ink hover:bg-primary hover:text-white hover:shadow-hard-sm transition-all transform hover:-rotate-1"
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
