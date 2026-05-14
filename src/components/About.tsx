"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" className="py-32 relative bg-background" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                The Intersection of <span className="text-gold">Engineering</span> and{" "}
                <span className="text-gold">Art</span>.
              </h2>
              <div className="space-y-6 text-foreground/80 text-lg font-light leading-relaxed">
                <p>
                  As an Electronics & Communication Engineering graduate, my foundation is built on precision, logic, and
                  understanding complex systems. But my passion lies in translating that precision into compelling visual
                  narratives.
                </p>
                <p>
                  Whether I am working with automotive brands, designing lighting for a commercial shoot, or capturing
                  the raw energy of a motorcycle on the track, I bring a unique, technical approach to creative
                  storytelling.
                </p>
                <p>
                  My work has allowed me to collaborate with industry leaders like{" "}
                  <span className="text-white font-medium">Motomads India</span>,{" "}
                  <span className="text-white font-medium">Wharp Films</span>,{" "}
                  <span className="text-white font-medium">Fastrack India Mangalore</span>, and{" "}
                  <span className="text-white font-medium">Royal Enfield</span>, blending industrial aesthetic with
                  cinematic emotion.
                </p>
              </div>

              {/* Recognitions */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <h3 className="text-sm uppercase tracking-widest text-gold mb-6 font-medium">Notable Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-graphite/40 p-5 rounded-lg border border-white/5 hover:border-gold/30 transition-colors">
                    <span className="block text-2xl mb-2">🏆</span>
                    <h4 className="text-white font-medium text-lg mb-1">Zayed National Museum</h4>
                    <p className="text-foreground/50 text-sm font-light">Winner for Photography</p>
                  </div>
                  <div className="bg-graphite/40 p-5 rounded-lg border border-white/5 hover:border-gold/30 transition-colors">
                    <span className="block text-2xl mb-2">🏎️</span>
                    <h4 className="text-white font-medium text-lg mb-1">Ferrari World</h4>
                    <p className="text-foreground/50 text-sm font-light">Featured Page Photography</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="md:w-1/2 relative h-[600px] w-full">
            <motion.div style={{ y }} className="w-full h-full relative">
              {/* Main Image */}
              <div className="absolute inset-0 bg-graphite rounded-sm overflow-hidden border border-white/5">
                <Image
                  src="/profile.jpg"
                  alt="Ahmed Nidhal"
                  fill
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="w-full h-full bg-gradient-to-tr from-black/40 to-transparent absolute z-10 pointer-events-none" />
              </div>
              
              {/* Premium Experience Badge */}
              <div className="absolute -bottom-6 -left-6 bg-background/80 backdrop-blur-md border border-white/10 p-6 rounded-lg shadow-2xl z-20 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold border border-gold/20">
                    <span className="text-xl">🎥</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">6+ Years</p>
                    <p className="text-foreground/50 text-xs uppercase tracking-widest">Experience</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
