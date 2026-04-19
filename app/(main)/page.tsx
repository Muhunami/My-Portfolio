import type { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "Home",
  description: "Manuel Muhunami — I love solving problems.",
};

export default function HomePage() {
  return <HomeContent />;
}
