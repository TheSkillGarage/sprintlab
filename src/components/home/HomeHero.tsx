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
        transition={animate ? { duration: SLIDE_DURATION_S, ease: EASE } : { duration: 0 }}
      >
        {items.map((text, itemIndex) => (
          <span className="block text-[#442C86]" key={itemIndex} style={{ height: '1.05em' }}>
            {text}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

const AVATARS = ['avatar1', 'avatar2', 'avatar3', 'avatar4', 'avatar5'] as const;

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#F5F5FD]" id="hero">
      <div className="relative z-10 mx-auto pb-16 pt-8 sm:pb-20 lg:pt-10">
        <h1 className="mx-auto max-w-5xl p-4 text-center text-[clamp(2.75rem,7vw,7.25rem)] font-bold leading-[1.05] tracking-tight text-[#442C86]">
          <span className="block">We amplify your</span>
          <RotatingHeadline />
        </h1>

        {/*
          ============================================================
          DESKTOP (lg and up) - untouched, byte-for-byte identical to
          the version you pasted. Every class below is exactly what you
          had; the only addition is the "hidden lg:block" wrapper so it
          simply doesn't render below the lg breakpoint. Nothing inside
          this block has been modified.
          ============================================================
        */}
        <div className="hidden lg:block">
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

        {/*
          ============================================================
          MOBILE/TABLET (below lg) - entirely separate markup, its own
          dedicated artwork-mobile asset, and its own spacing. Nothing
          in here shares a class name's effect with the block above; it
          only exists below lg because of "lg:hidden".
          ============================================================
        */}
        <div className="lg:hidden">
          <div className="mx-auto flex max-w-xl flex-col gap-3 px-4 sm:px-6">
            <div className="w-full rounded-3xl bg-[#442C86] px-6 py-5 text-white sm:px-8 sm:py-6">
              <p className="text-base leading-[1.5] sm:text-lg">
                This is where creativity meets technology to elevate your business. From web
                design and development to marketing and branding, we&apos;ve got you covered.
              </p>
            </div>

            <a
              href="#contact"
              aria-label="Start a project"
              className="flex w-full items-center justify-between rounded-3xl bg-[#F6D9C8] px-6 py-5 transition hover:bg-[#f0ccb6] sm:px-8 sm:py-6"
            >
              <span className="text-sm font-semibold uppercase tracking-wide text-[#442C86] sm:text-lg">
                Start a project
              </span>
              <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-[#442C86] text-white sm:size-10">
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
            </a>
          </div>

          <div className="relative mt-8">
            {/*
              The image is now a normal-flow block (not position:absolute in
              a fixed-height box), so the wrapper's height is dictated by the
              image's own real rendered size. It can never be clipped by an
              overflow-hidden ancestor, because there's no longer a fixed
              container height shorter than the image to clip against - this
              is what was slicing the blob's tapered bottom off flat.
            */}
            <img
              aria-hidden="true"
              alt=""
              src={homeAssetPaths.heroArtworkMobile}
              className="mx-auto w-[85%] max-w-[420px] object-contain"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-b from-[#F5F5FD00] to-[#5B4793]/60" />

            <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-3xl border border-white/70 bg-white/10 px-4 py-3 backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:gap-6 sm:px-8 sm:py-6">
              <div className="flex -space-x-3 rounded-full border border-[#C3BEF4] p-1.5 sm:p-2">
                {AVATARS.map((key) => (
                  <img
                    key={key}
                    src={homeAssetPaths[key]}
                    alt=""
                    className="size-7 rounded-full object-cover ring-2 ring-[#8A38F5]/10 sm:size-10"
                  />
                ))}
              </div>
              <span className="text-sm text-white sm:text-lg">50+ satisfied clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
