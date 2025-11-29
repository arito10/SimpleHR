
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS, FAQS } from '../constants';
import Button from '../components/Button';
import Accordion from '../components/Accordion';
import CheckoutModal from '../components/CheckoutModal';
import { Check, FileText, ArrowLeft, Star, ShieldCheck, Download, Lock } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Product Not Found</h2>
        <Link to="/shop"><Button>Back to Shop</Button></Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/shop" className="text-slate-500 hover:text-slate-900 inline-flex items-center text-sm mb-8 font-medium">
          <ArrowLeft size={16} className="mr-2" /> Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Image Side */}
          <div className="space-y-6">
            <div className="rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 shadow-sm aspect-[4/3]">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-50 p-6 rounded-2xl flex flex-col items-center text-center">
                <Download size={24} className="text-primary-600 mb-2" />
                <h4 className="font-bold text-slate-900 text-sm">Instant Access</h4>
                <p className="text-xs text-slate-500 mt-1">Download immediately after checkout</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl flex flex-col items-center text-center">
                <Lock size={24} className="text-slate-900 mb-2" />
                <h4 className="font-bold text-slate-900 text-sm">Secure Payment</h4>
                <p className="text-xs text-slate-500 mt-1">Encrypted SSL Checkout</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="mb-4 flex items-center gap-4">
               <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                 {product.category}
               </span>
               <div className="flex items-center gap-1">
                 <div className="flex text-slate-900">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                 </div>
                 <span className="text-xs text-slate-500 underline decoration-slate-300 underline-offset-4 cursor-pointer">Read reviews</span>
               </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-baseline gap-2 mb-8">
               <span className="text-3xl font-bold text-slate-900">${product.price.toFixed(2)}</span>
            </div>

            <Button 
              size="lg" 
              className="w-full mb-4 shadow-xl shadow-primary-200/50 text-lg py-6"
              onClick={() => setIsCheckoutOpen(true)}
            >
              Get Access Now
            </Button>
            <p className="text-xs text-center text-slate-400 mb-8">Secure checkout via Stripe • Instant Download</p>
            
            <div className="prose prose-slate max-w-none mb-10">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Description</h3>
              <p className="text-slate-600 leading-relaxed text-base">{product.fullDescription}</p>
            </div>

            <div className="mb-10">
              <h3 className="font-bold text-slate-900 mb-4">What's Included:</h3>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-slate-700 bg-slate-50 px-4 py-3 rounded-lg border border-slate-100">
                    <Check size={18} className="text-primary-500 mr-3 flex-shrink-0" strokeWidth={3} />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Accordion for Product FAQs */}
            <div className="space-y-2">
               <Accordion title="File Format & Compatibility">
                  All templates are provided in Microsoft Word (.docx) and PDF format. They are fully compatible with Google Docs, Microsoft Word (2010 or newer), and Pages.
               </Accordion>
               <Accordion title="Licensing">
                  Your purchase includes a single-business license. You may use these documents for your own company indefinitely. Resale or redistribution is prohibited.
               </Accordion>
               <Accordion title="Refund Policy">
                  Due to the digital nature of our products, all sales are final. We cannot offer returns or exchanges once files have been downloaded.
               </Accordion>
            </div>

          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)}
        productName={product.name}
        price={product.price}
      />
    </div>
  );
};

export default ProductDetail;
