import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

const Logo: React.FC<LogoProps> = ({ className = "", variant = 'dark' }) => {
  const textColor = variant === 'dark' ? 'text-slate-900' : 'text-white';
  const iconColor = variant === 'dark' ? '#2DD4BF' : '#99F6E4'; // Teal-400 (dark mode) or Teal-200 (light mode)
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="32" height="32" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 70C20 58.9543 28.9543 50 40 50" stroke={iconColor} strokeWidth="6" strokeLinecap="round"/>
        <circle cx="25" cy="45" r="8" stroke={iconColor} strokeWidth="6"/>
        <path d="M80 70C80 58.9543 71.0457 50 60 50" stroke={iconColor} strokeWidth="6" strokeLinecap="round"/>
        <circle cx="75" cy="45" r="8" stroke={iconColor} strokeWidth="6"/>
        <path d="M35 70C35 56.1929 46.1929 45 60 45" stroke={iconColor} strokeWidth="6" strokeLinecap="round"/>
        <path d="M65 70C65 56.1929 53.8071 45 40 45" stroke={iconColor} strokeWidth="6" strokeLinecap="round"/>
        <circle cx="50" cy="35" r="10" stroke={iconColor} strokeWidth="6" fill="none"/>
        <path d="M50 18V8" stroke={iconColor} strokeWidth="5" strokeLinecap="round"/>
        <path d="M38 20L32 12" stroke={iconColor} strokeWidth="5" strokeLinecap="round"/>
        <path d="M62 20L68 12" stroke={iconColor} strokeWidth="5" strokeLinecap="round"/>
      </svg>
      <div className={`font-bold text-lg tracking-tight ${textColor}`}>
        Simple<span className="font-light">HR</span>
      </div>
    </div>
  );
};

export default Logo;