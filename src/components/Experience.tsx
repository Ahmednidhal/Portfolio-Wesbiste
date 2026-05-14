"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Content Creator",
    company: "Freelance & Collaborations",
    period: "Past 6 Years",
    description: "Leading creative direction for automotive campaigns, overseeing video production, and managing post-production workflows.",
  },
  {
    role: "Industrial Automation Trainee",
    company: "SkillDrize",
    period: "Feb 2026 - May 2026",
    description: "Hands-on experience with PLCs, industrial control systems, and automated manufacturing processes.",
  },
  {
    role: "Embedded Systems Trainee",
    company: "Pantech Solutions",
    period: "Sept 2025 - Dec 2025",
    description: "Developed and debugged microcontroller-based projects, focusing on IoT and hardware integration.",
  },
  {
    role: "Engineering Graduate",
    company: "Yenepoya Institute of Technology",
    period: "Education",
    description: "Bachelors Degree in Electronics & Communication Engineering. Built a strong foundation in hardware, logic design, and analytical problem-solving.",
  },
];

export default function Experience() {
  const lineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current || !containerRef.current) return;

    const items = gsap.utils.toArray(".timeline-item");

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 50%",
      end: "bottom 50%",
      animation: gsap.to(lineRef.current, {
        height: "100%",
        ease: "none",
      }),
      scrub: 1,
    });

    items.forEach((item: any, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 70%",
          },
        }
      );
    });
  }, []);

  return (
    <section id="experience" className="py-32 bg-matte-black relative border-t border-white/5" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">Journey & Experience</h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Animated Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden md:block" />
          <div
            ref={lineRef}
            className="absolute left-1/2 top-0 w-[2px] bg-gold -translate-x-1/2 hidden md:block h-0 origin-top shadow-[0_0_15px_rgba(197,160,89,0.5)]"
          />

          <div className="space-y-16">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`timeline-item flex flex-col md:flex-row items-center justify-between w-full ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-5/12" />
                <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-background border-2 border-gold shadow-[0_0_10px_rgba(197,160,89,0.5)] mb-6 md:mb-0">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                </div>
                <div className={`w-full md:w-5/12 bg-graphite/30 p-8 rounded-lg border border-white/5 hover:border-gold/30 transition-colors ${idx % 2 === 0 ? "md:text-right" : ""}`}>
                  <span className="text-gold text-sm font-bold tracking-widest mb-2 block">{exp.period}</span>
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <h4 className="text-foreground/70 mb-4">{exp.company}</h4>
                  <p className="text-foreground/50 font-light text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
