import { notFound } from "next/navigation";
import { PORTFOLIO_ITEMS } from "@/lib/data";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PORTFOLIO_ITEMS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = PORTFOLIO_ITEMS.find((p) => p.slug === slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} — Case Study | Vizox Studio`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = PORTFOLIO_ITEMS.find((p) => p.slug === slug);

  if (!project) notFound();

  const { fullCaseStudy } = project;

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 min-h-screen bg-background">
        <div className="container px-6 max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            href="/portfolio"
            className="inline-flex items-center text-primary font-medium hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Our Work
          </Link>

          {/* Header */}
          <header className="mb-16">
            <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wide uppercase mb-6 inline-block">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              {project.title} <span className="text-gradient">Case Study.</span>
            </h1>
            
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border mt-8">
              <div>
                <p className="text-sm text-muted-foreground uppercase mb-1">Category</p>
                <p className="text-white font-medium">{project.category}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase mb-1">Technologies</p>
                <p className="text-white font-medium">{project.techStack.slice(0, 2).join(", ")}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase mb-1">Focus</p>
                <p className="text-white font-medium">UI/UX & Performance</p>
              </div>
            </div>
          </header>

          {/* Primary Image */}
          <div className="relative w-full aspect-[16/9] rounded-[24px] overflow-hidden mb-16 shadow-2xl">
            <Image 
              src={project.image}
              alt={project.alt}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg prose-invert max-w-none space-y-16">
            {/* Project Overview */}
            <section>
              <h2 className="text-3xl font-serif font-bold text-white mb-6">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {fullCaseStudy.fullOverview}
              </p>
            </section>

            {/* Design Approach */}
            <section>
              <h2 className="text-3xl font-serif font-bold text-white mb-6">Design Approach</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {fullCaseStudy.fullDesignApproach}
              </p>
            </section>

            {/* Screenshots Gallery - Reusing structural elements from old work page */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
              {project.caseStudy.screenshots.map((img, idx) => (
                <div key={idx} className="relative aspect-[4/3] rounded-[16px] overflow-hidden border border-border/50">
                  <Image src={img} fill alt={`${project.title} view ${idx + 1}`} className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>

            {/* Feature Implementation */}
            <section tabIndex={0} className="focus:outline-none">
              <h2 className="text-3xl font-serif font-bold text-white mb-8">Feature Implementation</h2>
              <div className="grid grid-cols-1 gap-4">
                {fullCaseStudy.fullFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start bg-surface/30 border border-border/50 rounded-xl p-6">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mr-4 mt-1" />
                    <div>
                      <h4 className="text-white font-bold mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Technology Stack */}
            <section>
              <h2 className="text-3xl font-serif font-bold text-white mb-6">Technology Stack</h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-5 py-3 rounded-full bg-surface border border-border text-white text-sm font-medium hover:border-primary/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Live Project CTA */}
            <div className="mt-24 pt-12 border-t border-border text-center">
              <h2 className="text-3xl font-serif font-bold text-white mb-8">Ready to see it in action?</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="h-14 px-10 text-lg group hover:shadow-[0_0_20px_rgba(124,77,255,0.4)] transition-shadow w-full sm:w-auto" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    View Live Project
                    <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-10 text-lg w-full sm:w-auto" asChild>
                  <Link href="/portfolio">← Back to Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
