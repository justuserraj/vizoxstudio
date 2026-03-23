"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { PORTFOLIO_ITEMS } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PortfolioPage() {

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 min-h-screen">
        <div className="container px-6 max-w-7xl">
          <div className="max-w-4xl mb-24 text-center mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="h-px w-8 bg-primary" />
                <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">
                  Our Business Impact
                </span>
                <span className="h-px w-8 bg-primary" />
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
                Selected <span className="text-gradient">Case Studies.</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                A strategic deep dive into how we transform business identities and digital infrastructures for measurable growth.
              </p>
            </motion.div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 mb-32"
          >
            <AnimatePresence mode="popLayout">
              {PORTFOLIO_ITEMS.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="text-center rounded-[40px] bg-surface border border-border p-12 lg:p-24 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">Ready to improve your business's digital presence?</h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                We work with ambitious businesses to build high-performance systems that drive real growth.
              </p>
              <Button size="lg" className="h-16 px-12 text-lg font-bold rounded-2xl shadow-[0_0_30px_rgba(124,77,255,0.3)] hover:scale-105 transition-all group" asChild>
                <Link href="/contact">
                  Schedule Your Growth Audit
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
