import { Link } from 'react-router-dom'
import { HeartIcon, ShoppingCartIcon, StarIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarSolid } from '@heroicons/react/24/solid'
import { Product, formatKz, discountedPrice } from '../../data'
import { useCart } from '../../context/CartContext'

interface Props {
  product: Product
  compact?: boolean
}

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {[1,2,3,4,5].map(i => (
      i <= Math.round(rating)
        ? <StarSolid key={i} className="h-3.5 w-3.5 text-amber-400" />
        : <StarIcon key={i} className="h-3.5 w-3.5 text-gray-300" />
    ))}
  </div>
)

const ProductCard = ({ product, compact = false }: Props) => {
  const { addItem } = useCart()
  const finalPrice = discountedPrice(product.price, product.discount)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      discount: product.discount,
    })
  }

  return (
    <div className="card group overflow-hidden flex flex-col">
      <Link to={`/produto/${product.id}`} className="block relative overflow-hidden">
        <div className={`bg-gray-100 overflow-hidden ${compact ? 'h-44' : 'h-56'}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.discount > 0 && (
            <span className="badge badge-red">-{product.discount}%</span>
          )}
          {product.stock <= 5 && product.stock > 0 && (
            <span className="badge badge-yellow">Últimas unidades</span>
          )}
        </div>
        {/* Wishlist */}
        <button
          className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50 hover:text-red-500"
          aria-label="Adicionar aos favoritos"
          onClick={e => { e.preventDefault(); }}
        >
          <HeartIcon className="h-4 w-4" />
        </button>
      </Link>

      <div className="p-3 flex flex-col flex-1">
        <Link to={`/produto/${product.id}`}>
          <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-1 hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-1.5 mb-2">
          <Stars rating={product.rating} />
          <span className="text-xs text-gray-400">({product.reviews})</span>
        </div>

        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-base font-black text-gray-900">{formatKz(finalPrice)}</span>
            {product.discount > 0 && product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">{formatKz(product.originalPrice)}</span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 rounded-xl transition-colors"
          >
            <ShoppingCartIcon className="h-4 w-4" />
            Adicionar
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
