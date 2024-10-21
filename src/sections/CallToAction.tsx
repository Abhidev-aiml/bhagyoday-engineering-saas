"use client";
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Starimage from '../assets/star.png';
import Springimage from '../assets/spring.png';

export const CallToAction = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  // State to handle button text changes
  const [buttonText, setButtonText] = useState<string>('Send Email');
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7hkn0zb', 
        'template_erkel1l', 
        form.current as HTMLFormElement, 
        'OqdCWpsOZHqrgjQR2'
      )
      .then(() => {
        console.log('Email sent successfully');
        
        // Change button text to "Email Sent"
        setButtonText('Email Sent');
        setIsButtonDisabled(true);
        
        // Revert button text back to "Send Email" after 5 seconds
        setTimeout(() => {
          setButtonText('Send Email');
          setIsButtonDisabled(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('Failed to send email: ', error.text);
      });
    
    e.currentTarget.reset();
  };

  return (
    <section ref={ctaRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Ready to Start Your Next Project? Let’s Build Together</h2>
          <p className="section-description mt-5">
            Planning a civil infrastructure or electrical project? We’re here to turn your vision into reality with expert, high-quality solutions tailored to your needs. From consultation to execution, we ensure a seamless process and lasting success.
          </p>
          <motion.img style={{ translateY }} src={Starimage.src} alt="Star" className="absolute -left-[350px] -top-[137px]" width={360} />
          <motion.img style={{ translateY }} src={Springimage.src} alt="Spring" className="absolute -right-[331px] -top-[19px]" width={360} />
        </div>

        {/* Contact Form Section */}
        <div className="mt-16">
          <h3 className="section-title">Contact Us</h3>
          <form ref={form} onSubmit={sendEmail} className="mt-10 max-w-lg mx-auto">
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
              <input type="text" id="name" name="name" className="block w-full p-3 border border-gray-300 rounded-lg" placeholder="Insert your name" required />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
              <input type="email" id="email" name="email" className="block w-full p-3 border border-gray-300 rounded-lg" placeholder="Insert your email" required />
            </div>
            <div className="mb-6">
              <label htmlFor="project" className="block mb-2 text-sm font-medium text-gray-900">Your Project</label>
              <textarea id="project" name="project" rows={4} className="block w-full p-3 border border-gray-300 rounded-lg" placeholder="Describe your project" required></textarea>
            </div>
            <button
              type="submit"
              className={`btn btn-primary w-full transition-all ${isButtonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
              disabled={isButtonDisabled}
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
