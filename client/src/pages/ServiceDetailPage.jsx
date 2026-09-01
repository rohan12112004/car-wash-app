/**
 * @file ServiceDetailPage.jsx
 * @description Dynamic page displaying specific service details.
 */

import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import PageWrapper from '../components/layout/PageWrapper';
import ServiceDetailTemplate from '../components/services/ServiceDetailTemplate';
import { getServiceBySlug } from '../data/servicesData';
import companyInfo from '../data/companyInfo';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  return (
    <PageWrapper
      title={`${service.name} | ${companyInfo.name}`}
      description={service.shortDescription}
    >
      <ServiceDetailTemplate service={service} />
    </PageWrapper>
  );
};

export default ServiceDetailPage;
