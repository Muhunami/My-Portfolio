import { NavBar } from "@/components/NavBar";
import { Reveal } from "@/components/Reveal";
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
  values,
  writings,
} from "@/data/portfolio";

export default function Home() {
  return (
    <div className="bg-off-white text-slate-900">
      <NavBar name={hero.name} sections={navSections} />
      <main>
        <section
          id="hero"
          className="relative flex min-h-screen items-center overflow-hidden"
        >
          <div className="absolute inset-0 hero-gradient" />
          <div className="relative mx-auto flex w-full max-w-6xl flex-col px-6 py-20 text-white">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
                {hero.name}
              </p>
            </Reveal>
            <Reveal>
              <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
                {hero.headline}
              </h1>
            </Reveal>
            <Reveal>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.35em] text-white/70">
                {hero.label}
              </p>
              <p className="mt-6 max-w-xl text-base text-white/80 md:text-lg">
                {hero.summary}
              </p>
            </Reveal>
          </div>
        </section>

        <section id="about" className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              eyebrow="About"
              title="Curiosity with structure"
              description="A narrative shaped by logic, reflection, and a global point of view."
            />
            <div className="mt-10 space-y-6 text-base leading-relaxed text-slate-600 md:text-lg">
              {about.map((paragraph) => (
                <Reveal key={paragraph}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="bg-off-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              eyebrow="Work"
              title="Projects that carry meaning"
              description="Every build explores a question, solves a real problem, and reveals how I think."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <Reveal key={project.title}>
                  <article className="rounded-2xl border border-brand-blue/20 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-red">
                      {project.category}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-brand-blue">
                      {project.title}
                    </h3>
                    <dl className="mt-4 space-y-4 text-sm text-slate-600">
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                          What problem it explored
                        </dt>
                        <dd className="mt-1">{project.problem}</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                          Why it mattered
                        </dt>
                        <dd className="mt-1">{project.why}</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                          What it says about how I think
                        </dt>
                        <dd className="mt-1">{project.mindset}</dd>
                      </div>
                    </dl>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="writing" className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              eyebrow="Writing & Ideas"
              title="A journal of questions and clarity"
              description="Reflective essays that trace how change, technology, and youth experience shape one another."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {writings.map((item) => (
                <Reveal key={item.title}>
                  <article className="rounded-2xl border border-slate-200 bg-off-white p-6 transition duration-300 hover:-translate-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue">
                      {item.theme}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600">
                      {item.excerpt}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="journey" className="bg-off-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              eyebrow="Achievements & Experiences"
              title="A journey still unfolding"
              description="Growth, leadership, and global exposure as steps in a longer story."
            />
            <ol className="mt-10 border-l border-slate-200 pl-6">
              {journey.map((item) => (
                <li key={item.title} className="relative mb-10 last:mb-0">
                  <span className="absolute -left-[7px] mt-2 h-3 w-3 rounded-full bg-brand-red" />
                  <Reveal>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-red">
                      {item.year}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-brand-blue">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {item.description}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="values" className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              eyebrow="Values & Direction"
              title="What I care about next"
              description="Principles that guide how I build, learn, and grow."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {values.map((value) => (
                <Reveal key={value.title}>
                  <article className="rounded-2xl border border-slate-200 bg-off-white p-6">
                    <h3 className="text-lg font-semibold text-brand-blue">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600">
                      {value.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className="mt-8 rounded-2xl border border-brand-blue/20 bg-white p-6 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-red">
                  Direction
                </p>
                <p className="mt-3 text-base text-slate-700">{direction}</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="bg-off-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              eyebrow="Contact"
              title={contact.title}
              description={contact.description}
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-soft"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                      {link.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-brand-blue">
                      {link.value}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-brand-red">
                    View
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
