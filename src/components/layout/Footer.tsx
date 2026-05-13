import { Link } from 'react-router-dom'

const Footer = () => (
  <footer style={{ background: 'var(--surface-2)', borderTop: '1px solid var(--border)', marginTop: 'auto' }}>
    <div className="container" style={{ padding: '3.5rem 1.5rem 2rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
        <div>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '1rem' }}>
            <div style={{ width: 30, height: 30, background: 'var(--gold)', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, color: '#0C0C0F', fontSize: '0.8rem' }}>A</span>
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.03em' }}>
              Angola<span style={{ color: 'var(--gold)' }}>xy</span>
            </span>
          </Link>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>O marketplace angolano para compra e venda com segurança.</p>
          <div style={{ display: 'flex', gap: 8, marginTop: '1.1rem' }}>
            {['f', 'ig', 'tw', 'yt'].map(s => (
              <a key={s} href="#" style={{ width: 32, height: 32, background: 'var(--surface-4)', border: '1px solid var(--border)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-muted)', transition: 'all 0.15s', textTransform: 'uppercase' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'; (e.currentTarget as HTMLElement).style.color = 'var(--gold)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; }}>
                {s}
              </a>
            ))}
          </div>
        </div>

        {[
          { title: 'Comprar', links: [['/', 'Início'], ['/categorias/electronica', 'Electrónica'], ['/categorias/moda', 'Moda'], ['/categorias/desporto', 'Desporto']] },
          { title: 'Empresa', links: [['/sobre', 'Sobre Nós'], ['/vender', 'Vender'], ['/contato', 'Contacto'], ['/faq', 'FAQ']] },
          { title: 'Suporte', links: [['#', 'Centro de Ajuda'], ['/termos-uso', 'Termos'], ['/politica-privacidade', 'Privacidade'], ['mailto:info@angolaxy.ao', 'E-mail']] },
        ].map(col => (
          <div key={col.title}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>{col.title}</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {col.links.map(([to, label]) => (
                <li key={to}>
                  <Link to={to} style={{ fontSize: '0.845rem', color: 'var(--text-muted)', transition: 'color 0.15s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
        <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>© {new Date().getFullYear()} Angolaxy. Todos os direitos reservados.</p>
        <div style={{ display: 'flex', gap: 8 }}>
          {['Multicaixa', 'BFA', 'BAI', 'BIC'].map(p => (
            <span key={p} style={{ fontSize: '0.68rem', fontWeight: 700, padding: '3px 9px', background: 'var(--surface-4)', border: '1px solid var(--border)', borderRadius: 6, color: 'var(--text-dim)' }}>{p}</span>
          ))}
        </div>
        <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>Feito com ♥ em Luanda 🇦🇴</p>
      </div>
    </div>
  </footer>
)

export default Footer
