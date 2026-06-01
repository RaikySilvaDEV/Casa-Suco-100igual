import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
  Check,
  ArrowLeft,
  BookOpen,
  Leaf,
  Zap,
  Flame,
  Truck,
  Store,
  CreditCard,
  Landmark,
  Edit2,
  UserCheck,
  ChevronLeft
} from 'lucide-react';
import { MENU_ITEMS, type MenuItem } from '../../data/mockData';
import { type UserProfile } from '../ui/AuthModal';

interface MenuPageProps {
  onBackToHome: () => void;
  user: UserProfile | null;
  onOpenAuth: () => void;
}

interface CartItem {
  product: MenuItem;
  quantity: number;
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

export const MenuPage: React.FC<MenuPageProps> = ({ onBackToHome, user, onOpenAuth }) => {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [addedAnimationId, setAddedAnimationId] = useState<string | null>(null);

  // Checkout configuration states (Step 2)
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'shipping'>('cart');
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'pickup'>('delivery');
  const [pickupLocation, setPickupLocation] = useState('Presidente Vargas');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'money' | 'credit' | 'debit'>('pix');
  const [changeFor, setChangeFor] = useState('');

  // Auto-sync preferred payment method from user profile
  useEffect(() => {
    if (user) {
      setPaymentMethod(user.defaultPayment || 'pix');
    }
  }, [user, checkoutStep]);

  // Reset checkout step when drawer is closed
  useEffect(() => {
    if (!isCartOpen) {
      setCheckoutStep('cart');
    }
  }, [isCartOpen]);

  // Reset checkout step if cart becomes empty
  useEffect(() => {
    if (cart.length === 0) {
      setCheckoutStep('cart');
      setIsCartOpen(false);
    }
  }, [cart]);

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

  // Shopping Cart Actions
  const addToCart = (product: MenuItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });

    // Added visual feedback animation
    setAddedAnimationId(product.id);
    setTimeout(() => setAddedAnimationId(null), 1000);
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return { ...item, quantity: newQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const cartTotal = useMemo(() => {
    return cart.reduce((total, item) => {
      const priceVal = parseFloat(item.product.price.replace('R$ ', '').replace(',', '.'));
      return total + priceVal * item.quantity;
    }, 0);
  }, [cart]);

  const totalItemsCount = useMemo(() => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  }, [cart]);

  // Delivery Calculations
  const deliveryFee = deliveryType === 'delivery' ? 5.00 : 0.00;
  const grandTotal = cartTotal + deliveryFee;

