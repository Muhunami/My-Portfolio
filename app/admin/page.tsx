import type { Metadata } from "next";
import { AdminEditor } from "./admin-editor";

export const metadata: Metadata = {
  title: "Site admin",
  description: "Edit site content JSON for this static portfolio.",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminEditor />;
}
