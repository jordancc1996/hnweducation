import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Home, Plane, MapPin, Shield, Users, Award } from 'lucide-react';
import Layout from '@/components/Layout';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);

  const additionalServices = [
    {
      id: 'property',
      icon: Home,
      title: 'Property Advisory',
      subtitle: 'Residential Excellence',
      description: 'Expert guidance on premium residential properties in key educational markets worldwide.',
      features: [
        'Prime location property sourcing',
        'School catchment area analysis',
        'Investment potential assessment',
        'Rental and purchase negotiations',
        'Property management connections'
      ],
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'travel',
      icon: Plane,
      title: 'Travel Advisory',
      subtitle: 'Seamless Journeys',
      description: 'Comprehensive travel planning and logistics support for educational visits and relocations.',
      features: [
        'School visit coordination',
        'Educational tour planning',
        'Visa and documentation support',
        'Cultural orientation programs',
        'Emergency travel assistance'
      ],
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'relocation',
      icon: MapPin,
      title: 'Relocation & Lifestyle',
      subtitle: 'Settling In Support',
      description: 'Complete relocation assistance to ensure smooth transitions for international families.',
      features: [
        'Cultural integration support',
        'Local community connections',
        'Healthcare and services guidance',
        'Banking and legal introductions',
        'Ongoing lifestyle management'
      ],
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const partnerships = [
    {
      icon: Shield,
      title: 'Vetted Excellence',
      description: 'Every partner in our network is carefully selected and continuously evaluated for quality and discretion.'
    },
    {
      icon: Users,
      title: 'Personal Relationships',
      description: 'We maintain close personal relationships with our partners to ensure seamless service delivery.'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Our partners have demonstrated consistent excellence in serving high-net-worth international families.'
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Additional Services - HNW Education</title>
        <meta name="description" content="Discover HNW Education's comprehensive additional services including property advisory, travel planning, and relocation support." />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-primary-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800"></div>
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="section-subtitle text-gold-300 mb-6">COMPREHENSIVE SUPPORT</div>
            <h1 className="hero-title mb-8">
              Beyond Education - A Wider World of Support
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Our carefully curated network of partners extends our support beyond education 
              to encompass every aspect of your family's international lifestyle needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Services Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="section-subtitle mb-4">ADDITIONAL SERVICES</div>
            <h2 className="section-title text-primary-500 mb-6">
              Comprehensive Lifestyle Support
            </h2>
          </motion.div>

          {/* Service Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {additionalServices.map((service, index ) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-full font-semibold transition-all duration-300 ${
                  activeService === index
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <service.icon className="w-5 h-5" />
                <span>{service.title}</span>
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-6">
                <div>
                  <div className="text-gold-500 font-semibold mb-2">
                    {additionalServices[activeService].subtitle}
                  </div>
                  <h3 className="text-3xl font-bodoni font-bold text-primary-500 mb-4">
                    {additionalServices[activeService].title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {additionalServices[activeService].description}
                  </p>
                </div>

                <ul className="space-y-3">
                  {additionalServices[activeService].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={additionalServices[activeService].image}
                    alt={additionalServices[activeService].title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="section-subtitle mb-4">OUR NETWORK</div>
            <h2 className="section-title text-primary-500 mb-6">
              Partnerships Built on Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work exclusively with partners who share our commitment to discretion, 
              quality, and exceptional service for international families.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerships.map((partnership, index) => (
              <motion.div
                key={partnership.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary-500 flex items-center justify-center mx-auto">
                  <partnership.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-500">
                  {partnership.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {partnership.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="section-title mb-6">
              Ready to Experience Comprehensive Support?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how our network of trusted partners can support every aspect 
              of your family's international lifestyle.
            </p>
            <Link href="/#contact" className="inline-flex items-center gap-2 bg-white text-primary-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
              Explore Our Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
