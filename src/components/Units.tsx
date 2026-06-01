import React from 'react';
import { motion } from 'framer-motion';
import { UNITS } from '../data/mockData';
import type { UnitInfo } from '../data/mockData';
import { MapPin, Clock, MessageSquare, Compass, Home, Car, Gamepad2 } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';

export const Units: React.FC = () => {
  const handleWhatsappOrder = (unit: UnitInfo) => {
    const text = encodeURIComponent(`Olá! Gostaria de fazer um pedido para entrega ou retirada na Unidade ${unit.name === 'Presidente Vargas' ? 'Presidente Vargas' : 'Paulo VI'}.`);
    window.open(`https://wa.me/${unit.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="unidades" className="relative py-24 bg-[#0d0d0d] overflow-hidden border-t border-white/5">
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-greenTropical/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orangeCitrus/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Home size={12} className="text-greenTropical" />
            <span className="text-xs font-bold text-orangeGold uppercase tracking-wider font-sans">Nossas Lojas</span>
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Nossas Unidades
          </motion.h2>
          
          <motion.p
            className="max-w-xl mx-auto text-sm md:text-base text-offWhite/70 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Duas estruturas completas no coração de Franca-SP, preparadas para te servir os melhores sucos, açaís e lanches artesanais da região.
          </motion.p>
        </div>

        {/* Grid (2 columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {UNITS.map((unit, index) => {
            return (
              <motion.div
                key={unit.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  type: 'spring' as const,
                  damping: 18,
                  stiffness: 100,
                  delay: index * 0.15,
                }}
                className="h-full"
              >
                <SpotlightCard
                  glowColor={index === 0 ? 'rgba(255, 122, 0, 0.2)' : 'rgba(45, 106, 79, 0.2)'}
                  className="h-full flex flex-col justify-between overflow-hidden border-white/5 hover:border-white/10 group"
                >
                  
                  {/* Top Header Image Block */}
                  <div className="h-48 relative flex items-end p-6 overflow-hidden">
                    {/* The Real Storefront/Area Image */}
                    <img
                      src={unit.image}
                      alt={unit.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    
                    {/* Shadow Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-black/30 to-transparent" />
                    
                    {/* Unit Name Badge */}
                    <div className="relative z-10 flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white shadow-md">
                        <Home size={18} />
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-white drop-shadow-md">
                        {unit.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between bg-darkCard/50">
                    
                    <div className="space-y-4 mb-6">
                      {/* Branch Badges */}
                      <div className="flex flex-wrap gap-2">
                        {unit.hasDriveThru && (
                          <span className="inline-flex items-center gap-1 text-[9px] font-black text-orangeCitrus bg-orangeCitrus/15 border border-orangeCitrus/20 px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                            <Car size={10} className="stroke-[3]" />
                            <span>Drive-Thru Ativo</span>
                          </span>
                        )}
                        {unit.hasKidsSpace && (
                          <span className="inline-flex items-center gap-1 text-[9px] font-black text-emerald-400 bg-greenTropical/15 border border-greenTropical/20 px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                            <Gamepad2 size={10} className="stroke-[3]" />
                            <span>Espaço Kids Amplo</span>
                          </span>
                        )}
                      </div>

                      {/* Address */}
                      <div className="flex items-start gap-3">
                        <MapPin size={18} className="text-orangeCitrus mt-0.5 shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-offWhite/45 uppercase tracking-wider mb-0.5 font-sans">Endereço</div>
                          <p className="text-xs md:text-sm text-offWhite/80 leading-relaxed font-semibold">
                            {unit.address}
                          </p>
                        </div>
                      </div>

                      {/* Schedule */}
                      <div className="flex items-start gap-3">
                        <Clock size={18} className="text-greenTropical mt-0.5 shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-offWhite/45 uppercase tracking-wider mb-0.5 font-sans">Horário de Funcionamento</div>
                          <p className="text-xs md:text-sm text-offWhite/80 leading-relaxed font-semibold">
                            {unit.schedule}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <a
                        href={unit.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl border border-white/5 hover:border-white/10 bg-white/5 hover:bg-white/10 text-offWhite text-xs md:text-sm font-extrabold transition-all duration-300 shadow-md"
                      >
                        <Compass size={14} className="text-orangeGold" />
                        <span>Como chegar</span>
                      </a>

                      <button
                        onClick={() => handleWhatsappOrder(unit)}
                        className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-orangeCitrus to-orangeGold text-darkBg text-xs md:text-sm font-black hover:shadow-glow-orange hover:scale-102 active:scale-98 transition-all duration-300 shadow-md"
                      >
                        <MessageSquare size={14} />
                        <span>Pedir nesta Unidade</span>
                      </button>

                    </div>

                  </div>

                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
