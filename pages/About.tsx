import React from 'react';
import { Users, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white pt-20">
      {/* Hero */}
      <div className="relative py-24 bg-primary-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-100/50 skew-x-12 translate-x-20"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-serif font-bold mb-6 text-slate-900">About Simple HR</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We believe that good HR is about more than just compliance—it is about building workplaces where people thrive.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary-200 rounded-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
              alt="Office meeting" 
              className="rounded-2xl shadow-xl relative z-10 w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Our Mission</h2>
            <div className="h-1 w-20 bg-primary-500 mb-8"></div>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              Founded in 2020, Simple HR was born from a frustration with the complexity of Human Resources for small businesses. We saw owners struggling with expensive legal fees or risking their companies with generic internet templates.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              Our goal is to democratize access to enterprise-grade HR tools. We provide affordable, high-quality documentation and advice that protects your business while fostering a positive company culture.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white py-24 border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900">Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 text-center hover:translate-y-[-5px] transition-transform">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target size={32} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-slate-900">Simplicity</h3>
              <p className="text-slate-600">We remove the jargon. HR should be understandable and actionable for everyone.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 text-center hover:translate-y-[-5px] transition-transform">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart size={32} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-slate-900">Empathy</h3>
              <p className="text-slate-600">We remember the 'Human' in Human Resources. Policies should support people, not just police them.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 text-center hover:translate-y-[-5px] transition-transform">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-slate-900">Accessibility</h3>
              <p className="text-slate-600">Professional guidance shouldn't be reserved for the Fortune 500. We make it affordable.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;