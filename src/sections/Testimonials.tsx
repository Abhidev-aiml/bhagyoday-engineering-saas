"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import {motion} from "framer-motion";
import React from "react";
import { div } from "framer-motion/client";

const testimonials = [
  {
    text: "As a developer working on infrastructure projects, this company's expertise in delivering high-quality, precise solutions is unmatched. Their commitment to safety and sustainability sets them apart.",
    imageSrc: avatar1.src,
    name: "Rohan Sharma",
    username: "@rohansharma",
  },
  {
    text: "Our project's success is a direct result of the seamless execution and expertise this team brought to the table. Their attention to detail and reliability exceeded our expectations.",
    imageSrc: avatar2.src,
    name: "Ananya Mehta",
    username: "@ananyatech",
  },
  {
    text: "From design to execution, their approach to infrastructure development and power systems is both professional and efficient. I couldn't be happier with the results.",
    imageSrc: avatar3.src,
    name: "Priya Nair",
    username: "@priyanair",
  },
  {
    text: "The team's ability to customize their services to meet our specific needs was incredible. Their precision and focus on safety ensured a smooth integration into our existing systems.",
    imageSrc: avatar4.src,
    name: "Arjun Patel",
    username: "@arjunptech",
  },
  {
    text: "Planning and executing large-scale infrastructure projects has never been easier. Their team ensures every moving part is handled with precision, and the results speak for themselves.",
    imageSrc: avatar5.src,
    name: "Neha Gupta",
    username: "@nehaplanner",
  },
  {
    text: "Their expertise in both civil and electrical contracting made a significant difference in our project's success. The quality of their work and the commitment to long-lasting results was impressive.",
    imageSrc: avatar6.src,
    name: "Vikram Rao",
    username: "@vikramrao99",
  },
  {
    text: "Thanks to their tailored solutions, we were able to complete our project on time and within budget. The team’s precision and efficiency ensured everything went smoothly.",
    imageSrc: avatar7.src,
    name: "Sneha Kapoor",
    username: "@snehadesign",
  },
  {
    text: "Their ability to manage both civil infrastructure and electrical systems in one project is a game-changer. We trust them to handle all our contracting needs.",
    imageSrc: avatar8.src,
    name: "Kartik Iyer",
    username: "@kartikiyer",
  },
  {
    text: "I was impressed with how they balanced safety, sustainability, and precision in every phase of our project. Their team delivers exactly what they promise.",
    imageSrc: avatar9.src,
    name: "Aditi Verma",
    username: "@aditiverma09",
  },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props:{className?: string; testimonials:typeof testimonials; duration?:number;}) => (
  <div className={props.className}>
  <motion.div className="flex flex-col gap-6 pb-6"
  animate={{translateY:"-50%"}}
  transition={{
    repeat: Infinity,
    ease: "linear",
    repeatType: "loop",
    duration: props.duration || 10,
  }}
  >
      {[...new Array(2)].fill(0).map((_,index) => (
  <React.Fragment key={index}>
    {props.testimonials.map(({ text, imageSrc, name, username },index) => (
        <div key={index} className="card">
          <div>{text}</div>
          <div className="flex items-center gap-2 mt-5">
            <Image src={imageSrc} alt={name} height={40} width={40} className="h-10 w-10 rounded-full" />
            <div className="flex flex-col">
              <div className="font-medium tracking-tight leading-5">{name}</div>
              <div className="tracking-tight leading-5">{username}</div>
            </div>
          </div>
        </div>
      ))}
  </React.Fragment>
))}
</motion.div>
    </div>
)


export const Testimonials = () => {
  return <section className="bg-white">
    <div className="container">
      <div className="section-heading">
      <div className="flex justify-center">
    <div className="tag">Testimonials</div>
    </div>
    <h2 className="section-title mt-5">What our customers say</h2>
    <p className="section-description mt-5">Hear from our satisfied clients who have experienced the impact of our civil and electrical solutions firsthand</p>
    </div>
    <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
    <TestimonialsColumn testimonials={firstColumn} duration={15} />
    <TestimonialsColumn className="hidden md:block" testimonials={secondColumn} duration={19} />
    <TestimonialsColumn className="hidden lg:block" testimonials={thirdColumn} duration={17} />
    </div>
    </div>
  </section>
};
