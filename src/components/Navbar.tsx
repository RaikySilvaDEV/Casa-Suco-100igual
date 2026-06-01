import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Combos', href: '#cardapio' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Benefícios', href: '#sobre' },
  { label: 'Lojas', href: '#sobre' },
  { label: 'Contato', href: '#delivery' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveSection(href.substring(1));
    setIsMobileMenuOpen(false);
    
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0D0D0D]/90 backdrop-blur-lg border-b border-white/5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-transparent py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo (Screenshot Style) */}
          <a
            href="#inicio"
            onClick={(e) => handleLinkClick(e, '#inicio')}
            className="flex flex-col text-left group cursor-pointer"
          >
            <span className="text-xl md:text-2xl font-black tracking-tight text-white group-hover:text-[#8ac926] transition-colors leading-none">
              100<span className="text-[#8ac926]">IGUAL</span>
            </span>
            <span className="text-[8px] tracking-[0.18em] text-[#8ac926] uppercase font-bold mt-1 group-hover:text-white transition-colors">
              CASA DE SUCOS
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative text-sm font-semibold tracking-wide transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-offWhite/65 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute bottom-[-6px] left-0 right-0 h-[2px] bg-[#8ac926]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Pedir no WhatsApp Green Pill Button */}
          <a
            href="https://wa.me/5516999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4CAF50] hover:bg-[#43A047] text-white font-extrabold text-xs transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_5px_15px_rgba(76,175,80,0.2)]"
          >
            {/* WhatsApp Icon */}
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.115-2.887-6.98-1.865-1.865-4.343-2.89-6.985-2.891-5.439 0-9.865 4.42-9.869 9.865-.001 1.748.461 3.456 1.338 4.966L1.879 21.03l4.768-1.876zm12.338-7.986c-.328-.164-1.94-.957-2.24-1.066-.298-.11-.517-.164-.734.164-.218.328-.846 1.066-1.037 1.284-.19.218-.38.245-.708.081-.328-.164-1.386-.51-2.64-1.627-.975-.87-1.633-1.946-1.824-2.274-.19-.328-.02-.505.143-.668.148-.147.328-.383.493-.574.164-.19.218-.328.328-.547.11-.218.055-.41-.027-.574-.082-.164-.734-1.77-.997-2.42-.258-.633-.518-.547-.708-.557-.183-.01-.39-.01-.6-.01-.21 0-.555.08-.846.398-.29.319-1.11 1.085-1.11 2.648 0 1.564 1.138 3.078 1.293 3.296.155.218 2.24 3.42 5.423 4.795.757.327 1.348.52 1.81.667.76.241 1.45.207 1.996.126.608-.09 1.94-.793 2.214-1.56.273-.766.273-1.422.19-1.56-.081-.137-.298-.218-.626-.382z"/>
            </svg>
            <span>Pedir no WhatsApp</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-offWhite transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#0D0D0D]/98 backdrop-blur-2xl flex flex-col justify-center items-center lg:hidden"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-col items-center gap-6 text-center">
              {NAV_LINKS.map((link, idx) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`text-2xl font-bold tracking-wide transition-colors ${
                      isActive ? 'text-[#8ac926]' : 'text-offWhite hover:text-white'
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
              
              <motion.a
                href="https://wa.me/5516999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center gap-2 px-6 py-3 rounded-full bg-[#4CAF50] text-white font-extrabold hover:scale-105 active:scale-95 shadow-[0_5px_15px_rgba(76,175,80,0.2)] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {/* WhatsApp Icon */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.115-2.887-6.98-1.865-1.865-4.343-2.89-6.985-2.891-5.439 0-9.865 4.42-9.869 9.865-.001 1.748.461 3.456 1.338 4.966L1.879 21.03l4.768-1.876zm12.338-7.986c-.328-.164-1.94-.957-2.24-1.066-.298-.11-.517-.164-.734.164-.218.328-.846 1.066-1.037 1.284-.19.218-.38.245-.708.081-.328-.164-1.386-.51-2.64-1.627-.975-.87-1.633-1.946-1.824-2.274-.19-.328-.02-.505.143-.668.148-.147.328-.383.493-.574.164-.19.218-.328.328-.547.11-.218.055-.41-.027-.574-.082-.164-.734-1.77-.997-2.42-.258-.633-.518-.547-.708-.557-.183-.01-.39-.01-.6-.01-.21 0-.555.08-.846.398-.29.319-1.11 1.085-1.11 2.648 0 1.564 1.138 3.078 1.293 3.296.155.218 2.24 3.42 5.423 4.795.757.327 1.348.52 1.81.667.76.241 1.45.207 1.996.126.608-.09 1.94-.793 2.214-1.56.273-.766.273-1.422.19-1.56-.081-.137-.298-.218-.626-.382z"/>
                </svg>
                <span>Pedir no WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
