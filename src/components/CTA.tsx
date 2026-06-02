import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface CTAProps {
  onPageChange?: (page: 'home' | 'menu' | 'about' | 'stores' | 'benefits' | 'contact') => void;
}

export const CTA: React.FC<CTAProps> = ({ onPageChange }) => {
  const handleNavClick = (page: 'home' | 'menu' | 'about' | 'stores' | 'benefits' | 'contact') => {
    if (onPageChange) {
      onPageChange(page);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#080808] overflow-hidden border-t border-white/5 pt-20 pb-8 text-left">
      {/* Background ambient forest-green glow */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[300px] bg-[#8ac926]/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#FF7A00]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Footer Navigation Grid (Premium 4-column layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Column 1: Brand & Slogan (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Animated Video Logo */}
            <div className="flex items-center">
              <button
                onClick={() => handleNavClick('home')}
                className="cursor-pointer bg-transparent border-none outline-none text-left group"
              >
                <video
                  src="/Logo_animation_for_100_IGUAL_202606011448.mp4"
                  className="h-14 w-auto object-contain rounded-xl group-hover:scale-103 transition-transform duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                />
              </button>
            </div>

            {/* Slogan & Description */}
            <div className="space-y-4">
              <p className="font-cursive text-2xl text-[#F5A623] leading-tight select-none">
                Sabor de verdade,
                <br />
                saúde todo dia!
              </p>
              <p className="text-xs text-offWhite/50 leading-relaxed max-w-sm font-medium">
                Preparando saúde, sabor e afeto em Franca-SP desde 2001. Polpas 100% naturais e ingredientes rigorosamente selecionados com todo o carinho.
              </p>
            </div>

            {/* Social Icons row */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com/100igualsucos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl border border-[#8ac926]/20 flex items-center justify-center text-[#8ac926] bg-[#8ac926]/5 hover:bg-[#8ac926] hover:text-black hover:scale-108 active:scale-95 transition-all duration-300 shadow-md shadow-[#8ac926]/5"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              
              {/* WhatsApp */}
              <a
                href="https://wa.me/551637215494"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl border border-[#8ac926]/20 flex items-center justify-center text-[#8ac926] bg-[#8ac926]/5 hover:bg-[#8ac926] hover:text-black hover:scale-108 active:scale-95 transition-all duration-300 shadow-md shadow-[#8ac926]/5"
                aria-label="WhatsApp"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.115-2.887-6.98-1.865-1.865-4.343-2.89-6.985-2.891-5.439 0-9.865 4.42-9.869 9.865-.001 1.748.461 3.456 1.338 4.966L1.879 21.03l4.768-1.876zm12.338-7.986c-.328-.164-1.94-.957-2.24-1.066-.298-.11-.517-.164-.734.164-.218.328-.846 1.066-1.037 1.284-.19.218-.38.245-.708.081-.328-.164-1.386-.51-2.64-1.627-.975-.87-1.633-1.946-1.824-2.274-.19-.328-.02-.505.143-.668.148-.147.328-.383.493-.574.164-.19.218-.328.328-.547.11-.218.055-.41-.027-.574-.082-.164-.734-1.77-.997-2.42-.258-.633-.518-.547-.708-.557-.183-.01-.39-.01-.6-.01-.21 0-.555.08-.846.398-.29.319-1.11 1.085-1.11 2.648 0 1.564 1.138 3.078 1.293 3.296.155.218 2.24 3.42 5.423 4.795.757.327 1.348.52 1.81.667.76.241 1.45.207 1.996.126.608-.09 1.94-.793 2.214-1.56.273-.766.273-1.422.19-1.56-.081-.137-.298-.218-.626-.382z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider">
              Links Rápidos
            </h4>
            <ul className="flex flex-col gap-3.5 text-xs font-semibold text-offWhite/65">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="hover:text-[#8ac926] cursor-pointer bg-transparent border-none outline-none transition-colors"
                >
                  Início / Destaques
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('menu')}
                  className="hover:text-[#8ac926] cursor-pointer bg-transparent border-none outline-none transition-colors"
                >
                  Cardápio Completo
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="hover:text-[#8ac926] cursor-pointer bg-transparent border-none outline-none transition-colors"
                >
                  Nossa História
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('benefits')}
                  className="hover:text-[#8ac926] cursor-pointer bg-transparent border-none outline-none transition-colors"
                >
                  Benefícios & Nutrição
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('stores')}
                  className="hover:text-[#8ac926] cursor-pointer bg-transparent border-none outline-none transition-colors"
                >
                  Nossas Lojas
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-[#8ac926] cursor-pointer bg-transparent border-none outline-none transition-colors"
                >
                  Fale Conosco
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Opening Hours (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider">
              Funcionamento
            </h4>
            <div className="space-y-4 text-xs">
              <div className="space-y-1.5">
                <span className="text-[#8ac926] font-black uppercase tracking-wider text-[9px] block">
                  Unidade Presidente Vargas
                </span>
                <div className="flex gap-2 text-offWhite/75 leading-relaxed font-semibold">
                  <Clock size={14} className="text-[#8ac926] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-white">Segunda a Domingo</span>
                    <span className="text-[10px] text-offWhite/45">Das 09h00 às 00h00</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 pt-3 border-t border-white/5">
                <span className="text-[#FF7A00] font-black uppercase tracking-wider text-[9px] block">
                  Unidade Paulo VI
                </span>
                <div className="flex gap-2 text-offWhite/75 leading-relaxed font-semibold">
                  <Clock size={14} className="text-[#FF7A00] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-white">Segunda a Domingo</span>
                    <span className="text-[10px] text-offWhite/45">Das 11h00 às 00h00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Map (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider">
              Contato & Lojas
            </h4>
            
            {/* Interactive Dark Map Mockup */}
            <button
              onClick={() => handleNavClick('stores')}
              className="relative w-full h-24 rounded-2xl bg-[#111111] border border-white/5 overflow-hidden flex flex-col justify-center items-center cursor-pointer group shadow-lg hover:border-[#8ac926]/30 transition-all duration-300"
            >
              {/* Map background grid lines */}
              <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              {/* Center Marker */}
              <div className="relative z-10 flex flex-col items-center">
                <span className="absolute inline-flex h-6 w-6 rounded-full bg-[#8ac926]/20 animate-ping"></span>
                <div className="w-8 h-8 rounded-full bg-[#8ac926]/10 border border-[#8ac926]/40 flex items-center justify-center text-[#8ac926] shadow-[0_0_15px_rgba(138,201,38,0.3)] mb-1 relative">
                  <MapPin size={14} />
                </div>
                <div className="px-2 py-0.5 rounded bg-black/80 border border-white/10 text-[7px] font-black tracking-wide uppercase text-white shadow-lg leading-none">
                  Ver Lojas Físicas
                </div>
              </div>
            </button>

            {/* Direct Contact Numbers */}
            <ul className="space-y-3 text-xs font-semibold text-offWhite/75">
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-[#8ac926]" />
                <a href="tel:+551637215494" className="hover:text-[#8ac926] transition-colors">(16) 3721-5494</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-[#8ac926]" />
                <a href="mailto:contato@sucos100igual.com.br" className="hover:text-[#8ac926] transition-colors">contato@sucos100igual.com.br</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright, credits */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-[10px] font-bold text-offWhite/40">
          <div>
            <span>© 2026 100Igual Casa de Sucos. Todos os direitos reservados.</span>
          </div>

          <div className="flex items-center gap-1">
            <span>Desenvolvido por <span className="text-[#8ac926] font-semibold">Raiky Silva</span></span>
          </div>
        </div>

      </div>
    </footer>
  );
};
