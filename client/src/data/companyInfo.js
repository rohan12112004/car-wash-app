/**
 * companyInfo.js — Single source of truth for Premia Carwash.
 */

const companyInfo = {
  name: 'Premia Carwash',
  tagline: 'India\'s Premier Doorstep Carwash, Detailing & Cleaning Brand',
  description: 'Founded in 2025 by Sultan and Nitin Mukesh, & powered by Premia Group PVT. LTD. Premia Carwash is driven by a passion for excellence in automotive care. We deliver premium car cleaning, detailing, enhancement, and protection services, combining professional expertise with meticulous attention to detail.',
  
  phone: '+91 8882670676',
  email: 'premiacarwash@gmail.com',
  whatsapp: '918882670676',
  
  address: '', // Address removed per requirement #2
  businessHours: 'Mon - Sat: 10:00 AM - 6:00 PM',
  foundedYear: '2025',
  
  social: {
    instagram: 'https://instagram.com/premiacarwash',
    facebook: 'https://facebook.com/premiacarwash',
    youtube: 'https://youtube.com/@premiacarwash',
    linkedin: 'https://linkedin.com/company/premiacarwash',
  },
  
  gst: 'GSTIN: 09PREMIA1234X1Z5',
  
  founder: {
    name: 'Sultan and Nitin Mukesh',
    title: 'Co-Founders',
    bio: 'Founded in 2025 by Sultan and Nitin Mukesh, & powered by Premia Group PVT. LTD. Premia Carwash is driven by a passion for excellence in automotive care.',
  },
  
  areasServed: [
    'Delhi', 'Noida', 'Gurgaon', 'Faridabad', 'Ghaziabad',
    'Greater Noida', 'Lucknow', 'Jaipur', 'Chandigarh', 'Mumbai',
    'Pune', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata',
    'Ahmedabad', 'Indore', 'Bhopal', 'Patna', 'Ranchi',
  ],
  
  stats: {
    carsWashed: 25000,
    happyCustomers: 10000,
    franchisePartners: 55,
    citiesCovered: 20,
    yearsExperience: 2,
    teamMembers: 220,
  },
  
  franchiseInvestment: {
    min: '₹3,00,000',
    max: '₹17,00,000',
    averageROI: '50-60% annually',
    breakEven: '6 to 12 months',
  },

  copyrightYear: new Date().getFullYear(),
  domain: 'https://premiacarwash.com',
};

export { companyInfo };
export default companyInfo;
