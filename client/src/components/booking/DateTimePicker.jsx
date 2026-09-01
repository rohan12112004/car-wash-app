/**
 * @file DateTimePicker.jsx
 * @description Date and time slot selector for Premia Carwash.
 * Fixed JS timezone offset bugs, includes Today + 7 days, and custom date picker fallback.
 */
import React from 'react';
import { TIME_SLOTS } from '../../utils/constants';
import { Calendar, Clock, CheckCircle2 } from 'lucide-react';

const DateTimePicker = ({ date, setDate, timeSlot, setTimeSlot }) => {
  // Format local date string without UTC timezone offset shift
  const formatLocalDate = (d) => {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Get today + next 7 days
  const getAvailableDates = () => {
    const days = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      days.push(d);
    }
    return days;
  };

  const dates = getAvailableDates();
  const todayStr = formatLocalDate(new Date());

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Date Selection */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-heading font-extrabold text-base text-primary-dark flex items-center gap-2">
            <Calendar size={18} className="text-primary-light" />
            <span>Select Appointment Date *</span>
          </h4>
          <span className="text-xs text-gray-500 font-medium">Doorstep availability daily</span>
        </div>

        {/* Horizontal Quick Date Tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-4">
          {dates.map((d, i) => {
            const dateStr = formatLocalDate(d);
            const isSelected = date === dateStr;
            const isToday = dateStr === todayStr;
            const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
            const dayNum = d.getDate();
            const monthName = d.toLocaleDateString('en-US', { month: 'short' });

            return (
              <button
                key={i}
                type="button"
                onClick={() => setDate(dateStr)}
                className={`flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all relative ${
                  isSelected 
                    ? 'border-primary bg-primary text-white shadow-md scale-105 ring-2 ring-primary/20' 
                    : 'border-gray-200 bg-white text-gray-700 hover:border-primary/40 hover:bg-primary/5'
                }`}
              >
                {isToday && (
                  <span className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full mb-1 ${isSelected ? 'bg-accent text-bg-dark' : 'bg-primary/10 text-primary'}`}>
                    Today
                  </span>
                )}
                <span className={`text-xs uppercase font-bold ${isSelected ? 'text-accent' : 'text-gray-500'}`}>{dayName}</span>
                <span className="text-xl font-extrabold font-heading my-0.5">{dayNum}</span>
                <span className={`text-[10px] ${isSelected ? 'text-gray-200' : 'text-gray-400'}`}>{monthName}</span>

                {isSelected && (
                  <div className="absolute top-1 right-1 text-accent">
                    <CheckCircle2 size={12} />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Custom Date Input Fallback */}
        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-200">
          <span className="text-xs text-gray-600 font-semibold shrink-0">Or pick custom date:</span>
          <input 
            type="date"
            min={todayStr}
            value={date || todayStr}
            onChange={(e) => setDate(e.target.value)}
            className="px-3 py-1.5 rounded-lg border border-gray-300 text-xs font-bold text-primary-dark focus:outline-none focus:border-primary"
          />
        </div>
      </div>

      {/* Time Slot Selection */}
      <div>
        <h4 className="font-heading font-extrabold text-base text-primary-dark flex items-center gap-2 mb-4">
          <Clock size={18} className="text-primary-light" />
          <span>Select Doorstep Arrival Time Slot *</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {TIME_SLOTS.map((slot, i) => {
            const isSelected = timeSlot === slot;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setTimeSlot(slot)}
                className={`p-4 rounded-2xl border-2 text-xs sm:text-sm font-bold transition-all flex items-center justify-between ${
                  isSelected 
                    ? 'border-primary bg-primary/10 text-primary-dark shadow-sm ring-2 ring-primary/20' 
                    : 'border-gray-200 bg-white text-gray-700 hover:border-primary/40 hover:bg-primary/5'
                }`}
              >
                <span>{slot}</span>
                {isSelected && <CheckCircle2 size={16} className="text-primary shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DateTimePicker;
