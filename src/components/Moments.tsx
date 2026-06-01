import React from 'react';
import { motion } from 'framer-motion';
import { MOMENT_CARDS } from '../data/mockData';
import { SpotlightCard } from './ui/SpotlightCard';
import { Sparkles, ArrowRight, Clock, Sun, ChefHat, CupSoda, Beer } from 'lucide-react';

export const Moments: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 18,
        stiffness: 100,
      },
    },
  };

  const getGlowColor = (id: string) => {
    switch (id) {
      case 'manha':
        return 'rgba(245, 166, 35, 0.2)';
      case 'almoco':
        return 'rgba(45, 106, 79, 0.25)';
      case 'tarde':
        return 'rgba(255, 122, 0, 0.2)';
      case 'noite':
        return 'rgba(245, 166, 35, 0.3)';
      default:
        return 'rgba(255, 122, 0, 0.15)';
    }
  };

  // Helper to render Lucide Icons dynamically instead of emojis for that premium look
  const getMomentIcon = (id: string) => {
    switch (id) {
      case 'manha':
        return <Sun size={28} className="text-orangeGold" />;
      case 'almoco':
        return <ChefHat size={28} className="text-emerald-400" />;
      case 'tarde':
        return <CupSoda size={28} className="text-orangeCitrus" />;
      case 'noite':
        return <Beer size={28} className="text-orangeGold" />;
      default:
        return <Sun size={28} className="text-orangeCitrus" />;
    }
  };

  return (
    <section id="momentos" className="relative py-24 bg-darkBg overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-greenTropical/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <Clock size={12} className="text-orangeCitrus" />
            <span className="text-xs font-bold text-orangeGold uppercase tracking-wider">Acompanha seu dia</span>
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
          >
            Escolha seu Momento
          </motion.h2>
          
          <motion.p
            className="max-w-xl mx-auto text-sm md:text-base text-offWhite/70 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
          >
            Seja qual for a hora, a Casa de Sucos 100 Igual tem o sabor perfeito para alimentar sua rotina e seus momentos especiais.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {MOMENT_CARDS.map((card) => {
            return (
              <motion.div key={card.id} variants={cardVariants} className="h-full">
                <SpotlightCard
                  glowColor={getGlowColor(card.id)}
                  className="h-full flex flex-col justify-between p-6 border-white/5 hover:border-white/10"
                >
                  <div>
                    {/* Header: Lucide Icon & Time */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 shadow-sm">
                        {getMomentIcon(card.id)}
                      </div>
                      <span className="text-xs font-semibold text-offWhite/45 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                        {card.time}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-orangeCitrus transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs md:text-sm text-offWhite/60 mb-6 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div>
                    <div className="border-t border-white/5 pt-4">
                      <div className="text-[10px] uppercase font-bold text-orangeGold tracking-wider mb-2 flex items-center gap-1">
                        <Sparkles size={10} />
                        Sugestões da Casa:
                      </div>
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {card.products.map((prod, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-semibold text-offWhite/80 px-2 py-0.5 rounded-full bg-white/5 border border-white/5"
                          >
                            {prod}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href="#cardapio"
                      onClick={(e) => {
                        e.preventDefault();
                        const menuSection = document.getElementById('cardapio');
                        if (menuSection) {
                          window.scrollTo({
                            top: menuSection.offsetTop - 80,
                            behavior: 'smooth',
                          });
                        }
                      }}
                      className="group/btn flex items-center gap-1.5 text-xs font-extrabold text-orangeCitrus hover:text-white transition-colors duration-300"
                    >
                      <span>Ver cardápio completo</span>
                      <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
