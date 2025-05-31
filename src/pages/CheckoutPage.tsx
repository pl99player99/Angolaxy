import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CheckoutPage = () => {
  const { items, total } = useCart();
  const navigate = useNavigate();
  
  // Dados simulados para endereços
  const addresses = [
    {
      id: 1,
      name: 'Casa',
      street: 'Rua das Palmeiras, 123',
      district: 'Miramar',
      city: 'Luanda',
      province: 'Luanda',
      isDefault: true
    },
    {
      id: 2,
      name: 'Trabalho',
      street: 'Avenida 4 de Fevereiro, 456',
      district: 'Ingombota',
      city: 'Luanda',
      province: 'Luanda',
      isDefault: false
    }
  ];

  // Dados simulados para métodos de pagamento
  const paymentMethods = [
    { id: 'credit_card', name: 'Cartão de Crédito/Débito' },
    { id: 'bank_transfer', name: 'Transferência Bancária' },
    { id: 'mobile_payment', name: 'Pagamento Móvel' },
    { id: 'cash_on_delivery', name: 'Pagamento na Entrega' }
  ];

  // Dados simulados para opções de entrega
  const deliveryOptions = [
    { id: 'standard', name: 'Entrega Padrão (3-5 dias)', price: 2500 },
    { id: 'express', name: 'Entrega Expressa (1-2 dias)', price: 5000 }
  ];

  const [selectedAddress, setSelectedAddress] = useState(addresses.find(addr => addr.isDefault)?.id || 1);
  const [selectedPayment, setSelectedPayment] = useState('credit_card');
  const [selectedDelivery, setSelectedDelivery] = useState('standard');
  const [isProcessing, setIsProcessing] = useState(false);

  // Calcular o total com frete
  const deliveryPrice = deliveryOptions.find(option => option.id === selectedDelivery)?.price || 0;
  const totalWithDelivery = total + deliveryPrice;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulação de processamento de pedido
    setTimeout(() => {
      setIsProcessing(false);
      // Aqui seria implementada a lógica real de finalização do pedido
      // Redirecionar para página de confirmação
      navigate('/pedido-confirmado');
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Finalizar Compra</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Formulário de checkout */}
        <div className="lg:w-2/3">
          <form id="checkout-form" onSubmit={handleSubmit}>
            {/* Endereço de entrega */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold">Endereço de Entrega</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {addresses.map(address => (
                    <div key={address.id} className="flex items-center">
                      <input
                        type="radio"
                        id={`address-${address.id}`}
                        name="address"
                        value={address.id}
                        checked={selectedAddress === address.id}
                        onChange={() => setSelectedAddress(address.id)}
                        className="h-4 w-4 text-blue-600 border-gray-300"
                      />
                      <label htmlFor={`address-${address.id}`} className="ml-3 block">
                        <div className="font-medium">{address.name}</div>
                        <div className="text-gray-600 text-sm">
                          {address.street}, {address.district}, {address.city}, {address.province}
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <button type="button" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    + Adicionar novo endereço
                  </button>
                </div>
              </div>
            </div>

            {/* Opções de entrega */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold">Opções de Entrega</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {deliveryOptions.map(option => (
                    <div key={option.id} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id={`delivery-${option.id}`}
                          name="delivery"
                          value={option.id}
                          checked={selectedDelivery === option.id}
                          onChange={() => setSelectedDelivery(option.id)}
                          className="h-4 w-4 text-blue-600 border-gray-300"
                        />
                        <label htmlFor={`delivery-${option.id}`} className="ml-3 block">
                          {option.name}
                        </label>
                      </div>
                      <div className="font-medium">
                        {(option.price / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Método de pagamento */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold">Método de Pagamento</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {paymentMethods.map(method => (
                    <div key={method.id} className="flex items-center">
                      <input
                        type="radio"
                        id={`payment-${method.id}`}
                        name="payment"
                        value={method.id}
                        checked={selectedPayment === method.id}
                        onChange={() => setSelectedPayment(method.id)}
                        className="h-4 w-4 text-blue-600 border-gray-300"
                      />
                      <label htmlFor={`payment-${method.id}`} className="ml-3 block">
                        {method.name}
                      </label>
                    </div>
                  ))}
                </div>

                {/* Formulário de cartão de crédito (condicional) */}
                {selectedPayment === 'credit_card' && (
                  <div className="mt-6 space-y-4">
                    <div>
                      <label htmlFor="card_number" className="block text-gray-700 font-medium mb-2">
                        Número do Cartão
                      </label>
                      <input
                        type="text"
                        id="card_number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiry" className="block text-gray-700 font-medium mb-2">
                          Data de Validade
                        </label>
                        <input
                          type="text"
                          id="expiry"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                          placeholder="MM/AA"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="cvv" className="block text-gray-700 font-medium mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          id="cvv"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="card_name" className="block text-gray-700 font-medium mb-2">
                        Nome no Cartão
                      </label>
                      <input
                        type="text"
                        id="card_name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="NOME COMPLETO"
                        required
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
        
        {/* Resumo do pedido */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
            <h2 className="text-xl font-semibold mb-6">Resumo do Pedido</h2>
            
            {/* Lista de itens */}
            <div className="space-y-4 mb-6">
              {items.map(item => (
                <div key={item.id} className="flex justify-between">
                  <div>
                    <span className="font-medium">{item.name}</span>
                    <span className="text-gray-600 text-sm"> x{item.quantity}</span>
                  </div>
                  <span>
                    {(item.price * item.quantity / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Totais */}
            <div className="space-y-2 pt-4 border-t border-gray-200">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>{(total / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Frete</span>
                <span>{(deliveryPrice / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })}</span>
              </div>
              <div className="flex justify-between font-bold pt-2 border-t border-gray-200">
                <span>Total</span>
                <span>{(totalWithDelivery / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })}</span>
              </div>
            </div>
            
            <button
              type="submit"
              form="checkout-form"
              className={`w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors ${
                isProcessing ? 'opacity-70 cursor-not-allowed' : ''
              }`}
              disabled={isProcessing}
            >
              {isProcessing ? 'Processando...' : 'Finalizar Pedido'}
            </button>
            
            <p className="text-sm text-gray-600 mt-4 text-center">
              Ao finalizar o pedido, você concorda com nossos Termos de Uso
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
