import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
const CheckoutPage = () => {
    const { items, total } = useCart();
    const navigate = useNavigate();
    // Dados simulados para endereços
    const addresses = [
        {
            id: 1,
            name: 'Casa',
            street: 'Rua das Palmeiras, 123',
            district: 'Miramar',
            city: 'Luanda',
            province: 'Luanda',
            isDefault: true
        },
        {
            id: 2,
            name: 'Trabalho',
            street: 'Avenida 4 de Fevereiro, 456',
            district: 'Ingombota',
            city: 'Luanda',
            province: 'Luanda',
            isDefault: false
        }
    ];
    // Dados simulados para métodos de pagamento
    const paymentMethods = [
        { id: 'credit_card', name: 'Cartão de Crédito/Débito' },
        { id: 'bank_transfer', name: 'Transferência Bancária' },
        { id: 'mobile_payment', name: 'Pagamento Móvel' },
        { id: 'cash_on_delivery', name: 'Pagamento na Entrega' }
    ];
    // Dados simulados para opções de entrega
    const deliveryOptions = [
        { id: 'standard', name: 'Entrega Padrão (3-5 dias)', price: 2500 },
        { id: 'express', name: 'Entrega Expressa (1-2 dias)', price: 5000 }
    ];
    const [selectedAddress, setSelectedAddress] = useState(addresses.find(addr => addr.isDefault)?.id || 1);
    const [selectedPayment, setSelectedPayment] = useState('credit_card');
    const [selectedDelivery, setSelectedDelivery] = useState('standard');
    const [isProcessing, setIsProcessing] = useState(false);
    // Calcular o total com frete
    const deliveryPrice = deliveryOptions.find(option => option.id === selectedDelivery)?.price || 0;
    const totalWithDelivery = total + deliveryPrice;
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsProcessing(true);
        // Simulação de processamento de pedido
        setTimeout(() => {
            setIsProcessing(false);
            // Aqui seria implementada a lógica real de finalização do pedido
            // Redirecionar para página de confirmação
            navigate('/pedido-confirmado');
        }, 2000);
    };
    return (_jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsx("h1", { className: "text-3xl font-bold mb-8", children: "Finalizar Compra" }), _jsxs("div", { className: "flex flex-col lg:flex-row gap-8", children: [_jsx("div", { className: "lg:w-2/3", children: _jsxs("form", { id: "checkout-form", onSubmit: handleSubmit, children: [_jsxs("div", { className: "bg-white rounded-lg shadow-sm overflow-hidden mb-8", children: [_jsx("div", { className: "p-6 border-b border-gray-200", children: _jsx("h2", { className: "text-xl font-semibold", children: "Endere\u00E7o de Entrega" }) }), _jsxs("div", { className: "p-6", children: [_jsx("div", { className: "space-y-4", children: addresses.map(address => (_jsxs("div", { className: "flex items-center", children: [_jsx("input", { type: "radio", id: `address-${address.id}`, name: "address", value: address.id, checked: selectedAddress === address.id, onChange: () => setSelectedAddress(address.id), className: "h-4 w-4 text-blue-600 border-gray-300" }), _jsxs("label", { htmlFor: `address-${address.id}`, className: "ml-3 block", children: [_jsx("div", { className: "font-medium", children: address.name }), _jsxs("div", { className: "text-gray-600 text-sm", children: [address.street, ", ", address.district, ", ", address.city, ", ", address.province] })] })] }, address.id))) }), _jsx("div", { className: "mt-4", children: _jsx("button", { type: "button", className: "text-blue-600 hover:text-blue-800 text-sm font-medium", children: "+ Adicionar novo endere\u00E7o" }) })] })] }), _jsxs("div", { className: "bg-white rounded-lg shadow-sm overflow-hidden mb-8", children: [_jsx("div", { className: "p-6 border-b border-gray-200", children: _jsx("h2", { className: "text-xl font-semibold", children: "Op\u00E7\u00F5es de Entrega" }) }), _jsx("div", { className: "p-6", children: _jsx("div", { className: "space-y-4", children: deliveryOptions.map(option => (_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("input", { type: "radio", id: `delivery-${option.id}`, name: "delivery", value: option.id, checked: selectedDelivery === option.id, onChange: () => setSelectedDelivery(option.id), className: "h-4 w-4 text-blue-600 border-gray-300" }), _jsx("label", { htmlFor: `delivery-${option.id}`, className: "ml-3 block", children: option.name })] }), _jsx("div", { className: "font-medium", children: (option.price / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' }) })] }, option.id))) }) })] }), _jsxs("div", { className: "bg-white rounded-lg shadow-sm overflow-hidden mb-8", children: [_jsx("div", { className: "p-6 border-b border-gray-200", children: _jsx("h2", { className: "text-xl font-semibold", children: "M\u00E9todo de Pagamento" }) }), _jsxs("div", { className: "p-6", children: [_jsx("div", { className: "space-y-4", children: paymentMethods.map(method => (_jsxs("div", { className: "flex items-center", children: [_jsx("input", { type: "radio", id: `payment-${method.id}`, name: "payment", value: method.id, checked: selectedPayment === method.id, onChange: () => setSelectedPayment(method.id), className: "h-4 w-4 text-blue-600 border-gray-300" }), _jsx("label", { htmlFor: `payment-${method.id}`, className: "ml-3 block", children: method.name })] }, method.id))) }), selectedPayment === 'credit_card' && (_jsxs("div", { className: "mt-6 space-y-4", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "card_number", className: "block text-gray-700 font-medium mb-2", children: "N\u00FAmero do Cart\u00E3o" }), _jsx("input", { type: "text", id: "card_number", className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500", placeholder: "1234 5678 9012 3456", required: true })] }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "expiry", className: "block text-gray-700 font-medium mb-2", children: "Data de Validade" }), _jsx("input", { type: "text", id: "expiry", className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500", placeholder: "MM/AA", required: true })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "cvv", className: "block text-gray-700 font-medium mb-2", children: "CVV" }), _jsx("input", { type: "text", id: "cvv", className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500", placeholder: "123", required: true })] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "card_name", className: "block text-gray-700 font-medium mb-2", children: "Nome no Cart\u00E3o" }), _jsx("input", { type: "text", id: "card_name", className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500", placeholder: "NOME COMPLETO", required: true })] })] }))] })] })] }) }), _jsx("div", { className: "lg:w-1/3", children: _jsxs("div", { className: "bg-white rounded-lg shadow-sm p-6 sticky top-4", children: [_jsx("h2", { className: "text-xl font-semibold mb-6", children: "Resumo do Pedido" }), _jsx("div", { className: "space-y-4 mb-6", children: items.map(item => (_jsxs("div", { className: "flex justify-between", children: [_jsxs("div", { children: [_jsx("span", { className: "font-medium", children: item.name }), _jsxs("span", { className: "text-gray-600 text-sm", children: [" x", item.quantity] })] }), _jsx("span", { children: (item.price * item.quantity / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' }) })] }, item.id))) }), _jsxs("div", { className: "space-y-2 pt-4 border-t border-gray-200", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-gray-600", children: "Subtotal" }), _jsx("span", { children: (total / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' }) })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { className: "text-gray-600", children: "Frete" }), _jsx("span", { children: (deliveryPrice / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' }) })] }), _jsxs("div", { className: "flex justify-between font-bold pt-2 border-t border-gray-200", children: [_jsx("span", { children: "Total" }), _jsx("span", { children: (totalWithDelivery / 100).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' }) })] })] }), _jsx("button", { type: "submit", form: "checkout-form", className: `w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors ${isProcessing ? 'opacity-70 cursor-not-allowed' : ''}`, disabled: isProcessing, children: isProcessing ? 'Processando...' : 'Finalizar Pedido' }), _jsx("p", { className: "text-sm text-gray-600 mt-4 text-center", children: "Ao finalizar o pedido, voc\u00EA concorda com nossos Termos de Uso" })] }) })] })] }));
};
export default CheckoutPage;
