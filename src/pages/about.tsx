import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Users, Globe, HeartHandshake } from 'lucide-react';
import Layout from '@/components/Layout';

const AboutPage = () => {
  const principles = [
    {
      icon: Shield,
      title: 'Discretion',
      description: 'We understand the importance of privacy and confidentiality in all our client relationships, ensuring complete discretion in every interaction.',
    },
    {
      icon: Users,
      title: 'Personal Service',
      description: 'Every family receives dedicated, personalized attention with direct access to our senior consultants throughout their educational journey.',
    },
    {
      icon: Globe,
      title: 'Global Excellence',
      description: 'Our international network and deep understanding of global education systems ensure access to the finest opportunities worldwide.',
    },
    {
      icon: HeartHandshake,
      title: 'Ongoing Support',
      description: 'Our relationship extends far beyond initial placement, providing continuous guidance and support as your family\'s needs evolve.',
    },
  ];

  const stats = [
    { number: '150+', label: 'Partner Schools' },
    { number: '25+', label: 'Countries' },
    { number: '1000+', label: 'Successful Placements' },
  ];

  return (
    <Layout>
      <Head>
        <title>About Us - HNW Education</title>
        <meta name="description" content="Learn about HNW Education's approach to educational consultancy and our commitment to excellence." />
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
            <div className="section-subtitle text-gold-300 mb-6">WHO WE ARE</div>
            <h1 className="hero-title mb-8">
              Trusted Advisors for International Families
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              HNW Education supports families across education, lifestyle, and transition. 
              Built on discretion and trust, we serve a select number of international 
              clients with tailored guidance delivered quietly, personally, and with care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Architecture of Excellence */}
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
              <h2 className="section-title text-primary-500">
                An Architecture of Excellence
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We help families move confidently through life's key educational moments: 
                  from choosing the right school for your child to navigating international 
                  curricula, managing university applications, or arranging trusted academic 
                  support across multiple countries.
                </p>
                <p>
                  Our approach is founded on the understanding that each family's educational 
                  journey is unique. We provide comprehensive guidance that extends beyond 
                  simple school placement to encompass the full spectrum of educational 
                  planning and support.
                </p>
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
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Library Excellence"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="section-subtitle mb-4">OUR PRINCIPLES</div>
            <h2 className="section-title text-primary-500">
              Founded on Trust and Excellence
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center flex-shrink-0">
                    <principle.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-500 mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
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
                <div className="section-subtitle mb-4">OUR EXPERTISE</div>
                <h2 className="section-title text-primary-500 mb-6">
                  It Begins with Education
                </h2>
              </div>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At HNW Education, we specialize in comprehensive educational consultancy 
                  for families across London, Monaco, Dubai, Hong Kong, and beyond. Our 
                  expertise spans every stage of your child's academic journey—from school 
                  and university placement to ongoing mentoring and specialist support.
                </p>
                <p>
                  Our wider network allows us to discreetly support your family with related 
                  needs through carefully selected partners, ensuring continuity and excellence 
                  at every step of your educational journey.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bodoni font-bold text-primary-500 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
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
                  src="/writing.jpg"
                  alt="Educational Expertise"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
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
              We'd be glad to talk - let's take it from here.
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Ready to begin your family's educational journey with trusted guidance?
            </p>
            <Link href="/#contact" className="inline-flex items-center gap-2 bg-white text-primary-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
              Start the Conversation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;

