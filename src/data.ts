// ─── DATA LAYER ────────────────────────────────────────────────────────────────
// Replace these arrays with real API calls when you connect a backend.

export interface Product {
  id: number
  name: string
  slug: string
  price: number        // em centavos (Kz * 100)
  originalPrice?: number
  discount: number     // percentage
  rating: number
  reviews: number
  stock: number
  sold: number
  category: string
  categorySlug: string
  image: string
  images: string[]
  description: string
  specifications: { name: string; value: string }[]
  colors?: string[]
  seller: {
    id: number
    name: string
    rating: number
    products: number
    joinedDate: string
    verified: boolean
  }
}

export interface Category {
  id: number
  name: string
  slug: string
  image: string
  count: number
  icon: string
}

// ─── FORMAT HELPERS ────────────────────────────────────────────────────────────
export const formatKz = (cents: number): string => {
  const kz = cents / 100
  return new Intl.NumberFormat('pt-AO', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(kz) + ' Kz'
}

export const discountedPrice = (price: number, discount: number): number =>
  discount > 0 ? Math.round(price - (price * discount) / 100) : price

// ─── CATEGORIES ────────────────────────────────────────────────────────────────
export const CATEGORIES: Category[] = [
  { id: 1, name: 'Electrónica',      slug: 'electronica',       image: '/images/electronics.jpg', count: 245, icon: '💻' },
  { id: 2, name: 'Moda',             slug: 'moda',              image: '/images/fashion.jpg',     count: 312, icon: '👗' },
  { id: 3, name: 'Casa & Decoração', slug: 'casa-decoracao',    image: '/images/home.jpg',        count: 189, icon: '🏠' },
  { id: 4, name: 'Saúde & Beleza',   slug: 'saude-beleza',      image: '/images/beauty.jpg',      count: 156, icon: '💆' },
  { id: 5, name: 'Supermercado',     slug: 'supermercado',      image: '/images/grocery.jpg',     count: 423, icon: '🛒' },
  { id: 6, name: 'Desporto',         slug: 'desporto',          image: '/images/sports.jpg',      count: 98,  icon: '⚽' },
]

// ─── PRODUCTS ──────────────────────────────────────────────────────────────────
export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Smartphone XYZ Pro 128GB',
    slug: 'smartphone-xyz-pro-128gb',
    price: 12000000,
    originalPrice: 14000000,
    discount: 14,
    rating: 4.5,
    reviews: 120,
    stock: 15,
    sold: 340,
    category: 'Electrónica',
    categorySlug: 'electronica',
    image: '/images/smartphone.jpg',
    images: ['/images/smartphone.jpg', '/images/smartphone.jpg', '/images/smartphone.jpg'],
    description: 'O Smartphone XYZ Pro é a escolha perfeita para quem busca desempenho e qualidade. Com processador octa-core, 8GB de RAM e 128GB de armazenamento, este aparelho oferece uma experiência fluida para todas as suas necessidades diárias.',
    specifications: [
      { name: 'Ecrã', value: '6.5" AMOLED Full HD+' },
      { name: 'Processador', value: 'Octa-core 2.4GHz' },
      { name: 'RAM', value: '8GB' },
      { name: 'Armazenamento', value: '128GB' },
      { name: 'Câmera Traseira', value: '48MP + 12MP + 5MP' },
      { name: 'Câmera Frontal', value: '32MP' },
      { name: 'Bateria', value: '4500mAh' },
      { name: 'SO', value: 'Android 14' },
    ],
    colors: ['Preto', 'Azul', 'Prata'],
    seller: { id: 1, name: 'Tech Angola', rating: 4.8, products: 156, joinedDate: 'Jan 2023', verified: true },
  },
  {
    id: 2,
    name: 'Notebook Ultra Slim 15"',
    slug: 'notebook-ultra-slim-15',
    price: 35000000,
    originalPrice: 38000000,
    discount: 8,
    rating: 4.8,
    reviews: 85,
    stock: 6,
    sold: 210,
    category: 'Electrónica',
    categorySlug: 'electronica',
    image: '/images/laptop.jpg',
    images: ['/images/laptop.jpg'],
    description: 'Notebook ultra-fino com Intel Core i7 de 12ª geração, 16GB RAM e SSD de 512GB. Perfeito para profissionais e estudantes exigentes.',
    specifications: [
      { name: 'Processador', value: 'Intel Core i7-12ª Gen' },
      { name: 'RAM', value: '16GB DDR5' },
      { name: 'Armazenamento', value: 'SSD 512GB NVMe' },
      { name: 'Ecrã', value: '15" IPS FHD 144Hz' },
      { name: 'GPU', value: 'NVIDIA RTX 3050' },
      { name: 'Bateria', value: '72Wh — até 12h' },
    ],
    colors: ['Cinzento Espacial', 'Prata'],
    seller: { id: 1, name: 'Tech Angola', rating: 4.8, products: 156, joinedDate: 'Jan 2023', verified: true },
  },
  {
    id: 3,
    name: 'Fones Bluetooth Premium',
    slug: 'fones-bluetooth-premium',
    price: 2500000,
    discount: 15,
    originalPrice: 3000000,
    rating: 4.2,
    reviews: 230,
    stock: 50,
    sold: 892,
    category: 'Electrónica',
    categorySlug: 'electronica',
    image: '/images/headphones.jpg',
    images: ['/images/headphones.jpg'],
    description: 'Fones de ouvido sem fio com cancelamento activo de ruído, autonomia de 30 horas e conexão multipoint para dois dispositivos simultâneos.',
    specifications: [
      { name: 'Conexão', value: 'Bluetooth 5.3' },
      { name: 'Autonomia', value: 'Até 30 horas' },
      { name: 'ANC', value: 'Cancelamento activo de ruído' },
      { name: 'Driver', value: '40mm' },
    ],
    colors: ['Preto', 'Branco', 'Azul Meia-Noite'],
    seller: { id: 2, name: 'SoundShop AO', rating: 4.6, products: 43, joinedDate: 'Mar 2023', verified: true },
  },
  {
    id: 4,
    name: 'Smartwatch Fitness Pro',
    slug: 'smartwatch-fitness-pro',
    price: 4500000,
    discount: 0,
    rating: 4.0,
    reviews: 67,
    stock: 22,
    sold: 178,
    category: 'Electrónica',
    categorySlug: 'electronica',
    image: '/images/smartwatch.jpg',
    images: ['/images/smartwatch.jpg'],
    description: 'Relógio inteligente com monitor cardíaco, GPS integrado, resistência à água 5ATM e 14 dias de autonomia. Compatível com Android e iOS.',
    specifications: [
      { name: 'Ecrã', value: '1.4" AMOLED' },
      { name: 'GPS', value: 'Integrado' },
      { name: 'Resistência', value: '5ATM (50m)' },
      { name: 'Autonomia', value: 'Até 14 dias' },
    ],
    colors: ['Preto', 'Rosa', 'Verde'],
    seller: { id: 3, name: 'WearAO', rating: 4.4, products: 28, joinedDate: 'Jun 2023', verified: false },
  },
  {
    id: 5,
    name: 'Câmera Digital 4K',
    slug: 'camera-digital-4k',
    price: 18000000,
    discount: 0,
    rating: 4.7,
    reviews: 42,
    stock: 4,
    sold: 56,
    category: 'Electrónica',
    categorySlug: 'electronica',
    image: '/images/camera.jpg',
    images: ['/images/camera.jpg'],
    description: 'Câmera mirrorless com sensor full-frame de 33MP, vídeo 4K60fps, estabilização óptica de 5 eixos e focagem automática por IA.',
    specifications: [
      { name: 'Sensor', value: 'Full-frame 33MP' },
      { name: 'Vídeo', value: '4K 60fps' },
      { name: 'ISO', value: '100–51200' },
      { name: 'Estabilização', value: 'OIS 5 eixos' },
    ],
    seller: { id: 1, name: 'Tech Angola', rating: 4.8, products: 156, joinedDate: 'Jan 2023', verified: true },
  },
  {
    id: 6,
    name: 'Ténis Desportivo Pro Runner',
    slug: 'tenis-desportivo-pro-runner',
    price: 3500000,
    discount: 0,
    rating: 4.3,
    reviews: 56,
    stock: 80,
    sold: 312,
    category: 'Desporto',
    categorySlug: 'desporto',
    image: '/images/shoes.jpg',
    images: ['/images/shoes.jpg'],
    description: 'Ténis de corrida com sola de amortecimento reactivo, cabedal em malha respirável e palmilha removível ortopédica. Ideal para corredores urbanos.',
    specifications: [
      { name: 'Material', value: 'Malha respirável + TPU' },
      { name: 'Sola', value: 'Borracha de carbono' },
      { name: 'Amortecimento', value: 'React Foam' },
      { name: 'Peso', value: '280g (tam. 42)' },
    ],
    colors: ['Preto/Branco', 'Azul/Laranja', 'Cinzento/Verde'],
    seller: { id: 4, name: 'SportAO', rating: 4.5, products: 87, joinedDate: 'Abr 2023', verified: true },
  },
  {
    id: 7,
    name: 'Mochila Impermeável 30L',
    slug: 'mochila-impermeavel-30l',
    price: 1800000,
    originalPrice: 2200000,
    discount: 18,
    rating: 4.6,
    reviews: 98,
    stock: 35,
    sold: 445,
    category: 'Desporto',
    categorySlug: 'desporto',
    image: '/images/backpack.jpg',
    images: ['/images/backpack.jpg'],
    description: 'Mochila de 30L com revestimento impermeável, compartimento para laptop até 17", porta USB externa e ergonomia de suporte lombar.',
    specifications: [
      { name: 'Capacidade', value: '30 litros' },
      { name: 'Material', value: 'Nylon 900D impermeável' },
      { name: 'Laptop', value: 'Até 17"' },
      { name: 'Peso', value: '1.2kg' },
    ],
    colors: ['Preto', 'Cinzento', 'Azul Marinho'],
    seller: { id: 4, name: 'SportAO', rating: 4.5, products: 87, joinedDate: 'Abr 2023', verified: true },
  },
  {
    id: 8,
    name: 'Cafeteira Automática Delux',
    slug: 'cafeteira-automatica-delux',
    price: 6500000,
    originalPrice: 7500000,
    discount: 13,
    rating: 4.4,
    reviews: 73,
    stock: 12,
    sold: 167,
    category: 'Casa & Decoração',
    categorySlug: 'casa-decoracao',
    image: '/images/coffeemaker.jpg',
    images: ['/images/coffeemaker.jpg'],
    description: 'Cafeteira automática com moedor integrado, sistema de espumador de leite, ecrã táctil e 15 programas personalizáveis. Capacidade para 12 chávenas.',
    specifications: [
      { name: 'Capacidade', value: '1.8 litros' },
      { name: 'Pressão', value: '15 bar' },
      { name: 'Moedor', value: 'Integrado de cerâmica' },
      { name: 'Programas', value: '15 modos' },
    ],
    seller: { id: 5, name: 'Casa & Lar AO', rating: 4.3, products: 64, joinedDate: 'Fev 2023', verified: true },
  },
]

