import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Search, Users, HeartHandshake } from 'lucide-react';
import Layout from '@/components/Layout';

const ProcessPage = () => {
  const processSteps = [
    {
      number: '01',
      icon: Phone,
      title: 'Introduction',
      subtitle: 'Getting to know you',
      description: 'We begin with a personal call to understand your family\'s unique needs, aspirations, and educational goals. This confidential conversation forms the foundation of our tailored approach.',
      details: [
        'Confidential family consultation',
        'Understanding your educational priorities',
        'Discussing timeline and preferences',
        'Establishing clear expectations'
      ]
    },
    {
      number: '02',
      icon: Search,
      title: 'Assessment',
      subtitle: 'Looking beyond test scores',
      description: 'Our comprehensive assessment goes far beyond academic achievements to understand your child\'s personality, interests, and potential. We consider the whole child in our recommendations.',
      details: [
        'Academic performance evaluation',
        'Personality and learning style assessment',
        'Extracurricular interests and talents',
        'Future aspirations and career goals'
      ]
    },
    {
      number: '03',
      icon: Users,
      title: 'Planning & Placement',
      subtitle: 'Only the right fit will do',
      description: 'We carefully curate a selection of schools that align perfectly with your family\'s values and your child\'s needs. Every recommendation is personally vetted by our team.',
      details: [
        'Curated school selection process',
        'Application strategy development',
        'Interview preparation and coaching',
        'Ongoing application support'
      ]
    },
    {
      number: '04',
      icon: HeartHandshake,
      title: 'Ongoing Support',
      subtitle: 'Our involvement doesn\'t end with placement',
      description: 'We maintain a lasting relationship with families, providing continued guidance throughout the educational journey and beyond. Your success is our commitment.',
      details: [
        'Transition support and settling-in assistance',
        'Academic progress monitoring',
        'University preparation guidance',
        'Long-term educational planning'
      ]
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Our Process - HNW Education</title>
        <meta name="description" content="Discover HNW Education's comprehensive four-step process for educational consultancy and placement." />
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
            <div className="section-subtitle text-gold-300 mb-6">OUR APPROACH</div>
            <h1 className="hero-title mb-8">
              Personal Support, Thoughtfully Delivered
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Our proven four-step process ensures every family receives the personalized 
              attention and expert guidance they deserve throughout their educational journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="space-y-24">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary-500 flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-6xl font-bodoni font-bold text-gold-500 opacity-50">
                      {step.number}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-bodoni font-bold text-primary-500 mb-2">
                      {step.title}
                    </h3>
                    <div className="text-lg text-gold-500 font-medium mb-4">
                      {step.subtitle}
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                      {step.description}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={`https://images.unsplash.com/photo-${
                        index === 0 ? '1560472354-b33ff0c44a43' :
                        index === 1 ? '1434030216411-0b793f4b4173' :
                        index === 2 ? '1523050854058-8df90110c9f1' :
                        '1522202176988-66273c2fd55f'
                      }?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="section-title text-primary-500 mb-6">
              Built on Discretion and Trust
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Every step of our process is designed with your family's privacy and 
              unique needs in mind. We understand that choosing the right educational 
              path is one of the most important decisions you'll make, and we're 
              honored to guide you through it.
            </p>
            <Link href="/#contact" className="btn-primary">
              Begin Your Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ProcessPage;
