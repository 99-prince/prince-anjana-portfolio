import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';

const Resume = () => {
  return (
    <section id="resume" className="py-24 relative bg-black/40">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="RESUME" subtitle="A complete overview of my education, skills, and experience." />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card group relative h-[520px] perspective"
        >
          <div className="absolute inset-0 h-full w-full transform-style-3d transition-transform duration-700 group-hover:rotate-y-180">
            <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center bg-[#111] p-8 text-center backface-hidden">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Download size={36} />
              </div>
              <h3 className="text-3xl font-bold text-white">Prince Anjana Resume</h3>
              <p className="mt-4 max-w-xl text-gray-400">{portfolioData.resume.description}</p>
              <span className="mt-10 text-xs uppercase tracking-[0.3em] text-primary">Hover to preview</span>
            </div>

            <div className="absolute inset-0 flex h-full w-full rotate-y-180 flex-col bg-primary/5 p-6 backface-hidden">
              <div className="min-h-0 flex-1 overflow-hidden rounded-lg border border-white/10 bg-white">
                <iframe
                  src={portfolioData.resume.link}
                  title="Prince Anjana resume preview"
                  className="h-full w-full"
                />
              </div>
              <a
                href={portfolioData.resume.link}
                download
                className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-sky-600"
              >
                DOWNLOAD RESUME <Download size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
