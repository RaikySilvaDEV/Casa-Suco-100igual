import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, ShoppingBag, MessageSquare, Truck, ArrowRight, Sparkles } from 'lucide-react';

const STEPS = [
  {
    id: 1,
    title: 'Escolha a Unidade',
    description: 'Selecione entre a nossa loja da Presidente Vargas ou da Paulo VI - escolha a mais próxima de você em Franca-SP para garantir menor tempo de entrega ou facilidade de retirada.',
    icon: Home,
    color: 'from-orangeCitrus to-orangeGold',
    badge: 'Passo 1',
    tip: 'Unidade Paulo VI possui espaço kids amplo!'
  },
  {
    id: 2,
    title: 'Escolha o Produto',
    description: 'Explore nosso cardápio vivo! Temos desde os tradicionais sucos ciclos e detox, o melhor açaí na tigela, lanches artesanais gigantes até porções com chopp trincando de gelado.',
    icon: ShoppingBag,
    color: 'from-orangeGold to-greenTropical',
    badge: 'Passo 2',
    tip: 'Tente o X-Franca Premium, é um absurdo!'
  },
  {
    id: 3,
    title: 'Peça no WhatsApp',
    description: 'Clique no botão de pedido do seu produto favorito. O site vai gerar automaticamente uma mensagem com os dados exatos para nosso atendente iniciar a preparação em segundos.',
    icon: MessageSquare,
    color: 'from-greenTropical to-emerald-500',
    badge: 'Passo 3',
    tip: 'Você pode personalizar ingredientes na conversa!'
  },
  {
    id: 4,
    title: 'Receba ou Retire',
    description: 'Decida se prefere que nosso motoboy entregue super rápido na sua casa ou se prefere passar na unidade para pegar direto no balcão ou no drive-thru sem descer do carro (bebidas prontas em 40min ou menos!).',
    icon: Truck,
    color: 'from-emerald-500 to-orangeCitrus',
    badge: 'Passo 4',
    tip: 'Bebidas ficam prontas em até 40 minutos para buscar!'
  },
];

export const OrderFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  // Percentage of progress bar fill
  const progressPercent = ((activeStep - 1) / (STEPS.length - 1)) * 100;

  const currentStepData = STEPS[activeStep - 1];
  const CurrentIcon = currentStepData.icon;

  return (
    <section id="como-pedir" className="relative py-24 bg-darkBg overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orangeCitrus/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles size={12} className="text-orangeCitrus" />
            <span className="text-xs font-bold text-orangeGold uppercase tracking-wider">Super simples</span>
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Monte seu Pedido
          </motion.h2>
          
          <motion.p
            className="max-w-xl mx-auto text-sm md:text-base text-offWhite/70 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Em apenas quatro passos fáceis, você garante a melhor experiência e o sabor mais fresco de Franca na sua mesa.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto mb-16 relative px-4">
          <div className="absolute top-6 left-12 right-12 h-1 bg-white/10 -translate-y-1/2 hidden md:block" />
          
          <motion.div
            className="absolute top-6 left-12 h-1 bg-gradient-to-r from-orangeCitrus via-orangeGold to-greenTropical -translate-y-1/2 hidden md:block origin-left"
            style={{ width: `calc(${progressPercent}% - 24px)` }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          />

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 relative z-10">
            {STEPS.map((step) => {
              const isSelected = activeStep === step.id;
              const isPast = activeStep > step.id;
              
              return (
                <div key={step.id} className="flex flex-col items-center">
                  <motion.button
                    onClick={() => setActiveStep(step.id)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-sm transition-all duration-300 ${
                      isSelected
                        ? 'bg-gradient-to-r from-orangeCitrus to-orangeGold text-darkBg shadow-glow-orange scale-110 border-2 border-white/20'
                        : isPast
                        ? 'bg-greenTropical text-white border-2 border-greenTropical'
                        : 'bg-darkCard text-offWhite/50 border border-white/5 hover:border-white/20'
                    }`}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {isPast ? '✓' : step.id}
                  </motion.button>
                  <span className={`text-xs font-bold mt-3 transition-colors duration-300 ${
                    isSelected ? 'text-white' : 'text-offWhite/45'
                  }`}>
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>

        </div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              className="rounded-3xl border border-white/5 bg-darkCard/50 p-6 md:p-10 backdrop-blur-md relative overflow-hidden"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b ${currentStepData.color}`} />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pl-4">
                
                <div className="flex-1">
                  <span className="inline-block text-[10px] font-black text-orangeCitrus px-3 py-1 rounded-full bg-orangeCitrus/15 border border-orangeCitrus/20 uppercase tracking-widest mb-4">
                    {currentStepData.badge}
                  </span>

                  <h3 className="text-xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">
                    {currentStepData.title}
                  </h3>

                  <p className="text-xs md:text-sm text-offWhite/75 leading-relaxed font-semibold mb-6">
                    {currentStepData.description}
                  </p>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2">
                    <Sparkles size={14} className="text-orangeGold shrink-0" />
                    <span className="text-[11px] font-bold text-offWhite/60">
                      Dica: <span className="text-offWhite">{currentStepData.tip}</span>
                    </span>
                  </div>
                </div>

                <div className="flex justify-center shrink-0">
                  <motion.div
                    className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-orangeCitrus"
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 2, -2, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <CurrentIcon size={48} className="md:size-16" />
                  </motion.div>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between items-center mt-6 px-4">
            <button
              disabled={activeStep === 1}
              onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
              className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                activeStep === 1 ? 'text-offWhite/20 cursor-not-allowed' : 'text-offWhite/50 hover:text-white'
              }`}
            >
              Anterior
            </button>
            
            <button
              disabled={activeStep === STEPS.length}
              onClick={() => setActiveStep((prev) => Math.min(STEPS.length, prev + 1))}
              className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                activeStep === STEPS.length ? 'text-offWhite/20 cursor-not-allowed' : 'text-orangeCitrus hover:text-white'
              }`}
            >
              <span>Próximo</span>
              <ArrowRight size={12} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
