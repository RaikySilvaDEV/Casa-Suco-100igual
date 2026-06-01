import React from 'react';
import { motion } from 'framer-motion';
import { Truck, MessageSquare, Clock, ShoppingBag } from 'lucide-react';

export const Delivery: React.FC = () => {
  const infoItems = [
    {
      id: 'entrega',
      title: 'Entrega Rápida',
      description: 'Seu pedido onde você estiver',
      icon: (props: React.SVGProps<SVGSVGElement>) => <Truck {...props} />
    },
    {
      id: 'whatsapp',
      title: 'Pedir no WhatsApp',
      description: 'É rápido e muito mais prático',
      icon: (props: React.SVGProps<SVGSVGElement>) => <MessageSquare {...props} />
    },
    {
      id: 'horario',
      title: 'Horário de Atendimento',
      description: 'Seg a Sáb: 08h às 21h\nDom: 09h às 16h',
      icon: (props: React.SVGProps<SVGSVGElement>) => <Clock {...props} />
    },
    {
      id: 'retirada',
      title: 'Retirada no Local',
      description: 'Pronta em 40min ou menos para buscar!',
      icon: (props: React.SVGProps<SVGSVGElement>) => <ShoppingBag {...props} />
    },
    {
      id: 'instagram',
      title: 'Siga no Instagram',
      description: 'Novidades, promoções e muito mais!',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    }
  ];

  return (
    <section id="delivery" className="relative py-12 bg-[#090909] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Horizontal Container Block */}
        <div className="py-8 px-6 rounded-3xl bg-[#111111] border border-white/5 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 items-start">
            {infoItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Icon with circular border */}
                  <div className="w-12 h-12 rounded-full border border-[#8ac926]/20 flex items-center justify-center text-[#8ac926] bg-[#8ac926]/5 mb-4 shadow-[0_0_15px_rgba(138,201,38,0.08)]">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h4 className="font-extrabold text-white text-xs uppercase tracking-wider mb-1.5 leading-snug">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-[11px] text-offWhite/50 leading-relaxed whitespace-pre-line font-medium">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
