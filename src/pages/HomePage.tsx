import { Link } from 'react-router-dom'
import ProductCard from '../components/common/ProductCard'
import { PRODUCTS, CATEGORIES } from '../data'

const trusts = [
  { icon: '🚚', label: 'Entrega Nacional', sub: 'Todo o território angolano' },
  { icon: '🔒', label: 'Compra Segura', sub: 'Pagamentos protegidos' },
  { icon: '💰', label: 'Preços em Kz', sub: 'Sem surpresas cambiais' },
  { icon: '🎯', label: 'Suporte 24/7', sub: 'Sempre disponíveis' },
]

const marqueeItems = ['Electrónica', 'Moda', 'Desporto', 'Beleza', 'Casa', 'Supermercado', 'Câmeras', 'Sapatos', 'Laptops', 'Smartwatches']

const HomePage = () => {
  const featured = PRODUCTS.slice(0, 4)
  const recent = PRODUCTS.slice(4)

  return (
    <div>
      {/* ── HERO ── */}
      <section style={{
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(201,168,76,0.08) 0%, transparent 70%), var(--surface)',
      }}>
        {/* Grid pattern */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.035,
          backgroundImage: 'linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        {/* Glow orb */}
        <div style={{
          position: 'absolute', top: '15%', right: '8%',
          width: 480, height: 480,
          background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
        }} />

        <div className="container" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', padding: '5rem 1.5rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--gold-dim)', border: '1px solid var(--border-gold)', borderRadius: 20, padding: '5px 14px', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)' }}>🇦🇴 Marketplace #1 de Angola</span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2.8rem, 5vw, 4.2rem)', lineHeight: 1.0, letterSpacing: '-0.04em', marginBottom: '1.5rem' }}>
              Compra.<br />
              Vende.<br />
              <span className="gold-text">Cresce.</span>
            </h1>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: 420, marginBottom: '2rem' }}>
              Milhares de produtos das melhores marcas angolanas e internacionais. Entrega em todo o território, pagamento por Multicaixa.
            </p>

            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <Link to="/categorias/electronica" className="btn btn-gold btn-lg">
                Explorar Produtos →
              </Link>
              <Link to="/vender" className="btn btn-outline btn-lg">
                Vender aqui
              </Link>
            </div>

            <div style={{ display: 'flex', gap: '2rem' }}>
              {[['10K+', 'Produtos'], ['5K+', 'Vendedores'], ['50K+', 'Clientes']].map(([n, l]) => (
                <div key={l}>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.6rem', letterSpacing: '-0.03em', color: 'var(--gold)' }}>{n}</p>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual */}
          <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="float" style={{ gridRow: '1 / 3', borderRadius: 20, overflow: 'hidden', border: '1px solid var(--border-gold)' }}>
              <img src="/images/smartphone.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid var(--border)' }}>
              <img src="/images/headphones.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid var(--border)' }}>
              <img src="/images/shoes.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Floating price tag */}
            <div style={{
              position: 'absolute', bottom: -16, left: -16,
              background: 'var(--surface-2)', border: '1px solid var(--border-gold)',
              borderRadius: 14, padding: '14px 18px',
              backdropFilter: 'blur(12px)',
            }}>
              <p style={{ fontSize: '0.7rem', color: 'var(--text-dim)', marginBottom: 2 }}>Smartphone XYZ Pro</p>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--gold)' }}>120.000 Kz</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
                {[1,2,3,4,5].map(i => <span key={i} style={{ fontSize: 10, color: 'var(--gold)' }}>★</span>)}
                <span style={{ fontSize: '0.68rem', color: 'var(--text-dim)' }}>(120)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div style={{ background: 'var(--gold)', padding: '12px 0', overflow: 'hidden' }}>
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0C0C0F', padding: '0 2rem' }}>
              {item} <span style={{ opacity: 0.4 }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── TRUST ── */}
      <section style={{ background: 'var(--surface-2)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ padding: '1.75rem 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {trusts.map(t => (
              <div key={t.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: '1.5rem' }}>{t.icon}</span>
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.875rem' }}>{t.label}</p>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>{t.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="section">
        <div className="container">
          <div className="section-label">Categorias</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2rem' }}>
            <h2 className="section-title">Explore por área</h2>
            <Link to="/categorias/electronica" style={{ fontSize: '0.82rem', color: 'var(--gold)', fontWeight: 600 }}>Ver todas →</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '0.85rem' }}>
            {CATEGORIES.map(cat => (
              <Link key={cat.id} to={`/categorias/${cat.slug}`}
                className="card"
                style={{ padding: '1.25rem', textAlign: 'center', transition: 'all 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-gold)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}>
                <div style={{ fontSize: '2rem', marginBottom: 8 }}>{cat.icon}</div>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.82rem', color: 'var(--text)' }}>{cat.name}</p>
                <p style={{ fontSize: '0.7rem', color: 'var(--text-dim)', marginTop: 2 }}>{cat.count} produtos</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-label">Destaque</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2rem' }}>
            <h2 className="section-title">Produtos em destaque</h2>
            <Link to="/categorias/electronica" style={{ fontSize: '0.82rem', color: 'var(--gold)', fontWeight: 600 }}>Ver mais →</Link>
          </div>
          <div className="products-grid">
            {featured.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* ── PROMO BANNER ── */}
      <section style={{ padding: '0 0 5rem' }}>
        <div className="container">
          <div style={{
            background: 'var(--surface-2)',
            border: '1px solid var(--border-gold)',
            borderRadius: 24,
            padding: '3.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', right: -60, top: -60, width: 280, height: 280, background: 'radial-gradient(circle, var(--gold-dim) 0%, transparent 70%)', borderRadius: '50%' }} />
            <div>
              <div className="section-label" style={{ marginBottom: '0.75rem' }}>Para vendedores</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', letterSpacing: '-0.03em', marginBottom: '0.6rem' }}>
                Venda para Angola inteira
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: 420 }}>Alcance milhares de compradores em todas as províncias. Comece hoje, gratuitamente.</p>
            </div>
            <Link to="/vender" className="btn btn-gold btn-lg" style={{ flexShrink: 0, position: 'relative' }}>
              Começar a Vender →
            </Link>
          </div>
        </div>
      </section>

      {/* ── NEW ARRIVALS ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-label">Novidades</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2rem' }}>
            <h2 className="section-title">Chegadas recentes</h2>
          </div>
          <div className="products-grid">
            {recent.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 520, margin: '0 auto' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Newsletter</div>
            <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>Fique sempre à frente</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.75rem' }}>
              Receba as melhores ofertas e novidades directamente no e-mail.
            </p>
            <form style={{ display: 'flex', gap: 8 }} onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="O seu e-mail" className="input" style={{ flex: 1 }} required />
              <button type="submit" className="btn btn-gold" style={{ flexShrink: 0 }}>Subscrever</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
