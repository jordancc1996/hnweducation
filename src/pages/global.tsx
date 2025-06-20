import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone, Mail, Globe, Users, Building } from 'lucide-react';
import Layout from '@/components/Layout';

const GlobalPage = () => {
  const globalMarkets = [
    {
      id: 'london',
      title: 'London',
      country: 'United Kingdom',
      description: 'Our founding base and headquarters, serving families across the UK with access to the finest independent schools and universities.',
      highlights: [
        'Independent day and boarding schools',
        'Oxbridge preparation',
        'International curriculum options',
        'University guidance and support'
      ],
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      stats: { schools: '50+', placements: '300+' }
    },
    {
      id: 'monaco',
      title: 'Monaco',
      country: 'Principality of Monaco',
      description: 'Serving the unique educational needs of families in Monaco with access to French, international, and multilingual education options.',
      highlights: [
        'French national curriculum',
        'International Baccalaureate programs',
        'Multilingual education excellence',
        'European university pathways'
      ],
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      stats: { schools: '25+', placements: '150+' }
    },
    {
      id: 'dubai',
      title: 'Dubai',
      country: 'United Arab Emirates',
      description: 'Supporting the growing international community in Dubai with world-class educational opportunities and cultural integration.',
      highlights: [
        'British and American curriculum schools',
        'International Baccalaureate programs',
        'Cultural integration support',
        'Regional university guidance'
      ],
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      stats: { schools: '40+', placements: '200+' }
    },
    {
      id: 'hongkong',
      title: 'Hong Kong',
      country: 'Special Administrative Region',
      description: 'Bridging Eastern and Western educational traditions for families seeking the best of both worlds in Asia-Pacific.',
      highlights: [
        'International schools with global recognition',
        'Mandarin immersion programs',
        'University pathways to top institutions',
        'Cultural bridge programs'
      ],
      image: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      stats: { schools: '35+', placements: '180+' }
    },
    {
      id: 'switzerland',
      title: 'Switzerland',
      country: 'Swiss Confederation',
      description: 'Access to Switzerland\'s prestigious boarding schools and international education programs in stunning Alpine settings.',
      highlights: [
        'Elite international boarding schools',
        'Multilingual education programs',
        'Leadership development focus',
        'Global university preparation'
      ],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      stats: { schools: '20+', placements: '120+' }
    },
    {
      id: 'usa',
      title: 'United States',
      country: 'United States of America',
      description: 'Comprehensive support for families seeking access to America\'s top preparatory schools and Ivy League pathways.',
      highlights: [
        'Elite preparatory schools',
        'Ivy League university preparation',
        'SAT/ACT preparation and guidance',
        'Cultural orientation programs'
      ],
      image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      stats: { schools: '45+', placements: '250+' }
    }
  ];

  const globalStats = [
    { number: '6', label: 'Key Markets' },
    { number: '215+', label: 'Partner Schools' },
    { number: '25+', label: 'Countries Served' },
    { number: '1200+', label: 'Successful Placements' }
  ];

  return (
    <Layout>
      <Head>
        <title>Global Reach - HNW Education</title>
        <meta name="description" content="Discover HNW Education's global presence across key international markets including London, Monaco, Dubai, Hong Kong, Switzerland, and the United States." />
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
            <div className="section-subtitle text-gold-300 mb-6">GLOBAL PRESENCE</div>
            <h1 className="hero-title mb-8">
              Founded and Based in London, Serving Clients Worldwide
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              Our international network spans six key markets, providing families 
              with seamless access to the world's finest educational opportunities, 
              wherever their journey takes them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Global Stats */}
      <section className="section-padding bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {globalStats.map((stat, index ) => (
              <div key={stat.label} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bodoni font-bold text-primary-500">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Markets Grid */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="section-subtitle mb-4">OUR MARKETS</div>
            <h2 className="section-title text-primary-500 mb-6">
              Six Key Markets, One Seamless Experience
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {globalMarkets.map((market, index) => (
              <motion.div
                key={market.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
              >
                <div className="relative h-48">
                  <Image
                    src={market.image}
                    alt={market.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{market.title}</h3>
                    <p className="text-sm opacity-90">{market.country}</p>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    {market.description}
                  </p>

                  <ul className="space-y-2">
                    {market.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-between pt-4 border-t border-gray-100">
                    <div className="text-center">
                      <div className="font-bold text-primary-500">{market.stats.schools}</div>
                      <div className="text-xs text-gray-500">Schools</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-primary-500">{market.stats.placements}</div>
                      <div className="text-xs text-gray-500">Placements</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <div className="section-subtitle mb-4">OUR NETWORK</div>
                <h2 className="section-title text-primary-500 mb-6">
                  A Truly Global Educational Network
                </h2>
              </div>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  From our London headquarters, we've built a comprehensive network 
                  that spans the globe's most important educational markets. Our 
                  presence in each region is supported by local expertise and 
                  deep cultural understanding.
                </p>
                <p>
                  Whether your family is relocating, seeking international education 
                  options, or planning for university abroad, our global reach ensures 
                  seamless support wherever your educational journey takes you.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <Globe className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-600">Global Reach</div>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-600">Local Expertise</div>
                </div>
                <div className="text-center">
                  <Building className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-600">Premium Schools</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Global Network"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title mb-6">
              Connect with Our Global Team
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              No matter where you are in the world, our team is ready to support 
              your family's educational journey with local expertise and global reach.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <MapPin className="w-8 h-8 mx-auto text-gold-300" />
              <h3 className="text-xl font-bold">Global Headquarters</h3>
              <p className="opacity-90">London, United Kingdom</p>
            </div>
            <div className="space-y-4">
              <Phone className="w-8 h-8 mx-auto text-gold-300" />
              <h3 className="text-xl font-bold">24/7 Support</h3>
              <p className="opacity-90">+44 (0 ) 20 7000 0000</p>
            </div>
            <div className="space-y-4">
              <Mail className="w-8 h-8 mx-auto text-gold-300" />
              <h3 className="text-xl font-bold">Global Inquiries</h3>
              <p className="opacity-90">global@hnweducation.com</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/#contact" className="inline-flex items-center gap-2 bg-white text-primary-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
              Start Your Global Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GlobalPage;
