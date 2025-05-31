import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
        return (_jsx("div", { className: "container mx-auto px-4 py-16 text-center", children: _jsxs("div", { className: "max-w-md mx-auto", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-800 mb-6", children: "Voc\u00EA precisa estar logado para acessar esta p\u00E1gina" }), _jsx(Link, { to: "/login", className: "inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors", children: "Fazer Login" })] }) }));
    }
    return (_jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsx("h1", { className: "text-3xl font-bold mb-8", children: "Minha Conta" }), _jsxs("div", { className: "flex flex-col lg:flex-row gap-8", children: [_jsx("div", { className: "lg:w-1/4", children: _jsxs("div", { className: "bg-white rounded-lg shadow-sm overflow-hidden", children: [_jsx("div", { className: "p-6 border-b border-gray-200", children: _jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl", children: user.name.charAt(0) }), _jsxs("div", { className: "ml-4", children: [_jsx("h2", { className: "font-semibold", children: user.name }), _jsx("p", { className: "text-gray-600 text-sm", children: user.email })] })] }) }), _jsx("nav", { className: "p-4", children: _jsxs("ul", { className: "space-y-2", children: [_jsx("li", { children: _jsx(Link, { to: "/perfil", className: "block px-4 py-2 rounded-lg bg-blue-50 text-blue-600 font-medium", children: "Vis\u00E3o Geral" }) }), _jsx("li", { children: _jsx(Link, { to: "/perfil/pedidos", className: "block px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-700", children: "Meus Pedidos" }) }), _jsx("li", { children: _jsx(Link, { to: "/perfil/enderecos", className: "block px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-700", children: "Endere\u00E7os" }) }), _jsx("li", { children: _jsx(Link, { to: "/perfil/pagamentos", className: "block px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-700", children: "M\u00E9todos de Pagamento" }) }), _jsx("li", { children: _jsx(Link, { to: "/favoritos", className: "block px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-700", children: "Lista de Desejos" }) }), _jsx("li", { children: _jsx(Link, { to: "/perfil/configuracoes", className: "block px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-700", children: "Configura\u00E7\u00F5es" }) }), _jsx("li", { children: _jsx("button", { onClick: handleLogout, className: "block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 text-red-600", children: "Sair" }) })] }) })] }) }), _jsxs("div", { className: "lg:w-3/4", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: [_jsxs("div", { className: "bg-white rounded-lg shadow-sm p-6", children: [_jsx("h3", { className: "font-medium text-gray-500 mb-2", children: "Pedidos" }), _jsx("p", { className: "text-3xl font-bold", children: orders.length })] }), _jsxs("div", { className: "bg-white rounded-lg shadow-sm p-6", children: [_jsx("h3", { className: "font-medium text-gray-500 mb-2", children: "Lista de Desejos" }), _jsx("p", { className: "text-3xl font-bold", children: "5" })] }), _jsxs("div", { className: "bg-white rounded-lg shadow-sm p-6", children: [_jsx("h3", { className: "font-medium text-gray-500 mb-2", children: "Avalia\u00E7\u00F5es" }), _jsx("p", { className: "text-3xl font-bold", children: "2" })] })] }), _jsxs("div", { className: "bg-white rounded-lg shadow-sm overflow-hidden mb-8", children: [_jsxs("div", { className: "p-6 border-b border-gray-200 flex justify-between items-center", children: [_jsx("h2", { className: "text-xl font-semibold", children: "Pedidos Recentes" }), _jsx(Link, { to: "/perfil/pedidos", className: "text-blue-600 hover:text-blue-800 text-sm font-medium", children: "Ver todos" })] }), _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "w-full", children: [_jsx("thead", { className: "bg-gray-50", children: _jsxs("tr", { children: [_jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Pedido" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Data" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Total" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Status" }), _jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "A\u00E7\u00F5es" })] }) }), _jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: orders.map((order) => (_jsxs("tr", { children: [_jsxs("td", { className: "px-6 py-4 whitespace-nowrap", children: [_jsx("div", { className: "font-medium text-gray-900", children: order.id }), _jsxs("div", { className: "text-sm text-gray-500", children: [order.items, " itens"] })] }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: order.date }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: (order.total / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap", children: _jsx("span", { className: `px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${order.status === 'Entregue' ? 'bg-green-100 text-green-800' :
                                                                        order.status === 'Em processamento' ? 'bg-yellow-100 text-yellow-800' :
                                                                            'bg-red-100 text-red-800'}`, children: order.status }) }), _jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: _jsx(Link, { to: `/perfil/pedidos/${order.id}`, className: "text-blue-600 hover:text-blue-800", children: "Detalhes" }) })] }, order.id))) })] }) })] }), _jsxs("div", { className: "bg-white rounded-lg shadow-sm overflow-hidden", children: [_jsxs("div", { className: "p-6 border-b border-gray-200 flex justify-between items-center", children: [_jsx("h2", { className: "text-xl font-semibold", children: "Informa\u00E7\u00F5es Pessoais" }), _jsx(Link, { to: "/perfil/editar", className: "text-blue-600 hover:text-blue-800 text-sm font-medium", children: "Editar" })] }), _jsx("div", { className: "p-6", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-sm font-medium text-gray-500 mb-1", children: "Nome completo" }), _jsx("p", { className: "text-gray-800", children: user.name })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-sm font-medium text-gray-500 mb-1", children: "Email" }), _jsx("p", { className: "text-gray-800", children: user.email })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-sm font-medium text-gray-500 mb-1", children: "Telefone" }), _jsx("p", { className: "text-gray-800", children: "+244 923 456 789" })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-sm font-medium text-gray-500 mb-1", children: "Tipo de conta" }), _jsx("p", { className: "text-gray-800", children: user.accountType === 'buyer' ? 'Comprador' : 'Vendedor' })] })] }) })] })] })] })] }));
};
export default ProfilePage;
