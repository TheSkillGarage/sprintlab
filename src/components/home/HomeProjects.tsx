import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AdaptiveImage } from './AdaptiveImage';
import { projects } from '../../data/projects';

// Same source of truth as the Portfolio page and its detail pages — the
// first 4 entries in data/projects.ts are what shows here, so home and
// /portfolio can never drift out of sync on images/copy again.
const homeProjects = projects.slice(0, 4).map((project) => ({
  id: project.id,
  title: project.title,
  tag: `${project.category} • ${project.year}`,
  tagline: project.quote,
  imageAlt: `${project.title} project image`,
  imageSrc: project.image,
}));

const EASE: [number, number, number, number] = [0, 0, 0.58, 1];

// 5 cards total: index 0 = sidebar, indices 1-4 = the four project cards.
// The sidebar is a full participant in the same sizing system as every
// project card — it is not special-cased.

type CardRole = 'active' | 'secondary' | 'rest';

const SIZE_BY_ROLE: Record<CardRole, { width: number; height: number }> = {
  active: { width: 400, height: 600 },
  secondary: { width: 209, height: 500 },
  rest: { width: 209, height: 400 },
};

// Single rule for every state: the active card is featured; the card
// immediately AFTER it is secondary; everything else is compact. The last
// card (index 4) has no card after it, so there is no wraparound — when
// it's active, every other card is simply compact, matching the reference
// screenshots exactly (no card goes back to 500px when Card 5 is active).
function roleFor(index: number, active: number): CardRole {
  if (index === active) return 'active';
  if (index === active + 1) return 'secondary';
  return 'rest';
}

function ProjectCaption({ project }: { project: (typeof homeProjects)[number] }) {
  return (
    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/75 to-transparent px-5 py-5 sm:px-6 sm:py-6">
      <div>
        <p className="text-xl font-bold text-white sm:text-2xl">{project.title}</p>
        <p className="mt-1 text-sm text-white/75 sm:text-base">{project.tagline}</p>
      </div>
      <span className="inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white text-[#442C86] sm:size-9">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
  const navigate = useNavigate();
  return (
    <a
      href="/portfolio"
      onClick={(event) => {
        event.preventDefault();
        navigate('/portfolio');
      }}
      style={{ color: '#fff' }}
      className={`inline-flex items-center justify-center gap-3 rounded-full bg-[#5838AF] px-6 py-4 text-sm font-bold uppercase tracking-wide !text-white transition hover:bg-[#4c2f9c] ${className}`}
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
  const navigate = useNavigate();
  // Card 0 (the sidebar) is active by default — this is the true initial
  // state per the reference: sidebar at 400x600, Balenciaga (card 1) at
  // the 209x500 secondary size, everything else compact.
  const [active, setActive] = useState(0);
  const sidebarRole = roleFor(0, active);
  const isSidebarActive = sidebarRole === 'active';

  return (
    <section className="bg-white py-16 sm:py-20" id="work">
      <div className="mx-auto w-[min(1440px,calc(100%-32px))] md:px-[70px]">
        {/* MOBILE: plain heading above, a peeking snap-carousel of project
            cards, and a full-width button below the carousel. */}
        <div className="flex flex-col gap-6 md:hidden">
          <div>
            <h2
              className="font-bold leading-[1.4] text-[#442C86]"
              style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 28 }}
            >
              Featured Projects<span className="text-[#F6D9C8]">.</span>
            </h2>
            <p
              className="mt-1 font-normal leading-[1.4] text-[#442C86]"
              style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 17 }}
            >
              Here are some of what we&apos;ve built.
            </p>
          </div>

          {/* Peeking snap-carousel: each card is ~85% viewport width so the
              next/previous card's edge shows, matching the reference. */}
          <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1">
            {homeProjects.map((project) => (
              <figure
                key={project.title}
                onClick={() => navigate(`/portfolio/${project.id}`)}
                className="relative h-[26rem] w-[85%] shrink-0 cursor-pointer snap-center overflow-hidden rounded-b-[24px] bg-slate-100"
              >
                <AdaptiveImage
                  alt={project.imageAlt}
                  className="h-full w-full object-cover"
                  fallbackClassName="h-full"
                  fallbackLabel={`Add the image for ${project.title} in public/images/home.`}
                  src={project.imageSrc}
                />
                <span className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                  {project.tag}
                </span>
                <ProjectCaption project={project} />
              </figure>
            ))}
          </div>

          <ViewAllProjectsLink className="w-full" />
        </div>

        {/* DESKTOP/TABLET: one uniform 5-card row, top-aligned. overflow-x-auto
            keeps any overflow CONTAINED to this row (scrollable within the
            component) instead of forcing the whole page to grow a horizontal
            scrollbar when the active card's 400px width doesn't fit the
            viewport alongside the other four cards. */}
        <div
          className="hidden items-start gap-4 overflow-x-auto pb-2 md:flex"
          onMouseLeave={() => setActive(0)}
        >
          {/* Sidebar — index 0, sized by the exact same roleFor() rule as
              every project card. Heading + copy are grouped together right
              under the top (not spread to the card's bottom edge): heading
              at top-12, paragraph immediately after per the 120px/48px spec. */}
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            onMouseEnter={() => setActive(0)}
            animate={{
              width: SIZE_BY_ROLE[sidebarRole].width,
              height: SIZE_BY_ROLE[sidebarRole].height,
            }}
            transition={{ duration: 0.3, ease: EASE }}
            className="flex shrink-0 flex-col justify-between overflow-hidden rounded-b-[24px] bg-[#442C86] p-6 text-white sm:p-7"
          >
            <div>
              <h2
                className="max-w-[345px] font-bold leading-[1.4]"
                style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 40 }}
              >
                Featured Projects<span className="text-[#F6D9C8]">.</span>
              </h2>

              <motion.p
                initial={false}
                animate={{ opacity: isSidebarActive ? 1 : 0 }}
                transition={{ duration: 0.2, ease: EASE }}
                className="mt-4 max-w-[345px] font-normal leading-[1.4] text-white/80"
                style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 23 }}
              >
                Here are some of what we&apos;ve built.
              </motion.p>
            </div>

            <motion.div
              initial={false}
              animate={{ opacity: isSidebarActive ? 1 : 0 }}
              transition={{ duration: 0.2, ease: EASE }}
            >
              <ViewAllProjectsLink className="w-fit" />
            </motion.div>
          </motion.aside>

          {/* Project cards — indices 1-4, same rule, same transition */}
          {homeProjects.map((project, projectIndex) => {
            const cardIndex = projectIndex + 1;
            const role = roleFor(cardIndex, active);
            const isActive = role === 'active';
            const size = SIZE_BY_ROLE[role];

            return (
              <motion.figure
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                onMouseEnter={() => setActive(cardIndex)}
                onClick={() => navigate(`/portfolio/${project.id}`)}
                animate={{ width: size.width, height: size.height }}
                transition={{ duration: 0.3, ease: EASE }}
                className="group relative shrink-0 cursor-pointer overflow-hidden rounded-b-[24px] bg-slate-100 shadow-[0_20px_50px_rgba(73,42,144,0.08)]"
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
                  animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -6 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="absolute left-5 top-5 rounded-full bg-black/50 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm sm:left-6 sm:top-6"
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
    </section>
  );
}
