import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
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
          className="glass-card overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 border-b border-white/10">
            <p className="text-gray-300">{portfolioData.resume.description}</p>
            <div className="flex gap-3 shrink-0">
              <a
                href={portfolioData.resume.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-sky-600 transition-colors"
              >
                OPEN <ExternalLink size={16} />
              </a>
              <a
                href={portfolioData.resume.link}
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-md text-sm font-medium hover:bg-white/20 transition-colors"
              >
                DOWNLOAD <Download size={16} />
              </a>
            </div>
          </div>
          <iframe
            src={portfolioData.resume.link}
            title="Prince Anjana resume"
            className="w-full h-[700px] bg-white"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
