import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
const CategoryPage = () => {
    const { category } = useParams();
    // Função para formatar o nome da categoria
    const formatCategoryName = (slug) => {
        if (!slug)
            return '';
        return slug
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };
    const categoryName = formatCategoryName(category || '');
    // Dados simulados para produtos da categoria
    const products = [
        {
            id: 1,
            name: 'Smartphone XYZ Pro',
            price: 120000,
            image: '/src/assets/products/smartphone.jpg',
            rating: 4.5,
            reviews: 120,
            discount: 10
        },
        {
            id: 2,
            name: 'Notebook Ultra Slim',
            price: 350000,
            image: '/src/assets/products/laptop.jpg',
            rating: 4.8,
            reviews: 85,
            discount: 5
        },
        {
            id: 3,
            name: 'Fones de Ouvido Bluetooth',
            price: 25000,
            image: '/src/assets/products/headphones.jpg',
            rating: 4.2,
            reviews: 230,
            discount: 15
        },
        {
            id: 4,
            name: 'Smartwatch Fitness',
            price: 45000,
            image: '/src/assets/products/smartwatch.jpg',
            rating: 4.0,
            reviews: 67,
            discount: 0
        },
        {
            id: 5,
            name: 'Câmera Digital 4K',
            price: 180000,
            image: '/src/assets/products/camera.jpg',
            rating: 4.7,
            reviews: 42,
            discount: 0
        },
        {
            id: 6,
            name: 'Tênis Esportivo Pro',
            price: 35000,
            image: '/src/assets/products/shoes.jpg',
            rating: 4.3,
            reviews: 56,
            discount: 0
        }
    ];
    // Filtros simulados
    const filters = {
        price: [
            { id: 'price-1', label: 'Até 10.000 AOA' },
            { id: 'price-2', label: '10.000 - 50.000 AOA' },
            { id: 'price-3', label: '50.000 - 100.000 AOA' },
            { id: 'price-4', label: 'Acima de 100.000 AOA' }
        ],
        rating: [
            { id: 'rating-5', label: '5 estrelas' },
            { id: 'rating-4', label: '4+ estrelas' },
            { id: 'rating-3', label: '3+ estrelas' }
        ],
        discount: [
            { id: 'discount-1', label: 'Em promoção' }
        ]
    };
    useEffect(() => {
        // Simular carregamento de produtos da categoria
        console.log(`Carregando produtos da categoria: ${category}`);
    }, [category]);
    return (_jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsxs("div", { className: "text-sm text-gray-500 mb-6", children: [_jsx(Link, { to: "/", className: "hover:text-blue-600", children: "Home" }), " >", _jsx(Link, { to: "/categorias", className: "hover:text-blue-600", children: " Categorias" }), " >", _jsxs("span", { className: "text-gray-700", children: [" ", categoryName] })] }), _jsx("h1", { className: "text-3xl font-bold mb-8", children: categoryName }), _jsxs("div", { className: "flex flex-col lg:flex-row gap-8", children: [_jsx("div", { className: "lg:w-1/4", children: _jsxs("div", { className: "bg-white rounded-lg shadow-sm p-6", children: [_jsx("h2", { className: "text-xl font-semibold mb-6", children: "Filtros" }), _jsxs("div", { className: "mb-6", children: [_jsx("h3", { className: "font-medium mb-3", children: "Pre\u00E7o" }), _jsx("div", { className: "space-y-2", children: filters.price.map(filter => (_jsxs("div", { className: "flex items-center", children: [_jsx("input", { type: "checkbox", id: filter.id, className: "h-4 w-4 text-blue-600 border-gray-300 rounded" }), _jsx("label", { htmlFor: filter.id, className: "ml-2 text-gray-700", children: filter.label })] }, filter.id))) })] }), _jsxs("div", { className: "mb-6", children: [_jsx("h3", { className: "font-medium mb-3", children: "Avalia\u00E7\u00E3o" }), _jsx("div", { className: "space-y-2", children: filters.rating.map(filter => (_jsxs("div", { className: "flex items-center", children: [_jsx("input", { type: "checkbox", id: filter.id, className: "h-4 w-4 text-blue-600 border-gray-300 rounded" }), _jsx("label", { htmlFor: filter.id, className: "ml-2 text-gray-700", children: filter.label })] }, filter.id))) })] }), _jsxs("div", { className: "mb-6", children: [_jsx("h3", { className: "font-medium mb-3", children: "Ofertas" }), _jsx("div", { className: "space-y-2", children: filters.discount.map(filter => (_jsxs("div", { className: "flex items-center", children: [_jsx("input", { type: "checkbox", id: filter.id, className: "h-4 w-4 text-blue-600 border-gray-300 rounded" }), _jsx("label", { htmlFor: filter.id, className: "ml-2 text-gray-700", children: filter.label })] }, filter.id))) })] }), _jsx("button", { className: "w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors", children: "Aplicar Filtros" })] }) }), _jsxs("div", { className: "lg:w-3/4", children: [_jsxs("div", { className: "bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-col sm:flex-row justify-between items-center", children: [_jsx("div", { className: "mb-4 sm:mb-0", children: _jsxs("span", { className: "text-gray-600", children: ["Mostrando ", products.length, " produtos"] }) }), _jsxs("div", { className: "flex items-center", children: [_jsx("span", { className: "text-gray-600 mr-2", children: "Ordenar por:" }), _jsxs("select", { className: "border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500", children: [_jsx("option", { children: "Relev\u00E2ncia" }), _jsx("option", { children: "Pre\u00E7o: Menor para Maior" }), _jsx("option", { children: "Pre\u00E7o: Maior para Menor" }), _jsx("option", { children: "Avalia\u00E7\u00F5es" }), _jsx("option", { children: "Mais Recentes" })] })] })] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: products.map(product => (_jsx("div", { className: "bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow", children: _jsxs(Link, { to: `/produto/${product.id}`, children: [_jsxs("div", { className: "h-48 bg-gray-200 relative", children: [product.discount > 0 && (_jsxs("div", { className: "absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-lg", children: ["-", product.discount, "%"] })), _jsx("div", { className: "w-full h-full flex items-center justify-center text-gray-500", children: "Imagem do Produto" })] }), _jsxs("div", { className: "p-4", children: [_jsx("h3", { className: "font-semibold text-gray-800 mb-2 line-clamp-2", children: product.name }), _jsxs("div", { className: "flex items-center mb-2", children: [_jsx("div", { className: "flex text-yellow-400", children: [...Array(5)].map((_, i) => (_jsx("span", { children: "\u2605" }, i))) }), _jsxs("span", { className: "text-gray-600 text-sm ml-2", children: ["(", product.reviews, ")"] })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "font-bold text-gray-800", children: (product.price / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' }) }), _jsx("button", { className: "bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: _jsx("path", { d: "M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" }) }) })] })] })] }) }, product.id))) }), _jsx("div", { className: "mt-8 flex justify-center", children: _jsxs("nav", { className: "flex items-center", children: [_jsx("button", { className: "px-3 py-1 border border-gray-300 rounded-l-lg hover:bg-gray-100", children: "Anterior" }), _jsx("button", { className: "px-3 py-1 border-t border-b border-gray-300 bg-blue-600 text-white", children: "1" }), _jsx("button", { className: "px-3 py-1 border-t border-b border-gray-300 hover:bg-gray-100", children: "2" }), _jsx("button", { className: "px-3 py-1 border-t border-b border-gray-300 hover:bg-gray-100", children: "3" }), _jsx("button", { className: "px-3 py-1 border border-gray-300 rounded-r-lg hover:bg-gray-100", children: "Pr\u00F3ximo" })] }) })] })] })] }));
};
export default CategoryPage;
