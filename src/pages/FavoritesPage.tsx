// FavoritesPage.tsx
import { Link } from 'react-router-dom'
import { HeartIcon } from '@heroicons/react/24/outline'

const FavoritesPage = () => (
  <div className="container-custom py-20 text-center">
    <HeartIcon className="h-16 w-16 text-gray-200 mx-auto mb-4" />
    <h1 className="text-2xl font-bold text-gray-700 mb-2">Sem favoritos ainda</h1>
    <p className="text-gray-400 mb-8">Guarde os produtos que mais gosta para os encontrar facilmente.</p>
    <Link to="/" className="btn-primary">Explorar Produtos</Link>
  </div>
)

export default FavoritesPage
