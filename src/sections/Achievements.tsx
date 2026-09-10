import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative bg-black/40">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="ACHIEVEMENTS" subtitle="Milestones, awards, and recognitions." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card flex flex-col sm:flex-row overflow-hidden group"
            >
              <div className="w-full sm:w-1/3 h-48 sm:h-auto overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay"></div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                />
              </div>
              
              <div className="w-full sm:w-2/3 p-6 flex flex-col justify-center relative">
                <Trophy className="absolute top-6 right-6 text-white/5 w-16 h-16 pointer-events-none group-hover:text-primary/10 transition-colors" />
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-primary text-sm font-medium mb-1">{item.organization}</p>
                <p className="text-gray-500 text-xs font-mono mb-4">{item.date}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.description}
                </p>
                <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300 mt-auto w-max">
                  {item.position}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
