import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, GlassWater, Zap, Heart } from 'lucide-react';

interface TimelineProps {
  onNavigate?: (page: 'home' | 'menu' | 'about' | 'stores' | 'benefits' | 'contact') => void;
}

export const Timeline: React.FC<TimelineProps> = ({ onNavigate }) => {
  return (
    <section id="sobre" className="relative py-24 bg-[#0A0A0A] overflow-hidden border-t border-white/5">
      {/* Subtle tropical green background glows */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-greenTropical/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-orangeCitrus/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Story Text */}
          <motion.div 
            className="lg:col-span-6 text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Green uppercase prefix */}
            <div className="flex items-center gap-2 mb-4 text-[#8ac926] font-bold text-xs uppercase tracking-widest">
              <span className="w-6 h-[2px] bg-[#8ac926]"></span>
              <span>Sobre a 100Igual</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
              Muito mais que suco,
              <br />
              um <span className="font-cursive text-4xl md:text-5xl text-[#8ac926] select-none">estilo de vida!</span>
            </h2>

            {/* Description */}
            <p className="text-base text-offWhite/70 leading-relaxed mb-8 max-w-xl">
              A 100Igual Casa de Sucos nasceu com o propósito de oferecer produtos naturais, frescos e saborosos, feitos com carinho para você que busca mais saúde e bem-estar no seu dia a dia.
            </p>

            {/* Button */}
            <button
              onClick={() => onNavigate && onNavigate('about')}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/20 text-offWhite font-extrabold text-sm bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all duration-300 cursor-pointer"
            >
              Saiba Mais Sobre Nós
            </button>
          </motion.div>

          {/* Right Column: Storefront Image */}
          <motion.div 
            className="lg:col-span-6 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-[500px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/10">
              {/* Glowing decorative frame */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
              <img
                src="/storefront.png"
                alt="100Igual Fachada Física"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

        </div>

        {/* Bottom feature badges (arranged horizontally) */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Badge 1 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left p-4">
            <div className="w-12 h-12 rounded-full border border-[#8ac926]/30 flex items-center justify-center text-[#8ac926] bg-[#8ac926]/5 mb-4 shadow-[0_0_15px_rgba(138,201,38,0.1)]">
              <Leaf size={20} />
            </div>
            <h4 className="font-extrabold text-white text-sm mb-1 uppercase tracking-wider">100% Natural</h4>
            <p className="text-xs text-offWhite/50 leading-tight">Feito com frutas frescas</p>
          </div>

          {/* Badge 2 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left p-4">
            <div className="w-12 h-12 rounded-full border border-[#8ac926]/30 flex items-center justify-center text-[#8ac926] bg-[#8ac926]/5 mb-4 shadow-[0_0_15px_rgba(138,201,38,0.1)]">
              <GlassWater size={20} />
            </div>
            <h4 className="font-extrabold text-white text-sm mb-1 uppercase tracking-wider">Sem Conservantes</h4>
            <p className="text-xs text-offWhite/50 leading-tight">Mais saúde para o seu corpo</p>
          </div>

          {/* Badge 3 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left p-4">
            <div className="w-12 h-12 rounded-full border border-[#8ac926]/30 flex items-center justify-center text-[#8ac926] bg-[#8ac926]/5 mb-4 shadow-[0_0_15px_rgba(138,201,38,0.1)]">
              <Zap size={20} />
            </div>
            <h4 className="font-extrabold text-white text-sm mb-1 uppercase tracking-wider">Energia e Disposição</h4>
            <p className="text-xs text-offWhite/50 leading-tight">Sucos que te dão mais energia</p>
          </div>

          {/* Badge 4 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left p-4">
            <div className="w-12 h-12 rounded-full border border-[#8ac926]/30 flex items-center justify-center text-[#8ac926] bg-[#8ac926]/5 mb-4 shadow-[0_0_15px_rgba(138,201,38,0.1)]">
              <Heart size={20} />
            </div>
            <h4 className="font-extrabold text-white text-sm mb-1 uppercase tracking-wider">Feito com Amor</h4>
            <p className="text-xs text-offWhite/50 leading-tight">Qualidade e carinho em cada detalhe</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
