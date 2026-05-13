import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatKz, discountedPrice, ANGOLA_PROVINCES, PAYMENT_METHODS, DELIVERY_OPTIONS } from '../data'

const CheckoutPage = () => {
  const { items, subtotal, clearCart } = useCart()
  const navigate = useNavigate()
  const [step, setStep] = useState<1|2|3>(1)
  const [processing, setProcessing] = useState(false)
  const [selectedDelivery, setSelectedDelivery] = useState('standard')
  const [selectedPayment, setSelectedPayment] = useState('multicaixa')
  const [form, setForm] = useState({
    name: '', phone: '', email: '',
    address: '', district: '', province: 'Luanda',
  })

  const delivery = DELIVERY_OPTIONS.find(d => d.id === selectedDelivery)!
  const total = subtotal + delivery.price

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setProcessing(true)
    await new Promise(r => setTimeout(r, 1800))
    clearCart()
    navigate('/pedido-confirmado')
  }

  if (items.length === 0) {
    return (
      <div className="container-custom py-20 text-center">
        <h2 className="text-xl font-bold mb-4">O carrinho está vazio</h2>
        <Link to="/" className="btn-primary">Ir às compras</Link>
      </div>
    )
  }

  return (
    <div className="container-custom py-8">
      <h1 className="text-2xl font-black mb-6">Finalizar Compra</h1>

      {/* Progress */}
      <div className="flex items-center gap-2 mb-8 text-sm">
        {[['1', 'Entrega'], ['2', 'Pagamento'], ['3', 'Revisão']].map(([s, label]) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${Number(s) <= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>{s}</div>
            <span className={`font-medium ${Number(s) === step ? 'text-blue-600' : 'text-gray-400'}`}>{label}</span>
            {s !== '3' && <span className="text-gray-300 ml-1">›</span>}
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-1 space-y-6">
          {/* Step 1: Address + Delivery */}
          {step === 1 && (
            <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-5">
              <h2 className="font-bold text-lg">Endereço de Entrega</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Nome Completo *</label>
                  <input name="name" value={form.name} onChange={handleChange} required className="input" placeholder="João Paulo Silva" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Telefone *</label>
                  <input name="phone" value={form.phone} onChange={handleChange} required className="input" placeholder="+244 9XX XXX XXX" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">E-mail</label>
                <input name="email" value={form.email} onChange={handleChange} type="email" className="input" placeholder="seu@email.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Endereço / Rua *</label>
                <input name="address" value={form.address} onChange={handleChange} required className="input" placeholder="Rua das Palmeiras, nº 123" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Bairro *</label>
                  <input name="district" value={form.district} onChange={handleChange} required className="input" placeholder="Miramar" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Província *</label>
                  <select name="province" value={form.province} onChange={handleChange} className="input">
                    {ANGOLA_PROVINCES.map(p => <option key={p}>{p}</option>)}
                  </select>
                </div>
              </div>

              <h2 className="font-bold text-lg pt-2">Opção de Entrega</h2>
              <div className="space-y-3">
                {DELIVERY_OPTIONS.map(opt => (
                  <label key={opt.id} className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedDelivery === opt.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                    <div className="flex items-center gap-3">
                      <input type="radio" name="delivery" value={opt.id} checked={selectedDelivery === opt.id}
                        onChange={() => setSelectedDelivery(opt.id)} className="accent-blue-600" />
                      <div>
                        <p className="font-semibold text-sm text-gray-800">{opt.name}</p>
                        <p className="text-xs text-gray-500">{opt.description}</p>
                      </div>
                    </div>
                    <span className="font-bold text-gray-900 text-sm">{formatKz(opt.price)}</span>
                  </label>
                ))}
              </div>

              <button type="button" onClick={() => setStep(2)} className="btn-primary w-full justify-center">
                Continuar para Pagamento →
              </button>
            </div>
          )}

          {/* Step 2: Payment */}
          {step === 2 && (
            <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4">
              <h2 className="font-bold text-lg">Método de Pagamento</h2>
              <div className="space-y-3">
                {PAYMENT_METHODS.map(m => (
                  <label key={m.id} className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedPayment === m.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                    <input type="radio" name="payment" value={m.id} checked={selectedPayment === m.id}
                      onChange={() => setSelectedPayment(m.id)} className="accent-blue-600" />
                    <span className="text-2xl">{m.icon}</span>
                    <div>
                      <p className="font-semibold text-sm text-gray-800">{m.name}</p>
                      <p className="text-xs text-gray-500">{m.description}</p>
                    </div>
                  </label>
                ))}
              </div>

              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setStep(1)} className="btn-outline flex-1 justify-center">
                  ← Voltar
                </button>
                <button type="button" onClick={() => setStep(3)} className="btn-primary flex-1 justify-center">
                  Rever Pedido →
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Review */}
          {step === 3 && (
            <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4">
              <h2 className="font-bold text-lg">Rever e Confirmar</h2>

              <div className="space-y-3">
                {items.map(item => {
                  const itemPrice = discountedPrice(item.price, item.discount)
                  return (
                    <div key={item.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold line-clamp-1">{item.name}</p>
                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-bold text-sm">{formatKz(itemPrice * item.quantity)}</p>
                    </div>
                  )
                })}
              </div>

              <div className="bg-blue-50 rounded-xl p-4 text-sm space-y-1">
                <div className="flex justify-between text-gray-600"><span>Subtotal</span><span>{formatKz(subtotal)}</span></div>
                <div className="flex justify-between text-gray-600"><span>Entrega ({delivery.name})</span><span>{formatKz(delivery.price)}</span></div>
                <div className="flex justify-between font-black text-base pt-2 border-t border-blue-200 mt-2">
                  <span>Total a Pagar</span><span>{formatKz(total)}</span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setStep(2)} className="btn-outline flex-1 justify-center">
                  ← Voltar
                </button>
                <button
                  type="submit"
                  disabled={processing}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white transition-all ${processing ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
                >
                  {processing ? '⏳ A processar...' : '✅ Confirmar Pedido'}
                </button>
              </div>
            </div>
          )}
        </form>

        {/* Mini Summary */}
        <div className="lg:w-72 flex-shrink-0">
          <div className="bg-white rounded-2xl border border-gray-100 p-5 sticky top-24">
            <h3 className="font-bold text-gray-900 mb-4">Resumo</h3>
            <div className="space-y-2 text-sm text-gray-600 mb-4">
              <div className="flex justify-between"><span>{items.reduce((t,i) => t+i.quantity, 0)} produtos</span><span>{formatKz(subtotal)}</span></div>
              <div className="flex justify-between"><span>Entrega</span><span>{formatKz(delivery.price)}</span></div>
            </div>
            <div className="flex justify-between font-black text-base border-t border-gray-100 pt-3">
              <span>Total</span><span>{formatKz(total)}</span>
            </div>
            <p className="text-xs text-gray-400 mt-4 text-center">🔒 Dados protegidos e encriptados</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
