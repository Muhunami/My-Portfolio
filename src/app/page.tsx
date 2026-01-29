import { NavBar } from "@/components/NavBar";
import { ProgressBar } from "@/components/ProgressBar";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import {
  contactLinks,
  featuredWork,
  hero,
  navSections,
  recognitions,
  skills,
  stats,
  timeline,
} from "@/data/portfolio";

export default function Home() {
  return (
    <div className="bg-off-white text-slate-900">
      <NavBar name={hero.name} sections={navSections} />
      <main>
        <section
          id="about"
          className="relative flex min-h-screen items-center overflow-hidden"
        >
          <div className="absolute inset-0 hero-gradient" />
          <div className="relative mx-auto flex w-full max-w-6xl flex-col px-6 py-20 text-white">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
                Portfolio
              </p>
            </Reveal>
            <Reveal>
              <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
                {hero.name}
              </h1>
            </Reveal>
            <Reveal>
              <p className="mt-4 text-lg font-semibold text-white/90 md:text-xl">
                {hero.tagline}
              </p>
              <p className="mt-4 max-w-xl text-base text-white/75 md:text-lg">
                {hero.summary}
              </p>
            </Reveal>
          </div>
        </section>

        <section id="achievements" className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              eyebrow="Achievements"
              title="High-level overview"
              description="Structured metrics highlighting consistent performance across competitive, academic, and leadership arenas."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-off-white p-6 shadow-soft transition duration-300 hover:-translate-y-1"
                >
                  <p className="text-3xl font-semibold text-brand-red">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-slate-700">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-xs text-slate-500">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="timeline" className="bg-off-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              eyebrow="Timeline"
              title="Progress over time"
              description="A clear snapshot of growth, leadership, and measurable outcomes."
            />
            <ol className="mt-10 border-l border-slate-200 pl-6">
              {timeline.map((item) => (
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

        <section id="work" className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              eyebrow="Highlights"
              title="Featured work and impact"
              description="Selected initiatives that demonstrate structured problem solving and tangible results."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {featuredWork.map((item) => (
                <article
                  key={item.title}
                  className="relative rounded-2xl border border-brand-blue/20 bg-off-white p-6 shadow-soft transition duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-brand-red/80" />
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    {item.category}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-brand-blue">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">{item.impact}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-off-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              eyebrow="Skills"
              title="Focused capabilities"
              description="Grouped strengths with clear, concise progression indicators."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {skills.map((group) => (
                <div
                  key={group.group}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <h3 className="text-lg font-semibold text-brand-blue">
                    {group.group}
                  </h3>
                  <div className="mt-6 space-y-4">
                    {group.items.map((skill) => (
                      <div key={skill.label} className="space-y-2">
                        <div className="flex items-center justify-between text-sm text-slate-600">
                          <span className="font-medium">{skill.label}</span>
                          <span className="text-xs text-slate-500">
                            {skill.value}%
                          </span>
                        </div>
                        <ProgressBar value={skill.value} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              eyebrow="Recognition"
              title="Certifications, publications, and awards"
              description="Clear evidence of impact with expandable details for context."
            />
            <div className="mt-10 space-y-4">
              {recognitions.map((item) => (
                <details
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-off-white p-6"
                >
                  <summary className="cursor-pointer list-none">
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-red">
                          {item.year}
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-brand-blue">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm text-slate-600 md:max-w-md">
                        {item.description}
                      </p>
                    </div>
                  </summary>
                  <p className="mt-4 text-sm text-slate-500">{item.details}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-off-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeader
              eyebrow="Contact"
              title="Let's connect"
              description="Open to research collaborations, speaking, and leadership opportunities."
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
