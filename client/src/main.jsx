/**
 * @file main.jsx
 * @description Entry point for the React application.
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import App from './App';
import './styles/global.css';

// 🔻 VERCEL-ONLY: Remove/comment when deploying to Hostinger
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
// 🔺 VERCEL-ONLY

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <AuthProvider>
            <App />
            <Toaster position="top-right" toastOptions={{
              style: {
                background: '#0B3D2E',
                color: '#ECFDF5',
              },
            }} />
            {/* 🔻 VERCEL-ONLY: Remove/comment when deploying to Hostinger */}
            <Analytics />
            <SpeedInsights />
            {/* 🔺 VERCEL-ONLY */}
          </AuthProvider>
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  );
}
