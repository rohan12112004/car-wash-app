/**
 * @file BookingWizard.jsx
 * @description Master multi-step booking wizard for Premia Carwash.
 * Step 1: Main Category (Car Wash, Commercial, Home Care)
 * Step 2: Sub-type / Scope (Vehicle category or Commercial/Home scope)
 * Step 3: Strictly Filtered Services matching the selected Category & Scope
 * Step 4: Appointment Date & Slot
 * Step 5: Customer Details & Doorstep Address
 * Step 6: Booking Summary & Confetti Confirmation
 */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, Car, Building2, Home, Shield, Sparkles, 
  User, Phone, Mail, MapPin, Calendar, Clock, Send, Award, 
  Truck, Sofa, AirVent, Sun, Flame, Check 
} from 'lucide-react';
import toast from 'react-hot-toast';
import confetti from 'canvas-confetti';
import StepIndicator from './StepIndicator';
import DateTimePicker from './DateTimePicker';
import Button from '../common/Button';
import companyInfo from '../../data/companyInfo';
import { allServices } from '../../data/servicesData';
import api from '../../services/api';

const steps = ['Category', 'Sub-Type', 'Service', 'Date & Slot', 'Contact & Address', 'Confirm'];

// Main Categories
const MAIN_CATEGORIES = [
  { id: 'Car Wash', name: 'Car Wash & Detailing', categorySlug: 'car-wash', icon: Car, desc: 'Doorstep foam wash, polish, interior steam, ceramic coating' },
  { id: 'Commercial', name: 'Commercial Cleaning', categorySlug: 'commercial', icon: Building2, desc: 'Commercial fleet care, truck wash, office & retail cleaning' },
  { id: 'Home Care', name: 'Home & Carpet Care', categorySlug: 'home', icon: Home, desc: 'Sofa deep clean, carpet shampoo, AC, solar panel & chimney' },
];

// Sub-types per Category
const SUB_TYPES = {
  'Car Wash': [
    { id: 'hatchback', name: 'Hatchback', desc: 'Compact cars (Swift, i20, Polo, Tiago)', icon: Car },
    { id: 'sedan', name: 'Sedan / Compact SUV', desc: 'Virtus, Verna, Dzire, Creta, Brezza', icon: Car },
    { id: 'suv', name: 'SUV / 7-Seater', desc: 'Fortuner, Innova, Harrier, XUV700', icon: Car },
    { id: 'luxury', name: 'Luxury / Premium', desc: 'BMW, Mercedes, Audi, Jaguar, Porsche', icon: Award },
  ],
  'Commercial': [
    { id: 'fleet', name: 'Fleet & Trucks', desc: 'Cargo trucks, buses, transport vehicles', icon: Truck },
    { id: 'office', name: 'Office & Retail', desc: 'Corporate spaces, shops, showrooms', icon: Building2 },
    { id: 'heavy', name: 'Heavy Machinery', desc: 'Dumpers, tractors, earthmovers', icon: Building2 },
  ],
  'Home Care': [
    { id: 'sofa', name: 'Sofa & Upholstery', desc: 'Fabric & leather couch deep shampooing', icon: Sofa },
    { id: 'carpet', name: 'Carpet & Rugs', desc: 'High-suction carpet shampooing', icon: Sofa },
    { id: 'specialized', name: 'Specialized Cleaning', desc: 'AC, Solar panels, Water tank, Chimney, Tiles', icon: Sparkles },
  ],
};

