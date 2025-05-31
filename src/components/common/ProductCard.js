import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
/**
 * Componente ProductCard - Card reutilizável para exibição de produtos
 *
 * Este componente é usado em várias páginas para exibir produtos de forma consistente,
 * incluindo imagem, nome, preço, avaliações e botão de adicionar ao carrinho.
 */
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
const ProductCard = ({ product }) => {
    const { addItem } = useCart();
    // Calcular preço com desconto se aplicável
    const discountedPrice = product.discount
        ? product.price - (product.price * product.discount / 100)
        : product.price;
    // Função para adicionar o produto ao carrinho
    const handleAddToCart = (e) => {
        e.preventDefault(); // Evita navegação para a página do produto
        e.stopPropagation(); // Evita propagação do evento
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    };
    return (_jsx("div", { className: "bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow", children: _jsxs(Link, { to: `/produto/${product.id}`, children: [_jsxs("div", { className: "h-48 bg-gray-200 relative", children: [product.discount && product.discount > 0 && (_jsxs("div", { className: "absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-lg", children: ["-", product.discount, "%"] })), _jsx("div", { className: "w-full h-full flex items-center justify-center text-gray-500", children: "Imagem do Produto" })] }), _jsxs("div", { className: "p-4", children: [_jsx("h3", { className: "font-semibold text-gray-800 mb-2 line-clamp-2", children: product.name }), _jsxs("div", { className: "flex items-center mb-2", children: [_jsx("div", { className: "flex text-yellow-400", children: [...Array(5)].map((_, i) => (_jsx("span", { className: i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300', children: "\u2605" }, i))) }), _jsxs("span", { className: "text-gray-600 text-sm ml-2", children: ["(", product.reviews, ")"] })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("div", { children: product.discount && product.discount > 0 ? (_jsxs(_Fragment, { children: [_jsx("span", { className: "text-gray-500 line-through text-sm mr-2", children: (product.price / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' }) }), _jsx("span", { className: "font-bold text-blue-600", children: (discountedPrice / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' }) })] })) : (_jsx("span", { className: "font-bold text-gray-800", children: (product.price / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' }) })) }), _jsx("button", { onClick: handleAddToCart, className: "bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors", "aria-label": "Adicionar ao carrinho", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: _jsx("path", { d: "M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" }) }) })] })] })] }) }));
};
export default ProductCard;
