import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Navbar, type PageName } from './components/Navbar';

// Core Home page sections
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { Units } from './components/Units';
import { AboutSummary } from './components/AboutSummary';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { StatsSection } from './components/StatsSection';

// Page components
import { MenuPage } from './components/pages/MenuPage';
import { AboutPage } from './components/pages/AboutPage';
import { StoresPage } from './components/pages/StoresPage';
import { BenefitsPage } from './components/pages/BenefitsPage';
import { ContactPage } from './components/pages/ContactPage';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageName>('home');

  // Page scroll progress bar at the very top of the screen
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Scroll restoration on mount
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handlePageChange = (page: PageName) => {
    setCurrentPage(page);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  return (
    <div className="relative min-h-screen bg-[#080808] text-offWhite selection:bg-[#8ac926] selection:text-black font-sans antialiased overflow-x-hidden">
      
      {/* Scroll Progress Line Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#8ac926] via-[#FF7A00] to-[#4CAF50] z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Premium Navbar */}
      <Navbar
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

      {/* Animated Pages Container */}
      <AnimatePresence mode="wait">
        {currentPage === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* 1. Cinematic Hero Section */}
            <Hero onNavigate={handlePageChange} />

            {/* 2. Stats Section */}
            <StatsSection />

            {/* 3. Best Selling Menu Highlights (Featured) */}
            <Menu onNavigate={handlePageChange} />

            {/* 4. Franchise Branch Locations Finder */}
            <Units />

            {/* 5. About Summary Section (Hero Style) */}
            <AboutSummary onNavigate={handlePageChange} />

            {/* 6. Verified Customer Testimonials Carousel */}
            <Testimonials />
          </motion.div>
        )}

        {currentPage === 'menu' && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <MenuPage onBackToHome={handleBackToHome} onNavigate={handlePageChange} />
          </motion.div>
        )}

        {currentPage === 'about' && (
          <motion.div
            key="about"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <AboutPage onBackToHome={handleBackToHome} />
          </motion.div>
        )}

        {currentPage === 'stores' && (
          <motion.div
            key="stores"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <StoresPage onBackToHome={handleBackToHome} />
          </motion.div>
        )}

        {currentPage === 'benefits' && (
          <motion.div
            key="benefits"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <BenefitsPage onBackToHome={handleBackToHome} />
          </motion.div>
        )}

        {currentPage === 'contact' && (
          <motion.div
            key="contact"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <ContactPage onBackToHome={handleBackToHome} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Footer (CTA.tsx) */}
      <CTA onPageChange={handlePageChange} />


    </div>
  );
};

export default App;
