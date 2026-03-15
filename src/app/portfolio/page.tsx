"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { PORTFOLIO_ITEMS } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  "All",
  "Web Development",
  "Mobile App Development",
  "Brand Identity",
  "Digital Marketing",
  "System Automation",
  "Motion & Interaction",
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(project => project.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 min-h-screen">
        <div className="container px-6 max-w-7xl">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wide uppercase mb-6 inline-block">
                Our Work
              </span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                Selected <span className="text-gradient">Work.</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                A curated selection of our finest work, showcasing our diverse capabilities across multiple industries.
              </p>
            </motion.div>
          </div>

          {/* Filter System */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === category
                    ? "bg-primary border-primary text-white shadow-[0_0_20px_rgba(124,77,255,0.4)]"
                    : "bg-surface border-border text-muted-foreground hover:border-primary/50 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 border border-dashed border-border rounded-3xl mb-20">
              <p className="text-muted-foreground text-lg italic">
                No projects found in this category yet. Stay tuned!
              </p>
            </div>
          )}

          <div className="text-center rounded-[24px] bg-secondary p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Inspired? Let's talk.</h2>
              <Button size="lg" className="h-14 px-10 text-lg shadow-[0_0_20px_rgba(124,77,255,0.4)]" asChild>
                <Link href="/contact">Let's Talk</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
