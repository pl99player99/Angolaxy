import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de envio de formulário
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Resetar mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Entre em Contato</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Informações de contato */}
        <div>
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Endereço</h3>
                  <p className="text-gray-600">Avenida 4 de Fevereiro, 123</p>
                  <p className="text-gray-600">Luanda, Angola</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Telefone</h3>
                  <p className="text-gray-600">+244 923 456 789</p>
                  <p className="text-gray-600">+244 912 345 678</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">contato@angolaxy.co.ao</p>
                  <p className="text-gray-600">suporte@angolaxy.co.ao</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6">Horário de Atendimento</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Segunda a Sexta</span>
                <span className="font-medium">8:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sábado</span>
                <span className="font-medium">9:00 - 15:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Domingo</span>
                <span className="font-medium">Fechado</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Formulário de contato */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-6">Envie-nos uma Mensagem</h2>
          
          {submitSuccess && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
              Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.
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
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                Assunto
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Selecione um assunto</option>
                <option value="suporte">Suporte ao Cliente</option>
                <option value="vendas">Vendas</option>
                <option value="parcerias">Parcerias</option>
                <option value="sugestoes">Sugestões</option>
                <option value="outros">Outros</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Digite sua mensagem aqui..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className={`w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </form>
        </div>
      </div>
      
      {/* Mapa */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Nossa Localização</h2>
        <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
          <p className="text-gray-600">Mapa será carregado aqui</p>
        </div>
      </div>
      
      {/* FAQ */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Perguntas Frequentes</h2>
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Como posso rastrear meu pedido?</h3>
            <p className="text-gray-700">
              Você pode rastrear seu pedido fazendo login na sua conta e acessando a seção "Meus Pedidos". 
              Lá você encontrará informações detalhadas sobre o status de entrega.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Qual é o prazo de entrega?</h3>
            <p className="text-gray-700">
              O prazo de entrega varia de acordo com a sua localização. Em Luanda, geralmente entregamos 
              em 1-3 dias úteis. Para outras províncias, o prazo pode ser de 3-7 dias úteis.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Como posso me tornar um vendedor na Angolaxy?</h3>
            <p className="text-gray-700">
              Para se tornar um vendedor, basta criar uma conta e selecionar a opção "Vendedor" durante 
              o cadastro. Após a verificação dos seus dados, você poderá começar a vender seus produtos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
