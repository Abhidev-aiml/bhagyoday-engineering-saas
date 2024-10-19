import { twMerge } from "tailwind-merge";

const services = [
  {
    title: "Electrical Contracting",
    description: "Full-service electrical contracting for residential, commercial, and industrial projects.",
  },
  {
    title: "Electrical Supply",
    description: "Providing high-quality electrical materials and products.",
  },
  {
    title: "Project Management",
    description: "Comprehensive project management from planning to execution.",
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing maintenance and support services to ensure the longevity and efficiency of electrical systems.",
  },
  {
    title: "Consultation",
    description: "Expert consultation services to create efficient and effective electrical systems.",
  },
  {
    title: "Design",
    description: "Expert design services to create efficient and effective electrical systems.",
  },
];

export const Services = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Our Services</div>
          </div>
          <h2 className="section-title mt-5">Expert Civil and Electrical Contracting, Designed for You</h2>
          <p className="section-description mt-5">We offer a wide range of civil and electrical services, customized to meet the specific requirements of each project.</p>
        </div>

        {/* Responsive Services Cards */}
        <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description }, index) => (
            <div
              key={index}
              className={twMerge(
                "p-6 rounded-3xl w-full transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl",
                "border-2 border-transparent animate-shine bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] hover:border-2 hover:border-gradient-to-r from-yellow-500 via-green-500 to-blue-500"
              )}
              style={{
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out',
                willChange: 'transform, box-shadow, border-color',
              }}
            >
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-semibold text-neutral-200">{title}</h3>
                <p className="text-sm leading-[1.5] text-neutral-400">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
