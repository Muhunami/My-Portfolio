"use client";

import { useCallback, useEffect, useState } from "react";
import type { SiteContentV1 } from "@/lib/site-content-schema";
import { isSiteContentV1 } from "@/lib/site-content-schema";
import { withBase } from "@/lib/paths";

function Section({
  title,
  children,
  defaultOpen = true,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section className="rounded-2xl border border-white/10 bg-[var(--color-surface)]/30">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <h2 className="font-[family-name:var(--font-clash)] text-lg text-white">
          {title}
        </h2>
        <span className="text-[var(--color-muted)]">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="border-t border-white/10 px-5 pb-5 pt-2">{children}</div>}
    </section>
  );
}

function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div className="mt-4">
      <label className="block text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
        {label}
      </label>
      {hint && <p className="mt-1 text-[11px] text-[var(--color-muted)]/80">{hint}</p>}
      <div className="mt-1.5">{children}</div>
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-white/10 bg-[#0a0a0f] px-3 py-2.5 text-sm text-white placeholder:text-white/25 outline-none focus:border-white/25";
const textareaClass =
  "min-h-[88px] w-full rounded-xl border border-white/10 bg-[#0a0a0f] px-3 py-2.5 text-sm text-[var(--color-silver)] placeholder:text-white/25 outline-none focus:border-white/25";

export function AdminForm() {
  const [content, setContent] = useState<SiteContentV1 | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [showRaw, setShowRaw] = useState(false);
  const [rawJson, setRawJson] = useState("");

  const loadJson = useCallback(async () => {
    setLoadError(null);
    setStatus(null);
    try {
      const res = await fetch(`${withBase("/site-content.json")}?t=${Date.now()}`, {
        cache: "no-store",
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: unknown = await res.json();
      if (!isSiteContentV1(data)) throw new Error('Invalid file: need "version": 1');
      setContent(JSON.parse(JSON.stringify(data)) as SiteContentV1);
      setRawJson(JSON.stringify(data, null, 2));
      setStatus("Loaded from site.");
    } catch (e) {
      setLoadError(e instanceof Error ? e.message : "Failed to load");
    }
  }, []);

  useEffect(() => {
    void loadJson();
  }, [loadJson]);

  const update = useCallback((fn: (d: SiteContentV1) => SiteContentV1) => {
    setContent((prev) => (prev ? fn(structuredClone(prev)) : null));
    setStatus(null);
  }, []);

  function download() {
    if (!content) return;
    if (!isSiteContentV1(content)) {
      setStatus("Invalid content.");
      return;
    }
    const text = JSON.stringify(content, null, 2);
    const blob = new Blob([text], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "site-content.json";
    a.click();
    URL.revokeObjectURL(url);
    setStatus("Downloaded — replace public/site-content.json, commit, push.");
  }

  function applyRaw() {
    try {
      const parsed: unknown = JSON.parse(rawJson);
      if (!isSiteContentV1(parsed)) throw new Error('Need "version": 1');
      setContent(parsed);
      setStatus("Raw JSON applied.");
    } catch (e) {
      setStatus(e instanceof Error ? e.message : "Invalid JSON");
    }
  }

  if (!content && !loadError) {
    return (
      <div className="py-12 text-center text-sm text-[var(--color-muted)]">
        Loading site content…
      </div>
    );
  }

  if (loadError && !content) {
    return (
      <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-200">
        {loadError}{" "}
        <button type="button" onClick={loadJson} className="underline">
          Retry
        </button>
      </div>
    );
  }

  if (!content) return null;

  const c = content;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={loadJson}
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
        >
          Reload from site
        </button>
        <button
          type="button"
          onClick={download}
          className="rounded-full bg-gradient-to-r from-[#5b6cff] to-[#8b5cf6] px-4 py-2 text-sm font-semibold text-white"
        >
          Download JSON
        </button>
        <button
          type="button"
          onClick={() => {
            if (!showRaw && content) setRawJson(JSON.stringify(content, null, 2));
            setShowRaw(!showRaw);
          }}
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
        >
          {showRaw ? "Hide raw JSON" : "Advanced: raw JSON"}
        </button>
      </div>

      {status && (
        <p className="text-sm text-emerald-400/90">{status}</p>
      )}

      {showRaw && (
        <div className="rounded-2xl border border-white/10 bg-[#0a0a0f] p-4">
          <p className="text-xs text-[var(--color-muted)]">
            Paste full JSON or edit below, then Apply. Use the form above for everyday edits.
          </p>
          <textarea
            value={rawJson}
            onChange={(e) => setRawJson(e.target.value)}
            spellCheck={false}
            className={`${textareaClass} mt-3 min-h-[240px] font-mono text-xs`}
          />
          <button
            type="button"
            onClick={applyRaw}
            className="mt-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white hover:bg-white/10"
          >
            Apply raw JSON
          </button>
        </div>
      )}

      <Section title="SEO & metadata">
        <Field label="Site title (browser tab)">
          <input
            className={inputClass}
            value={c.seo.siteTitle}
            onChange={(e) =>
              update((d) => {
                d.seo.siteTitle = e.target.value;
                return d;
              })
            }
          />
        </Field>
        <Field label="Title template" hint='Use %s for page title, e.g. "%s — Manuel Muhunami"'>
          <input
            className={inputClass}
            value={c.seo.titleTemplate}
            onChange={(e) =>
              update((d) => {
                d.seo.titleTemplate = e.target.value;
                return d;
              })
            }
          />
        </Field>
        <Field label="Default description">
          <textarea
            className={textareaClass}
            value={c.seo.defaultDescription}
            onChange={(e) =>
              update((d) => {
                d.seo.defaultDescription = e.target.value;
                return d;
              })
            }
          />
        </Field>
        <Field label="Keywords (one per line)">
          <textarea
            className={textareaClass}
            value={c.seo.keywords.join("\n")}
            onChange={(e) =>
              update((d) => {
                d.seo.keywords = e.target.value
                  .split("\n")
                  .map((s) => s.trim())
                  .filter(Boolean);
                return d;
              })
            }
          />
        </Field>
        <Field label="Open Graph description">
          <textarea
            className={textareaClass}
            value={c.seo.openGraphDescription}
            onChange={(e) =>
              update((d) => {
                d.seo.openGraphDescription = e.target.value;
                return d;
              })
            }
          />
        </Field>
        <Field label="Twitter description">
          <textarea
            className={textareaClass}
            value={c.seo.twitterDescription}
            onChange={(e) =>
              update((d) => {
                d.seo.twitterDescription = e.target.value;
                return d;
              })
            }
          />
        </Field>
      </Section>

      <Section title="Profile & links">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full name">
            <input
              className={inputClass}
              value={c.site.name}
              onChange={(e) =>
                update((d) => {
                  d.site.name = e.target.value;
                  return d;
                })
              }
            />
          </Field>
          <Field label="Initials">
            <input
              className={inputClass}
              value={c.site.initials}
              onChange={(e) =>
                update((d) => {
                  d.site.initials = e.target.value;
                  return d;
                })
              }
            />
          </Field>
          <Field label="First name">
            <input
              className={inputClass}
              value={c.site.firstName}
              onChange={(e) =>
                update((d) => {
                  d.site.firstName = e.target.value;
                  return d;
                })
              }
            />
          </Field>
          <Field label="Last name">
            <input
              className={inputClass}
              value={c.site.lastName}
              onChange={(e) =>
                update((d) => {
                  d.site.lastName = e.target.value;
                  return d;
                })
              }
            />
          </Field>
        </div>
        <Field label="Tagline">
          <input
            className={inputClass}
            value={c.site.tagline}
            onChange={(e) =>
              update((d) => {
                d.site.tagline = e.target.value;
                return d;
              })
            }
          />
        </Field>
        <Field label="Email">
          <input
            type="email"
            className={inputClass}
            value={c.site.email}
            onChange={(e) =>
              update((d) => {
                d.site.email = e.target.value;
                return d;
              })
            }
          />
        </Field>
        <Field label="LinkedIn URL">
          <input
            className={inputClass}
            value={c.site.social.linkedin}
            onChange={(e) =>
              update((d) => {
                d.site.social.linkedin = e.target.value;
                return d;
              })
            }
          />
        </Field>
        <Field label="GitHub URL">
          <input
            className={inputClass}
            value={c.site.social.github}
            onChange={(e) =>
              update((d) => {
                d.site.social.github = e.target.value;
                return d;
              })
            }
          />
        </Field>
        <Field label="YouTube URL">
          <input
            className={inputClass}
            value={c.site.social.youtube}
            onChange={(e) =>
              update((d) => {
                d.site.social.youtube = e.target.value;
                return d;
              })
            }
          />
        </Field>
        <Field label="Gazi J YouTube URL">
          <input
            className={inputClass}
            value={c.site.social.youtubeGazi}
            onChange={(e) =>
              update((d) => {
                d.site.social.youtubeGazi = e.target.value;
                return d;
              })
            }
          />
        </Field>
        <Field label="Footer quote">
          <input
            className={inputClass}
            value={c.footer.quote}
            onChange={(e) =>
              update((d) => {
                d.footer.quote = e.target.value;
                return d;
              })
            }
          />
        </Field>
      </Section>

      <Section title="Home page">
        <Field label="Hero eyebrow">
          <input className={inputClass} value={c.home.heroEyebrow} onChange={(e) => update((d) => { d.home.heroEyebrow = e.target.value; return d; })} />
        </Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Primary button">
            <input className={inputClass} value={c.home.primaryCta} onChange={(e) => update((d) => { d.home.primaryCta = e.target.value; return d; })} />
          </Field>
          <Field label="Secondary button">
            <input className={inputClass} value={c.home.secondaryCta} onChange={(e) => update((d) => { d.home.secondaryCta = e.target.value; return d; })} />
          </Field>
        </div>
        <Field label="Current focus — label">
          <input className={inputClass} value={c.home.currentFocus.label} onChange={(e) => update((d) => { d.home.currentFocus.label = e.target.value; return d; })} />
        </Field>
        <Field label="Current focus — text before highlight">
          <input className={inputClass} value={c.home.currentFocus.lead} onChange={(e) => update((d) => { d.home.currentFocus.lead = e.target.value; return d; })} />
        </Field>
        <Field label="Current focus — highlighted word">
          <input className={inputClass} value={c.home.currentFocus.highlight} onChange={(e) => update((d) => { d.home.currentFocus.highlight = e.target.value; return d; })} />
        </Field>
        <Field label="Quote — label">
          <input className={inputClass} value={c.home.quoteSection.label} onChange={(e) => update((d) => { d.home.quoteSection.label = e.target.value; return d; })} />
        </Field>
        <Field label="Quote — text">
          <textarea className={textareaClass} value={c.home.quoteSection.text} onChange={(e) => update((d) => { d.home.quoteSection.text = e.target.value; return d; })} />
        </Field>
        <Field label="Intellectual — eyebrow">
          <input className={inputClass} value={c.home.intellectual.eyebrow} onChange={(e) => update((d) => { d.home.intellectual.eyebrow = e.target.value; return d; })} />
        </Field>
        <Field label="Intellectual — main text">
          <textarea className={textareaClass} value={c.home.intellectual.title} onChange={(e) => update((d) => { d.home.intellectual.title = e.target.value; return d; })} />
        </Field>
        <Field label="Recognition — eyebrow">
          <input className={inputClass} value={c.home.recognition.eyebrow} onChange={(e) => update((d) => { d.home.recognition.eyebrow = e.target.value; return d; })} />
        </Field>
        <Field label="Recognition — title">
          <input className={inputClass} value={c.home.recognition.title} onChange={(e) => update((d) => { d.home.recognition.title = e.target.value; return d; })} />
        </Field>
        <Field label="Recognition — subtitle">
          <textarea className={textareaClass} value={c.home.recognition.subtitle} onChange={(e) => update((d) => { d.home.recognition.subtitle = e.target.value; return d; })} />
        </Field>
        <Field label="Atlas — eyebrow">
          <input className={inputClass} value={c.home.atlas.eyebrow} onChange={(e) => update((d) => { d.home.atlas.eyebrow = e.target.value; return d; })} />
        </Field>
        <Field label="Atlas — title">
          <textarea className={textareaClass} value={c.home.atlas.title} onChange={(e) => update((d) => { d.home.atlas.title = e.target.value; return d; })} />
        </Field>
      </Section>

      <Section title="About">
        <Field label="Meta description (SEO)">
          <input className={inputClass} value={c.about.metaDescription} onChange={(e) => update((d) => { d.about.metaDescription = e.target.value; return d; })} />
        </Field>
        <Field label="Story section label">
          <input className={inputClass} value={c.about.storyEyebrow} onChange={(e) => update((d) => { d.about.storyEyebrow = e.target.value; return d; })} />
        </Field>
        <Field label="Education section label">
          <input className={inputClass} value={c.about.educationEyebrow} onChange={(e) => update((d) => { d.about.educationEyebrow = e.target.value; return d; })} />
        </Field>
        <Field label="Story paragraphs" hint="One paragraph per block. Check “Silver tone” for muted styling.">
          <div className="space-y-3">
            {c.about.paragraphs.map((para, i) => (
              <div key={i} className="flex flex-col gap-2 rounded-xl border border-white/10 p-3 sm:flex-row sm:items-start">
                <textarea
                  className={`${textareaClass} min-h-[72px] flex-1`}
                  value={para.text}
                  onChange={(e) =>
                    update((d) => {
                      d.about.paragraphs[i].text = e.target.value;
                      return d;
                    })
                  }
                />
                <label className="flex items-center gap-2 whitespace-nowrap text-xs text-[var(--color-muted)]">
                  <input
                    type="checkbox"
                    checked={para.tone === "silver"}
                    onChange={(e) =>
                      update((d) => {
                        d.about.paragraphs[i].tone = e.target.checked ? "silver" : undefined;
                        return d;
                      })
                    }
                  />
                  Silver tone
                </label>
                <button
                  type="button"
                  className="text-xs text-red-400 hover:underline"
                  onClick={() =>
                    update((d) => {
                      d.about.paragraphs = d.about.paragraphs.filter((_, j) => j !== i);
                      return d;
                    })
                  }
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="text-sm text-[var(--color-silver)] hover:text-white"
              onClick={() =>
                update((d) => {
                  d.about.paragraphs.push({ text: "" });
                  return d;
                })
              }
            >
              + Add paragraph
            </button>
          </div>
        </Field>
        <Field label="Education cards">
          <div className="space-y-4">
            {c.about.education.map((ed, i) => (
              <div key={i} className="rounded-xl border border-white/10 p-4">
                <Field label="School">
                  <input
                    className={inputClass}
                    value={ed.school}
                    onChange={(e) =>
                      update((d) => {
                        d.about.education[i].school = e.target.value;
                        return d;
                      })
                    }
                  />
                </Field>
                <Field label="Line">
                  <input
                    className={inputClass}
                    value={ed.line}
                    onChange={(e) =>
                      update((d) => {
                        d.about.education[i].line = e.target.value;
                        return d;
                      })
                    }
                  />
                </Field>
                <Field label="Detail">
                  <input
                    className={inputClass}
                    value={ed.detail}
                    onChange={(e) =>
                      update((d) => {
                        d.about.education[i].detail = e.target.value;
                        return d;
                      })
                    }
                  />
                </Field>
                <button
                  type="button"
                  className="text-xs text-red-400"
                  onClick={() =>
                    update((d) => {
                      d.about.education = d.about.education.filter((_, j) => j !== i);
                      return d;
                    })
                  }
                >
                  Remove card
                </button>
              </div>
            ))}
            <button
              type="button"
              className="text-sm text-[var(--color-silver)]"
              onClick={() =>
                update((d) => {
                  d.about.education.push({ school: "", line: "", detail: "" });
                  return d;
                })
              }
            >
              + Add education card
            </button>
          </div>
        </Field>
      </Section>

      <Section title="Insights (blog)">
        <Field label="Meta description">
          <input className={inputClass} value={c.insights.metaDescription} onChange={(e) => update((d) => { d.insights.metaDescription = e.target.value; return d; })} />
        </Field>
        <Field label="Eyebrow">
          <input className={inputClass} value={c.insights.eyebrow} onChange={(e) => update((d) => { d.insights.eyebrow = e.target.value; return d; })} />
        </Field>
        <Field label="Title">
          <input className={inputClass} value={c.insights.title} onChange={(e) => update((d) => { d.insights.title = e.target.value; return d; })} />
        </Field>
        <Field label="Text before highlighted name">
          <textarea className={textareaClass} value={c.insights.paragraphBeforeHighlight} onChange={(e) => update((d) => { d.insights.paragraphBeforeHighlight = e.target.value; return d; })} />
        </Field>
        <Field label="Highlighted name">
          <input className={inputClass} value={c.insights.highlightName} onChange={(e) => update((d) => { d.insights.highlightName = e.target.value; return d; })} />
        </Field>
        <Field label="Text after highlighted name">
          <textarea className={textareaClass} value={c.insights.paragraphAfterHighlight} onChange={(e) => update((d) => { d.insights.paragraphAfterHighlight = e.target.value; return d; })} />
        </Field>
        <Field label="YouTube button label">
          <input className={inputClass} value={c.insights.youtubeButtonLabel} onChange={(e) => update((d) => { d.insights.youtubeButtonLabel = e.target.value; return d; })} />
        </Field>
        <Field label="Closing line (after Contact link)">
          <input className={inputClass} value={c.insights.closingLineBeforeContact} onChange={(e) => update((d) => { d.insights.closingLineBeforeContact = e.target.value; return d; })} />
        </Field>
      </Section>

      <Section title="Contact page">
        <Field label="Meta description">
          <input className={inputClass} value={c.contactPage.metaDescription} onChange={(e) => update((d) => { d.contactPage.metaDescription = e.target.value; return d; })} />
        </Field>
        <Field label="Eyebrow / Title / Subtitle">
          <input className={inputClass} placeholder="Eyebrow" value={c.contactPage.eyebrow} onChange={(e) => update((d) => { d.contactPage.eyebrow = e.target.value; return d; })} />
          <input className={`${inputClass} mt-2`} placeholder="Title" value={c.contactPage.title} onChange={(e) => update((d) => { d.contactPage.title = e.target.value; return d; })} />
          <textarea className={`${textareaClass} mt-2`} placeholder="Subtitle" value={c.contactPage.subtitle} onChange={(e) => update((d) => { d.contactPage.subtitle = e.target.value; return d; })} />
        </Field>
        <Field label="Sidebar label">
          <input className={inputClass} value={c.contactPage.sidebarEyebrow} onChange={(e) => update((d) => { d.contactPage.sidebarEyebrow = e.target.value; return d; })} />
        </Field>
        <Field label="LinkedIn display text">
          <input className={inputClass} value={c.contactPage.linkedinDisplay} onChange={(e) => update((d) => { d.contactPage.linkedinDisplay = e.target.value; return d; })} />
        </Field>
        <Field label="YouTube display text">
          <input className={inputClass} value={c.contactPage.youtubeDisplay} onChange={(e) => update((d) => { d.contactPage.youtubeDisplay = e.target.value; return d; })} />
        </Field>
      </Section>

      <Section title="Projects page">
        <Field label="Meta description">
          <input className={inputClass} value={c.portfolioPage.metaDescription} onChange={(e) => update((d) => { d.portfolioPage.metaDescription = e.target.value; return d; })} />
        </Field>
        <Field label="Eyebrow">
          <input className={inputClass} value={c.portfolioPage.eyebrow} onChange={(e) => update((d) => { d.portfolioPage.eyebrow = e.target.value; return d; })} />
        </Field>
        <Field label="Title">
          <input className={inputClass} value={c.portfolioPage.title} onChange={(e) => update((d) => { d.portfolioPage.title = e.target.value; return d; })} />
        </Field>
        <Field label="Subtitle">
          <textarea className={textareaClass} value={c.portfolioPage.subtitle} onChange={(e) => update((d) => { d.portfolioPage.subtitle = e.target.value; return d; })} />
        </Field>
      </Section>

      <Section title="Skills page">
        <Field label="Meta description">
          <input className={inputClass} value={c.resumePage.metaDescription} onChange={(e) => update((d) => { d.resumePage.metaDescription = e.target.value; return d; })} />
        </Field>
        <Field label="Eyebrow / Title / Subtitle">
          <input className={inputClass} value={c.resumePage.eyebrow} onChange={(e) => update((d) => { d.resumePage.eyebrow = e.target.value; return d; })} />
          <input className={`${inputClass} mt-2`} value={c.resumePage.title} onChange={(e) => update((d) => { d.resumePage.title = e.target.value; return d; })} />
          <textarea className={`${textareaClass} mt-2`} value={c.resumePage.subtitle} onChange={(e) => update((d) => { d.resumePage.subtitle = e.target.value; return d; })} />
        </Field>
        <Field label="Download résumé button label">
          <input className={inputClass} value={c.resumePage.downloadLabel} onChange={(e) => update((d) => { d.resumePage.downloadLabel = e.target.value; return d; })} />
        </Field>
        <Field label="At a glance label">
          <input className={inputClass} value={c.resumePage.atAGlanceLabel} onChange={(e) => update((d) => { d.resumePage.atAGlanceLabel = e.target.value; return d; })} />
        </Field>
        <Field label="Bottom text / CTA">
          <textarea className={textareaClass} value={c.resumePage.bottomText} onChange={(e) => update((d) => { d.resumePage.bottomText = e.target.value; return d; })} />
          <input className={`${inputClass} mt-2`} value={c.resumePage.bottomCta} onChange={(e) => update((d) => { d.resumePage.bottomCta = e.target.value; return d; })} />
        </Field>
      </Section>

      <Section title="Awards (timeline)">
        <div className="space-y-4">
          {c.awardsDetailed.map((aw, i) => (
            <div key={i} className="rounded-xl border border-white/10 p-4">
              <Field label="Year">
                <input
                  className={inputClass}
                  value={aw.year}
                  onChange={(e) =>
                    update((d) => {
                      d.awardsDetailed[i].year = e.target.value;
                      return d;
                    })
                  }
                />
              </Field>
              <Field label="Lines (one per line — first line is the bold title)">
                <textarea
                  className={textareaClass}
                  value={aw.lines.join("\n")}
                  onChange={(e) =>
                    update((d) => {
                      d.awardsDetailed[i].lines = e.target.value
                        .split("\n")
                        .map((s) => s.trim())
                        .filter(Boolean);
                      return d;
                    })
                  }
                />
              </Field>
              <button
                type="button"
                className="text-xs text-red-400"
                onClick={() =>
                  update((d) => {
                    d.awardsDetailed = d.awardsDetailed.filter((_, j) => j !== i);
                    return d;
                  })
                }
              >
                Remove entry
              </button>
            </div>
          ))}
          <button
            type="button"
            className="text-sm text-[var(--color-silver)]"
            onClick={() =>
              update((d) => {
                d.awardsDetailed.push({ year: "", lines: [""] });
                return d;
              })
            }
          >
            + Add award year
          </button>
        </div>
      </Section>

      <Section title="Map pins (Atlas)">
        <p className="mt-2 text-xs text-[var(--color-muted)]">
          Longitude, latitude (numbers). IDs should stay stable if you link to them elsewhere.
        </p>
        <div className="space-y-4">
          {c.mapPins.map((pin, i) => (
            <div key={pin.id + i} className="grid gap-2 rounded-xl border border-white/10 p-4 sm:grid-cols-2">
              <Field label="ID">
                <input
                  className={inputClass}
                  value={pin.id}
                  onChange={(e) =>
                    update((d) => {
                      d.mapPins[i].id = e.target.value;
                      return d;
                    })
                  }
                />
              </Field>
              <Field label="Label">
                <input
                  className={inputClass}
                  value={pin.label}
                  onChange={(e) =>
                    update((d) => {
                      d.mapPins[i].label = e.target.value;
                      return d;
                    })
                  }
                />
              </Field>
              <Field label="Longitude">
                <input
                  type="number"
                  step="any"
                  className={inputClass}
                  value={pin.coordinates[0]}
                  onChange={(e) =>
                    update((d) => {
                      d.mapPins[i].coordinates[0] = Number(e.target.value);
                      return d;
                    })
                  }
                />
              </Field>
              <Field label="Latitude">
                <input
                  type="number"
                  step="any"
                  className={inputClass}
                  value={pin.coordinates[1]}
                  onChange={(e) =>
                    update((d) => {
                      d.mapPins[i].coordinates[1] = Number(e.target.value);
                      return d;
                    })
                  }
                />
              </Field>
              <button
                type="button"
                className="text-xs text-red-400 sm:col-span-2"
                onClick={() =>
                  update((d) => {
                    d.mapPins = d.mapPins.filter((_, j) => j !== i);
                    return d;
                  })
                }
              >
                Remove pin
              </button>
            </div>
          ))}
          <button
            type="button"
            className="text-sm text-[var(--color-silver)]"
            onClick={() =>
              update((d) => {
                d.mapPins.push({
                  id: `pin-${d.mapPins.length}`,
                  label: "",
                  coordinates: [0, 0],
                });
                return d;
              })
            }
          >
            + Add pin
          </button>
        </div>
      </Section>

      <Section title="Skill badges (list)">
        <Field label="One badge per line">
          <textarea
            className={textareaClass}
            value={c.skillBadges.join("\n")}
            onChange={(e) =>
              update((d) => {
                d.skillBadges = e.target.value
                  .split("\n")
                  .map((s) => s.trim())
                  .filter(Boolean);
                return d;
              })
            }
          />
        </Field>
      </Section>

      <Section title="Skill spotlight cards (Skills page)">
        <div className="space-y-6">
          {c.skillClusters.map((cl, i) => (
            <div key={cl.id} className="rounded-xl border border-white/10 p-4">
              <Field label="Title">
                <input
                  className={inputClass}
                  value={cl.title}
                  onChange={(e) =>
                    update((d) => {
                      d.skillClusters[i].title = e.target.value;
                      return d;
                    })
                  }
                />
              </Field>
              <Field label="Link path" hint="e.g. /skills/photography">
                <input
                  className={inputClass}
                  value={cl.href}
                  onChange={(e) =>
                    update((d) => {
                      d.skillClusters[i].href = e.target.value;
                      return d;
                    })
                  }
                />
              </Field>
              <Field label="Gradient accent (Tailwind classes)">
                <input
                  className={inputClass}
                  value={cl.accent}
                  onChange={(e) =>
                    update((d) => {
                      d.skillClusters[i].accent = e.target.value;
                      return d;
                    })
                  }
                />
              </Field>
              <Field label="Blurb">
                <textarea
                  className={textareaClass}
                  value={cl.blurb}
                  onChange={(e) =>
                    update((d) => {
                      d.skillClusters[i].blurb = e.target.value;
                      return d;
                    })
                  }
                />
              </Field>
              <Field label="Bullet lines (one per line)">
                <textarea
                  className={textareaClass}
                  value={cl.items.join("\n")}
                  onChange={(e) =>
                    update((d) => {
                      d.skillClusters[i].items = e.target.value
                        .split("\n")
                        .map((s) => s.trim())
                        .filter(Boolean);
                      return d;
                    })
                  }
                />
              </Field>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Projects (cards + detail pages)" defaultOpen={false}>
        <p className="mt-2 text-xs text-[var(--color-muted)]">
          Changing a project <code className="text-[var(--color-silver)]">id</code> renames URLs; update <code className="text-[var(--color-silver)]">projectLongForm</code> keys to match.
        </p>
        <div className="space-y-6">
          {c.projects.map((p, i) => (
            <div key={p.id} className="rounded-xl border border-white/10 p-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="ID (slug)">
                  <input
                    className={inputClass}
                    value={p.id}
                    onChange={(e) =>
                      update((d) => {
                        d.projects[i].id = e.target.value;
                        return d;
                      })
                    }
                  />
                </Field>
                <Field label="Status">
                  <select
                    className={inputClass}
                    value={p.status}
                    onChange={(e) =>
                      update((d) => {
                        d.projects[i].status = e.target.value as "live" | "in progress";
                        return d;
                      })
                    }
                  >
                    <option value="in progress">In progress</option>
                    <option value="live">Live</option>
                  </select>
                </Field>
                <Field label="Title">
                  <input
                    className={inputClass}
                    value={p.title}
                    onChange={(e) =>
                      update((d) => {
                        d.projects[i].title = e.target.value;
                        return d;
                      })
                    }
                  />
                </Field>
                <Field label="Subtitle">
                  <input
                    className={inputClass}
                    value={p.subtitle}
                    onChange={(e) =>
                      update((d) => {
                        d.projects[i].subtitle = e.target.value;
                        return d;
                      })
                    }
                  />
                </Field>
                <Field label="Card description">
                  <textarea
                    className={textareaClass}
                    value={p.cardDescription}
                    onChange={(e) =>
                      update((d) => {
                        d.projects[i].cardDescription = e.target.value;
                        return d;
                      })
                    }
                  />
                </Field>
                <Field label="Preview type">
                  <select
                    className={inputClass}
                    value={p.preview}
                    onChange={(e) =>
                      update((d) => {
                        d.projects[i].preview = e.target.value as "blog" | "web" | "mirror";
                        return d;
                      })
                    }
                  >
                    <option value="blog">blog</option>
                    <option value="web">web</option>
                    <option value="mirror">mirror</option>
                  </select>
                </Field>
                <Field label="Accent (Tailwind)">
                  <input
                    className={inputClass}
                    value={p.accent}
                    onChange={(e) =>
                      update((d) => {
                        d.projects[i].accent = e.target.value;
                        return d;
                      })
                    }
                  />
                </Field>
                <Field label="Detail URL path" hint="Usually /portfolio/your-id">
                  <input
                    className={inputClass}
                    value={p.href}
                    onChange={(e) =>
                      update((d) => {
                        d.projects[i].href = e.target.value;
                        return d;
                      })
                    }
                  />
                </Field>
                <Field label="Live URL (optional)">
                  <input
                    className={inputClass}
                    placeholder="https://..."
                    value={p.liveUrl ?? ""}
                    onChange={(e) =>
                      update((d) => {
                        d.projects[i].liveUrl = e.target.value || undefined;
                        return d;
                      })
                    }
                  />
                </Field>
              </div>
            </div>
          ))}
        </div>
        {c.projects.map((p) => {
          const body = c.projectLongForm[p.id];
          if (!body) return null;
          return (
            <div key={`lf-${p.id}`} className="mt-6 rounded-xl border border-violet-500/20 bg-violet-500/5 p-4">
              <h3 className="font-medium text-white">Detail copy: {p.title}</h3>
              <Field label="Tagline">
                <textarea
                  className={textareaClass}
                  value={body.tagline ?? ""}
                  onChange={(e) =>
                    update((d) => {
                      const b = d.projectLongForm[p.id];
                      if (b) b.tagline = e.target.value || undefined;
                      return d;
                    })
                  }
                />
              </Field>
              <Field label="Paragraphs (blank line between paragraphs)">
                <textarea
                  className={`${textareaClass} min-h-[160px]`}
                  value={body.paragraphs.join("\n\n")}
                  onChange={(e) =>
                    update((d) => {
                      const b = d.projectLongForm[p.id];
                      if (b)
                        b.paragraphs = e.target.value
                          .split(/\n\s*\n/)
                          .map((s) => s.trim())
                          .filter(Boolean);
                      return d;
                    })
                  }
                />
              </Field>
              <Field label="Feature pillars">
                <div className="space-y-3">
                  {(body.pillars ?? []).map((pill, pi) => (
                    <div key={pi} className="rounded-lg border border-white/10 p-3">
                      <input
                        className={`${inputClass} mb-2`}
                        placeholder="Title"
                        value={pill.title}
                        onChange={(e) =>
                          update((d) => {
                            const b = d.projectLongForm[p.id];
                            if (b?.pillars) b.pillars[pi].title = e.target.value;
                            return d;
                          })
                        }
                      />
                      <textarea
                        className={textareaClass}
                        placeholder="Text"
                        value={pill.text}
                        onChange={(e) =>
                          update((d) => {
                            const b = d.projectLongForm[p.id];
                            if (b?.pillars) b.pillars[pi].text = e.target.value;
                            return d;
                          })
                        }
                      />
                      <button
                        type="button"
                        className="mt-2 text-xs text-red-400"
                        onClick={() =>
                          update((d) => {
                            const b = d.projectLongForm[p.id];
                            if (b?.pillars) b.pillars = b.pillars.filter((_, j) => j !== pi);
                            return d;
                          })
                        }
                      >
                        Remove pillar
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="text-sm text-[var(--color-silver)]"
                    onClick={() =>
                      update((d) => {
                        const b = d.projectLongForm[p.id];
                        if (b) {
                          if (!b.pillars) b.pillars = [];
                          b.pillars.push({ title: "", text: "" });
                        }
                        return d;
                      })
                    }
                  >
                    + Add pillar
                  </button>
                </div>
              </Field>
            </div>
          );
        })}
      </Section>

      <Section title="Skill showcase pages" defaultOpen={false}>
        <div className="space-y-8">
          <div className="rounded-xl border border-white/10 p-4">
            <h3 className="text-white">Photography</h3>
            <Field label="Title">
              <input
                className={inputClass}
                value={c.skillShowcase.photography.title}
                onChange={(e) =>
                  update((d) => {
                    d.skillShowcase.photography.title = e.target.value;
                    return d;
                  })
                }
              />
            </Field>
            <Field label="Subtitle">
              <input
                className={inputClass}
                value={c.skillShowcase.photography.subtitle}
                onChange={(e) =>
                  update((d) => {
                    d.skillShowcase.photography.subtitle = e.target.value;
                    return d;
                  })
                }
              />
            </Field>
            <Field label="Intro">
              <textarea
                className={textareaClass}
                value={c.skillShowcase.photography.intro}
                onChange={(e) =>
                  update((d) => {
                    d.skillShowcase.photography.intro = e.target.value;
                    return d;
                  })
                }
              />
            </Field>
            {c.skillShowcase.photography.images.map((img, ii) => (
              <div key={ii} className="mt-4 rounded-lg border border-white/10 p-3">
                <Field label="Image URL">
                  <input
                    className={inputClass}
                    value={img.src}
                    onChange={(e) =>
                      update((d) => {
                        d.skillShowcase.photography.images[ii].src = e.target.value;
                        return d;
                      })
                    }
                  />
                </Field>
                <Field label="Alt text">
                  <input
                    className={inputClass}
                    value={img.alt}
                    onChange={(e) =>
                      update((d) => {
                        d.skillShowcase.photography.images[ii].alt = e.target.value;
                        return d;
                      })
                    }
                  />
                </Field>
                <Field label="Caption">
                  <input
                    className={inputClass}
                    value={img.caption}
                    onChange={(e) =>
                      update((d) => {
                        d.skillShowcase.photography.images[ii].caption = e.target.value;
                        return d;
                      })
                    }
                  />
                </Field>
                <button
                  type="button"
                  className="text-xs text-red-400"
                  onClick={() =>
                    update((d) => {
                      d.skillShowcase.photography.images = d.skillShowcase.photography.images.filter(
                        (_, j) => j !== ii
                      );
                      return d;
                    })
                  }
                >
                  Remove image
                </button>
              </div>
            ))}
            <button
              type="button"
              className="mt-2 text-sm text-[var(--color-silver)]"
              onClick={() =>
                update((d) => {
                  d.skillShowcase.photography.images.push({
                    src: "",
                    alt: "",
                    caption: "",
                  });
                  return d;
                })
              }
            >
              + Add image
            </button>
          </div>

          <div className="rounded-xl border border-white/10 p-4">
            <h3 className="text-white">Creative writing</h3>
            <Field label="Title">
              <input
                className={inputClass}
                value={c.skillShowcase["creative-writing"].title}
                onChange={(e) =>
                  update((d) => {
                    d.skillShowcase["creative-writing"].title = e.target.value;
                    return d;
                  })
                }
              />
            </Field>
            <Field label="Subtitle">
              <input
                className={inputClass}
                value={c.skillShowcase["creative-writing"].subtitle}
                onChange={(e) =>
                  update((d) => {
                    d.skillShowcase["creative-writing"].subtitle = e.target.value;
                    return d;
                  })
                }
              />
            </Field>
            <Field label="Intro">
              <textarea
                className={textareaClass}
                value={c.skillShowcase["creative-writing"].intro}
                onChange={(e) =>
                  update((d) => {
                    d.skillShowcase["creative-writing"].intro = e.target.value;
                    return d;
                  })
                }
              />
            </Field>
            {c.skillShowcase["creative-writing"].pieces.map((piece, pi) => (
              <div key={pi} className="mt-4 rounded-lg border border-white/10 p-3">
                <Field label="Piece title">
                  <input
                    className={inputClass}
                    value={piece.title}
                    onChange={(e) =>
                      update((d) => {
                        d.skillShowcase["creative-writing"].pieces[pi].title = e.target.value;
                        return d;
                      })
                    }
                  />
                </Field>
                <Field label="Excerpt">
                  <textarea
                    className={textareaClass}
                    value={piece.excerpt}
                    onChange={(e) =>
                      update((d) => {
                        d.skillShowcase["creative-writing"].pieces[pi].excerpt = e.target.value;
                        return d;
                      })
                    }
                  />
                </Field>
                <button
                  type="button"
                  className="text-xs text-red-400"
                  onClick={() =>
                    update((d) => {
                      d.skillShowcase["creative-writing"].pieces = d.skillShowcase[
                        "creative-writing"
                      ].pieces.filter((_, j) => j !== pi);
                      return d;
                    })
                  }
                >
                  Remove piece
                </button>
              </div>
            ))}
            <button
              type="button"
              className="mt-2 text-sm text-[var(--color-silver)]"
              onClick={() =>
                update((d) => {
                  d.skillShowcase["creative-writing"].pieces.push({
                    title: "",
                    excerpt: "",
                  });
                  return d;
                })
              }
            >
              + Add piece
            </button>
          </div>

          <div className="rounded-xl border border-white/10 p-4">
            <h3 className="text-white">Storytelling (YouTube)</h3>
            <Field label="Title">
              <input
                className={inputClass}
                value={c.skillShowcase.storytelling.title}
                onChange={(e) =>
                  update((d) => {
                    d.skillShowcase.storytelling.title = e.target.value;
                    return d;
                  })
                }
              />
            </Field>
            <Field label="Subtitle">
              <input
                className={inputClass}
                value={c.skillShowcase.storytelling.subtitle}
                onChange={(ev) =>
                  update((d) => {
                    d.skillShowcase.storytelling.subtitle = ev.target.value;
                    return d;
                  })
                }
              />
            </Field>
            <Field label="Intro">
              <textarea
                className={textareaClass}
                value={c.skillShowcase.storytelling.intro}
                onChange={(e) =>
                  update((d) => {
                    d.skillShowcase.storytelling.intro = e.target.value;
                    return d;
                  })
                }
              />
            </Field>
            {c.skillShowcase.storytelling.videos.map((vid, vi) => (
              <div key={vi} className="mt-4 rounded-lg border border-white/10 p-3">
                <Field label="Video title">
                  <input
                    className={inputClass}
                    value={vid.title}
                    onChange={(e) =>
                      update((d) => {
                        d.skillShowcase.storytelling.videos[vi].title = e.target.value;
                        return d;
                      })
                    }
                  />
                </Field>
                <Field label="YouTube video ID" hint="The part after v= in the URL">
                  <input
                    className={inputClass}
                    value={vid.videoId}
                    onChange={(e) =>
                      update((d) => {
                        d.skillShowcase.storytelling.videos[vi].videoId = e.target.value;
                        return d;
                      })
                    }
                  />
                </Field>
                <Field label="Placeholder note (if no video ID)">
                  <input
                    className={inputClass}
                    value={vid.note}
                    onChange={(e) =>
                      update((d) => {
                        d.skillShowcase.storytelling.videos[vi].note = e.target.value;
                        return d;
                      })
                    }
                  />
                </Field>
                <button
                  type="button"
                  className="text-xs text-red-400"
                  onClick={() =>
                    update((d) => {
                      d.skillShowcase.storytelling.videos = d.skillShowcase.storytelling.videos.filter(
                        (_, j) => j !== vi
                      );
                      return d;
                    })
                  }
                >
                  Remove video
                </button>
              </div>
            ))}
            <button
              type="button"
              className="mt-2 text-sm text-[var(--color-silver)]"
              onClick={() =>
                update((d) => {
                  d.skillShowcase.storytelling.videos.push({
                    title: "",
                    videoId: "",
                    note: "",
                  });
                  return d;
                })
              }
            >
              + Add video slot
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}
