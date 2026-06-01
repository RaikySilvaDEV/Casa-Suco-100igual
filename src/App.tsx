import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { Timeline } from './components/Timeline';
import { Delivery } from './components/Delivery';
import { CTA } from './components/CTA';

export const App: React.FC = () => {
  // Page scroll progress bar at the very top of the screen
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Scroll to top on page refresh
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <div className="relative min-h-screen bg-darkBg text-offWhite selection:bg-orangeCitrus selection:text-darkBg font-sans antialiased overflow-x-hidden">
      
      {/* Scroll Progress Line Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orangeCitrus via-orangeGold to-greenTropical z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Premium Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Sobre Nós Section (Timeline.tsx) */}
      <Timeline />

      {/* Destaques da Casa (Menu.tsx) */}
      <Menu />

      {/* Info Strip (Delivery.tsx) */}
      <Delivery />

      {/* Footer (CTA.tsx) */}
      <CTA />

    </div>
  );
};

export default App;
