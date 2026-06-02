import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatItemProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

const StatCounter: React.FC<StatItemProps> = ({ value, suffix = '', prefix = '', label, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 text-center">
      <motion.div 
        className="text-4xl md:text-5xl font-black tracking-tight text-white mb-2 font-sans bg-clip-text bg-gradient-to-r from-[#8ac926] via-[#FF7A00] to-[#8ac926]"
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span>{prefix}</span>
        {count}
        <span>{suffix}</span>
      </motion.div>
      <motion.div 
        className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-offWhite/45"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {label}
      </motion.div>
    </div>
  );
};

export const StatsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section 
      ref={sectionRef}
      className="relative py-12 bg-[#080808] overflow-hidden border-t border-b border-white/5"
    >
      {/* Background soft glows */}
      <div className="absolute inset-0 bg-radial-gradient from-white/3 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="py-6 rounded-3xl bg-[#111111]/60 backdrop-blur-md border border-white/5 shadow-2xl relative">
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y divide-white/5 lg:divide-y-0 lg:divide-x divide-solid">
            {/* Stat 1: +24 Anos */}
            <StatCounter value={24} prefix="+" label="Anos de Tradição" duration={1.5} />

            {/* Stat 2: 2 Unidades */}
            <div className="pt-8 lg:pt-0">
              <StatCounter value={2} label="Unidades Físicas" duration={1} />
            </div>

            {/* Stat 3: 100% Natural */}
            <div className="pt-8 lg:pt-0">
              <StatCounter value={100} suffix="%" label="Ingredientes Naturais" duration={1.8} />
            </div>

            {/* Stat 4: Franca-SP (Plain anim) */}
            <div className="flex flex-col items-center justify-center p-6 text-center pt-8 lg:pt-0">
              <motion.div 
                className="text-2xl md:text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orangeGold to-orangeCitrus mb-3 font-sans uppercase"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6 }}
              >
                Franca - SP
              </motion.div>
              <motion.div 
                className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-offWhite/45"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Cidade de Origem
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
