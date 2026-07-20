import { homeClientBrands } from '../../content/home';

// Duplicate the list so the track can loop seamlessly: translating exactly
// -50% (one full copy's width) resets invisibly into the second copy.
const MARQUEE_ITEMS = [...homeClientBrands, ...homeClientBrands];

// 948px wide, centered — matches the reference exactly (246px left + 948px
// + 246px right = 1440px, i.e. equal margins by construction). Using
// mx-auto with a fixed max-width guarantees those margins stay equal at
// any viewport size, not just at the 1440px reference width.
const CONTAINER_CLASSES = 'mx-auto w-full max-w-[948px] px-4';

export function HomeClientStrip() {
  return (
    <section className="overflow-hidden bg-white py-10 sm:py-14">
      <div className={CONTAINER_CLASSES}>
        <p
          className="text-center text-base leading-[1.4] sm:text-[23px] sm:leading-[1.4]"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif', color: '#363636' }}
        >
          Over <span className="font-bold">20</span> design projects created for top
          brands including
        </p>
      </div>

      {/*
        Marquee is now centered in the SAME 948px window as the text above
        it (not full-bleed to the viewport edge), with the fade gradients
        living at that window's edges. overflow-hidden on this wrapper is
        what makes the fade look real — logos vanish into it rather than
        just visually fading while still being clickable/selectable past
        the edge.
      */}
      <div className={`group relative mt-6 sm:mt-8 ${CONTAINER_CLASSES} overflow-hidden`}>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-20" />

        {/* Continuous right-to-left scroll: translateX(0) -> translateX(-50%)
            moves the track leftward (logos travel right-to-left across the
            screen), and because MARQUEE_ITEMS is the same list duplicated
            exactly once, -50% always lands precisely on the seam between
            the two copies — the loop reset is invisible, no stutter. */}
        <div className="animate-marquee flex w-max items-center gap-12 group-hover:[animation-play-state:paused] sm:gap-20">
          {MARQUEE_ITEMS.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className={`flex shrink-0 items-center gap-3 text-lg font-bold sm:text-2xl ${
                brand.muted ? 'text-slate-300' : 'text-[#442C86]'
              }`}
              style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
            >
              <img
                src={brand.icon}
                alt=""
                aria-hidden="true"
                className={`h-7 w-auto sm:h-9 ${brand.muted ? 'opacity-40 grayscale' : ''}`}
              />
              <span>{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
