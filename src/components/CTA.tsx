import React from 'react';
import { MapPin, Phone, Mail, Star, Heart } from 'lucide-react';

export const CTA: React.FC = () => {
  const reviews = [
    {
      name: 'Mariana Silva',
      text: 'Os sucos são frescos e saborosos.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop'
    },
    {
      name: 'João Pedro',
      text: 'A melhor casa de... atendimento e...',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop'
    },
    {
      name: 'Ana Paula',
      text: 'Açaí delicioso e... e combos perfeitos!',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop'
    }
  ];

  return (
    <footer className="relative bg-[#080808] overflow-hidden border-t border-white/5 pt-20 pb-8 text-left">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-greenTropical/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/5">
          
          {/* Column 1: Onde Estamos (Map Preview) */}
          <div className="flex flex-col">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider mb-6">
              Onde Estamos
            </h4>
            
            {/* Dark Map Mockup */}
            <div className="relative w-full h-28 rounded-xl bg-[#111111] border border-white/5 overflow-hidden flex flex-col justify-center items-center mb-4 shadow-inner group cursor-pointer">
              {/* Map background grid lines */}
              <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              {/* Center Marker */}
              <div className="relative z-10 flex flex-col items-center">
                {/* Glowing green dot */}
                <span className="absolute inline-flex h-6 w-6 rounded-full bg-[#8ac926]/20 animate-ping"></span>
                <div className="w-9 h-9 rounded-full bg-[#8ac926]/10 border border-[#8ac926]/40 flex items-center justify-center text-[#8ac926] shadow-[0_0_15px_rgba(138,201,38,0.3)] mb-1 relative">
                  <MapPin size={16} />
                </div>
                <div className="px-2 py-0.5 rounded bg-black/80 border border-white/10 text-[8px] font-extrabold tracking-wide uppercase text-white shadow-lg leading-none">
                  100IGUAL
                </div>
                <div className="text-[6px] tracking-widest text-[#8ac926] uppercase font-bold mt-0.5 leading-none">CASA DE SUCOS</div>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-2.5 text-xs text-offWhite/60 leading-relaxed">
              <div className="text-[#8ac926] mt-0.5">
                <MapPin size={15} />
              </div>
              <p className="font-medium">
                Rua das Delícias, 100 - Centro
                <br />
                Franca - SP, 14400-000
              </p>
            </div>
          </div>

          {/* Column 2: Fale Com A Gente */}
          <div className="flex flex-col">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider mb-6">
              Fale Com A Gente
            </h4>
            
            <ul className="space-y-4 text-xs font-semibold text-offWhite/75">
              {/* WhatsApp Row */}
              <li className="flex items-center gap-3">
                <a
                  href="https://wa.me/5516999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-[#8ac926]/20 flex items-center justify-center text-[#8ac926] bg-[#8ac926]/5 hover:bg-[#8ac926]/10 transition-colors shadow-[0_0_10px_rgba(138,201,38,0.05)]"
                >
                  <Phone size={14} />
                </a>
                <span>(16) 99999-9999</span>
              </li>

              {/* Instagram Row */}
              <li className="flex items-center gap-3">
                <a
                  href="https://instagram.com/100igualsucos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-[#8ac926]/20 flex items-center justify-center text-[#8ac926] bg-[#8ac926]/5 hover:bg-[#8ac926]/10 transition-colors shadow-[0_0_10px_rgba(138,201,38,0.05)]"
                >
                  {/* Custom SVG Instagram */}
                  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <span>@100igualsucos</span>
              </li>

              {/* Email Row */}
              <li className="flex items-center gap-3">
                <a
                  href="mailto:contato@100igual.com.br"
                  className="w-8 h-8 rounded-full border border-[#8ac926]/20 flex items-center justify-center text-[#8ac926] bg-[#8ac926]/5 hover:bg-[#8ac926]/10 transition-colors shadow-[0_0_10px_rgba(138,201,38,0.05)]"
                >
                  <Mail size={14} />
                </a>
                <span>contato@100igual.com.br</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Avaliações (Google Reviews Block) */}
          <div className="flex flex-col">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider mb-5">
              Avaliações
            </h4>
            
            {/* Global Rating Indicator */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center text-orangeGold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm font-black text-white">4,8</span>
              <span className="text-[10px] text-offWhite/45 font-medium leading-none self-end pb-0.5">
                Baseado em 256 avaliações no Google
              </span>
            </div>

            {/* Testimonials rows */}
            <div className="space-y-3">
              {reviews.map((rev, index) => (
                <div key={index} className="flex gap-2.5 items-start bg-white/[0.01] border border-white/[0.03] p-2 rounded-xl">
                  {/* Miniature Avatar */}
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-6 h-6 rounded-full object-cover border border-white/10"
                  />
                  <div className="flex-1 text-[10px] font-medium leading-tight">
                    <div className="flex justify-between items-center mb-0.5">
                      <span className="font-extrabold text-white">{rev.name}</span>
                      <div className="flex text-orangeGold">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={8} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                    <p className="text-offWhite/50">{rev.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Brand Identity & Handwriting Slogan */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Logo block */}
              <div className="flex flex-col mb-4">
                <span className="font-black text-2xl tracking-tight text-white leading-none">
                  100<span className="text-[#8ac926]">IGUAL</span>
                </span>
                <span className="text-[9px] tracking-widest text-[#8ac926] uppercase font-bold mt-1">
                  CASA DE SUCOS
                </span>
              </div>

              {/* Slogan */}
              <p className="font-cursive text-xl text-orangeGold leading-none py-2 select-none">
                Sabor de verdade,
                <br />
                saúde todo dia!
              </p>
            </div>

            {/* Micro branding leaf */}
            <div className="hidden lg:block text-[#8ac926]/10 self-end mt-4">
              <svg className="w-16 h-16 fill-current rotate-45" viewBox="0 0 24 24">
                <path d="M17 8C8 10 5.9 16.17 3.82 20.24L2 18.42C6.07 16.34 12.22 14.22 14.22 5.22C14.22 5.22 14.22 2 17 2C19.78 2 22 4.22 22 7C22 9.78 17 8 17 8Z"/>
              </svg>
            </div>
          </div>

        </div>

        {/* Bottom copyright, credits */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-[10px] font-bold text-offWhite/40">
          <div>
            <span>© 2024 100Igual Casa de Sucos. Todos os direitos reservados.</span>
          </div>

          <div className="flex items-center gap-1">
            <span>Desenvolvido com</span>
            <Heart size={9} className="text-red-500 fill-red-500" />
            <span>para você.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
