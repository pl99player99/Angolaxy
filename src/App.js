import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import './App.css';
function App() {
    return (_jsx(Router, { children: _jsx(AuthProvider, { children: _jsx(CartProvider, { children: _jsx(AppRoutes, {}) }) }) }));
}
export default App;
