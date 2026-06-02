import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Leaf, Zap, Heart, Flame } from 'lucide-react';
import { AuroraBackground } from './ui/AuroraBackground';

interface HeroProps {
  onNavigate?: (page: 'home' | 'menu' | 'about' | 'stores' | 'benefits' | 'contact') => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasLeftViewportRef = useRef(false);

  useEffect(() => {
    const hero = heroRef.current;
    const video = videoRef.current;

    if (!hero || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (hasLeftViewportRef.current) {
            video.currentTime = 0;
            void video.play();
          }
          return;
        }

        hasLeftViewportRef.current = true;
        video.pause();
      },
      { threshold: 0.25 }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);



  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#000000]"
    >
      {/* Background ambient forest-green highlights */}
      <div className="absolute inset-0 bg-radial-gradient from-green-950/20 via-transparent to-transparent pointer-events-none z-0" />
      <AuroraBackground />

      {/* Widescreen Background Video */}
      <motion.div
        className="absolute inset-0 lg:left-auto lg:w-[85%] z-10 pointer-events-none select-none overflow-hidden"
        initial={{ opacity: 0, scale: 1.08, filter: 'blur(12px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <video
          ref={videoRef}
          src="/Smoothie_cups_on_black_background.mp4"
          className="w-full h-full object-cover object-center lg:object-right-bottom"
          autoPlay
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          style={{ transformOrigin: 'right bottom' }}
        />
        {/* Buttery smooth gradient overlay blending left edge into the solid black background */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-1/4 bg-gradient-to-r from-[#000000] via-[#000000]/55 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-black/45 lg:bg-black/15 pointer-events-none" />
      </motion.div>

      {/* Premium Circular Seal (Selo 100% Natural - Alinhado na Banana) */}
      <motion.div
        className="absolute bottom-16 right-[48%] lg:bottom-[90px] lg:right-[4%] z-30 flex items-center justify-center w-22 h-22 lg:w-26 lg:h-26 rounded-full border border-white/10 bg-[#141010]/95 shadow-[0_8px_32px_rgba(0,0,0,0.6)] select-none pointer-events-none"
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        {/* Rotating Text Border */}
        <div className="absolute inset-0 p-1">
          <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_30s_linear_infinite]">
            <path
              id="circlePath"
              d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
              fill="none"
            />
            <text className="text-[7.2px] font-black uppercase tracking-[0.22em] fill-white/85">
              <textPath xlinkHref="#circlePath">
                • 100% NATURAL • SABOR DE VERDADE • PREMIUM
              </textPath>
            </text>
          </svg>
        </div>

        {/* Center Sparkle Star matching the exact curved astroid shape */}
        <div className="w-8 h-8 lg:w-9 lg:h-9 flex items-center justify-center text-[#8ac926]">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-current drop-shadow-[0_0_8px_rgba(138,201,38,0.6)]">
            <path d="M 50 15 C 50 38, 62 50, 85 50 C 62 50, 50 62, 50 85 C 50 62, 38 50, 15 50 C 38 50, 50 38, 50 15 Z" />
          </svg>
        </div>
      </motion.div>


      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Text, CTAs & Stats (Banner Style) */}
          <motion.div
            className="lg:col-span-6 text-left flex flex-col justify-center relative z-20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Top Leaf Logo */}
            <motion.div
              className="text-[#8ac926] mb-6 flex items-center justify-start"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Leaf size={32} className="fill-current" />
            </motion.div>

            {/* High-Contrast Bold Uppercase Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-[58px] font-black tracking-tight leading-[1.05] text-left uppercase mb-6 font-sans select-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-white block">Há 24 anos, a</span>
              <span className="text-[#8ac926] block">mesma receita.</span>
              <span className="text-white block">O mesmo sabor.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-sm sm:text-base md:text-lg text-offWhite/70 mb-10 max-w-xl leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Cada copo feito na hora com frutas rigorosamente selecionadas.
              <br />
              Para você, que não aceita menos do que o melhor.
            </motion.p>

            {/* Buttons matching the institutional design */}
            <motion.div
              className="flex flex-wrap gap-4 items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Ver Cardapio Button (Solid Green, Left) */}
              <button
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('menu');
                  }
                }}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#76a827] text-white font-black text-xs md:text-sm uppercase hover:bg-[#689f38] hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-[#76a827]/10 cursor-pointer"
              >
                <BookOpen size={16} className="text-white" />
                <span>Ver Cardápio</span>
              </button>

              {/* Conheca nossa historia Button (Outline, Right) */}
              <button
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('about');
                  }
                }}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[#76a827] text-white font-black text-xs md:text-sm uppercase bg-transparent hover:bg-[#76a827]/10 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <Leaf size={16} className="text-[#8ac926]" />
                <span>Conheça nossa história</span>
              </button>
            </motion.div>

            {/* Horizontal Stats Row directly below the buttons */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full border-t border-white/10 pt-8"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {/* Stat 1 */}
              <div className="flex flex-col items-start text-left">
                <div className="text-[#8ac926] mb-2">
                  <Leaf size={20} className="stroke-2" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-left leading-tight">
                  <span className="block text-white">Ingredientes</span>
                  <span className="text-offWhite/45">Selecionados</span>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-start text-left">
                <div className="text-[#8ac926] mb-2">
                  <Zap size={20} className="stroke-2" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-left leading-tight">
                  <span className="block text-white">Mais energia</span>
                  <span className="text-offWhite/45">no seu dia</span>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-start text-left">
                <div className="text-[#8ac926] mb-2">
                  <Heart size={20} className="stroke-2" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-left leading-tight">
                  <span className="block text-white">Feito com amor</span>
                  <span className="text-offWhite/45">em cada copo</span>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col items-start text-left">
                <div className="text-[#8ac926] mb-2">
                  <Flame size={20} className="stroke-2" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-left leading-tight">
                  <span className="block text-white">100% Natural</span>
                  <span className="text-offWhite/45">e Saudável</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Spacer on Desktop so the full-bleed video can shine */}
          <motion.div
            className="hidden lg:flex lg:col-span-6 relative justify-end items-center w-full z-20"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="h-[500px] w-full" />
          </motion.div>

        </div>

      </div>
    </section>
  );
};
