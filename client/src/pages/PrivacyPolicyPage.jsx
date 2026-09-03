/**
 * @file PrivacyPolicyPage.jsx
 * @description Privacy policy content page.
 */

import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import FadeIn from '../components/animations/FadeIn';

const PrivacyPolicyPage = () => {
  return (
    <PageWrapper
      title="Privacy Policy | Premia Carwash"
      description="Read our privacy policy to understand how we handle your data."
    >
      <div className="bg-bg-light min-h-screen pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-white rounded-3xl shadow-md p-8 md:p-12 border border-gray-100 prose prose-green max-w-none">
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mb-8 pb-4 border-b border-gray-100">
                Privacy Policy
              </h1>
              
              <div className="space-y-6 text-gray-700 font-body">
                <p><strong>Last Updated:</strong> 2025</p>
                
                <h2 className="text-xl font-bold text-primary-dark mt-8">1. Introduction</h2>
                <p>Welcome to Premia Carwash. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.</p>
                
                <h2 className="text-xl font-bold text-primary-dark mt-8">2. The Data We Collect About You</h2>
                <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                  <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                  <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of services you have purchased from us.</li>
                  <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
                </ul>

                <h2 className="text-xl font-bold text-primary-dark mt-8">3. How We Use Your Personal Data</h2>
                <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                  <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                  <li>Where we need to comply with a legal obligation.</li>
                </ul>

                <h2 className="text-xl font-bold text-primary-dark mt-8">4. Data Security</h2>
                <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>

                <h2 className="text-xl font-bold text-primary-dark mt-8">5. Contact Us</h2>
                <p>If you have any questions about this privacy policy or our privacy practices, please contact us at premiacarwash@gmail.com.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </PageWrapper>
  );
};

export default PrivacyPolicyPage;
