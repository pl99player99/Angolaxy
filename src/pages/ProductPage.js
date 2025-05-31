import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
const ProductPage = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedTab, setSelectedTab] = useState('description');
    // Dados simulados do produto
    const product = {
        id: parseInt(id || '1'),
        name: 'Smartphone XYZ Pro 128GB',
        price: 120000,
        discount: 10,
        rating: 4.5,
        reviews: 120,
        stock: 15,
        description: 'O Smartphone XYZ Pro é a escolha perfeita para quem busca desempenho e qualidade. Com processador octa-core, 8GB de RAM e 128GB de armazenamento, este aparelho oferece uma experiência fluida para todas as suas necessidades diárias. A câmera tripla de 48MP captura fotos incríveis em qualquer condição de iluminação.',
        specifications: [
            { name: 'Tela', value: '6.5" AMOLED Full HD+' },
            { name: 'Processador', value: 'Octa-core 2.4GHz' },
            { name: 'Memória RAM', value: '8GB' },
            { name: 'Armazenamento', value: '128GB' },
            { name: 'Câmera Traseira', value: 'Tripla 48MP + 12MP + 5MP' },
            { name: 'Câmera Frontal', value: '32MP' },
            { name: 'Bateria', value: '4500mAh' },
            { name: 'Sistema Operacional', value: 'Android 13' }
        ],
        images: [
            '/images/smartphone.jpg',
            '/images/smartphone.jpg',
            '/images/smartphone.jpg',
            '/images/smartphone.jpg'
        ],
        colors: ['Preto', 'Azul', 'Prata'],
        seller: {
            name: 'Tech Angola',
            rating: 4.8,
            products: 156,
            joined: 'Janeiro 2023'
        },
        relatedProducts: [
            { id: 2, name: 'Fones de Ouvido Bluetooth', price: 25000, image: '/images/headphones.jpg' },
            { id: 3, name: 'Carregador Rápido 25W', price: 8000, image: '/images/smartphone.jpg' },
            { id: 4, name: 'Capa Protetora Premium', price: 5000, image: '/images/smartphone.jpg' }
        ]
    };
    // Calcular preço com desconto
    const discountedPrice = product.discount > 0
        ? product.price - (product.price * product.discount / 100)
        : product.price;
    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value);
        if (value > 0 && value <= product.stock) {
            setQuantity(value);
        }
    };
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const increaseQuantity = () => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    };
    const addToCart = () => {
        // Implementar lógica de adicionar ao carrinho
        console.log(`Adicionando ${quantity} unidades do produto ${product.id} ao carrinho`);
        // Aqui seria integrado com o contexto do carrinho
    };
    return (_jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsxs("div", { className: "text-sm text-gray-500 mb-6", children: [_jsx(Link, { to: "/", className: "hover:text-blue-600", children: "Home" }), " >", _jsx(Link, { to: "/categorias/eletronicos", className: "hover:text-blue-600", children: " Eletr\u00F4nicos" }), " >", _jsxs("span", { className: "text-gray-700", children: [" ", product.name] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-12", children: [_jsxs("div", { children: [_jsx("div", { className: "bg-gray-100 h-auto rounded-lg mb-4 p-4 flex items-center justify-center", children: _jsx("div", { className: "w-full h-64 bg-white flex items-center justify-center overflow-hidden", children: _jsx("img", { src: product.images[selectedImage], alt: `${product.name} - Imagem ${selectedImage + 1}`, className: "w-full h-full object-contain" }) }) }), _jsx("div", { className: "flex space-x-2", children: product.images.map((image, index) => (_jsx("div", { className: `w-16 h-16 bg-gray-100 cursor-pointer border-2 ${selectedImage === index ? 'border-blue-600' : 'border-transparent'} overflow-hidden`, onClick: () => setSelectedImage(index), children: _jsx("img", { src: image, alt: `Miniatura ${index + 1}`, className: "w-full h-full object-cover" }) }, index))) })] }), _jsxs("div", { children: [_jsx("h1", { className: "text-3xl font-bold text-gray-800 mb-2", children: product.name }), _jsxs("div", { className: "flex items-center mb-4", children: [_jsx("div", { className: "flex text-yellow-400", children: [...Array(5)].map((_, i) => (_jsx("span", { className: "text-xl", children: "\u2605" }, i))) }), _jsxs("span", { className: "text-gray-600 ml-2", children: ["(", product.reviews, " avalia\u00E7\u00F5es)"] })] }), _jsx("div", { className: "mb-6", children: product.discount > 0 ? (_jsxs(_Fragment, { children: [_jsx("span", { className: "text-gray-500 line-through text-xl", children: (product.price / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' }) }), _jsx("span", { className: "text-3xl font-bold text-blue-600 ml-2", children: (discountedPrice / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' }) }), _jsxs("span", { className: "bg-blue-600 text-white px-2 py-1 rounded-lg ml-2 text-sm", children: ["-", product.discount, "%"] })] })) : (_jsx("span", { className: "text-3xl font-bold text-blue-600", children: (product.price / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' }) })) }), _jsx("div", { className: "mb-6", children: _jsxs("p", { className: "text-gray-700", children: ["Disponibilidade:", _jsx("span", { className: "text-green-600 font-medium ml-1", children: product.stock > 0 ? `Em estoque (${product.stock} unidades)` : 'Fora de estoque' })] }) }), _jsxs("div", { className: "mb-6", children: [_jsx("h3", { className: "text-gray-700 font-medium mb-2", children: "Cor:" }), _jsx("div", { className: "flex space-x-2", children: product.colors.map((color, index) => (_jsx("button", { className: "px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500", children: color }, index))) })] }), _jsxs("div", { className: "mb-6", children: [_jsx("h3", { className: "text-gray-700 font-medium mb-2", children: "Quantidade:" }), _jsxs("div", { className: "flex", children: [_jsx("button", { onClick: decreaseQuantity, className: "bg-gray-200 px-3 py-2 rounded-l-lg hover:bg-gray-300", children: "-" }), _jsx("input", { type: "number", value: quantity, onChange: handleQuantityChange, className: "w-16 text-center border-t border-b border-gray-300" }), _jsx("button", { onClick: increaseQuantity, className: "bg-gray-200 px-3 py-2 rounded-r-lg hover:bg-gray-300", children: "+" })] })] }), _jsxs("div", { className: "flex space-x-4 mb-6", children: [_jsx("button", { onClick: addToCart, className: "bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 flex-1", children: "Adicionar ao Carrinho" }), _jsx("button", { className: "border-2 border-blue-600 text-blue-600 px-4 py-3 rounded-lg font-semibold hover:bg-blue-50", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" }) }) })] }), _jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [_jsx("h3", { className: "font-medium mb-2", children: "Vendido por:" }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "font-semibold", children: product.seller.name }), _jsxs("div", { className: "flex items-center text-sm text-gray-600", children: [_jsx("span", { className: "text-yellow-400 mr-1", children: "\u2605" }), _jsxs("span", { children: [product.seller.rating, " | ", product.seller.products, " produtos"] })] })] }), _jsx(Link, { to: `/vendedor/${product.seller.name}`, className: "text-blue-600 hover:text-blue-800", children: "Ver Loja" })] })] })] })] }), _jsxs("div", { className: "mb-12", children: [_jsx("div", { className: "border-b border-gray-300", children: _jsxs("div", { className: "flex space-x-8", children: [_jsx("button", { className: `py-4 px-2 font-medium ${selectedTab === 'description' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`, onClick: () => setSelectedTab('description'), children: "Descri\u00E7\u00E3o" }), _jsx("button", { className: `py-4 px-2 font-medium ${selectedTab === 'specifications' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`, onClick: () => setSelectedTab('specifications'), children: "Especifica\u00E7\u00F5es" }), _jsxs("button", { className: `py-4 px-2 font-medium ${selectedTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`, onClick: () => setSelectedTab('reviews'), children: ["Avalia\u00E7\u00F5es (", product.reviews, ")"] })] }) }), _jsxs("div", { className: "py-6", children: [selectedTab === 'description' && (_jsx("div", { className: "text-gray-700 leading-relaxed", children: _jsx("p", { children: product.description }) })), selectedTab === 'specifications' && (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: product.specifications.map((spec, index) => (_jsxs("div", { className: "flex", children: [_jsxs("span", { className: "font-medium text-gray-700 w-40", children: [spec.name, ":"] }), _jsx("span", { className: "text-gray-600", children: spec.value })] }, index))) })), selectedTab === 'reviews' && (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "flex text-yellow-400 text-3xl mr-4", children: [...Array(5)].map((_, i) => (_jsx("span", { children: "\u2605" }, i))) }), _jsxs("div", { children: [_jsxs("p", { className: "text-2xl font-bold", children: [product.rating, " de 5"] }), _jsxs("p", { className: "text-gray-600", children: [product.reviews, " avalia\u00E7\u00F5es"] })] })] }), _jsxs("div", { className: "border-t border-gray-300 pt-6 space-y-6", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center mb-2", children: [_jsx("div", { className: "w-10 h-10 rounded-full bg-gray-300 mr-3" }), _jsxs("div", { children: [_jsx("p", { className: "font-medium", children: "Jo\u00E3o Silva" }), _jsx("div", { className: "flex text-yellow-400 text-sm", children: [...Array(5)].map((_, i) => (_jsx("span", { children: "\u2605" }, i))) })] })] }), _jsx("p", { className: "text-gray-700", children: "Excelente produto! Chegou antes do prazo e veio em perfeitas condi\u00E7\u00F5es. A bateria dura o dia todo como prometido." })] }), _jsxs("div", { children: [_jsxs("div", { className: "flex items-center mb-2", children: [_jsx("div", { className: "w-10 h-10 rounded-full bg-gray-300 mr-3" }), _jsxs("div", { children: [_jsx("p", { className: "font-medium", children: "Maria Santos" }), _jsx("div", { className: "flex text-yellow-400 text-sm", children: [...Array(4)].map((_, i) => (_jsx("span", { children: "\u2605" }, i))) })] })] }), _jsx("p", { className: "text-gray-700", children: "Bom smartphone, r\u00E1pido e com \u00F3tima c\u00E2mera. A \u00FAnica coisa que poderia melhorar \u00E9 o tempo de carregamento." })] })] }), _jsx(Link, { to: `/produto/${id}/avaliacoes`, className: "text-blue-600 hover:text-blue-800 font-medium", children: "Ver todas as avalia\u00E7\u00F5es" })] }))] })] }), _jsxs("div", { children: [_jsx("h2", { className: "text-2xl font-bold mb-6", children: "Produtos Relacionados" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: product.relatedProducts.map((item) => (_jsx("div", { className: "bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow", children: _jsxs(Link, { to: `/produto/${item.id}`, children: [_jsx("div", { className: "h-48 bg-gray-200 overflow-hidden", children: _jsx("img", { src: item.image, alt: item.name, className: "w-full h-full object-cover" }) }), _jsxs("div", { className: "p-4", children: [_jsx("h3", { className: "font-semibold text-gray-800 mb-2", children: item.name }), _jsx("p", { className: "font-bold text-gray-800", children: (item.price / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' }) })] })] }) }, item.id))) })] })] }));
};
export default ProductPage;
