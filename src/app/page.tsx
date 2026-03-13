"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Paintbrush, Code2, Smartphone, TrendingUp, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PORTFOLIO_ITEMS } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";

const SERVICES = [
  {
    title: "Branding",
    description: "Crafting memorable brand identities that resonate with your target audience.",
    icon: Paintbrush,
  },
  {
    title: "Web Development",
    description: "Building fast, responsive, and scalable web applications using modern tech.",
    icon: Code2,
  },
  {
    title: "App Development",
    description: "Creating native and cross-platform mobile experiences that users love.",
    icon: Smartphone,
  },
  {
    title: "Marketing",
    description: "Data-driven digital marketing strategies to accelerate your business growth.",
    icon: TrendingUp,
  },
];

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function Home() {
  const featuredPortfolio = PORTFOLIO_ITEMS.slice(0, 2);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 gradient-bg opacity-40 z-0 animate-pulse-slow" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 z-0 bg-center" />

          <div className="container px-6 max-w-5xl relative z-10 text-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-8">
              <motion.div variants={fadeIn} className="inline-block relative">
                <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wide uppercase mb-6 block">
                  Welcome to Vizox Studio
                </span>
              </motion.div>

              <motion.h1
                variants={fadeIn}
                className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-white leading-tight"
              >
                Ideas that Inspire.<br />
                <span className="text-gradient">Code that Performs.</span>
              </motion.h1>

              <motion.p
                variants={fadeIn}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              >
                We are a creative digital agency specializing in premium branding, cutting-edge development, and result-driven marketing.
              </motion.p>

              <motion.div variants={fadeIn} className="pt-8">
                <Button size="lg" className="text-base h-14 px-8" asChild>
                  <Link href="/work">View Our Work <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Highlight */}
        <section className="py-24 md:py-32 bg-background relative z-10">
          <div className="container px-6 max-w-7xl">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
              className="mb-16 md:mb-24 text-center"
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Our Expertise</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Comprehensive digital solutions tailored to elevate your brand and drive business growth.
              </p>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {SERVICES.map((service, idx) => (
                <motion.div key={idx} variants={fadeIn}>
                  <Card className="h-full border-border/50 bg-surface/50 backdrop-blur-sm group hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                        <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Portfolio */}
        <section className="py-24 md:py-32 bg-surface border-y border-border relative z-10">
          <div className="container px-6 max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Featured Work</h2>
                <p className="text-muted-foreground text-lg max-w-xl">
                  A glimpse into our most recent and impactful projects.
                </p>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                <Button variant="outline" asChild>
                  <Link href="/portfolio">Explore All Projects</Link>
                </Button>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {featuredPortfolio.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-background relative z-10 overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="container px-6 max-w-4xl text-center relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                Have a project in mind?<br />
                <span className="text-gradient">Let's talk.</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                We're always looking for new challenges and partners. Let's create something extraordinary together.
              </p>
              <Button size="lg" className="h-14 px-10 text-lg shadow-[0_0_30px_rgba(124,77,255,0.3)]" asChild>
                <Link href="/contact">Start a Project</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
