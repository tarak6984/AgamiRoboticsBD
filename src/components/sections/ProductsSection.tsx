'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Package, Users2, Building2, Trophy, BookOpen, Video, HeadphonesIcon, Star } from 'lucide-react';

const ProductsSection = () => {
  const kits = [
    {
      name: "Beginner Robotics Kit",
      price: "৳2,500",
      originalPrice: "৳4,000",
      description: "Perfect for students starting their robotics journey",
      features: ["Arduino-compatible board", "10+ sensors", "Bengali manual", "5 project tutorials"],
      popular: false
    },
    {
      name: "Advanced Competition Kit",
      price: "৳4,500", 
      originalPrice: "৳7,000",
      description: "Designed for science fairs and robotics competitions",
      features: ["Premium components", "20+ sensors", "Video tutorials", "Competition projects", "1-year support"],
      popular: true
    },
    {
      name: "Institution Bundle",
      price: "৳35,000",
      originalPrice: "৳50,000",
      description: "Complete solution for schools and colleges",
      features: ["10 student kits", "Teacher training", "Curriculum guide", "Bulk support"],
      popular: false
    }
  ];

  const businessModel = [
    {
      icon: Users2,
      title: "Direct-to-Student (B2C)",
      description: "Sell directly to school, college, and university students online",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Building2,
      title: "Institutional Partnerships (B2B)",
      description: "Partner with educational institutions for bulk kit supplies",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Trophy,
      title: "Competition & Events Focus",
      description: "Market kits for science fairs, robotics competitions, and olympiads",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Bengali Learning Content",
      description: "Step-by-step tutorials and documentation in Bengali for easy understanding"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Comprehensive video guides covering basics to advanced robotics concepts"
    },
    {
      icon: HeadphonesIcon,
      title: "Local Support",
      description: "Dedicated Bengali-speaking support team for technical assistance"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Robotics Kits</span> & Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Affordable, high-quality robotics kits designed specifically for Bangladeshi students, 
            with Bengali content and local support.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {kits.map((kit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl shadow-xl border-2 ${kit.popular ? 'border-blue-500' : 'border-gray-200'} p-8 hover:shadow-2xl transition-shadow duration-300`}
            >
              {kit.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <Package className={`h-16 w-16 mx-auto mb-4 ${kit.popular ? 'text-blue-500' : 'text-gray-600'}`} />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{kit.name}</h3>
                <p className="text-gray-600 mb-4">{kit.description}</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">{kit.price}</span>
                  <span className="text-lg text-gray-500 line-through ml-2">{kit.originalPrice}</span>
                  <div className="text-sm text-green-600 font-medium mt-1">
                    Save {parseInt(kit.originalPrice.replace('৳', '').replace(',', '')) - parseInt(kit.price.replace('৳', '').replace(',', ''))} Taka
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {kit.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className={`w-2 h-2 rounded-full mr-3 ${kit.popular ? 'bg-blue-500' : 'bg-green-500'}`}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-full font-medium transition-all duration-200 ${
                kit.popular 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                Order Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Business Model */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our <span className="text-green-600">Business Model</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {businessModel.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${model.color} flex items-center justify-center`}>
                  <model.icon className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{model.title}</h4>
                <p className="text-gray-600">{model.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose <span className="text-purple-600">Agami Robotics BD</span>?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              >
                <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;