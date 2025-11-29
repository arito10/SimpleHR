import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const Shop: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const categories = ['all', 'templates', 'policies', 'guides', 'kits'];

  const filteredProducts = filter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="bg-white min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">HR Solutions & Templates</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Professional-grade documentation and tools designed to protect your business and support your team.
          </p>
        </div>

        {/* Categories / Filter */}
        <div className="flex justify-center mb-12 overflow-x-auto no-scrollbar pb-4">
          <div className="flex gap-2 p-1 bg-slate-50 rounded-full border border-slate-100">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  filter === cat 
                    ? 'bg-white text-slate-900 shadow-sm ring-1 ring-black/5' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {cat === 'all' ? 'All Solutions' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-24 bg-slate-50 rounded-3xl border border-slate-100">
            <p className="text-slate-400 text-lg mb-4">No products found in this category.</p>
            <button onClick={() => setFilter('all')} className="text-primary-600 font-bold hover:underline">View All Solutions</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;