import { createContext, useState, useContext, ReactNode } from 'react';

// Definir o tipo para um item do carrinho
interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// Definir o tipo para o contexto do carrinho
interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  total: number;
}

// Criar o contexto
const CartContext = createContext<CartContextType | undefined>(undefined);

// Props para o provedor do contexto
interface CartProviderProps {
  children: ReactNode;
}

// Provedor do contexto do carrinho
export const CartProvider = ({ children }: CartProviderProps) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Adicionar um item ao carrinho
  const addItem = (item: CartItem) => {
    setItems(currentItems => {
      // Verificar se o item já existe no carrinho
      const existingItemIndex = currentItems.findIndex(i => i.id === item.id);
      
      if (existingItemIndex > -1) {
        // Se o item já existe, atualizar a quantidade
        const updatedItems = [...currentItems];
        updatedItems[existingItemIndex].quantity += item.quantity;
        return updatedItems;
      } else {
        // Se o item não existe, adicionar ao carrinho
        return [...currentItems, item];
      }
    });
  };

  // Remover um item do carrinho
  const removeItem = (id: number) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id));
  };

  // Atualizar a quantidade de um item
  const updateQuantity = (id: number, quantity: number) => {
    setItems(currentItems => 
      currentItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
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

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar o contexto do carrinho
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }
  return context;
};
