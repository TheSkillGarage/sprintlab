import { useState } from 'react';
import { motion } from 'framer-motion';
import { AdaptiveImage } from './AdaptiveImage';
import { homeProjects } from '../../content/home';

const EASE: [number, number, number, number] = [0, 0, 0.58, 1];
const EXPANDED_WIDTH = 400;
const COLLAPSED_WIDTH = 209;

function ProjectCaption({ project }: { project: (typeof homeProjects)[number] }) {
  return (
    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-black/75 to-transparent px-3 py-3 sm:px-4 sm:py-4">
      <div>
        <p className="text-sm font-bold text-white sm:text-base">{project.title}</p>
        <p className="text-xs text-white/75">{project.tagline}</p>
      </div>
      <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-white text-[#442C86] sm:size-8">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M7 17L17 7M17 7H8M17 7v9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  );
}

function ViewAllProjectsLink({ className = '' }: { className?: string }) {
  return (
    <a
      href="#contact"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#F6D9C8] px-6 py-4 text-sm font-bold uppercase tracking-wide text-[#442C86] transition hover:bg-[#f0ccb6] ${className}`}
    >
      View all projects
      <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-[#442C86] text-white">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
  );
}

export function HomeProjects() {
  // Card 0 is expanded by default (idle resting state). Hovering another
  // card swaps which one is expanded; leaving the whole row returns to card 0.
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-16 sm:py-20" id="work">
      <div className="mx-auto w-[min(1440px,calc(100%-32px))] md:px-[70px]">
        {/* Mobile-only heading — no purple card, sits plain on white */}
        <div className="mb-6 md:hidden">
          <h2 className="text-2xl font-bold leading-tight text-[#442C86]">
            Featured Projects<span className="text-[#F6D9C8]">.</span>
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Here are some of what we&apos;ve built.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-[400px_1fr]">
          {/* Purple sidebar card — desktop/tablet only. Fixed 400x600,
              bottom-corners-only radius, matching the Figma spec exactly. */}
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: EASE }}
            className="hidden h-[600px] w-[400px] flex-col justify-between rounded-b-[24px] bg-[#442C86] p-8 text-white md:flex"
          >
            <div>
              <h2 className="text-4xl font-bold leading-tight">
                Featured Projects<span className="text-[#F6D9C8]">.</span>
              </h2>
              <p className="mt-4 max-w-sm text-base leading-7 text-white/80">
                Here are some of what we&apos;ve built.
              </p>
            </div>

            <ViewAllProjectsLink className="w-fit" />
          </motion.aside>

          {/* MOBILE: snap-scroll carousel, captions always visible (no hover on touch) */}
          <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 md:hidden">
            {homeProjects.map((project) => (
              <figure
                key={project.title}
                className="relative h-[22rem] w-[75%] shrink-0 snap-start overflow-hidden rounded-b-[24px] bg-slate-100"
              >
                <AdaptiveImage
                  alt={project.imageAlt}
                  className="h-full w-full object-cover"
                  fallbackClassName="h-full"
                  fallbackLabel={`Add the image for ${project.title} in public/images/home.`}
                  src={project.imageSrc}
                />
                <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                  {project.tag}
                </span>
                <ProjectCaption project={project} />
              </figure>
            ))}
          </div>

          {/* Mobile CTA — same cream pill as desktop, standalone below the carousel */}
          <ViewAllProjectsLink className="mt-2 w-full md:hidden" />

          {/* DESKTOP/TABLET: fixed-pixel width swap (400 expanded / 209 collapsed),
              not a flexGrow ratio — matches the Figma spec exactly regardless of
              which card is active. */}
          <div
            className="hidden h-[600px] gap-4 overflow-hidden md:flex"
            onMouseLeave={() => setActive(0)}
          >
            {homeProjects.map((project, index) => {
              const isActive = active === index;

              return (
                <motion.figure
                  key={project.title}
                  onMouseEnter={() => setActive(index)}
                  animate={{ width: isActive ? EXPANDED_WIDTH : COLLAPSED_WIDTH }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="group relative h-full shrink-0 overflow-hidden rounded-b-[24px] bg-slate-100 shadow-[0_20px_50px_rgba(73,42,144,0.08)]"
                >
                  <AdaptiveImage
                    alt={project.imageAlt}
                    className="h-full w-full object-cover"
                    fallbackClassName="h-full"
                    fallbackLabel={`Add the image for ${project.title} in public/images/home.`}
                    src={project.imageSrc}
                  />

                  <motion.span
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                  >
                    {project.tag}
                  </motion.span>

                  <motion.div
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 8 }}
                    transition={{ duration: 0.3, ease: EASE }}
                  >
                    <ProjectCaption project={project} />
                  </motion.div>
                </motion.figure>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
