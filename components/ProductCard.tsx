
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(product)}
      className={`${product.color} p-4 rounded-3xl mb-6 cursor-pointer border-4 border-white depth-shadow active-press transition-all duration-200 transform hover:scale-[1.02]`}
    >
      <div className="flex items-center space-x-4">
        <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-white flex-shrink-0">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <h3 className="text-white text-xl font-title leading-tight drop-shadow-sm">
            {product.name}
          </h3>
          <p className="text-white opacity-90 text-sm font-semibold mb-2">
            {product.description}
          </p>
          <div className="inline-block bg-white px-3 py-1 rounded-full">
            <span className="text-gray-800 font-bold text-lg">
              R$ {product.price},00
            </span>
          </div>
        </div>
        <div className="bg-white/30 rounded-full p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};
