import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Sobre a Angolaxy</h1>
      
      {/* Seção de introdução */}
      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
          <p className="text-gray-700 mb-6">
            A Angolaxy nasceu com a missão de transformar o comércio eletrônico em Angola, 
            criando uma plataforma segura, intuitiva e acessível para todos os angolanos. 
            Nosso objetivo é conectar vendedores e compradores de todo o país, impulsionando 
            o desenvolvimento do comércio local e facilitando o acesso a produtos de qualidade.
          </p>
          <p className="text-gray-700">
            Acreditamos que a tecnologia pode ser uma poderosa ferramenta de inclusão e 
            desenvolvimento econômico. Por isso, trabalhamos incansavelmente para oferecer 
            uma experiência de compra e venda online que atenda às necessidades específicas 
            do mercado angolano.
          </p>
        </div>
      </section>
      
      {/* Seção de valores */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Nossos Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Segurança</h3>
            <p className="text-gray-700">
              Priorizamos a segurança em todas as transações, protegendo os dados dos nossos 
              usuários e garantindo um ambiente confiável para compras e vendas.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Inovação</h3>
            <p className="text-gray-700">
              Buscamos constantemente novas soluções e tecnologias para melhorar a experiência 
              dos nossos usuários e impulsionar o comércio eletrônico em Angola.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Comunidade</h3>
            <p className="text-gray-700">
              Valorizamos a construção de uma comunidade forte de compradores e vendedores, 
              promovendo relações de confiança e apoiando o crescimento dos negócios locais.
            </p>
          </div>
        </div>
      </section>
      
      {/* Seção de história */}
      <section className="mb-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-4">Nossa História</h2>
          <p className="text-gray-700 mb-4">
            A Angolaxy foi fundada em 2023 por um grupo de empreendedores angolanos apaixonados 
            por tecnologia e com a visão de revolucionar o comércio eletrônico no país. 
            Identificando as dificuldades enfrentadas por compradores e vendedores locais, 
            decidimos criar uma plataforma que atendesse às necessidades específicas do mercado angolano.
          </p>
          <p className="text-gray-700 mb-4">
            Começamos como uma pequena startup em Luanda, e rapidamente crescemos para nos tornar 
            uma referência no comércio eletrônico em Angola. Hoje, contamos com uma equipe 
            diversificada de profissionais dedicados a oferecer a melhor experiência possível 
            para nossos usuários.
          </p>
          <p className="text-gray-700">
            Nossa jornada está apenas começando, e estamos comprometidos em continuar inovando 
            e expandindo nossas operações para atender cada vez mais angolanos em todo o país.
          </p>
        </div>
      </section>
      
      {/* Seção de equipe */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Nossa Equipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold">João Silva</h3>
            <p className="text-gray-600">CEO & Fundador</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold">Maria Santos</h3>
            <p className="text-gray-600">CTO</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold">Pedro Alves</h3>
            <p className="text-gray-600">Diretor de Operações</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold">Ana Costa</h3>
            <p className="text-gray-600">Diretora de Marketing</p>
          </div>
        </div>
      </section>
      
      {/* Seção de contato */}
      <section>
        <div className="bg-blue-600 text-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-4">Entre em Contato</h2>
          <p className="mb-6">
            Tem alguma dúvida ou sugestão? Estamos sempre à disposição para ajudar.
          </p>
          <Link
            to="/contato"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Fale Conosco
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
