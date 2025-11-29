import React, { useState, useEffect } from 'react';
import { X, Lock, CheckCircle, Mail, CreditCard, Loader2 } from 'lucide-react';
import Button from './Button';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  price: number;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, productName, price }) => {
  const [step, setStep] = useState<'payment' | 'processing' | 'success'>('payment');
  const [email, setEmail] = useState('');
  
  // Reset state when opened
  useEffect(() => {
    if (isOpen) {
      setStep('payment');
      setEmail('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');
    
    // Simulate payment gateway and email server delay
    setTimeout(() => {
      setStep('success');
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wide">
            <Lock size={12} /> Secure Checkout
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-900 transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-8">
          {step === 'payment' && (
            <form onSubmit={handlePayment} className="space-y-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{productName}</h3>
                <p className="text-2xl font-bold text-primary-600">${price.toFixed(2)}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Where should we send your files?"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-sm"
                  />
                  <p className="text-xs text-slate-400 mt-1">Your download link will be sent here automatically.</p>
                </div>

                <div className="pt-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Card Information</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="0000 0000 0000 0000"
                      className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-sm font-mono"
                    />
                    <CreditCard className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-3">
                    <input 
                      type="text" 
                      placeholder="MM / YY"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none text-sm text-center"
                    />
                    <input 
                      type="text" 
                      placeholder="CVC"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none text-sm text-center"
                    />
                  </div>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full mt-4">
                Pay ${price.toFixed(2)}
              </Button>
              
              <div className="flex justify-center gap-3 opacity-50 grayscale mt-4">
                 {/* Mock Payment Icons */}
                 <div className="h-6 w-10 bg-slate-200 rounded"></div>
                 <div className="h-6 w-10 bg-slate-200 rounded"></div>
                 <div className="h-6 w-10 bg-slate-200 rounded"></div>
              </div>
            </form>
          )}

          {step === 'processing' && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Loader2 size={48} className="text-primary-500 animate-spin mb-6" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Processing Payment...</h3>
              <p className="text-slate-500 text-sm">Please do not close this window.</p>
            </div>
          )}

          {step === 'success' && (
            <div className="flex flex-col items-center justify-center text-center animate-in zoom-in-50 duration-300">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Order Confirmed!</h3>
              <p className="text-slate-600 mb-6">
                Thank you for your purchase. We have sent a secure download link to <span className="font-bold text-slate-900">{email}</span>.
              </p>
              
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 w-full mb-6 flex items-start text-left">
                <Mail className="text-primary-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <div>
                  <p className="text-sm font-bold text-slate-900">Check your inbox</p>
                  <p className="text-xs text-slate-500">Subject: Your Simple HR Download - {productName}</p>
                </div>
              </div>

              <Button onClick={onClose} variant="outline" className="w-full">
                Close
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;