import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Clock, Navigation, Smile, Car } from 'lucide-react';
import { UNITS } from '../../data/mockData';

interface StoresPageProps {
  onBackToHome: () => void;
}

const FAQ = [
  {
    question: "As duas lojas funcionam em feriados?",
    answer: "Sim! Funcionamos em feriados nacionais e municipais em horários especiais. A Unidade Presidente Vargas abre normalmente até à meia-noite na maioria dos feriados."
  },
  {
    question: "Como funciona o Drive-Thru da Unidade Cidade Nova?",
    answer: "Nosso Drive-Thru é pioneiro em Franca-SP. Você pode fazer o seu pedido diretamente pela pista de atendimento na Av. Presidente Vargas, 840, ou adiantar o pedido pelo nosso WhatsApp de lá e apenas retirar sem sair do carro!"
  },
  {
    question: "O Espaço Kids da Unidade Paulo VI é gratuito?",
    answer: "Sim! Oferecemos um playground amplo com brinquedos, cama elástica e área de recreação totalmente gratuitos para crianças de 2 a 10 anos acompanhadas pelos pais."
  },
  {
    question: "Consigo fazer reservas para aniversários e comemorações?",
    answer: "Com certeza! Nossas duas unidades possuem amplo espaço físico e mesas confortáveis. Fale diretamente com a equipe do WhatsApp da unidade de sua preferência para reservar mesas para reuniões, aniversários ou comemorações!"
  }
];

export const StoresPage: React.FC<StoresPageProps> = ({ onBackToHome }) => {
  return (
    <div className="relative min-h-screen bg-[#000000] text-offWhite pt-28 pb-20 overflow-x-hidden">
      {/* Background radial gradient highlights */}
      <div className="absolute inset-0 bg-radial-gradient from-green-950/10 via-transparent to-transparent pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top back navigation */}
        <div className="mb-10">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#8ac926] hover:text-white transition-colors cursor-pointer group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Voltar ao Início</span>
          </button>
        </div>

        {/* Big Premium Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center text-[#8ac926] mb-4"
          >
            <MapPin size={40} className="stroke-[1.5]" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4"
          >
            Nossas <span className="text-[#8ac926]">Lojas</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-offWhite/60"
          >
            Visite nossas unidades físicas em Franca-SP e saboreie o melhor açaí e sucos premium da cidade com conforto e praticidade!
          </motion.p>
        </div>

        {/* Physical Store Units Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {UNITS.map((unit) => (
            <motion.div
              key={unit.id}
              className="bg-[#111111]/85 border border-white/5 hover:border-[#8ac926]/10 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Storefront Image */}
              <div className="relative w-full aspect-[16/9] overflow-hidden select-none bg-black/45">
                <img
                  src={unit.image}
                  alt={unit.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                
                {/* Amenities Badges overlay */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {unit.hasDriveThru && (
                    <span className="flex items-center gap-1 bg-[#8ac926] text-black font-extrabold text-[9px] uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md">
                      <Car size={10} className="stroke-[2.5]" />
                      <span>Drive-Thru</span>
                    </span>
                  )}
                  {unit.hasKidsSpace && (
                    <span className="flex items-center gap-1 bg-[#FF7A00] text-white font-extrabold text-[9px] uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md">
                      <Smile size={10} className="stroke-[2.5]" />
                      <span>Espaço Kids Grátis</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Store Details */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-white hover:text-[#8ac926] transition-colors leading-tight">
                    {unit.name}
                  </h3>
                  
                  {/* Address */}
                  <div className="flex gap-3 text-xs sm:text-sm text-offWhite/65 font-medium leading-relaxed">
                    <MapPin size={16} className="text-[#8ac926] shrink-0 mt-0.5" />
                    <span>{unit.address}</span>
                  </div>

                  {/* Schedule */}
                  <div className="flex gap-3 text-xs sm:text-sm text-offWhite/65 font-medium">
                    <Clock size={16} className="text-[#8ac926] shrink-0" />
                    <div>
                      <span className="block text-white font-bold mb-1">Horário de Funcionamento:</span>
                      <span>{unit.schedule}</span>
                    </div>
                  </div>
                </div>

                {/* Map Mock & Buttons Row */}
                <div className="space-y-4 pt-6 border-t border-white/5">
                  
                  {/* Action Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Google Maps link */}
                    <a
                      href={unit.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3.5 rounded-xl border border-white/10 text-white font-black text-xs uppercase tracking-wide bg-transparent hover:bg-white/5 transition-all duration-300"
                    >
                      <Navigation size={14} className="text-[#8ac926]" />
                      <span>Ver no Maps</span>
                    </a>

                    {/* WhatsApp link */}
                    <a
                      href={`https://wa.me/${unit.whatsapp}?text=${encodeURIComponent('Olá! Vi o site e quero saber mais sobre a Casa de Sucos 100 Igual.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#8ac926] text-black font-black text-xs uppercase tracking-wide hover:scale-103 active:scale-97 shadow-lg shadow-[#8ac926]/10 transition-all duration-300"
                    >
                      {/* WhatsApp Icon */}
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.115-2.887-6.98-1.865-1.865-4.343-2.89-6.985-2.891-5.439 0-9.865 4.42-9.869 9.865-.001 1.748.461 3.456 1.338 4.966L1.879 21.03l4.768-1.876zm12.338-7.986c-.328-.164-1.94-.957-2.24-1.066-.298-.11-.517-.164-.734.164-.218.328-.846 1.066-1.037 1.284-.19.218-.38.245-.708.081-.328-.164-1.386-.51-2.64-1.627-.975-.87-1.633-1.946-1.824-2.274-.19-.328-.02-.505.143-.668.148-.147.328-.383.493-.574.164-.19.218-.328.328-.547.11-.218.055-.41-.027-.574-.082-.164-.734-1.77-.997-2.42-.258-.633-.518-.547-.708-.557-.183-.01-.39-.01-.6-.01-.21 0-.555.08-.846.398-.29.319-1.11 1.085-1.11 2.648 0 1.564 1.138 3.078 1.293 3.296.155.218 2.24 3.42 5.423 4.795.757.327 1.348.52 1.81.667.76.241 1.45.207 1.996.126.608-.09 1.94-.793 2.214-1.56.273-.766.273-1.422.19-1.56-.081-.137-.298-.218-.626-.382z"/>
                      </svg>
                      <span>Falar pelo WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Units FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mb-2">
              Dúvidas <span className="text-[#8ac926]">Frequentes</span>
            </h3>
            <p className="text-xs sm:text-sm text-offWhite/45">
              Tudo o que você precisa saber sobre o funcionamento de nossas lojas físicas
            </p>
          </div>

          <div className="space-y-4">
            {FAQ.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#111111]/70 border border-white/5 rounded-2xl p-6 shadow-xl"
              >
                <h4 className="font-extrabold text-sm sm:text-base text-[#8ac926] uppercase tracking-wider mb-2">
                  {item.question}
                </h4>
                <p className="text-xs sm:text-sm text-offWhite/60 leading-relaxed font-medium">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
