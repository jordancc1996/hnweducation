import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Globe, Award, BookOpen, GraduationCap, Building, Send } from 'lucide-react';
import Layout from '@/components/Layout';


const HomePage = () => {
  const services = [
    {
      icon: Building,
      title: 'UK Independent Schools',
      subtitle: 'Premium Education',
      description: "Access to Britain's most prestigious independent schools with our expert guidance and established relationships.",
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Globe,
      title: 'International Schools',
      subtitle: 'Global Curriculum',
      description: 'Comprehensive support for IB, Cambridge, and other international curricula across multiple countries.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Award,
      title: 'Swiss Boarding Schools',
      subtitle: 'Alpine Excellence',
      description: 'Elite Swiss boarding schools offering world-class education in stunning Alpine settings.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: BookOpen,
      title: 'American Schools',
      subtitle: 'US Curriculum',
      description: 'Top American curriculum schools worldwide, preparing students for US university admission.',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: GraduationCap,
      title: 'European Schools',
      subtitle: 'Continental Education',
      description: 'Outstanding educational institutions across continental Europe with diverse language programs.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Users,
      title: 'Asian Schools',
      subtitle: 'Asia-Pacific',
      description: 'Leading educational institutions in Asia-Pacific region with strong academic traditions.',
      color: 'from-teal-500 to-teal-600',
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
        <title>HNW Education - Leading Educational Consultancy</title>
        <meta name="description" content="HNW Education is the premier international consultancy for families seeking exceptional educational opportunities worldwide." />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 to-white">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="section-subtitle">WELCOME TO</div>
              <h1 className="hero-title text-primary-500">
                HNW Education
              </h1>
              <div className="text-xl md:text-2xl font-semibold text-gold-500 tracking-wider">
                EDUCATIONAL CONSULTANCY
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              HNW Education is the premier international consultancy for families 
              seeking exceptional educational opportunities for their children, 
              regardless of location around the globe.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#contact" className="btn-primary">
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Hero Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative grid grid-cols-2 gap-4 max-w-lg mx-auto">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <Image
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="School Building"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded-2xl overflow-hidden shadow-xl transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <Image
                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Students Learning"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-32 rounded-2xl overflow-hidden shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <Image
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Student Assessment"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Ongoing Support"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="section-subtitle mb-4">OUR SERVICES</div>
            <h2 className="section-title text-primary-500 mb-6">
              Educational Excellence
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-8 shadow-lg card-hover border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-semibold text-gold-500 mb-2">
                      {service.subtitle}
                    </div>
                    <h3 className="text-xl font-bold text-primary-500 mb-3">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <div className="section-subtitle mb-4">ABOUT HNW EDUCATION</div>
                <h2 className="section-title text-primary-500 mb-6">
                  Helping Families Access the Very Best in Education
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                HNW Education is proud to offer comprehensive educational consulting 
                services. Our consultancy provides expert guidance to families seeking 
                the finest educational opportunities from across the globe.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Hand-picked and vetted by our leading education consultants, we offer 
                comprehensively curated advice from international experts, with each 
                recommendation recognized for academic excellence, outstanding facilities, 
                university preparation, unique ethos and how they prepare students for 
                life beyond academia.
              </p>
              
              <Link href="/about" className="btn-primary">
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
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
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Educational Excellence"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bodoni font-bold text-primary-500 mb-2">
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

{/* Contact Form Section */}
<section className="section-padding bg-gradient-to-br from-gray-900 to-primary-900 text-white">
  <div className="container">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Side - Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div>
          <div className="text-sm font-semibold tracking-wider text-gold-300 mb-4">
            CONTACT
          </div>
          <h2 className="text-4xl md:text-5xl font-bodoni font-bold text-gold-400 leading-tight mb-6">
            We'd be glad to talk - let's take it from here.
          </h2>
        </div>
        
        <div className="space-y-4 text-gray-300">
          <p className="text-lg">
            Ready to begin your family's educational journey? We're here to 
            provide expert guidance tailored to your unique needs.
          </p>
          <div className="pt-4">
            <a 
              href="mailto:info@hnweducation.com"
              className="text-gold-300 hover:text-gold-200 transition-colors"
            >
              info@hnweducation.com
            </a>
          </div>
        </div>
      </motion.div>

      {/* Right Side - Form */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
      >
        <form action="https://formspree.io/f/xeokleoq" method="POST" className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                First Name <span className="text-gold-400">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                Last Name <span className="text-gold-400">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email <span className="text-gold-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300"
              placeholder="Enter your email address"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message <span className="text-gold-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300 resize-none"
              placeholder="Tell us about your educational needs and how we can help..."
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-gold-400 text-gold-400 font-semibold rounded-full hover:bg-gold-400 hover:text-gray-900 transition-all duration-300"
            >
              <Send className="w-5 h-5" />
              SEND
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  </div>
</section>



    </Layout>
  );
};

export default HomePage;

