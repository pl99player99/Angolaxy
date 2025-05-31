import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MagnifyingGlassIcon, 
  ShoppingCartIcon, 
  UserIcon, 
  HeartIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'Eletrônicos', path: '/categorias/eletronicos' },
    { name: 'Moda', path: '/categorias/moda' },
    { name: 'Casa & Decoração', path: '/categorias/casa-decoracao' },
    { name: 'Saúde & Beleza', path: '/categorias/saude-beleza' },
    { name: 'Supermercado', path: '/categorias/supermercado' },
    { name: 'Esportes', path: '/categorias/esportes' }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de busca
    console.log('Pesquisando por:', searchQuery);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      {/* Topo do cabeçalho - Logo e Busca */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="flex items-center mb-4 md:mb-0">
            <Link to="/" className="text-3xl font-bold text-blue-600">
              Angolaxy
            </Link>
          </div>

          {/* Barra de busca */}
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                placeholder="O que você está procurando?"
                className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Ícones de ação */}
          <div className="flex items-center space-x-4">
            <Link to="/favoritos" className="text-gray-700 hover:text-blue-600">
              <HeartIcon className="h-6 w-6" />
            </Link>
            <Link to="/carrinho" className="text-gray-700 hover:text-blue-600 relative">
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-blue-600">
              <UserIcon className="h-6 w-6" />
            </Link>
            <button 
              className="md:hidden text-gray-700"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu de categorias */}
      <nav className={`bg-gray-50 border-t border-gray-300 ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
        <div className="container mx-auto px-4">
          <ul className="flex flex-col md:flex-row md:space-x-8 py-2">
            {categories.map((category, index) => (
              <li key={index}>
                <Link 
                  to={category.path} 
                  className="block py-2 text-gray-700 hover:text-blue-600"
                >
                  {category.name}
                </Link>
              </li>
            ))}
            <li>
              <Link 
                to="/vender" 
                className="block py-2 font-semibold text-blue-600 hover:text-blue-800"
              >
                Vender
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
