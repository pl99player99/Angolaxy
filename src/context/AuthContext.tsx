import { createContext, useState, useContext, ReactNode } from 'react';

// Definir o tipo para um usuário
interface User {
  id: number;
  name: string;
  email: string;
  accountType: 'buyer' | 'seller';
}

// Definir o tipo para o contexto de autenticação
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: any) => Promise<boolean>;
  logout: () => void;
}

// Criar o contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Props para o provedor do contexto
interface AuthProviderProps {
  children: ReactNode;
}

// Provedor do contexto de autenticação
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  // Verificar se o usuário está autenticado
  const isAuthenticated = user !== null;

  // Função de login
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Simulação de uma chamada de API para autenticação
      // Em um ambiente real, isso seria uma chamada para um backend
      return new Promise((resolve) => {
        setTimeout(() => {
          // Simulando um login bem-sucedido
          if (email && password) {
            setUser({
              id: 1,
              name: 'Usuário Teste',
              email: email,
              accountType: 'buyer'
            });
            resolve(true);
          } else {
            resolve(false);
          }
        }, 1000);
      });
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      return false;
    }
  };

  // Função de registro
  const register = async (userData: any): Promise<boolean> => {
    try {
      // Simulação de uma chamada de API para registro
      return new Promise((resolve) => {
        setTimeout(() => {
          // Simulando um registro bem-sucedido
          setUser({
            id: 2,
            name: userData.name,
            email: userData.email,
            accountType: userData.accountType
          });
          resolve(true);
        }, 1000);
      });
    } catch (error) {
      console.error('Erro ao registrar:', error);
      return false;
    }
  };

  // Função de logout
  const logout = () => {
    setUser(null);
  };

  // Valor do contexto
  const value = {
    user,
    isAuthenticated,
    login,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar o contexto de autenticação
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
