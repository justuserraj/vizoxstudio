import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 min-h-screen">
        <div className="container px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1 relative rounded-[24px] overflow-hidden aspect-[4/5] shadow-2xl">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Team"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wide uppercase">
                About Vizox Studio
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                We craft digital <span className="text-gradient">experiences.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Vizox Studio was founded on a simple principle: to build products that are as functionally brilliant as they are visually stunning. 
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed transition-colors">
                We partner with forward-thinking brands and ambitious startups to turn complex problems into elegant solutions through strategy, design, and engineering.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-6 border-t border-border">
                <div>
                  <h4 className="text-4xl font-serif font-bold text-white mb-2">50+</h4>
                  <p className="text-muted-foreground">Projects Delivered</p>
                </div>
                <div>
                  <h4 className="text-4xl font-serif font-bold text-white mb-2">15+</h4>
                  <p className="text-muted-foreground">Industry Awards</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-surface rounded-[24px] p-10 md:p-16 text-center shadow-lg border border-border mt-12">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Ready to work with us?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Let's create something meaningful together that your audience will love.
            </p>
            <Button size="lg" className="h-14 px-10 text-lg shadow-[0_0_20px_rgba(124,77,255,0.4)]" asChild>
              <Link href="/contact">Let's Talk</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
