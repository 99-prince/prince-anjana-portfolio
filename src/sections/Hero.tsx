import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Hero3D from '../three/Hero3D';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-left mb-12 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-primary font-mono tracking-widest text-sm md:text-base mb-4">
              HELLO, I AM
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tighter">
              {portfolioData.personalInfo.name.toUpperCase()}
            </h1>
            <h3 className="text-xl md:text-3xl text-gray-300 font-light mb-6">
              {portfolioData.personalInfo.role}
            </h3>
            <p className="text-base md:text-lg text-gray-400 max-w-lg mb-10 leading-relaxed font-light">
              {portfolioData.personalInfo.shortIntro}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-medium tracking-wide overflow-hidden rounded-sm transition-all hover:scale-105"
              >
                <span className="absolute inset-0 w-full h-full bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -translate-x-full"></span>
                <span className="relative flex items-center gap-2">
                  EXPLORE MY WORLD <ArrowRight size={18} />
                </span>
              </a>
              
              <a 
                href={portfolioData.resume.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-medium tracking-wide border border-white/20 rounded-sm transition-all hover:bg-white/5 hover:border-white/40"
              >
                <span className="flex items-center gap-2">
                  VIEW PROFILE <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right 3D Area */}
        <div className="w-full md:w-1/2 h-[500px] md:h-[700px] relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full h-full"
          >
            <Hero3D />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs text-gray-500 tracking-widest mb-2 font-mono">SCROLL</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
