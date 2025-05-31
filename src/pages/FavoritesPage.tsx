import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const FavoritesPage = () => {
  const { user } = useAuth();
  
  // Dados simulados para lista de favoritos
  const favorites = [
    {
      id: 1,
      name: 'Smartphone XYZ Pro',
      price: 120000,
      image: '/src/assets/products/smartphone.jpg',
      rating: 4.5,
      reviews: 120,
      inStock: true
    },
    {
      id: 2,
      name: 'Notebook Ultra Slim',
      price: 350000,
      image: '/src/assets/products/laptop.jpg',
      rating: 4.8,
      reviews: 85,
      inStock: true
    },
    {
      id: 3,
      name: 'Fones de Ouvido Bluetooth',
      price: 25000,
      image: '/src/assets/products/headphones.jpg',
      rating: 4.2,
      reviews: 230,
      inStock: false
    }
  ];

  // Verificar se o usuário está autenticado
  if (!user) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Você precisa estar logado para acessar seus favoritos</h2>
          <Link
            to="/login"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Fazer Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Meus Favoritos</h1>

      {favorites.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-gray-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Sua lista de favoritos está vazia</h2>
          <p className="text-gray-600 mb-8">Explore nossos produtos e adicione itens aos seus favoritos</p>
          <Link 
            to="/" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Explorar Produtos
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map(product => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <Link to={`/produto/${product.id}`}>
                  <div className="h-64 bg-gray-200">
                    {/* Placeholder para imagem do produto */}
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      Imagem do Produto
                    </div>
                  </div>
                </Link>
                <button 
                  className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-sm hover:bg-gray-100"
                  aria-label="Remover dos favoritos"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <Link to={`/produto/${product.id}`}>
                  <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
                </Link>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm ml-2">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-800">
                    {(product.price / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })}
                  </span>
                  {product.inStock ? (
                    <button className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700">
                      Adicionar
                    </button>
                  ) : (
                    <span className="text-red-600 text-sm font-medium">Indisponível</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
