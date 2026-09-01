/**
 * @file DashboardPage.jsx
 * @description Protected user dashboard to view bookings and profile.
 */

import React from 'react';
import { Calendar, Clock, User, LogOut } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import FadeIn from '../components/animations/FadeIn';

const DashboardPage = () => {
  // Placeholder mock data
  const user = { name: 'Aarav Sharma', email: 'aarav@example.com' };
  const bookings = [
    { id: 'BK1029', service: 'Premium SUV Wash', date: 'Oct 25, 2023', status: 'Completed' },
    { id: 'BK1055', service: 'Deep Home Cleaning', date: 'Nov 12, 2023', status: 'Upcoming' }
  ];

  return (
    <PageWrapper
      title="My Dashboard | SparkleWash Pro"
      description="Manage your bookings and account settings."
    >
      <div className="bg-bg-light min-h-screen pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
              <div>
                <h1 className="text-3xl font-heading font-bold text-primary-dark">Welcome, {user.name}</h1>
                <p className="text-gray-600">Manage your upcoming and past services.</p>
              </div>
              <button className="mt-4 md:mt-0 flex items-center space-x-2 text-red-500 hover:text-red-700 transition-colors font-medium">
                <LogOut className="w-5 h-5" />
                <span>Sign Out</span>
              </button>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Info */}
            <div className="lg:col-span-1">
              <FadeIn delay={0.1}>
                <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary-light/20 rounded-full flex items-center justify-center text-primary-dark">
                      <User className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{user.name}</h3>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <button className="w-full text-left text-primary font-medium hover:underline">
                      Edit Profile
                    </button>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Bookings */}
            <div className="lg:col-span-2">
              <FadeIn delay={0.2}>
                <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                  <h2 className="text-xl font-heading font-bold text-primary-dark mb-6 flex items-center">
                    <Calendar className="w-6 h-6 mr-2 text-primary" />
                    My Bookings
                  </h2>
                  
                  {bookings.length > 0 ? (
                    <div className="space-y-4">
                      {bookings.map((booking) => (
                        <div key={booking.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border rounded-xl hover:border-primary/50 transition-colors bg-gray-50/50">
                          <div>
                            <span className="text-sm text-gray-500 font-medium">#{booking.id}</span>
                            <h4 className="font-bold text-gray-900">{booking.service}</h4>
                            <div className="flex items-center text-sm text-gray-600 mt-1">
                              <Clock className="w-4 h-4 mr-1" />
                              {booking.date}
                            </div>
                          </div>
                          <div className={`mt-3 sm:mt-0 px-3 py-1 rounded-full text-sm font-medium ${
                            booking.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                          }`}>
                            {booking.status}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-10">
                      <p className="text-gray-500">You don't have any bookings yet.</p>
                      <button className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                        Book a Service
                      </button>
                    </div>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default DashboardPage;
