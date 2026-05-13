import { Link } from 'react-router-dom'

export const AboutPage = () => (
  <div>
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="container-custom text-center">
        <h1 className="text-4xl font-black mb-3">Sobre o Angolaxy</h1>
        <p className="text-blue-200 text-lg max-w-xl mx-auto">O marketplace angolano que une compradores e vendedores de Norte a Sul do país.</p>
      </div>
    </div>
    <div className="container-custom py-16 max-w-3xl">
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>O <strong>Angolaxy</strong> nasceu em Luanda com uma missão simples: criar um espaço digital seguro e confiável onde os angolanos possam comprar e vender produtos com total tranquilidade.</p>
        <p>Acreditamos que o comércio electrónico pode transformar a economia angolana, criando oportunidades para pequenos e médios empreendedores alcançarem clientes em todo o país.</p>
        <div className="grid grid-cols-3 gap-6 py-8">
          {[['10K+', 'Produtos'], ['5K+', 'Vendedores'], ['50K+', 'Clientes']].map(([n, l]) => (
            <div key={l} className="text-center p-5 bg-blue-50 rounded-2xl">
              <p className="text-3xl font-black text-blue-600">{n}</p>
              <p className="text-gray-600 font-medium">{l}</p>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-black text-gray-900">Os Nossos Valores</h2>
        <ul className="space-y-3">
          {['🔒 Segurança em cada transacção', '🚚 Entrega em todo o território angolano', '💳 Pagamentos em Kwanzas', '🤝 Suporte ao vendedor e comprador'].map(v => (
            <li key={v} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl font-medium">{v}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

export const ContactPage = () => (
  <div>
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-14">
      <div className="container-custom text-center">
        <h1 className="text-4xl font-black mb-2">Contacte-nos</h1>
        <p className="text-blue-200">Estamos aqui para ajudar. Resposta em menos de 24 horas.</p>
      </div>
    </div>
    <div className="container-custom py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {/* Info */}
        <div className="space-y-5">
          <h2 className="text-xl font-bold">Informações de Contacto</h2>
          {[
            ['📍', 'Morada', 'Luanda, Angola'],
            ['✉️', 'E-mail', 'contato@angolaxy.co.ao'],
            ['📞', 'Telefone', '+244 923 456 789'],
            ['🕐', 'Horário', 'Segunda a Sexta, 8h–18h'],
          ].map(([icon, label, value]) => (
            <div key={label} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl">{icon}</span>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase">{label}</p>
                <p className="font-semibold text-gray-800">{value}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Form */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4">
          <h2 className="text-xl font-bold">Envie uma Mensagem</h2>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Nome</label>
            <input className="input" placeholder="O seu nome" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">E-mail</label>
            <input type="email" className="input" placeholder="seu@email.com" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Assunto</label>
            <input className="input" placeholder="Como podemos ajudar?" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Mensagem</label>
            <textarea className="input h-32 resize-none" placeholder="Descreva a sua questão..." />
          </div>
          <button className="btn-primary w-full justify-center">Enviar Mensagem</button>
        </div>
      </div>
    </div>
  </div>
)

export const NotFoundPage = () => (
  <div className="container-custom py-32 text-center">
    <p className="text-8xl font-black text-blue-100 mb-4">404</p>
    <h1 className="text-3xl font-black text-gray-800 mb-3">Página não encontrada</h1>
    <p className="text-gray-500 mb-8">O endereço que procura não existe ou foi movido.</p>
    <Link to="/" className="btn-primary">← Voltar ao início</Link>
  </div>
)

export const OrderConfirmedPage = () => (
  <div className="container-custom py-24 text-center max-w-lg mx-auto">
    <div className="text-7xl mb-6">🎉</div>
    <h1 className="text-3xl font-black text-gray-900 mb-3">Pedido Confirmado!</h1>
    <p className="text-gray-500 mb-2">O seu pedido foi recebido com sucesso.</p>
    <p className="text-gray-500 mb-8">Receberá uma confirmação no seu e-mail e será contactado para coordenar a entrega.</p>
    <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8 text-left space-y-2">
      <p className="text-green-700 font-semibold">✅ Pedido registado</p>
      <p className="text-green-700 font-semibold">✅ Vendedor notificado</p>
      <p className="text-green-600 font-semibold">⏳ Entrega a ser agendada</p>
    </div>
    <Link to="/" className="btn-primary">Continuar a Comprar</Link>
  </div>
)
