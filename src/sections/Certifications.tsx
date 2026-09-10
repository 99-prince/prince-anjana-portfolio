import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="CERTIFICATIONS" subtitle="Professional credentials and continuous learning." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card group relative h-[400px] perspective"
            >
              <div className="absolute inset-0 w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                
                {/* Front */}
                <div className="absolute inset-0 w-full h-full backface-hidden flex flex-col p-8 bg-[#111]">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    <Award size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">{cert.name}</h3>
                  <p className="text-gray-400 font-medium mb-auto">{cert.organization}</p>
                  <div className="mt-6 flex justify-between items-end border-t border-white/10 pt-4">
                    <span className="text-sm font-mono text-gray-500">{cert.date}</span>
                    <span className="text-xs text-primary uppercase tracking-widest cursor-pointer group-hover:underline">Hover to view</span>
                  </div>
                </div>
                
                {/* Back */}
                <div className="absolute inset-0 w-full h-full backface-hidden flex flex-col items-center justify-center p-6 bg-primary/5 rotate-y-180">
                  <div className="w-full h-48 rounded-lg overflow-hidden mb-6 border border-white/10">
                    <img src={cert.image} alt={cert.name} className="w-full h-full object-cover opacity-80 mix-blend-luminosity" />
                  </div>
                  <p className="text-xs text-gray-400 font-mono mb-4 text-center">ID: {cert.credentialId}</p>
                  {cert.credentialLink ? (
                    <a 
                      href={cert.credentialLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-primary text-white rounded-full transition-colors text-sm font-medium tracking-wide"
                    >
                      VIEW CREDENTIAL <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="text-sm text-gray-500">Credential image shown above</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
