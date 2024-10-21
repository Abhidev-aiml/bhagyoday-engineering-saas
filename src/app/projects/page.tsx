import React from 'react';

const projects = [
    {
      title: "Solar Power Installation",
      description: "A large-scale solar power system providing sustainable energy to rural areas.",
    },
    {
      title: "Commercial Building Development",
      description: "A high-rise commercial building designed with energy-efficient technologies.",
    },
    {
      title: "Electrical Grid Modernization",
      description: "Upgrading the electrical grid for enhanced efficiency and resilience.",
    },
    {
      title: "Infrastructure for Rural Electrification",
      description: "Development of robust electrical infrastructure to electrify remote rural regions.",
    },
    {
      title: "Industrial Plant Electrical Design",
      description: "Custom electrical system design for large-scale industrial operations.",
    },
    {
      title: "Power Backup Systems",
      description: "Installation of uninterruptible power supply (UPS) systems for commercial and industrial facilities.",
    },
    {
      title: "Highway Lighting Installation",
      description: "Implementation of energy-efficient lighting systems along major highways.",
    },
    {
      title: "Substation Maintenance and Upgrades",
      description: "Regular maintenance and modernization of electrical substations for higher reliability.",
    },
    {
      title: "Civil Infrastructure Development",
      description: "Construction of civil infrastructure projects such as bridges, roads, and water systems.",
    }
];

const ProjectsDisplay = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Discover Our Projects</div>
          </div>
          <h2 className="section-title mt-5">Crafting Infrastructure, Powering Progress</h2>
          <p className="section-description mt-5">
            Explore our portfolio of completed civil and electrical projects. From robust infrastructure developments to reliable power systems, each project is a testament to our commitment to precision, safety, and sustainability.
          </p>
        </div>

        {/* Responsive Project Cards Grid */}
        <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map(({ title, description }, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl px-6 py-7 shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105"
            >
              {/* Spark Effect */}
              <span>
                <span
                  className="spark mask-gradient animate-flip before:animate-kitrotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-xl [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]"
                />
              </span>

              {/* Backdrop */}
              <span className="backdrop absolute inset-px rounded-[11px] bg-neutral-950 transition-all duration-200 group-hover:bg-neutral-800" />

              {/* Card Content */}
              <div className="relative z-10 space-y-3">
                <h3 className="text-2xl font-bold text-neutral-200">{title}</h3>
                <p className="text-base leading-relaxed text-neutral-400">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsDisplay;