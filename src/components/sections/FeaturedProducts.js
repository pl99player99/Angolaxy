import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Componente FeaturedProducts - Seção para exibir produtos em destaque
 *
 * Este componente é usado para exibir uma seção de produtos em destaque,
 * com título e link opcional para ver mais produtos.
 */
const FeaturedProducts = ({ title, children, viewMoreLink }) => {
    return (_jsx("section", { className: "py-16", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h2", { className: "text-3xl font-bold mb-8 text-center", children: title }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: children }), viewMoreLink && (_jsx("div", { className: "text-center mt-8", children: _jsx("a", { href: viewMoreLink, className: "inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors", children: "Ver Mais Produtos" }) }))] }) }));
};
export default FeaturedProducts;
