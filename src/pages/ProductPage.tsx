import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedTab, setSelectedTab] = useState('description');

  // Dados simulados do produto
  const product = {
    id: parseInt(id || '1'),
    name: 'Smartphone XYZ Pro 128GB',
    price: 120000,
    discount: 10,
    rating: 4.5,
    reviews: 120,
    stock: 15,
    description: 'O Smartphone XYZ Pro é a escolha perfeita para quem busca desempenho e qualidade. Com processador octa-core, 8GB de RAM e 128GB de armazenamento, este aparelho oferece uma experiência fluida para todas as suas necessidades diárias. A câmera tripla de 48MP captura fotos incríveis em qualquer condição de iluminação.',
    specifications: [
      { name: 'Tela', value: '6.5" AMOLED Full HD+' },
      { name: 'Processador', value: 'Octa-core 2.4GHz' },
      { name: 'Memória RAM', value: '8GB' },
      { name: 'Armazenamento', value: '128GB' },
      { name: 'Câmera Traseira', value: 'Tripla 48MP + 12MP + 5MP' },
      { name: 'Câmera Frontal', value: '32MP' },
      { name: 'Bateria', value: '4500mAh' },
      { name: 'Sistema Operacional', value: 'Android 13' }
    ],
    images: [
      '/images/smartphone.jpg',
      '/images/smartphone.jpg',
      '/images/smartphone.jpg',
      '/images/smartphone.jpg'
    ],
    colors: ['Preto', 'Azul', 'Prata'],
    seller: {
      name: 'Tech Angola',
      rating: 4.8,
      products: 156,
      joined: 'Janeiro 2023'
    },
    relatedProducts: [
      { id: 2, name: 'Fones de Ouvido Bluetooth', price: 25000, image: '/images/headphones.jpg' },
      { id: 3, name: 'Carregador Rápido 25W', price: 8000, image: '/images/smartphone.jpg' },
      { id: 4, name: 'Capa Protetora Premium', price: 5000, image: '/images/smartphone.jpg' }
    ]
  };

  // Calcular preço com desconto
  const discountedPrice = product.discount > 0 
    ? product.price - (product.price * product.discount / 100) 
    : product.price;

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= product.stock) {
      setQuantity(value);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const addToCart = () => {
    // Implementar lógica de adicionar ao carrinho
    console.log(`Adicionando ${quantity} unidades do produto ${product.id} ao carrinho`);
    // Aqui seria integrado com o contexto do carrinho
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Navegação estrutural (breadcrumb) */}
      <div className="text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-blue-600">Home</Link> &gt; 
        <Link to="/categorias/eletronicos" className="hover:text-blue-600"> Eletrônicos</Link> &gt; 
        <span className="text-gray-700"> {product.name}</span>
      </div>

      {/* Seção principal do produto */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Galeria de imagens */}
        <div>
          <div className="bg-gray-100 h-auto rounded-lg mb-4 p-4 flex items-center justify-center">
            {/* Imagem principal */}
            <div className="w-full h-64 bg-white flex items-center justify-center overflow-hidden">
              <img 
                src={product.images[selectedImage]} 
                alt={`${product.name} - Imagem ${selectedImage + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          {/* Miniaturas */}
          <div className="flex space-x-2">
            {product.images.map((image, index) => (
              <div 
                key={index}
                className={`w-16 h-16 bg-gray-100 cursor-pointer border-2 ${selectedImage === index ? 'border-blue-600' : 'border-transparent'} overflow-hidden`}
                onClick={() => setSelectedImage(index)}
              >
                <img 
                  src={image} 
                  alt={`Miniatura ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Informações do produto */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
          
          {/* Avaliações */}
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-xl">★</span>
              ))}
            </div>
            <span className="text-gray-600 ml-2">({product.reviews} avaliações)</span>
          </div>
          
          {/* Preço */}
          <div className="mb-6">
            {product.discount > 0 ? (
              <>
                <span className="text-gray-500 line-through text-xl">
                  {(product.price / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })}
                </span>
                <span className="text-3xl font-bold text-blue-600 ml-2">
                  {(discountedPrice / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })}
                </span>
                <span className="bg-blue-600 text-white px-2 py-1 rounded-lg ml-2 text-sm">
                  -{product.discount}%
                </span>
              </>
            ) : (
              <span className="text-3xl font-bold text-blue-600">
                {(product.price / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })}
              </span>
            )}
          </div>
          
          {/* Disponibilidade */}
          <div className="mb-6">
            <p className="text-gray-700">
              Disponibilidade: 
              <span className="text-green-600 font-medium ml-1">
                {product.stock > 0 ? `Em estoque (${product.stock} unidades)` : 'Fora de estoque'}
              </span>
            </p>
          </div>
          
          {/* Cores */}
          <div className="mb-6">
            <h3 className="text-gray-700 font-medium mb-2">Cor:</h3>
            <div className="flex space-x-2">
              {product.colors.map((color, index) => (
                <button 
                  key={index}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
          
          {/* Quantidade */}
          <div className="mb-6">
            <h3 className="text-gray-700 font-medium mb-2">Quantidade:</h3>
            <div className="flex">
              <button 
                onClick={decreaseQuantity}
                className="bg-gray-200 px-3 py-2 rounded-l-lg hover:bg-gray-300"
              >
                -
              </button>
              <input 
                type="number" 
                value={quantity}
                onChange={handleQuantityChange}
                className="w-16 text-center border-t border-b border-gray-300"
              />
              <button 
                onClick={increaseQuantity}
                className="bg-gray-200 px-3 py-2 rounded-r-lg hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>
          
          {/* Botões de ação */}
          <div className="flex space-x-4 mb-6">
            <button 
              onClick={addToCart}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 flex-1"
            >
              Adicionar ao Carrinho
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-4 py-3 rounded-lg font-semibold hover:bg-blue-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
          
          {/* Vendedor */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Vendido por:</h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">{product.seller.name}</p>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="text-yellow-400 mr-1">★</span>
                  <span>{product.seller.rating} | {product.seller.products} produtos</span>
                </div>
              </div>
              <Link 
                to={`/vendedor/${product.seller.name}`}
                className="text-blue-600 hover:text-blue-800"
              >
                Ver Loja
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Abas de informações */}
      <div className="mb-12">
        <div className="border-b border-gray-300">
          <div className="flex space-x-8">
            <button 
              className={`py-4 px-2 font-medium ${selectedTab === 'description' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              onClick={() => setSelectedTab('description')}
            >
              Descrição
            </button>
            <button 
              className={`py-4 px-2 font-medium ${selectedTab === 'specifications' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              onClick={() => setSelectedTab('specifications')}
            >
              Especificações
            </button>
            <button 
              className={`py-4 px-2 font-medium ${selectedTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              onClick={() => setSelectedTab('reviews')}
            >
              Avaliações ({product.reviews})
            </button>
          </div>
        </div>
        
        <div className="py-6">
          {selectedTab === 'description' && (
            <div className="text-gray-700 leading-relaxed">
              <p>{product.description}</p>
            </div>
          )}
          
          {selectedTab === 'specifications' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.specifications.map((spec, index) => (
                <div key={index} className="flex">
                  <span className="font-medium text-gray-700 w-40">{spec.name}:</span>
                  <span className="text-gray-600">{spec.value}</span>
                </div>
              ))}
            </div>
          )}
          
          {selectedTab === 'reviews' && (
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="flex text-yellow-400 text-3xl mr-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <div>
                  <p className="text-2xl font-bold">{product.rating} de 5</p>
                  <p className="text-gray-600">{product.reviews} avaliações</p>
                </div>
              </div>
              
              {/* Avaliações simuladas */}
              <div className="border-t border-gray-300 pt-6 space-y-6">
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                    <div>
                      <p className="font-medium">João Silva</p>
                      <div className="flex text-yellow-400 text-sm">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">Excelente produto! Chegou antes do prazo e veio em perfeitas condições. A bateria dura o dia todo como prometido.</p>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                    <div>
                      <p className="font-medium">Maria Santos</p>
                      <div className="flex text-yellow-400 text-sm">
                        {[...Array(4)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">Bom smartphone, rápido e com ótima câmera. A única coisa que poderia melhorar é o tempo de carregamento.</p>
                </div>
              </div>
              
              <Link 
                to={`/produto/${id}/avaliacoes`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Ver todas as avaliações
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Produtos relacionados */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Produtos Relacionados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {product.relatedProducts.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Link to={`/produto/${item.id}`}>
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">{item.name}</h3>
                  <p className="font-bold text-gray-800">
                    {(item.price / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
