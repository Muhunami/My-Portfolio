import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy for this portfolio site.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="font-[family-name:var(--font-clash)] text-4xl font-semibold text-white">
        Privacy
      </h1>
      <p className="mt-4 text-[var(--color-muted)]">
        This site is a static portfolio. The contact form opens your email app — nothing is
        stored on a server when you use it.
      </p>
      <p className="mt-4 text-[var(--color-muted)]">
        External links (e.g. YouTube) are subject to those services&apos; privacy policies.
      </p>
    </div>
  );
}
