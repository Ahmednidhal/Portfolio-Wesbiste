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
                  As an <span className="text-white font-medium">Electronics & Communication Engineering</span> graduate, I approach visual storytelling with the mindset of an engineer—valuing precision, logic, and the intricate details of complex systems.
                </p>
                <p>
                  Beyond the automotive world, I specialize in commercial videography and photography, helping brands grow their presence on social media platforms. From cinematic brand films to high-impact <span className="text-white font-medium">Poster Designing</span>, I provide full-spectrum creative services to elevate their visual identity.
                </p>
                <p>
                  Currently serving as the <span className="text-white font-medium">Content Head at Wharp Films</span>, I have had the privilege to work with renowned brands like <span className="text-white font-medium">Royal Enfield</span>, <span className="text-white font-medium">Motomads</span>, <span className="text-white font-medium">Fast Track India</span>, and others. My visual work has also achieved international recognition—winning a photography competition at the <span className="text-white font-medium">Sheikh Zayed Museum</span> and being officially featured by <span className="text-white font-medium">Ferrari World Abu Dhabi</span>.
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
