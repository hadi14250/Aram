'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg backdrop-blur-sm bg-white/90' 
        : 'bg-blue-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group -ml-64">
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled 
                ? 'text-blue-900 group-hover:text-blue-700' 
                : 'text-white group-hover:text-blue-100'
            }`}>
              Aram Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            <Link 
              href="/" 
              className={`transition-all duration-300 ${
                pathname === "/" 
                  ? isScrolled 
                    ? "text-blue-900 font-semibold border-b-2 border-blue-900" 
                    : "text-white font-semibold border-b-2 border-white"
                  : isScrolled 
                    ? "text-gray-600 hover:text-blue-900 hover:border-b-2 hover:border-blue-900" 
                    : "text-blue-100 hover:text-white hover:border-b-2 hover:border-white"
              }`}
            >
              Home
            </Link>
            <Link 
              href="/summary" 
              className={`transition-all duration-300 ${
                pathname === "/summary" 
                  ? isScrolled 
                    ? "text-blue-900 font-semibold border-b-2 border-blue-900" 
                    : "text-white font-semibold border-b-2 border-white"
                  : isScrolled 
                    ? "text-gray-600 hover:text-blue-900 hover:border-b-2 hover:border-blue-900" 
                    : "text-blue-100 hover:text-white hover:border-b-2 hover:border-white"
              }`}
            >
              Summary Information
            </Link>
            <Link 
              href="/about" 
              className={`transition-all duration-300 ${
                pathname === "/about" 
                  ? isScrolled 
                    ? "text-blue-900 font-semibold border-b-2 border-blue-900" 
                    : "text-white font-semibold border-b-2 border-white"
                  : isScrolled 
                    ? "text-gray-600 hover:text-blue-900 hover:border-b-2 hover:border-blue-900" 
                    : "text-blue-100 hover:text-white hover:border-b-2 hover:border-white"
              }`}
            >
              About Us
            </Link>
            <Link 
              href="/business" 
              className={`transition-all duration-300 ${
                pathname === "/business" 
                  ? isScrolled 
                    ? "text-blue-900 font-semibold border-b-2 border-blue-900" 
                    : "text-white font-semibold border-b-2 border-white"
                  : isScrolled 
                    ? "text-gray-600 hover:text-blue-900 hover:border-b-2 hover:border-blue-900" 
                    : "text-blue-100 hover:text-white hover:border-b-2 hover:border-white"
              }`}
            >
              Business & Expertise
            </Link>
            <Link 
              href="/projects" 
              className={`transition-all duration-300 ${
                pathname === "/projects" 
                  ? isScrolled 
                    ? "text-blue-900 font-semibold border-b-2 border-blue-900" 
                    : "text-white font-semibold border-b-2 border-white"
                  : isScrolled 
                    ? "text-gray-600 hover:text-blue-900 hover:border-b-2 hover:border-blue-900" 
                    : "text-blue-100 hover:text-white hover:border-b-2 hover:border-white"
              }`}
            >
              Projects
            </Link>
            <Link 
              href="/vision" 
              className={`transition-all duration-300 ${
                pathname === "/vision" 
                  ? isScrolled 
                    ? "text-blue-900 font-semibold border-b-2 border-blue-900" 
                    : "text-white font-semibold border-b-2 border-white"
                  : isScrolled 
                    ? "text-gray-600 hover:text-blue-900 hover:border-b-2 hover:border-blue-900" 
                    : "text-blue-100 hover:text-white hover:border-b-2 hover:border-white"
              }`}
            >
              Vision & Mission
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-gray-900' : 'text-white'} p-2 rounded-md hover:bg-gray-100/20 transition-colors duration-300`}
              aria-label="Toggle menu"
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
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        } bg-white shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link 
            href="/" 
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
              pathname === "/" ? "bg-blue-900 text-white" : "text-gray-900 hover:bg-blue-50 hover:text-blue-900"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/summary" 
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
              pathname === "/summary" ? "bg-blue-900 text-white" : "text-gray-900 hover:bg-blue-50 hover:text-blue-900"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Summary Information
          </Link>
          <Link 
            href="/about" 
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
              pathname === "/about" ? "bg-blue-900 text-white" : "text-gray-900 hover:bg-blue-50 hover:text-blue-900"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            href="/business" 
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
              pathname === "/business" ? "bg-blue-900 text-white" : "text-gray-900 hover:bg-blue-50 hover:text-blue-900"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Business & Expertise
          </Link>
          <Link 
            href="/projects" 
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
              pathname === "/projects" ? "bg-blue-900 text-white" : "text-gray-900 hover:bg-blue-50 hover:text-blue-900"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <Link 
            href="/vision" 
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
              pathname === "/vision" ? "bg-blue-900 text-white" : "text-gray-900 hover:bg-blue-50 hover:text-blue-900"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Vision & Mission
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 