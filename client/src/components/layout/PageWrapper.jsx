/**
 * @file PageWrapper.jsx
 * @description Wraps pages with Framer Motion page transition (fade + slide-up) + Helmet for SEO.
 */
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import companyInfo from '../../data/companyInfo';

const PageWrapper = ({ children, title, description, className = '' }) => {
  const metaTitle = String(title || companyInfo.name);
  const metaDesc = String(description || companyInfo.description);

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={`w-full flex-grow flex flex-col ${className}`}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageWrapper;
