import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Navigation',
      links: [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/process', label: 'Our Process' },
        { href: '/services', label: 'Services' },
        { href: '/global', label: 'Global Reach' },
      ],
    },
    {
      title: 'Services',
      links: [
        { href: '/#services', label: 'UK Independent Schools' },
        { href: '/#services', label: 'International Schools' },
        { href: '/#services', label: 'Swiss Boarding Schools' },
        { href: '/#services', label: 'American Schools' },
        { href: '/#services', label: 'European Schools' },
        { href: '/#services', label: 'Asian Schools' },
      ],
    },
  ];

  const socialLinks = [
    { href: '#', icon: Linkedin, label: 'LinkedIn' },
    { href: '#', icon: Twitter, label: 'Twitter' },
    { href: '#', icon: Instagram, label: 'Instagram' },
  ];

  return (
    <footer className="bg-primary-800 text-white">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="font-bodoni text-xl font-bold mb-2">
                HNW EDUCATION
              </div>
              <div className="text-sm text-gray-300 tracking-wider mb-4">
                EDUCATIONAL CONSULTANCY
              </div>
              <p className="text-gray-300 leading-relaxed">
                Trusted advisors for international families seeking exceptional 
                educational opportunities worldwide.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg bg-primary-700 hover:bg-primary-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-lg mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@hnweducation.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@hnweducation.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+442070000000"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +44 (0) 20 7000 0000
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  London, United Kingdom
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © {currentYear} HNW Education. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

