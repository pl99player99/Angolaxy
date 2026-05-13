import { Link } from 'react-router-dom'
import { TrashIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useCart } from '../context/CartContext'
import { formatKz, discountedPrice } from '../data'

const CartPage = () => {
  const { items, removeItem, updateQuantity, clearCart, subtotal } = useCart()

  if (items.length === 0) {
    return (
      <div className="container-custom py-24 text-center">
        <ShoppingBagIcon className="h-20 w-20 text-gray-200 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-700 mb-2">O seu carrinho está vazio</h1>
        <p className="text-gray-400 mb-8">Explore os nossos produtos e adicione itens ao carrinho.</p>
        <Link to="/" className="btn-primary">Continuar a Comprar</Link>
      </div>
    )
  }

  return (
    <div className="container-custom py-8">
      <h1 className="text-2xl font-black mb-6">Carrinho de Compras <span className="text-gray-400 text-lg font-normal">({items.length} {items.length === 1 ? 'item' : 'itens'})</span></h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Items */}
        <div className="flex-1">
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            {items.map((item, i) => {
              const itemPrice = discountedPrice(item.price, item.discount)
              return (
                <div key={item.id} className={`flex items-center gap-4 p-5 ${i < items.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <Link to={`/produto/${item.id}`} className="flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl bg-gray-100" />
                  </Link>

                  <div className="flex-1 min-w-0">
                    <Link to={`/produto/${item.id}`} className="font-semibold text-gray-800 hover:text-blue-600 transition-colors line-clamp-2 block mb-1">
                      {item.name}
                    </Link>
                    <p className="text-blue-600 font-black">{formatKz(itemPrice)}</p>
                    {item.discount > 0 && (
                      <p className="text-xs text-gray-400 line-through">{formatKz(item.price)}</p>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 font-bold transition-colors flex items-center justify-center">−</button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 font-bold transition-colors flex items-center justify-center">+</button>
                  </div>

                  <div className="text-right min-w-[80px]">
                    <p className="font-black text-gray-900">{formatKz(itemPrice * item.quantity)}</p>
                  </div>

                  <button onClick={() => removeItem(item.id)}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0">
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              )
            })}

            <div className="p-5 border-t border-gray-100 flex justify-between">
              <button onClick={clearCart} className="text-sm text-red-500 hover:text-red-700 font-medium flex items-center gap-1">
                <TrashIcon className="h-4 w-4" /> Esvaziar carrinho
              </button>
              <Link to="/" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                ← Continuar a Comprar
              </Link>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="lg:w-80 flex-shrink-0">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 sticky top-24">
            <h2 className="font-bold text-gray-900 mb-5 text-lg">Resumo do Pedido</h2>

            <div className="space-y-3 mb-5 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({items.reduce((t,i) => t + i.quantity, 0)} produtos)</span>
                <span className="font-medium text-gray-900">{formatKz(subtotal)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Entrega</span>
                <span className="text-green-600 font-medium">A calcular</span>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4 mb-5">
              <div className="flex justify-between font-black text-lg">
                <span>Total</span>
                <span>{formatKz(subtotal)}</span>
              </div>
            </div>

            {/* Coupon */}
            <div className="mb-5">
              <div className="flex gap-2">
                <input type="text" placeholder="Código de desconto" className="input flex-1 text-sm py-2" />
                <button className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-sm font-medium transition-colors">Aplicar</button>
              </div>
            </div>

            <Link to="/checkout"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-colors text-base">
              Finalizar Compra →
            </Link>

            <p className="text-xs text-gray-400 text-center mt-3">
              🔒 Pagamento seguro — Multicaixa, transferência ou dinheiro na entrega
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
