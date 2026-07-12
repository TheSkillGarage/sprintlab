// HomeStory.tsx
import { AdaptiveImage } from './AdaptiveImage';
import { homeAssetPaths, homeImpactMetrics } from '../../content/home';

export function HomeStory() {
  return (
    <section
      className="border-b border-white/70 bg-[#f8f6f2] pb-16 pt-16 sm:pt-20 md:pb-24 md:sm:pb-28"
      id="about"
    >
      <div className="relative mx-auto w-[min(1300px,calc(100%-32px))]">
        {/* Photo — separate aspect ratio per breakpoint so it never stretches
            beyond either design (mobile is much closer to square than desktop) */}
        <div className="aspect-[4/3.3] overflow-hidden rounded-[24px] md:aspect-[1300/500]">
          <AdaptiveImage
            alt="Team photo with a warm outdoor setting"
            className="h-full w-full object-cover"
            fallbackClassName="h-full"
            fallbackLabel="Replace this image with a real team or lifestyle photo in public/images/home."
            src={homeAssetPaths.storyPhoto}
          />
        </div>

        {/* Metrics card:
            Mobile  → normal flow, full width, gap below the photo, no overlap.
            Desktop → switches to absolute overlap via md: prefixes, matching
                      the Figma spec (card overhangs the photo's bottom edge). */}
        <div
          className="relative mt-6 grid w-full gap-8 rounded-[24px] bg-[#FFF3ED] p-6 sm:p-8
                     md:absolute md:inset-x-[50px] md:bottom-0 md:mt-0 md:w-auto md:translate-y-[48.6%]
                     md:grid-cols-[1.2fr_0.8fr] md:items-center md:gap-10 md:p-10 md:shadow-xl"
        >
          <div>
            <p className="text-lg font-semibold leading-8 text-[#5a4b96] sm:text-xl">
              We are SprintLab Digital, we turn strategy into brands and experiences people
              remember.
            </p>
          </div>

          {/* Mobile: 40+/90% side by side, 10+ wraps and centers alone below.
              Desktop: even 3-column grid, same as before. */}
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 md:grid md:grid-cols-3 md:gap-4">
            {homeImpactMetrics.map((metric) => (
              <article className="basis-[35%] text-center md:basis-auto" key={metric.label}>
                <p className="text-3xl font-black tracking-tight text-[#4d378f] sm:text-5xl">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs font-semibold text-slate-500">{metric.label}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
