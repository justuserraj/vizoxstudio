"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Info, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface CaseStudy {
  overview: string;
  designApproach: string;
  features: string[];
  screenshots: string[];
}

export interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  liveUrl: string;
  alt: string;
  techStack: string[];
  caseStudy: CaseStudy;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  React.useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === project.caseStudy.screenshots.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? project.caseStudy.screenshots.length - 1 : prev - 1));
  };

  return (
    <>
      <div 
        className="group cursor-pointer block"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative overflow-hidden rounded-[16px] mb-6 aspect-square shadow-lg border border-border/50 bg-surface">
          {/* Information Overlay */}
          <div className="absolute inset-0 bg-primary/60 backdrop-blur-md z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-8 text-center">
            <motion.h4 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="text-white font-serif text-2xl font-bold tracking-wide mb-2"
            >
              {project.title}
            </motion.h4>
            <p className="text-white/90 text-sm mb-4 line-clamp-3">
              {project.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {project.techStack.slice(0, 3).map((tech, i) => (
                <span key={i} className="px-2 py-0.5 rounded-full bg-white/20 border border-white/20 text-white text-[10px] uppercase tracking-wider font-medium">
                  {tech}
                </span>
              ))}
              {project.techStack.length > 3 && (
                <span className="px-2 py-0.5 rounded-full bg-white/20 border border-white/20 text-white text-[10px] uppercase tracking-wider font-medium">
                  +{project.techStack.length - 3}
                </span>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-[240px]">
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-white/40 bg-white/10 text-white hover:bg-white hover:text-primary h-10 px-4 flex-1 shadow-lg backdrop-blur-md"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Site
              </a>
              <button 
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-white text-primary hover:bg-white/90 h-10 px-4 flex-1 shadow-lg font-bold"
              >
                <Info className="mr-2 h-4 w-4" />
                Case Study
              </button>
            </div>
          </div>

          <Image
            src={project.image}
            alt={project.alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <div className="flex flex-wrap gap-2 mb-1">
            {project.techStack.map((tech, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-semibold uppercase tracking-wider">
                {tech}
              </span>
            ))}
          </div>
          <p className="text-muted-foreground text-sm mt-3 line-clamp-2">{project.description}</p>
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-background/90 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-surface border border-border shadow-2xl no-scrollbar"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 z-50 p-2 rounded-full bg-background/50 border border-border text-white hover:bg-primary transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Gallery Section */}
                <div className="relative bg-black aspect-video lg:aspect-auto min-h-[400px]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={project.caseStudy.screenshots[currentSlide]}
                          alt={`${project.title} screenshot ${currentSlide + 1}`}
                          fill
                          className="object-contain"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {project.caseStudy.screenshots.length > 1 && (
                    <>
                      <button 
                        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-md transition-all"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-md transition-all"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                      
                      {/* Dots */}
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                        {project.caseStudy.screenshots.map((_, i) => (
                          <button
                            key={i}
                            onClick={(e) => { e.stopPropagation(); setCurrentSlide(i); }}
                            className={`w-2 h-2 rounded-full transition-all ${i === currentSlide ? 'w-6 bg-primary' : 'bg-white/40'}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12 overflow-y-auto">
                  <div className="mb-8">
                    <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-2 block">{project.category}</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 leading-tight">{project.title}</h2>
                  </div>

                  <div className="space-y-8">
                    <section>
                      <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                        <span className="w-8 h-px bg-primary mr-3" />
                        Project Overview
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.caseStudy.overview}
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                        <span className="w-8 h-px bg-primary mr-3" />
                        Design Approach
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.caseStudy.designApproach}
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                        <span className="w-8 h-px bg-primary mr-3" />
                        Features Implemented
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.caseStudy.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-muted-foreground text-sm">
                            <span className="mr-2 text-primary text-lg">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <div className="pt-8 border-t border-border mt-10">
                      <Button size="lg" className="w-full sm:w-auto h-14 px-10 text-lg group" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          View Live Project
                          <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
