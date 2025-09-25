'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Zap, Users, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-20 pb-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", delay: 5 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  🚀 Now in Bangladesh
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Building the Future of 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> STEM Education</span> in Bangladesh
              </h1>
              
              <div className="text-lg md:text-xl text-gray-600 mt-6">
                <p className="mb-2">আগামী রোবটিক্স বিডি</p>
                <p className="text-blue-600 font-semibold mb-3 text-xl">Inspiring Youth to Innovate | তরুণদের উদ্ভাবনে অনুপ্রাণিত</p>
                <p>Empowering Bangladeshi students with affordable robotics kits, Bengali tutorials, and hands-on learning experiences.</p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap gap-6 text-sm"
            >
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-600" />
                <span className="text-gray-600">10,000+ Students Targeted</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-green-600" />
                <span className="text-gray-600">Bengali Content</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-purple-600" />
                <span className="text-gray-600">Competition Ready</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-200 font-medium flex items-center justify-center space-x-2 group">
                <span>Explore Our Kits</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-200 font-medium flex items-center justify-center space-x-2 group">
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </button>
            </motion.div>
          </div>

          {/* Right Content - Hero Image/Animation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full h-96 md:h-[500px] bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl overflow-hidden shadow-2xl">
              {/* Placeholder for robotics animation/image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-center"
                >
                  <div className="w-48 h-48 bg-white rounded-full shadow-lg flex items-center justify-center mb-8">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-32 h-32 border-4 border-blue-600 rounded-full border-dashed"></div>
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Interactive Robotics</h3>
                  <p className="text-gray-600 mb-2">Built for Bengali-speaking students</p>
                  <p className="text-sm text-blue-600 font-medium">Inspiring Youth to Innovate</p>
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-16 left-16 w-16 h-16 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center"
              >
                <span className="text-white font-bold text-xl">01</span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-32 right-12 w-12 h-12 bg-green-500 rounded-full shadow-lg flex items-center justify-center"
              >
                <Zap className="h-6 w-6 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-24 left-8 w-14 h-14 bg-purple-500 rounded-lg shadow-lg flex items-center justify-center"
              >
                <Award className="h-8 w-8 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;