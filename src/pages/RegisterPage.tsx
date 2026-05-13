import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const RegisterPage = () => {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '', type: 'buyer' as 'buyer' | 'seller' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (form.password !== form.confirm) return setError('As senhas não coincidem.')
    if (form.password.length < 8) return setError('A senha deve ter no mínimo 8 caracteres.')
    setError(''); setLoading(true)
    const ok = await register({ name: form.name, email: form.email, password: form.password, type: form.type })
    setLoading(false)
    if (ok) navigate('/')
    else setError('Não foi possível criar a conta. Tente novamente.')
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-white py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-black text-blue-600">Angola<span className="text-gray-900">xy</span></Link>
          <h1 className="text-2xl font-bold text-gray-900 mt-4 mb-1">Criar conta grátis</h1>
          <p className="text-gray-500 text-sm">Comece a comprar ou a vender hoje</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {/* Account type */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {[['buyer', '🛒 Comprador', 'Quero comprar produtos'], ['seller', '🏪 Vendedor', 'Quero vender produtos']].map(([val, label, desc]) => (
              <button
                key={val}
                type="button"
                onClick={() => setForm(f => ({ ...f, type: val as 'buyer' | 'seller' }))}
                className={`p-3 rounded-xl border-2 text-left transition-all ${form.type === val ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
              >
                <p className="font-semibold text-sm">{label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
              </button>
            ))}
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">{error}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nome Completo</label>
              <input name="name" value={form.name} onChange={handleChange} required className="input" placeholder="João Paulo Silva" autoFocus />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">E-mail</label>
              <input name="email" value={form.email} onChange={handleChange} type="email" required className="input" placeholder="seu@email.com" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Senha</label>
              <input name="password" value={form.password} onChange={handleChange} type="password" required minLength={8} className="input" placeholder="Mínimo 8 caracteres" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Confirmar Senha</label>
              <input name="confirm" value={form.confirm} onChange={handleChange} type="password" required className="input" placeholder="Repita a senha" />
            </div>

            <div className="flex items-start gap-2 text-xs text-gray-500">
              <input type="checkbox" required className="mt-0.5 accent-blue-600" />
              <span>Aceito os <Link to="/termos-uso" className="text-blue-600 hover:underline">Termos de Uso</Link> e a <Link to="/politica-privacidade" className="text-blue-600 hover:underline">Política de Privacidade</Link></span>
            </div>

            <button type="submit" disabled={loading}
              className={`w-full py-3 rounded-xl font-bold text-white transition-all ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}>
              {loading ? 'A criar conta...' : 'Criar Conta'}
            </button>
          </form>

          <div className="mt-5 text-center text-sm text-gray-500">
            Já tem conta? <Link to="/login" className="text-blue-600 font-semibold hover:underline">Entrar</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
