interface PromotionBannerProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

/**
 * Componente PromotionBanner - Banner promocional
 * 
 * Este componente é usado para exibir banners promocionais
 * com título, subtítulo e botão de ação.
 */
const PromotionBanner = ({
  title,
  subtitle,
  buttonText,
  buttonLink
}: PromotionBannerProps) => {
  return (
    <section className="py-8 bg-blue-100">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">{title}</h2>
              <p className="mb-4">{subtitle}</p>
            </div>
            <a
              href={buttonLink}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionBanner;
