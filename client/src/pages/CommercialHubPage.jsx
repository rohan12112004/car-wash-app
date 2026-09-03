/**
 * @file CommercialHubPage.jsx
 * @description Commercial services category hub.
 */

import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import CategoryHub from '../components/services/CategoryHub';
import { commercialServices } from '../data/servicesData';

const CommercialHubPage = () => {
  return (
    <PageWrapper
      title="Commercial Cleaning | Premia Carwash"
      description="Reliable cleaning services for offices, retail stores, and commercial spaces."
    >
      <CategoryHub 
        title="Commercial Cleaning"
        description="Maintain a pristine, professional environment for your business."
        services={commercialServices}
        categoryType="commercial"
      />
    </PageWrapper>
  );
};

export default CommercialHubPage;
