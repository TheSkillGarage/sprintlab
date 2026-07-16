import { aboutHeroContent } from '../../content/about';

export function AboutHero() {
  return (
    <section className="bg-[#F5F5FD] pb-16 pt-8 sm:pb-20 lg:pt-16 " id="hero">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center px-4 sm:px-6">
        <h1 className="mb-8 text-center text-4xl font-bold text-[#442C86] md:text-6xl lg:text-[130px]">
          {aboutHeroContent.title}
        </h1>

        <div className="relative mb-6 w-full overflow-hidden rounded-[32px]">
          <img
            src={aboutHeroContent.imageSrc}
            alt={aboutHeroContent.imageAlt}
            className="h-[300px] w-full object-cover sm:h-[400px] md:h-[500px]"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
            }}
          />
          <div className="absolute bottom-6 left-0 right-0 px-6 text-center sm:bottom-10 pointer-events-none">
            <h2
              className="text-[clamp(2rem,8vw,6rem)] font-bold text-white drop-shadow-md"
              style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
            >
              {aboutHeroContent.overlayText}
              <span className="text-white">.</span>
            </h2>
          </div>
        </div>

        <div className="flex w-full flex-col gap-3 mt-4">
          <div className="w-full rounded-3xl bg-[#442C86] px-6 py-5 text-white sm:px-8 sm:py-6">
            <p className="text-base leading-[1.5] sm:text-lg lg:text-xl">
              {aboutHeroContent.description}
            </p>
          </div>

          <a
            href="#approach"
            className="flex w-full items-center justify-between rounded-3xl bg-[#F6D9C8] px-6 py-5 transition hover:bg-[#f0ccb6] sm:px-8 sm:py-6"
          >
            <span className="text-sm font-semibold uppercase tracking-wide text-[#442C86] sm:text-lg">
              What we're about
            </span>
            <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-[#442C86] text-white sm:size-10">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M7 17L17 7M17 7H8M17 7v9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
