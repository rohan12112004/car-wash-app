/**
 * companyInfo.js — Single source of truth for Premia Carwash.
 */

const companyInfo = {
  name: 'Premia Carwash',
  tagline: 'India\'s Premier Doorstep Carwash, Detailing & Cleaning Brand',
  description: 'Founded in 2025 by Sultan, Premia Carwash delivers luxury-grade doorstep car washing, interior detailing, commercial vehicle care, and home cleaning across India.',
  
  phone: '+91 8882670676',
  email: 'premiacarwash@gmail.com',
  whatsapp: '918882670676',
  
  address: '', // Address removed per requirement #2
  businessHours: 'Mon - Sun: 7:00 AM - 9:00 PM',
  foundedYear: '2025',
  
  social: {
    instagram: 'https://instagram.com/premiacarwash',
    facebook: 'https://facebook.com/premiacarwash',
    youtube: 'https://youtube.com/@premiacarwash',
    linkedin: 'https://linkedin.com/company/premiacarwash',
  },
  
  gst: 'GSTIN: 09PREMIA1234X1Z5',
  
  founder: {
    name: 'Sultan',
    title: 'Founder & CEO',
    bio: 'Founded in 2025 by Sultan, Premia Carwash was created with a mission to deliver luxury-grade doorstep vehicle washing and premium eco-friendly cleaning services.',
  },
  
  areasServed: [
    'Delhi', 'Noida', 'Gurgaon', 'Faridabad', 'Ghaziabad',
    'Greater Noida', 'Lucknow', 'Jaipur', 'Chandigarh', 'Mumbai',
    'Pune', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata',
    'Ahmedabad', 'Indore', 'Bhopal', 'Patna', 'Ranchi',
  ],
  
  stats: {
    carsWashed: 12000,
    happyCustomers: 6500,
    franchisePartners: 55,
    citiesCovered: 20,
    yearsExperience: 2,
    teamMembers: 220,
  },
  
  franchiseInvestment: {
    min: '₹5,00,000',
    max: '₹25,00,000',
    averageROI: '40-60% annually',
    breakEven: '8-12 months',
  },

  copyrightYear: new Date().getFullYear(),
  domain: 'https://premiacarwash.com',
};

export { companyInfo };
export default companyInfo;
