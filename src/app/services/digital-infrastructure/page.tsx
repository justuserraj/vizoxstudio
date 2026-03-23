"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Code2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function DigitalInfrastructurePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24">
        {/* Hero Section */}
        <section className="container px-6 max-w-7xl mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" animate="visible" variants={fadeIn}
              className="space-y-8"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Code2 className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                Digital <br />
                <span className="text-gradient">Infrastructure.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Your digital presence is only as strong as its backbone. We engineer high-performance environments that handle growth and scale effortlessly.
              </p>
              <Button size="lg" className="h-14 px-10 text-lg shadow-[0_0_20px_rgba(124,77,255,0.4)]" asChild>
                <Link href="/contact">Get a Free Growth Audit</Link>
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-[32px] overflow-hidden aspect-video bg-surface shadow-2xl border border-border flex items-center justify-center"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
               <Code2 className="w-32 h-32 text-primary/20" />
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-surface py-24 border-y border-border">
          <div className="container px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">Performance Engineered</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  In a market as intense as India, a two-second delay determines whether a customer stays or leaves for a competitor.
                </p>
                <div className="space-y-4">
                  {[
                    "Next.js High-Performance Architecture",
                    "SEO-Engineered Code Structure",
                    "Mobile-First Responsive Systems",
                    "Conversion Pixel & Tracking Setup"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-white">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-8">
                <div className="p-8 rounded-3xl bg-background border border-border">
                  <h3 className="text-2xl font-serif font-bold text-white mb-4">Scalability First</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    We build systems that don't just work today, but are ready to handle the traffic spikes of tomorrow. Our stack is modern, secure, and infinitely scalable.
                  </p>
                </div>
                <div className="p-8 rounded-3xl bg-background border border-border">
                  <h3 className="text-2xl font-serif font-bold text-white mb-4">Market Experience</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    5+ years of shipping code that performs reliably in low-bandwidth environments, ensuring your infrastructure works for everyone, everywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container px-6 max-w-5xl py-24 text-center">
           <div className="p-12 md:p-20 rounded-[40px] bg-secondary border border-border relative overflow-hidden">
              <div className="relative z-10 space-y-8">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
                  Ready to upgrade your <br />
                  <span className="text-gradient">Infrastructure?</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Build a digital backbone that enables growth instead of limiting it.
                </p>
                <Button size="lg" className="h-14 px-10 text-lg" asChild>
                  <Link href="/contact">Let's Talk</Link>
                </Button>
              </div>
           </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
