import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';

const Education = () => {
  return (
    <section id="education" className="py-24 relative bg-black/50">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="MY JOURNEY" subtitle="Educational background and timeline." />
        
        <div className="max-w-4xl mx-auto relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          {portfolioData.education.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-12 last:mb-0`}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-background group-hover:border-primary group-hover:bg-primary/20 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-300 z-10 ml-0 md:ml-0">
                <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300" />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-card p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                  <span className="text-primary font-mono text-sm mt-2 sm:mt-0 bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap inline-block w-max">
                    {item.year}
                  </span>
                </div>
                <h4 className="text-gray-300 text-lg mb-2">{item.institution}</h4>
                <div className="text-sm text-gray-400 font-mono mb-4 border-b border-white/10 pb-4 inline-block">
                  {item.gradeLabel ?? 'Grade'}: {item.grade}
                </div>
                <p className="text-gray-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
