import React from 'react';
import { Code2, Briefcase, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5 py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-widest text-white mb-2">PRINCE</h2>
            <p className="text-sm text-gray-500">{portfolioData.footer.tagline}</p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href={portfolioData.contact.social.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors"
            >
              <Code2 size={18} />
            </a>
            <a 
              href={portfolioData.contact.social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors"
            >
              <Briefcase size={18} />
            </a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors uppercase tracking-widest"
          >
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            &copy; {portfolioData.footer.year} Prince. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-600">
            <span className="cursor-pointer hover:text-gray-400 transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-gray-400 transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
