/**
 * @file WhatsAppFloat.jsx
 * @description Floating WhatsApp contact button positioned above mobile bottom bar.
 */
import React, { useState } from 'react';
import { X } from 'lucide-react';
import companyInfo from '../../data/companyInfo';

const WhatsAppFloat = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const phoneClean = companyInfo.whatsapp || '918882670676';
  const whatsappUrl = `https://wa.me/${phoneClean}?text=Hi%20Premia%20Carwash,%20I%20would%20like%20to%20inquire%20about%20your%20carwash%20and%20cleaning%20services.`;

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-2 group">
      {/* Tooltip Popup */}
      {showTooltip && (
        <div className="bg-[#0B3D2E] text-white text-[11px] font-semibold px-3 py-1.5 rounded-xl shadow-2xl border border-white/20 flex items-center gap-2 animate-bounce">
          <span>💬 Chat with Premia on WhatsApp!</span>
          <button 
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowTooltip(false); }}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <X size={12} />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Premia Carwash on WhatsApp"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 relative group"
      >
        {/* Ambient Pulsing Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none" />
        
        {/* SVG Official WhatsApp Icon */}
        <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current relative z-10" viewBox="0 0 24 24">
          <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.124.555 4.197 1.608 6.015L.073 24l6.096-1.599c1.751.954 3.737 1.458 5.862 1.458 6.646 0 12.031-5.385 12.031-12.028C24.062 5.385 18.677 0 12.031 0zm.016 22.041c-1.84 0-3.644-.495-5.218-1.433l-.375-.225-3.87.1.378-3.771-.246-.39A9.972 9.972 0 012.04 12.03c0-5.508 4.48-9.988 9.99-9.988 5.508 0 9.988 4.48 9.988 9.988 0 5.508-4.48 9.988-9.971 9.988zm5.487-7.487c-.301-.15-1.782-.88-2.058-.98-.276-.1-.477-.15-.678.15-.201.301-.78 1.002-.956 1.203-.176.201-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.787-1.676-2.088-.176-.301-.019-.464.131-.613.136-.135.301-.351.452-.527.15-.176.201-.301.301-.502.1-.201.05-.376-.025-.527-.075-.15-.678-1.631-.929-2.233-.244-.585-.494-.506-.678-.515-.175-.008-.376-.008-.577-.008-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.511 0 1.481 1.079 2.91 1.229 3.111.15.201 2.124 3.243 5.145 4.547.719.31 1.28.496 1.718.636.721.23 1.377.197 1.896.12.578-.086 1.782-.728 2.033-1.431.251-.703.251-1.305.176-1.431-.075-.125-.276-.201-.577-.351z"/>
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppFloat;
