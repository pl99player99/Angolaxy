import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const NotFoundPage = () => {
    useEffect(() => {
        // Poderia registrar analytics de páginas não encontradas
        console.log('Página não encontrada acessada');
    }, []);
    return (_jsx("div", { className: "container mx-auto px-4 py-16 text-center", children: _jsxs("div", { className: "max-w-md mx-auto", children: [_jsx("h1", { className: "text-6xl font-bold text-blue-600 mb-4", children: "404" }), _jsx("h2", { className: "text-3xl font-bold text-gray-800 mb-6", children: "P\u00E1gina n\u00E3o encontrada" }), _jsx("p", { className: "text-gray-600 mb-8", children: "A p\u00E1gina que voc\u00EA est\u00E1 procurando n\u00E3o existe ou foi movida." }), _jsx(Link, { to: "/", className: "inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors", children: "Voltar para a p\u00E1gina inicial" })] }) }));
};
export default NotFoundPage;
