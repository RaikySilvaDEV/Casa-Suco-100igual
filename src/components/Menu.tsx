import React from 'react';
import { motion } from 'framer-motion';
import { HIGHLIGHT_ITEMS } from '../data/mockData';

export const Menu: React.FC = () => {
  return (
    <section id="cardapio" className="relative py-24 bg-[#0D0D0D] overflow-hidden border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-greenTropical/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-4 text-[#8ac926] font-bold text-xs uppercase tracking-widest">
            <span className="w-4 h-[1.5px] bg-[#8ac926]"></span>
            <span>Cardápio</span>
            <span className="w-4 h-[1.5px] bg-[#8ac926]"></span>
          </div>
          
          <motion.h2
            className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Destaques da Casa
          </motion.h2>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {HIGHLIGHT_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              className="flex flex-col rounded-2xl overflow-hidden border border-white/5 bg-[#151515] text-left hover:scale-[1.03] hover:border-white/10 transition-all duration-300 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Image Container */}
              <div className="relative aspect-square w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-white text-base mb-2 group-hover:text-[#8ac926] transition-colors leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-xs text-offWhite/65 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                <div className="text-[#8ac926] font-black text-sm mt-auto">
                  {item.price}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="https://wa.me/5516999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-8 py-3.5 rounded-xl border border-[#8ac926]/30 text-[#8ac926] font-extrabold text-sm bg-white/[0.02] hover:bg-[#8ac926]/5 hover:border-[#8ac926]/60 transition-all duration-300"
          >
            <span>Ver Cardápio Completo</span>
            <span className="text-xs">&gt;</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
