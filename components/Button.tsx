import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'pastel';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:pointer-events-none active:scale-95";
  
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-lg focus:ring-slate-900",
    secondary: "bg-white text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm",
    pastel: "bg-primary-200 text-slate-900 hover:bg-primary-300 shadow-sm hover:shadow-primary-200/50",
    outline: "border border-slate-300 bg-transparent text-slate-700 hover:text-slate-900 hover:border-slate-900",
    ghost: "bg-transparent hover:bg-slate-100 text-slate-600 hover:text-slate-900",
  };

  const sizes = {
    sm: "h-9 px-4 text-xs uppercase tracking-wide",
    md: "h-11 px-6 text-sm",
    lg: "h-14 px-8 text-base",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;