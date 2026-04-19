import type { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Manuel Muhunami — building ideas in code, writing, and conversation.",
};

export default function HomePage() {
  return <HomeContent />;
}
