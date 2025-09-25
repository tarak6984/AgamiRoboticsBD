'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Mail, Award, GraduationCap, Users, Lightbulb } from 'lucide-react';

const FounderSection = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Educational Background",
      description: "Strong foundation in technology and entrepreneurship"
    },
    {
      icon: Lightbulb,
      title: "Vision for Innovation", 
      description: "Passionate about making STEM education accessible to all Bangladeshi students"
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Committed to building a supportive learning ecosystem for young innovators"
    }
  ];

  return (
    <section id="founder" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
            Meet the <span className="text-blue-600">Founder</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driven by a passion to democratize STEM education in Bangladesh and inspire the next generation of innovators.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Founder Photo and Basic Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="relative mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative inline-block"
              >
                <Image
                  src="/Tarak Md Shabbir.jpg"
                  alt="Tarak Md Shabbir - Founder & CEO of Agami Robotics BD"
                  width={300}
                  height={300}
                  className="rounded-2xl shadow-2xl mx-auto lg:mx-0"
                  priority
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg">
                  <Award className="h-6 w-6" />
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Tarak Md Shabbir</h3>
              <p className="text-xl text-blue-600 font-semibold mb-2">Founder & CEO</p>
              <p className="text-lg text-gray-600 mb-6">Agami Robotics BD</p>
              
              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-4 mb-8">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="mailto:tarak@agamiroboticsbd.com"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-600 text-white p-3 rounded-full hover:bg-gray-700 transition-colors duration-200"
                  aria-label="Email Contact"
                >
                  <Mail className="h-5 w-5" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Founder Story and Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Founder Story */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">My Vision</h4>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  &quot;Growing up in Bangladesh, I witnessed firsthand the challenges our students face in accessing 
                  quality STEM education. The lack of affordable, locally-adapted learning resources inspired 
                  me to create Agami Robotics BD.&quot;
                </p>
                <p>
                  &quot;Our mission is simple yet powerful: to democratize robotics education by providing 
                  affordable kits with Bengali content, empowering every Bangladeshi student to become 
                  an innovator and problem-solver.&quot;
                </p>
                <p className="text-blue-600 font-semibold">
                  &quot;Together, we&apos;re not just teaching robotics - we&apos;re building the foundation 
                  for Bangladesh&apos;s technological future.&quot;
                </p>
              </div>
            </div>

            {/* Key Focus Areas */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-gray-900">Leadership Focus</h4>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <achievement.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-2">
                      {achievement.title}
                    </h5>
                    <p className="text-gray-600">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white text-center"
            >
              <h4 className="text-xl font-bold mb-3">Join Our Mission</h4>
              <p className="mb-4 opacity-90">
                Ready to be part of Bangladesh&apos;s robotics education revolution?
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Connect with Tarak
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 max-w-4xl mx-auto"
        >
          <blockquote className="text-2xl md:text-3xl font-bold text-gray-800 italic">
            &quot;Every student deserves the opportunity to innovate. 
            With Agami Robotics BD, we&apos;re making that dream a reality.&quot;
          </blockquote>
          <div className="mt-6">
            <div className="text-lg font-semibold text-blue-600">— Tarak Md Shabbir</div>
            <div className="text-gray-600">Founder & CEO, Agami Robotics BD</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSection;