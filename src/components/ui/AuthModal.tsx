import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Phone, MapPin, CreditCard, Landmark, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { FRANCA_NEIGHBORHOODS } from '../../data/mockData';

export interface UserProfile {
  name: string;
  phone: string;
  street: string;
  number: string;
  neighborhood: string;
  reference: string;
  city: string;
  defaultPayment: 'pix' | 'money' | 'credit' | 'debit';
}

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (profile: UserProfile) => void;
  user?: UserProfile | null;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLoginSuccess, user }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [phoneInput, setPhoneInput] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Register Fields
  const [name, setName] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('Cidade Nova');
  const [reference, setReference] = useState('');
  const [city, setCity] = useState('Franca-SP');
  const [defaultPayment, setDefaultPayment] = useState<UserProfile['defaultPayment']>('pix');

  useEffect(() => {
    if (isOpen) {
      setErrorMsg(null);
      setSuccessMsg(null);
      
      if (user) {
        // Edit Profile Mode: Pre-fill all fields and switch directly to register tab
        setActiveTab('register');
        setPhoneInput(user.phone || '');
        setName(user.name || '');
        setStreet(user.street || '');
        setNumber(user.number || '');
        setNeighborhood(user.neighborhood || 'Cidade Nova');
        setReference(user.reference || '');
        setCity(user.city || 'Franca-SP');
        setDefaultPayment(user.defaultPayment || 'pix');
      } else {
        // Fresh Login / Register fresh mode
        setActiveTab('login');
        setPhoneInput('');
        setName('');
        setStreet('');
        setNumber('');
        setNeighborhood('Cidade Nova');
        setReference('');
        setCity('Franca-SP');
        setDefaultPayment('pix');
      }
    }
  }, [isOpen, user]);

  const handlePhoneLookup = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!phoneInput.trim()) {
      setErrorMsg('Por favor, digite seu número de telefone.');
      return;
    }

    // Retrieve the profiles registry from localStorage
    const registryStr = localStorage.getItem('100igual_registered_profiles');
    const registry: UserProfile[] = registryStr ? JSON.parse(registryStr) : [];

    const normalizedPhone = phoneInput.replace(/\D/g, '');
    const matchedProfile = registry.find(p => p.phone.replace(/\D/g, '') === normalizedPhone);

    if (matchedProfile) {
      setSuccessMsg(`Bem-vindo de volta, ${matchedProfile.name.split(' ')[0]}!`);
      setTimeout(() => {
        onLoginSuccess(matchedProfile);
        onClose();
      }, 1500);
    } else {
      setErrorMsg('Número não encontrado no sistema. Por favor, crie seu perfil na aba "Criar Conta".');
      setTimeout(() => {
        setActiveTab('register');
        setName('');
        // Prefill the phone in register tab
        setPhoneInput(phoneInput);
        setErrorMsg(null);
      }, 2000);
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!name.trim() || !phoneInput.trim() || !street.trim() || !number.trim() || !neighborhood.trim()) {
      setErrorMsg('Por favor, preencha todos os campos obrigatórios (*).');
      return;
    }

    const normalizedPhone = phoneInput.replace(/\D/g, '');
    if (normalizedPhone.length < 10) {
      setErrorMsg('Digite um telefone válido com DDD (ex: 16999999999).');
      return;
    }

    const newProfile: UserProfile = {
      name: name.trim(),
      phone: phoneInput.trim(),
      street: street.trim(),
      number: number.trim(),
      neighborhood: neighborhood.trim(),
      reference: reference.trim(),
      city: city.trim(),
      defaultPayment
    };

    // Save to registered profiles list
    const registryStr = localStorage.getItem('100igual_registered_profiles');
    const registry: UserProfile[] = registryStr ? JSON.parse(registryStr) : [];

    // Filter out previous version of this phone if any
    const filteredRegistry = registry.filter(p => p.phone.replace(/\D/g, '') !== normalizedPhone);
    filteredRegistry.push(newProfile);

    localStorage.setItem('100igual_registered_profiles', JSON.stringify(filteredRegistry));
    
    // Set active logged-in profile in localStorage
    localStorage.setItem('100igual_user_profile', JSON.stringify(newProfile));

    setSuccessMsg('Perfil cadastrado e conectado com sucesso!');
    setTimeout(() => {
      onLoginSuccess(newProfile);
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Dialog Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              className="w-full max-w-lg bg-[#0D0D0D]/95 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.85)] pointer-events-auto overflow-y-auto max-h-[90vh] scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div className="flex items-center gap-2 text-[#8ac926]">
                  <ShieldCheck size={24} className="stroke-[2]" />
                  <h3 className="font-black text-lg text-white uppercase tracking-tight">
                    {user ? 'Editar Perfil / Endereço' : 'Sua Conta 100Igual'}
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-offWhite transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Tabs Switcher - Only display if user is not already logged in */}
              {!user && (
                <div className="flex bg-[#161616] p-1.5 rounded-2xl gap-1 mb-6">
                  <button
                    type="button"
                    onClick={() => { setActiveTab('login'); setErrorMsg(null); }}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                      activeTab === 'login'
                        ? 'bg-[#8ac926] text-black shadow-lg shadow-[#8ac926]/10'
                        : 'text-offWhite/65 hover:text-white bg-transparent'
                    }`}
                  >
                    Entrar
                  </button>
                  <button
                    type="button"
                    onClick={() => { setActiveTab('register'); setErrorMsg(null); }}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                      activeTab === 'register'
                        ? 'bg-[#8ac926] text-black shadow-lg shadow-[#8ac926]/10'
                        : 'text-offWhite/65 hover:text-white bg-transparent'
                    }`}
                  >
                    Criar Conta
                  </button>
                </div>
              )}

              {/* Status Messages */}
              <AnimatePresence mode="wait">
                {errorMsg && (
                  <motion.div
                    className="mb-6 p-4 rounded-xl bg-red-950/20 border border-red-500/30 text-red-400 text-xs font-bold flex items-center gap-2.5"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <AlertCircle size={16} className="shrink-0" />
                    <span>{errorMsg}</span>
                  </motion.div>
                )}

                {successMsg && (
                  <motion.div
                    className="mb-6 p-4 rounded-xl bg-green-950/20 border border-[#8ac926]/30 text-[#8ac926] text-xs font-bold flex items-center gap-2.5"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <CheckCircle2 size={16} className="shrink-0" />
                    <span>{successMsg}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Login Tab Form */}
              {activeTab === 'login' && (
                <form onSubmit={handlePhoneLookup} className="space-y-5">
                  <p className="text-xs text-offWhite/50 leading-relaxed font-medium mb-2">
                    Digite seu número de telefone cadastrado para recuperar automaticamente seu perfil e endereços de entrega salvos.
                  </p>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-offWhite/45 mb-2">
                      Telefone / WhatsApp *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-offWhite/45" size={16} />
                      <input
                        type="tel"
                        required
                        placeholder="(16) 99999-9999"
                        value={phoneInput}
                        onChange={(e) => setPhoneInput(e.target.value)}
                        className="w-full bg-[#161616] border border-white/5 rounded-2xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-offWhite/35 focus:outline-none focus:border-[#8ac926]/40 transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center py-4 rounded-2xl bg-[#8ac926] hover:bg-[#8ac926]/90 text-black font-black text-xs uppercase tracking-wider shadow-lg shadow-[#8ac926]/10 transition-all cursor-pointer"
                  >
                    Entrar e Prefiliar Dados
                  </button>
                </form>
              )}

              {/* Register Tab Form */}
              {activeTab === 'register' && (
                <form onSubmit={handleRegister} className="space-y-4">
                  <p className="text-xs text-offWhite/50 leading-relaxed font-medium mb-4">
                    Cadastre-se para calcularmos a taxa de entrega e preenchermos suas coordenadas para o motoqueiro na entrega!
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-offWhite/45 mb-1.5">
                        Nome Completo *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-offWhite/45" size={16} />
                        <input
                          type="text"
                          required
                          placeholder="Ex: Raiky Silva"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-[#161616] border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-xs text-white placeholder-offWhite/35 focus:outline-none focus:border-[#8ac926]/40 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-offWhite/45 mb-1.5">
                        Telefone / WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-offWhite/45" size={16} />
                        <input
                          type="tel"
                          required
                          placeholder="Ex: (16) 99999-9999"
                          value={phoneInput}
                          onChange={(e) => setPhoneInput(e.target.value)}
                          className="w-full bg-[#161616] border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-xs text-white placeholder-offWhite/35 focus:outline-none focus:border-[#8ac926]/40 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <h4 className="text-[10px] font-black uppercase tracking-widest text-[#8ac926] pt-2 border-t border-white/5">
                    Endereço de Entrega (Franca-SP)
                  </h4>

                  {/* Street & Number */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                      <label className="block text-[10px] font-black uppercase tracking-widest text-offWhite/45 mb-1.5">
                        Rua / Avenida *
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-offWhite/45" size={16} />
                        <input
                          type="text"
                          required
                          placeholder="Rua das Frutas"
                          value={street}
                          onChange={(e) => setStreet(e.target.value)}
                          className="w-full bg-[#161616] border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-xs text-white placeholder-offWhite/35 focus:outline-none focus:border-[#8ac926]/40 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-offWhite/45 mb-1.5">
                        Número *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: 840"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        className="w-full bg-[#161616] border border-white/5 rounded-2xl py-3 px-4 text-xs text-white placeholder-offWhite/35 focus:outline-none focus:border-[#8ac926]/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Neighborhood Dropdown select */}
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-[#8ac926] mb-1.5">
                        Bairro *
                      </label>
                      <select
                        required
                        value={neighborhood}
                        onChange={(e) => setNeighborhood(e.target.value)}
                        className="w-full bg-[#161616] border border-white/5 rounded-2xl py-3 px-4 text-xs text-white focus:outline-none focus:border-[#8ac926]/40 transition-colors cursor-pointer"
                      >
                        {FRANCA_NEIGHBORHOODS.map((n) => (
                          <option key={n.name} value={n.name} className="bg-[#0d0d0d]">
                            {n.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Reference Point */}
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-offWhite/45 mb-1.5">
                        Referência / Complemento
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Apto 12, Perto do banco"
                        value={reference}
                        onChange={(e) => setReference(e.target.value)}
                        className="w-full bg-[#161616] border border-white/5 rounded-2xl py-3 px-4 text-xs text-white placeholder-offWhite/35 focus:outline-none focus:border-[#8ac926]/40 transition-colors"
                      />
                    </div>
                  </div>

                  <h4 className="text-[10px] font-black uppercase tracking-widest text-[#8ac926] pt-2 border-t border-white/5">
                    Preferência de Pagamento
                  </h4>

                  {/* Payment Method Selector */}
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-offWhite/45 mb-1.5">
                      Método Padrão de Pagamento
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'pix', label: 'Pix', icon: Landmark },
                        { id: 'money', label: 'Dinheiro', icon: Landmark },
                        { id: 'credit', label: 'Crédito', icon: CreditCard },
                        { id: 'debit', label: 'Débito', icon: CreditCard },
                      ].map((item) => {
                        const Icon = item.icon;
                        const isSelected = defaultPayment === item.id;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setDefaultPayment(item.id as UserProfile['defaultPayment'])}
                            className={`flex flex-col items-center justify-center py-2.5 rounded-xl border text-[10px] font-bold uppercase transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#8ac926]/10 border-[#8ac926] text-[#8ac926]'
                                : 'bg-[#161616] border-white/5 text-offWhite/65 hover:text-white'
                            }`}
                          >
                            <Icon size={14} className="mb-1" />
                            <span>{item.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 flex items-center justify-center py-4 rounded-2xl bg-[#8ac926] hover:bg-[#8ac926]/90 text-black font-black text-xs uppercase tracking-wider shadow-lg shadow-[#8ac926]/10 transition-all cursor-pointer"
                  >
                    {user ? 'Salvar Alterações' : 'Salvar Dados e Conectar'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
