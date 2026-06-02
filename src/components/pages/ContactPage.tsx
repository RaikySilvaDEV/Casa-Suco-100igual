import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Phone, Mail, MapPin, ChevronDown, MessageSquare } from 'lucide-react';

interface ContactPageProps {
  onBackToHome: () => void;
}

const FAQ_ITEMS = [
  {
    question: "Qual o horário de funcionamento das lojas?",
    answer: "Nossas duas unidades funcionam diariamente para melhor atender você. A Unidade Presidente Vargas abre de Segunda a Domingo das 09h00 às 00h00. A Unidade Paulo VI abre de Segunda a Domingo das 11h00 às 00h00."
  },
  {
    question: "Como funciona o Drive-Thru da Unidade Cidade Nova?",
    answer: "O nosso Drive-Thru localizado na Av. Presidente Vargas, 840, é pioneiro em Franca-SP. Você pode passar com seu veículo e fazer o seu pedido diretamente na pista, ou falar conosco pelo WhatsApp para adiantar a preparação!"
  },
  {
    question: "O Espaço Kids da Unidade Paulo VI é gratuito?",
    answer: "Sim! Oferecemos uma estrutura ampla de recreação com playground completo e gratuito para crianças de 2 a 10 anos acompanhadas pelos pais na Unidade Paulo VI."
  },
  {
    question: "Vocês aceitam cartões de refeição?",
    answer: "Sim! Aceitamos os principais cartões de benefício refeição do mercado (Alelo Refeição, Sodexo Refeição, Ticket Refeição e VR Refeição) para consumo no salão em ambas as unidades."
  }
];

