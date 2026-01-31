import { NavBar } from "@/components/NavBar";
import { Reveal } from "@/components/Reveal";
import { ScrollEffects } from "@/components/ScrollEffects";
import { SectionHeader } from "@/components/SectionHeader";
import {
  about,
  contact,
  contactLinks,
  direction,
  hero,
  journey,
  navSections,
  projects,
  skills,
  values,
  writings,
} from "@/data/portfolio";

export default function Home() {
  const writingOrder = ["Technology", "Reflection", "Debate", "Essays"];
  const writingGroups = writingOrder
    .map((category) => ({
      category,
      items: writings.filter((item) => item.category === category),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div className="page-shell">
      <ScrollEffects />
      <div className="background-layer" aria-hidden="true">
        <div className="orb orb-blue" data-parallax="0.08" />
        <div className="orb orb-red" data-parallax="0.05" />
        <div className="orb orb-blue-secondary" data-parallax="0.03" />
        <div className="noise-layer" />
      </div>
      <NavBar name={hero.name} sections={navSections} />
      <main className="relative z-10">
        <section id="hero" className="hero-section">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <div className="hero-card glass glass-dark">
              <Reveal delay={0}>
                <p className="eyebrow hero-eyebrow">Portfolio</p>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="hero-name">{hero.name}</h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="hero-tagline">{hero.headline}</p>
              </Reveal>
              <Reveal delay={260}>
                <p className="hero-summary">{hero.summary}</p>
              </Reveal>
              <Reveal delay={320}>
                <p className="hero-label">{hero.label}</p>
              </Reveal>
              <Reveal delay={380}>
                <div className="hero-actions">
                  <a className="btn-primary" href="#work">
                    View work
                  </a>
                  <a className="btn-secondary" href="#contact">
                    Contact
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="about" className="section section-light">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              eyebrow="About"
              title="Curiosity with structure"
              description="A narrative shaped by logic, reflection, and a global point of view."
            />
            <div className="about-card glass glass-light">
              {about.map((paragraph, index) => (
                <Reveal key={paragraph} delay={index * 80}>
                  <p
                    className={`body-text ${
                      index === 0 ? "body-text-lead" : "body-text-body"
                    }`}
                  >
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section section-muted">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              eyebrow="Projects"
              title="Work that carries meaning"
              description="Each build explores a real question and reflects how I think about systems."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {projects.map((project, index) => (
                <Reveal key={project.title} delay={index * 80}>
                  <article
                    className="card glass glass-light card-interactive"
                    style={
                      {
                        "--project-accent": project.accent,
                      } as React.CSSProperties
                    }
                  >
                    <div className="project-media" aria-hidden="true">
                      <div className="project-media-inner">
                        <span className="project-media-label">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="project-header">
                      <p className="eyebrow accent">{project.category}</p>
                      <h3 className="card-title">{project.title}</h3>
                    </div>
                    <div className="card-hook">
                      <p className="card-label">What problem it explored</p>
                      <p className="card-text">{project.problem}</p>
                    </div>
                    <dl className="card-body card-details">
                      <div>
                        <dt className="card-label">Why it mattered</dt>
                        <dd>{project.why}</dd>
                      </div>
                      <div>
                        <dt className="card-label">
                          What it says about how I think
                        </dt>
                        <dd>{project.mindset}</dd>
                      </div>
                    </dl>
                    <div className="project-stack">
                      {project.stack.map((item) => (
                        <span key={item} className="tag">
                          {item}
                        </span>
                      ))}
                    </div>
                    <a className="text-link" href={project.link}>
                      {project.linkLabel}
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="writing" className="section section-light">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              eyebrow="Writing & Ideas"
              title="A journal of questions and clarity"
              description="Reflective essays that explore change, technology, attention, and youth experience."
            />
            <div className="writing-grid mt-10">
              {writingGroups.map((group, groupIndex) => (
                <div key={group.category} className="writing-group">
                  <Reveal delay={groupIndex * 80}>
                    <div className="writing-group-header">
                      <p className="eyebrow accent">{group.category}</p>
                    </div>
                  </Reveal>
                  <div className="writing-cards">
                    {group.items.map((item, index) => (
                      <Reveal key={item.title} delay={index * 80}>
                        <article className="card glass glass-light card-writing">
                          <p className="eyebrow">{item.theme}</p>
                          <h3 className="card-title">{item.title}</h3>
                          <p className="card-text card-quote">
                            {item.excerpt}
                          </p>
                        </article>
                      </Reveal>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="journey" className="section section-muted">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              eyebrow="Achievements & Experiences"
              title="A journey still unfolding"
              description="Growth, leadership, and global exposure as steps in a longer story."
            />
            <div className="timeline">
              {journey.map((item, index) => (
                <Reveal key={item.title} delay={index * 80}>
                  <div className="timeline-item glass glass-light">
                    <span className="timeline-node" aria-hidden="true" />
                    <p className="eyebrow accent">{item.year}</p>
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-text">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section section-light">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              eyebrow="Skills"
              title="Capabilities in motion"
              description="Balanced strengths across engineering, writing, and leadership."
            />
            <div className="skills-grid mt-10 grid gap-6 md:grid-cols-3">
              {skills.map((group, index) => (
                <Reveal key={group.group} delay={index * 80}>
                  <div className="card glass glass-light skills-card">
                    <h3 className="card-title">{group.group}</h3>
                    <div className="skills-list">
                      {group.items.map((item) => (
                        <div key={item.label} className="skill-row">
                          <div className="skill-meta">
                            <span className="skill-name">{item.label}</span>
                            <span className="skill-value">{item.value}%</span>
                          </div>
                          <div className="skill-bar">
                            <span
                              className="skill-bar-fill"
                              style={
                                {
                                  "--skill-width": `${item.value}%`,
                                } as React.CSSProperties
                              }
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="values" className="section section-light">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              eyebrow="Values & Direction"
              title="What I care about next"
              description="Principles that guide how I build, learn, and grow."
            />
            <div className="values-grid mt-10 grid gap-6 md:grid-cols-2">
              {values.map((value, index) => (
                <Reveal key={value.title} delay={index * 80}>
                  <article className="card glass glass-light">
                    <h3 className="card-title">{value.title}</h3>
                    <p className="card-text">{value.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200}>
              <div className="direction-card glass glass-light">
                <p className="eyebrow accent">Direction</p>
                <p className="card-text">{direction}</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="section section-muted">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              eyebrow="Contact"
              title={contact.title}
              description={contact.description}
            />
            <div className="contact-card glass glass-light">
              <div className="contact-details">
                <p className="card-text">
                  Email:{" "}
                  <a className="text-link" href="mailto:muhunanimg@gmail.com">
                    muhunanimg@gmail.com
                  </a>
                </p>
              </div>
              <div className="contact-grid mt-6 grid gap-4 md:grid-cols-2">
                {contactLinks.map((link) => (
                  <a key={link.label} href={link.href} className="contact-link">
                    <div>
                      <p className="eyebrow">{link.label}</p>
                      <p className="contact-value">{link.value}</p>
                    </div>
                    <span className="contact-action">Open</span>
                  </a>
                ))}
              </div>
              <form
                className="contact-form"
                id="contact-form"
                action="mailto:muhunanimg@gmail.com"
                method="post"
                encType="text/plain"
              >
                <div className="form-grid">
                  <label className="form-field">
                    <span className="form-label">Name</span>
                    <input type="text" name="name" required />
                  </label>
                  <label className="form-field">
                    <span className="form-label">Email</span>
                    <input type="email" name="email" required />
                  </label>
                </div>
                <label className="form-field">
                  <span className="form-label">Message</span>
                  <textarea name="message" rows={4} required />
                </label>
                <button className="btn-primary" type="submit">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer glass glass-dark">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
          <span className="footer-name">{hero.name}</span>
          <span className="footer-email">muhunanimg@gmail.com</span>
        </div>
      </footer>
    </div>
  );
}
