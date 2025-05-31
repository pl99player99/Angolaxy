import { ReactNode } from 'react';

interface HeroBannerProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  children?: ReactNode;
}

/**
 * Componente HeroBanner - Banner principal para páginas
 * 
 * Este componente é usado principalmente na página inicial para
 * exibir um banner promocional com título, subtítulo e botões de ação.
 */
const HeroBanner = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  children
}: HeroBannerProps) => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:mr-12 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {title}
            </h1>
            <p className="text-xl mb-6">
              {subtitle}
            </p>
            <div className="flex space-x-4">
              <a
                href={primaryButtonLink}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                {primaryButtonText}
              </a>
              {secondaryButtonText && secondaryButtonLink && (
                <a
                  href={secondaryButtonLink}
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  {secondaryButtonText}
                </a>
              )}
            </div>
          </div>
          <div className="md:w-1/2">
            {children || (
              <div className="bg-white/20 rounded-lg h-64 w-full flex items-center justify-center">
                <span className="text-white/70">Banner Image</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
