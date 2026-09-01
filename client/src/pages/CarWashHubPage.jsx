/**
 * @file CarWashHubPage.jsx
 * @description Car wash services category hub.
 */

import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import CategoryHub from '../components/services/CategoryHub';
import { carWashServices } from '../data/servicesData';

const CarWashHubPage = () => {
  return (
    <PageWrapper
      title="Car Wash Services | SparkleWash Pro"
      description="Professional car washing and auto detailing services."
    >
      <CategoryHub 
        title="Car Wash & Detailing"
        description="From quick washes to full detailing, we treat your car with care."
        services={carWashServices}
        categoryType="car-wash"
      />
    </PageWrapper>
  );
};

export default CarWashHubPage;
