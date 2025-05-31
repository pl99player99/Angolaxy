import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
const HomePage = () => {
    // Dados simulados para categorias
    const categories = [
        { id: 1, name: 'Eletrônicos', image: '/images/electronics.jpg', path: '/categorias/eletronicos' },
        { id: 2, name: 'Moda', image: '/images/fashion.jpg', path: '/categorias/moda' },
        { id: 3, name: 'Casa & Decoração', image: '/images/home.jpg', path: '/categorias/casa-decoracao' },
        { id: 4, name: 'Saúde & Beleza', image: '/images/beauty.jpg', path: '/categorias/saude-beleza' },
        { id: 5, name: 'Supermercado', image: '/images/grocery.jpg', path: '/categorias/supermercado' },
        { id: 6, name: 'Esportes', image: '/images/sports.jpg', path: '/categorias/esportes' }
    ];
    // Dados simulados para produtos em destaque
    const featuredProducts = [
        {
            id: 1,
            name: 'Smartphone XYZ Pro',
            price: 120000,
            image: '/images/smartphone.jpg',
            rating: 4.5,
            reviews: 120,
            discount: 10
        },
        {
            id: 2,
            name: 'Notebook Ultra Slim',
            price: 350000,
            image: '/images/laptop.jpg',
            rating: 4.8,
            reviews: 85,
            discount: 5
        },
        {
            id: 3,
            name: 'Fones de Ouvido Bluetooth',
            price: 25000,
            image: '/images/headphones.jpg',
            rating: 4.2,
            reviews: 230,
            discount: 15
        },
        {
            id: 4,
            name: 'Smartwatch Fitness',
            price: 45000,
            image: '/images/smartwatch.jpg',
            rating: 4.0,
            reviews: 67,
            discount: 0
        }
    ];
    // Dados simulados para produtos recentes
    const newProducts = [
        {
            id: 5,
            name: 'Câmera Digital 4K',
            price: 180000,
            image: '/images/camera.jpg',
            rating: 4.7,
            reviews: 42,
            discount: 0
        },
        {
            id: 6,
            name: 'Tênis Esportivo Pro',
            price: 35000,
            image: '/images/shoes.jpg',
            rating: 4.3,
            reviews: 56,
            discount: 0
        },
        {
            id: 7,
            name: 'Mochila Impermeável',
            price: 18000,
            image: '/images/backpack.jpg',
            rating: 4.6,
            reviews: 98,
            discount: 8
        },
        {
            id: 8,
            name: 'Cafeteira Automática',
            price: 65000,
            image: '/images/coffeemaker.jpg',
            rating: 4.4,
            reviews: 73,
            discount: 12
        }
    ];
    return (_jsxs("div", { children: [_jsx("section", { className: "bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "flex flex-col md:flex-row items-center", children: [_jsxs("div", { className: "md:w-1/2 md:mr-12 mb-8 md:mb-0", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-4", children: "Bem-vindo ao Angolaxy" }), _jsx("p", { className: "text-xl mb-6", children: "O seu marketplace angolano para compra e venda online com seguran\u00E7a e confian\u00E7a." }), _jsxs("div", { className: "flex space-x-4", children: [_jsx(Link, { to: "/categorias", className: "bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors", children: "Explorar" }), _jsx(Link, { to: "/vender", className: "bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors", children: "Vender" })] })] }), _jsx("div", { className: "md:w-1/2", children: _jsx("img", { src: "/images/hero-image.jpg", alt: "Angolaxy Marketplace", className: "rounded-lg shadow-lg" }) })] }) }) }), _jsx("section", { className: "py-16 bg-gray-50", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h2", { className: "text-3xl font-bold mb-8 text-center", children: "Categorias Populares" }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4", children: categories.map((category) => (_jsx(Link, { to: category.path, className: "block", children: _jsxs("div", { className: "bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow", children: [_jsx("div", { className: "w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden", children: _jsx("img", { src: category.image, alt: category.name, className: "w-full h-full object-cover" }) }), _jsx("h3", { className: "font-semibold text-gray-800", children: category.name })] }) }, category.id))) })] }) }), _jsx("section", { className: "py-16", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h2", { className: "text-3xl font-bold mb-8 text-center", children: "Produtos em Destaque" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: featuredProducts.map((product) => (_jsx("div", { className: "bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow", children: _jsxs(Link, { to: `/produto/${product.id}`, children: [_jsxs("div", { className: "h-64 bg-gray-200 relative", children: [product.discount > 0 && (_jsxs("div", { className: "absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-lg", children: ["-", product.discount, "%"] })), _jsx("img", { src: product.image, alt: product.name, className: "w-full h-full object-cover" })] }), _jsxs("div", { className: "p-4", children: [_jsx("h3", { className: "font-semibold text-gray-800 mb-2 line-clamp-2", children: product.name }), _jsxs("div", { className: "flex items-center mb-2", children: [_jsx("div", { className: "flex text-yellow-400", children: [...Array(5)].map((_, i) => (_jsx("span", { children: "\u2605" }, i))) }), _jsxs("span", { className: "text-gray-600 text-sm ml-2", children: ["(", product.reviews, ")"] })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "font-bold text-gray-800", children: (product.price / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' }) }), _jsx("button", { className: "bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: _jsx("path", { d: "M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" }) }) })] })] })] }) }, product.id))) }), _jsx("div", { className: "text-center mt-8", children: _jsx(Link, { to: "/produtos", className: "inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors", children: "Ver Mais Produtos" }) })] }) }), _jsx("section", { className: "py-8 bg-blue-100", children: _jsx("div", { className: "container mx-auto px-4", children: _jsx("div", { className: "bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white", children: _jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-2xl font-bold mb-2", children: "Venda seus produtos no Angolaxy" }), _jsx("p", { className: "mb-4", children: "Alcance milhares de clientes em toda Angola" })] }), _jsx(Link, { to: "/vender", className: "bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors", children: "Come\u00E7ar a Vender" })] }) }) }) }), _jsx("section", { className: "py-16", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h2", { className: "text-3xl font-bold mb-8 text-center", children: "Produtos Recentes" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: newProducts.map((product) => (_jsx("div", { className: "bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow", children: _jsxs(Link, { to: `/produto/${product.id}`, children: [_jsxs("div", { className: "h-64 bg-gray-200 relative", children: [product.discount > 0 && (_jsxs("div", { className: "absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-lg", children: ["-", product.discount, "%"] })), _jsx("img", { src: product.image, alt: product.name, className: "w-full h-full object-cover" })] }), _jsxs("div", { className: "p-4", children: [_jsx("h3", { className: "font-semibold text-gray-800 mb-2 line-clamp-2", children: product.name }), _jsxs("div", { className: "flex items-center mb-2", children: [_jsx("div", { className: "flex text-yellow-400", children: [...Array(5)].map((_, i) => (_jsx("span", { children: "\u2605" }, i))) }), _jsxs("span", { className: "text-gray-600 text-sm ml-2", children: ["(", product.reviews, ")"] })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "font-bold text-gray-800", children: (product.price / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' }) }), _jsx("button", { className: "bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: _jsx("path", { d: "M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" }) }) })] })] })] }) }, product.id))) })] }) }), _jsx("section", { className: "py-16 bg-gray-50", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Fique por dentro das novidades" }), _jsx("p", { className: "text-gray-600 mb-6", children: "Inscreva-se para receber ofertas exclusivas e novidades do Angolaxy" }), _jsxs("form", { className: "flex flex-col md:flex-row gap-4", children: [_jsx("input", { type: "email", placeholder: "Seu endere\u00E7o de e-mail", className: "flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500", required: true }), _jsx("button", { type: "submit", className: "bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors", children: "Inscrever-se" })] })] }) }) })] }));
};
export default HomePage;
