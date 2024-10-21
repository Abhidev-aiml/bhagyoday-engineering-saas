import Image from "next/image";
import logo from "../assets/logosaas.png";
import SocialXicon from "../assets/social-x.svg";
import SocialInsta from "../assets/social-insta.svg";
import SocialLinkedin from "../assets/social-linkedin.svg";
import SocialYoutube from "../assets/social-youtube.svg";
import SocialPin from "../assets/social-pin.svg";

export const Footer = () => {
  return <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center overflow-x-clip">
    <div className="container">
      <div className="inline-flex relative before:top-2 before:bottom-0 before:blur before:content-[''] before:h-full before:w-full before:bg-[linear-gradiet(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">

      <Image src={logo} alt="logo" height={40} className="relative"/>
      </div>
      <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
        <a href="">About</a>
        <a href="">Projects</a>
        <a href="">Customers</a>
        <a href="">Services</a>
        <a href="">Careers</a>
        <a href="">Help</a>
      </nav>
    <div className="flex justify-center gap-6 mt-6">
      <SocialInsta />
      <SocialLinkedin />
      <SocialYoutube />
      <SocialPin />
      <SocialXicon />
    </div>
    <p className="mt-6">&copy; Bhagyoday Engineering, Inc. All rights reserved. </p>
    </div>
  </footer>;
};
