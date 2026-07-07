const services = [
  'Product strategy',
  'Software delivery',
  'AI enablement',
  'Growth systems',
];

function App() {
  return (
    <main className="shell">
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="/">
          SprintLab
        </a>
        <div className="navLinks">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <p className="eyebrow">Consulting for ambitious teams</p>
        <h1>Design, build, and scale digital products with sharper execution.</h1>
        <p className="heroCopy">
          SprintLab partners with founders and operators to turn business goals into
          pragmatic product systems, production software, and measurable growth loops.
        </p>
        <div className="actions">
          <a className="button primary" href="#contact">
            Start a project
          </a>
          <a className="button secondary" href="#services">
            View services
          </a>
        </div>
      </section>

      <section className="section" id="services" aria-labelledby="services-title">
        <div>
          <p className="eyebrow">What we do</p>
          <h2 id="services-title">Focused consulting across product and engineering.</h2>
        </div>
        <div className="serviceGrid">
          {services.map((service) => (
            <article className="serviceCard" key={service}>
              <h3>{service}</h3>
              <p>
                Senior support for teams that need clear decisions, clean systems, and
                momentum they can actually measure.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">Next sprint</p>
          <h2 id="contact-title">Ready to shape the roadmap?</h2>
        </div>
        <a className="button primary" href="mailto:hello@sprintlab.com">
          hello@sprintlab.com
        </a>
      </section>
    </main>
  );
}

export default App;
