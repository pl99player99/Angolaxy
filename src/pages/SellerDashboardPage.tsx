import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const SellerDashboardPage = () => {
  const { user } = useAuth();
  
  // Dados simulados para o dashboard do vendedor
  const stats = {
    sales: 24,
    revenue: 1250000,
    products: 15,
    views: 342
  };
  
  // Dados simulados para produtos
  const products = [
    {
      id: 1,
      name: 'Smartphone XYZ Pro',
      price: 120000,
      stock: 8,
      sales: 12,
      status: 'active'
    },
    {
      id: 2,
      name: 'Notebook Ultra Slim',
      price: 350000,
      stock: 3,
      sales: 5,
      status: 'active'
    },
    {
      id: 3,
      name: 'Fones de Ouvido Bluetooth',
      price: 25000,
      stock: 0,
      sales: 7,
      status: 'out_of_stock'
    }
  ];
  
  // Dados simulados para pedidos recentes
  const orders = [
    {
      id: 'ORD-12345',
      date: '15/05/2025',
      customer: 'João Silva',
      total: 120000,
      status: 'delivered'
    },
    {
      id: 'ORD-12346',
      date: '28/04/2025',
      customer: 'Maria Santos',
      total: 350000,
      status: 'processing'
    },
    {
      id: 'ORD-12347',
      date: '10/04/2025',
      customer: 'Pedro Alves',
      total: 25000,
      status: 'shipped'
    }
  ];

  // Verificar se o usuário está autenticado e é um vendedor
  if (!user || user.accountType !== 'seller') {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {!user ? 'Você precisa estar logado para acessar o painel de vendedor' : 'Você não tem permissão para acessar esta página'}
          </h2>
          <Link
            to={!user ? "/login" : "/"}
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            {!user ? 'Fazer Login' : 'Voltar para a página inicial'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Painel do Vendedor</h1>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="font-medium text-gray-500 mb-2">Vendas</h3>
          <p className="text-3xl font-bold">{stats.sales}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="font-medium text-gray-500 mb-2">Receita</h3>
          <p className="text-3xl font-bold">
            {(stats.revenue / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="font-medium text-gray-500 mb-2">Produtos</h3>
          <p className="text-3xl font-bold">{stats.products}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="font-medium text-gray-500 mb-2">Visualizações</h3>
          <p className="text-3xl font-bold">{stats.views}</p>
        </div>
      </div>

      {/* Produtos */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Meus Produtos</h2>
          <Link to="/vender/produtos/novo" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Adicionar Produto
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Produto
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Preço
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estoque
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vendas
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
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{product.name}</div>
                    <div className="text-sm text-gray-500">ID: {product.id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {(product.price / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.stock}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.sales}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${product.status === 'active' ? 'bg-green-100 text-green-800' : 
                        product.status === 'out_of_stock' ? 'bg-red-100 text-red-800' : 
                        'bg-yellow-100 text-yellow-800'}`}>
                      {product.status === 'active' ? 'Ativo' : 
                       product.status === 'out_of_stock' ? 'Sem estoque' : 'Rascunho'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <Link to={`/vender/produtos/${product.id}`} className="text-blue-600 hover:text-blue-800 mr-3">
                      Editar
                    </Link>
                    <button className="text-red-600 hover:text-red-800">
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pedidos recentes */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Pedidos Recentes</h2>
          <Link to="/vender/pedidos" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
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
                  Cliente
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
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {(order.total / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${order.status === 'delivered' ? 'bg-green-100 text-green-800' : 
                        order.status === 'processing' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-blue-100 text-blue-800'}`}>
                      {order.status === 'delivered' ? 'Entregue' : 
                       order.status === 'processing' ? 'Em processamento' : 'Enviado'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <Link to={`/vender/pedidos/${order.id}`} className="text-blue-600 hover:text-blue-800">
                      Detalhes
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboardPage;
