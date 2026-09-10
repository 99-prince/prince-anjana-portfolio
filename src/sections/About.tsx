import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="ABOUT ME" subtitle="A glimpse into who I am and what drives me." />
        
        <div className="flex flex-col gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-5xl flex flex-col justify-center"
          >
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-8">
              {portfolioData.personalInfo.bio}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              <div className="glass p-6 rounded-lg text-center">
                <h4 className="text-3xl font-bold text-white mb-2">{portfolioData.stats.yearsOfLearning}</h4>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-mono">Years Exp</p>
              </div>
              <div className="glass p-6 rounded-lg text-center">
                <h4 className="text-3xl font-bold text-white mb-2">{portfolioData.stats.projectsCompleted}</h4>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-mono">Projects</p>
              </div>
              <div className="glass p-6 rounded-lg text-center">
                <h4 className="text-3xl font-bold text-white mb-2">{portfolioData.stats.certifications}</h4>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-mono">Certs</p>
              </div>
              <div className="glass p-6 rounded-lg text-center">
                <h4 className="text-3xl font-bold text-white mb-2">{portfolioData.stats.achievements}</h4>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-mono">Awards</p>
              </div>
            </div>
            
            <div className="space-y-4 font-mono text-sm">
              <div className="flex border-b border-white/10 pb-4">
                <span className="text-primary w-32">LOCATION</span>
                <span className="text-gray-300">{portfolioData.personalInfo.location}</span>
              </div>
              <div className="flex border-b border-white/10 pb-4">
                <span className="text-primary w-32">CURRENT ROLE</span>
                <span className="text-gray-300">{portfolioData.personalInfo.role}</span>
              </div>
              <div className="flex border-b border-white/10 pb-4">
                <span className="text-primary w-32">GOAL</span>
                <span className="text-gray-300">{portfolioData.personalInfo.careerGoal}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