export const ContactPage: React.FC<ContactPageProps> = ({ onBackToHome }) => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx((prev) => (prev === idx ? null : idx));
  };

  const handleWhatsappOpen = () => {
    const text = encodeURIComponent('Olá! Vi o site e quero saber mais sobre a Casa de Sucos 100 Igual.');
    const whatsappNum = '551637215494';
    window.open(`https://wa.me/${whatsappNum}?text=${text}`, '_blank');
  };

  return (
    <div className="relative min-h-screen bg-[#000000] text-offWhite pt-28 pb-20 overflow-x-hidden">
      {/* Background radial highlights */}
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
            <Phone size={40} className="stroke-[1.5]" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4"
          >
            Fale com a <span className="text-[#8ac926]">Gente</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-offWhite/60"
          >
            Dúvidas, informações, reservas ou sugestões? Estamos prontos para te atender diretamente pelo nosso canal oficial.
          </motion.p>
        </div>

        {/* Contact Split Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-24">
          
          {/* Left Column: Premium WhatsApp CTA Box */}
          <div className="lg:col-span-7 bg-[#111111]/85 border border-[#8ac926]/10 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center">
            {/* Background decorative glow */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#8ac926]/5 rounded-full blur-[80px] pointer-events-none" />
            
            <motion.div 
              className="w-16 h-16 rounded-3xl bg-[#4CAF50]/10 border border-[#4CAF50]/20 flex items-center justify-center text-[#4CAF50] mb-6 shadow-lg shadow-[#4CAF50]/5"
              initial={{ scale: 0.9 }}
              animate={{ scale: [0.9, 1.05, 0.9] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            >
              <MessageSquare size={32} className="fill-current" />
            </motion.div>

            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mb-4 leading-tight">
              Atendimento Imediato
            </h3>
            
            <p className="text-xs sm:text-sm text-offWhite/65 max-w-md mb-8 leading-relaxed font-medium">
              Quer saber mais sobre reservas para aniversários, dúvidas sobre cardápio ou falar diretamente com a gerência? Inicie uma conversa segura no nosso WhatsApp.
            </p>

            {/* Giant WhatsApp Button */}
            <button
              onClick={handleWhatsappOpen}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-2xl bg-[#4CAF50] hover:bg-[#43A047] text-white font-black text-sm sm:text-base uppercase tracking-wider shadow-lg hover:shadow-glow-green hover:scale-103 active:scale-97 transition-all duration-300 cursor-pointer shadow-[#4CAF50]/10"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.115-2.887-6.98-1.865-1.865-4.343-2.89-6.985-2.891-5.439 0-9.865 4.42-9.869 9.865-.001 1.748.461 3.456 1.338 4.966L1.879 21.03l4.768-1.876zm12.338-7.986c-.328-.164-1.94-.957-2.24-1.066-.298-.11-.517-.164-.734.164-.218.328-.846 1.066-1.037 1.284-.19.218-.38.245-.708.081-.328-.164-1.386-.51-2.64-1.627-.975-.87-1.633-1.946-1.824-2.274-.19-.328-.02-.505.143-.668.148-.147.328-.383.493-.574.164-.19.218-.328.328-.547.11-.218.055-.41-.027-.574-.082-.164-.734-1.77-.997-2.42-.258-.633-.518-.547-.708-.557-.183-.01-.39-.01-.6-.01-.21 0-.555.08-.846.398-.29.319-1.11 1.085-1.11 2.648 0 1.564 1.138 3.078 1.293 3.296.155.218 2.24 3.42 5.423 4.795.757.327 1.348.52 1.81.667.76.241 1.45.207 1.996.126.608-.09 1.94-.793 2.214-1.56.273-.766.273-1.422.19-1.56-.081-.137-.298-.218-.626-.382z"/>
              </svg>
              <span>Abrir WhatsApp</span>
            </button>
          </div>

          {/* Right Column: Direct support channels */}
          <div className="lg:col-span-5 bg-[#111111]/85 border border-white/5 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-black uppercase text-white">
                Canais Diretos
              </h3>
              <p className="text-xs text-offWhite/50 leading-relaxed font-medium">
                Se preferir nos contatar por outros meios, ligue em nossa unidade central ou nos envie um e-mail:
              </p>
              
              {/* Phone Channel */}
              <div className="flex gap-4 p-4 rounded-2xl bg-[#1A1A1A]/80 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#8ac926]/10 flex items-center justify-center text-[#8ac926] shrink-0">
                  <Phone size={18} className="stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-[9px] font-black uppercase tracking-wider text-offWhite/35 block">
                    Telefone Geral (Presidente Vargas)
                  </span>
                  <a
                    href="tel:+551637215494"
                    className="text-sm sm:text-base font-extrabold text-white hover:text-[#8ac926] transition-colors mt-1 inline-block"
                  >
                    (16) 3721-5494
                  </a>
                </div>
              </div>

              {/* Email Channel */}
              <div className="flex gap-4 p-4 rounded-2xl bg-[#1A1A1A]/80 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#8ac926]/10 flex items-center justify-center text-[#8ac926] shrink-0">
                  <Mail size={18} className="stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-[9px] font-black uppercase tracking-wider text-offWhite/35 block">
                    Nosso E-mail Oficial
                  </span>
                  <a
                    href="mailto:contato@sucos100igual.com.br"
                    className="text-sm sm:text-base font-extrabold text-white hover:text-[#8ac926] transition-colors mt-1 inline-block"
                  >
                    contato@sucos100igual.com.br
                  </a>
                </div>
              </div>

              {/* Location Address */}
              <div className="flex gap-4 p-4 rounded-2xl bg-[#1A1A1A]/80 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#8ac926]/10 flex items-center justify-center text-[#8ac926] shrink-0">
                  <MapPin size={18} className="stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-[9px] font-black uppercase tracking-wider text-offWhite/35 block">
                    Sede Administrativa
                  </span>
                  <span className="text-xs sm:text-sm text-offWhite/75 font-semibold mt-1 inline-block leading-relaxed">
                    Av. Presidente Vargas, 840 - Cidade Nova, Franca - SP, 14401-120
                  </span>
                </div>
              </div>
            </div>

            {/* Google Reviews banner */}
            <div className="bg-radial-gradient from-green-950/20 via-black/40 to-black/40 border border-[#8ac926]/10 p-5 rounded-2xl flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-black uppercase text-[#8ac926] tracking-wider block">
                  Avaliações Google
                </span>
                <span className="text-base font-black text-white mt-1 inline-block">
                  4.8 de 5 Estrelas
                </span>
              </div>
              <div className="flex gap-0.5 text-yellow-400">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
            </div>
          </div>
        </div>

        {/* General FAQ Dropdown Accordion Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mb-2">
              Dúvidas <span className="text-[#8ac926]">Frequentes</span>
            </h3>
            <p className="text-xs sm:text-sm text-offWhite/45">
              Clique para expandir e sanar suas dúvidas instantaneamente
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#111111]/70 border border-white/5 rounded-2xl overflow-hidden shadow-xl transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-white/2 transition-colors"
                  >
                    <h4 className="font-extrabold text-sm sm:text-base text-white uppercase tracking-wider">
                      {item.question}
                    </h4>
                    <ChevronDown
                      size={18}
                      className={`text-[#8ac926] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-offWhite/60 leading-relaxed font-medium border-t border-white/2">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
