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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      accountType: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
      } else {
        setError('Não foi possível completar o cadastro. Por favor, tente novamente.');
      }
    } catch (err) {
      setError('Ocorreu um erro ao fazer o cadastro. Por favor, tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow-sm p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Criar uma conta</h1>
          <p className="text-gray-600 mt-2">
            Junte-se ao Angolaxy para comprar e vender produtos
          </p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Nome completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Seu nome completo"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Mínimo 8 caracteres"
              value={formData.password}
              onChange={handleChange}
              minLength={8}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
              Confirmar senha
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Confirme sua senha"
              value={formData.confirmPassword}
              onChange={handleChange}
              minLength={8}
              required
            />
          </div>

          <div className="mb-6">
            <p className="block text-gray-700 font-medium mb-2">Tipo de conta</p>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="buyer"
                  name="accountType"
                  value="buyer"
                  checked={formData.accountType === 'buyer'}
                  onChange={handleRadioChange}
                  className="h-4 w-4 text-blue-600 border-gray-300"
                />
                <label htmlFor="buyer" className="ml-2 block text-gray-700">
                  Comprador
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="seller"
                  name="accountType"
                  value="seller"
                  checked={formData.accountType === 'seller'}
                  onChange={handleRadioChange}
                  className="h-4 w-4 text-blue-600 border-gray-300"
                />
                <label htmlFor="seller" className="ml-2 block text-gray-700">
                  Vendedor
                </label>
              </div>
            </div>
          </div>

          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="termsAccepted"
              name="termsAccepted"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
            />
            <label htmlFor="termsAccepted" className="ml-2 block text-gray-700">
              Eu concordo com os{' '}
              <Link to="/termos-uso" className="text-blue-600 hover:text-blue-800">
                Termos de Uso
              </Link>{' '}
              e{' '}
              <Link to="/politica-privacidade" className="text-blue-600 hover:text-blue-800">
                Política de Privacidade
              </Link>
            </label>
          </div>

          <button
            type="submit"
            className={`w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors ${
              isLoading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
            disabled={isLoading}
          >
            {isLoading ? 'Cadastrando...' : 'Criar conta'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Já tem uma conta?{' '}
            <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium">
              Entrar
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
