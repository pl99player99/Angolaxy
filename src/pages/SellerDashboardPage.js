import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
        return (_jsx("div", { className: "container mx-auto px-4 py-16 text-center", children: _jsxs("div", { className: "max-w-md mx-auto", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-800 mb-6", children: !user ? 'Você precisa estar logado para acessar o painel de vendedor' : 'Você não tem permissão para acessar esta página' }), _jsx(Link, { to: !user ? "/login" : "/", className: "inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors", children: !user ? 'Fazer Login' : 'Voltar para a página inicial' })] }) }));
    }
    return (_jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsx("h1", { className: "text-3xl font-bold mb-8", children: "Painel do Vendedor" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8", children: [_jsxs("div", { className: "bg-white rounded-lg shadow-sm p-6", children: [_jsx("h3", { className: "font-medium text-gray-500 mb-2", children: "Vendas" }), _jsx("p", { className: "text-3xl font-bold", children: stats.sales })] }), _jsxs("div", { className: "bg-white rounded-lg shadow-sm p-6", children: [_jsx("h3", { className: "font-medium text-gray-500 mb-2", children: "Receita" }), _jsx("p", { className: "text-3xl font-bold", children: (stats.revenue / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' }) })] }), _jsxs("div", { className: "bg-white rounded-lg shadow-sm p-6", children: [_jsx("h3", { className: "font-medium text-gray-500 mb-2", children: "Produtos" }), _jsx("p", { className: "text-3xl font-bold", children: stats.products })] }), _jsxs("div", { className: "bg-white rounded-lg shadow-sm p-6", children: [_jsx("h3", { className: "font-medium text-gray-500 mb-2", children: "Visualiza\u00E7\u00F5es" }), _jsx("p", { className: "text-3xl font-bold", children: stats.views })] })] }), _jsxs("div", { className: "bg-white rounded-lg shadow-sm overflow-hidden mb-8", children: [_jsxs("div", { className: "p-6 border-b border-gray-200 flex justify-between items-center", children: [_jsx("h2", { className: "text-xl font-semibold", children: "Meus Produtos" }), _jsx(Link, { to: "/vender/produtos/novo", className: "bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors", children: "Adicionar Produto" })] }), _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "w-full", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Produto" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Pre\u00E7o" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Estoque" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Vendas" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Status" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "A\u00E7\u00F5es" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: products.map((product) => (_jsxs("tr", { children: [_jsxs("td", { className: "px-6 py-4 whitespace-nowrap", children: [_jsx("div", { className: "font-medium text-gray-900", children: product.name }), _jsxs("div", { className: "text-sm text-gray-500", children: ["ID: ", product.id] })] }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: (product.price / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: product.stock }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: product.sales }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsx("span", { className: `px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${product.status === 'active' ? 'bg-green-100 text-green-800' :
                                                        product.status === 'out_of_stock' ? 'bg-red-100 text-red-800' :
                                                            'bg-yellow-100 text-yellow-800'}`, children: product.status === 'active' ? 'Ativo' :
                                                        product.status === 'out_of_stock' ? 'Sem estoque' : 'Rascunho' }) }), _jsxs("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: [_jsx(Link, { to: `/vender/produtos/${product.id}`, className: "text-blue-600 hover:text-blue-800 mr-3", children: "Editar" }), _jsx("button", { className: "text-red-600 hover:text-red-800", children: "Excluir" })] })] }, product.id))) })] }) })] }), _jsxs("div", { className: "bg-white rounded-lg shadow-sm overflow-hidden", children: [_jsxs("div", { className: "p-6 border-b border-gray-200 flex justify-between items-center", children: [_jsx("h2", { className: "text-xl font-semibold", children: "Pedidos Recentes" }), _jsx(Link, { to: "/vender/pedidos", className: "text-blue-600 hover:text-blue-800 text-sm font-medium", children: "Ver todos" })] }), _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "w-full", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Pedido" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Data" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Cliente" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Total" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Status" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "A\u00E7\u00F5es" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: orders.map((order) => (_jsxs("tr", { children: [_jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsx("div", { className: "font-medium text-gray-900", children: order.id }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: order.date }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: order.customer }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: (order.total / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsx("span", { className: `px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                                                        order.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                                                            'bg-blue-100 text-blue-800'}`, children: order.status === 'delivered' ? 'Entregue' :
                                                        order.status === 'processing' ? 'Em processamento' : 'Enviado' }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: _jsx(Link, { to: `/vender/pedidos/${order.id}`, className: "text-blue-600 hover:text-blue-800", children: "Detalhes" }) })] }, order.id))) })] }) })] })] }));
};
export default SellerDashboardPage;
