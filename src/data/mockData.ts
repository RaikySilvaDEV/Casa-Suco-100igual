export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'sucos' | 'vitaminas' | 'acai' | 'lanches' | 'refeicoes' | 'porcoes' | 'sobremesas' | 'chopp';
  tag?: string;
  ingredients: string[];
  image: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
}

export interface UnitInfo {
  id: string;
  name: string;
  address: string;
  schedule: string;
  whatsapp: string;
  mapsUrl: string;
  image: string; // URL of storefront / kids area / real photo
  hasDriveThru: boolean;
  hasKidsSpace: boolean;
  accentColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface MomentCard {
  id: string;
  title: string;
  description: string;
  time: string;
  gradient: string;
  products: string[];
}

export const MOMENT_CARDS: MomentCard[] = [
  {
    id: 'manha',
    title: 'Manhã Leve',
    description: 'Para começar o dia com energia e leveza. Sucos funcionais, saladas de frutas e misto quente quentinho.',
    time: '08:00 - 11:30',
    gradient: 'from-orangeGold/20 via-orangeCitrus/10 to-transparent',
    products: ['Suco Verde Detox', 'Suco de Laranja Especial', 'Misto Quente Prensado', 'Salada de Frutas'],
  },
  {
    id: 'almoco',
    title: 'Almoço Completo',
    description: 'Pratos executivos e grelhados de contrafilé ou filé mignon preparados na hora com sabor de comida caseira.',
    time: '11:30 - 14:30',
    gradient: 'from-greenTropical/20 via-orangeGold/10 to-transparent',
    products: ['Almoço Executivo', 'Filé à JK Clássico', 'Suco Verde Detox', 'Suco de Laranja Especial'],
  },
  {
    id: 'tarde',
    title: 'Tarde Refrescante',
    description: 'Combata o calor da tarde com nosso açaí premium montado do seu jeito, ou com um suco cremoso de frutas.',
    time: '14:30 - 18:00',
    gradient: 'from-orangeCitrus/20 via-orangeGold/10 to-transparent',
    products: ['Açaí Supremo na Tigela', 'Suco de Morango com Ninho', 'Vitamina de Abacate', 'Lanche Natural de Frango'],
  },
  {
    id: 'noite',
    title: 'Noite de Porção & Chopp',
    description: 'Momento de relaxar com os amigos. Porções de chapa gigantescas e aquele Chopp estupidamente gelado.',
    time: '18:00 - 00:00',
    gradient: 'from-orangeCitrus/30 via-greenTropical/10 to-transparent',
    products: ['Chopp Antarctica trincando', 'Porção de Tilápia Crocante', 'X-Bolota Premium', 'Batata Cheddar & Bacon'],
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // Category 1: Sucos Naturais
  {
    id: "suco-100-igual",
    name: "Suco Especial 100 Igual",
    description: "Blend secreto cítrico e super cremoso de laranja, morango silvestre e abacaxi maduro batido com folhas de hortelã orgânica fresca. Receita tradicional da casa há mais de 24 anos.",
    price: "R$ 14,90",
    category: "sucos",
    tag: "Mais Vendido",
    ingredients: ["Laranja", "Morango", "Abacaxi", "Hortelã"],
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "suco-verde-detox",
    name: "Suco Verde Detox",
    description: "Suco prensado a frio, ideal para desintoxicar e energizar. Feito com folhas selecionadas de couve orgânica, limão espremido na hora, gengibre ralado, maçã verde e água de coco natural geladíssima.",
    price: "R$ 12,90",
    category: "sucos",
    tag: "Saudável",
    ingredients: ["Couve", "Limão", "Gengibre", "Maçã Verde", "Água de Coco"],
    image: "https://images.unsplash.com/photo-1610970881699-44a5587caaec?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "suco-morango-ninho",
    name: "Suco Cremoso de Morango com Ninho",
    description: "Batida encorpada e irresistível de morangos silvestres selecionados com leite em pó Ninho original e gelo picado.",
    price: "R$ 15,90",
    category: "sucos",
    tag: "Favorito da Tarde",
    ingredients: ["Morangos frescos", "Leite Ninho", "Leite Condensado", "Gelo"],
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "suco-laranja-puro",
    name: "Suco de Laranja Especial (Puro)",
    description: "Suco clássico espremido na hora de laranjas pera selecionadas da região. Doce, fresco e gelado.",
    price: "R$ 10,90",
    category: "sucos",
    ingredients: ["100% Suco de Laranja natural"],
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "suco-acerola-laranja",
    name: "Suco de Acerola com Laranja",
    description: "Uma bomba de vitamina C super refrescante, combinando a acidez da acerola fresca com o doce do suco de laranja puro.",
    price: "R$ 12,50",
    category: "sucos",
    ingredients: ["Acerola fresca", "Suco de Laranja"],
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "suco-abacaxi-hortela",
    name: "Suco de Abacaxi com Hortelã",
    description: "O clássico de frescor instantâneo, batendo fatias de abacaxi pérola maduro com folhas selecionadas de hortelã orgânica.",
    price: "R$ 11,90",
    category: "sucos",
    ingredients: ["Abacaxi", "Hortelã", "Água Mineral Gelada"],
    image: "https://images.unsplash.com/photo-1525385133336-254847240f21?q=80&w=600&auto=format&fit=crop"
  },

  // Category 2: Vitaminas Cremosas
  {
    id: "vitamina-abacate",
    name: "Vitamina de Abacate Suprema",
    description: "Vitamina super encorpada e aveludada, batendo polpa fresca de abacate manteiga com leite integral e açúcar ou mel silvestre.",
    price: "R$ 13,90",
    category: "vitaminas",
    ingredients: ["Abacate", "Leite Integral", "Açúcar/Mel"],
    image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "vitamina-mista",
    name: "Vitamina Mista de Frutas",
    description: "A tradicional vitamina de lanchonete, unindo fatias de banana prata, mamão formosa doce, maçã vermelha e leite integral batidos.",
    price: "R$ 14,50",
    category: "vitaminas",
    ingredients: ["Banana", "Mamão", "Maçã", "Leite Integral"],
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "vitamina-energetica",
    name: "Vitamina Energética 100 Igual",
    description: "Perfeita para dar aquele gás no seu dia. Mistura super calórica de banana prata, amendoim torrado moído, xarope de guaraná natural e leite.",
    price: "R$ 15,90",
    category: "vitaminas",
    tag: "Super Carga",
    ingredients: ["Banana", "Amendoim Moído", "Guaraná", "Leite"],
    image: "https://images.unsplash.com/photo-1505252585461-04db1ebb846d?q=80&w=600&auto=format&fit=crop"
  },

  // Category 3: Açaí
  {
    id: "acai-supremo-tigela",
    name: "Açaí Supremo na Tigela",
    description: "Nosso creme de açaí artesanal super denso batido na hora, montado na tigela com camadas simétricas de fatias de banana, morangos silvestres frescos, granola crocante de mel e fios de leite condensado.",
    price: "R$ 22,90",
    category: "acai",
    tag: "O Melhor da Cidade",
    ingredients: ["Açaí Premium", "Banana", "Morango", "Granola", "Leite Condensado"],
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "acai-copo-express",
    name: "Copo Açaí Express (500ml)",
    description: "O açaí perfeito para viagem ou drive-thru. Servido no copo de 500ml com leite em pó Ninho original em camadas e frutas picadas.",
    price: "R$ 18,90",
    category: "acai",
    ingredients: ["Açaí", "Frutas Picadas", "Granola", "Leite Ninho"],
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=600&auto=format&fit=crop"
  },

  // Category 4: Lanches
  {
    id: "file-salada-100-igual",
    name: "Filé Salada 100 Igual",
    description: "Nosso lanche mais famoso. Pão de hambúrguer gigante prensado na chapa com tiras macias de filé mignon grelhado, queijo prato duplo derretido, presunto cozido, alface picada, rodelas de tomate e nossa maionese verde caseira.",
    price: "R$ 29,90",
    category: "lanches",
    tag: "O Lendário",
    ingredients: ["Pão de Hambúrguer", "Filé Mignon", "Queijo Prato", "Presunto", "Salada", "Maionese Verde"],
    image: "https://images.unsplash.com/photo-1534790566855-4cb788d389ec?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "x-bolota-premium",
    name: "X-Bolota Premium",
    description: "Sanduíche clássico da gastronomia de Franca-SP. Hambúrguer artesanal suculento de 160g grelhado na chapa, bacon em tiras super crocantes, ovo frito, muçarela dupla derretida e maionese especial de alho.",
    price: "R$ 27,90",
    category: "lanches",
    tag: "Franca Clássico",
    ingredients: ["Pão de Lanche", "Blend 160g", "Bacon", "Ovo", "Muçarela", "Maionese de Alho"],
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "x-frango-especial",
    name: "X-Frango Especial",
    description: "Pão prensado recheado com peito de frango desfiado temperado na chapa com milho e requeijão cremoso, presunto, queijo muçarela duplo derretido e batata palha.",
    price: "R$ 24,90",
    category: "lanches",
    ingredients: ["Pão", "Frango Desfiado", "Catupiry", "Presunto", "Muçarela", "Batata Palha"],
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "misto-quente-prensado",
    name: "Misto Quente Prensado",
    description: "A opção clássica e rápida de lanche leve. Três fatias de queijo prato derretido com presunto cozido prensados até o pão ficar super dourado e crocante na manteiga.",
    price: "R$ 12,00",
    category: "lanches",
    ingredients: ["Pão de Forma", "Presunto Cozido", "Queijo Prato"],
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "lanche-natural-frango",
    name: "Lanche Natural de Frango",
    description: "Leve e saboroso, montado no pão de forma integral com creme de frango desfiado desnatado, cenoura ralada fina, rúcula fresca e milho.",
    price: "R$ 16,90",
    category: "lanches",
    ingredients: ["Pão Integral", "Frango Cremoso Light", "Cenoura", "Rúcula"],
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=600&auto=format&fit=crop"
  },

  // Category 5: Refeições
  {
    id: "almoco-executivo-contrafile",
    name: "Almoço Executivo de Contrafilé",
    description: "Grelhado suculento de contrafilé grelhado na chapa, servido com arroz branco soltinho, feijão carioca com tempero da casa, porção individual de batatas fritas crocantes e salada mix fresca.",
    price: "R$ 32,90",
    category: "refeicoes",
    tag: "Almoço do Dia",
    ingredients: ["Contrafilé", "Arroz", "Feijão", "Fritas", "Salada"],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "file-jk-classico",
    name: "Filé à JK (Clássico de Franca)",
    description: "O famoso filé mignon à JK recheado com queijo muçarela e presunto, empanado e frito até dourar. Acompanha arroz à grega (com legumes), batatas fritas crocantes e bananas à milanesa.",
    price: "R$ 49,90",
    category: "refeicoes",
    tag: "Especialidade da Casa",
    ingredients: ["Filé Mignon Recheado", "Arroz à Grega", "Fritas", "Banana Milanesa"],
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "omelete-recheado-chapa",
    name: "Omelete Recheado na Chapa",
    description: "Opção farta e leve. Omelete batido com três ovos frescos, queijo muçarela derretido, presunto em cubos, tomates picados e cheiro verde.",
    price: "R$ 19,90",
    category: "refeicoes",
    ingredients: ["Três Ovos", "Muçarela", "Presunto", "Tomate", "Cebolinha"],
    image: "https://images.unsplash.com/photo-1510629954389-c1e0da47d414?q=80&w=600&auto=format&fit=crop"
  },

  // Category 6: Porções
  {
    id: "porcao-tilapia-crocante",
    name: "Porção de Tilápia Crocante",
    description: "Nosso peixe mais pedido. Iscas de tilápia fresca empanadas artesanalmente em farinha de rosca crocante, fritas até ficarem douradas e sequinhas. Acompanha limão cravo fatiado e molho tártaro caseiro.",
    price: "R$ 44,95",
    category: "porcoes",
    tag: "Mais Pedida",
    ingredients: ["Filés de Tilápia", "Limão Cravo", "Molho Tártaro"],
    image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "batata-suprema-cheddar-bacon",
    name: "Batata Suprema com Cheddar e Bacon",
    description: "Batatas palito douradas cobertas com queijo cheddar cremoso derretido e pedacinhos super crocantes de bacon tostado.",
    price: "R$ 38,90",
    category: "porcoes",
    ingredients: ["Batatas fritas", "Cheddar derretido", "Bacon em cubos"],
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "calabresa-acebolada-chapa",
    name: "Calabresa Acebolada na Chapa",
    description: "Linguiça calabresa defumada fatiada e grelhada na chapa com bastante cebola em rodelas douradas na manteiga. Acompanha fatias de pão francês.",
    price: "R$ 29,90",
    category: "porcoes",
    ingredients: ["Linguiça Calabresa", "Cebola fatiada", "Manteiga", "Pão Francês"],
    image: "https://images.unsplash.com/photo-1534938665420-4193effeabd4?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "porcao-frango-crocante",
    name: "Porção de Frango Crocante",
    description: "Tiras suculentas de filé de peito de frango selecionadas, empanadas em uma crosta de farinha Panko e fritas na hora. Acompanha molho rosé clássico da casa.",
    price: "R$ 34,90",
    category: "porcoes",
    ingredients: ["Filé de Peito de Frango", "Farinha Panko", "Molho Rosé"],
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "porcao-bife-ancho-chapa",
    name: "Porção de Bife Ancho Grelhado",
    description: "Corte nobre portenho de bife ancho bovino premium, fatiado e grelhado na chapa de ferro quente com rodelas de cebola na manteiga. Acompanha fatias de pão francês e molho chimichurri fresco.",
    price: "R$ 52,90",
    category: "porcoes",
    tag: "Corte Nobre",
    ingredients: ["Bife Ancho Premium", "Cebola", "Manteiga", "Pão Francês", "Molho Chimichurri"],
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=600&auto=format&fit=crop"
  },

  // Category 7: Sobremesas
  {
    id: "salada-frutas-sorvete",
    name: "Salada de Frutas com Sorvete",
    description: "Blend refrescante de frutas da época picadas (mamão, banana, maçã, laranja e abacaxi) servido com uma bola generosa de sorvete de creme e calda de morango.",
    price: "R$ 14,90",
    category: "sobremesas",
    ingredients: ["Frutas Picadas", "Sorvete de Creme", "Calda de Morango"],
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "petit-gateau-100-igual",
    name: "Petit Gateau 100 Igual",
    description: "Bolinho quente de chocolate belga com recheio cremoso e escorrendo, servido com uma bola de sorvete de creme e fios de chocolate.",
    price: "R$ 18,90",
    category: "sobremesas",
    tag: "Especial da Noite",
    ingredients: ["Bolo de Chocolate Quente", "Sorvete de Creme", "Calda de Chocolate"],
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop"
  },

  // Category 8: Chopp & Bebidas
  {
    id: "chopp-antarctica-trincando",
    name: "Chopp Antarctica Trincando",
    description: "Chopp claro clássico servido na tulipa ultracongelada com aquele colarinho cremoso perfeito de 3 centímetros. Estupidamente gelado!",
    price: "R$ 9,90",
    category: "chopp",
    tag: "Trincando de Gelado",
    ingredients: ["Tulipa de Chopp Antarctica de 300ml trincando"],
    image: "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "refrigerante-lata",
    name: "Refrigerante Lata",
    description: "Coca-Cola, Guaraná Antarctica ou Sprite servidos em lata geladíssimos com copo de gelo e limão.",
    price: "R$ 5,50",
    category: "chopp",
    ingredients: ["Refrigerante em lata de 350ml"],
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=600&auto=format&fit=crop"
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: '2001',
    title: 'O Primeiro Copo',
    description: 'Fundada no coração de Franca-SP, a Casa de Sucos 100 Igual iniciou sua história com apenas uma portinha na Av. Presidente Vargas, oferecendo sucos espremidos da fruta na hora e o famoso açaí batido, conquistando a vizinhança rapidamente.',
  },
  {
    year: '2008',
    title: 'Lanches Artesanais de Chapa',
    description: 'Adicionamos nossa linha de lanches gigantes artesanais e a maionese verde secreta da casa. Os lanches viraram febre na cidade pela qualidade dos ingredientes e abundância de sabor.',
  },
  {
    year: '2016',
    title: 'A Segunda Unidade (Paulo VI)',
    description: 'Para atender a crescente demanda dos clientes e oferecer conforto para encontros em família, inauguramos nossa moderna segunda unidade com estacionamento fácil e espaço kids amplo na Av. Dr. Flávio Rocha.',
  },
  {
    year: 'Hoje',
    title: 'Tradição que se Renova',
    description: 'Com mais de 25 anos de tradição, duas lojas modernas completas, drive-thru pioneiro na Cidade Nova, e mais de 3.500 avaliações de clientes apaixonados.',
  }
];

export const UNITS: UnitInfo[] = [
  {
    id: "unidade-presidente-vargas",
    name: "Unidade Presidente Vargas",
    address: "Av. Presidente Vargas, 840 - Cidade Nova, Franca - SP, 14401-120",
    schedule: "Segunda a Domingo, das 09h00 às 00h00",
    whatsapp: "551637215494",
    mapsUrl: "https://maps.google.com/?q=Av.+Presidente+Vargas,+840+-+Cidade+Nova,+Franca+-+SP",
    hasDriveThru: true,
    hasKidsSpace: false,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop", // Real storefront
    accentColor: "from-orangeCitrus via-orangeGold to-darkCard"
  },
  {
    id: "unidade-paulo-vi",
    name: "Unidade Paulo VI",
    address: "Av. Dr. Flávio Rocha (Av. Paulo VI), 2050 - Vila Imperador, Franca - SP, 14405-600",
    schedule: "Segunda a Domingo, das 11h00 às 00h00",
    whatsapp: "5516992002002",
    mapsUrl: "https://maps.google.com/?q=Av.+Dr.+Flavio+Rocha,+2050+-+Vila+Imperador,+Franca+-+SP",
    hasDriveThru: false,
    hasKidsSpace: true,
    image: "https://images.unsplash.com/photo-1566908829550-e6551b00979b?q=80&w=800&auto=format&fit=crop", // Kids space / playground
    accentColor: "from-greenTropical via-orangeGold to-darkCard"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Dr. Marcos Pedrosa",
    role: "Cliente fiel desde 2002 (Unidade Centro/Vargas)",
    content: "Frequento a 100Igual desde o comecinho. O Suco 100 Igual deles com laranja, morango e hortelã é inigualável, insuperável! O drive-thru da Cidade Nova é extremamente prático quando estou na correria entre os plantões.",
    rating: 5
  },
  {
    id: "t2",
    name: "Aline & Família",
    role: "Moradora da Vila Imperador (Fã da Unidade Paulo VI)",
    content: "Domingo à tarde com as crianças é lei ir na Paulo VI! O espaço kids deles é excelente, muito amplo e seguro. E enquanto as crianças brincam, a gente aproveita as porções de chapa gigantescas de Ancho e aquele Chopp estupidamente gelado. Nota 10!",
    rating: 5
  },
  {
    id: "t3",
    name: "Tiago 'Bolota' Santos",
    role: "Atleta de Franca (Cliente do Madrugada)",
    content: "O X-Bolota de vocês com aquele hambúrguer suculento de 160g e a maionese verde caseira é o melhor pós-treino ou pós-jogo que existe em Franca! E o açaí supremo deles com banana e granola na tigela é o mais denso da cidade, não tem mistura de xarope artificial.",
    rating: 5
  }
];

export const HIGHLIGHT_ITEMS: MenuItem[] = [
  {
    id: "laranja-natural",
    name: "Laranja Natural",
    description: "Suco de laranja puro, rico em vitamina C.",
    price: "R$ 9,90",
    category: "sucos",
    ingredients: ["Laranja"],
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "detox-verde-destaque",
    name: "Detox Verde",
    description: "Couve, abacaxi, limão, maçã e hortelã.",
    price: "R$ 12,90",
    category: "sucos",
    ingredients: ["Couve", "Abacaxi", "Limão", "Maçã", "Hortelã"],
    image: "https://images.unsplash.com/photo-1610970881699-44a5587caaec?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "acai-especial-destaque",
    name: "Açaí Especial",
    description: "Açaí, banana, granola, leite em pó e mel.",
    price: "R$ 16,90",
    category: "acai",
    ingredients: ["Açaí", "Banana", "Granola", "Leite em Pó", "Mel"],
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "morango-com-leite-destaque",
    name: "Morango com Leite",
    description: "Morango batido com leite e um toque especial.",
    price: "R$ 12,90",
    category: "sucos",
    ingredients: ["Morango", "Leite"],
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "maracuja-destaque",
    name: "Maracujá",
    description: "Suco de maracujá natural, refrescante e delicioso.",
    price: "R$ 9,90",
    category: "sucos",
    ingredients: ["Maracujá"],
    image: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?q=80&w=600&auto=format&fit=crop"
  }
];

export interface NeighborhoodDelivery {
  name: string;
  fee: number;
}

export const FRANCA_NEIGHBORHOODS: NeighborhoodDelivery[] = [
  { name: 'Centro', fee: 4.50 },
  { name: 'Cidade Nova', fee: 5.00 },
  { name: 'Estação', fee: 6.00 },
  { name: 'Paulo VI / Dr. Flávio Rocha', fee: 5.50 },
  { name: 'Jardim Aeroporto', fee: 8.00 },
  { name: 'Jardim Paulistano', fee: 6.50 },
  { name: 'Jardim Leporace', fee: 9.00 },
  { name: 'Parque Universitário', fee: 8.50 },
  { name: 'Vila Imperador', fee: 5.50 },
  { name: 'Jardim Noêmia', fee: 7.00 },
  { name: 'Outro Bairro (Franca-SP)', fee: 7.50 }
];
