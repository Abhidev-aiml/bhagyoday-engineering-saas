
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
];

export const ProjectsSection = () => {
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

        {/* Top 3 Projects */}
        <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, description}, index) => (
            <div
              key={index}
              className="relative w-full max-w-[350px] group overflow-hidden rounded-xl px-4 py-5 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-all duration-500 ease-in-out transform hover:scale-110"
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
              <div className="relative z-10 space-y-2">
                <h3 className="text-xl font-semibold text-neutral-200">{title}</h3>
                <p className="text-sm leading-[1.5] text-neutral-400">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center mt-10">
          <a href="/projects" className="btn btn-primary px-6 py-3 text-lg font-medium">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};