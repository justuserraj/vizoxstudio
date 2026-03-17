"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Paintbrush, Code2, Smartphone, TrendingUp, ArrowRight, Phone, Cpu, Zap, CheckCircle2, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PORTFOLIO_ITEMS } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    slug: "brand-identity",
    title: "Brand Identity",
    description: "Crafting memorable brand identities that resonate with your target audience.",
    icon: Paintbrush,
  },
  {
    slug: "web-development",
    title: "Web Development",
    description: "Building fast, responsive, and scalable web applications using modern tech.",
    icon: Code2,
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description: "Creating native and cross-platform mobile experiences that users love.",
    icon: Smartphone,
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description: "Data-driven digital marketing strategies to accelerate your business growth.",
    icon: TrendingUp,
  },
  {
    slug: "system-automation",
    title: "System Automation",
    description: "Automating repetitive tasks and complex workflows to increase efficiency.",
    icon: Cpu,
  },
  {
    slug: "motion-interaction",
    title: "Motion & Interaction",
    description: "Designing engaging motion graphics and interactive digital experiences.",
    icon: Zap,
  },
];

const TESTIMONIALS = [
  {
    review: "Working with Vizox Studio was smooth and professional. The website they built helped our business look much more credible.",
    business: "ABC Restaurant",
    name: "Rahul Sharma",
    role: "Owner",
  },
  {
    review: "The level of creativity and technical skill at Vizox is unmatched. They delivered exactly what we needed on time.",
    business: "Tech-Start Solutions",
    name: "Priya Patel",
    role: "Owner",
  },
  {
    review: "Professional, responsive, and highly creative. I couldn't be happier with our new brand identity.",
    business: "Nature's Harvest",
    name: "Anand Verma",
    role: "Owner",
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
  const categories = [
    "Brand Identity",
    "Web Development",
    "Mobile App Development",
    "Digital Marketing",
    "System Automation",
    "Motion & Interaction"
  ];
  
  const featuredPortfolio = categories.map(cat => 
    PORTFOLIO_ITEMS.find(p => p.category === cat) || PORTFOLIO_ITEMS[0]
  );

  const [testimonialIndex, setTestimonialIndex] = React.useState(0);
  const [expertiseIndex, setExpertiseIndex] = React.useState(0);
  const [workIndex, setWorkIndex] = React.useState(0);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  const startTimer = React.useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
      setExpertiseIndex((prev) => (prev + 1) % SERVICES.length);
      setWorkIndex((prev) => (prev + 1) % featuredPortfolio.length);
    }, 5000);
  }, [featuredPortfolio.length]);

  React.useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const handleManualAction = (action: () => void) => {
    action();
    startTimer(); // Reset timer to "pause" auto-slide
  };

  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

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

              <motion.div variants={fadeIn} className="pt-8 flex items-center justify-center gap-4 flex-wrap">
                <Button size="lg" className="text-base h-14 px-8" asChild>
                  <Link href="/portfolio">View Our Work <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-base h-14 px-8 border-primary/40 text-white hover:bg-primary hover:text-white transition-all duration-300 group min-w-[160px]" 
                  asChild
                >
                  <a href="tel:+918271754978" className="flex items-center justify-center">
                    <Phone className="mr-2 w-5 h-5" />
                    <span className="group-hover:hidden">Call Now</span>
                    <span className="hidden group-hover:inline">+91 8271754978</span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Our Expertise */}
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

            {/* Desktop Grid */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {SERVICES.map((service, idx) => (
                <motion.div key={idx} variants={fadeIn} className="h-full">
                  <Link href={`/services/${service.slug}`} className="block h-full group">
                    <div className="h-full border border-border/50 bg-surface/50 backdrop-blur-sm group-hover:border-primary/50 group-hover:bg-surface/80 transition-all duration-300 rounded-[24px] overflow-hidden p-8 flex flex-col">
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                          <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 mt-3" />
                      </div>
                      
                      <h3 className="text-xl font-serif font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-muted-foreground text-base mb-6">{service.description}</p>
                      
                      <div className="mt-auto flex items-center text-primary text-sm font-bold uppercase tracking-widest gap-2">
                        View Details
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile Carousel */}
            <div className="md:hidden relative px-4">
              <div className="absolute top-1/2 -left-2 -translate-y-1/2 z-20">
                <Button 
                  variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-background/50 backdrop-blur-md border border-border"
                  onClick={() => handleManualAction(() => setExpertiseIndex((expertiseIndex - 1 + SERVICES.length) % SERVICES.length))}
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </Button>
              </div>
              <div className="absolute top-1/2 -right-2 -translate-y-1/2 z-20">
                <Button 
                  variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-background/50 backdrop-blur-md border border-border"
                  onClick={() => handleManualAction(() => setExpertiseIndex((expertiseIndex + 1) % SERVICES.length))}
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </Button>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={expertiseIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -10000) {
                      handleManualAction(() => setExpertiseIndex((expertiseIndex + 1) % SERVICES.length));
                    } else if (swipe > 10000) {
                      handleManualAction(() => setExpertiseIndex((expertiseIndex - 1 + SERVICES.length) % SERVICES.length));
                    }
                  }}
                  className="h-full touch-pan-y"
                >
                  <Link href={`/services/${SERVICES[expertiseIndex].slug}`} className="block h-full group">
                    <div className="h-full border border-border/50 bg-surface/50 backdrop-blur-sm rounded-[24px] overflow-hidden p-10 flex flex-col min-h-[350px] shadow-2xl">
                      <div className="flex justify-between items-start mb-8">
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                          {React.createElement(SERVICES[expertiseIndex].icon, { className: "w-7 h-7 text-primary" })}
                        </div>
                        <ArrowRight className="w-6 h-6 text-primary mt-4" />
                      </div>
                      
                      <h3 className="text-2xl font-serif font-bold text-white mb-4">{SERVICES[expertiseIndex].title}</h3>
                      <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{SERVICES[expertiseIndex].description}</p>
                      
                      <div className="mt-auto flex items-center text-primary text-sm font-bold uppercase tracking-widest gap-2">
                        View Details
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </AnimatePresence>
              
              <div className="flex justify-center gap-2 mt-10">
                {SERVICES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleManualAction(() => setExpertiseIndex(idx))}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      expertiseIndex === idx ? "w-6 bg-primary" : "bg-border"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section className="py-24 md:py-32 bg-surface border-b border-border relative z-10">
          <div className="container px-6 max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Featured Work</h2>
                <p className="text-muted-foreground text-lg max-w-xl">
                  A glimpse into our most recent and impactful projects across all our services.
                </p>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                <Button variant="outline" asChild>
                  <Link href="/portfolio">Explore All Projects</Link>
                </Button>
              </motion.div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {featuredPortfolio.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden relative px-2">
              <div className="absolute top-1/2 -left-2 -translate-y-1/2 z-20">
                <Button 
                  variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-background/50 backdrop-blur-md border border-border"
                  onClick={() => handleManualAction(() => setWorkIndex((workIndex - 1 + featuredPortfolio.length) % featuredPortfolio.length))}
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </Button>
              </div>
              <div className="absolute top-1/2 -right-2 -translate-y-1/2 z-20">
                <Button 
                  variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-background/50 backdrop-blur-md border border-border"
                  onClick={() => handleManualAction(() => setWorkIndex((workIndex + 1) % featuredPortfolio.length))}
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </Button>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={workIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -10000) {
                      handleManualAction(() => setWorkIndex((workIndex + 1) % featuredPortfolio.length));
                    } else if (swipe > 10000) {
                      handleManualAction(() => setWorkIndex((workIndex - 1 + featuredPortfolio.length) % featuredPortfolio.length));
                    }
                  }}
                  className="touch-pan-y"
                >
                  <ProjectCard project={featuredPortfolio[workIndex]} />
                </motion.div>
              </AnimatePresence>
              
              <div className="flex justify-center gap-2 mt-10">
                {featuredPortfolio.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleManualAction(() => setWorkIndex(idx))}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      workIndex === idx ? "w-6 bg-primary" : "bg-border"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Client Stories (Testimonials) */}
        <section className="py-24 md:py-32 bg-background relative z-10 overflow-hidden">
          <div className="container px-6 max-w-7xl">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
              className="mb-16 md:mb-24 text-center"
            >
              <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wide uppercase mb-6 inline-block">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Client Stories</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Hear from the businesses we've helped transform through strategy and design.
              </p>
            </motion.div>

            {/* Desktop Grid */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              className="hidden md:grid md:grid-cols-3 gap-8"
            >
              {TESTIMONIALS.map((t, idx) => (
                <motion.div key={idx} variants={fadeIn}>
                  <div className="p-8 rounded-[24px] border border-border/50 bg-surface/30 backdrop-blur-xl h-full flex flex-col justify-between hover:border-primary/30 transition-colors">
                    <div className="space-y-6">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <svg key={s} className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-muted-foreground italic leading-relaxed text-lg">
                        "{t.review}"
                      </p>
                    </div>
                    <div className="pt-8 mt-8 border-t border-border/50">
                      <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">{t.business}</p>
                      <div>
                        <p className="text-white font-serif text-lg font-bold">{t.name}</p>
                        <p className="text-primary text-sm font-medium">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile Carousel */}
            <div className="md:hidden relative px-4 py-8">
              <div className="absolute top-1/2 -left-2 -translate-y-1/2 z-20">
                <Button 
                  variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-background/50 backdrop-blur-md border border-border"
                  onClick={() => handleManualAction(() => setTestimonialIndex((testimonialIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length))}
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </Button>
              </div>
              <div className="absolute top-1/2 -right-2 -translate-y-1/2 z-20">
                <Button 
                  variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-background/50 backdrop-blur-md border border-border"
                  onClick={() => handleManualAction(() => setTestimonialIndex((testimonialIndex + 1) % TESTIMONIALS.length))}
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </Button>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonialIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -10000) {
                      handleManualAction(() => setTestimonialIndex((testimonialIndex + 1) % TESTIMONIALS.length));
                    } else if (swipe > 10000) {
                      handleManualAction(() => setTestimonialIndex((testimonialIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length));
                    }
                  }}
                  className="p-8 rounded-[24px] border border-border/50 bg-surface/30 backdrop-blur-xl flex flex-col justify-between shadow-2xl min-h-[400px] touch-pan-y"
                >
                  <div className="space-y-6">
                    <div className="flex gap-1 justify-center">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg key={s} className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-muted-foreground italic leading-relaxed text-lg text-center">
                      "{TESTIMONIALS[testimonialIndex].review}"
                    </p>
                  </div>
                  <div className="pt-8 mt-8 border-t border-border/50 text-center">
                    <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">{TESTIMONIALS[testimonialIndex].business}</p>
                    <div>
                      <p className="text-white font-serif text-lg font-bold">{TESTIMONIALS[testimonialIndex].name}</p>
                      <p className="text-primary text-sm font-medium">{TESTIMONIALS[testimonialIndex].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <div className="flex justify-center gap-2 mt-8">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleManualAction(() => setTestimonialIndex(idx))}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      testimonialIndex === idx ? "w-6 bg-primary" : "bg-border"
                    )}
                  />
                ))}
              </div>
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
                <Link href="/contact">Let's Talk</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
