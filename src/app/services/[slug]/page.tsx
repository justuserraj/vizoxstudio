"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SERVICES_DATA, PORTFOLIO_ITEMS } from "@/lib/data";
import { Paintbrush, Code2, Smartphone, TrendingUp, Cpu, MonitorPlay, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";

const ICONS: Record<string, any> = {
  "brand-identity": Paintbrush,
  "web-development": Code2,
  "mobile-app-development": Smartphone,
  "digital-marketing": TrendingUp,
  "system-automation": Cpu,
  "motion-interaction": MonitorPlay,
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return (
      <>
        <Navbar />
        <main className="flex-1 pt-32 pb-24 text-center">
          <h1 className="text-4xl text-white">Service not found</h1>
          <Button asChild className="mt-8">
            <Link href="/services">Back to Services</Link>
          </Button>
        </main>
        <Footer />
      </>
    );
  }

  const Icon = ICONS[service.slug] || Code2;
  const relatedProjects = PORTFOLIO_ITEMS.filter((p) => p.category === service.title).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24">
        {/* Hero Section */}
        <section className="container px-6 max-w-7xl mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Icon className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {service.fullDescription}
              </p>
              <Button size="lg" className="h-14 px-10 text-lg" asChild>
                <Link href="/contact">Let's Talk</Link>
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-[32px] overflow-hidden aspect-video bg-surface shadow-2xl border border-border"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <Icon className="w-32 h-32 text-primary/20" />
               </div>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-surface py-24 border-y border-border">
          <div className="container px-6 max-w-7xl">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Our Approach</h2>
              <p className="text-lg text-muted-foreground">
                We follow a rigorous and transparent process to ensure every project meets our high standards of excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.process.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-[24px] bg-background/50 border border-border/50 flex gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">{step}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Detailed execution focusing on quality and alignment with your business goals.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Logos Section */}
        {service.slug === "brand-identity" && (
          <section className="bg-background py-24 border-b border-border">
            <div className="container px-6 max-w-7xl text-center">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Our Branding Work</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16">
                A selection of visual identities and logomarks we've crafted for ambitious brands.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <motion.div 
                    key={num}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: num * 0.1 }}
                    className="relative w-full aspect-square rounded-[24px] bg-white/5 border border-white/10 group grayscale hover:grayscale-0 transition-all duration-500 hover:scale-[1.02] hover:bg-white/10 flex items-center justify-center overflow-hidden"
                  >
                    <Image 
                      src={`/images/Logo%20%5BBranding%5D/${num}.png`} 
                      alt={`Brand Logo ${num}`}
                      fill
                      className="object-contain p-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:drop-shadow-[0_0_25px_rgba(124,77,255,0.4)] transition-all duration-500"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Work */}
        {relatedProjects.length > 0 && (
          <section className="container px-6 max-w-7xl py-24">
            <div className="flex items-end justify-between mb-16">
              <div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Related Projects</h2>
                <p className="text-lg text-muted-foreground max-w-xl">
                  Explore how we've applied our {service.title} expertise to solve real challenges.
                </p>
              </div>
              <Button variant="ghost" className="hidden md:flex group" asChild>
                <Link href="/portfolio">
                  View All <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="container px-6 max-w-5xl py-24 text-center">
           <div className="p-12 md:p-20 rounded-[40px] bg-primary/10 border border-primary/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
              <div className="relative z-10 space-y-8">
                <h2 className="text-3xl md:text-6xl font-serif font-bold text-white">
                  Ready to start your <br />
                  <span className="text-gradient">{service.title}</span> journey?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Let’s discuss your vision and see how we can bring it to life with our expert team.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="h-14 px-10 text-lg shadow-[0_0_20px_rgba(124,77,255,0.4)]" asChild>
                    <Link href="/contact">Let's Talk</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 px-10 text-lg" asChild>
                    <Link href="/services">Explore Other Services</Link>
                  </Button>
                </div>
              </div>
           </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
