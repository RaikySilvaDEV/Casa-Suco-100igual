import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Navbar, type PageName } from './components/Navbar';

// Core Home page sections
import { Hero } from './components/Hero';
import { Featured } from './components/Featured';
import { Promo } from './components/Promo';
import { Menu } from './components/Menu';
import { OrderFlow } from './components/OrderFlow';
import { Timeline } from './components/Timeline';
import { Units } from './components/Units';
import { Moments } from './components/Moments';
import { Testimonials } from './components/Testimonials';
import { Delivery } from './components/Delivery';
import { CTA } from './components/CTA';

// Page components
import { MenuPage } from './components/pages/MenuPage';
import { AboutPage } from './components/pages/AboutPage';
import { StoresPage } from './components/pages/StoresPage';
import { BenefitsPage } from './components/pages/BenefitsPage';
import { ContactPage } from './components/pages/ContactPage';

import { AuthModal, type UserProfile } from './components/ui/AuthModal';
import mockUsers from './data/mockUsers.json';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageName>('home');
  const [user, setUser] = useState<UserProfile | null>(() => {
    const savedUser = localStorage.getItem('100igual_user_profile');
    if (savedUser) {
      try {
        return JSON.parse(savedUser);
      } catch (e) {
        console.error('Error parsing user profile from localStorage:', e);
      }
    }
    return null;
  });
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Page scroll progress bar at the very top of the screen
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Load user profile on mount
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    
    // Initialize mock database users if not present in localStorage
    const savedRegistry = localStorage.getItem('100igual_registered_profiles');
    if (!savedRegistry) {
      localStorage.setItem('100igual_registered_profiles', JSON.stringify(mockUsers));
    }
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

  const handleLoginSuccess = (profile: UserProfile) => {
    setUser(profile);
    localStorage.setItem('100igual_user_profile', JSON.stringify(profile));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('100igual_user_profile');
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
        user={user}
        onOpenAuth={() => setIsAuthModalOpen(true)}
        onLogout={handleLogout}
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

            {/* 2. Premium Core Values & Highlights Grid */}
            <Featured />

            {/* 3. Limited-Time Live Countdown Campaigns */}
            <Promo />

            {/* 4. Best Selling Menu Highlights */}
            <Menu />

            {/* 5. Simple 4-Step Interactive Order Flow */}
            <OrderFlow />

            {/* 6. Company Timeline & Local Sourcing Story */}
            <Timeline />

            {/* 7. Franchise Branch Locations Finder */}
            <Units />

            {/* 8. Instagram Style Social Photographic Moments */}
            <Moments />

            {/* 9. Verified Customer Testimonials Carousel */}
            <Testimonials />

            {/* 10. Logistics & Speed Strip */}
            <Delivery />
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
            <MenuPage
              onBackToHome={handleBackToHome}
              user={user}
              onOpenAuth={() => setIsAuthModalOpen(true)}
            />
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

      {/* Authentication Modal Dialog */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

    </div>
  );
};

export default App;
