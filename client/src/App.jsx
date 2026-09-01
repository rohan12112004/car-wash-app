/**
 * @file App.jsx
 * @description Main application layout wrapping routes with floating WhatsApp CTA.
 */
import React, { Suspense } from 'react';
import AppRouter from './router';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PageWrapper from './components/layout/PageWrapper';
import ScrollToTop from './components/layout/ScrollToTop';
import MobileBottomBar from './components/layout/MobileBottomBar';
import WhatsAppFloat from './components/common/WhatsAppFloat';

const App = () => {
  return (
    <div className="min-h-screen bg-bg-light text-text-dark font-body flex flex-col selection:bg-primary-light selection:text-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow flex flex-col">
        <PageWrapper>
          <Suspense fallback={<div className="flex-1 flex items-center justify-center p-8 text-gray-500">Loading Premia Carwash...</div>}>
            <AppRouter />
          </Suspense>
        </PageWrapper>
      </main>
      <Footer />
      <MobileBottomBar />
      <WhatsAppFloat />
    </div>
  );
};

export default App;
