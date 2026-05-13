import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { UserCircleIcon } from '@heroicons/react/24/outline'

const ProfilePage = () => {
  const { user, logout } = useAuth()

  if (!user) {
    return (
      <div className="container-custom py-20 text-center">
        <UserCircleIcon className="h-16 w-16 text-gray-200 mx-auto mb-4" />
        <h2 className="text-xl font-bold mb-4">Precisa de entrar na sua conta</h2>
        <Link to="/login" className="btn-primary">Entrar</Link>
      </div>
    )
  }

  return (
    <div className="container-custom py-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-black mb-6">O Meu Perfil</h1>
        <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-black text-blue-600">
              {user.name[0]}
            </div>
            <div>
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-gray-500 text-sm">{user.email}</p>
              <span className="text-xs font-semibold px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full capitalize">{user.type}</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            {[['0', 'Pedidos'], ['0', 'Favoritos'], ['0 Kz', 'Poupado']].map(([val, label]) => (
              <div key={label} className="p-3 bg-gray-50 rounded-xl">
                <p className="text-xl font-black text-gray-900">{val}</p>
                <p className="text-xs text-gray-500">{label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            {[['Os Meus Pedidos', '/pedidos'], ['Favoritos', '/favoritos'], ['Endereços', '#'], ['Segurança', '#']].map(([label, to]) => (
              <Link key={label} to={to} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors">
                <span className="font-medium text-gray-700">{label}</span>
                <span className="text-gray-400">›</span>
              </Link>
            ))}
          </div>

          <button onClick={logout} className="w-full py-2.5 rounded-xl border-2 border-red-200 text-red-600 font-semibold hover:bg-red-50 transition-colors">
            Terminar Sessão
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
