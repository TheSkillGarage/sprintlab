import { homeNavigationLinks, homeAssetPaths } from '../../content/home';

export function HomeFooter() {
  return (
    <footer className="bg-[#f8f6f2] pb-8 pt-10">
      <div className="mx-auto w-[min(1120px,calc(100%-32px))] rounded-[2rem] bg-black px-6 py-8 text-white sm:px-10 sm:py-10">
        <div className="grid gap-8 border-b border-white/10 pb-8 lg:grid-cols-[1fr_auto_auto] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
              Our Canada office
            </p>
            <address className="mt-4 not-italic leading-7 text-white/70">
              123 Maple Street
              <br />
              Toronto, Ontario
              <br />
              Canada
            </address>
          </div>

          <nav aria-label="Footer navigation" className="grid gap-3 text-white/70">
            {homeNavigationLinks.map((link) => (
              <a className="transition hover:text-white" href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="grid gap-2 text-right text-white/70">
            <a className="transition hover:text-white" href="tel:+1270001112222">
              +1 270 001 12222
            </a>
            <a className="transition hover:text-white" href="mailto:hello@sprintlabdigital.com">
              hello@sprintlabdigital.com
            </a>
            <span className="text-xs text-white/40">
              Footer mark path: {homeAssetPaths.footerMark}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-4xl font-black tracking-tight sm:text-6xl">SprintLabDigital</p>
            <p className="mt-2 text-sm text-white/45">© SprintLabDigital 2026</p>
          </div>

          <a className="text-sm text-white/45 transition hover:text-white" href="#hero">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
