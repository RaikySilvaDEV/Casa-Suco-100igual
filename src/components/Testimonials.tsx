import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../data/mockData';
import { Star, ChevronLeft, ChevronRight, MessageSquare, Quote } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      handleNext();
    }, 6000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  // Slide Animation Variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 220, damping: 25 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 120 : -120,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring' as const, stiffness: 220, damping: 25 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }
    })
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="depoimentos" className="relative py-24 bg-darkBg overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-greenTropical/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <MessageSquare size={12} className="text-orangeCitrus" />
            <span className="text-xs font-bold text-orangeGold uppercase tracking-wider font-sans">Opinião dos Clientes</span>
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Quem já provou, aprova!
          </motion.h2>
          
          <motion.p
            className="max-w-xl mx-auto text-sm md:text-base text-offWhite/70 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Demonstração de avaliações de clientes frequentes sobre a qualidade incomparável dos nossos sucos, açaís e lanches tradicionais.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto relative px-4 md:px-12">
          
          <div className="min-h-[280px] flex items-center justify-center relative overflow-hidden py-4">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full h-full cursor-grab active:cursor-grabbing"
              >
                <SpotlightCard
                  glowColor="rgba(255, 122, 0, 0.15)"
                  className="w-full h-full p-8 md:p-12 flex flex-col justify-between border-white/5 bg-darkCard/60 backdrop-blur-md relative"
                >
                  <Quote size={120} className="absolute right-6 bottom-4 text-white/5 pointer-events-none" />

                  <div>
                    <div className="flex gap-1.5 mb-6 text-orangeGold">
                      {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                        <Star key={i} size={16} className="fill-orangeGold" />
                      ))}
                    </div>

                    <p className="text-sm md:text-lg text-offWhite/85 leading-relaxed font-semibold italic mb-8 relative z-10">
                      "{currentTestimonial.content}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4 relative z-10 border-t border-white/5 pt-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orangeCitrus to-orangeGold flex items-center justify-center font-black text-darkBg text-base shadow-glow-orange shrink-0">
                      {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    
                    <div>
                      <div className="text-sm font-extrabold text-white">
                        {currentTestimonial.name}
                      </div>
                      <div className="text-[10px] font-bold text-orangeGold uppercase tracking-wider">
                        {currentTestimonial.role}
                      </div>
                    </div>
                  </div>

                </SpotlightCard>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-between items-center mt-8">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-6 bg-orangeCitrus' : 'w-2.5 bg-white/10 hover:bg-white/20'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 text-offWhite hover:text-orangeCitrus hover:border-orangeCitrus/20 transition-all active:scale-90"
                aria-label="Previous Review"
              >
                <ChevronLeft size={16} />
              </button>
              
              <button
                onClick={handleNext}
                className="p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 text-offWhite hover:text-orangeCitrus hover:border-orangeCitrus/20 transition-all active:scale-90"
                aria-label="Next Review"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
