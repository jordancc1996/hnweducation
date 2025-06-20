import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Mail, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/process', label: 'Our Process' },
    { href: '/services', label: 'Services' },
    { href: '/global', label: 'Global Reach' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-primary-500" />
            ) : (
              <Menu className="w-6 h-6 text-primary-500" />
            )}
          </button>

          {/* Logo */}
          <Link href="/" className="flex-1 lg:flex-none">
            <div className="text-center lg:text-left">
              <div className="font-bodoni text-xl lg:text-2xl font-bold text-primary-500">
                HNW EDUCATION
              </div>
              <div className="text-xs lg:text-sm text-gray-600 tracking-wider">
                EDUCATIONAL CONSULTANCY
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary-500 font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="mailto:info@hnweducation.com"
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Email us"
            >
              <Mail className="w-5 h-5 text-primary-500" />
            </a>
            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Settings"
            >
              <Settings className="w-5 h-5 text-primary-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="container py-6">
              <div className="space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-gray-700 hover:text-primary-500 font-medium transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  HNW Education - Your trusted partner in educational excellence
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;

