import { Link } from 'react-router-dom'
import { ArrowRightIcon, ShieldCheckIcon, TruckIcon, CurrencyDollarIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import ProductCard from '../components/common/ProductCard'
import { PRODUCTS, CATEGORIES } from '../data'

const HomePage = () => {
  const featured = PRODUCTS.filter((_, i) => i < 4)
  const newArrivals = PRODUCTS.filter((_, i) => i >= 4)

  return (
    <div>
      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="container-custom py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-4 py-1.5 rounded-full text-sm font-medium">
                🇦🇴 O marketplace #1 de Angola
              </div>
              <h1 className="text-4xl md:text-5xl font-black leading-tight">
                Compre e Venda<br />
                com <span className="text-blue-200">confiança</span> e<br />
                <span className="text-blue-200">segurança</span>
              </h1>
              <p className="text-blue-100 text-lg leading-relaxed max-w-md">
                Milhares de produtos das melhores marcas, entrega em todo o território angolano, pagamento por Multicaixa e muito mais.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/categorias/electronica" className="btn-primary bg-white text-blue-700 hover:bg-blue-50">
                  Explorar Produtos <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <Link to="/vender" className="btn-outline border-white text-white hover:bg-white/10">
                  Começar a Vender
                </Link>
              </div>
              <div className="flex gap-6 pt-2 text-sm">
                <div><span className="font-black text-2xl">10K+</span><p className="text-blue-200">Produtos</p></div>
                <div><span className="font-black text-2xl">5K+</span><p className="text-blue-200">Vendedores</p></div>
                <div><span className="font-black text-2xl">50K+</span><p className="text-blue-200">Clientes</p></div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src="/images/hero-image.jpg" alt="Marketplace Angolaxy" className="w-full aspect-[4/3] object-cover" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-xl p-3 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">Smartphone XYZ Pro</p>
                      <p className="font-black text-gray-900">120.000 Kz</p>
                    </div>
                    <span className="badge badge-red text-sm">-14%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BARS ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-custom py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: TruckIcon, title: 'Entrega Nacional', desc: 'Todo o território angolano' },
              { icon: ShieldCheckIcon, title: 'Compra Segura', desc: 'Pagamentos protegidos' },
              { icon: CurrencyDollarIcon, title: 'Preços em Kz', desc: 'Sem surpresas cambiais' },
              { icon: ChatBubbleLeftRightIcon, title: 'Suporte 24/7', desc: 'Estamos sempre aqui' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 rounded-xl flex-shrink-0">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{title}</p>
                  <p className="text-xs text-gray-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-title">Categorias Populares</h2>
            <Link to="/categorias/electronica" className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center gap-1">
              Ver todas <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {CATEGORIES.map(cat => (
              <Link key={cat.id} to={`/categorias/${cat.slug}`}
                className="group flex flex-col items-center p-4 bg-white rounded-2xl shadow-sm hover:shadow-md hover:border-blue-200 border border-transparent transition-all duration-200 text-center">
                <div className="w-14 h-14 rounded-full overflow-hidden mb-2 ring-2 ring-gray-100 group-hover:ring-blue-200 transition-all">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <p className="text-xs font-semibold text-gray-700 group-hover:text-blue-600 transition-colors leading-tight">{cat.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{cat.count} produtos</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-title">Produtos em Destaque</h2>
            <Link to="/categorias/electronica" className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center gap-1">
              Ver mais <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featured.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* ── PROMO BANNER ── */}
      <section className="py-8">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-white">
                <h2 className="text-2xl md:text-3xl font-black mb-2">Venda os seus produtos no Angolaxy</h2>
                <p className="text-blue-200 text-lg">Alcance milhares de clientes em toda Angola. Comece hoje, é grátis.</p>
              </div>
              <Link to="/vender" className="flex-shrink-0 bg-white text-blue-700 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors text-lg whitespace-nowrap">
                Começar a Vender →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEW ARRIVALS ── */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-title">Chegadas Recentes</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {newArrivals.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-title mb-3">Fique sempre atualizado</h2>
            <p className="text-gray-500 mb-6">Receba as melhores ofertas e novidades do Angolaxy directamente no seu e-mail.</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={e => { e.preventDefault() }}>
              <input
                type="email"
                placeholder="O seu endereço de e-mail"
                className="flex-1 input"
                required
              />
              <button type="submit" className="btn-primary flex-shrink-0">
                Subscrever
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
