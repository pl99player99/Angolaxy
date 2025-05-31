import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon, HeartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const categories = [
        { name: 'Eletrônicos', path: '/categorias/eletronicos' },
        { name: 'Moda', path: '/categorias/moda' },
        { name: 'Casa & Decoração', path: '/categorias/casa-decoracao' },
        { name: 'Saúde & Beleza', path: '/categorias/saude-beleza' },
        { name: 'Supermercado', path: '/categorias/supermercado' },
        { name: 'Esportes', path: '/categorias/esportes' }
    ];
    const handleSearch = (e) => {
        e.preventDefault();
        // Implementar lógica de busca
        console.log('Pesquisando por:', searchQuery);
    };
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (_jsxs("header", { className: "bg-white shadow-sm", children: [_jsx("div", { className: "container mx-auto px-4 py-4", children: _jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between", children: [_jsx("div", { className: "flex items-center mb-4 md:mb-0", children: _jsx(Link, { to: "/", className: "text-3xl font-bold text-blue-600", children: "Angolaxy" }) }), _jsx("div", { className: "w-full md:w-1/2 mb-4 md:mb-0", children: _jsxs("form", { onSubmit: handleSearch, className: "flex", children: [_jsx("input", { type: "text", placeholder: "O que voc\u00EA est\u00E1 procurando?", className: "w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value) }), _jsx("button", { type: "submit", className: "bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700", children: _jsx(MagnifyingGlassIcon, { className: "h-5 w-5" }) })] }) }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx(Link, { to: "/favoritos", className: "text-gray-700 hover:text-blue-600", children: _jsx(HeartIcon, { className: "h-6 w-6" }) }), _jsxs(Link, { to: "/carrinho", className: "text-gray-700 hover:text-blue-600 relative", children: [_jsx(ShoppingCartIcon, { className: "h-6 w-6" }), _jsx("span", { className: "absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center", children: "0" })] }), _jsx(Link, { to: "/login", className: "text-gray-700 hover:text-blue-600", children: _jsx(UserIcon, { className: "h-6 w-6" }) }), _jsx("button", { className: "md:hidden text-gray-700", onClick: toggleMenu, children: isMenuOpen ? (_jsx(XMarkIcon, { className: "h-6 w-6" })) : (_jsx(Bars3Icon, { className: "h-6 w-6" })) })] })] }) }), _jsx("nav", { className: `bg-gray-50 border-t border-gray-300 ${isMenuOpen ? 'block' : 'hidden md:block'}`, children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("ul", { className: "flex flex-col md:flex-row md:space-x-8 py-2", children: [categories.map((category, index) => (_jsx("li", { children: _jsx(Link, { to: category.path, className: "block py-2 text-gray-700 hover:text-blue-600", children: category.name }) }, index))), _jsx("li", { children: _jsx(Link, { to: "/vender", className: "block py-2 font-semibold text-blue-600 hover:text-blue-800", children: "Vender" }) })] }) }) })] }));
};
export default Header;
