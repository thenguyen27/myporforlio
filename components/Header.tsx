
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-sky-100/50' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="group flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-sky-300 to-cyan-300 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <i className="ri-code-s-slash-line text-white"></i>
            </div>
            <span className="text-xl font-bold text-gray-800 group-hover:text-sky-500 transition-colors duration-300" style={{fontFamily: 'var(--font-pacifico)'}}>
              Nguyen Tran
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {[
              { id: 'home', label: 'Home', icon: 'ri-home-4-line' },
              { id: 'about', label: 'About', icon: 'ri-user-line' },
              { id: 'projects', label: 'Projects', icon: 'ri-folder-line' },
              { id: 'skills', label: 'Skills', icon: 'ri-tools-line' },
              { id: 'career', label: 'Career', icon: 'ri-briefcase-line' },
              { id: 'contact', label: 'Contact', icon: 'ri-mail-line' }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group flex items-center space-x-1 text-gray-700 hover:text-sky-500 transition-all duration-300 cursor-pointer whitespace-nowrap px-3 py-2 rounded-full hover:bg-sky-50/50"
              >
                <i className={`${item.icon} text-sm group-hover:scale-110 transition-transform duration-200`}></i>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 cursor-pointer bg-gradient-to-r from-sky-300 to-cyan-300 text-white rounded-full hover:scale-110 transition-all duration-300"
          >
            <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-6 right-6 md:hidden mt-2 py-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-sky-100/50">
              <div className="flex flex-col space-y-2 px-4">
                {[
                  { id: 'home', label: 'Home', icon: 'ri-home-4-line' },
                  { id: 'about', label: 'About', icon: 'ri-user-line' },
                  { id: 'projects', label: 'Projects', icon: 'ri-folder-line' },
                  { id: 'skills', label: 'Skills', icon: 'ri-tools-line' },
                  { id: 'career', label: 'Career', icon: 'ri-briefcase-line' },
                  { id: 'contact', label: 'Contact', icon: 'ri-mail-line' }
                ].map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="group flex items-center space-x-3 text-gray-700 hover:text-sky-500 hover:bg-sky-50/50 transition-all duration-300 cursor-pointer whitespace-nowrap px-4 py-3 rounded-xl text-left"
                  >
                    <i className={`${item.icon} group-hover:scale-110 transition-transform duration-200`}></i>
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
