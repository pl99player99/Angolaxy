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
    setError(''); setLoading(true)
    const ok = await login(email, password)
    setLoading(false)
    if (ok) navigate('/')
    else setError('E-mail ou senha incorrectos.')
  }

  return (
    <div style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 1rem', background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.05) 0%, transparent 70%)' }}>
      <div style={{ width: '100%', maxWidth: 420 }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: '1.5rem' }}>
            <div style={{ width: 36, height: 36, background: 'var(--gold)', borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, color: '#0C0C0F' }}>A</span>
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', letterSpacing: '-0.03em' }}>
              Angola<span style={{ color: 'var(--gold)' }}>xy</span>
            </span>
          </Link>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.75rem', letterSpacing: '-0.02em', marginBottom: '0.4rem' }}>Bem-vindo de volta</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Entre na sua conta para continuar</p>
        </div>

        <div className="card" style={{ padding: '2rem' }}>
          {error && (
            <div style={{ marginBottom: '1.25rem', padding: '10px 14px', background: 'rgba(224,82,82,0.08)', border: '1px solid rgba(224,82,82,0.25)', borderRadius: 10, fontSize: '0.875rem', color: 'var(--red)' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, fontFamily: 'var(--font-display)', color: 'var(--text-muted)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>E-mail</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="input" placeholder="seu@email.com" autoFocus />
            </div>
            <div>
              <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 600, fontFamily: 'var(--font-display)', color: 'var(--text-muted)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Senha
                <a href="#" style={{ color: 'var(--gold)', fontWeight: 500, textTransform: 'none', letterSpacing: 0, fontSize: '0.8rem' }}>Esqueceu?</a>
              </label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="input" placeholder="••••••••" minLength={6} />
            </div>

            <button type="submit" disabled={loading} className="btn btn-gold btn-full" style={{ marginTop: 6, opacity: loading ? 0.7 : 1 }}>
              {loading ? 'A entrar...' : 'Entrar'}
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            Não tem conta?{' '}
            <Link to="/cadastro" style={{ color: 'var(--gold)', fontWeight: 600 }}>Criar conta grátis</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
