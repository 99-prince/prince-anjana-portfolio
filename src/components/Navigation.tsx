import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const navItems = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'EDUCATION', href: '#education' },
  { name: 'ACHIEVEMENTS', href: '#achievements' },
  { name: 'CERTIFICATIONS', href: '#certifications' },
  { name: 'CONTACT', href: '#contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    const sections = navItems.map((item) => document.querySelector(item.href)).filter((section): section is Element => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: '-35% 0px -55% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header 
      className={twMerge(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled ? 'py-4 bg-background/80 backdrop-blur-md border-b border-white/5 shadow-lg' : 'py-6 bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold tracking-widest text-white relative group">
          PRINCE
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className={twMerge('text-sm font-medium transition-colors relative group tracking-wider', activeSection === item.href.slice(1) ? 'text-primary' : 'text-gray-300 hover:text-white')}
            >
              {item.name}
              <span className={twMerge('absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300', activeSection === item.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full')}></span>
            </a>
          ))}
        </nav>

        <a href="/Prince-Anjana-Resume.pdf" download className="hidden md:inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-xs font-semibold tracking-wider text-white transition-colors hover:bg-sky-600">
          RESUME <Download size={15} />
        </a>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-white p-2"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col space-y-6 md:hidden shadow-2xl"
          >
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-300 hover:text-white tracking-widest"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
