import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useAuth } from '../../context/AuthContext'
import { CATEGORIES } from '../../data'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  const { itemCount } = useCart()
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) navigate(`/pesquisa?q=${encodeURIComponent(query.trim())}`)
  }

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 200, background: 'rgba(12,12,15,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--border)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', height: '68px' }}>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <div style={{
            width: 34, height: 34,
            background: 'var(--gold)',
            borderRadius: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1rem',
          }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, color: '#0C0C0F', fontSize: '0.85rem' }}>A</span>
          </div>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.03em', color: 'var(--text)' }}>
            Angola<span style={{ color: 'var(--gold)' }}>xy</span>
          </span>
        </Link>

        {/* Search */}
        <form onSubmit={handleSearch} style={{ flex: 1, maxWidth: 520, display: 'flex' }}>
          <div style={{ position: 'relative', width: '100%' }}>
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Pesquisar produtos..."
              style={{
                width: '100%',
                background: 'var(--surface-3)',
                border: '1px solid var(--border)',
                borderRadius: 10,
                padding: '9px 44px 9px 14px',
                color: 'var(--text)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                outline: 'none',
              }}
              onFocus={e => { e.target.style.borderColor = 'var(--gold)'; e.target.style.boxShadow = '0 0 0 3px var(--gold-dim)'; }}
              onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }}
            />
            <button type="submit" style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '1rem' }}>
              ⌕
            </button>
          </div>
        </form>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginLeft: 'auto', flexShrink: 0 }}>
          <Link to="/favoritos" title="Favoritos" style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, color: 'var(--text-muted)', background: 'transparent', transition: 'all 0.15s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--surface-3)'; (e.currentTarget as HTMLElement).style.color = 'var(--text)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; }}>
            ♡
          </Link>

          <Link to="/carrinho" style={{ position: 'relative', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, color: 'var(--text-muted)', background: 'transparent', transition: 'all 0.15s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--surface-3)'; (e.currentTarget as HTMLElement).style.color = 'var(--text)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; }}>
            🛒
            {itemCount > 0 && (
              <span style={{ position: 'absolute', top: 2, right: 2, background: 'var(--gold)', color: '#0C0C0F', fontSize: '0.6rem', fontWeight: 800, borderRadius: '50%', width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {itemCount > 9 ? '9+' : itemCount}
              </span>
            )}
          </Link>

          {user ? (
            <div style={{ position: 'relative' }} className="group">
              <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 14px', background: 'var(--surface-3)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--text)', fontSize: '0.85rem', fontFamily: 'var(--font-display)', fontWeight: 600 }}>
                <span style={{ width: 22, height: 22, background: 'var(--gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 800, color: '#0C0C0F' }}>{user.name[0]}</span>
                {user.name.split(' ')[0]}
              </button>
              <div style={{ position: 'absolute', right: 0, top: 'calc(100% + 6px)', width: 190, background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 12, padding: '6px', display: 'none' }} className="dropdown">
                {[['O Meu Perfil', '/perfil'], ['Pedidos', '/pedidos'], ['Favoritos', '/favoritos']].map(([label, to]) => (
                  <Link key={to} to={to} style={{ display: 'block', padding: '8px 12px', borderRadius: 8, fontSize: '0.875rem', color: 'var(--text-muted)', transition: 'all 0.1s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--surface-3)'; (e.currentTarget as HTMLElement).style.color = 'var(--text)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; }}>
                    {label}
                  </Link>
                ))}
                <div style={{ height: 1, background: 'var(--border)', margin: '4px 0' }} />
                <button onClick={logout} style={{ width: '100%', textAlign: 'left', padding: '8px 12px', borderRadius: 8, fontSize: '0.875rem', color: 'var(--red)', background: 'transparent', transition: 'all 0.1s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(224,82,82,0.08)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}>
                  Sair
                </button>
              </div>
            </div>
          ) : (
            <>
              <Link to="/login" className="btn btn-ghost btn-sm" style={{ display: 'none' }}>Entrar</Link>
              <Link to="/login" className="btn btn-ghost btn-sm">Entrar</Link>
              <Link to="/cadastro" className="btn btn-gold btn-sm">Criar conta</Link>
            </>
          )}

          <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', width: 36, height: 36, alignItems: 'center', justifyContent: 'center', background: 'var(--surface-3)', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--text)', fontSize: '1.1rem' }}
            className="mobile-menu-btn">
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Category nav */}
      <nav style={{ borderTop: '1px solid var(--border)', background: 'rgba(12,12,15,0.6)' }}>
        <div className="container" style={{ display: 'flex', gap: '2px', overflowX: 'auto', padding: '0 1.5rem' }}>
          {CATEGORIES.map(cat => (
            <Link key={cat.id} to={`/categorias/${cat.slug}`}
              style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 12px', fontSize: '0.8rem', fontWeight: 500, color: 'var(--text-muted)', whiteSpace: 'nowrap', borderRadius: 8, transition: 'all 0.15s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--gold)'; (e.currentTarget as HTMLElement).style.background = 'var(--gold-dim)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}>
              <span>{cat.icon}</span>{cat.name}
            </Link>
          ))}
          <Link to="/vender"
            style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 12px', fontSize: '0.8rem', fontWeight: 700, color: 'var(--gold)', whiteSpace: 'nowrap', borderRadius: 8, marginLeft: 'auto', transition: 'all 0.15s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--gold-dim)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}>
            🏪 Vender
          </Link>
        </div>
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn { display: flex !important; }
        }
        .group:hover .dropdown { display: block !important; }
      `}</style>
    </header>
  )
}

export default Header
