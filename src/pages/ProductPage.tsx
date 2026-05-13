import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ShoppingCartIcon, HeartIcon, StarIcon as StarOutline, CheckBadgeIcon, TruckIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarSolid } from '@heroicons/react/24/solid'
import { PRODUCTS, REVIEWS, formatKz, discountedPrice } from '../data'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/common/ProductCard'

const Stars = ({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) => {
  const h = size === 'lg' ? 'h-6 w-6' : size === 'md' ? 'h-5 w-5' : 'h-4 w-4'
  return (
    <div className="flex items-center gap-0.5">
      {[1,2,3,4,5].map(i =>
        i <= Math.round(rating)
          ? <StarSolid key={i} className={`${h} text-amber-400`} />
          : <StarOutline key={i} className={`${h} text-gray-300`} />
      )}
    </div>
  )
}

type Tab = 'description' | 'specifications' | 'reviews'

const ProductPage = () => {
  const { id } = useParams<{ id: string }>()
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)
  const [selectedImg, setSelectedImg] = useState(0)
  const [tab, setTab] = useState<Tab>('description')
  const [addedToCart, setAddedToCart] = useState(false)
  const [selectedColor, setSelectedColor] = useState(0)

  const product = PRODUCTS.find(p => p.id === Number(id))
  const reviews = REVIEWS[Number(id)] || []
  const related = PRODUCTS.filter(p => p.categorySlug === product?.categorySlug && p.id !== product?.id).slice(0, 3)

  if (!product) {
    return (
      <div className="container-custom py-24 text-center">
        <div className="text-6xl mb-4">😕</div>
        <h1 className="text-2xl font-bold mb-2">Produto não encontrado</h1>
        <p className="text-gray-500 mb-6">O produto que procura não existe ou foi removido.</p>
        <Link to="/" className="btn-primary">Voltar ao início</Link>
      </div>
    )
  }

  const finalPrice = discountedPrice(product.price, product.discount)

  const handleAddToCart = () => {
    addItem({ id: product.id, name: product.name, price: product.price, image: product.image, discount: product.discount })
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container-custom py-3 text-sm text-gray-500 flex items-center gap-1.5">
          <Link to="/" className="hover:text-blue-600">Início</Link>
          <span>›</span>
          <Link to={`/categorias/${product.categorySlug}`} className="hover:text-blue-600">{product.category}</Link>
          <span>›</span>
          <span className="text-gray-700 font-medium line-clamp-1">{product.name}</span>
        </div>
      </div>

      {/* Main */}
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Gallery */}
          <div>
            <div className="bg-gray-100 rounded-2xl overflow-hidden mb-3 aspect-square">
              <img src={product.images[selectedImg]} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImg(i)}
                  className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-colors ${selectedImg === i ? 'border-blue-600' : 'border-transparent hover:border-gray-300'}`}
                >
                  <img src={img} alt={`Vista ${i+1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            {/* Seller */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm text-gray-500">Vendido por</span>
              <Link to={`/vendedor/${product.seller.id}`} className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                {product.seller.name}
                {product.seller.verified && <CheckBadgeIcon className="h-4 w-4 text-blue-500" />}
              </Link>
            </div>

            <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 leading-tight">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-4">
              <Stars rating={product.rating} size="md" />
              <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
              <span className="text-sm text-gray-400">({product.reviews} avaliações)</span>
              <span className="text-sm text-gray-400">·</span>
              <span className="text-sm text-gray-400">{product.sold} vendidos</span>
            </div>

            {/* Price */}
            <div className="bg-blue-50 rounded-2xl p-4 mb-5">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-black text-gray-900">{formatKz(finalPrice)}</span>
                {product.discount > 0 && product.originalPrice && (
                  <>
                    <span className="text-lg text-gray-400 line-through">{formatKz(product.originalPrice)}</span>
                    <span className="badge badge-red">-{product.discount}%</span>
                  </>
                )}
              </div>
              {product.discount > 0 && product.originalPrice && (
                <p className="text-green-600 text-sm font-semibold mt-1">
                  Poupa {formatKz(product.originalPrice - finalPrice)}!
                </p>
              )}
            </div>

            {/* Stock */}
            <div className="flex items-center gap-2 mb-4 text-sm">
              {product.stock > 0 ? (
                <span className={`font-semibold ${product.stock <= 5 ? 'text-orange-500' : 'text-green-600'}`}>
                  {product.stock <= 5 ? `⚠️ Apenas ${product.stock} em stock` : '✅ Em stock'}
                </span>
              ) : (
                <span className="text-red-500 font-semibold">❌ Esgotado</span>
              )}
            </div>

            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">Cor: <span className="text-blue-600">{product.colors[selectedColor]}</span></p>
                <div className="flex gap-2">
                  {product.colors.map((color, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedColor(i)}
                      className={`px-3 py-1.5 rounded-xl text-sm font-medium border-2 transition-all ${
                        selectedColor === i ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-200 hover:border-gray-400 text-gray-700'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-5">
              <p className="text-sm font-semibold text-gray-700 mb-2">Quantidade:</p>
              <div className="flex items-center gap-2">
                <button onClick={() => setQty(q => Math.max(1, q-1))}
                  className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 font-bold text-lg transition-colors flex items-center justify-center">−</button>
                <span className="w-12 text-center font-bold text-lg">{qty}</span>
                <button onClick={() => setQty(q => Math.min(product.stock, q+1))}
                  className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 font-bold text-lg transition-colors flex items-center justify-center">+</button>
                <span className="text-xs text-gray-400 ml-2">({product.stock} disponíveis)</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white transition-all ${
                  addedToCart ? 'bg-green-500' : 'bg-blue-600 hover:bg-blue-700'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <ShoppingCartIcon className="h-5 w-5" />
                {addedToCart ? 'Adicionado! ✓' : 'Adicionar ao Carrinho'}
              </button>
              <button className="p-3 border-2 border-gray-200 rounded-xl hover:border-red-300 hover:bg-red-50 hover:text-red-500 transition-all" aria-label="Favorito">
                <HeartIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Perks */}
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center gap-2.5 text-gray-600">
                <TruckIcon className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <span>Entrega disponível em todo o território angolano</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-600">
                <ShieldCheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>Compra 100% segura — Garantia de 7 dias</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-10">
          <div className="flex border-b border-gray-200 gap-6">
            {(['description', 'specifications', 'reviews'] as Tab[]).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`pb-3 text-sm font-semibold transition-colors border-b-2 ${
                  tab === t ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {t === 'description' ? 'Descrição' : t === 'specifications' ? 'Especificações' : `Avaliações (${product.reviews})`}
              </button>
            ))}
          </div>

          <div className="py-6">
            {tab === 'description' && (
              <p className="text-gray-700 leading-relaxed max-w-2xl">{product.description}</p>
            )}
            {tab === 'specifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl">
                {product.specifications.map(spec => (
                  <div key={spec.name} className="flex gap-3 p-3 bg-gray-50 rounded-xl">
                    <span className="text-sm font-semibold text-gray-600 w-36 flex-shrink-0">{spec.name}:</span>
                    <span className="text-sm text-gray-800">{spec.value}</span>
                  </div>
                ))}
              </div>
            )}
            {tab === 'reviews' && (
              <div className="max-w-2xl">
                <div className="flex items-center gap-6 mb-6 p-4 bg-gray-50 rounded-2xl">
                  <div className="text-center">
                    <p className="text-5xl font-black text-gray-900">{product.rating}</p>
                    <Stars rating={product.rating} size="md" />
                    <p className="text-sm text-gray-500 mt-1">{product.reviews} avaliações</p>
                  </div>
                </div>
                {reviews.length > 0 ? (
                  <div className="space-y-4">
                    {reviews.map((r, i) => (
                      <div key={i} className="p-4 bg-white border border-gray-100 rounded-2xl">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600 text-sm">
                              {r.user[0]}
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-800">{r.user}</p>
                              <Stars rating={r.rating} />
                            </div>
                          </div>
                          <span className="text-xs text-gray-400">{r.date}</span>
                        </div>
                        <p className="text-sm text-gray-700">{r.comment}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-400 text-sm">Ainda não há avaliações para este produto.</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-10">
            <h2 className="section-title mb-5">Produtos Relacionados</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductPage
