import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Code2, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center">

        {/* Profile image appears first on mobile so it remains the focal point without squeezing the copy. */}
        <div className="order-1 mb-12 flex w-full items-center justify-center md:order-2 md:mb-0 md:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[390px] lg:max-w-[430px]"
          >
            <div className="absolute -inset-5 rounded-[2rem] bg-sky-500/10 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950/80 shadow-2xl shadow-sky-950/40">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/35 via-transparent to-slate-950/10" aria-hidden="true" />
              <img
                src="/prince-anjana-profile.jpeg"
                alt="Prince Anjana - Software Developer"
                className="aspect-[4/5] w-full object-cover object-[center_18%]"
                width="768"
                height="960"
                fetchPriority="high"
              />
            </div>
          </motion.div>
        </div>

        {/* Left Content */}
        <div className="order-2 mb-12 flex w-full flex-col justify-center text-left md:order-1 md:mb-0 md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium tracking-wide text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" aria-hidden="true" />
              AVAILABLE FOR INTERNSHIPS
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tighter">
              <span className="block">{portfolioData.personalInfo.name.split(' ')[0]}</span>
              <span className="block text-primary">{portfolioData.personalInfo.name.split(' ')[1]}</span>
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
                  VIEW PROJECTS <ArrowRight size={18} />
                </span>
              </a>
              
              <a
                href={portfolioData.resume.link}
                download
                className="group inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-medium tracking-wide border border-white/20 rounded-sm transition-all hover:bg-white/5 hover:border-white/40"
              >
                <span className="flex items-center gap-2">
                  DOWNLOAD RESUME <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                </span>
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-5 text-sm text-gray-400">
              <a href={portfolioData.contact.social.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-white" aria-label="Open Prince Anjana's GitHub profile">
                <Code2 size={18} /> GitHub
              </a>
              <a href={portfolioData.contact.social.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-white" aria-label="Open Prince Anjana's LinkedIn profile">
                <Briefcase size={18} /> LinkedIn
              </a>
              <a href={portfolioData.contact.social.leetcode} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-white" aria-label="Open Prince Anjana's LeetCode profile">
                <Code2 size={18} /> LeetCode
              </a>
            </div>
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
