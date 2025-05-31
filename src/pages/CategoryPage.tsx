import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  
  // Função para formatar o nome da categoria
  const formatCategoryName = (slug: string) => {
    if (!slug) return '';
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const categoryName = formatCategoryName(category || '');
  
  // Dados simulados para produtos da categoria
  const products = [
    {
      id: 1,
      name: 'Smartphone XYZ Pro',
      price: 120000,
      image: '/src/assets/products/smartphone.jpg',
      rating: 4.5,
      reviews: 120,
      discount: 10
    },
    {
      id: 2,
      name: 'Notebook Ultra Slim',
      price: 350000,
      image: '/src/assets/products/laptop.jpg',
      rating: 4.8,
      reviews: 85,
      discount: 5
    },
    {
      id: 3,
      name: 'Fones de Ouvido Bluetooth',
      price: 25000,
      image: '/src/assets/products/headphones.jpg',
      rating: 4.2,
      reviews: 230,
      discount: 15
    },
    {
      id: 4,
      name: 'Smartwatch Fitness',
      price: 45000,
      image: '/src/assets/products/smartwatch.jpg',
      rating: 4.0,
      reviews: 67,
      discount: 0
    },
    {
      id: 5,
      name: 'Câmera Digital 4K',
      price: 180000,
      image: '/src/assets/products/camera.jpg',
      rating: 4.7,
      reviews: 42,
      discount: 0
    },
    {
      id: 6,
      name: 'Tênis Esportivo Pro',
      price: 35000,
      image: '/src/assets/products/shoes.jpg',
      rating: 4.3,
      reviews: 56,
      discount: 0
    }
  ];

  // Filtros simulados
  const filters = {
    price: [
      { id: 'price-1', label: 'Até 10.000 AOA' },
      { id: 'price-2', label: '10.000 - 50.000 AOA' },
      { id: 'price-3', label: '50.000 - 100.000 AOA' },
      { id: 'price-4', label: 'Acima de 100.000 AOA' }
    ],
    rating: [
      { id: 'rating-5', label: '5 estrelas' },
      { id: 'rating-4', label: '4+ estrelas' },
      { id: 'rating-3', label: '3+ estrelas' }
    ],
    discount: [
      { id: 'discount-1', label: 'Em promoção' }
    ]
  };

  useEffect(() => {
    // Simular carregamento de produtos da categoria
    console.log(`Carregando produtos da categoria: ${category}`);
  }, [category]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Navegação estrutural (breadcrumb) */}
      <div className="text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-blue-600">Home</Link> &gt; 
        <Link to="/categorias" className="hover:text-blue-600"> Categorias</Link> &gt; 
        <span className="text-gray-700"> {categoryName}</span>
      </div>

      <h1 className="text-3xl font-bold mb-8">{categoryName}</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filtros (sidebar) */}
        <div className="lg:w-1/4">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Filtros</h2>
            
            {/* Filtro de preço */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Preço</h3>
              <div className="space-y-2">
                {filters.price.map(filter => (
                  <div key={filter.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={filter.id}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor={filter.id} className="ml-2 text-gray-700">
                      {filter.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Filtro de avaliação */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Avaliação</h3>
              <div className="space-y-2">
                {filters.rating.map(filter => (
                  <div key={filter.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={filter.id}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor={filter.id} className="ml-2 text-gray-700">
                      {filter.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Filtro de desconto */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Ofertas</h3>
              <div className="space-y-2">
                {filters.discount.map(filter => (
                  <div key={filter.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={filter.id}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor={filter.id} className="ml-2 text-gray-700">
                      {filter.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Aplicar Filtros
            </button>
          </div>
        </div>
        
        {/* Lista de produtos */}
        <div className="lg:w-3/4">
          {/* Controles de ordenação */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <span className="text-gray-600">Mostrando {products.length} produtos</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-600 mr-2">Ordenar por:</span>
              <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500">
                <option>Relevância</option>
                <option>Preço: Menor para Maior</option>
                <option>Preço: Maior para Menor</option>
                <option>Avaliações</option>
                <option>Mais Recentes</option>
              </select>
            </div>
          </div>
          
          {/* Grid de produtos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Link to={`/produto/${product.id}`}>
                  <div className="h-48 bg-gray-200 relative">
                    {product.discount > 0 && (
                      <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-lg">
                        -{product.discount}%
                      </div>
                    )}
                    {/* Placeholder para imagem do produto */}
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      Imagem do Produto
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                      <span className="text-gray-600 text-sm ml-2">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-gray-800">
                        {(product.price / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })}
                      </span>
                      <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          {/* Paginação */}
          <div className="mt-8 flex justify-center">
            <nav className="flex items-center">
              <button className="px-3 py-1 border border-gray-300 rounded-l-lg hover:bg-gray-100">
                Anterior
              </button>
              <button className="px-3 py-1 border-t border-b border-gray-300 bg-blue-600 text-white">
                1
              </button>
              <button className="px-3 py-1 border-t border-b border-gray-300 hover:bg-gray-100">
                2
              </button>
              <button className="px-3 py-1 border-t border-b border-gray-300 hover:bg-gray-100">
                3
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-r-lg hover:bg-gray-100">
                Próximo
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
