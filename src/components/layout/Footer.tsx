import { Link } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-black text-white mb-3 block">
              Angola<span className="text-blue-400">xy</span>
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              O marketplace angolano para compra e venda online com segurança, confiança e os melhores preços.
            </p>
            <div className="flex gap-3">
              {['facebook', 'instagram', 'twitter', 'youtube'].map(net => (
                <a key={net} href="#" aria-label={net}
                  className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                  <span className="text-xs uppercase font-bold">{net[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Comprar</h4>
            <ul className="space-y-2 text-sm">
              {[['/', 'Página Inicial'], ['/categorias/electronica', 'Electrónica'], ['/categorias/moda', 'Moda'], ['/categorias/desporto', 'Desporto']].map(([to, label]) => (
                <li key={to}><Link to={to} className="hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              {[['/sobre', 'Sobre Nós'], ['/vender', 'Vender no Angolaxy'], ['/contato', 'Contacto'], ['/faq', 'Perguntas Frequentes']].map(([to, label]) => (
                <li key={to}><Link to={to} className="hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>📍 Luanda, Angola</li>
              <li>
                <a href="mailto:contato@angolaxy.co.ao" className="hover:text-white transition-colors">
                  ✉️ contato@angolaxy.co.ao
                </a>
              </li>
              <li>
                <a href="tel:+244923456789" className="hover:text-white transition-colors">
                  📞 +244 923 456 789
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-xs text-gray-500 mb-2">Pagamentos aceites:</p>
              <div className="flex gap-2 flex-wrap">
                {['Multicaixa', 'BFA', 'BAI', 'BIC'].map(p => (
                  <span key={p} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-lg">{p}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container-custom py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>© {year} Angolaxy. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link to="/politica-privacidade" className="hover:text-white transition-colors">Privacidade</Link>
            <Link to="/termos-uso" className="hover:text-white transition-colors">Termos de Uso</Link>
          </div>
          <p>Feito com ❤️ em Luanda 🇦🇴</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
