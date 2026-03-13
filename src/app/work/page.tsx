import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function WorkCaseStudyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 min-h-screen bg-background">
        <div className="container px-6 max-w-4xl mx-auto">
          <Link href="/portfolio" className="inline-flex items-center text-primary font-medium hover:text-white transition-colors mb-12">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Portfolio
          </Link>

          <header className="mb-16">
            <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wide uppercase mb-6 inline-block">
              Case Study
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Fintech Dashboard <span className="text-gradient">Redesign.</span>
            </h1>
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border mt-8">
              <div>
                <p className="text-sm text-muted-foreground uppercase mb-1">Client</p>
                <p className="text-white font-medium">Nexus Financial</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase mb-1">Services</p>
                <p className="text-white font-medium">UI/UX, Frontend Development</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase mb-1">Timeline</p>
                <p className="text-white font-medium">12 Weeks</p>
              </div>
            </div>
          </header>

          <div className="relative w-full aspect-[16/9] rounded-[24px] overflow-hidden mb-16 shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600"
              alt="Fintech Dashboard"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg prose-invert max-w-none space-y-12">
            <section>
              <h2 className="text-3xl font-serif font-bold text-white mb-6">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nexus Financial came to Vizox Studio with a complex legacy system that was slowing down their internal analysts. The data was siloed, the interface was clunky, and generating reports took hours instead of minutes. They needed a complete overhaul of their dashboard to modernize their workflow without compromising the intricate data structures they relied upon.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-white mb-6">Our Approach</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We started with a deep-dive discovery phase, interviewing 15 key analysts to map their daily workflows. We discovered that 80% of their time was spent navigating between four different screens just to compile a single daily brief. 
              </p>
              <ul className="space-y-4">
                {[
                  "Consolidated four main data views into a single, customizable widget system.",
                  "Implemented a dark mode optimized for long hours of screen time.",
                  "Built a high-performance React frontend using Next.js to handle thousands of data points instantly.",
                  "Integrated seamless charting libraries to provide real-time visual feedback."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mr-4 mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <div className="grid grid-cols-2 gap-6 my-16">
              <div className="relative aspect-square rounded-[16px] overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=800" fill alt="Process 1" className="object-cover" />
              </div>
              <div className="relative aspect-square rounded-[16px] overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" fill alt="Process 2" className="object-cover" />
              </div>
            </div>

            <section>
              <h2 className="text-3xl font-serif font-bold text-white mb-6">The Result</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                The new dashboard increased analyst productivity by 40% in the first month post-launch. Data retrieval times were cut down from minutes to milliseconds, and the learning curve for new hires dropped significantly thanks to the intuitive UI.
              </p>
              <div className="bg-surface border border-border rounded-[16px] p-8 text-center">
                <p className="text-2xl font-serif text-white italic mb-4">"Vizox Studio didn't just redesign our software; they revolutionized how our entire team operates."</p>
                <p className="text-primary font-medium">— Sarah Jenkins, VP of Engineering at Nexus</p>
              </div>
            </section>
          </div>
          
          <div className="mt-24 pt-12 border-t border-border text-center">
            <h2 className="text-3xl font-serif font-bold text-white mb-8">Ready to transform your product?</h2>
            <Button size="lg" className="h-14 px-10 text-lg relative z-10 hover:shadow-[0_0_20px_rgba(124,77,255,0.4)] transition-shadow" asChild>
              <Link href="/contact">Let's Discuss</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
