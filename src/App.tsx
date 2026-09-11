import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import CustomCursor from './components/CustomCursor';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Achievements from './sections/Achievements';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Resume from './sections/Resume';
import Footer from './sections/Footer';
import Background3D from './three/Background3D';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for 3D assets and data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <div key="main" className="relative w-full min-h-screen">
            <div className="fixed inset-0 z-0 pointer-events-none">
              <Background3D />
            </div>
            
            <div className="relative z-10">
              <Navigation />
              <main className="overflow-x-clip">
                <Hero />
                <About />
                <Education />
                <Skills />
                <Projects />
                <Certifications />
                <Achievements />
                <Experience />
                <Resume />
                <Contact />
              </main>
              <Footer />
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