  // Checkout via WhatsApp (ERP Structured Ticket)
  const handleCheckout = () => {
    if (cart.length === 0 || !user) return;

    let message = `*NOVO PEDIDO - 100IGUAL CASA DE SUCOS*\n`;
    message += `-------------------------------------------\n`;
    message += `👤 *CLIENTE:* ${user.name}\n`;
    message += `📞 *TELEFONE:* ${user.phone}\n`;
    message += `🏍️ *TIPO:* ${deliveryType === 'delivery' ? 'Entrega Residencial' : 'Retirada na Loja'}\n`;
    
    if (deliveryType === 'delivery') {
      message += `📍 *ENDEREÇO:* ${user.street}, ${user.number}\n`;
      message += `🏡 *BAIRRO:* ${user.neighborhood}\n`;
      if (user.reference) {
        message += `🎯 *REF:* ${user.reference}\n`;
      }
      message += `🏙️ *CIDADE:* ${user.city}\n`;
    } else {
      message += `🏢 *RETIRAR EM:* Unidade ${pickupLocation}\n`;
    }
    
    message += `-------------------------------------------\n`;
    message += `🛍️ *ITENS DO PEDIDO:*\n`;

    cart.forEach((item) => {
      const priceVal = parseFloat(item.product.price.replace('R$ ', '').replace(',', '.'));
      const subtotal = (priceVal * item.quantity).toFixed(2).replace('.', ',');
      message += `• *${item.quantity}x ${item.product.name}* (${item.product.price} un) = *R$ ${subtotal}*\n`;
      if (item.product.ingredients.length > 0) {
        message += `  _Ingredientes: ${item.product.ingredients.slice(0, 3).join(', ')}_\n`;
      }
    });

    message += `-------------------------------------------\n`;
    
    const payMethodNames = {
      pix: 'Pix (Transferência)',
      money: `Dinheiro${changeFor ? ` (Troco para R$ ${changeFor})` : ' (Sem troco)'}`,
      credit: 'Cartão de Crédito (na entrega)',
      debit: 'Cartão de Débito (na entrega)'
    };
    
    message += `💳 *FORMA DE PAGAMENTO:* ${payMethodNames[paymentMethod]}\n`;
    message += `-------------------------------------------\n`;
    message += `💵 *RESUMO FINANCEIRO:*\n`;
    message += `• Subtotal Produtos: R$ ${cartTotal.toFixed(2).replace('.', ',')}\n`;
    if (deliveryType === 'delivery') {
      message += `• Taxa de Entrega: R$ ${deliveryFee.toFixed(2).replace('.', ',')}\n`;
    }
    message += `• *TOTAL DO PEDIDO: R$ ${grandTotal.toFixed(2).replace('.', ',')}*\n`;
    message += `-------------------------------------------\n\n`;
    message += `_Pedido finalizado via site. Aguardamos sua confirmação e preparo!_`;

    const encodedText = encodeURIComponent(message);
    
    // Choose WhatsApp number depending on Unit selected
    const whatsappNumber = pickupLocation === 'Paulo VI' ? '551637215494' : '551637215494'; // default numbers
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

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
            Explore nossa variedade de sucos naturais frescos, vitaminas cremosas, pratos fartos, porções crocantes de chapa e açaís montados do seu jeito!
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
                const isAdded = addedAnimationId === product.id;
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
                        {/* Name and Price */}
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h3 className="font-extrabold text-lg text-white group-hover:text-[#8ac926] transition-colors leading-tight">
                            {product.name}
                          </h3>
                          <span className="text-[#8ac926] font-black text-lg whitespace-nowrap">
                            {product.price}
                          </span>
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

                        {/* Action buttons */}
                        <div className="flex items-center justify-between pt-3 border-t border-white/5">
                          {/* Nutritional tags */}
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

                          <button
                            onClick={() => addToCart(product)}
                            className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wide cursor-pointer transition-all duration-300 ${
                              isAdded
                                ? 'bg-green-500 text-white shadow-lg'
                                : 'bg-white/5 border border-white/10 text-white hover:bg-[#8ac926] hover:text-black hover:scale-105 active:scale-95'
                            }`}
                          >
                            {isAdded ? (
                              <>
                                <Check size={14} className="stroke-[3]" />
                                <span>Adicionado!</span>
                              </>
                            ) : (
                              <>
                                <Plus size={14} className="stroke-[3]" />
                                <span>Adicionar</span>
                              </>
                            )}
                          </button>
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
      </div>

      {/* Floating Shopping Cart Trigger Button (Visible when cart is not empty) */}
      <AnimatePresence>
        {cart.length > 0 && (
          <motion.button
            onClick={() => setIsCartOpen(true)}
            className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-40 flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-[#8ac926] text-black font-black text-sm uppercase tracking-wide shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-[#8ac926]/20"
            initial={{ scale: 0, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: 50 }}
          >
            <div className="relative">
              <ShoppingBag size={18} className="stroke-[2.5]" />
              <span className="absolute -top-2 -right-2 bg-black text-[#8ac926] font-black text-[9px] flex items-center justify-center w-4 h-4 rounded-full border border-black">
                {totalItemsCount}
              </span>
            </div>
            <span>Ver Sacola (R$ {cartTotal.toFixed(2).replace('.', ',')})</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Cart Sliding Drawer Modal Overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Modal Backdrop */}
            <motion.div
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 z-50 bg-[#000000]/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Cart Drawer Panel */}
            <motion.div
              className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-[#0D0D0D] border-l border-white/5 flex flex-col justify-between shadow-[0_0_50px_rgba(0,0,0,0.9)]"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-white/5 flex items-center justify-between bg-[#111111]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#8ac926]/10 flex items-center justify-center text-[#8ac926]">
                    <ShoppingBag size={20} className="stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-white uppercase tracking-tight">
                      {checkoutStep === 'cart' ? 'Sua Sacola' : 'Configurações'}
                    </h3>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-offWhite/45 font-medium leading-tight mt-0.5">
                      {checkoutStep === 'cart' ? (
                        `${totalItemsCount} ${totalItemsCount === 1 ? 'item' : 'itens'} adicionados`
                      ) : (
                        'Entrega & Pagamento'
                      )}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    if (checkoutStep === 'shipping') {
                      setCheckoutStep('cart');
                    } else {
                      setIsCartOpen(false);
                    }
                  }}
                  className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-offWhite cursor-pointer"
                >
                  <ChevronLeft size={16} />
                </button>
              </div>

              {/* Drawer Scrollable Body Content */}
              <div className="flex-grow overflow-y-auto p-6 space-y-5 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                {checkoutStep === 'cart' ? (
                  /* Step 1: Cart Items List */
                  cart.length > 0 ? (
                    cart.map((item) => {
                      const priceVal = parseFloat(item.product.price.replace('R$ ', '').replace(',', '.'));
                      const itemSubtotal = (priceVal * item.quantity).toFixed(2).replace('.', ',');
                      return (
                        <div
                          key={item.product.id}
                          className="bg-[#111111] border border-white/5 rounded-2xl p-4 flex gap-4"
                        >
                          {/* Product Mini Image */}
                          <div className="w-16 h-16 rounded-xl overflow-hidden select-none shrink-0 bg-black/45">
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Product Info */}
                          <div className="flex-grow flex flex-col justify-between">
                            <div>
                              <div className="flex items-start justify-between gap-2">
                                <h4 className="font-extrabold text-sm text-white leading-tight">
                                  {item.product.name}
                                </h4>
                                <button
                                  onClick={() => removeFromCart(item.product.id)}
                                  className="text-offWhite/25 hover:text-red-400 p-0.5 transition-colors cursor-pointer"
                                >
                                  <Trash2 size={14} />
                                </button>
                              </div>
                              <span className="text-xs text-offWhite/45 font-semibold block mt-1">
                                {item.product.price} un
                              </span>
                            </div>

                            {/* Controls Row */}
                            <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5">
                              <span className="text-[#8ac926] font-bold text-sm">
                                R$ {itemSubtotal}
                              </span>

                              <div className="flex items-center bg-[#1A1A1A] border border-white/5 rounded-xl px-1 py-0.5">
                                <button
                                  onClick={() => updateQuantity(item.product.id, -1)}
                                  className="p-1.5 text-offWhite/65 hover:text-[#8ac926] transition-colors cursor-pointer"
                                >
                                  <Minus size={12} className="stroke-[2.5]" />
                                </button>
                                <span className="px-3 font-extrabold text-sm text-white">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.product.id, 1)}
                                  className="p-1.5 text-offWhite/65 hover:text-[#8ac926] transition-colors cursor-pointer"
                                >
                                  <Plus size={12} className="stroke-[2.5]" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="text-center py-16">
                      <div className="text-offWhite/15 mb-4 flex justify-center">
                        <ShoppingBag size={48} className="stroke-[1]" />
                      </div>
                      <h4 className="font-extrabold text-base text-white mb-1">Sua sacola está vazia</h4>
                      <p className="text-xs text-offWhite/45">
                        Explore nosso cardápio completo e adicione itens para iniciar o seu pedido!
                      </p>
                    </div>
                  )
                ) : (
                  /* Step 2: Shipping & Payment Preferences */
                  <div className="space-y-6">
                    {/* Logged in User Check / Profile summary */}
                    {user ? (
                      <div className="p-4 rounded-2xl bg-green-950/10 border border-[#8ac926]/20 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-[#8ac926] text-black flex items-center justify-center font-black text-xs uppercase leading-none shadow-md">
                            {user.name.charAt(0)}
                          </div>
                          <div>
                            <span className="block text-[10px] font-black uppercase tracking-wider text-[#8ac926]">
                              Cliente Identificado
                            </span>
                            <span className="text-sm font-extrabold text-white leading-tight">
                              {user.name}
                            </span>
                          </div>
                        </div>
                        
                        <button
                          onClick={onOpenAuth}
                          className="flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-white/5 border border-white/10 hover:bg-[#8ac926] hover:text-black transition-all cursor-pointer font-bold text-[10px] uppercase tracking-wide"
                        >
                          <Edit2 size={10} />
                          <span>Editar</span>
                        </button>
                      </div>
                    ) : (
                      <div className="p-5 rounded-2xl bg-yellow-950/10 border border-yellow-500/20 text-center space-y-4">
                        <div className="flex justify-center text-yellow-400">
                          <UserCheck size={32} className="stroke-[1.5]" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-extrabold text-sm text-white uppercase tracking-wider">
                            Identificação Obrigatória
                          </h4>
                          <p className="text-xs text-offWhite/50 leading-relaxed font-medium px-2">
                            Faça login ou cadastre seu endereço residencial para calcularmos o motoboy e sincronizarmos seu telefone!
                          </p>
                        </div>
                        <button
                          onClick={onOpenAuth}
                          className="w-full py-3 rounded-xl bg-[#8ac926] hover:bg-[#8ac926]/90 text-black font-black text-xs uppercase tracking-widest transition-all cursor-pointer shadow-md shadow-[#8ac926]/10"
                        >
                          Entrar ou Cadastrar Conta
                        </button>
                      </div>
                    )}

                    {/* Delivery Method Choice Toggles */}
                    <div className="space-y-2.5">
                      <label className="block text-[10px] font-black uppercase tracking-widest text-offWhite/45">
                        Método de Recebimento
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => setDeliveryType('delivery')}
                          className={`flex flex-col items-center justify-center p-4 rounded-2xl border text-xs font-black uppercase tracking-wider transition-all cursor-pointer gap-2 ${
                            deliveryType === 'delivery'
                              ? 'bg-[#8ac926]/10 border-[#8ac926] text-[#8ac926]'
                              : 'bg-[#111111] border-white/5 text-offWhite/65 hover:text-white'
                          }`}
                        >
                          <Truck size={18} />
                          <span>Receber em Casa</span>
                        </button>

                        <button
                          onClick={() => setDeliveryType('pickup')}
                          className={`flex flex-col items-center justify-center p-4 rounded-2xl border text-xs font-black uppercase tracking-wider transition-all cursor-pointer gap-2 ${
                            deliveryType === 'pickup'
                              ? 'bg-[#8ac926]/10 border-[#8ac926] text-[#8ac926]'
                              : 'bg-[#111111] border-white/5 text-offWhite/65 hover:text-white'
                          }`}
                        >
                          <Store size={18} />
                          <span>Retirar na Loja</span>
                        </button>
                      </div>
                    </div>

                    {/* Delivery Type Conditionals */}
                    {deliveryType === 'delivery' ? (
                      /* Address view (visible only if logged in) */
                      user && (
                        <div className="p-5 bg-[#111111] border border-white/5 rounded-2xl space-y-3">
                          <span className="block text-[10px] font-black uppercase tracking-widest text-offWhite/45">
                            Coordenadas de Entrega
                          </span>
                          
                          <div className="space-y-2 text-xs font-medium">
                            <p className="text-white">
                              <span className="text-offWhite/45 block text-[9px] uppercase font-bold">Rua / Número</span>
                              {user.street}, {user.number}
                            </p>
                            <p className="text-white">
                              <span className="text-offWhite/45 block text-[9px] uppercase font-bold">Bairro</span>
                              {user.neighborhood}
                            </p>
                            {user.reference && (
                              <p className="text-white">
                                <span className="text-offWhite/45 block text-[9px] uppercase font-bold">Ponto de Referência</span>
                                {user.reference}
                              </p>
                            )}
                            <p className="text-white">
                              <span className="text-offWhite/45 block text-[9px] uppercase font-bold">Cidade</span>
                              {user.city}
                            </p>
                          </div>
                        </div>
                      )
                    ) : (
                      /* Pickup Location Select */
                      <div className="space-y-2.5">
                        <label className="block text-[10px] font-black uppercase tracking-widest text-offWhite/45">
                          Selecione a Unidade de Retirada
                        </label>
                        <div className="space-y-2">
                          {[
                            { id: 'Presidente Vargas', address: 'Av. Pres. Vargas, 840 - Cidade Nova' },
                            { id: 'Paulo VI', address: 'Av. Dr. Flávio Rocha, 500 - Vila Paulo VI' }
                          ].map((loc) => {
                            const isLocSelected = pickupLocation === loc.id;
                            return (
                              <button
                                key={loc.id}
                                onClick={() => setPickupLocation(loc.id)}
                                className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-center leading-tight ${
                                  isLocSelected
                                    ? 'bg-[#8ac926]/10 border-[#8ac926] text-[#8ac926]'
                                    : 'bg-[#111111] border-white/5 text-offWhite/65 hover:text-white'
                                }`}
                              >
                                <span className="font-extrabold text-xs uppercase tracking-wide mb-1 text-white">
                                  Unidade {loc.id}
                                </span>
                                <span className="text-[10px] text-offWhite/45 font-medium">
                                  {loc.address}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Payment Select Option */}
                    <div className="space-y-2.5">
                      <label className="block text-[10px] font-black uppercase tracking-widest text-offWhite/45">
                        Forma de Pagamento
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { id: 'pix', label: 'Pix', icon: Landmark },
                          { id: 'money', label: 'Dinheiro', icon: Landmark },
                          { id: 'credit', label: 'Crédito', icon: CreditCard },
                          { id: 'debit', label: 'Débito', icon: CreditCard },
                        ].map((item) => {
                          const Icon = item.icon;
                          const isSelected = paymentMethod === item.id;
                          return (
                            <button
                              key={item.id}
                              onClick={() => {
                                setPaymentMethod(item.id as any);
                                if (item.id !== 'money') setChangeFor('');
                              }}
                              className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs font-bold uppercase transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#8ac926]/10 border-[#8ac926] text-[#8ac926]'
                                  : 'bg-[#111111] border-white/5 text-offWhite/65 hover:text-white'
                              }`}
                            >
                              <Icon size={14} />
                              <span>{item.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Cash Change Input Conditional */}
                    {paymentMethod === 'money' && (
                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <label className="block text-[10px] font-black uppercase tracking-widest text-offWhite/45">
                          Precisa de troco para quanto?
                        </label>
                        <input
                          type="text"
                          placeholder="Ex: R$ 100,00 (Deixe em branco se não precisar)"
                          value={changeFor}
                          onChange={(e) => setChangeFor(e.target.value)}
                          className="w-full bg-[#111111] border border-white/5 rounded-2xl py-3 px-4 text-xs text-white placeholder-offWhite/35 focus:outline-none focus:border-[#8ac926]/40 transition-colors"
                        />
                      </motion.div>
                    )}
                  </div>
                )}
              </div>

              {/* Drawer Footer Checkout Panel */}
              <div className="p-6 border-t border-white/5 bg-[#111111]">
                <div className="space-y-2 mb-6">
                  {/* Summary Pricing Details */}
                  {checkoutStep === 'shipping' && (
                    <div className="space-y-1.5 pb-3 border-b border-white/5 text-xs text-offWhite/65">
                      <div className="flex items-center justify-between">
                        <span>Subtotal dos Sucos:</span>
                        <span className="text-white font-semibold">
                          R$ {cartTotal.toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                      {deliveryType === 'delivery' && (
                        <div className="flex items-center justify-between">
                          <span>Taxa de Entrega (Motoboy):</span>
                          <span className="text-white font-semibold">
                            R$ {deliveryFee.toFixed(2).replace('.', ',')}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Total Display */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-bold text-sm uppercase tracking-wider text-offWhite/60">
                      Valor Total:
                    </span>
                    <span className="text-[#8ac926] font-black text-2xl">
                      R$ {grandTotal.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>

                {checkoutStep === 'cart' ? (
                  /* Step 1 CTA button */
                  <button
                    onClick={() => setCheckoutStep('shipping')}
                    disabled={cart.length === 0}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#8ac926] text-black font-black text-sm uppercase tracking-wider hover:scale-102 active:scale-98 transition-all duration-300 shadow-xl cursor-pointer disabled:cursor-not-allowed disabled:bg-white/5 disabled:text-offWhite/25"
                  >
                    <span>Prosseguir para Recebimento</span>
                  </button>
                ) : (
                  /* Step 2 CTA button */
                  <button
                    onClick={handleCheckout}
                    disabled={cart.length === 0 || !user}
                    className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl bg-[#8ac926] disabled:bg-white/5 disabled:text-offWhite/25 disabled:border-white/5 text-black font-black text-sm uppercase tracking-wider transition-all duration-300 hover:scale-102 active:scale-98 shadow-xl cursor-pointer disabled:cursor-not-allowed"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.115-2.887-6.98-1.865-1.865-4.343-2.89-6.985-2.891-5.439 0-9.865 4.42-9.869 9.865-.001 1.748.461 3.456 1.338 4.966L1.879 21.03l4.768-1.876zm12.338-7.986c-.328-.164-1.94-.957-2.24-1.066-.298-.11-.517-.164-.734.164-.218.328-.846 1.066-1.037 1.284-.19.218-.38.245-.708.081-.328-.164-1.386-.51-2.64-1.627-.975-.87-1.633-1.946-1.824-2.274-.19-.328-.02-.505.143-.668.148-.147.328-.383.493-.574.164-.19.218-.328.328-.547.11-.218.055-.41-.027-.574-.082-.164-.734-1.77-.997-2.42-.258-.633-.518-.547-.708-.557-.183-.01-.39-.01-.6-.01-.21 0-.555.08-.846.398-.29.319-1.11 1.085-1.11 2.648 0 1.564 1.138 3.078 1.293 3.296.155.218 2.24 3.42 5.423 4.795.757.327 1.348.52 1.81.667.76.241 1.45.207 1.996.126.608-.09 1.94-.793 2.214-1.56.273-.766.273-1.422.19-1.56-.081-.137-.298-.218-.626-.382z"/>
                    </svg>
                    <span>Finalizar e Enviar Pedido</span>
                  </button>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
