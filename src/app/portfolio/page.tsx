import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { PORTFOLIO_ITEMS } from "@/lib/data";

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 min-h-screen">
        <div className="container px-6 max-w-7xl">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wide uppercase mb-6 inline-block">
              Selected Works
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Our <span className="text-gradient">Portfolio.</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A curated selection of our finest work, showcasing our diverse capabilities across multiple industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {PORTFOLIO_ITEMS.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>

          <div className="text-center rounded-[24px] bg-secondary p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Inspired? Let's talk.</h2>
              <Button size="lg" className="h-14 px-10 text-lg shadow-[0_0_20px_rgba(124,77,255,0.4)]" asChild>
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
