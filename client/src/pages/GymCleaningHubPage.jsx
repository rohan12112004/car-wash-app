import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import CategoryHub from '../components/services/CategoryHub';
import { gymCleaningServices } from '../data/servicesData';

const GymCleaningHubPage = () => {
  return (
    <PageWrapper
      title="Gym Cleaning | Premia Carwash"
      description="Professional sanitization, equipment wipe-down, and floor rotary scrub for gyms and fitness centers."
    >
      <CategoryHub 
        title="Gym & Fitness Center Cleaning"
        description="Maintain the highest standards of hygiene for your members with hospital-grade sanitization and deep floor care."
        services={gymCleaningServices}
        categoryType="gym"
      />
    </PageWrapper>
  );
};

export default GymCleaningHubPage;
