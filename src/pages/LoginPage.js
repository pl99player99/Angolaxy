import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);
        try {
            const success = await login(email, password);
            if (success) {
                navigate('/');
            }
            else {
                setError('Email ou senha inválidos. Por favor, tente novamente.');
            }
        }
        catch (err) {
            setError('Ocorreu um erro ao fazer login. Por favor, tente novamente.');
        }
        finally {
            setIsLoading(false);
        }
    };
    return (_jsx("div", { className: "container mx-auto px-4 py-16", children: _jsxs("div", { className: "max-w-md mx-auto bg-white rounded-xl shadow-sm p-8", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("h1", { className: "text-3xl font-bold text-gray-800", children: "Entrar no Angolaxy" }), _jsx("p", { className: "text-gray-600 mt-2", children: "Acesse sua conta para comprar e vender produtos" })] }), error && (_jsx("div", { className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4", children: error })), _jsxs("form", { onSubmit: handleSubmit, children: [_jsxs("div", { className: "mb-6", children: [_jsx("label", { htmlFor: "email", className: "block text-gray-700 font-medium mb-2", children: "Email" }), _jsx("input", { type: "email", id: "email", className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500", placeholder: "seu@email.com", value: email, onChange: (e) => setEmail(e.target.value), required: true })] }), _jsxs("div", { className: "mb-6", children: [_jsxs("div", { className: "flex justify-between mb-2", children: [_jsx("label", { htmlFor: "password", className: "block text-gray-700 font-medium", children: "Senha" }), _jsx(Link, { to: "/recuperar-senha", className: "text-blue-600 hover:text-blue-800 text-sm", children: "Esqueceu a senha?" })] }), _jsx("input", { type: "password", id: "password", className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500", placeholder: "********", value: password, onChange: (e) => setPassword(e.target.value), required: true })] }), _jsxs("div", { className: "flex items-center mb-6", children: [_jsx("input", { type: "checkbox", id: "remember", className: "h-4 w-4 text-blue-600 border-gray-300 rounded", checked: rememberMe, onChange: (e) => setRememberMe(e.target.checked) }), _jsx("label", { htmlFor: "remember", className: "ml-2 block text-gray-700", children: "Lembrar-me" })] }), _jsx("button", { type: "submit", className: `w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`, disabled: isLoading, children: isLoading ? 'Entrando...' : 'Entrar' })] }), _jsx("div", { className: "mt-6 text-center", children: _jsxs("p", { className: "text-gray-600", children: ["N\u00E3o tem uma conta?", ' ', _jsx(Link, { to: "/cadastro", className: "text-blue-600 hover:text-blue-800 font-medium", children: "Cadastre-se" })] }) }), _jsxs("div", { className: "mt-8", children: [_jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute inset-0 flex items-center", children: _jsx("div", { className: "w-full border-t border-gray-300" }) }), _jsx("div", { className: "relative flex justify-center text-sm", children: _jsx("span", { className: "px-2 bg-white text-gray-500", children: "Ou continue com" }) })] }), _jsxs("div", { className: "mt-6 grid grid-cols-2 gap-3", children: [_jsx("button", { type: "button", className: "w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50", children: _jsxs("div", { className: "flex items-center justify-center", children: [_jsxs("svg", { className: "h-5 w-5 mr-2", viewBox: "0 0 24 24", children: [_jsx("path", { fill: "#4285F4", d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" }), _jsx("path", { fill: "#34A853", d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" }), _jsx("path", { fill: "#FBBC05", d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" }), _jsx("path", { fill: "#EA4335", d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" })] }), "Google"] }) }), _jsx("button", { type: "button", className: "w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50", children: _jsxs("div", { className: "flex items-center justify-center", children: [_jsx("svg", { className: "h-5 w-5 mr-2", fill: "#1877F2", viewBox: "0 0 24 24", children: _jsx("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }) }), "Facebook"] }) })] })] })] }) }));
};
export default LoginPage;
