import { Button } from '../ui';
import { AdaptiveImage } from './AdaptiveImage';
import { homeAssetPaths } from '../../content/home';

export function HomeCta() {
  return (
    <section className="border-b border-white/70 bg-[#f8f6f2] py-16 sm:py-20" id="contact">
      <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#5d39b6] px-6 py-12 text-center text-white sm:px-10 sm:py-16">
          <div className="absolute inset-0 opacity-30">
            <AdaptiveImage
              alt="Decorative abstract background for the call to action"
              className="h-full w-full object-cover"
              fallbackClassName="min-h-full rounded-none border-0"
              fallbackLabel="Add a CTA background asset in public/images/home if you want a richer visual here."
              src={homeAssetPaths.ctaArtwork}
            />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,196,153,0.18),transparent_24%)]" />
          <div className="relative mx-auto max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white/70">
              Ready to work with us?
            </p>
            <h2 className="mt-5 text-[clamp(2.4rem,6vw,4.5rem)] font-black leading-tight">
              Ready to work with us?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-white/78 sm:text-lg">
              If you want the page to mirror the screenshot more closely, drop the final images
              into public/images/home and update the path map in src/content/home.ts.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="mailto:hello@sprintlab.com" size="lg" variant="secondary">
                Start a project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
