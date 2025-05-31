import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Componente PromotionBanner - Banner promocional
 *
 * Este componente é usado para exibir banners promocionais
 * com título, subtítulo e botão de ação.
 */
const PromotionBanner = ({ title, subtitle, buttonText, buttonLink }) => {
    return (_jsx("section", { className: "py-8 bg-blue-100", children: _jsx("div", { className: "container mx-auto px-4", children: _jsx("div", { className: "bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white", children: _jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-2xl font-bold mb-2", children: title }), _jsx("p", { className: "mb-4", children: subtitle })] }), _jsx("a", { href: buttonLink, className: "bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors", children: buttonText })] }) }) }) }));
};
export default PromotionBanner;
