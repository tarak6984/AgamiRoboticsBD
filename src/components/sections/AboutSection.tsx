'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, DollarSign, Users, BookOpen, Award, Map, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Users, label: "Target Students", value: "10,000+", color: "text-blue-600" },
    { icon: BookOpen, label: "Learning Modules", value: "50+", color: "text-green-600" },
    { icon: Award, label: "Competition Projects", value: "25+", color: "text-purple-600" },
    { icon: Map, label: "Universities Targeted", value: "100+", color: "text-orange-600" }
  ];

  const fundingAllocation = [
    {
      category: "Initial Inventory",
      amount: "৳6 Lakh",
      percentage: "60%",
      description: "First batch of robotics kits and components for initial sales"
    },
    {
      category: "Operations Assistant",
      amount: "৳2 Lakh", 
      percentage: "20%",
      description: "Part-time operations assistant salary for 6 months"
    },
    {
      category: "Marketing Campaign",
      amount: "৳1.5 Lakh",
      percentage: "15%",
      description: "Targeted digital marketing to achieve initial sales velocity"
    },
    {
      category: "Miscellaneous",
      amount: "৳0.5 Lakh",
      percentage: "5%",
      description: "Unexpected expenses and operational buffer"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Agami Robotics BD</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            আগামী রোবটিক্স বিডি - Building the foundation for Bangladesh&apos;s next generation of innovators and engineers.
          </p>
          <p className="text-lg text-blue-600 font-semibold mt-4 max-w-2xl mx-auto">
            Inspiring Youth to Innovate | তরুণদের উদ্ভাবনে অনুপ্রাণিত
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To democratize STEM education in Bangladesh by providing affordable, locally-adapted 
                robotics kits that bridge the gap between theoretical knowledge and practical application. 
                We believe every Bangladeshi student deserves access to quality hands-on learning experiences.
              </p>
            </div>

            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To build &quot;Agami Robotics BD&quot; into the go-to brand for young innovators across Bangladesh,
                empowering them to excel in their academic projects and win national competitions, 
                thereby building a smarter, more capable future generation.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Our Competitive Advantage</h4>
              <p className="text-gray-700 leading-relaxed">
                Unlike generic importers, we&apos;re not just selling hardware boxes; we&apos;re building a complete
                learning ecosystem tailored for Bangladesh. Our focus on curriculum-aligned Bengali content, 
                step-by-step video tutorials, and dedicated local support allows us to build a trusted brand 
                and loyal community that large, foreign companies cannot replicate.
              </p>
            </div>
          </motion.div>

          {/* Funding & Business Viability */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <DollarSign className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-3xl font-bold text-gray-900">Funding Request</h3>
              </div>
              <div className="bg-green-50 rounded-2xl p-6 mb-8">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-green-700 mb-2">৳10 Lakh</div>
                  <div className="text-lg text-green-600">Pre-seed Grant Request</div>
                </div>
                <p className="text-gray-700 text-center">
                  Strategic allocation across inventory, operations, and marketing to establish 
                  a sustainable and scalable robotics education business.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Fund Allocation Plan</h4>
              {fundingAllocation.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h5 className="text-lg font-semibold text-gray-900">{item.category}</h5>
                    <div className="text-right">
                      <div className="text-xl font-bold text-gray-900">{item.amount}</div>
                      <div className="text-sm text-blue-600">{item.percentage}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 bg-blue-50 rounded-2xl p-6"
            >
              <div className="flex items-center mb-4">
                <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
                <h4 className="text-lg font-bold text-gray-900">Path to Profitability</h4>
              </div>
              <p className="text-gray-700 text-sm">
                With our detailed financial plan, we project break-even within 8-10 months and 
                sustainable profitability by month 12. Our lean business model and strong market 
                demand provide a clear path to success and potential for future scaling.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;