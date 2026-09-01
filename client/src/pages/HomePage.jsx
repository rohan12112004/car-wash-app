/**
 * @file HomePage.jsx
 * @description Main landing page for SparkleWash Pro with all homepage sections wrapped in ErrorBoundaries.
 */

import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import ErrorBoundary from '../components/common/ErrorBoundary';
import Hero from '../components/home/Hero';
import ServicesGrid from '../components/home/ServicesGrid';
import WhyChooseUs from '../components/home/WhyChooseUs';
import HowItWorks from '../components/home/HowItWorks';
import PopularServices from '../components/home/PopularServices';
import StatsCounter from '../components/home/StatsCounter';
import FranchiseCTA from '../components/home/FranchiseCTA';
import GalleryPreview from '../components/home/GalleryPreview';
import TestimonialsCarousel from '../components/home/TestimonialsCarousel';
import AreasWeServe from '../components/home/AreasWeServe';
import GeneralFAQ from '../components/home/GeneralFAQ';
import NewsletterSignup from '../components/home/NewsletterSignup';

const HomePage = () => {
  return (
    <PageWrapper
      title="SparkleWash Pro | Premium Car Wash & Cleaning Services"
      description="Experience the best car wash, commercial cleaning, and home cleaning services with SparkleWash Pro. Book online today!"
    >
      <ErrorBoundary><Hero /></ErrorBoundary>
      <ErrorBoundary><ServicesGrid /></ErrorBoundary>
      <ErrorBoundary><WhyChooseUs /></ErrorBoundary>
      <ErrorBoundary><HowItWorks /></ErrorBoundary>
      <ErrorBoundary><PopularServices /></ErrorBoundary>
      <ErrorBoundary><StatsCounter /></ErrorBoundary>
      <ErrorBoundary><FranchiseCTA /></ErrorBoundary>
      <ErrorBoundary><GalleryPreview /></ErrorBoundary>
      <ErrorBoundary><TestimonialsCarousel /></ErrorBoundary>
      <ErrorBoundary><AreasWeServe /></ErrorBoundary>
      <ErrorBoundary><GeneralFAQ /></ErrorBoundary>
      <ErrorBoundary><NewsletterSignup /></ErrorBoundary>
    </PageWrapper>
  );
};

export default HomePage;
