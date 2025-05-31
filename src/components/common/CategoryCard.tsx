/**
 * Componente CategoryCard - Card reutilizável para exibição de categorias
 * 
 * Este componente é usado na página inicial e na página de categorias
 * para exibir as diferentes categorias de produtos disponíveis.
 */

import { Link } from 'react-router-dom';

interface CategoryCardProps {
  category: {
    id: number;
    name: string;
    image?: string;
    path: string;
  };
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link to={category.path} className="block">
      <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
        <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
          {/* Placeholder para ícone */}
          <div className="w-10 h-10 bg-blue-600 rounded-full opacity-20"></div>
        </div>
        <h3 className="font-semibold text-gray-800">{category.name}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
