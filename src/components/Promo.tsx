import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Percent, Clock, Gift, Award, Flame, MessageSquare } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';
import { GlowingBorder } from './ui/GlowingBorder';

export const Promo: React.FC = () => {
  // Live Countdown State (Target: end of the current day)
  const [timeLeft, setTimeLeft] = useState({ hours: '00', minutes: '00', seconds: '00' });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      
      const diff = endOfDay.getTime() - now.getTime();
      
      if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        setTimeLeft({
          hours: hours.toString().padStart(2, '0'),
          minutes: minutes.toString().padStart(2, '0'),
          seconds: seconds.toString().padStart(2, '0'),
        });
      } else {
        setTimeLeft({ hours: '12', minutes: '00', seconds: '00' }); // Fallback
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsappClaim = (promoTitle: string) => {
    const text = encodeURIComponent(`Olá! Gostaria de aproveitar a promoção "${promoTitle}" que vi no site.`);
    window.open(`https://wa.me/5516991001001?text=${text}`, '_blank');
  };

  const campaigns = [
    {
      id: 'combo',
      title: 'Combo do Dia',
      description: 'Peça o lendário X-Franca Premium gigante e leve um Suco 100 Igual de 500ml com 20% de desconto real.',
      badge: 'Campeão de Vendas',
      icon: Flame,
      color: 'from-orangeCitrus/20 via-transparent to-transparent',
      glow: 'rgba(255, 122, 0, 0.2)',
      cta: 'Garantir Combo',
      hasBorderGlow: true,
    },
    {
      id: 'chopp',
      title: 'Chopp em Dobro',
      description: 'Na compra de qualquer tulipa de Chopp Antarctica trincando de gelada, a segunda é por nossa conta. Válido de Seg. a Qui.',
      badge: 'Happy Hour',
      icon: Percent,
      color: 'from-orangeGold/20 via-transparent to-transparent',
      glow: 'rgba(245, 166, 35, 0.2)',
      cta: 'Aproveitar Happy Hour',
      hasBorderGlow: false,
    },
    {
      id: 'acai',
      title: 'Açaí Suprema Fest',
      description: 'Peça a taça de Açaí de 500ml e ganhe mais dois acompanhamentos premium à sua escolha sem nenhum custo extra.',
      badge: 'Oferta Especial',
      icon: Award,
      color: 'from-greenTropical/20 via-transparent to-transparent',
      glow: 'rgba(45, 106, 79, 0.2)',
      cta: 'Pedir Açaí',
      hasBorderGlow: false,
    },
    {
      id: 'cupom',
      title: 'Cupom Primeira Compra',
      description: 'Digite o código "100IGUAL" na finalização do seu pedido pelo WhatsApp e receba R$ 10 de desconto imediato.',
      badge: 'Bem-vindo(a)',
      icon: Gift,
      color: 'from-emerald-500/20 via-transparent to-transparent',
      glow: 'rgba(16, 185, 129, 0.2)',
      cta: 'Copiar Cupom',
      hasBorderGlow: true,
    },
  ];

  return (
    <section id="promocoes" className="relative py-24 bg-[#0d0d0d] overflow-hidden border-t border-white/5">
      {/* Background blurs */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-orangeCitrus/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Clock size={12} className="text-orangeCitrus" />
            <span className="text-xs font-bold text-orangeGold uppercase tracking-wider font-sans">Tempo limitado</span>
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Promoções em Destaque
          </motion.h2>

          {/* Real-time fake countdown display */}
          <motion.div
            className="flex items-center justify-center gap-2 mt-6 max-w-md mx-auto p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Clock size={16} className="text-orangeCitrus animate-pulse" />
            <span className="text-xs font-bold text-offWhite/60 uppercase tracking-widest">As ofertas expiram em:</span>
            <div className="flex gap-1.5 ml-2 font-mono font-black text-white text-sm md:text-base">
              <span className="px-2 py-1 bg-black/40 rounded-md border border-white/5 text-orangeCitrus">{timeLeft.hours}h</span>
              <span className="text-offWhite/45 self-center">:</span>
              <span className="px-2 py-1 bg-black/40 rounded-md border border-white/5 text-orangeCitrus">{timeLeft.minutes}m</span>
              <span className="text-offWhite/45 self-center">:</span>
              <span className="px-2 py-1 bg-black/40 rounded-md border border-white/5 text-orangeCitrus">{timeLeft.seconds}s</span>
            </div>
          </motion.div>
        </div>

        {/* Promo Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {campaigns.map((promo, index) => {
            const Icon = promo.icon;
            
            const cardContent = (
              <SpotlightCard
                glowColor={promo.glow}
                className={`h-full flex flex-col justify-between p-8 bg-gradient-to-b ${promo.color} border-white/5 hover:border-white/10`}
              >
                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-black text-orangeGold bg-white/5 px-3 py-1 rounded-full uppercase tracking-wider">
                      {promo.badge}
                    </span>
                    <div className="p-2.5 bg-white/5 rounded-xl text-orangeCitrus">
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3 tracking-tight">
                    {promo.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-offWhite/60 leading-relaxed font-semibold mb-8">
                    {promo.description}
                  </p>
                </div>

                {/* Claim CTA Button */}
                <div>
                  <button
                    onClick={() => handleWhatsappClaim(promo.title)}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white/5 hover:bg-orangeCitrus border border-white/10 hover:border-orangeCitrus hover:text-darkBg text-offWhite font-extrabold text-xs md:text-sm transition-all duration-300 group"
                  >
                    <MessageSquare size={14} className="text-orangeCitrus group-hover:text-darkBg" />
                    <span>{promo.cta}</span>
                  </button>
                </div>
              </SpotlightCard>
            );

            return (
              <motion.div
                key={promo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1, type: 'spring' }}
                className="h-full"
              >
                {promo.hasBorderGlow ? (
                  <GlowingBorder
                    glowClass={index === 0 ? 'from-orangeCitrus to-orangeGold' : 'from-greenTropical to-emerald-500'}
                    className="h-full rounded-3xl"
                  >
                    {cardContent}
                  </GlowingBorder>
                ) : (
                  cardContent
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
