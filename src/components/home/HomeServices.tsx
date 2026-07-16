import { homeServiceCards } from '../../content/home';
import { StickyCard } from '../ui/StickyCard';

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
            <StickyCard key={service.number} data={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
