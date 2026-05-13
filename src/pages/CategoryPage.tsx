import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'
import { PRODUCTS, CATEGORIES } from '../data'
import ProductCard from '../components/common/ProductCard'

type SortKey = 'relevance' | 'price-asc' | 'price-desc' | 'rating' | 'newest'

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>()
  const [sort, setSort] = useState<SortKey>('relevance')
  const [maxPrice, setMaxPrice] = useState<number>(100000000)
  const [filtersOpen, setFiltersOpen] = useState(false)

  const cat = CATEGORIES.find(c => c.slug === category)
  let products = PRODUCTS.filter(p => p.categorySlug === category || !category)
  products = products.filter(p => p.price <= maxPrice)

  if (sort === 'price-asc')  products = [...products].sort((a, b) => a.price - b.price)
  if (sort === 'price-desc') products = [...products].sort((a, b) => b.price - a.price)
  if (sort === 'rating')     products = [...products].sort((a, b) => b.rating - a.rating)

  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-10">
        <div className="container-custom">
          <nav className="text-sm text-blue-200 mb-2 flex gap-1.5">
            <Link to="/" className="hover:text-white">Início</Link>
            <span>›</span>
            <span>{cat?.name || 'Categorias'}</span>
          </nav>
          <h1 className="text-3xl font-black mb-1">{cat?.name || 'Todos os Produtos'}</h1>
          <p className="text-blue-200">{products.length} produtos disponíveis</p>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className={`lg:w-56 flex-shrink-0 ${filtersOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-2xl border border-gray-100 p-5 sticky top-20 space-y-6">
              <h3 className="font-bold text-gray-900">Filtros</h3>

              {/* Categories */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Categoria</p>
                <ul className="space-y-1">
                  <li>
                    <Link to="/categorias/electronica" className={`block px-2 py-1.5 rounded-lg text-sm ${category === 'electronica' ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}>
                      Todos os produtos
                    </Link>
                  </li>
                  {CATEGORIES.map(c => (
                    <li key={c.id}>
                      <Link to={`/categorias/${c.slug}`}
                        className={`block px-2 py-1.5 rounded-lg text-sm ${category === c.slug ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}>
                        {c.icon} {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price range */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Preço máximo</p>
                <input
                  type="range"
                  min={0}
                  max={100000000}
                  step={500000}
                  value={maxPrice}
                  onChange={e => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-blue-600"
                />
                <p className="text-sm text-gray-600 mt-1 font-medium">
                  Até {(maxPrice / 100).toLocaleString('pt-AO')} Kz
                </p>
              </div>
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setFiltersOpen(!filtersOpen)}
                  className="lg:hidden flex items-center gap-2 text-sm font-medium text-gray-600 border border-gray-200 px-3 py-2 rounded-xl hover:bg-gray-50"
                >
                  <AdjustmentsHorizontalIcon className="h-4 w-4" />
                  Filtros
                </button>
                <p className="text-sm text-gray-500"><strong className="text-gray-900">{products.length}</strong> produtos</p>
              </div>
              <select
                value={sort}
                onChange={e => setSort(e.target.value as SortKey)}
                className="text-sm border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:border-blue-500 bg-white"
              >
                <option value="relevance">Relevância</option>
                <option value="price-asc">Preço: Menor para Maior</option>
                <option value="price-desc">Preço: Maior para Menor</option>
                <option value="rating">Melhor Avaliados</option>
              </select>
            </div>

            {products.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {products.map(p => <ProductCard key={p.id} product={p} />)}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-lg font-bold text-gray-700 mb-2">Nenhum produto encontrado</h3>
                <p className="text-gray-400 text-sm">Tente ajustar os filtros</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryPage
