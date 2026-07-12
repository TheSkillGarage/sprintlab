import { homeClientBrands } from '../../content/home';

// Duplicate the list so the track can loop seamlessly: translating exactly
// -50% (one full copy's width) resets invisibly into the second copy.
const MARQUEE_ITEMS = [...homeClientBrands, ...homeClientBrands];

export function HomeClientStrip() {
  return (
    <section className="overflow-hidden bg-white py-10 sm:py-14">
      <div className="mx-auto w-[min(1440px,calc(100%-32px))] px-2 md:px-[70px]">
        <p
          className="text-center text-base leading-[1.4] sm:text-[23px] sm:leading-[1.4]"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif', color: '#363636' }}
        >
          Over <span className="font-bold">20</span> design projects created for top brands
          including
        </p>
      </div>

      {/* Marquee track: full-bleed so it can slide edge to edge, pauses on hover */}
      <div className="group relative mt-6 w-full sm:mt-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-32" />

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
