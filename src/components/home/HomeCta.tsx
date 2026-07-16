import { homeAssetPaths } from '../../content/home';

function Sparkle({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M12 2c.6 4.2 1.8 5.4 6 6-4.2.6-5.4 1.8-6 6-.6-4.2-1.8-5.4-6-6 4.2-.6 5.4-1.8 6-6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function HomeCta() {
  return (
    <section
      className="relative overflow-hidden bg-[#5B3FA6] px-6 py-16 text-center text-white sm:px-10 sm:py-24"
      id="contact"
    >
      {/* Looper line-swirl artwork, matching the reference exactly */}
      <img
        src={homeAssetPaths.looper}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 w-[140%] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-40 sm:w-[90%]"
      />

      <Sparkle className="absolute left-8 top-10 size-5 text-white/70 sm:left-14 sm:top-14 sm:size-6" />
      <Sparkle className="absolute bottom-10 right-8 size-6 text-white/60 sm:bottom-14 sm:right-14 sm:size-7" />

      <div className="relative mx-auto max-w-2xl">
        <h2 className="text-[clamp(2rem,6vw,4rem)] font-bold leading-tight">
          Ready to
          <br />
          work with us<span className="text-[#C7BAEF]">?</span>
        </h2>

        <div className="mt-8 flex justify-center text-[#5838AF] sm:mt-10">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#F6D9C8] px-6 py-4 text-sm font-bold text-[#5838AF] transition hover:bg-[#f0ccb6] sm:px-8"
          >
            Start a Project
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
          </a>
        </div>
      </div>
    </section>
  );
}
