import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export function Portfolio() {
  return (
    <main className="bg-primary-50 min-h-screen">
      {/* Hero */}
      <section className="text-center px-8 py-12 md:py-[70px] bg-[#F5F5FD] mb-6">
        <h1 className="text-4xl md:text-6xl lg:text-[130px] font-bold text-primary-100 mb-4">
          Portfolio
        </h1>
        <p className="text-primary-100 text-sm md:text-[28px] mx-auto">
          We bring brands to life, from idea to execution.
        </p>
      </section>

      {/* Project Grid */}
      <section className="px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 w-full max-w-[1400px] mx-auto">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.id}`}
              className={`block relative overflow-hidden rounded-[24px] cursor-pointer group ${project.gridClass} border border-transparent`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[342px] md:h-[450px] object-cover transition-all duration-500 group-hover:scale-105 md:group-hover:blur-md"
              />

              <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-transparent md:bg-white/20 transition-colors duration-300" />

                <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full border border-white/50 bg-white/10 backdrop-blur-sm">
                  <span className="text-[10px] md:text-xs font-medium text-white tracking-wide drop-shadow-md">
                    {project.category} • {project.year}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 text-left drop-shadow-md">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/90">{project.quote}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
