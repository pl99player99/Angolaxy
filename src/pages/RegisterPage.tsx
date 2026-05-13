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
    if (form.password.length < 8) return setError('Mínimo 8 caracteres.')
    setError(''); setLoading(true)
    const ok = await register({ name: form.name, email: form.email, password: form.password, type: form.type })
    setLoading(false)
    if (ok) navigate('/')
    else setError('Não foi possível criar a conta.')
  }

  return (
    <div style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 1rem', background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.05) 0%, transparent 70%)' }}>
      <div style={{ width: '100%', maxWidth: 440 }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: '1.25rem' }}>
            <div style={{ width: 36, height: 36, background: 'var(--gold)', borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, color: '#0C0C0F' }}>A</span>
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', letterSpacing: '-0.03em' }}>
              Angola<span style={{ color: 'var(--gold)' }}>xy</span>
            </span>
          </Link>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.75rem', letterSpacing: '-0.02em', marginBottom: '0.4rem' }}>Criar conta grátis</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Comece a comprar ou a vender hoje</p>
        </div>

        <div className="card" style={{ padding: '2rem' }}>
          {/* Type selector */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: '1.5rem' }}>
            {[['buyer', '🛒', 'Comprador'], ['seller', '🏪', 'Vendedor']].map(([val, icon, label]) => (
              <button key={val} type="button"
                onClick={() => setForm(f => ({ ...f, type: val as 'buyer' | 'seller' }))}
                style={{
                  padding: '12px', borderRadius: 10, border: `1px solid ${form.type === val ? 'var(--gold)' : 'var(--border)'}`,
                  background: form.type === val ? 'var(--gold-dim)' : 'var(--surface-3)',
                  color: form.type === val ? 'var(--gold)' : 'var(--text-muted)',
                  fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.875rem',
                  cursor: 'pointer', transition: 'all 0.15s',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                }}>
                {icon} {label}
              </button>
            ))}
          </div>

          {error && (
            <div style={{ marginBottom: '1rem', padding: '10px 14px', background: 'rgba(224,82,82,0.08)', border: '1px solid rgba(224,82,82,0.25)', borderRadius: 10, fontSize: '0.875rem', color: 'var(--red)' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {[['name', 'text', 'Nome Completo', 'João Paulo Silva'], ['email', 'email', 'E-mail', 'seu@email.com'], ['password', 'password', 'Senha', '••••••••'], ['confirm', 'password', 'Confirmar Senha', '••••••••']].map(([name, type, label, ph]) => (
              <div key={name}>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, fontFamily: 'var(--font-display)', color: 'var(--text-muted)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</label>
                <input name={name} type={type} value={form[name as keyof typeof form]} onChange={handleChange} required className="input" placeholder={ph} minLength={name === 'password' ? 8 : undefined} />
              </div>
            ))}

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              <input type="checkbox" required style={{ marginTop: 2, accentColor: 'var(--gold)' }} />
              <span>Aceito os <Link to="/termos-uso" style={{ color: 'var(--gold)' }}>Termos de Uso</Link> e <Link to="/politica-privacidade" style={{ color: 'var(--gold)' }}>Política de Privacidade</Link></span>
            </div>

            <button type="submit" disabled={loading} className="btn btn-gold btn-full" style={{ marginTop: 4, opacity: loading ? 0.7 : 1 }}>
              {loading ? 'A criar conta...' : 'Criar Conta'}
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border)', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            Já tem conta? <Link to="/login" style={{ color: 'var(--gold)', fontWeight: 600 }}>Entrar</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
