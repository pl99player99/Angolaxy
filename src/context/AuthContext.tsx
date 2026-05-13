import { createContext, useState, useContext, ReactNode } from 'react'

interface User {
  id: number
  name: string
  email: string
  type: 'buyer' | 'seller'
  avatar?: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  register: (data: { name: string; email: string; password: string; type: 'buyer' | 'seller' }) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  const login = async (email: string, password: string): Promise<boolean> => {
    // TODO: Replace with real API call
    await new Promise(r => setTimeout(r, 800))
    if (email && password.length >= 6) {
      setUser({ id: 1, name: 'Utilizador Demo', email, type: 'buyer' })
      return true
    }
    return false
  }

  const register = async (data: { name: string; email: string; password: string; type: 'buyer' | 'seller' }): Promise<boolean> => {
    // TODO: Replace with real API call
    await new Promise(r => setTimeout(r, 800))
    setUser({ id: 2, name: data.name, email: data.email, type: data.type })
    return true
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be inside AuthProvider')
  return ctx
}
