import type { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Luxury minimal portfolio — student leader, debate & MUN strategist, and builder of premium digital experiences.",
};

export default function HomePage() {
  return <HomeContent />;
}
