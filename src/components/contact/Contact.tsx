import { useLayoutEffect, useState, type FormEvent } from 'react';

type ContactFormValues = {
  name: string;
  companyName: string;
  phoneNumber: string;
  email: string;
  projectDetails: string;
};

const INITIAL_VALUES: ContactFormValues = {
  name: '',
  companyName: '',
  phoneNumber: '',
  email: '',
  projectDetails: '',
};

const FIELD_CLASSES =
  'w-full rounded-xl border border-transparent bg-[#3A3A3A] px-4 py-3 text-white placeholder:text-white/40 transition focus:border-[#8A38F5] focus:outline-none focus:ring-2 focus:ring-[#8A38F5]/30';

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-white">
        {label}
      </label>
      {children}
    </div>
  );
}

// Measures the site's real <header> element and keeps that measurement in
// sync (ResizeObserver + orientation/resize changes), so the hero can be
// sized to exactly "viewport minus header" rather than guessing a fixed
// header height that could silently drift out of date if the header's own
// padding ever changes.
function useHeaderHeight() {
  const [headerHeight, setHeaderHeight] = useState(0);

  useLayoutEffect(() => {
    const headerEl = document.querySelector('header');
    if (!headerEl) return undefined;

    const update = () => setHeaderHeight(headerEl.getBoundingClientRect().height);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(headerEl);
    window.addEventListener('orientationchange', update);

    return () => {
      observer.disconnect();
      window.removeEventListener('orientationchange', update);
    };
  }, []);

  return headerHeight;
}

export function Contact() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');
  const headerHeight = useHeaderHeight();

  function updateField<K extends keyof ContactFormValues>(
    key: K,
    value: ContactFormValues[K],
  ) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');

    // TODO: wire this up to the real submission endpoint once available.
    window.setTimeout(() => {
      setStatus('submitted');
    }, 400);
  }

  return (
    <>
      {/*
        Hero fills exactly (100dvh - real header height), so header + hero
        together always occupy the full viewport on first load, on every
        device — not a single pixel of the form section is visible until
        the user scrolls. 100dvh (not 100vh) is used so mobile browser
        chrome showing/hiding doesn't cause the hero to overshoot the
        visible viewport. headerHeight starts at 0 for exactly one frame
        before layout-effect measurement runs, which briefly makes the hero
        slightly taller than intended — imperceptible in practice since it
        resolves before paint via useLayoutEffect, not useEffect.
      */}
      <section
        className="flex flex-col items-center justify-center bg-[#F5F5FD] px-6 text-center sm:px-10"
        style={{ minHeight: `calc(100dvh - ${headerHeight}px)` }}
        id="contact-hero"
      >
        <h1
          className="mx-auto max-w-5xl text-center font-bold text-[#442C86]"
          style={{
            fontFamily: 'IBM Plex Sans, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(2.5rem, 9vw, 130px)',
            lineHeight: '120%',
            letterSpacing: '0%',
          }}
        >
          How Can We
          <br />
          Help<span className="text-[#442C86]">?</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#442C86]/80 sm:text-lg">
          Whether you have a question, want to tell us about your project, or are
          interested in working together, we&apos;ll be happy to hear from you!
        </p>
      </section>

      {/* Form section */}
      <section className="bg-black px-6 py-16 sm:px-10 sm:py-20 md:px-[70px]">
        <div className="mx-auto w-full max-w-[1300px]">
          <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
            We would love to hear from you.
          </h2>

          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-6 sm:mt-12"
            noValidate
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <Field id="contact-name" label="Name">
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={values.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  className={FIELD_CLASSES}
                />
              </Field>

              <Field id="contact-company" label="Company Name">
                <input
                  id="contact-company"
                  name="companyName"
                  type="text"
                  autoComplete="organization"
                  value={values.companyName}
                  onChange={(e) => updateField('companyName', e.target.value)}
                  className={FIELD_CLASSES}
                />
              </Field>

              <Field id="contact-phone" label="Phone Number">
                <input
                  id="contact-phone"
                  name="phoneNumber"
                  type="tel"
                  autoComplete="tel"
                  value={values.phoneNumber}
                  onChange={(e) => updateField('phoneNumber', e.target.value)}
                  className={FIELD_CLASSES}
                />
              </Field>

              <Field id="contact-email" label="Email">
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={values.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className={FIELD_CLASSES}
                />
              </Field>
            </div>

            <Field
              id="contact-details"
              label="Tell us about the project (Scope, Timeline, Budget)"
            >
              <textarea
                id="contact-details"
                name="projectDetails"
                rows={6}
                value={values.projectDetails}
                onChange={(e) => updateField('projectDetails', e.target.value)}
                className={`${FIELD_CLASSES} resize-none`}
              />
            </Field>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-full border border-white px-6 py-4 text-base font-bold text-white transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'submitted' ? (
                'Thanks — we\u2019ll be in touch'
              ) : (
                <>
                  {status === 'submitting' ? 'Sending' : 'Submit'}
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
                </>
              )}
            </button>

            {status === 'submitted' && (
              <p role="status" className="text-sm text-white/70">
                Thanks for reaching out! A member of the team will get back to you
                shortly.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
