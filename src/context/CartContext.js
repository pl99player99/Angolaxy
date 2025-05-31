import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState, useContext } from 'react';
// Criar o contexto
const CartContext = createContext(undefined);
// Provedor do contexto do carrinho
export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    // Adicionar um item ao carrinho
    const addItem = (item) => {
        setItems(currentItems => {
            // Verificar se o item já existe no carrinho
            const existingItemIndex = currentItems.findIndex(i => i.id === item.id);
            if (existingItemIndex > -1) {
                // Se o item já existe, atualizar a quantidade
                const updatedItems = [...currentItems];
                updatedItems[existingItemIndex].quantity += item.quantity;
                return updatedItems;
            }
            else {
                // Se o item não existe, adicionar ao carrinho
                return [...currentItems, item];
            }
        });
    };
    // Remover um item do carrinho
    const removeItem = (id) => {
        setItems(currentItems => currentItems.filter(item => item.id !== id));
    };
    // Atualizar a quantidade de um item
    const updateQuantity = (id, quantity) => {
        setItems(currentItems => currentItems.map(item => item.id === id ? { ...item, quantity } : item));
    };
    // Limpar o carrinho
    const clearCart = () => {
        setItems([]);
    };
    // Calcular o número total de itens no carrinho
    const itemCount = items.reduce((total, item) => total + item.quantity, 0);
    // Calcular o valor total do carrinho
    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    // Valor do contexto
    const value = {
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        total
    };
    return (_jsx(CartContext.Provider, { value: value, children: children }));
};
// Hook personalizado para usar o contexto do carrinho
export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart deve ser usado dentro de um CartProvider');
    }
    return context;
};
