import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`mb-16 md:mb-24 relative ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light">
            {subtitle}
          </p>
        )}
        <div className="w-24 h-1 bg-primary mt-6 rounded-full opacity-80" />
      </motion.div>
    </div>
  );
};

export default SectionHeading;
