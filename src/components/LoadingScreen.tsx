import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-foreground"
    >
      <div className="flex flex-col items-center space-y-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold tracking-[0.2em]"
        >
          PRINCE
        </motion.h1>
        
        <div className="w-64 md:w-80 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-primary"
            style={{ width: `${progress}%` }}
            initial={{ width: "0%" }}
          />
        </div>
        
        <div className="flex justify-between w-64 md:w-80 text-sm md:text-base text-gray-400 font-mono tracking-widest">
          <span>[INITIALIZING...]</span>
          <span>{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
