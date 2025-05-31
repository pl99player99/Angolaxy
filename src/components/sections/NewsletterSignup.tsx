interface NewsletterSignupProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

/**
 * Componente NewsletterSignup - Formulário de inscrição para newsletter
 * 
 * Este componente é usado para exibir um formulário de inscrição
 * para newsletter com título, subtítulo e botão de ação.
 */
const NewsletterSignup = ({
  title,
  subtitle,
  buttonText
}: NewsletterSignupProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 mb-6">
            {subtitle}
          </p>
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Seu endereço de e-mail"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
