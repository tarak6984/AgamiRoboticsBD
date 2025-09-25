'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, Target, Lightbulb, Globe, Zap } from 'lucide-react';

const ProblemSolutionSection = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Expensive Robotics Kits",
      description: "High-quality robotics kits are prohibitively expensive for most Bangladeshi students"
    },
    {
      icon: Globe,
      title: "Language Barrier",
      description: "English-only instructions exclude students in the national curriculum"
    },
    {
      icon: Target,
      title: "Limited Access",
      description: "Lack of hands-on STEM education opportunities in schools and colleges"
    }
  ];

  const solutions = [
    {
      icon: CheckCircle,
      title: "Affordable Local Kits",
      description: "High-quality robotics kits at prices accessible to Bangladeshi students",
      color: "text-green-600"
    },
    {
      icon: Lightbulb,
      title: "Bengali Learning Content",
      description: "Step-by-step tutorials and guides in Bengali for easy understanding",
      color: "text-blue-600"
    },
    {
      icon: Zap,
      title: "Competition Ready",
      description: "Kits designed for science fairs, robotics competitions, and programming olympiads",
      color: "text-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
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
            Solving the <span className="text-red-600">STEM Education Crisis</span> in Bangladesh
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We identified critical barriers preventing Bangladeshi students from accessing quality STEM education and built targeted solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Problem Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
                The Problems We Identified
              </h3>
              <p className="text-gray-600">
                Our research revealed significant barriers preventing students from accessing modern STEM education.
              </p>
            </div>

            <div className="space-y-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <problem.icon className="h-8 w-8 text-red-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {problem.title}
                      </h4>
                      <p className="text-gray-600">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solution Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                Our Solution Approach
              </h3>
              <p className="text-gray-600">
                Agami Robotics BD addresses each problem with targeted, locally-adapted solutions.
              </p>
            </div>

            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <solution.icon className={`h-8 w-8 ${solution.color}`} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {solution.title}
                      </h4>
                      <p className="text-gray-600">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Our Vision: Building a Smarter Bangladesh
            </h3>
            <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto">
              By making robotics education accessible and relevant to Bangladeshi students, 
              we&apos;re empowering the next generation to excel in their academic projects,
              win national competitions, and build a more capable future for our nation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;