import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { MessageSquare, Star, Flame, Check } from 'lucide-react';
import { GlowingBorder } from './ui/GlowingBorder';
import { Strawberry, LimeSlice } from './ui/Fruits';

export const Featured: React.FC = () => {
  const controls = useAnimation();

  // Run the shimmer shine effect periodically
  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        x: ['-100%', '100%'],
        transition: { duration: 1.5, ease: 'easeInOut' },
      });
    }, 4500);

    return () => clearInterval(interval);
  }, [controls]);

  const handleWhatsappOrder = () => {
    const text = encodeURIComponent('Olá! Vi o destaque do dia "Suco Especial 100 Igual" no site e gostaria de pedir!');
    const whatsappNum = '551637215494';
    window.open(`https://wa.me/${whatsappNum}?text=${text}`, '_blank');
  };

  const ingredients = [
    'Polpa de Morango Silvestre',
    'Abacaxi Pérola Maduro',
    'Suco de Laranja Espremido na Hora',
    'Hortelã Fresca Orgânica',
    'Segredo da Casa de 24 Anos',
  ];

  return (
    <section id="destaque" className="relative py-24 bg-[#0d0d0d] overflow-hidden border-t border-white/5">
      {/* Background blobs */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-orangeCitrus/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-greenTropical/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Flame size={12} className="text-orangeCitrus animate-pulse" />
            <span className="text-xs font-bold text-orangeGold uppercase tracking-wider font-sans">Favorito absoluto</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            O Destaque do Dia
          </h2>
        </div>

        {/* Featured Card */}
        <GlowingBorder
          glowClass="from-orangeCitrus via-orangeGold to-greenTropical"
          className="max-w-5xl mx-auto rounded-3xl"
        >
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-12 items-center bg-darkCard/80 overflow-hidden">
            
            {/* Shimmer light sweep element */}
            <motion.div
              className="absolute top-0 bottom-0 w-[40px] bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 pointer-events-none z-20"
              initial={{ x: '-100%' }}
              animate={controls}
            />

            {/* Left side: Actual Real Product Photo in Premium Layout */}
            <div className="lg:col-span-5 flex justify-center relative">
              
              {/* Spinning background sunrays glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orangeCitrus/20 to-orangeGold/10 rounded-full blur-3xl animate-pulse-slow" />
              
              <motion.div
                className="relative z-10 w-64 h-80 rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center justify-end border border-white/15 cursor-pointer group"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: 'spring' as const, stiffness: 200, damping: 12 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=600&auto=format&fit=crop"
                  alt="Suco Especial 100 Igual"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Glossy sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none z-10" />
                
                {/* Deep gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent z-10" />
                
                {/* Product Name tag */}
                <div className="relative z-20 p-4 w-full text-center">
                  <div className="text-xs font-semibold text-orangeGold tracking-widest uppercase mb-1">Cremosidade Extrema</div>
                  <div className="text-lg font-black text-white">Suco 100 Igual</div>
                </div>

                {/* Rating badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/5 z-20">
                  <Star size={12} className="text-orangeGold fill-orangeGold" />
                  <span className="text-[10px] font-black text-white">5.0</span>
                </div>
              </motion.div>

              {/* Floating premium fruit vectors in place of emojis */}
              <motion.div
                className="absolute top-6 left-6 z-20"
                animate={{ y: [0, -12, 0], rotate: [0, 15, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Strawberry size={45} className="opacity-90" />
              </motion.div>

              <motion.div
                className="absolute bottom-10 left-2 z-20"
                animate={{ y: [0, 10, 0], rotate: [0, -10, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <LimeSlice size={40} className="opacity-90" />
              </motion.div>
            </div>

            {/* Right side: Detailed Information & CTA */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              {/* Tag / Badge */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orangeCitrus/15 border border-orangeCitrus/35 text-[10px] font-extrabold text-orangeCitrus uppercase tracking-wider">
                  <Flame size={10} />
                  O mais pedido de Franca
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-greenTropical/15 border border-greenTropical/35 text-[10px] font-extrabold text-emerald-400 uppercase tracking-wider">
                  100% Natural e Fresco
                </span>
              </div>

              {/* Title & Price */}
              <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-2 leading-tight">
                Suco Especial 100 Igual
              </h3>
              
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orangeCitrus to-orangeGold">
                  R$ 14,90
                </span>
                <span className="text-xs text-offWhite/45 font-medium">(copo generoso de 500ml)</span>
              </div>

              {/* Review Text */}
              <p className="text-sm md:text-base text-offWhite/75 leading-relaxed mb-6 font-medium">
                Esta é a receita lendária que deu início à nossa marca há mais de 24 anos. Feito com um blend gelado e super cremoso de Laranja, Morango e Abacaxi fresco batidos com hortelã orgânica selecionada. Sem conservantes, sem misturas industriais. Apenas o verdadeiro sabor da fruta em cada gole.
              </p>

              {/* Ingredients Pills with Lucide Check Icon */}
              <div className="mb-8">
                <h4 className="text-xs font-bold text-offWhite/45 uppercase tracking-wider mb-3">
                  Ingredientes Selecionados:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 border border-white/5 text-xs font-bold text-offWhite hover:bg-white/10 transition-colors"
                    >
                      <Check size={12} className="text-orangeCitrus shrink-0" />
                      <span>{ing}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <motion.button
                  onClick={handleWhatsappOrder}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-greenTropical to-emerald-700 hover:shadow-glow-green text-offWhite font-extrabold text-base transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageSquare size={18} />
                  <span>Pedir Agora no WhatsApp</span>
                </motion.button>
                
                <span className="text-[11px] font-semibold text-offWhite/45 px-2">
                  Entrega super rápida em Franca ou retirada no drive-thru
                </span>
              </div>
            </div>

          </div>
        </GlowingBorder>
      </div>
    </section>
  );
};
