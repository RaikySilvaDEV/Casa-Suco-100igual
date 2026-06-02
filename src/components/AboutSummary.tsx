import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ArrowRight } from 'lucide-react';

interface AboutSummaryProps {
  onNavigate?: (page: 'home' | 'menu' | 'about' | 'stores' | 'benefits' | 'contact') => void;
}

export const AboutSummary: React.FC<AboutSummaryProps> = ({ onNavigate }) => {
  return (
    <section
      id="sobre-resumo"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#000000] border-t border-white/5"
    >
      {/* Background ambient forest-green highlights */}
      <div className="absolute inset-0 bg-radial-gradient from-green-950/20 via-transparent to-transparent pointer-events-none z-0" />

      {/* Widescreen Background Image (Hero Style - Placed on Left) */}
      <motion.div
        className="absolute inset-0 lg:right-auto lg:w-[80%] z-10 pointer-events-none select-none overflow-hidden"
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop"
          alt="Casa de Sucos 100 Igual Fachada"
          className="w-full h-full object-cover object-center lg:object-left-bottom"
          loading="lazy"
        />
        {/* Buttery smooth gradient overlay blending right edge into the solid black background */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/3 bg-gradient-to-l from-[#000000] via-[#000000]/65 to-transparent pointer-events-none z-20" />
        <div className="absolute inset-0 bg-black/55 lg:bg-black/25 pointer-events-none z-20" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Spacer on Desktop so background image shines */}
          <div className="hidden lg:flex lg:col-span-6 relative justify-start items-center w-full z-20 pointer-events-none">
            <div className="h-[500px] w-full" />
          </div>

          {/* Right Column: Content matching the Hero's premium style (Placed on Right) */}
          <motion.div
            className="lg:col-span-6 text-left flex flex-col justify-center relative z-20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Top Leaf Logo */}
            <motion.div
              className="text-[#8ac926] mb-6 flex items-center justify-start"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Leaf size={32} className="fill-current" />
            </motion.div>

            {/* High-Contrast Bold Heading (Hero Style) */}
            <motion.h2
              className="text-4xl sm:text-5xl md:text-[54px] font-black tracking-tight leading-[1.05] text-left uppercase mb-6 font-sans select-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-white block">Nossa história,</span>
              <span className="text-[#8ac926] block">nossa paixão.</span>
              <span className="text-white block">Mais de 24 anos.</span>
            </motion.h2>

            {/* Description Paragraph */}
            <motion.p
              className="text-sm sm:text-base md:text-lg text-offWhite/70 mb-10 max-w-xl leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              O que começou como uma pequena portinha na Avenida Presidente Vargas, em Franca-SP, tornou-se o ponto de encontro tradicional das famílias francanas.
              <br />
              <br />
              Preparamos cada suco, vitamina e açaí com polpa pura 100% natural, sem conservantes, valorizando o cultivo sustentável e produtores agrícolas da nossa região.
            </motion.p>

            {/* Action CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button
                onClick={() => onNavigate && onNavigate('about')}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#76a827] to-[#8ac926] hover:bg-[#689f38] text-white font-black text-xs md:text-sm uppercase hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-[#76a827]/10 cursor-pointer"
              >
                <span>Conhecer Nossa História Completa</span>
                <ArrowRight size={16} />
              </button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
