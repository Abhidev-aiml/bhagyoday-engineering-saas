"use client";
import Arrowright from '../assets/arrow-right.svg';
import Starimage from '../assets/star.png';
import Springimage from '../assets/spring.png';
import Image from 'next/image';
import {motion, useScroll, useTransform} from 'framer-motion';
import { useRef } from 'react';

export const CallToAction = () => {
  const ctaRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target:ctaRef,
    offset: ["start end","end start"],

  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return <section ref={ctaRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
    <div className="container">
      <div className='section-heading relative'>
      <h2 className="section-title">Ready to Start Your Next Project? Let’s Build Together</h2>
      <p className="section-description mt-5">Planning a civil infrastructure or electrical project? We’re here to turn your vision into reality with expert, high-quality solutions tailored to your needs. From consultation to execution, we ensure a seamless process and lasting success.</p> 
      <motion.img  style={{translateY}} src={Starimage.src} alt='Star' className="absolute -left-[350px] -top-[137px]" width={360} />
      <motion.img style={{translateY}} src={Springimage.src} alt='Spring' className="absolute -right-[331px] -top-[19px]" width={360} />
      </div>
      <div className="flex gap-2 mt-10 justify-center">
        <button className="btn btn-primary">Contact Us</button>
        <button className="btn btn-text gap-1"><span>Learn more</span>
        <Arrowright className="h-5 w-5"/></button>
      </div>
    </div>
  </section>;
};
