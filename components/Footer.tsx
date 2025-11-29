import React from 'react';
import { Link } from 'react-router-dom';
import { RoutePath } from '../types';
import { Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
              Democratizing access to Fortune 500 HR tools for small businesses. Compliance made simple.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-6">Shop</h3>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link to={RoutePath.SHOP} className="hover:text-slate-900 transition-colors">Employee Handbooks</Link></li>
              <li><Link to={RoutePath.SHOP} className="hover:text-slate-900 transition-colors">Policies</Link></li>
              <li><Link to={RoutePath.SHOP} className="hover:text-slate-900 transition-colors">Hiring Kits</Link></li>
              <li><Link to={RoutePath.SHOP} className="hover:text-slate-900 transition-colors">Bundles</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-6">Support</h3>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link to={RoutePath.CONTACT} className="hover:text-slate-900 transition-colors">Contact Us</Link></li>
              <li><Link to={RoutePath.ABOUT} className="hover:text-slate-900 transition-colors">About SimpleHR</Link></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Licensing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-6">Stay Updated</h3>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white border border-slate-200 text-slate-900 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 text-sm flex-grow"
              />
              <button 
                type="submit" 
                className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg font-bold text-sm transition-colors"
              >
                Go
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} Simple HR Solutions. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-900">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;