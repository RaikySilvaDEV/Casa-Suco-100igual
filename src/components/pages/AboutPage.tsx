import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Leaf, Heart, Award, ShieldCheck, Users, Sun } from 'lucide-react';
import { TIMELINE_MILESTONES } from '../../data/mockData';

interface AboutPageProps {
  onBackToHome: () => void;
}

const VALUES = [
  {
    icon: Leaf,
    title: "100% Orgânico & Natural",
    description: "Nossos sucos são feitos exclusivamente com polpa natural e frutas frescas espremidas na hora, sem corantes ou conservantes artificiais."
  },
  {
    icon: Heart,
    title: "Feito com Amor e Carinho",
    description: "Cada copo é preparado individualmente seguindo receitas artesanais de família para garantir o máximo de sabor e afeto."
  },
  {
    icon: Award,
    title: "Tradição Regional",
    description: "Mais de 24 anos de história no coração de Franca-SP, mantendo o mesmo padrão de qualidade e sabor lendário desde o primeiro copo."
  },
  {
    icon: ShieldCheck,
    title: "Seleção Estrita",
    description: "Ingredientes colhidos a dedo de cooperativas agrícolas locais que priorizam cultivos sustentáveis e livres de agrotóxicos."
  },
  {
    icon: Users,
    title: "Apoio a Produtores Locais",
    description: "Fortalecemos a agricultura familiar regional de Franca e arredores, comprando insumos diretamente de quem cultiva com carinho."
  },
  {
    icon: Sun,
    title: "Energia Vital Inteira",
    description: "Nossas receitas combinam superalimentos, sementes e hortaliças para oferecer uma recarga completa de bem-estar e vitalidade pro seu dia."
  }
];

export const AboutPage: React.FC<AboutPageProps> = ({ onBackToHome }) => {
  return (
    <div className="relative min-h-screen bg-[#000000] text-offWhite pt-28 pb-20 overflow-x-hidden">
      {/* Background ambient highlights */}
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
            <Leaf size={40} className="fill-current" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4"
          >
            Nossa <span className="text-[#8ac926]">História</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-offWhite/60"
          >
            Muito mais que sucos: um compromisso diário com a sua saúde, bem-estar e o sabor de verdade!
          </motion.p>
        </div>

        {/* Story Intro Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          <div className="lg:col-span-7 bg-[#111111]/85 border border-white/5 rounded-3xl p-6 sm:p-10 flex flex-col justify-center shadow-2xl">
            <span className="text-xs font-black uppercase tracking-widest text-[#8ac926] mb-3 block">
              — DESDE 2001
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mb-6 leading-tight">
              Uma história de amor pelas frutas e cuidado com a saúde
            </h3>
            <div className="space-y-4 text-xs sm:text-sm text-offWhite/65 leading-relaxed font-medium">
              <p>
                A <strong>Casa de Sucos 100 Igual</strong> nasceu com uma missão muito clara: provar que comer de forma saudável pode ser incrivelmente prazeroso e saboroso. Iniciada em uma pequena portinha na Avenida Presidente Vargas, em Franca-SP, a casa conquistou o coração dos francanos pela pureza incomparável dos seus blends e o açaí artesanal super denso.
              </p>
              <p>
                Com o passar dos anos, o amor pelo que fazemos nos levou a expandir nossas receitas para lanches de chapa colossais, pratos executivos saborosos e porções caprichadas, mantendo sempre o rigor na escolha de cada fornecedor e parceiro agrícola.
              </p>
              <p>
                Hoje, com duas lojas modernas e completas, nosso maior prêmio continua sendo o sorriso no rosto de cada cliente e a energia renovada a cada copo de suco servido.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden min-h-[300px] shadow-2xl border border-white/5 select-none pointer-events-none">
            <img
              src="/storefront.png"
              alt="Casa de Sucos 100 Igual Fachada"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] font-black uppercase tracking-wider bg-[#8ac926] text-black px-3 py-1 rounded-md mb-2 inline-block">
                Loja Física Oficial
              </span>
              <h4 className="text-base font-black uppercase text-white">
                Unidade Presidente Vargas à Noite
              </h4>
            </div>
          </div>
        </div>

        {/* Brand Timeline Milestones Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mb-2">
              Nossa <span className="text-[#8ac926]">Trajetória</span>
            </h3>
            <p className="text-xs sm:text-sm text-offWhite/45">
              Os marcos mais importantes da nossa jornada de sabor
            </p>
          </div>

          <div className="relative border-l border-white/10 ml-4 sm:ml-8 space-y-12 max-w-4xl mx-auto">
            {TIMELINE_MILESTONES.map((milestone, idx) => (
              <motion.div
                key={idx}
                className="relative pl-8 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Year Badge Indicator */}
                <div className="absolute -left-[14px] top-1.5 w-7 h-7 rounded-full bg-[#000000] border-2 border-[#8ac926] flex items-center justify-center text-[10px] font-black text-[#8ac926] group-hover:scale-115 transition-transform" />

                {/* Milestone Card */}
                <div className="bg-[#111111]/70 border border-white/5 hover:border-[#8ac926]/20 rounded-2xl p-6 shadow-xl transition-all duration-300">
                  <span className="text-xl font-black text-[#8ac926] mb-1 block">
                    {milestone.year}
                  </span>
                  <h4 className="text-base font-extrabold text-white mb-2">
                    {milestone.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-offWhite/60 leading-relaxed font-medium">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Corporate Values Grid Section */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mb-2">
              Nossos <span className="text-[#8ac926]">Valores</span>
            </h3>
            <p className="text-xs sm:text-sm text-offWhite/45">
              O que nos guia na preparação de cada copo de saúde
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#111111]/70 border border-white/5 hover:border-[#8ac926]/10 rounded-3xl p-6 shadow-xl flex gap-4 transition-all duration-300 hover:translate-y-[-4px]"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#8ac926]/10 border border-[#8ac926]/20 flex items-center justify-center text-[#8ac926] shrink-0">
                    <Icon size={20} className="stroke-[2]" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-white uppercase tracking-wider mb-2">
                      {val.title}
                    </h4>
                    <p className="text-xs text-offWhite/50 leading-relaxed font-medium">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
