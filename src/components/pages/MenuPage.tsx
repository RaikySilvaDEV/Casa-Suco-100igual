import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ArrowLeft,
  BookOpen,
  Leaf,
  Zap,
  Flame
} from 'lucide-react';
import { MENU_ITEMS } from '../../data/mockData';
import { type PageName } from '../Navbar';

interface MenuPageProps {
  onBackToHome: () => void;
  onNavigate?: (page: PageName) => void;
}

const CATEGORIES = [
  { id: 'todos', label: 'Todos' },
  { id: 'sucos', label: 'Sucos Naturais' },
  { id: 'vitaminas', label: 'Vitaminas' },
  { id: 'acai', label: 'Açaí' },
  { id: 'lanches', label: 'Lanches' },
  { id: 'refeicoes', label: 'Pratos & Almoço' },
  { id: 'porcoes', label: 'Porções' },
  { id: 'sobremesas', label: 'Sobremesas' },
  { id: 'chopp', label: 'Bebidas & Chopp' },
];

export const MenuPage: React.FC<MenuPageProps> = ({ onBackToHome, onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter items in real-time
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'todos' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.ingredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="relative min-h-screen bg-[#000000] text-offWhite pt-28 pb-20 overflow-x-hidden">
      {/* Parallax background fruit graphics */}
      <div className="absolute inset-0 bg-radial-gradient from-green-950/10 via-transparent to-transparent pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top bar with back-to-home option */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#8ac926] hover:text-white transition-colors cursor-pointer group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Voltar ao Início</span>
          </button>
          
          <h1 className="text-xl font-bold uppercase tracking-wider text-white hidden sm:block">
            Sabor de Verdade, Saúde Todo Dia!
          </h1>
        </div>

        {/* Big Premium Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center text-[#8ac926] mb-4"
          >
            <BookOpen size={40} className="stroke-[1.5]" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4"
          >
            Cardápio <span className="text-[#8ac926]">Completo</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-offWhite/60"
          >
            Nosso cardápio é feito com ingredientes frescos selecionados a cada dia. Venha experimentar.
          </motion.p>
        </div>

        {/* Search and Filters Bento Section */}
        <div className="bg-[#111111]/80 backdrop-blur-md border border-white/5 rounded-3xl p-6 mb-12 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-offWhite/45" size={18} />
              <input
                type="text"
                placeholder="Busque por produto, frutas, ingredientes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#1A1A1A] border border-white/5 rounded-2xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-offWhite/35 focus:outline-none focus:border-[#8ac926]/40 transition-colors"
              />
            </div>

            {/* Total Items Floating Info */}
            <div className="text-xs font-bold uppercase tracking-wider text-offWhite/45">
              Exibindo <span className="text-[#8ac926] font-extrabold">{filteredItems.length}</span> produtos
            </div>
          </div>

          {/* Categories Tab Row */}
          <div className="flex gap-2 overflow-x-auto pb-3 -mx-4 px-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wide transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#8ac926] text-black shadow-lg shadow-[#8ac926]/10 scale-105'
                      : 'bg-[#1A1A1A] border border-white/5 text-offWhite/65 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          {filteredItems.length > 0 ? (
            <motion.div
              key={activeCategory + searchQuery}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              {filteredItems.map((product) => {
                return (
                  <div
                    key={product.id}
                    className="group bg-[#111111]/85 border border-white/5 hover:border-[#8ac926]/20 rounded-3xl p-4 flex flex-col justify-between shadow-xl transition-all duration-300 hover:translate-y-[-4px]"
                  >
                    {/* Header Image with Tag */}
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 select-none bg-black/45">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      {product.tag && (
                        <div className="absolute top-3 left-3 bg-[#8ac926] text-black font-extrabold text-[9px] uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md">
                          {product.tag}
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        {/* Name */}
                        <div className="mb-2">
                          <h3 className="font-extrabold text-lg text-white group-hover:text-[#8ac926] transition-colors leading-tight">
                            {product.name}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-offWhite/50 leading-relaxed mb-4">
                          {product.description}
                        </p>
                      </div>

                      <div>
                        {/* Ingredients tags */}
                        {product.ingredients.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {product.ingredients.map((ing, i) => (
                              <span
                                key={i}
                                className="bg-[#1A1A1A] border border-white/5 px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider text-offWhite/45"
                              >
                                {ing}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Card Footer with Nutritional tags */}
                        <div className="flex items-center pt-3 border-t border-white/5">
                          <div className="flex gap-2">
                            {product.category === 'sucos' && (
                              <div className="text-[10px] font-extrabold uppercase text-[#8ac926]/75 flex items-center gap-1">
                                <Leaf size={10} className="fill-current" />
                                <span>Detox / Fit</span>
                              </div>
                            )}
                            {product.category === 'vitaminas' && (
                              <div className="text-[10px] font-extrabold uppercase text-[#FF7A00]/75 flex items-center gap-1">
                                <Zap size={10} className="fill-current" />
                                <span>Energia</span>
                              </div>
                            )}
                            {product.category === 'acai' && (
                              <div className="text-[10px] font-extrabold uppercase text-purple-400/75 flex items-center gap-1">
                                <Flame size={10} className="fill-current" />
                                <span>Super Food</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              className="text-center py-16 bg-[#111111]/50 border border-white/5 rounded-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-offWhite/25 mb-4 flex justify-center">
                <Search size={48} className="stroke-[1]" />
              </div>
              <h3 className="font-extrabold text-lg text-white mb-2">Nenhum produto encontrado</h3>
              <p className="text-sm text-offWhite/45">
                Não encontramos resultados para "{searchQuery}". Experimente buscar por outros termos!
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer CTA */}
        <motion.div
          className="mt-16 text-center border-t border-white/5 pt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => {
              if (onNavigate) {
                onNavigate('stores');
              } else {
                onBackToHome();
              }
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#8ac926] to-[#4CAF50] text-black font-black text-xs sm:text-sm uppercase hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-lg shadow-[#8ac926]/10"
          >
            <span>Venha nos visitar →</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};
