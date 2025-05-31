import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProfilePage = () => {
  const { user, logout } = useAuth();
  
  // Dados simulados para pedidos
  const orders = [
    {
      id: 'ORD-12345',
      date: '15/05/2025',
      total: 45000,
      status: 'Entregue',
      items: 3
    },
    {
      id: 'ORD-12346',
      date: '28/04/2025',
      total: 120000,
      status: 'Em processamento',
      items: 2
    },
    {
      id: 'ORD-12347',
      date: '10/04/2025',
      total: 35000,
      status: 'Cancelado',
      items: 1
    }
  ];

  // Redirecionar se não estiver autenticado
  useEffect(() => {
    if (!user) {
      // Em um ambiente real, redirecionaria para a página de login
      console.log('Usuário não autenticado');
    }
  }, [user]);

  const handleLogout = () => {
    logout();
    // Em um ambiente real, redirecionaria para a página inicial
  };

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Você precisa estar logado para acessar esta página</h2>
          <Link
            to="/login"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Fazer Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Minha Conta</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Menu lateral */}
        <div className="lg:w-1/4">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                  {user.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h2 className="font-semibold">{user.name}</h2>
                  <p className="text-gray-600 text-sm">{user.email}</p>
                </div>
              </div>
            </div>
            <nav className="p-4">
              <ul className="space-y-2">
                <li>
                  <Link to="/perfil" className="block px-4 py-2 rounded-lg bg-blue-50 text-blue-600 font-medium">
                    Visão Geral
                  </Link>
                </li>
                <li>
                  <Link to="/perfil/pedidos" className="block px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-700">
                    Meus Pedidos
                  </Link>
                </li>
                <li>
                  <Link to="/perfil/enderecos" className="block px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-700">
                    Endereços
                  </Link>
                </li>
                <li>
                  <Link to="/perfil/pagamentos" className="block px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-700">
                    Métodos de Pagamento
                  </Link>
                </li>
                <li>
                  <Link to="/favoritos" className="block px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-700">
                    Lista de Desejos
                  </Link>
                </li>
                <li>
                  <Link to="/perfil/configuracoes" className="block px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-700">
                    Configurações
                  </Link>
                </li>
                <li>
                  <button 
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 text-red-600"
                  >
                    Sair
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        
        {/* Conteúdo principal */}
        <div className="lg:w-3/4">
          {/* Resumo */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-medium text-gray-500 mb-2">Pedidos</h3>
              <p className="text-3xl font-bold">{orders.length}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-medium text-gray-500 mb-2">Lista de Desejos</h3>
              <p className="text-3xl font-bold">5</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-medium text-gray-500 mb-2">Avaliações</h3>
              <p className="text-3xl font-bold">2</p>
            </div>
          </div>
          
          {/* Pedidos recentes */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-semibold">Pedidos Recentes</h2>
              <Link to="/perfil/pedidos" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Ver todos
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Pedido
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Data
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{order.id}</div>
                        <div className="text-sm text-gray-500">{order.items} itens</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {(order.total / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${order.status === 'Entregue' ? 'bg-green-100 text-green-800' : 
                            order.status === 'Em processamento' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <Link to={`/perfil/pedidos/${order.id}`} className="text-blue-600 hover:text-blue-800">
                          Detalhes
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Informações pessoais */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-semibold">Informações Pessoais</h2>
              <Link to="/perfil/editar" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Editar
              </Link>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Nome completo</h3>
                  <p className="text-gray-800">{user.name}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Email</h3>
                  <p className="text-gray-800">{user.email}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Telefone</h3>
                  <p className="text-gray-800">+244 923 456 789</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Tipo de conta</h3>
                  <p className="text-gray-800">{user.accountType === 'buyer' ? 'Comprador' : 'Vendedor'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
