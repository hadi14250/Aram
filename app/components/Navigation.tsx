'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from "next/image";

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
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-white ${isScrolled ? 'shadow-lg backdrop-blur-sm bg-white/90' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          <Link href="/" className="flex items-center">
            <div className="relative w-30 h-30 sm:w-40 sm:h-40">
              <Image
                src="/images/aram_transparent.png"
                alt="About Us"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-base sm:text-2xl font-bold text-green-900 ml-2">
              {/* Aram Group */}
            </span>
          </Link>


          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: "/", label: "Home" },
              { href: "/summary", label: "Summary Information" },
              { href: "/about", label: "About Us" },
              { href: "/business", label: "Business & Expertise" },
              { href: "/projects", label: "Projects" },
              { href: "/Contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`transition-all duration-300 ${pathname === href
                  ? "text-green-900 font-semibold border-b-2 border-green-900"
                  : "text-green-900 hover:text-green-700 hover:border-b-2 hover:border-green-700"
                  }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-green-900 p-2 rounded-md hover:bg-gray-100/20 transition-colors duration-300"
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

      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
          ? 'max-h-screen opacity-100'
          : 'max-h-0 opacity-0 overflow-hidden'
          } bg-white shadow-lg`}
      >
        <div className="px-4 py-2 space-y-2">
          {[
            { href: "/", label: "Home" },
            { href: "/summary", label: "Summary Information" },
            { href: "/about", label: "About Us" },
            { href: "/business", label: "Business & Expertise" },
            { href: "/projects", label: "Projects" },
            { href: "/Contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block px-4 py-3 rounded-md text-base font-medium transition-colors duration-300 ${pathname === href
                ? "bg-green-900 text-white"
                : "text-green-900 hover:bg-green-50 hover:text-green-700"
                }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
