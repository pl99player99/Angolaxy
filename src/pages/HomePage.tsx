import { Link } from 'react-router-dom';

const HomePage = () => {
  // Dados simulados para categorias
  const categories = [
    { id: 1, name: 'Eletrônicos', image: '/images/electronics.jpg', path: '/categorias/eletronicos' },
    { id: 2, name: 'Moda', image: '/images/fashion.jpg', path: '/categorias/moda' },
    { id: 3, name: 'Casa & Decoração', image: '/images/home.jpg', path: '/categorias/casa-decoracao' },
    { id: 4, name: 'Saúde & Beleza', image: '/images/beauty.jpg', path: '/categorias/saude-beleza' },
    { id: 5, name: 'Supermercado', image: '/images/grocery.jpg', path: '/categorias/supermercado' },
    { id: 6, name: 'Esportes', image: '/images/sports.jpg', path: '/categorias/esportes' }
  ];

  // Dados simulados para produtos em destaque
  const featuredProducts = [
    {
      id: 1,
      name: 'Smartphone XYZ Pro',
      price: 120000,
      image: '/images/smartphone.jpg',
      rating: 4.5,
      reviews: 120,
      discount: 10
    },
    {
      id: 2,
      name: 'Notebook Ultra Slim',
      price: 350000,
      image: '/images/laptop.jpg',
      rating: 4.8,
      reviews: 85,
      discount: 5
    },
    {
      id: 3,
      name: 'Fones de Ouvido Bluetooth',
      price: 25000,
      image: '/images/headphones.jpg',
      rating: 4.2,
      reviews: 230,
      discount: 15
    },
    {
      id: 4,
      name: 'Smartwatch Fitness',
      price: 45000,
      image: '/images/smartwatch.jpg',
      rating: 4.0,
      reviews: 67,
      discount: 0
    }
  ];

  // Dados simulados para produtos recentes
  const newProducts = [
    {
      id: 5,
      name: 'Câmera Digital 4K',
      price: 180000,
      image: '/images/camera.jpg',
      rating: 4.7,
      reviews: 42,
      discount: 0
    },
    {
      id: 6,
      name: 'Tênis Esportivo Pro',
      price: 35000,
      image: '/images/shoes.jpg',
      rating: 4.3,
      reviews: 56,
      discount: 0
    },
    {
      id: 7,
      name: 'Mochila Impermeável',
      price: 18000,
      image: '/images/backpack.jpg',
      rating: 4.6,
      reviews: 98,
      discount: 8
    },
    {
      id: 8,
      name: 'Cafeteira Automática',
      price: 65000,
      image: '/images/coffeemaker.jpg',
      rating: 4.4,
      reviews: 73,
      discount: 12
    }
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:mr-12 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Bem-vindo ao Angolaxy
              </h1>
              <p className="text-xl mb-6">
                O seu marketplace angolano para compra e venda online com segurança e confiança.
              </p>
              <div className="flex space-x-4">
                <Link
                  to="/categorias"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Explorar
                </Link>
                <Link
                  to="/vender"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Vender
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/hero-image.jpg"
                alt="Angolaxy Marketplace"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Categorias Populares</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link key={category.id} to={category.path} className="block">
                <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                    <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-semibold text-gray-800">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Produtos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Link to={`/produto/${product.id}`}>
                  <div className="h-64 bg-gray-200 relative">
                    {product.discount > 0 && (
                      <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-lg">
                        -{product.discount}%
                      </div>
                    )}
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
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
          <div className="text-center mt-8">
            <Link
              to="/produtos"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Ver Mais Produtos
            </Link>
          </div>
        </div>
      </section>

      {/* Banner Promocional */}
      <section className="py-8 bg-blue-100">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Venda seus produtos no Angolaxy</h2>
                <p className="mb-4">Alcance milhares de clientes em toda Angola</p>
              </div>
              <Link
                to="/vender"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Começar a Vender
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos Recentes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Produtos Recentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Link to={`/produto/${product.id}`}>
                  <div className="h-64 bg-gray-200 relative">
                    {product.discount > 0 && (
                      <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-lg">
                        -{product.discount}%
                      </div>
                    )}
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
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
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Fique por dentro das novidades</h2>
            <p className="text-gray-600 mb-6">
              Inscreva-se para receber ofertas exclusivas e novidades do Angolaxy
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Seu endereço de e-mail"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
