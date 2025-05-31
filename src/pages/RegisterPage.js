import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        accountType: 'buyer', // 'buyer' ou 'seller'
        termsAccepted: false
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { register } = useAuth();
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };
    const handleRadioChange = (e) => {
        setFormData({
            ...formData,
            accountType: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (formData.password !== formData.confirmPassword) {
            setError('As senhas não coincidem');
            return;
        }
        setIsLoading(true);
        try {
            const success = await register(formData);
            if (success) {
                navigate('/');
            }
            else {
                setError('Não foi possível completar o cadastro. Por favor, tente novamente.');
            }
        }
        catch (err) {
            setError('Ocorreu um erro ao fazer o cadastro. Por favor, tente novamente.');
        }
        finally {
            setIsLoading(false);
        }
    };
    return (_jsx("div", { className: "container mx-auto px-4 py-16", children: _jsxs("div", { className: "max-w-lg mx-auto bg-white rounded-xl shadow-sm p-8", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("h1", { className: "text-3xl font-bold text-gray-800", children: "Criar uma conta" }), _jsx("p", { className: "text-gray-600 mt-2", children: "Junte-se ao Angolaxy para comprar e vender produtos" })] }), error && (_jsx("div", { className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4", children: error })), _jsxs("form", { onSubmit: handleSubmit, children: [_jsxs("div", { className: "mb-6", children: [_jsx("label", { htmlFor: "name", className: "block text-gray-700 font-medium mb-2", children: "Nome completo" }), _jsx("input", { type: "text", id: "name", name: "name", className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500", placeholder: "Seu nome completo", value: formData.name, onChange: handleChange, required: true })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { htmlFor: "email", className: "block text-gray-700 font-medium mb-2", children: "Email" }), _jsx("input", { type: "email", id: "email", name: "email", className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500", placeholder: "seu@email.com", value: formData.email, onChange: handleChange, required: true })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { htmlFor: "password", className: "block text-gray-700 font-medium mb-2", children: "Senha" }), _jsx("input", { type: "password", id: "password", name: "password", className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500", placeholder: "M\u00EDnimo 8 caracteres", value: formData.password, onChange: handleChange, minLength: 8, required: true })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { htmlFor: "confirmPassword", className: "block text-gray-700 font-medium mb-2", children: "Confirmar senha" }), _jsx("input", { type: "password", id: "confirmPassword", name: "confirmPassword", className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500", placeholder: "Confirme sua senha", value: formData.confirmPassword, onChange: handleChange, minLength: 8, required: true })] }), _jsxs("div", { className: "mb-6", children: [_jsx("p", { className: "block text-gray-700 font-medium mb-2", children: "Tipo de conta" }), _jsxs("div", { className: "flex space-x-4", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("input", { type: "radio", id: "buyer", name: "accountType", value: "buyer", checked: formData.accountType === 'buyer', onChange: handleRadioChange, className: "h-4 w-4 text-blue-600 border-gray-300" }), _jsx("label", { htmlFor: "buyer", className: "ml-2 block text-gray-700", children: "Comprador" })] }), _jsxs("div", { className: "flex items-center", children: [_jsx("input", { type: "radio", id: "seller", name: "accountType", value: "seller", checked: formData.accountType === 'seller', onChange: handleRadioChange, className: "h-4 w-4 text-blue-600 border-gray-300" }), _jsx("label", { htmlFor: "seller", className: "ml-2 block text-gray-700", children: "Vendedor" })] })] })] }), _jsxs("div", { className: "flex items-center mb-6", children: [_jsx("input", { type: "checkbox", id: "termsAccepted", name: "termsAccepted", className: "h-4 w-4 text-blue-600 border-gray-300 rounded", checked: formData.termsAccepted, onChange: handleChange, required: true }), _jsxs("label", { htmlFor: "termsAccepted", className: "ml-2 block text-gray-700", children: ["Eu concordo com os", ' ', _jsx(Link, { to: "/termos-uso", className: "text-blue-600 hover:text-blue-800", children: "Termos de Uso" }), ' ', "e", ' ', _jsx(Link, { to: "/politica-privacidade", className: "text-blue-600 hover:text-blue-800", children: "Pol\u00EDtica de Privacidade" })] })] }), _jsx("button", { type: "submit", className: `w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`, disabled: isLoading, children: isLoading ? 'Cadastrando...' : 'Criar conta' })] }), _jsx("div", { className: "mt-6 text-center", children: _jsxs("p", { className: "text-gray-600", children: ["J\u00E1 tem uma conta?", ' ', _jsx(Link, { to: "/login", className: "text-blue-600 hover:text-blue-800 font-medium", children: "Entrar" })] }) })] }) }));
};
export default RegisterPage;
