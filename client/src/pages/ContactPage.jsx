/**
 * @file ContactPage.jsx
 * @description Contact form and company information.
 */

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MapPin, Phone, Mail, Send, MessageSquare } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import FadeIn from '../components/animations/FadeIn';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import { companyInfo } from '../data/companyInfo';
import api from '../services/api';

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone required"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      await api.post('/contact', data);
      alert('Message sent successfully! We will get back to you soon.');
      reset();
    } catch (error) {
      alert('Failed to send message.');
    }
  };

  return (
    <PageWrapper
      title="Contact Us | Premia Carwash"
      description="Get in touch with Premia Carwash for inquiries, support, or feedback."
    >
      <div className="bg-bg-light min-h-screen pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark mb-4">
                Get in Touch
              </h1>
              <p className="text-lg text-text-dark/70 font-body max-w-2xl mx-auto">
                Have a question or need assistance? Our team is here to help you.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <FadeIn delay={0.1}>
                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">{companyInfo.phone}</p>
                    <p className="text-sm text-gray-500 mt-1">Mon-Sat, 8am to 6pm</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">{companyInfo.email}</p>
                    <p className="text-sm text-gray-500 mt-1">We reply within 24 hours</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600 leading-relaxed">{companyInfo.address}</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <a 
                  href={`https://wa.me/${companyInfo.whatsapp}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-2xl flex items-center justify-center space-x-3 transition-colors shadow-lg"
                >
                  <MessageSquare className="w-6 h-6" />
                  <span className="font-bold">Chat on WhatsApp</span>
                </a>
              </FadeIn>
            </div>

            {/* Contact Form & Map */}
            <div className="lg:col-span-2 space-y-8">
              <FadeIn delay={0.3}>
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <h2 className="text-2xl font-bold text-primary-dark mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input label="Your Name" {...register('name')} error={errors.name?.message} />
                      <Input label="Email Address" type="email" {...register('email')} error={errors.email?.message} />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input label="Phone Number" {...register('phone')} error={errors.phone?.message} />
                      <Input label="Subject" {...register('subject')} error={errors.subject?.message} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea
                        {...register('message')}
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border-gray-300 focus:ring-primary focus:border-primary"
                      />
                      {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
                    </div>
                    <Button type="submit" isLoading={isSubmitting} className="w-full sm:w-auto px-8">
                      <span className="flex items-center space-x-2">
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </span>
                    </Button>
                  </form>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                 <div className="h-80 w-full rounded-3xl overflow-hidden shadow-md border border-gray-100">
                    {/* Placeholder for map embed */}
                    <iframe 
                      title="location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.234721899498!2d77.0698!3d28.6219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04b2e6a4bbc3%3A0x91f76e3c2a3a8b50!2sJanakpuri%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                 </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ContactPage;
