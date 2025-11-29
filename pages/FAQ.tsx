import React from 'react';
import Accordion from '../components/Accordion';
import { FAQS } from '../constants';
import { HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
            <HelpCircle size={32} />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-slate-600 text-lg">
            Everything you need to know about our templates, licensing, and support.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-12">
          {FAQS.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-2">
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.questions.map((item, qIdx) => (
                  <Accordion key={qIdx} title={item.q}>
                    {item.a}
                  </Accordion>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Still need help? */}
        <div className="mt-20 bg-slate-50 rounded-3xl p-8 text-center border border-slate-100">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Still have questions?</h3>
          <p className="text-slate-500 mb-6">We're here to help you get the most out of your HR tools.</p>
          <a 
            href="mailto:support@simplehr.com" 
            className="inline-flex items-center justify-center bg-slate-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-slate-800 transition-colors"
          >
            Contact Support
          </a>
        </div>

      </div>
    </div>
  );
};

export default FAQ;