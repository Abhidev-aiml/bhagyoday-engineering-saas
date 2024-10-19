import Image from "next/image";
import productImage from "../assets/product-image.png";
import pyramidImage from "../assets/pyramid.png";
import tubeImage from "../assets/tube.png";
export const ProductShowcase = () => {
  return <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
    <div className="container">
      <div className="section-heading">
      <div className="flex justify-center">
      <div className="tag">Discover Our Projects</div>
      </div>
      <h2 className="section-title mt-5"> Crafting Infrastructure, Powering Progress</h2>
      <p className="section-description mt-5">Explore our portfolio of completed civil and electrical projects. From robust infrastructure developments to reliable power systems, each project is a testament to our commitment to precision, safety, and sustainability.</p>
      </div>
      <div className="relative">
    <Image src={productImage} alt="Product Image" className="mt-10" />
    <Image src={pyramidImage} height={262} width={262} alt="Pyramid Image" className="hidden md:block absolute -right-36 -top-32" />
    <Image src={tubeImage} alt="Tube Image" height={248} className="hidden md:block absolute bottom-24 -left-36" />
    </div>
    </div>
  </section>

};
