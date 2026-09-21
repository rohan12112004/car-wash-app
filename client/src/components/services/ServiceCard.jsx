/**
 * @file ServiceCard.jsx
 * @description Premium Service Card component with background image headers, dark gradient overlays, hover zoom, and crisp contrast.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Check, Droplets, Wind, Gem, Star, Zap, Truck, HardHat, Bus, Sofa, 
  LayoutGrid, DoorOpen, AirVent, Container, Sun, Flame, Grid3X3, Car, 
  Building2, Home, Shield, Sparkles, ArrowRight 
} from 'lucide-react';
import Button from '../common/Button';

// String icon lookup
const ICON_MAP = {
  Droplets, Wind, Gem, Star, Zap, Truck, HardHat, Bus, Sofa,
  LayoutGrid, DoorOpen, AirVent, Container, Sun, Flame, Grid3X3,
  Car, Building2, Home, Shield, Sparkles,
};

// Fallback background image lookup for service slugs
const SERVICE_IMAGES = {
  'foam-wash': '/images/car_foam_wash.jpg',
  'detailing': '/images/sedan_detailing.jpg',
  'ceramic-coating': '/images/ceramic_coating.jpg',
  'sofa-cleaning': '/images/sofa_cleaning.jpg',
  'carpet-cleaning': '/images/carpet_cleaning.jpg',
  'truck-cleaning': '/images/truck_cleaning.jpg',
  'fleet-care': '/images/fleet_bus_wash.jpg',
  'interior-steam': '/images/interior_detailing.jpg',
  'ac-cleaning': 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800',
  'water-tank-cleaning': 'https://images.unsplash.com/photo-1542013936693-884638332954?w=800',
  'solar-panel-cleaning': 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800',
  'tiles-cleaning': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800',
  'wall-tiles-cleaning': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800',
  'floor-tiles-cleaning': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800',
  'kitchen-basic-cleaning': 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800',
  'kitchen-deep-cleaning': 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800',
};

const ServiceCard = ({ 
  id, 
  name, 
  title, 
  description, 
  shortDescription, 
  price, 
  icon, 
  heroImage,
  image,
  features = [], 
  isPopular = false, 
  slug, 
  categorySlug,
  service 
}) => {
  const item = service || {};
  const displayTitle = name || title || item.name || item.title || 'Cleaning Service';
  const displayDesc = shortDescription || description || item.shortDescription || item.description || '';
  const itemSlug = slug || item.slug || 'foam-wash';
  const itemCategorySlug = categorySlug || item.categorySlug || 'car-wash';
  const itemFeatures = (features.length > 0 ? features : item.features) || [];
  const rawPrice = price || item.price;
  const rawIcon = icon || item.icon;
  const cardImage = heroImage || image || item.heroImage || item.image || SERVICE_IMAGES[itemSlug] || SERVICE_IMAGES['foam-wash'];

  // Format Price safely
  let formattedPrice = '₹499';
  if (typeof rawPrice === 'object' && rawPrice !== null) {
    formattedPrice = `${rawPrice.currency || '₹'}${rawPrice.starting || 499}`;
  } else if (rawPrice) {
    formattedPrice = typeof rawPrice === 'number' || !String(rawPrice).startsWith('₹') 
      ? `₹${rawPrice}` 
      : String(rawPrice);
  }

  // Resolve Icon Component safely
  let IconComponent = Sparkles;
  if (typeof rawIcon === 'function' || (typeof rawIcon === 'object' && rawIcon !== null)) {
    IconComponent = rawIcon;
  } else if (typeof rawIcon === 'string' && ICON_MAP[rawIcon]) {
    IconComponent = ICON_MAP[rawIcon];
  }

  const linkUrl = itemCategorySlug && itemSlug 
    ? `/services/${itemCategorySlug}/${itemSlug}` 
    : `/book?service=${itemSlug}`;

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={`relative group bg-white rounded-3xl overflow-hidden border ${
        isPopular ? 'border-primary-light shadow-green-lg' : 'border-gray-200 shadow-md'
      } flex flex-col justify-between h-full transition-all duration-300`}
    >
      {/* Top Background Image Banner with Dark Gradient Overlay */}
      <div className="relative h-44 sm:h-48 overflow-hidden bg-bg-dark">
        <img 
          src={cardImage} 
          alt={displayTitle}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        
        {isPopular && (
          <div className="absolute top-3 right-3 bg-gradient-primary text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md z-10">
            Popular Choice
          </div>
        )}

        <div className="absolute bottom-3 left-4 right-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shrink-0 shadow-lg">
            <IconComponent size={20} />
          </div>
          <h3 className="text-lg sm:text-xl font-heading font-extrabold text-white leading-tight drop-shadow-sm">
            {displayTitle}
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <p className="text-gray-600 text-xs sm:text-sm mb-5 leading-relaxed line-clamp-3">
            {displayDesc}
          </p>

          {itemFeatures.length > 0 && (
            <ul className="flex flex-col gap-2 mb-6">
              {itemFeatures.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                  <Check size={14} className="text-primary-light shrink-0" />
                  <span className="line-clamp-1">{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-5 pt-4 border-t border-gray-100">
            <span className="text-xs text-gray-400 font-semibold uppercase">Starting Rate</span>
            <span className="text-2xl sm:text-3xl font-extrabold text-primary-dark font-heading">
              {formattedPrice}
            </span>
          </div>

          <Link to={linkUrl} className="block">
            <Button 
              variant={isPopular ? 'primary' : 'outline'} 
              className="w-full justify-center text-xs sm:text-sm group-hover:shadow-md"
            >
              <span>View Service Package</span>
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
