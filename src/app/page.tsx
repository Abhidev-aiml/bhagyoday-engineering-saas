import { Navbar } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Services } from "@/sections/Pricing";
import { ProjectsSection } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
return <div>
  <Navbar />
  <Hero />
  <LogoTicker />
  <ProjectsSection />
  <Services />
  <Testimonials />
</div>
}
