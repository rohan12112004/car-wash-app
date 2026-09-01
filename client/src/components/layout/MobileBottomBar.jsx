/**
 * @file MobileBottomBar.jsx
 * @description Sticky bottom action bar on mobile pulling from companyInfo.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Phone, MessageCircle } from 'lucide-react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import companyInfo from '../../data/companyInfo';

const MobileBottomBar = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (!isMobile) return null;

  const phoneClean = companyInfo.whatsapp || '918882670676';
  const whatsappUrl = `https://wa.me/${phoneClean}?text=Hi%20Premia%20Carwash,%20I%20want%20to%20book%20a%20doorstep%20service!`;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-40 pb-safe">
      <div className="flex justify-around items-center px-4 py-2">
        <a 
          href={`tel:${companyInfo.phone}`} 
          className="flex flex-col items-center gap-1 text-gray-700 hover:text-[#0B3D2E] active:scale-95 transition-all"
        >
          <div className="p-1.5 rounded-full bg-gray-100">
            <Phone size={18} className="text-[#0B3D2E]" />
          </div>
          <span className="text-[10px] font-bold font-body">Call Us</span>
        </a>
        
        <Link 
          to="/book" 
          className="flex flex-col items-center gap-1 text-primary relative -top-3"
        >
          <div className="bg-[#0B3D2E] text-white p-3.5 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-transform ring-4 ring-white">
            <CalendarDays size={22} />
          </div>
          <span className="text-[10px] font-extrabold font-heading text-[#0B3D2E] whitespace-nowrap">Book Service</span>
        </Link>
        
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noreferrer" 
          className="flex flex-col items-center gap-1 text-gray-700 hover:text-green-600 active:scale-95 transition-all"
        >
          <div className="p-1.5 rounded-full bg-green-50">
            <MessageCircle size={18} className="text-green-600" />
          </div>
          <span className="text-[10px] font-bold font-body">WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default MobileBottomBar;
