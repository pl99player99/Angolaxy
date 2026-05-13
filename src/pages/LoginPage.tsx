import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const LoginPage = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const ok = await login(email, password)
    setLoading(false)
    if (ok) navigate('/')
    else setError('E-mail ou senha incorrectos. Tente novamente.')
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-white py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-black text-blue-600">Angola<span className="text-gray-900">xy</span></Link>
          <h1 className="text-2xl font-bold text-gray-900 mt-4 mb-1">Bem-vindo de volta</h1>
          <p className="text-gray-500 text-sm">Entre na sua conta para continuar</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {error && (
            <div className="mb-5 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">E-mail</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
                className="input" placeholder="seu@email.com" autoFocus />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex justify-between">
                Senha
                <a href="#" className="text-blue-600 font-medium text-xs hover:underline">Esqueceu a senha?</a>
              </label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} required
                className="input" placeholder="A sua senha" minLength={6} />
            </div>

            <button type="submit" disabled={loading}
              className={`w-full py-3 rounded-xl font-bold text-white transition-all ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}>
              {loading ? 'A entrar...' : 'Entrar'}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            Não tem conta?{' '}
            <Link to="/cadastro" className="text-blue-600 font-semibold hover:underline">Criar conta grátis</Link>
          </div>
        </div>

        <p className="text-xs text-gray-400 text-center mt-4">
          Ao entrar, aceita os nossos{' '}
          <Link to="/termos-uso" className="hover:underline">Termos de Uso</Link>
          {' '}e{' '}
          <Link to="/politica-privacidade" className="hover:underline">Política de Privacidade</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
