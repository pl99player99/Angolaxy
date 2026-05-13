import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { ChartBarIcon, ShoppingBagIcon, CurrencyDollarIcon, StarIcon } from '@heroicons/react/24/outline'

const SellerDashboardPage = () => {
  const { user } = useAuth()

  if (!user) {
    return (
      <div className="container-custom py-20 text-center">
        <h2 className="text-xl font-bold mb-4">Precisa de entrar na sua conta</h2>
        <Link to="/login" className="btn-primary">Entrar</Link>
      </div>
    )
  }

  const stats = [
    { icon: ShoppingBagIcon,    label: 'Produtos Activos',   value: '0',        color: 'text-blue-600',   bg: 'bg-blue-50' },
    { icon: ChartBarIcon,       label: 'Vendas este Mês',    value: '0',        color: 'text-green-600',  bg: 'bg-green-50' },
    { icon: CurrencyDollarIcon, label: 'Receita Total',      value: '0 Kz',     color: 'text-purple-600', bg: 'bg-purple-50' },
    { icon: StarIcon,           label: 'Avaliação Média',    value: '—',        color: 'text-amber-600',  bg: 'bg-amber-50' },
  ]

  return (
    <div className="container-custom py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-black">Dashboard do Vendedor</h1>
          <p className="text-gray-500 text-sm mt-0.5">Bem-vindo, {user.name.split(' ')[0]} 👋</p>
        </div>
        <button className="btn-primary">+ Adicionar Produto</button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map(({ icon: Icon, label, value, color, bg }) => (
          <div key={label} className="bg-white rounded-2xl border border-gray-100 p-5">
            <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center mb-3`}>
              <Icon className={`h-5 w-5 ${color}`} />
            </div>
            <p className="text-2xl font-black text-gray-900">{value}</p>
            <p className="text-sm text-gray-500 mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Empty state */}
      <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
        <div className="text-5xl mb-4">🏪</div>
        <h2 className="text-xl font-bold text-gray-700 mb-2">A sua loja está pronta!</h2>
        <p className="text-gray-400 mb-6 max-w-md mx-auto">
          Comece a adicionar os seus produtos e alcance milhares de clientes em todo o Angola.
        </p>
        <button className="btn-primary">Adicionar o Primeiro Produto</button>
      </div>

      {/* Tips */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { emoji: '📸', title: 'Boas fotos vendem mais', desc: 'Use imagens de alta qualidade com fundo neutro e boa iluminação.' },
          { emoji: '💰', title: 'Preço competitivo', desc: 'Pesquise os preços da concorrência e posicione-se de forma competitiva.' },
          { emoji: '⚡', title: 'Resposta rápida', desc: 'Vendedores que respondem em menos de 1h têm 3x mais conversões.' },
        ].map(({ emoji, title, desc }) => (
          <div key={title} className="bg-blue-50 rounded-2xl p-5">
            <p className="text-2xl mb-2">{emoji}</p>
            <h3 className="font-bold text-gray-800 mb-1">{title}</h3>
            <p className="text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SellerDashboardPage
