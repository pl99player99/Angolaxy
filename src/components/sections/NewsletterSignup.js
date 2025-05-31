import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Componente NewsletterSignup - Formulário de inscrição para newsletter
 *
 * Este componente é usado para exibir um formulário de inscrição
 * para newsletter com título, subtítulo e botão de ação.
 */
const NewsletterSignup = ({ title, subtitle, buttonText }) => {
    return (_jsx("section", { className: "py-16 bg-gray-50", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: title }), _jsx("p", { className: "text-gray-600 mb-6", children: subtitle }), _jsxs("form", { className: "flex flex-col md:flex-row gap-4", children: [_jsx("input", { type: "email", placeholder: "Seu endere\u00E7o de e-mail", className: "flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500", required: true }), _jsx("button", { type: "submit", className: "bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors", children: buttonText })] })] }) }) }));
};
export default NewsletterSignup;
