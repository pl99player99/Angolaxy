import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity > 0) {
      updateQuantity(id, quantity);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Carrinho de Compras</h1>

      {items.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-gray-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Seu carrinho está vazio</h2>
          <p className="text-gray-600 mb-8">Explore nossos produtos e adicione itens ao seu carrinho</p>
          <Link 
            to="/" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Continuar Comprando
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Lista de itens */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold">Itens do Carrinho ({items.length})</h2>
              </div>
              
              {items.map((item) => (
                <div key={item.id} className="p-6 border-b border-gray-200 flex flex-col md:flex-row items-center">
                  {/* Imagem do produto */}
                  <div className="w-full md:w-1/4 mb-4 md:mb-0">
                    <div className="bg-gray-100 h-24 w-24 rounded-lg flex items-center justify-center">
                      {/* Placeholder para imagem */}
                      <div className="text-gray-500 text-sm">Imagem</div>
                    </div>
                  </div>
                  
                  {/* Detalhes do produto */}
                  <div className="w-full md:w-2/4 mb-4 md:mb-0">
                    <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">ID: {item.id}</p>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:text-red-800 text-sm font-medium"
                    >
                      Remover
                    </button>
                  </div>
                  
                  {/* Quantidade */}
                  <div className="w-full md:w-1/4 flex items-center justify-between">
                    <div className="flex items-center">
                      <button 
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="bg-gray-200 px-3 py-1 rounded-l-lg hover:bg-gray-300"
                      >
                        -
                      </button>
                      <input 
                        type="number" 
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                        className="w-12 text-center border-t border-b border-gray-300 py-1"
                        min="1"
                      />
                      <button 
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="bg-gray-200 px-3 py-1 rounded-r-lg hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                    <div className="font-bold">
                      {(item.price * item.quantity / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })}
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="p-6 flex justify-between">
                <button 
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-800 font-medium"
                >
                  Limpar Carrinho
                </button>
                <Link 
                  to="/" 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Continuar Comprando
                </Link>
              </div>
            </div>
          </div>
          
          {/* Resumo do pedido */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-6">Resumo do Pedido</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>{(total / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Frete</span>
                  <span>A calcular</span>
                </div>
                <div className="pt-4 border-t border-gray-200 flex justify-between font-bold">
                  <span>Total</span>
                  <span>{(total / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })}</span>
                </div>
              </div>
              
              {/* Cupom de desconto */}
              <div className="mb-6">
                <label htmlFor="coupon" className="block text-gray-700 font-medium mb-2">
                  Cupom de desconto
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="coupon"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500"
                    placeholder="Digite seu cupom"
                  />
                  <button
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-r-lg hover:bg-gray-300"
                  >
                    Aplicar
                  </button>
                </div>
              </div>
              
              <Link
                to="/checkout"
                className="block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors"
              >
                Finalizar Compra
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
