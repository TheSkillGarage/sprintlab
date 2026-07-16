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

const HOLD_MS = 2500;
const SLIDE_DURATION_S = 0.5;

function RotatingHeadline() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const items = [...ROTATOR_PHRASES, ROTATOR_PHRASES[0]];

  useEffect(() => {
    const id = window.setInterval(() => {
      setAnimate(true);
      setIndex((currentIndex) => currentIndex + 1);
    }, HOLD_MS);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (index === ROTATOR_PHRASES.length) {
      const timeoutId = window.setTimeout(() => {
        setAnimate(false);
        setIndex(0);
      }, SLIDE_DURATION_S * 1000);
      return () => window.clearTimeout(timeoutId);
    }
    return undefined;
  }, [index]);

  return (
    <span className="block overflow-hidden" style={{ height: '1.05em' }}>
      <motion.span
        className="block"
        animate={{ y: `-${index * 1.05}em` }}
        transition={
          animate ? { duration: SLIDE_DURATION_S, ease: EASE } : { duration: 0 }
        }
      >
        {items.map((text, itemIndex) => (
          <span
            className="block text-[#442C86]"
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

const AVATARS = ['avatar1', 'avatar2', 'avatar3', 'avatar4', 'avatar5'] as const;

// Header is ~108px tall (py-8 = 64px + ~44px logo/button row) at every
// breakpoint since it doesn't scale with viewport. Hero below subtracts
// that fixed amount from 100dvh so header + hero together never exceed one
// screen — dvh (not vh) accounts for mobile browser chrome so this is
// accurate on phones too, not just desktop.
const HEADER_H = '108px';

export function HomeHero() {
  return (
    <section
      className="relative overflow-hidden bg-[#F5F5FD]"
      id="hero"
      style={{ minHeight: `calc(100dvh - ${HEADER_H})` }}
    >
      <div
        className="relative z-10 mx-auto flex flex-col justify-center pb-[2vh] pt-[2vh] sm:pb-[3vh]"
        style={{ minHeight: `calc(100dvh - ${HEADER_H})` }}
      >
        {/* Font size now scales with viewport HEIGHT too (vh term in the
            clamp), not just width — this is what stops it from ballooning
            past the available vertical budget on short/wide screens. */}
        <h1
          className="mx-auto text-center font-bold leading-[1.05] tracking-tight text-[#442C86]"
          style={{ fontSize: 'clamp(2.25rem, 4vw + 4vh, 7.25rem)' }}
        >
          <span className="block">We amplify your</span>
          <RotatingHeadline />
        </h1>

        {/*
          ============================================================
          DESKTOP (lg and up) - same structure as before; only the fixed
          px heights/offsets became vh-capped via min(), so everything
          shrinks together to fit calc(100dvh - header) instead of
          overflowing it on shorter desktop/laptop screens.
          ============================================================
        */}
        <div className="hidden lg:block">
          <div
            className="relative overflow-hidden"
            style={{ height: 'min(600px, 62vh)' }}
          >
            <motion.img
              aria-hidden="true"
              alt=""
              src={homeAssetPaths.heroArtwork}
              className="absolute left-1/2 top-[-10%] w-[1113px] max-w-none object-cover"
              style={{ x: '-50%' }}
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F5F5FD00] to-[#5B4793]" />

            <div
              className="absolute inset-x-0 flex flex-col gap-4 p-4 sm:flex-row sm:items-end sm:justify-between sm:p-6"
              style={{ bottom: 'min(99px, 10vh)' }}
            >
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
                    This is where creativity meets technology to elevate your business.
                    From web design and development to marketing and branding, we&apos;ve
                    got you covered.
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
                    <svg
                      width="18"
                      height="18"
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
          </div>
        </div>

        {/*
          ============================================================
          MOBILE/TABLET (below lg) - same structure as before; artwork
          image now capped by max-height (vh-based) alongside its existing
          width cap, and vertical gaps trimmed slightly, so the whole
          stack (heading already sized above + card + button + artwork +
          pill) fits calc(100dvh - header) on typical phone screens.
          ============================================================
        */}
        <div className="flex flex-1 flex-col justify-center lg:hidden">
          <div className="mx-auto flex w-full max-w-xl flex-col gap-2 px-4 sm:gap-3 sm:px-6">
            <div className="w-full rounded-3xl bg-[#442C86] px-6 py-4 text-white sm:px-8 sm:py-6">
              <p className="text-sm leading-[1.4] sm:text-lg">
                This is where creativity meets technology to elevate your business. From
                web design and development to marketing and branding, we&apos;ve got you
                covered.
              </p>
            </div>

            <a
              href="#contact"
              aria-label="Start a project"
              className="flex w-full items-center justify-between rounded-3xl bg-[#F6D9C8] px-6 py-4 transition hover:bg-[#f0ccb6] sm:px-8 sm:py-6"
            >
              <span className="text-sm font-semibold uppercase tracking-wide text-[#442C86] sm:text-lg">
                Start a project
              </span>
              <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-[#442C86] text-white sm:size-10">
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

          <div className="relative mt-4 sm:mt-8">
            <img
              aria-hidden="true"
              alt=""
              src={homeAssetPaths.heroArtworkMobile}
              className="mx-auto w-[75%] max-w-[420px] object-contain"
              style={{ maxHeight: '32vh' }}
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-b from-[#F5F5FD00] to-[#5B4793]/60" />

            <div className="absolute inset-x-4 bottom-2 flex items-center gap-3 rounded-3xl border border-white/70 bg-white/10 px-4 py-2 backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:gap-6 sm:px-8 sm:py-6">
              <div className="flex -space-x-3 rounded-full border border-[#C3BEF4] p-1.5 sm:p-2">
                {AVATARS.map((key) => (
                  <img
                    key={key}
                    src={homeAssetPaths[key]}
                    alt=""
                    className="size-6 rounded-full object-cover ring-2 ring-[#8A38F5]/10 sm:size-10"
                  />
                ))}
              </div>
              <span className="text-xs text-white sm:text-lg">50+ satisfied clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
