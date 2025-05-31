import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Componente CategoryCard - Card reutilizável para exibição de categorias
 *
 * Este componente é usado na página inicial e na página de categorias
 * para exibir as diferentes categorias de produtos disponíveis.
 */
import { Link } from 'react-router-dom';
const CategoryCard = ({ category }) => {
    return (_jsx(Link, { to: category.path, className: "block", children: _jsxs("div", { className: "bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow", children: [_jsx("div", { className: "w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center", children: _jsx("div", { className: "w-10 h-10 bg-blue-600 rounded-full opacity-20" }) }), _jsx("h3", { className: "font-semibold text-gray-800", children: category.name })] }) }));
};
export default CategoryCard;
