import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Componente HeroBanner - Banner principal para páginas
 *
 * Este componente é usado principalmente na página inicial para
 * exibir um banner promocional com título, subtítulo e botões de ação.
 */
const HeroBanner = ({ title, subtitle, primaryButtonText, primaryButtonLink, secondaryButtonText, secondaryButtonLink, children }) => {
    return (_jsx("section", { className: "bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "flex flex-col md:flex-row items-center", children: [_jsxs("div", { className: "md:w-1/2 md:mr-12 mb-8 md:mb-0", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-4", children: title }), _jsx("p", { className: "text-xl mb-6", children: subtitle }), _jsxs("div", { className: "flex space-x-4", children: [_jsx("a", { href: primaryButtonLink, className: "bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors", children: primaryButtonText }), secondaryButtonText && secondaryButtonLink && (_jsx("a", { href: secondaryButtonLink, className: "bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors", children: secondaryButtonText }))] })] }), _jsx("div", { className: "md:w-1/2", children: children || (_jsx("div", { className: "bg-white/20 rounded-lg h-64 w-full flex items-center justify-center", children: _jsx("span", { className: "text-white/70", children: "Banner Image" }) })) })] }) }) }));
};
export default HeroBanner;
