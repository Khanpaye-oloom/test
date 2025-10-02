
import React, { useState } from 'react';
import { MenuIcon } from './icons/MenuIcon';
import { CloseIcon } from './icons/CloseIcon';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#features', label: 'منابع آموزشی' },
    { href: '#grades', label: 'پایه‌ها' },
    { href: '#about', label: 'درباره من' },
    { href: '#contact', label: 'تماس' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-teal-600">
          خانه علوم
        </a>
        <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-600 hover:text-teal-600 transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white`}>
        <nav className="flex flex-col items-center space-y-4 py-4 border-t">
          {navLinks.map((link) => (
            <a 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)} 
                className="text-gray-600 hover:text-teal-600 transition-colors duration-300 py-2">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
