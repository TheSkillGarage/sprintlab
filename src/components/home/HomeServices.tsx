import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { homeServiceCards } from '../../content/home';

const EASE: [number, number, number, number] = [0, 0, 0.58, 1];
// How far (in px) each card sits from the top of the viewport once it
// sticks — every card uses the SAME offset, which is what makes the next
// card land exactly on top of the previous one instead of stacking below it.
const STICK_OFFSET = 120;

function ServiceCard({
  service,
  index,
}: {
  service: (typeof homeServiceCards)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isDark = service.tone === 'dark';

  // Tracks this card's own scroll progress as the page scrolls it from just
  // below the sticky point to fully past it — i.e. while the NEXT card is
  // sliding up to cover it. We use that to gently scale/dim it down, so it
  // visibly recedes "behind" the incoming card rather than just vanishing.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.55]);

  return (
    <div
      ref={ref}
      className="sticky"
      style={{ top: STICK_OFFSET, zIndex: index + 1 }}
    >
      <motion.article
        style={{ scale, opacity }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: EASE }}
        className={`grid grid-cols-[auto_1fr] items-center gap-3 rounded-[24px] p-6 shadow-[0_20px_50px_rgba(68,44,134,0.12)] sm:gap-5 sm:p-10 lg:min-h-[328px] lg:grid-cols-[0.35fr_1.65fr] lg:gap-6 lg:p-16 ${
          isDark ? 'bg-[#442C86] text-white' : 'bg-[#F5F5FD] text-slate-900'
        }`}
      >
        <p
          className="font-black leading-none tracking-tight"
          style={{
            fontSize: 'clamp(4.5rem, 11vw, 10rem)',
            color: isDark ? '#DCDBF9' : '#D7D0F5',
          }}
        >
          {service.number}
        </p>
        <div className="flex flex-col gap-2 sm:gap-3">
          <h3
            className={`text-xl font-bold tracking-tight sm:text-2xl lg:text-[2rem] ${
              isDark ? 'text-white' : 'text-[#442C86]'
            }`}
          >
            {service.title}
          </h3>
          <p
            className={`max-w-3xl text-sm leading-7 sm:text-base ${
              isDark ? 'text-white/78' : 'text-slate-600'
            }`}
          >
            {service.description}
          </p>
        </div>
      </motion.article>
    </div>
  );
}

export function HomeServices() {
  return (
    <section className="bg-white py-16 sm:py-20" id="services">
      <div className="mx-auto w-[min(1440px,calc(100%-32px))] md:px-[70px]">
        <h2
          className="mb-10 font-bold leading-[1.4] text-[#442C86] sm:mb-12"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 40 }}
        >
          Services<span className="text-[#F6D9C8]">.</span>
        </h2>

        {/* Each card is wrapped in its own sticky container (same top offset
            for all of them), separated by margin-bottom for scroll room.
            Because sticky positioning is native, this reverses perfectly on
            scroll-up with zero extra logic — the browser just un-sticks the
            covering card and the one underneath re-emerges. */}
        <div className="grid gap-6 sm:gap-10">
          {homeServiceCards.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
