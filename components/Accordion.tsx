import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-slate-300 bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
      >
        <span className="font-semibold text-slate-900">{title}</span>
        <span className={`text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <div 
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-slate-600 leading-relaxed text-sm">
          {children}
        </p>
      </div>
    </div>
  );
};

export default Accordion;