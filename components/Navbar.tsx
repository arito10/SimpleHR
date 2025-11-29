import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { RoutePath } from '../types';
import Button from './Button';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: RoutePath.HOME },
    { name: 'Templates', path: RoutePath.SHOP },
    { name: 'Free Resources', path: RoutePath.BLOG },
    { name: 'About', path: RoutePath.ABOUT },
    { name: 'Contact', path: RoutePath.CONTACT },
  ];

  return (
    <>
      <nav className={`sticky top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-white/95 backdrop-blur-md border-slate-100 py-3' : 'bg-white border-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <Link to={RoutePath.HOME} className="flex-shrink-0 hover:opacity-80 transition-opacity">
              <Logo />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.path 
                      ? 'text-slate-900' 
                      : 'text-slate-500 hover:text-primary-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-4">
               <div className="relative cursor-pointer text-slate-500 hover:text-slate-900 transition-colors">
                 <ShoppingBag size={20} />
                 <span className="absolute -top-1 -right-1 bg-primary-400 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
               </div>
               <Link to={RoutePath.SHOP}>
                  <Button size="sm" variant="primary" className="rounded-full px-5">
                    Browse All Templates
                  </Button>
               </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-4">
              <ShoppingBag size={20} className="text-slate-600" />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-900 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-600"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-slate-100">
                <Link to={RoutePath.SHOP} onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full justify-center">Browse All Templates</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;