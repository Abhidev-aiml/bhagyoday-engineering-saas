import Image from "next/image";
import Arrowright from "../assets/arrow-right.svg";
import Logo from "../assets/logosaas.png";

import Menu from "../assets/menu.svg";
export const Navbar = () => {
 return (
<header className="sticky top-0 backdrop-blur-sm z-20">
<div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
  <p className="text-white/60 hidden md:inline-block" >Govt. Licenced Electrical Contractors and Suppliers.</p>
    <div className="inline-flex gap-1 items-center">
     <p>Get in touch with us</p>
    <Arrowright className = "h-4 w-4 inline-flex justify-center items-center" />
    </div>
  </div> 
  <div className="py-5">
  <div className="container">
    <div className="flex items-center justify-between">

  <Image src={Logo} alt="Bhagyoday Engineering" height={40} width={40}/>
  <Menu className= "h-5 w-5 md:hidden"/>
  <nav className="hidden md:flex gap-6 text-black/60 items-center">
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Projects</a>
    <a href="#">Customers</a>
    <a href="#">Help</a>
    <button className="bg-black text-white rounded-lg px-4 py-2 font-medium inline-flex align-items justify-center tracking-tight">Contact Us</button>
  </nav>
    </div>
  </div>
  </div>
</header>
 )}