import { Button, Input, Loader } from '../components/ui';

const services = [
  'Product strategy',
  'Software delivery',
  'AI enablement',
  'Growth systems',
];

export function HomePage() {
  return (
    <main className="mx-auto w-[min(1120px,calc(100%-32px))] py-6 text-slate-900">
      <nav
        aria-label="Primary navigation"
        className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <a className="text-xl font-extrabold" href="/">
          SprintLab
        </a>
        <div className="flex gap-5 text-sm text-slate-600">
          <a className="transition hover:text-slate-950" href="#services">
            Services
          </a>
          <a className="transition hover:text-slate-950" href="#process">
            Process
          </a>
          <a className="transition hover:text-slate-950" href="#contact">
            Contact
          </a>
        </div>
      </nav>

      <section className="grid min-h-[72vh] content-center py-16">
        <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.08em] text-orange-800">
          Consulting for ambitious teams
        </p>
        <h1 className="mb-6 max-w-5xl text-[clamp(3.2rem,9vw,6.8rem)] font-extrabold leading-none text-slate-950">
          Design, build, and scale digital products with sharper execution.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
          SprintLab partners with founders and operators to turn business goals into
          pragmatic product systems, production software, and measurable growth loops.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#contact" size="lg">
            Start a project
          </Button>
          <Button href="#services" size="lg" variant="secondary">
            View services
          </Button>
        </div>
      </section>

      <section
        aria-labelledby="services-title"
        className="grid gap-8 border-t border-stone-300 py-20 lg:grid-cols-[0.8fr_1.2fr]"
        id="services"
      >
        <div>
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.08em] text-orange-800">
            What we do
          </p>
          <h2
            className="max-w-2xl text-[clamp(2rem,4vw,3.6rem)] font-extrabold leading-tight text-slate-950"
            id="services-title"
          >
            Focused consulting across product and engineering.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <article
              className="min-h-44 rounded-lg border border-stone-300 bg-white p-6"
              key={service}
            >
              <h3 className="mb-3 text-lg font-bold">{service}</h3>
              <p className="leading-7 text-slate-600">
                Senior support for teams that need clear decisions, clean systems, and
                momentum they can actually measure.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="contact-title"
        className="grid gap-6 rounded-lg bg-emerald-50 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end"
        id="contact"
      >
        <div>
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.08em] text-orange-800">
            Next sprint
          </p>
          <h2
            className="mb-6 max-w-2xl text-[clamp(2rem,4vw,3.6rem)] font-extrabold leading-tight text-slate-950"
            id="contact-title"
          >
            Ready to shape the roadmap?
          </h2>
          <div className="grid max-w-xl gap-4 sm:grid-cols-2">
            <Input label="Name" name="name" placeholder="Ada Lovelace" />
            <Input
              label="Email"
              name="email"
              placeholder="ada@company.com"
              type="email"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button href="mailto:hello@sprintlab.com">hello@sprintlab.com</Button>
          <Loader label="Preparing contact form" />
        </div>
      </section>
    </main>
  );
}
