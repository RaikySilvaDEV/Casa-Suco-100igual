import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf } from 'lucide-react';

interface MenuProps {
  onNavigate?: (page: 'home' | 'menu' | 'about' | 'stores' | 'benefits' | 'contact') => void;
}

const FEATURED_ITEMS = [
  {
    id: "suco-100-igual",
    name: "Suco Especial 100 Igual",
    sensory: "Polpa espremida na hora, sem uma gota de água.",
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=600&auto=format&fit=crop",
    category: "Suco de Laranja, Morango & Hortelã"
  },
  {
    id: "acai-supremo-tigela",
    name: "Açaí Supremo na Tigela",
    sensory: "Açaí premium batido puro, sem misturas ou xaropes industriais.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop",
    category: "Açaí Especial"
  },
  {
    id: "vitamina-abacate",
    name: "Vitamina de Abacate Suprema",
    sensory: "Cremosidade extrema com leite integral e mel silvestre.",
    image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?q=80&w=600&auto=format&fit=crop",
    category: "Vitamina Cremosa"
  },
  {
    id: "file-salada-100-igual",
    name: "Filé Salada 100 Igual",
    sensory: "Filé mignon grelhado com a maionese verde artesanal mais famosa de Franca.",
    image: "https://images.unsplash.com/photo-1534790566855-4cb788d389ec?q=80&w=600&auto=format&fit=crop",
    category: "Lanche de Chapa Mignon"
  }
];

export const Menu: React.FC<MenuProps> = ({ onNavigate }) => {
  return (
    <section id="destaques" className="relative py-28 bg-[#0D0D0D] overflow-hidden border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#8ac926]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[450px] h-[450px] bg-[#FF7A00]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div 
            className="flex justify-center items-center gap-2 mb-4 text-[#8ac926] font-bold text-xs uppercase tracking-widest"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="w-4 h-[1.5px] bg-[#8ac926]"></span>
            <span className="flex items-center gap-1.5"><Leaf size={12} className="fill-current" /> Obras de Arte</span>
            <span className="w-4 h-[1.5px] bg-[#8ac926]"></span>
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Destaques do Cardápio
          </motion.h2>
          <motion.p
            className="max-w-xl mx-auto text-sm md:text-base text-offWhite/60 mt-4 font-medium"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Uma seleção de receitas lendárias que marcam gerações há mais de 24 anos.
          </motion.p>
        </div>

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {FEATURED_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative flex flex-col aspect-[3/4] rounded-3xl overflow-hidden border border-white/5 bg-[#121212] shadow-2xl transition-all duration-500 hover:border-[#8ac926]/30 cursor-pointer"
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              {/* Product Background Image */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Black Gradient overlays (Standard and Hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10 transition-opacity duration-500 group-hover:opacity-0" />
              <div className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8" />

              {/* Overlay Content Block (Inside standard view, positioned absolute at bottom) */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col gap-1 z-10 transition-all duration-500 group-hover:translate-y-[-20px] group-hover:opacity-0 pointer-events-none">
                <span className="text-[10px] font-black text-[#8ac926] uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="font-black text-white text-lg md:text-xl leading-tight">
                  {item.name}
                </h3>
              </div>

              {/* Reveal Content Block (Shown only on hover) */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-20 opacity-0 translate-y-[20px] group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                <span className="text-[10px] font-black text-[#8ac926] uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h3 className="font-black text-white text-lg md:text-xl leading-tight mb-4">
                  {item.name}
                </h3>
                {/* Sensory description text */}
                <p className="text-xs md:text-sm font-semibold text-orangeCitrus italic leading-relaxed border-t border-white/10 pt-4">
                  "{item.sensory}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={() => onNavigate && onNavigate('menu')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[#8ac926]/30 text-[#8ac926] font-extrabold text-sm bg-white/[0.01] hover:bg-[#8ac926]/5 hover:border-[#8ac926]/60 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 shadow-md shadow-[#8ac926]/5"
          >
            <span>Ver Cardápio Completo</span>
            <ArrowRight size={14} />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
