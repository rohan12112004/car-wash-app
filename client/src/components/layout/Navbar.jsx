/**
 * @file Navbar.jsx
 * @description Main navigation bar for Premia Carwash.
 * Includes mobile 'Book Service' CTA button positioned between logo and hamburger toggle.
 */
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import Button from '../common/Button';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import companyInfo from '../../data/companyInfo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollY = useScrollPosition();
  const location = useLocation();

  const isScrolled = scrollY > 20;

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Car Wash', path: '/services/car-wash' },
    { name: 'Commercial', path: '/services/commercial' },
    { name: 'Home Care', path: '/services/home' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Franchise', path: '/franchise' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/98 backdrop-blur-xl border-b border-[#0B3D2E]/10 shadow-md py-1'
        : 'bg-white border-b border-[#0B3D2E]/8 shadow-sm py-1.5'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo — Horizontally Stretched for Crisp Legibility */}
        <Link to="/" className="flex items-center group shrink-0 py-0 mr-6 sm:mr-10 md:mr-12">
          <img
            src="/images/logo.png"
            alt="Premia Carwash"
            className="h-10 sm:h-11 md:h-12 w-auto object-contain scale-x-125 sm:scale-x-135 md:scale-x-140 origin-left transition-transform duration-200 group-hover:scale-x-145"
          />
        </Link>

        {/* Desktop Navigation Links — dark green to match logo text */}
        <nav className="hidden lg:flex items-center gap-5">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs sm:text-sm font-semibold transition-all duration-200 relative py-1 ${
                  isActive
                    ? 'text-[#0B3D2E] font-bold'
                    : 'text-[#0B3D2E]/70 hover:text-[#0B3D2E]'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0B3D2E] rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${companyInfo.phone}`}
            className="flex items-center gap-2 text-xs text-[#0B3D2E] hover:text-[#0B3D2E]/80 transition-colors border border-[#0B3D2E]/20 rounded-full px-3.5 py-1.5 bg-white font-bold"
          >
            <Phone size={14} className="text-[#0B3D2E]" />
            <span>{companyInfo.phone}</span>
          </a>
          <Link to="/book">
            <Button size="sm" className="shadow-md text-xs bg-[#0B3D2E] hover:bg-[#14532D] text-white border-0">
              Book Service
            </Button>
          </Link>
        </div>

        {/* Mobile Controls (Book Service CTA + Hamburger Toggle) */}
        <div className="flex lg:hidden items-center gap-2 shrink-0">
          <Link to="/book">
            <Button size="sm" className="shadow-md text-[11px] sm:text-xs px-2.5 sm:px-3.5 py-1.5 bg-[#0B3D2E] hover:bg-[#14532D] text-white border-0 font-bold whitespace-nowrap">
              Book Service
            </Button>
          </Link>
          <button
            className="p-2 rounded-xl bg-[#0B3D2E]/10 text-[#0B3D2E] hover:bg-[#0B3D2E]/20 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-[#0B3D2E]/10 px-4 pt-4 pb-6 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col gap-1.5">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-base font-semibold px-4 py-2.5 rounded-xl transition-colors ${
                    location.pathname === link.path
                      ? 'bg-[#0B3D2E] text-white'
                      : 'text-[#0B3D2E] hover:bg-[#0B3D2E]/10'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 mt-2 border-t border-[#0B3D2E]/10 flex flex-col gap-3">
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center justify-center gap-2 text-sm text-[#0B3D2E] font-bold bg-gray-50 py-3 rounded-xl border border-[#0B3D2E]/20"
                >
                  <Phone size={16} className="text-[#0B3D2E]" />
                  <span>Call {companyInfo.phone}</span>
                </a>
                <Link to="/book" onClick={() => setIsOpen(false)}>
                  <Button className="w-full justify-center text-base py-3 bg-[#0B3D2E] hover:bg-[#14532D] text-white border-0">Book Service Now</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
