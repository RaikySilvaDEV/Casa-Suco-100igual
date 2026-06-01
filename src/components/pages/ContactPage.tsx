import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Send, Phone, Mail, MapPin, CheckCircle, ChevronDown } from 'lucide-react';

interface ContactPageProps {
  onBackToHome: () => void;
}

const FAQ_ITEMS = [
  {
    question: "Como faço para pedir no Delivery?",
    answer: "É extremamente simples! Você pode montar o seu pedido diretamente pela nossa sacola interativa no site (na página do cardápio) e concluir enviando para o nosso WhatsApp, ou nos ligar no telefone fixo de sua preferência."
  },
  {
    question: "Vocês aceitam cartões de refeição (Alelo, Sodexo, Ticket)?",
    answer: "Sim! Aceitamos os principais cartões de benefício refeição (Alelo Refeição, Sodexo Refeição, Ticket Refeição, VR Refeição) em todas as nossas unidades físicas e no delivery."
  },
  {
    question: "Qual o horário de entrega do delivery?",
    answer: "Nosso delivery funciona de Segunda a Sábado das 11h00 às 23h30, e aos Domingos das 16h00 às 23h30. A taxa de entrega varia conforme a sua localização em Franca-SP."
  },
  {
    question: "Os lanches podem ser personalizados (retirar ingredientes)?",
    answer: "Com certeza! Fazemos cada pedido do seu jeito. Pelo WhatsApp ou no salão, você pode solicitar a remoção ou acréscimo de ingredientes nos lanches e porções facilmente."
  }
];

export const ContactPage: React.FC<ContactPageProps> = ({ onBackToHome }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'duvida', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: 'duvida', message: '' });
    }, 4000);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx((prev) => (prev === idx ? null : idx));
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
            Dúvidas, sugestões, críticas ou elogios? Envie uma mensagem ou fale conosco em nossos canais diretos!
          </motion.p>
        </div>

        {/* Contact Split Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-24">
          
          {/* Left Column: Glassmorphic Message Form */}
          <div className="lg:col-span-7 bg-[#111111]/85 border border-white/5 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="text-xl font-black uppercase text-white mb-2">
                    Envie uma Mensagem
                  </h3>
                  
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-wider text-offWhite/45">
                        Seu Nome
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Ex: João da Silva"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-[#1A1A1A] border border-white/5 rounded-2xl py-3.5 px-4 text-xs sm:text-sm text-white focus:outline-none focus:border-[#8ac926]/40 transition-colors placeholder-offWhite/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-wider text-offWhite/45">
                        Seu E-mail
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Ex: joao@gmail.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-[#1A1A1A] border border-white/5 rounded-2xl py-3.5 px-4 text-xs sm:text-sm text-white focus:outline-none focus:border-[#8ac926]/40 transition-colors placeholder-offWhite/20"
                      />
                    </div>
                  </div>

                  {/* Subject Selection */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-wider text-offWhite/45">
                      Assunto da Mensagem
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-[#1A1A1A] border border-white/5 rounded-2xl py-3.5 px-4 text-xs sm:text-sm text-white focus:outline-none focus:border-[#8ac926]/40 transition-colors cursor-pointer"
                    >
                      <option value="duvida">Dúvida / Informação</option>
                      <option value="sugestao">Sugestão de Produto</option>
                      <option value="elogio">Elogio à Equipe</option>
                      <option value="reclamacao">Reclamação / Crítica</option>
                      <option value="franquia">Seja um Franqueado</option>
                    </select>
                  </div>

                  {/* Message body */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-wider text-offWhite/45">
                      Sua Mensagem
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Escreva sua mensagem em detalhes aqui..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-[#1A1A1A] border border-white/5 rounded-2xl py-3.5 px-4 text-xs sm:text-sm text-white focus:outline-none focus:border-[#8ac926]/40 transition-colors placeholder-offWhite/20 resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#8ac926] text-black font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:scale-102 active:scale-98 transition-all duration-300 cursor-pointer shadow-[#8ac926]/10"
                  >
                    <Send size={14} className="stroke-[2.5]" />
                    <span>Enviar Mensagem</span>
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  className="text-center py-12 flex flex-col items-center gap-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <CheckCircle size={56} className="text-[#8ac926] drop-shadow-[0_0_10px_rgba(138,201,38,0.3)] stroke-[1.5]" />
                  <h3 className="text-xl font-black uppercase text-white">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-xs sm:text-sm text-offWhite/60 max-w-sm leading-relaxed mx-auto font-medium">
                    Olá, <strong>{formData.name}</strong>! Recebemos a sua mensagem com sucesso. Nossa equipe entrará em contato com você pelo e-mail fornecido em até 24 horas úteis.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Direct support channels */}
          <div className="lg:col-span-5 bg-[#111111]/85 border border-white/5 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-black uppercase text-white">
                Canais Diretos
              </h3>
              <p className="text-xs text-offWhite/50 leading-relaxed font-medium">
                Precisa de atendimento de urgência ou quer pedir direto? Fale conosco nos canais telefônicos e e-mail abaixo:
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
