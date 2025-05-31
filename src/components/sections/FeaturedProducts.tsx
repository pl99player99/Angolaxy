import { ReactNode } from 'react';

interface FeaturedProductsProps {
  title: string;
  children: ReactNode;
  viewMoreLink?: string;
}

/**
 * Componente FeaturedProducts - Seção para exibir produtos em destaque
 * 
 * Este componente é usado para exibir uma seção de produtos em destaque,
 * com título e link opcional para ver mais produtos.
 */
const FeaturedProducts = ({
  title,
  children,
  viewMoreLink
}: FeaturedProductsProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {children}
        </div>
        
        {viewMoreLink && (
          <div className="text-center mt-8">
            <a
              href={viewMoreLink}
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Ver Mais Produtos
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
