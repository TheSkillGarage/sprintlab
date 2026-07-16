import { aboutApproachCards } from '../../content/about';
import { StickyCard } from '../ui/StickyCard';

export function AboutApproach() {
  return (
    <section className="bg-white py-16 sm:py-20" id="approach">
      <div className="mx-auto w-[min(1440px,calc(100%-32px))] md:px-[70px]">
        <h2
          className="mb-10 font-bold leading-[1.4] text-[#442C86] sm:mb-12"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 40 }}
        >
          Our Approach<span className="text-[#F6D9C8]">.</span>
        </h2>

        <div className="grid gap-6 sm:gap-10">
          {aboutApproachCards.map((service, index) => (
            <StickyCard key={service.number} data={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
