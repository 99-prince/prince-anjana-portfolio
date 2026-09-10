import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="EXPERIENCE" subtitle="Professional journey and internships." />
        
        <div className="space-y-12 max-w-4xl mx-auto">
          {/* Professional Experience */}
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={`exp-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 border-b border-white/10 pb-6 relative z-10">
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <Briefcase size={20} className="text-primary" />
                    {exp.role}
                  </h3>
                  <h4 className="text-lg text-gray-400 mt-1">{exp.company}</h4>
                </div>
                <div className="mt-4 md:mt-0 px-4 py-2 bg-white/5 rounded-full text-sm font-mono text-gray-300 whitespace-nowrap">
                  {exp.startDate} — {exp.endDate}
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                {exp.description}
              </p>
              
              <div className="mb-6">
                <h5 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Key Responsibilities</h5>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                      <span className="text-primary mt-1">▹</span> {resp}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 pt-4">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Internships */}
          {portfolioData.internships.map((intern, index) => (
            <motion.div
              key={`int-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass p-8 rounded-xl border-l-4 border-l-primary/50 relative overflow-hidden group hover:border-l-primary transition-colors"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    {intern.role} <span className="text-xs px-2 py-1 bg-white/10 rounded font-normal uppercase tracking-widest ml-2">Internship</span>
                  </h3>
                  <h4 className="text-gray-400 mt-1">{intern.company}</h4>
                </div>
                <div className="mt-2 md:mt-0 text-sm font-mono text-gray-500">
                  {intern.duration}
                </div>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {intern.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {intern.technologies.map((tech, i) => (
                  <span key={i} className="text-xs text-gray-500 border border-gray-700 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
