import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { MoveLeft } from 'lucide-react';

export function PortfolioDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const projectIndex = projects.findIndex((p) => p.id === id);

  if (projectIndex === -1) {
    return <Navigate to="/portfolio" replace />;
  }

  const project = projects[projectIndex];
  // Determine next project (wrap around to first project if current is last)
  const nextProject = projects[(projectIndex + 1) % projects.length];

  const handleBack = () => {
    navigate('/portfolio');
    window.scrollTo(0, 0);
  };

  const handleNext = () => {
    navigate(`/portfolio/${nextProject.id}`);
    window.scrollTo(0, 0); // scroll to top when navigating to next project
  };

  return (
    <main className="bg-white min-h-screen">
      <div className="w-full bg-[#F5F5FD] ">
        <div className="p-6 lg:p-[70px] max-w-[1400px] mx-auto ">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-sm text-primary-100 border border-primary-100 px-6 py-2 rounded-sm hover:text-slate-900 transition-colors mb-8 cursor-pointer"
          >
            <MoveLeft />
            Back
          </button>
          {/* Hero Image */}
          <div className="overflow-hidden rounded-[24px] mb-8 max-w-[1400px] mx-auto">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[300px] md:h-[600px] object-cover"
            />
          </div>

          {/* Project Meta */}
          <div className="flex flex-col gap-3 text-xs md:text-sm mb-12 bg-primary-50/30 p-4 md:p-6 rounded-[24px]">
            <div className="grid grid-cols-[100px_1fr] md:grid-cols-[150px_1fr] gap-4">
              <span className="font-bold text-primary-100 text-base lg:text-[19px]">
                Client:
              </span>
              <span className="text-base lg:text-[19px] text-grey-900">
                {project.title}
              </span>
            </div>
            <div className="grid grid-cols-[100px_1fr] md:grid-cols-[150px_1fr] gap-4">
              <span className="font-bold text-primary-100 text-base lg:text-[19px]">
                Year:
              </span>
              <span className="text-base lg:text-[19px] text-grey-900">
                {project.year}
              </span>
            </div>
            <div className="grid grid-cols-[100px_1fr] md:grid-cols-[150px_1fr] gap-4">
              <span className="font-bold text-primary-100 text-base lg:text-[19px]">
                Country:
              </span>
              <span className="text-base lg:text-[19px] text-grey-900">
                {project.country}
              </span>
            </div>
            <div className="grid grid-cols-[100px_1fr] md:grid-cols-[150px_1fr] gap-4">
              <span className="font-bold text-primary-100 text-base lg:text-[19px]">
                Scope of Work:
              </span>
              <span className="text-base lg:text-[19px] text-grey-900">
                {project.scope}
              </span>
            </div>
            <div className="grid grid-cols-[100px_1fr] md:grid-cols-[150px_1fr] gap-4 items-center">
              <span className="font-bold text-primary-100 text-base lg:text-[19px]">
                Team:
              </span>
              <div className="flex -space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&h=128"
                  alt="Team member 1"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-[#DCDBF9] object-cover z-30"
                />
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=128&h=128"
                  alt="Team member 2"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-[#DCDBF9] object-cover z-20"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=128&h=128"
                  alt="Team member 3"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-[#DCDBF9] object-cover z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        {/* Content Sections */}
        <div className="p-6 lg:px-[70px] lg:pb-[70px] w-full max-w-[1400px] mx-auto">
          {/* Section 1: Text only */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-grey-900 mb-4">
              [Heading]
            </h2>
            <p className="text-slate-600 leading-7">
              {project.description[0] || 'Lorem ipsum dolor sit amet...'}
            </p>
          </div>

          {/* Section 2: Full width image */}
          {project.detailImages[0] && (
            <div className="overflow-hidden rounded-[24px] max-w-[1300px] mx-auto">
              <img
                src={project.detailImages[0]}
                alt={`${project.title} detail 1`}
                className="w-full h-[300px] md:h-[600px] object-cover"
              />
            </div>
          )}

          {/* Section 3: Split text and image */}
          <div className="my-[70px]">
            <h2 className="text-2xl md:text-3xl font-bold text-grey-900 mb-4">
              [Heading]
            </h2>

            {project.detailImages[1] && (
              <div className="md:float-right w-full md:w-[45%] lg:w-1/2 overflow-hidden rounded-[24px] mb-6 md:mb-4 md:ml-8 lg:ml-12 mt-2">
                <img
                  src={project.detailImages[1]}
                  alt={`${project.title} detail 2`}
                  className="w-full h-[300px] md:h-[350px] lg:h-[450px] object-cover"
                />
              </div>
            )}

            <p className="text-grey-800 leading-7">
              {project.description[1] || 'Lorem ipsum dolor sit amet...'}
            </p>
            <p className="text-grey-800 mt-6 leading-7">
              {project.description[1] || 'Lorem ipsum dolor sit amet...'}
            </p>
            <div className="clear-both"></div>
          </div>

          {/* Section 4: Split image and image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-[70px]">
            {project.detailImages[2] && (
              <div className="overflow-hidden rounded-[24px]">
                <img
                  src={project.detailImages[2]}
                  alt={`${project.title} detail 3`}
                  className="w-full h-auto md:h-[400px] object-cover"
                />
              </div>
            )}
            {project.detailImages[3] && (
              <div className="overflow-hidden rounded-[24px]">
                <img
                  src={project.detailImages[3]}
                  alt={`${project.title} detail 4`}
                  className="w-full h-auto md:h-[400px] object-cover"
                />
              </div>
            )}
          </div>

          {/* Section 5: Video Player placeholder */}
          {project.videoLink && (
            <div className="relative overflow-hidden rounded-[24px] mb-10 w-full h-[300px] md:h-[500px]">
              <iframe
                src={project.videoLink}
                title={`${project.title} video`}
                className="absolute top-0 left-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>

      {/* See Next Project */}
      <section className="bg-[#F5F5FD] w-full">
        <div className="p-6 lg:p-[70px] w-full max-w-[1400px] mx-auto">
          <p className="font-semibold text-base lg:text-[28px] text-primary-100 mb-3">
            See Next Project
          </p>
          <button
            onClick={handleNext}
            className="relative overflow-hidden rounded-[24px] w-full aspect-[4/3] md:aspect-[16/7] cursor-pointer group text-left border border-transparent"
          >
            <img
              src={nextProject.image}
              alt={nextProject.title}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 md:group-hover:blur-md"
            />

            <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-white/20 transition-colors duration-300" />

              <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full border border-white/50 bg-white/10 backdrop-blur-sm">
                <span className="text-[10px] md:text-xs font-medium text-white tracking-wide drop-shadow-md">
                  {nextProject.category} • {nextProject.year}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 text-left drop-shadow-md">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {nextProject.title}
                </h3>
                <p className="text-sm md:text-base text-white/90">{nextProject.quote}</p>
              </div>
            </div>
          </button>
        </div>
      </section>
    </main>
  );
}
