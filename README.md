# 🥤 Casa de Sucos 100 Igual — Premium Web App

Este repositório contém o código-fonte da aplicação oficial da **Casa de Sucos 100 Igual**, uma tradicional lanchonete e casa de sucos de alto padrão com mais de 24 anos de história em Franca-SP. 

O site foi projetado com uma **experiência digital ultra premium e imersiva**, combinando micro-animações, fundos cinematográficos em vídeo loop, transições de tela instantâneas sem flashes e um funil de vendas reativo de 4 passos com carrinho integrado à API do WhatsApp no padrão de comandas ERP.

---

## 🎨 Principais Funcionalidades

### 1. Roteador de Estados Nativo de Alta Performance (Multi-Páginas)
* Roteamento reativo por estados que elimina os tradicionais "flashes" de tela de roteadores pesados.
* Transições fluidas em todas as mudanças de páginas envelopadas em contêineres `<motion.div>` sob a coordenação do `<AnimatePresence mode="wait">` do Framer Motion.
* Subpáginas dedicadas completas:
  * **Cardápio Interativo (`MenuPage`):** Catálogo dinâmico com barra de busca instantânea, abas filtráveis e sacola integrada.
  * **Sobre Nós (`AboutPage`):** História institucional rica com linha do tempo interativa e detalhes de fornecedores orgânicos locais.
  * **Unidades (`StoresPage`):** Localizador físico com horários, links de rota no Google Maps e WhatsApp direto de cada filial de Franca.
  * **Nutrição (`BenefitsPage`):** Uma enciclopédia interativa detalhando as propriedades ativas e vitaminas de cada fruta fresca.
  * **Suporte (`ContactPage`):** Formulário de envio glassmorphic e central de dúvidas frequentes (FAQ) retrátil.

### 🔐 2. Central de Login e Perfis de Clientes
* **Persistência Local (`localStorage`):** Dados de perfil salvos de forma segura e imediata no navegador do cliente (Nome, WhatsApp, Forma de Pagamento e Endereço Completo).
* **Login por Telefone com Busca Automática:** O usuário digita o número de telefone e o sistema busca em uma base histórica local. Se já cadastrado, faz o preenchimento instantâneo. Se for novo, abre o formulário de cadastro de forma transparente.
* **Barra de Navegação Sincronizada:** Ao conectar, exibe uma pílula brilhante com a inicial e nome do cliente logado (`[R] Raiky`), além de botão para deslogar.

### 🍊 3. Mesclagem e Personalização de Sucos (Combinação de 2 Frutas)
* Ao adicionar qualquer suco, o cliente pode optar pela **Receita Clássica** ou por **Mesclar 2 Frutas** a partir de uma grade interativa de frutas frescas da estação (Laranja, Morango, Abacaxi, Limão, Acerola, Maracujá, Manga, Melancia, Caju e Uva).
* **Agrupamento Isolado na Sacola:** Blends diferentes do mesmo suco base são tratados como itens independentes na sacola, mantendo quantidades e observações separadas.

### 🏁 4. Funil de Vendas de 4 Passos no Carrinho (Padrão ERP)
O checkout deslizante guia o cliente através de quatro etapas obrigatórias e visuais:
1. **Passo 1 (Local):** Confirmação de qual unidade física de Franca-SP deve preparar o pedido.
2. **Passo 2 (Sacola):** Revisão de itens, quantidades, preços e blends de frutas.
3. **Passo 3 (Login):** Validação de login (Check verde de sucesso se conectado; banner explicativo que bloqueia o avanço e solicita identificação se desconectado).
4. **Passo 4 (Pagar):** Definição da logística (Receber em Casa com taxa expressa de motoboy ou Retirar na Loja grátis na filial selecionada), forma de pagamento e campo de troco para dinheiro.

### 📋 5. Mensagem de Comanda Automatizada para o WhatsApp
Ao finalizar, o site converte o carrinho de compras em uma comanda perfeitamente organizada por seções para a API de mensagem, permitindo que a cozinha, o caixa e o motoboy do estabelecimento organizem e despachem o pedido em segundos.

---

## 🛠️ Tecnologias Utilizadas

* **Core:** React 19 (Hooks reativos, Contextos e Estado Global)
* **Build System:** Vite (Compilação do bundle abaixo de 600ms)
* **Linguagem:** TypeScript (Tipagem estrita e robusta de produtos e usuários)
* **Estilização:** TailwindCSS (Design de vidro glassmorphic, grids premium e responsividade total)
* **Animações:** Framer Motion (Transições de páginas e carrosséis elásticos)
* **Ícones:** Lucide React (Ícones vetoriais leves e consistentes)

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Passo 1: Instalar dependências
Na raiz do diretório do projeto, execute:
```bash
npm install
```

### Passo 2: Executar em Modo de Desenvolvimento
Inicie o servidor local integrado do Vite:
```bash
npm run dev
```
O projeto abrirá por padrão no endereço `http://localhost:5173/`.

### Passo 3: Compilar para Produção (Build)
Gere os arquivos estáticos ultra compactados e otimizados para hospedagem em apenas milissegundos:
```bash
npm run build
```
O Vite criará a pasta `/dist` contendo o HTML, CSS e JS prontos para deploy.

---

## 📦 Estrutura de Diretórios Importantes
```text
casa-de-sucos-100-igual/
├── public/                 # Vídeos cinematográficos de hero e assets estáticos
├── src/
│   ├── assets/             # Imagens otimizadas e fachadas de lojas
│   ├── components/
│   │   ├── pages/          # Subpáginas (Menu, About, Stores, Benefits, Contact)
│   │   ├── ui/             # Modais (AuthModal) e elementos gráficos gerais
│   │   ├── Hero.tsx        # Hero dinâmico com loops de vídeo e selos sparkle
│   │   ├── Navbar.tsx      # Navbar persistente com perfil do usuário conectado
│   │   └── ...             # Seções da Home (Promo, Featured, Moments, Testimonials, Units)
│   ├── data/
│   │   └── mockData.ts     # Dados estruturados de produtos, lojas e depoimentos
│   ├── App.tsx             # Gerenciamento de estado de rotas, login e renderização principal
│   └── main.tsx            # Ponto de entrada da aplicação React
```
