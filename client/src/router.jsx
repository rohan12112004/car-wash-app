/**
 * @file router.jsx
 * @description Application routing with React.lazy code splitting.
 */
import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/auth/ProtectedRoute';
import AdminRoute from './components/auth/AdminRoute';

// Lazy load all pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const FranchisePage = lazy(() => import('./pages/FranchisePage'));
const ServicesHubPage = lazy(() => import('./pages/ServicesHubPage'));
const CarWashHubPage = lazy(() => import('./pages/CarWashHubPage'));
const CommercialHubPage = lazy(() => import('./pages/CommercialHubPage'));
const HomeCleaningHubPage = lazy(() => import('./pages/HomeCleaningHubPage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const BookingPage = lazy(() => import('./pages/BookingPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const AdminDashboardPage = lazy(() => import('./pages/AdminDashboardPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage'));
const RefundPolicyPage = lazy(() => import('./pages/RefundPolicyPage'));
const ShippingPolicyPage = lazy(() => import('./pages/ShippingPolicyPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const AppRouter = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/franchise" element={<FranchisePage />} />
      
      {/* Service Routes */}
      <Route path="/services" element={<ServicesHubPage />} />
      <Route path="/services/car-wash" element={<CarWashHubPage />} />
      <Route path="/services/car-wash/:slug" element={<ServiceDetailPage />} />
      <Route path="/services/commercial" element={<CommercialHubPage />} />
      <Route path="/services/commercial/:slug" element={<ServiceDetailPage />} />
      <Route path="/services/home" element={<HomeCleaningHubPage />} />
      <Route path="/services/home/:slug" element={<ServiceDetailPage />} />
      
      {/* Utility Pages */}
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/book" element={<BookingPage />} />
      <Route path="/contact" element={<ContactPage />} />
      
      {/* Auth Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      
      {/* Protected User Routes */}
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      } />
      
      {/* Secret Protected Admin Portal Route */}
      <Route path="/admin-portal-secure" element={
        <AdminRoute>
          <AdminDashboardPage />
        </AdminRoute>
      } />
      
      {/* Legal & Policy Pages */}
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms-of-service" element={<TermsOfServicePage />} />
      <Route path="/refund-policy" element={<RefundPolicyPage />} />
      <Route path="/shipping-policy" element={<ShippingPolicyPage />} />
      
      {/* 404 Catch-All */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
