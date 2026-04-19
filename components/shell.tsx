import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="relative z-10 min-h-[70vh] px-4 pb-28 pt-6 sm:px-6 lg:px-10">
        {children}
      </main>
      <Footer />
    </>
  );
}
