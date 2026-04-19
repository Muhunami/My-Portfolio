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
        This site is a portfolio demonstration. Contact submissions may be logged to the
        server console when email delivery is not configured. When you configure Resend
        (or another provider), messages are processed only to respond to your inquiry.
      </p>
      <p className="mt-4 text-[var(--color-muted)]">
        No third-party analytics are included by default. Embedded media (such as Spotify)
        is subject to the respective provider&apos;s privacy policy.
      </p>
    </div>
  );
}
