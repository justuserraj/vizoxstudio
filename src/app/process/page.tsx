"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 min-h-screen">
        <section className="py-24 md:py-32 bg-background relative z-10">
          <div className="container px-6 max-w-7xl">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
              className="mb-16 md:mb-24 text-center"
            >
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">How We Work</h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                Our proven methodology for building digital systems that scale your business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative mt-20">
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute top-[44px] left-[12%] right-[12%] h-px bg-border/50 z-0" />
              
              {[
                { step: "01", title: "Discovery", desc: "Understanding your business and identifying opportunities." },
                { step: "02", title: "Strategy", desc: "Designing the right digital system." },
                { step: "03", title: "Execution", desc: "Building and implementing the solution." },
                { step: "04", title: "Growth", desc: "Helping your business scale digitally." }
              ].map((process, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <div className="w-[88px] h-[88px] rounded-full bg-surface border-4 border-background flex items-center justify-center mb-8 shadow-xl relative shadow-primary/5">
                    <span className="text-2xl font-serif font-bold text-primary">{process.step}</span>
                    <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-b from-transparent to-primary/5 rounded-b-full pointer-events-none" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-4">{process.title}</h3>
                  <p className="text-muted-foreground text-lg">{process.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-32 text-center rounded-[24px] bg-secondary p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Ready to start?</h2>
                <Button size="lg" className="h-14 px-10 text-lg shadow-[0_0_20px_rgba(124,77,255,0.4)]" asChild>
                  <Link href="/contact">Get a Free Growth Audit</Link>
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
