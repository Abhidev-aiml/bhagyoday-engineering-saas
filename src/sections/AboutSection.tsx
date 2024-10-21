"use client";
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import OwnerImage from '../assets/owner.jpg';
import DemoAbout from './DemoAbout';

const AboutComponent = () => {
  return (
    <section className="bg-gradient-to-b from-[#D2DCFF] to-[#FFFFFF] py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-10 md:gap-16 md:flex-row justify-center">

          {/* Image with Framer Motion for animation */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-[250px] h-[250px] rounded-full bg-neutral-200 overflow-hidden shadow-lg">
              <Image 
                src={OwnerImage} 
                alt="Company Owner" 
                className="w-full h-full object-cover" 
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex flex-col items-center text-center md:text-left">
            <motion.h2 
              className="section-title mb-4"
              whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
            >
              Mr. Sudhir Thakare
            </motion.h2>
            <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}>
            <DemoAbout />

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
