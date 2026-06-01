import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Leaf, Heart, Flame, Coffee, Sparkles } from 'lucide-react';

interface BenefitsPageProps {
  onBackToHome: () => void;
}

const INGREDIENTS_BENEFITS = [
  {
    id: "couve",
    name: "Couve Orgânica",
    category: "Hortaliça",
    icon: Leaf,
    description: "Uma das folhas mais ricas em nutrientes que existem. É a base do nosso suco verde detox, agindo na limpeza profunda do organismo.",
    vitamins: ["Vitamina K (Imensa)", "Vitamina C", "Ferro", "Cálcio"],
    benefits: [
      "Poderoso desintoxicante natural para o fígado.",
      "Auxilia na regulação intestinal por ser rico em fibras.",
      "Combate os radicais livres com clorofila e flavonoides."
    ],
    foundIn: ["Suco Verde Detox"],
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
  },
  {
    id: "laranja",
    name: "Laranja Pera",
    category: "Fruta Cítrica",
    icon: SunIcon,
    description: "Nossas laranjas selecionadas são espremidas inteiras na hora. Elas oferecem a doçura natural do néctar e uma recarga de imunidade instantânea.",
    vitamins: ["Vitamina C (Super Carga)", "Vitamina A", "Potássio", "Fibras"],
    benefits: [
      "Fortalece o sistema imunológico contra gripes e resfriados.",
      "Aumenta a absorção de ferro das refeições.",
      "Excelente hidratante energético para atividades físicas."
    ],
    foundIn: ["Suco Especial 100 Igual", "Suco de Laranja Especial (Puro)", "Suco de Acerola com Laranja"],
    color: "text-amber-400 bg-amber-500/10 border-amber-500/20"
  },
  {
    id: "acai",
    name: "Açaí Premium",
    category: "Superalimento / Bagas",
    icon: Flame,
    description: "Nosso creme de açaí artesanal é rico em gorduras boas e antocianinas, oferecendo saciedade prolongada e alta performance.",
    vitamins: ["Ômega 6 e 9 (Gorduras Excelentes)", "Antioxidantes", "Cálcio", "Fósforo"],
    benefits: [
      "Combate o envelhecimento celular precoce.",
      "Excelente energético natural de longa duração (pré-treino).",
      "Ajuda a reduzir o colesterol ruim (LDL) no sangue."
    ],
    foundIn: ["Açaí Supremo na Tigela", "Copo Açaí Express (500ml)", "Açaí Especial"],
    color: "text-purple-400 bg-purple-500/10 border-purple-500/20"
  },
  {
    id: "morango",
    name: "Morango Silvestre",
    category: "Bagas Vermelhas",
    icon: Heart,
    description: "Fresco, suculento e leve. O morango batido com leite ou no nosso blend especial traz antioxidantes raros e um perfume único.",
    vitamins: ["Vitamina C", "Ácido Fólico", "Antocianinas", "Fibras"],
    benefits: [
      "Forte ação anti-inflamatória e protetor cardíaco.",
      "Estimula a saúde e brilho da pele e cabelos.",
      "Baixíssimas calorias, ideal para dietas de emagrecimento."
    ],
    foundIn: ["Suco Especial 100 Igual", "Suco Cremoso de Morango com Ninho", "Morango com Leite"],
    color: "text-red-400 bg-red-500/10 border-red-500/20"
  },
  {
    id: "abacate",
    name: "Abacate Manteiga",
    category: "Fruta Oleaginosa",
    icon: Sparkles,
    description: "O abacate batido na nossa vitamina cremosa suprema fornece gorduras monoinsaturadas saudáveis fundamentais para a nutrição cerebral e saciedade.",
    vitamins: ["Vitamina E (Poderoso Antioxidante)", "Gorduras Boas (Monoinsaturadas)", "Fibras", "Potássio"],
    benefits: [
      "Excelente regulador da saciedade, retardando a fome de forma saudável.",
      "Protege as artérias do coração e melhora as funções cerebrais.",
      "Rico em potássio, ajudando a evitar cãibras musculares."
    ],
    foundIn: ["Vitamina de Abacate Suprema"],
    color: "text-green-400 bg-green-500/10 border-green-500/20"
  },
  {
    id: "gengibre",
    name: "Gengibre Orgânico",
    category: "Raiz / Termogênico",
    icon: Coffee,
    description: "Nosso gengibre ralado na hora adiciona um toque levemente picante, acelerando a taxa metabólica e atuando na queima calórica.",
    vitamins: ["Gingerol (Ativo Funcional)", "Complexo B", "Magnésio", "Potássio"],
    benefits: [
      "Forte termogênico natural que acelera o metabolismo.",
      "Combate azia, gases e melhora a digestão de alimentos pesados.",
      "Forte ação antioxidante e analgésica natural."
    ],
    foundIn: ["Suco Verde Detox"],
    color: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20"
  }
];

// Simple Sun SVG Icon component since Lucide Sun might clash / not load
function SunIcon({ size, ...props }: { size?: number | string } & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size || "24"}
      height={size || "24"}
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

export const BenefitsPage: React.FC<BenefitsPageProps> = ({ onBackToHome }) => {
  const [selectedIngredient, setSelectedIngredient] = useState(INGREDIENTS_BENEFITS[0].id);

  const activeIngredient = INGREDIENTS_BENEFITS.find(item => item.id === selectedIngredient) || INGREDIENTS_BENEFITS[0];

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
            <Leaf size={40} className="fill-current" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4"
          >
            Nutrição & <span className="text-[#8ac926]">Saúde</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-offWhite/60"
          >
            Descubra a ciência funcional por trás das frutas e hortaliças de estúdio que selecionamos para dar vida às nossas receitas!
          </motion.p>
        </div>

        {/* Interactive Benefits Tab Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          {/* Left Column: Ingredients List Tabs */}
          <div className="lg:col-span-4 bg-[#111111]/85 border border-white/5 rounded-3xl p-6 shadow-2xl flex flex-col justify-start gap-3">
            <h3 className="font-extrabold text-xs uppercase tracking-widest text-offWhite/45 mb-4 px-2">
              Selecione o Ingrediente
            </h3>

            {INGREDIENTS_BENEFITS.map((item) => {
              const Icon = item.icon;
              const isSelected = item.id === selectedIngredient;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedIngredient(item.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl border text-left cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#8ac926] border-[#8ac926] text-black shadow-lg shadow-[#8ac926]/10 scale-102'
                      : 'bg-[#1A1A1A]/80 border-white/5 text-offWhite/75 hover:text-white hover:border-white/10'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isSelected ? 'bg-black/10 text-black' : 'bg-black/30 text-[#8ac926]'
                  }`}>
                    <Icon size={18} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="font-black text-sm uppercase tracking-wide leading-tight">
                      {item.name}
                    </h4>
                    <span className={`text-[9px] font-bold uppercase tracking-wider block mt-1 ${
                      isSelected ? 'text-black/60' : 'text-offWhite/35'
                    }`}>
                      {item.category}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Nutritional card */}
          <div className="lg:col-span-8 bg-[#111111]/85 border border-white/5 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIngredient.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* Header Icon + Name */}
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${activeIngredient.color}`}>
                    {React.createElement(activeIngredient.icon, { size: 28, className: "stroke-[2.5]" })}
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#8ac926] block">
                      {activeIngredient.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase text-white leading-none mt-1.5">
                      {activeIngredient.name}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-offWhite/45 mb-2">
                    O que é / Propósito
                  </h4>
                  <p className="text-xs sm:text-sm text-offWhite/75 leading-relaxed font-medium">
                    {activeIngredient.description}
                  </p>
                </div>

                {/* 3 Core Benefits */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-offWhite/45 mb-4">
                    3 Principais Benefícios à Saúde
                  </h4>
                  <ul className="space-y-3">
                    {activeIngredient.benefits.map((benefit, i) => (
                      <li key={i} className="flex gap-3 text-xs sm:text-sm text-offWhite/65 font-medium leading-relaxed">
                        <span className="w-5 h-5 rounded-full bg-[#8ac926]/10 text-[#8ac926] flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Vitamins Tags & Found In */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/5">
                  {/* Vitamins list */}
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-offWhite/45 mb-3">
                      Nutrientes e Vitaminas Ativas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeIngredient.vitamins.map((vit, i) => (
                        <span
                          key={i}
                          className="bg-[#1A1A1A] border border-white/5 px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider text-white"
                        >
                          {vit}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Found In products list */}
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-offWhite/45 mb-3">
                      Encontre nos nossos produtos
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeIngredient.foundIn.map((prod, i) => (
                        <span
                          key={i}
                          className="bg-[#8ac926]/10 border border-[#8ac926]/20 px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider text-[#8ac926]"
                        >
                          {prod}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* General health quote banner */}
        <div className="bg-radial-gradient from-green-950/20 via-[#111111]/80 to-[#111111]/80 border border-white/5 rounded-3xl p-8 text-center max-w-3xl mx-auto shadow-2xl">
          <Leaf className="text-[#8ac926] mx-auto mb-4 fill-[#8ac926]/10" size={32} />
          <h4 className="text-lg font-black uppercase text-white mb-3">
            "Deixe o alimento ser seu remédio e o remédio ser seu alimento."
          </h4>
          <span className="text-[10px] font-black uppercase tracking-wider text-[#8ac926]">
            Hipócrates — Pai da Medicina
          </span>
        </div>

      </div>
    </div>
  );
};