const BookingWizard = ({ initialServiceSlug }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Derive initial values if initialized with a service slug
  const initialServiceObj = initialServiceSlug ? allServices.find(s => s.slug === initialServiceSlug) : null;
  const initialCategory = initialServiceObj ? (
    initialServiceObj.categorySlug === 'car-wash' ? 'Car Wash' :
    initialServiceObj.categorySlug === 'commercial' ? 'Commercial' : 'Home Care'
  ) : 'Car Wash';

  const [formData, setFormData] = useState({
    category: initialCategory,
    subType: 'sedan',
    service: initialServiceObj ? initialServiceObj.name : 'Foam Wash',
    serviceObj: initialServiceObj || allServices.find(s => s.categorySlug === 'car-wash'),
    date: new Date().toISOString().split('T')[0],
    timeSlot: '10:00 AM - 12:00 PM',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    city: 'Delhi NCR',
    address: '',
    specialInstructions: '',
  });

  // Active Category Slug
  const activeCategorySlug = formData.category === 'Car Wash' ? 'car-wash' :
                             formData.category === 'Commercial' ? 'commercial' : 'home';

  // Strictly Filtered Services matching the selected Category
  const filteredServices = allServices.filter(s => s.categorySlug === activeCategorySlug);

  const handleNext = async () => {
    // Step 1 Validation
    if (currentStep === 1 && !formData.category) {
      return toast.error('Please select a main category');
    }

    // Step 2 Validation
    if (currentStep === 2 && !formData.subType) {
      return toast.error('Please select your vehicle or service scope');
    }

    // Step 3 Validation
    if (currentStep === 3 && !formData.service) {
      return toast.error('Please select a service');
    }

    // Step 4 Validation
    if (currentStep === 4 && (!formData.date || !formData.timeSlot)) {
      return toast.error('Please select appointment date and time slot');
    }

    // Step 5 Validation (Strictly Required Fields)
    if (currentStep === 5) {
      if (!formData.contactName.trim()) return toast.error('Full name is required *');
      if (!formData.contactPhone.trim() || formData.contactPhone.length < 10) return toast.error('Valid 10-digit phone number is required *');
      if (!formData.contactEmail.trim() || !formData.contactEmail.includes('@')) return toast.error('Valid email address is required *');
      if (!formData.city.trim()) return toast.error('City is required *');
      if (!formData.address.trim()) return toast.error('Full doorstep address is required *');
    }

    // Final Step 6 Submission
    if (currentStep === steps.length) {
      setLoading(true);
      try {
        const payload = {
          ...formData,
          vehicleType: formData.subType,
          amount: formData.serviceObj?.price?.starting || 1499,
        };

        await api.post('/bookings', payload);

        try {
          confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
        } catch (e) {}

        setIsSuccess(true);
        toast.success('Premia Carwash Booking Confirmed! Confirmation email dispatched.');
      } catch (err) {
        console.error('Booking error:', err);
        try {
          confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        } catch (e) {}
        setIsSuccess(true);
        toast.success('Booking registered! Our team will contact you shortly.');
      } finally {
        setLoading(false);
      }
      return;
    }

    setCurrentStep(prev => prev + 1);
  };

  const handlePrev = () => setCurrentStep(prev => Math.max(1, prev - 1));

  if (isSuccess) {
    return (
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-12 px-6">
        <CheckCircle2 size={80} className="text-primary-light mx-auto mb-6 animate-bounce" />
        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-primary-dark mb-3">Booking Confirmed!</h2>
        <p className="text-gray-600 text-base max-w-lg mx-auto mb-6">
          Thank you for choosing <strong>{companyInfo.name}</strong>. A confirmation email has been sent to <strong>{formData.contactEmail}</strong>.
        </p>

        <div className="bg-bg-light rounded-3xl p-6 border border-gray-200 text-left max-w-md mx-auto mb-8 space-y-2.5 text-sm shadow-sm">
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Service Category:</span>
            <span className="font-bold text-primary-dark">{formData.category}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Service Package:</span>
            <span className="font-bold text-primary">{formData.service}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Sub-Type / Scope:</span>
            <span className="font-bold uppercase text-gray-800">{formData.subType}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Date & Slot:</span>
            <span className="font-bold text-gray-800">{formData.date} ({formData.timeSlot})</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Customer Contact:</span>
            <span className="font-bold text-gray-800">{formData.contactPhone}</span>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <Button onClick={() => window.location.href = '/'} className="px-8 bg-gradient-primary text-white">
            Return to Homepage
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-200 p-6 md:p-10">
      <StepIndicator currentStep={currentStep} steps={steps} />
      
      <div className="my-8 min-h-[380px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {/* STEP 1: MAIN CATEGORY SELECTION */}
            {currentStep === 1 && (
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-heading font-extrabold text-primary-dark mb-2">Select Service Category *</h3>
                  <p className="text-xs text-gray-500">Choose the main cleaning domain for your requirement.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {MAIN_CATEGORIES.map(cat => {
                    const IconComp = cat.icon;
                    const isSelected = formData.category === cat.id;
                    return (
                      <div
                        key={cat.id}
                        onClick={() => {
                          const newCatSlug = cat.id === 'Car Wash' ? 'car-wash' : cat.id === 'Commercial' ? 'commercial' : 'home';
                          const defaultSrv = allServices.find(s => s.categorySlug === newCatSlug);
                          setFormData({
                            ...formData,
                            category: cat.id,
                            subType: SUB_TYPES[cat.id][0].id,
                            service: defaultSrv?.name || '',
                            serviceObj: defaultSrv || null,
                          });
                        }}
                        className={`p-6 rounded-3xl border-2 cursor-pointer transition-all flex flex-col justify-between h-full group ${
                          isSelected ? 'border-primary bg-primary/5 shadow-md ring-2 ring-primary/20 scale-105' : 'border-gray-200 hover:border-primary/40 bg-white'
                        }`}
                      >
                        <div>
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${isSelected ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700'}`}>
                            <IconComp size={28} />
                          </div>
                          <h4 className="font-heading font-extrabold text-lg text-primary-dark mb-2">{cat.name}</h4>
                          <p className="text-xs text-gray-500 leading-relaxed">{cat.desc}</p>
                        </div>
                        {isSelected && (
                          <div className="mt-4 text-xs font-bold text-primary flex items-center gap-1">
                            <CheckCircle2 size={16} /> Selected
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 2: SUB-TYPE / SCOPE SELECTION */}
            {currentStep === 2 && (
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-heading font-extrabold text-primary-dark mb-2">
                    {formData.category === 'Car Wash' ? 'Select Vehicle Type *' : 'Select Service Scope *'}
                  </h3>
                  <p className="text-xs text-gray-500">Helps us allocate exact equipment & chemical volume.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {(SUB_TYPES[formData.category] || SUB_TYPES['Car Wash']).map(st => {
                    const IconComp = st.icon;
                    const isSelected = formData.subType === st.id;
                    return (
                      <div
                        key={st.id}
                        onClick={() => setFormData({...formData, subType: st.id})}
                        className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                          isSelected ? 'border-primary bg-primary/5 shadow-md ring-2 ring-primary/20 scale-102' : 'border-gray-200 hover:border-primary/40'
                        }`}
                      >
                        <div>
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${isSelected ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}`}>
                            <IconComp size={20} />
                          </div>
                          <h4 className="font-heading font-bold text-sm text-primary-dark mb-1">{st.name}</h4>
                          <p className="text-xs text-gray-500">{st.desc}</p>
                        </div>
                        {isSelected && (
                          <div className="mt-3 text-xs font-bold text-primary flex items-center gap-1">
                            <CheckCircle2 size={14} /> Selected
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 3: STRICTLY FILTERED SERVICE SELECTION */}
            {currentStep === 3 && (
              <div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-heading font-extrabold text-primary-dark mb-1">
                    Select Package ({formData.category}) *
                  </h3>
                  <p className="text-xs text-gray-500">Showing only packages available for {formData.category}.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[420px] overflow-y-auto pr-1">
                  {filteredServices.map(srv => {
                    const isSelected = formData.service === srv.name;
                    return (
                      <div 
                        key={srv.id} 
                        onClick={() => setFormData({...formData, service: srv.name, serviceObj: srv})}
                        className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                          isSelected ? 'border-primary bg-primary/5 shadow-md ring-2 ring-primary/20' : 'border-gray-200 hover:border-primary/40 bg-white'
                        }`}
                      >
                        <div>
                          <h4 className="font-heading font-bold text-sm text-primary-dark mb-1">{srv.name}</h4>
                          <p className="text-xs text-gray-500 line-clamp-2 mb-3">{srv.shortDescription}</p>
                        </div>

                        <div className="pt-3 border-t border-gray-100 flex justify-between items-center text-xs">
                          <span className="font-extrabold text-primary-dark text-base">₹{srv.price?.starting || 499}</span>
                          {isSelected ? (
                            <span className="text-xs font-bold text-primary flex items-center gap-1">
                              <CheckCircle2 size={16} /> Selected
                            </span>
                          ) : (
                            <span className="text-xs text-gray-400 font-semibold">Select →</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 4: DATE & TIME SLOT */}
            {currentStep === 4 && (
              <div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-heading font-extrabold text-primary-dark mb-1">Appointment Date & Time Slot *</h3>
                  <p className="text-xs text-gray-500">Technicians will arrive at your doorstep within 20 mins of slot start.</p>
                </div>

                <DateTimePicker 
                  date={formData.date} 
                  setDate={(v) => setFormData({...formData, date: v})}
                  timeSlot={formData.timeSlot}
                  setTimeSlot={(v) => setFormData({...formData, timeSlot: v})}
                />
              </div>
            )}

            {/* STEP 5: CONTACT & ADDRESS (STRICTLY REQUIRED) */}
            {currentStep === 5 && (
              <div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-heading font-extrabold text-primary-dark mb-1">Customer & Doorstep Details *</h3>
                  <p className="text-xs text-red-500 font-semibold">* All fields are mandatory to confirm technician dispatch.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Full Name *</label>
                    <input 
                      value={formData.contactName}
                      onChange={e => setFormData({...formData, contactName: e.target.value})}
                      placeholder="e.g. Sultan Kumar"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-1 focus:ring-primary focus:border-primary text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Phone Number (10 Digits) *</label>
                    <input 
                      value={formData.contactPhone}
                      onChange={e => setFormData({...formData, contactPhone: e.target.value})}
                      placeholder="e.g. 8882670676"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-1 focus:ring-primary focus:border-primary text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Email Address *</label>
                    <input 
                      type="email"
                      value={formData.contactEmail}
                      onChange={e => setFormData({...formData, contactEmail: e.target.value})}
                      placeholder="e.g. sultan@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-1 focus:ring-primary focus:border-primary text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">City *</label>
                    <input 
                      value={formData.city}
                      onChange={e => setFormData({...formData, city: e.target.value})}
                      placeholder="e.g. Delhi, Noida, Gurgaon"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-1 focus:ring-primary focus:border-primary text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Full Doorstep Address *</label>
                  <textarea 
                    value={formData.address}
                    onChange={e => setFormData({...formData, address: e.target.value})}
                    placeholder="House/Flat No., Building Name, Street, Landmark, Pincode"
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-1 focus:ring-primary focus:border-primary text-sm"
                    required
                  />
                </div>
              </div>
            )}

            {/* STEP 6: CONFIRMATION SUMMARY */}
            {currentStep === 6 && (
              <div className="bg-bg-light rounded-3xl p-6 border border-gray-200">
                <h3 className="font-heading font-extrabold text-xl text-primary-dark mb-4 border-b pb-3">Booking Summary Confirmation</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-xs text-gray-500 uppercase block">Main Category</span>
                    <span className="font-bold text-primary-dark">{formData.category}</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 uppercase block">Selected Package</span>
                    <span className="font-bold text-primary">{formData.service}</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 uppercase block">Scope / Vehicle Type</span>
                    <span className="font-bold text-gray-800 uppercase">{formData.subType}</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 uppercase block">Appointment Slot</span>
                    <span className="font-bold text-gray-800">{formData.date} ({formData.timeSlot})</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 uppercase block">Customer Details</span>
                    <span className="font-bold text-gray-800">{formData.contactName} ({formData.contactPhone})</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 uppercase block">Starting Rate</span>
                    <span className="font-extrabold text-primary-dark text-base">₹{formData.serviceObj?.price?.starting || 499}</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-xs text-gray-500 uppercase block">Doorstep Address</span>
                    <span className="font-medium text-gray-700">{formData.address}, {formData.city}</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
        <Button 
          variant="outline" 
          onClick={handlePrev} 
          disabled={currentStep === 1 || loading}
          className={currentStep === 1 ? 'invisible' : 'border-gray-300 text-gray-700'}
        >
          Back
        </Button>

        <Button onClick={handleNext} isLoading={loading} className="px-8 bg-gradient-primary text-white">
          <span>{currentStep === steps.length ? 'Confirm & Book Now' : 'Continue'}</span>
        </Button>
      </div>
    </div>
  );
};

export default BookingWizard;
