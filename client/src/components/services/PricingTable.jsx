/**
 * @file PricingTable.jsx
 * @description Flexible pricing table displaying services or plan packages cleanly.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import Button from '../common/Button';

const PricingTable = ({ services = [], plans, category = 'car-wash' }) => {
  // Use services array if passed, or fallback to plans
  const itemList = services.length > 0 ? services : (plans || []);

  if (!itemList || itemList.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500 bg-white rounded-3xl border border-gray-100">
        No pricing details available.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {itemList.map((item, idx) => {
        const title = item.name || item.title || 'Service Plan';
        const desc = item.shortDescription || item.description || '';
        const itemSlug = item.slug || '';
        const catSlug = item.categorySlug || category;
        const features = item.features || [];
        
        let priceText = '₹499';
        if (typeof item.price === 'object' && item.price !== null) {
          priceText = `${item.price.currency || '₹'}${item.price.starting || 499}`;
        } else if (item.price) {
          priceText = typeof item.price === 'number' || !String(item.price).startsWith('₹') 
            ? `₹${item.price}` 
            : String(item.price);
        }

        const isPopular = idx === 0 || item.isPopular;

        return (
          <div 
            key={item.id || idx}
            className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
              isPopular 
                ? 'bg-white border-2 border-primary-light shadow-green-lg scale-[1.02]' 
                : 'bg-white border border-gray-200 shadow-sm hover:shadow-md'
            }`}
          >
            {isPopular && (
              <div className="absolute top-0 right-8 bg-gradient-primary text-white text-xs font-extrabold uppercase tracking-wider px-4 py-1 rounded-b-xl shadow-md">
                Best Value
              </div>
            )}

            <div>
              <h3 className="font-heading font-extrabold text-2xl text-primary-dark mb-2">
                {title}
              </h3>
              <p className="text-gray-600 text-sm mb-6 min-h-[40px] leading-relaxed">
                {desc}
              </p>

              <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-gray-100">
                <span className="text-4xl font-extrabold text-primary-dark font-heading">
                  {priceText}
                </span>
                <span className="text-gray-500 text-xs font-medium">/ onwards</span>
              </div>

              {features.length > 0 && (
                <div className="mb-8">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-3">
                    What's Included:
                  </span>
                  <ul className="flex flex-col gap-3">
                    {features.slice(0, 6).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-700">
                        <Check size={18} className="text-primary-light shrink-0 mt-0.5" />
                        <span>{typeof feat === 'string' ? feat : feat.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="pt-4 mt-auto">
              <Link to={`/book?service=${itemSlug}`}>
                <Button 
                  variant={isPopular ? 'primary' : 'outline'} 
                  className="w-full justify-center text-base py-3"
                >
                  <span>Book Now</span>
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PricingTable;
