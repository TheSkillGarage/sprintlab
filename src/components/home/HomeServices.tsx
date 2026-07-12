import { homeServiceCards } from '../../content/home';

export function HomeServices() {
  return (
    <section className="border-b border-white/70 bg-[#f8f6f2] py-16 sm:py-20" id="services">
      <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#7a60b6]">
              Services
            </p>
            <h2 className="mt-4 text-[clamp(2.2rem,4vw,3.6rem)] font-black leading-tight text-[#443495]">
              What we can do for your brand.
            </h2>
          </div>
        </div>

        <div className="grid gap-4">
          {homeServiceCards.map((service) => {
            const isDark = service.tone === 'dark';

            return (
              <article
                className={`grid gap-4 rounded-[1.5rem] px-6 py-7 sm:px-8 sm:py-8 md:grid-cols-[0.35fr_0.9fr_1.5fr] md:items-center ${
                  isDark ? 'bg-[#4d378f] text-white' : 'bg-[#f1ecff] text-slate-900'
                }`}
                key={service.number}
              >
                <p className={`text-5xl font-black tracking-tight sm:text-6xl ${isDark ? 'text-white/80' : 'text-[#d7d0f5]'}`}>
                  {service.number}
                </p>
                <h3 className="text-2xl font-black tracking-tight sm:text-[2rem]">{service.title}</h3>
                <p className={`max-w-3xl text-sm leading-7 sm:text-base ${isDark ? 'text-white/78' : 'text-slate-600'}`}>
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
