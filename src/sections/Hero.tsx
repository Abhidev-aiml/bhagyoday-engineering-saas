import Image from "next/image";
import ArrowIcon from "../assets/arrow-right.svg";
import cogImage from "../assets/cog.png";
import cylinderImage from "../assets/cylinder.png";
import noodleImage from "../assets/noodle.png";
export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
        <div className="md:w-[478px]">
          <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">Since 2000</div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6 pb-1">Bhagyoday Engineering</h1>
          <p className="text-xl text-[#010D3E] tracking-tight mt-6">At Bhagyoday Engineering, we provide expert civil and electrical contracting services, customized to meet your specific needs. Our skilled team ensures every project is completed with precision, safety, and efficiency, from planning to execution. Whether building infrastructure or powering systems, we deliver reliable and sustainable solutions you can trust.</p>
          <div className="flex gap-1 items-center mt-[30px]"> 
            <button className="btn btn-primary">Contact Us</button>
          <button className="btn btn-text gap-1"><span>
          Learn More
            </span>
            <ArrowIcon className="h-5 w-5"/></button>
            </div>
        </div>
      <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
        <Image src={cogImage} alt="Cog" className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left=0"/>
        <Image src={cylinderImage} height={220} width={220} alt="CylinderImage" className="hidden md:block -top-8 -left-32 md:absolute"/>
        <Image src={noodleImage} height={220}  alt="NoodleImage" className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"/>
      </div>
      </div>
      </div>
    </section>
  );
};
