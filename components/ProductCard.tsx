import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import Button from './Button';
import { Star, Download } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden flex flex-col border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
           <span className="bg-white/90 backdrop-blur text-slate-900 text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wider flex items-center gap-1">
             <Download size={10} /> Instant Download
           </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} fill="#1e293b" className="text-slate-900" />
          ))}
          <span className="text-xs text-slate-400 ml-1">(24)</span>
        </div>
        
        <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-primary-500 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
          <span className="text-xl font-bold text-slate-900">${product.price}</span>
          <Link to={`/shop/${product.id}`}>
            <Button variant="secondary" size="sm" className="rounded-xl font-bold">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;