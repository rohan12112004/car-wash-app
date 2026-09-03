/**
 * @file LoginPage.jsx
 * @description User login page with a split layout.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Sparkles } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import FadeIn from '../components/animations/FadeIn';
import LoginForm from '../components/auth/LoginForm';

const LoginPage = () => {
  return (
    <PageWrapper
      title="Login | Premia Carwash"
      description="Sign in to manage your bookings and account."
    >
      <div className="min-h-screen flex pt-20">
        {/* Left Form Side */}
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 bg-bg-light">
          <FadeIn>
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div className="mb-8">
                <Link to="/" className="flex items-center space-x-2 text-primary-dark font-heading font-bold text-2xl mb-8">
                  <Sparkles className="w-8 h-8 text-primary" />
                  <span>Premia Carwash</span>
                </Link>
                <h2 className="text-3xl font-heading font-bold text-gray-900">Welcome back</h2>
                <p className="mt-2 text-sm text-gray-600 font-body">
                  Don't have an account?{' '}
                  <Link to="/register" className="font-medium text-primary hover:text-primary-dark transition-colors">
                    Sign up for free
                  </Link>
                </p>
              </div>

              <LoginForm />
            </div>
          </FadeIn>
        </div>

        {/* Right Gradient Side */}
        <div className="hidden lg:flex flex-1 relative bg-gradient-to-br from-primary-dark via-primary to-primary-light">
          <div className="absolute inset-0 bg-[url('/assets/images/auth-bg.jpg')] mix-blend-overlay opacity-20 bg-cover bg-center"></div>
          <div className="relative z-10 w-full flex flex-col justify-center items-center text-center px-12 text-white">
            <FadeIn delay={0.2}>
              <ShieldCheck className="w-20 h-20 text-accent mb-8 mx-auto" />
              <h3 className="text-4xl font-heading font-bold mb-4">Secure & Simple</h3>
              <p className="text-lg font-body text-text-light/90 max-w-md mx-auto">
                Manage your appointments, track service history, and access exclusive offers all in one place.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default LoginPage;
