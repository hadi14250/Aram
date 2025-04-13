'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Aram Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-gray-300 transition-colors`}>
              Home
            </Link>
            <Link href="/services" className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-gray-300 transition-colors`}>
              Services
            </Link>
            <Link href="/projects" className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-gray-300 transition-colors`}>
              Projects
            </Link>
            <Link href="/contact" className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-gray-300 transition-colors`}>
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-gray-900' : 'text-white'} p-2`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/" className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">
            Home
          </Link>
          <Link href="/services" className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">
            Services
          </Link>
          <Link href="/projects" className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">
            Projects
          </Link>
          <Link href="/contact" className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 