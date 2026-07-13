import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { homeAssetPaths } from '../../content/home';

const EASE: [number, number, number, number] = [0, 0, 0.58, 1];
const ROTATOR_PHRASES = [
  'online presence.',
  'brand identity.',
  'digital products.',
  'growth potential',
];

// Pacing controls
// Pacing controls updated to standard UI timings
const HOLD_MS = 2500; // 2.5 seconds per word
const SLIDE_DURATION_S = 0.5; // 0.5 seconds for the slide transition

function RotatingHeadline() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  
  // Clone the first item to the end for a seamless loop
  const items = [...ROTATOR_PHRASES, ROTATOR_PHRASES[0]];

  useEffect(() => {
    const id = window.setInterval(() => {
      setAnimate(true);
      setIndex((currentIndex) => currentIndex + 1);
    }, HOLD_MS);

    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    // When we reach the cloned first item at the end of the array
    if (index === ROTATOR_PHRASES.length) {
      const timeoutId = window.setTimeout(() => {
        // Disable animation to instantly snap back to the true first item
        setAnimate(false);
        setIndex(0);
      }, SLIDE_DURATION_S * 1000);

      return () => window.clearTimeout(timeoutId);
    }

    return undefined;
  }, [index]);

  return (
    // The parent span masks the overflow, restricting visibility to exactly one line
    <span className="block overflow-hidden" style={{ height: '1.05em' }}>
      <motion.span
        className="block"
        // FIXED: Animate using em units based on the line height, not percentages
        animate={{ y: `-${index * 1.05}em` }}
        transition={animate ? { duration: SLIDE_DURATION_S, ease: EASE } : { duration: 0 }}
      >
        {items.map((text, itemIndex) => (
          <span 
            className="block text-[#442C86]" // Added the purple color from the design
            key={itemIndex} 
            style={{ height: '1.05em' }}
          >
            {text}
          </span>
        ))}
      </motion.span>
    </span>
  );
}
export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#F5F5FD]" id="hero">
      <div className="relative z-10 mx-auto pb-16 pt-8 sm:pb-20 lg:pt-10">
        <h1 className="mx-auto max-w-5xl text-center text-[clamp(2.75rem,7vw,7.25rem)] font-bold leading-[1.05] tracking-tight text-[#442C86]">
          <span className="block">We amplify your</span>
          <RotatingHeadline />
        </h1>

        <div className="relative h-[520px] overflow-hidden sm:h-[520px] lg:h-[600px]">
          <motion.img
            aria-hidden="true"
            alt=""
            src={homeAssetPaths.heroArtwork}
            className="absolute left-1/2 top-[-10%] w-[1113px] max-w-none object-cover"
            style={{ x: '-50%' }}
        
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F5F5FD00] to-[#5B4793]" />

          <div className="absolute inset-x-0 bottom-[99px] flex flex-col gap-4 p-4 sm:flex-row sm:items-end sm:justify-between sm:p-6">
            <div className="flex w-full max-w-[437px] items-center gap-6 rounded-3xl border border-white/70 bg-white/10 px-6 py-4 backdrop-blur-md sm:px-8 sm:py-6">
              <div className="flex -space-x-3 rounded-full border border-[#C3BEF4] p-2">
                {[
                  homeAssetPaths.avatar1,
                  homeAssetPaths.avatar2,
                  homeAssetPaths.avatar3,
                  homeAssetPaths.avatar4,
                  homeAssetPaths.avatar5,
                ].map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className="size-10 rounded-full object-cover ring-2 ring-[#8A38F5]/10"
                  />
                ))}
              </div>
              <span className="text-lg text-white">50+ satisfied clients</span>
            </div>

            <div className="flex w-full max-w-[500px] flex-col gap-3 sm:ml-auto">
              <div className="rounded-3xl bg-[#442C86] px-8 py-6 text-white">
                <p className="text-lg leading-[1.4]">
                  This is where creativity meets technology to elevate your business. From web
                  design and development to marketing and branding, we&apos;ve got you covered.
                </p>
              </div>

              <a
                href="#contact"
                aria-label="Start a project"
                className="flex items-center justify-between rounded-3xl bg-[#F6D9C8] px-8 py-6 transition hover:bg-[#f0ccb6]"
              >
                <span className="text-lg font-semibold uppercase tracking-wide text-[#442C86]">
                  Start a project
                </span>
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-[#442C86] text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
        </div>
      </div>
    </section>
  );
}
