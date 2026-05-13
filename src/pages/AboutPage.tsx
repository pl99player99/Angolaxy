import { Link } from 'react-router-dom'

const AboutPage = () => (
  <div>
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="container-custom text-center">
        <h1 className="text-4xl font-black mb-3">Sobre o Angolaxy</h1>
        <p className="text-blue-200 text-lg max-w-xl mx-auto">
          O marketplace angolano que conecta compradores e vendedores com segurança e confiança.
        </p>
      </div>
    </div>

    <div className="container-custom py-14 space-y-16">
      {/* Mission */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-black mb-4">A Nossa Missão</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            O Angolaxy nasceu para democratizar o comércio electrónico em Angola, criando uma plataforma onde qualquer angolano pode comprar e vender online com segurança, pagando em Kwanzas, com entrega em todo o território nacional.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Acreditamos que o comércio digital é uma ferramenta poderosa para impulsionar a economia angolana e criar oportunidades para empreendedores de todas as províncias.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[['50K+', 'Clientes registados'], ['10K+', 'Produtos disponíveis'], ['5K+', 'Vendedores activos'], ['18', 'Províncias servidas']].map(([val, label]) => (
            <div key={label} className="bg-blue-50 rounded-2xl p-5 text-center">
              <p className="text-3xl font-black text-blue-600">{val}</p>
              <p className="text-sm text-gray-600 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="text-center">
        <h2 className="text-3xl font-black mb-10">Os Nossos Valores</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { emoji: '🔒', title: 'Segurança', desc: 'Todas as transacções são protegidas e monitorizadas para garantir a segurança de compradores e vendedores.' },
            { emoji: '🤝', title: 'Confiança', desc: 'Construímos relações de confiança com vendedores verificados, avaliações reais e políticas claras de devolução.' },
            { emoji: '🌍', title: 'Inclusão', desc: 'Queremos que todos os angolanos, independentemente da localização, tenham acesso ao comércio digital.' },
          ].map(({ emoji, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <p className="text-4xl mb-3">{emoji}</p>
              <h3 className="text-lg font-bold mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-10 text-white text-center">
        <h2 className="text-2xl font-black mb-3">Faça parte da nossa história</h2>
        <p className="text-blue-200 mb-6">Junte-se a milhares de angolanos que já confiam no Angolaxy.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/cadastro" className="bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">
            Criar Conta Grátis
          </Link>
          <Link to="/vender" className="border-2 border-white text-white font-bold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors">
            Começar a Vender
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default AboutPage
