/**
 * @file Footer.jsx
 * @description Premia Carwash Footer with Quick Links column, removed address, and phone +91 8882670676.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Clock, Sparkles } from 'lucide-react';
import companyInfo from '../../data/companyInfo';

const Footer = () => {
  return (
    <footer className="bg-bg-dark text-text-light pt-16 pb-8 border-t border-primary-dark/30 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        
        {/* Col 1: Logo + Tagline + Social Icons */}
        <div className="flex flex-col gap-4">
          <div className="bg-white px-3.5 py-2 rounded-xl shadow-lg border border-white/20 inline-block w-fit">
            <img src="/images/navBarLogo.png" alt="Premia Carwash" className="h-16 md:h-20 w-auto object-contain max-w-[340px]" />
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            {companyInfo.description}
          </p>
          <div className="flex items-center gap-3 mt-2">
            {companyInfo.social?.facebook && (
              <a href={companyInfo.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-accent hover:bg-white/20 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            )}
            {companyInfo.social?.instagram && (
              <a href={companyInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-accent hover:bg-white/20 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            )}
            {companyInfo.social?.youtube && (
              <a href={companyInfo.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-accent hover:bg-white/20 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            )}
          </div>
        </div>
        
        {/* Col 2: Our Services */}
        <div className="flex flex-col gap-3">
          <h4 className="font-heading font-bold text-lg text-white mb-1">Our Services</h4>
          <Link to="/services/car-wash" className="text-gray-400 hover:text-accent transition-colors text-sm">Car Wash & Detailing</Link>
          <Link to="/services/car-wash/foam-wash" className="text-gray-400 hover:text-accent transition-colors text-xs pl-2">─ Foam Wash & Polish</Link>
          <Link to="/services/car-wash/detailing" className="text-gray-400 hover:text-accent transition-colors text-xs pl-2">─ Full Interior Detailing</Link>
          <Link to="/services/commercial" className="text-gray-400 hover:text-accent transition-colors text-sm mt-1">Commercial Cleaning</Link>
          <Link to="/services/commercial/truck-cleaning" className="text-gray-400 hover:text-accent transition-colors text-xs pl-2">─ Fleet & Truck Wash</Link>
          <Link to="/services/home" className="text-gray-400 hover:text-accent transition-colors text-sm mt-1">Home & Carpet Care</Link>
          <Link to="/services/home/sofa-cleaning" className="text-gray-400 hover:text-accent transition-colors text-xs pl-2">─ Sofa Deep Cleaning</Link>
        </div>

        {/* Col 3: Quick Links Section */}
        <div className="flex flex-col gap-3">
          <h4 className="font-heading font-bold text-lg text-white mb-1">Quick Links</h4>
          <Link to="/about" className="text-gray-400 hover:text-accent transition-colors text-sm">About Premia</Link>
          <Link to="/contact" className="text-gray-400 hover:text-accent transition-colors text-sm">Contact Us</Link>
          <Link to="/gallery" className="text-gray-400 hover:text-accent transition-colors text-sm">Gallery</Link>
          <Link to="/pricing" className="text-gray-400 hover:text-accent transition-colors text-sm">Online Payment & Pricing</Link>
          <Link to="/privacy-policy" className="text-gray-400 hover:text-accent transition-colors text-sm">Privacy Policy</Link>
          <Link to="/terms-of-service" className="text-gray-400 hover:text-accent transition-colors text-sm">Terms & Conditions</Link>
          <Link to="/refund-policy" className="text-gray-400 hover:text-accent transition-colors text-sm">Cancellation & Refund</Link>
          <Link to="/shipping-policy" className="text-gray-400 hover:text-accent transition-colors text-sm">Shipping & Delivery</Link>
        </div>

        {/* Col 4: Contact Details (No Address) */}
        <div className="flex flex-col gap-3">
          <h4 className="font-heading font-bold text-lg text-white mb-1">Contact Details</h4>
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <Phone size={16} className="text-accent shrink-0" />
            <a href={`tel:${companyInfo.phone}`} className="hover:text-accent font-bold transition-colors">{companyInfo.phone}</a>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <Mail size={16} className="text-accent shrink-0" />
            <a href={`mailto:${companyInfo.email}`} className="hover:text-accent transition-colors">{companyInfo.email}</a>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <Clock size={16} className="text-accent shrink-0" />
            <span>{companyInfo.businessHours}</span>
          </div>
          <div className="mt-2 p-3 rounded-2xl bg-white/5 border border-white/10 text-xs text-gray-300">
            <span className="font-bold text-accent block mb-0.5">Founded in {companyInfo.foundedYear}</span>
            <span>Founder: {companyInfo.founder.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
        <p>&copy; {companyInfo.copyrightYear} {companyInfo.name}. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4">
          <Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-accent transition-colors">Terms & Conditions</Link>
          <Link to="/refund-policy" className="hover:text-accent transition-colors">Cancellation & Refund</Link>
          <Link to="/shipping-policy" className="hover:text-accent transition-colors">Shipping & Delivery</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
