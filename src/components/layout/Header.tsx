import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingCartIcon, HeartIcon, UserIcon, MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useCart } from '../../context/CartContext'
import { useAuth } from '../../context/AuthContext'
import { CATEGORIES } from '../../data'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  const { itemCount } = useCart()
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) navigate(`/pesquisa?q=${encodeURIComponent(query.trim())}`)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="container-custom py-3">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 text-2xl font-black text-blue-600 tracking-tight">
            Angola<span className="text-gray-900">xy</span>
          </Link>

          {/* Search */}
          <form onSubmit={handleSearch} className="flex flex-1 max-w-2xl mx-auto">
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Pesquisar produtos, marcas e categorias..."
              className="w-full px-4 py-2.5 border border-gray-300 rounded-l-xl focus:outline-none focus:border-blue-500 text-sm"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-r-xl transition-colors"
              aria-label="Pesquisar"
            >
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
          </form>

          {/* Actions */}
          <div className="flex items-center gap-1 md:gap-3 flex-shrink-0">
            <Link to="/favoritos" className="p-2 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-blue-600 transition-colors" aria-label="Favoritos">
              <HeartIcon className="h-6 w-6" />
            </Link>

            <Link to="/carrinho" className="relative p-2 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-blue-600 transition-colors" aria-label="Carrinho">
              <ShoppingCartIcon className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount > 9 ? '9+' : itemCount}
                </span>
              )}
            </Link>

            {user ? (
              <div className="relative group">
                <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors text-sm font-medium">
                  <UserIcon className="h-6 w-6" />
                  <span className="hidden md:inline">{user.name.split(' ')[0]}</span>
                </button>
                <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-150">
                  <Link to="/perfil" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    O Meu Perfil
                  </Link>
                  <Link to="/pedidos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Os Meus Pedidos
                  </Link>
                  <Link to="/favoritos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Favoritos
                  </Link>
                  {user.type === 'seller' && (
                    <Link to="/vender" className="block px-4 py-2 text-sm text-blue-600 font-medium hover:bg-blue-50">
                      Dashboard Vendedor
                    </Link>
                  )}
                  <hr className="my-1 border-gray-100" />
                  <button onClick={logout} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                    Terminar Sessão
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="hidden md:flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors">
                <UserIcon className="h-4 w-4" />
                Entrar
              </Link>
            )}

            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Category nav */}
      <nav className={`bg-gray-50 border-t border-gray-200 ${menuOpen ? 'block' : 'hidden md:block'}`}>
        <div className="container-custom">
          <ul className="flex flex-col md:flex-row md:gap-1 py-1">
            {CATEGORIES.map(cat => (
              <li key={cat.id}>
                <Link
                  to={`/categorias/${cat.slug}`}
                  className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{cat.icon}</span>
                  {cat.name}
                </Link>
              </li>
            ))}
            <li className="md:ml-auto">
              <Link
                to="/vender"
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                🏪 Vender no Angolaxy
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
