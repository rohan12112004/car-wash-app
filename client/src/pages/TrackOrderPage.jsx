import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Search, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Calendar, 
  Truck, 
  Phone, 
  ShieldCheck, 
  AlertCircle,
  Copy,
  ChevronRight
} from 'lucide-react';
import api from '../services/api';
import Button from '../components/common/Button';
import SectionHeading from '../components/common/SectionHeading';
import toast from 'react-hot-toast';
import { companyInfo } from '../data/companyInfo';

const STATUS_STEPS = [
  { id: 'pending', label: 'Order Placed', desc: 'Booking received and verified' },
  { id: 'confirmed', label: 'Confirmed', desc: 'Technician assigned & scheduled' },
  { id: 'in-progress', label: 'In Progress', desc: 'Technician on the way / detailing vehicle' },
  { id: 'completed', label: 'Completed', desc: 'Service completed to perfection' },
];

const TrackOrderPage = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('id') || searchParams.get('orderId') || '';
  
  const [query, setQuery] = useState(initialQuery);
  const [loading, setLoading] = useState(false);
  const [booking, setBooking] = useState(null);
  const [error, setError] = useState('');

  const fetchTracking = async (searchId) => {
    if (!searchId || !searchId.trim()) return;
    setLoading(true);
    setError('');
    setBooking(null);

    try {
      const res = await api.get(`/bookings/track/${encodeURIComponent(searchId.trim())}`);
      if (res.data?.data) {
        setBooking(res.data.data);
      } else {
        setError('No booking found for this Order ID.');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'No booking found. Please verify your Order ID or phone number.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialQuery) {
      fetchTracking(initialQuery);
    }
  }, [initialQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      return toast.error('Please enter your Order ID or phone number');
    }
    fetchTracking(query);
  };

  const getStepIndex = (status) => {
    const s = (status || 'pending').toLowerCase();
    if (s === 'cancelled') return -1;
    const idx = STATUS_STEPS.findIndex(step => step.id === s);
    return idx !== -1 ? idx : 0;
  };

  const currentStepIdx = booking ? getStepIndex(booking.status) : 0;

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 bg-gradient-to-b from-white via-bg-light to-white">
      <div className="container mx-auto max-w-3xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <SectionHeading
            subtitle="Real-Time Service Tracking"
            title="Track Your Order"
            description="Enter your Tracking Order ID (e.g. pcw-250000301) or registered phone number to view live booking status."
          />
        </div>

        {/* Search Box */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-gray-200 shadow-lg mb-10">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter Order ID (pcw-250000301) or Phone Number"
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-bg-light border border-gray-200 text-sm font-medium text-gray-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="px-8 py-3.5 bg-gradient-primary text-white font-bold rounded-2xl shrink-0"
            >
              {loading ? 'Searching...' : 'Track Order'}
            </Button>
          </form>

          {/* Quick Helper */}
          <div className="mt-3 flex items-center justify-between text-xs text-gray-500 px-2">
            <span>Tip: Order IDs start with <strong>pcw-2500...</strong></span>
            <a href={`tel:${companyInfo.phone}`} className="text-primary hover:underline font-semibold flex items-center gap-1">
              <Phone size={12} /> Need Help? {companyInfo.phone}
            </a>
          </div>
        </div>

        {/* Error Notification */}
        {error && (
          <div className="p-4 mb-8 bg-rose-50 border border-rose-200 text-rose-700 rounded-2xl flex items-center gap-3 text-sm animate-fade-in">
            <AlertCircle size={20} className="shrink-0 text-rose-500" />
            <span>{error}</span>
          </div>
        )}

        {/* Tracking Details Card */}
        {booking && (
          <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden animate-fade-in">
            {/* Card Header Banner */}
            <div className="bg-gradient-to-r from-[#0B3D2E] to-[#14532D] text-white p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-300 block mb-1">
                  Verified Booking
                </span>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-heading font-extrabold tracking-wider">
                    {booking.orderId || 'Order #' + booking._id?.slice(-6)}
                  </h3>
                  {booking.orderId && (
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(booking.orderId);
                        toast.success('Order ID copied!');
                      }}
                      className="p-1 rounded bg-white/15 hover:bg-white/30 transition-all text-white text-xs"
                      title="Copy Order ID"
                    >
                      <Copy size={14} />
                    </button>
                  )}
                </div>
              </div>

              {/* Status Badge */}
              <div className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Status: {booking.status || 'Pending'}
              </div>
            </div>

            {/* Stepper Progress Bar */}
            {booking.status === 'cancelled' ? (
              <div className="p-6 bg-rose-50 border-b border-rose-100 text-center">
                <span className="text-rose-700 font-bold text-sm">This booking has been marked as cancelled.</span>
              </div>
            ) : (
              <div className="p-6 bg-emerald-50/50 border-b border-gray-100">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {STATUS_STEPS.map((step, idx) => {
                    const isDone = currentStepIdx >= idx;
                    const isCurrent = currentStepIdx === idx;
                    return (
                      <div key={step.id} className="flex flex-col items-center text-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mb-2 transition-all ${
                          isDone 
                            ? 'bg-primary text-white shadow-md' 
                            : 'bg-gray-200 text-gray-400'
                        } ${isCurrent ? 'ring-4 ring-primary/20 scale-105' : ''}`}>
                          {isDone ? <CheckCircle2 size={18} /> : idx + 1}
                        </div>
                        <span className={`text-xs font-bold ${isDone ? 'text-primary-dark' : 'text-gray-400'}`}>
                          {step.label}
                        </span>
                        <span className="text-[10px] text-gray-500 mt-0.5 hidden sm:block">
                          {step.desc}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Detailed Order Breakdown */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-bg-light border border-gray-100">
                  <span className="text-xs text-gray-400 uppercase font-bold tracking-wider block mb-1 flex items-center gap-1.5">
                    <Truck size={14} className="text-primary" /> Service Details
                  </span>
                  <p className="font-bold text-gray-900 text-base">{booking.service}</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Category: {booking.category} • Vehicle: {booking.vehicleType || booking.subType || 'Standard'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-bg-light border border-gray-100">
                  <span className="text-xs text-gray-400 uppercase font-bold tracking-wider block mb-1 flex items-center gap-1.5">
                    <Calendar size={14} className="text-primary" /> Appointment Schedule
                  </span>
                  <p className="font-bold text-gray-900 text-base">{booking.date}</p>
                  <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
                    <Clock size={12} /> {booking.timeSlot}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-bg-light border border-gray-100">
                  <span className="text-xs text-gray-400 uppercase font-bold tracking-wider block mb-1 flex items-center gap-1.5">
                    <MapPin size={14} className="text-primary" /> Doorstep Location
                  </span>
                  <p className="font-medium text-gray-800 text-sm">{booking.address}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{booking.city || 'Delhi NCR'}</p>
                </div>

                <div className="p-4 rounded-2xl bg-bg-light border border-gray-100">
                  <span className="text-xs text-gray-400 uppercase font-bold tracking-wider block mb-1 flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-primary" /> Payment & Billing
                  </span>
                  <p className="font-extrabold text-primary-dark text-lg">₹{booking.amount || 499}</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Payment Status: <span className="font-bold uppercase text-emerald-600">{booking.paymentStatus || 'Pending on Doorstep'}</span>
                  </p>
                </div>
              </div>

              {/* Technician Guarantee Note */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                <div className="text-xs text-emerald-900 leading-relaxed">
                  <strong>Premia On-Time Guarantee:</strong> Our detailing specialist will arrive at your specified address within 20 minutes of your time slot window with full pressure-wash equipment and eco-friendly foams.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`https://wa.me/${companyInfo.whatsapp}?text=Hi%20Premia%20Carwash%2C%20I%20want%20an%20update%20on%20my%20order%20${booking.orderId || ''}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm font-bold text-center flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  Chat with Support on WhatsApp
                </a>
                <Link
                  to="/book"
                  className="py-3 px-6 rounded-2xl border border-gray-200 hover:border-primary text-gray-700 hover:text-primary text-sm font-bold text-center flex items-center justify-center gap-1 transition-all"
                >
                  Book Another Service <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackOrderPage;
