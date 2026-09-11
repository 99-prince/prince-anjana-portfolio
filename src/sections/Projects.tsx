import { motion } from 'framer-motion';
import { Code2, ExternalLink, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative bg-black/30">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="SELECTED WORKS" subtitle="Real applications and technical work built while developing my software engineering skills." />
        
        <div className="space-y-24 md:space-y-32">
          {portfolioData.projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
            >
              {/* Image side */}
              <div className="w-full lg:w-3/5 relative group perspective">
                <div className="absolute -inset-4 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative rounded-xl overflow-hidden glass border border-white/10 transform-gpu transition-all duration-500 group-hover:scale-[1.02] group-hover:rotate-y-2 group-hover:rotate-x-2">
                  <div className="absolute inset-0 bg-background/40 group-hover:bg-transparent transition-all duration-500 z-10 mix-blend-overlay"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto aspect-video object-cover"
                  />
                </div>
              </div>
              
              {/* Content side */}
              <div className={`w-full lg:w-2/5 flex flex-col ${index % 2 !== 0 ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'} relative z-20`}>
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="text-primary font-mono tracking-widest text-sm">PROJECT 0{index + 1}</span>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">{project.category}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <div className="glass-card p-6 md:p-8 mb-6 relative w-full lg:w-[120%] lg:-ml-10 z-30 shadow-2xl">
                  <p className="text-gray-300 font-light leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <p className="text-sm text-gray-400 mb-2 border-l-2 border-primary pl-4">
                    <span className="font-semibold text-white">Challenge:</span> {project.challenges}
                  </p>
                  <p className="text-sm text-gray-400 border-l-2 border-primary/50 pl-4">
                    <span className="font-semibold text-white">Result:</span> {project.results}
                  </p>
                </div>

                <ul className={`mb-6 grid grid-cols-1 gap-2 text-sm text-gray-300 sm:grid-cols-2 ${index % 2 !== 0 ? 'lg:justify-items-end' : ''}`}>
                  {project.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="inline-flex items-center gap-2">
                      <Check size={15} className="shrink-0 text-primary" /> {feature}
                    </li>
                  ))}
                </ul>
                
                <ul className={`mb-8 flex flex-wrap gap-2 ${index % 2 !== 0 ? 'lg:justify-end' : 'justify-start'}`}>
                  {project.technologies.map((tech, i) => (
                    <li key={i} className="rounded border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-mono text-gray-300">{tech}</li>
                  ))}
                </ul>
                
                <div className="flex gap-6 items-center">
                  <a
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary transition-transform hover:-translate-y-1"
                    aria-label="GitHub Repository"
                  >
                    <span className="inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2 text-sm transition-colors hover:border-primary hover:text-primary"><Code2 size={17} /> GitHub</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white transition-transform hover:-translate-y-1 hover:text-primary"
                      aria-label={`Open ${project.title} live demo`}
                    >
                      <span className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm transition-colors hover:bg-sky-600"><ExternalLink size={17} /> Live Demo</span>
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

export default Projects;
