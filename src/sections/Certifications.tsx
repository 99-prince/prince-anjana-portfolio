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
              className="glass-card group relative h-[440px] perspective"
            >
              <div className="absolute inset-0 h-full w-full transform-style-3d transition-transform duration-700 group-hover:rotate-y-180">
                <div className="absolute inset-0 flex h-full w-full flex-col bg-[#111] p-8 backface-hidden">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Award size={32} />
                  </div>
                  <h3 className="text-xl font-bold leading-tight text-white">{cert.name}</h3>
                  <p className="mt-2 text-gray-400">{cert.organization}</p>
                  <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/10 pt-4">
                    <span className="text-sm font-mono text-gray-500">{cert.date}</span>
                    <span className="text-xs uppercase tracking-widest text-primary">Hover to view</span>
                  </div>
                </div>

                <div className="absolute inset-0 flex h-full w-full rotate-y-180 flex-col items-center justify-center bg-primary/5 p-6 backface-hidden">
                  <div className="mb-6 h-56 w-full overflow-hidden rounded-lg border border-white/10 bg-white">
                    {cert.image.endsWith('.pdf') ? (
                      <iframe src={cert.image} title={`${cert.name} certificate`} className="h-full w-full" />
                    ) : (
                      <img src={cert.image} alt={cert.name} className="h-full w-full object-contain" />
                    )}
                  </div>
                  {cert.credentialLink && (
                    <a
                      href={cert.credentialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-primary"
                    >
                      VIEW CREDENTIAL <ExternalLink size={16} />
                    </a>
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
