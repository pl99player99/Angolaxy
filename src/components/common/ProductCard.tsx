import { Link } from 'react-router-dom'
import { Product, formatKz, discountedPrice } from '../../data'
import { useCart } from '../../context/CartContext'

interface Props { product: Product }

const Stars = ({ rating }: { rating: number }) => (
  <div style={{ display: 'flex', gap: 2 }}>
    {[1,2,3,4,5].map(i => (
      <span key={i} style={{ fontSize: 11, color: i <= Math.round(rating) ? 'var(--gold)' : 'var(--surface-4)' }}>★</span>
    ))}
  </div>
)

const ProductCard = ({ product }: Props) => {
  const { addItem } = useCart()
  const finalPrice = discountedPrice(product.price, product.discount)

  return (
    <div className="card card-hover" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <Link to={`/produto/${product.id}`} style={{ display: 'block', position: 'relative' }}>
        <div style={{ aspectRatio: '1/1', overflow: 'hidden', background: 'var(--surface-3)' }}>
          <img src={product.image} alt={product.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
            onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.06)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
          />
        </div>
        {product.discount > 0 && (
          <span className="badge badge-red" style={{ position: 'absolute', top: 10, left: 10 }}>-{product.discount}%</span>
        )}
        {product.stock <= 5 && product.stock > 0 && (
          <span className="badge badge-gold" style={{ position: 'absolute', top: 10, right: 10 }}>Últimas</span>
        )}
      </Link>

      <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
          <Stars rating={product.rating} />
          <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>({product.reviews})</span>
        </div>

        <Link to={`/produto/${product.id}`}>
          <p className="clamp-2" style={{ fontSize: '0.875rem', fontWeight: 600, fontFamily: 'var(--font-display)', lineHeight: 1.3, marginBottom: 6, color: 'var(--text)', transition: 'color 0.15s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--gold)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text)'; }}>
            {product.name}
          </p>
        </Link>

        <div style={{ marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 10 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, color: 'var(--text)' }}>{formatKz(finalPrice)}</span>
            {product.discount > 0 && product.originalPrice && (
              <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textDecoration: 'line-through' }}>{formatKz(product.originalPrice)}</span>
            )}
          </div>

          <button
            onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image, discount: product.discount })}
            className="btn btn-gold btn-sm btn-full">
            + Carrinho
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
