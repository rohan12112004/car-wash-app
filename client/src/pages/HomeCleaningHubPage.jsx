/**
 * @file HomeCleaningHubPage.jsx
 * @description Home cleaning services category hub.
 */

import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import CategoryHub from '../components/services/CategoryHub';
import { homeCleaningServices } from '../data/servicesData';

const HomeCleaningHubPage = () => {
  return (
    <PageWrapper
      title="Home Cleaning | Premia Carwash"
      description="Professional house cleaning, deep cleaning, and maid services."
    >
      <CategoryHub 
        title="Residential Cleaning"
        description="Enjoy a spotless, healthy home without lifting a finger."
        services={homeCleaningServices}
        categoryType="home"
      />
    </PageWrapper>
  );
};

export default HomeCleaningHubPage;
