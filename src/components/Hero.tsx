import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Leaf, Zap, Heart, Flame } from 'lucide-react';
import { AuroraBackground } from './ui/AuroraBackground';

export const Hero: React.FC = () => {
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

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth',
      });
    }
  };

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
              className="text-5xl sm:text-6xl md:text-[66px] font-black tracking-tight leading-[1.05] text-left uppercase mb-6 font-sans select-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-white block">Sabor de</span>
              <span className="text-[#8ac926] block">verdade,</span>
              <span className="text-white block">saúde todo dia!</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-sm sm:text-base md:text-lg text-offWhite/70 mb-10 max-w-xl leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Sucos naturais, vitaminas especiais, açaí e muito mais!
              <br />
              Feitos com ingredientes selecionados para cuidar de você.
            </motion.p>

            {/* Swapped Buttons matching the exact banner style */}
            <motion.div
              className="flex flex-wrap gap-4 items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* WhatsApp Button (Green, Left) */}
              <a
                href="https://wa.me/5516999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#76a827] text-white font-black text-xs md:text-sm uppercase hover:bg-[#689f38] hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-[#76a827]/10"
              >
                {/* WhatsApp SVG Icon */}
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.115-2.887-6.98-1.865-1.865-4.343-2.89-6.985-2.891-5.439 0-9.865 4.42-9.869 9.865-.001 1.748.461 3.456 1.338 4.966L1.879 21.03l4.768-1.876zm12.338-7.986c-.328-.164-1.94-.957-2.24-1.066-.298-.11-.517-.164-.734.164-.218.328-.846 1.066-1.037 1.284-.19.218-.38.245-.708.081-.328-.164-1.386-.51-2.64-1.627-.975-.87-1.633-1.946-1.824-2.274-.19-.328-.02-.505.143-.668.148-.147.328-.383.493-.574.164-.19.218-.328.328-.547.11-.218.055-.41-.027-.574-.082-.164-.734-1.77-.997-2.42-.258-.633-.518-.547-.708-.557-.183-.01-.39-.01-.6-.01-.21 0-.555.08-.846.398-.29.319-1.11 1.085-1.11 2.648 0 1.564 1.138 3.078 1.293 3.296.155.218 2.24 3.42 5.423 4.795.757.327 1.348.52 1.81.667.76.241 1.45.207 1.996.126.608-.09 1.94-.793 2.214-1.56.273-.766.273-1.422.19-1.56-.081-.137-.298-.218-.626-.382z" />
                </svg>
                <span>Pedir no WhatsApp</span>
              </a>

              {/* Cardapio Button (Outline, Right) */}
              <a
                href="#cardapio"
                onClick={(e) => handleCtaClick(e, '#cardapio')}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[#76a827] text-white font-black text-xs md:text-sm uppercase bg-transparent hover:bg-[#76a827]/10 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <BookOpen size={16} className="text-[#8ac926]" />
                <span>Ver Cardápio</span>
              </a>
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