// ─── REVIEWS ───────────────────────────────────────────────────────────────────
export const REVIEWS: Record<number, { user: string; rating: number; date: string; comment: string }[]> = {
  1: [
    { user: 'João Silva', rating: 5, date: '10/05/2026', comment: 'Excelente produto! Chegou antes do prazo e em perfeitas condições. A bateria dura o dia todo.' },
    { user: 'Maria Santos', rating: 4, date: '08/05/2026', comment: 'Bom smartphone, rápido e com ótima câmera. Poderia melhorar o tempo de carregamento.' },
    { user: 'Carlos Pinto', rating: 5, date: '05/05/2026', comment: 'Recomendo a 100%. Comprei para a minha esposa e ela adorou. Entrega rápida.' },
  ],
}

// ─── ANGOLA PROVINCES ──────────────────────────────────────────────────────────
export const ANGOLA_PROVINCES = [
  'Luanda', 'Benguela', 'Huambo', 'Bié', 'Malanje', 'Huíla',
  'Cabinda', 'Cunene', 'Namibe', 'Kwanza Sul', 'Kwanza Norte',
  'Moxico', 'Cuando Cubango', 'Lunda Norte', 'Lunda Sul',
  'Uíge', 'Zaire', 'Bengo',
]

export const PAYMENT_METHODS = [
  { id: 'multicaixa', name: 'Multicaixa Express', icon: '💳', description: 'Pagamento instantâneo via referência Multicaixa' },
  { id: 'transfer', name: 'Transferência Bancária', icon: '🏦', description: 'BFA, BAI, BIC, Millennium ou BNI' },
  { id: 'cash', name: 'Pagamento na Entrega', icon: '💵', description: 'Pague em dinheiro quando receber' },
]

export const DELIVERY_OPTIONS = [
  { id: 'standard', name: 'Entrega Padrão',  description: '3–5 dias úteis', price: 250000 },
  { id: 'express',  name: 'Entrega Expresso', description: '1–2 dias úteis', price: 500000 },
  { id: 'sameday',  name: 'Entrega no Mesmo Dia', description: 'Só Luanda — encomendas até 12h', price: 850000 },
]
