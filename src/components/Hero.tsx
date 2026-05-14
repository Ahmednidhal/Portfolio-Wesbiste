"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";
import { motion } from "framer-motion";
import gsap from "gsap";

function ParticleBackground(props: any) {
  const ref = useRef<any>(null);
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#c5a059" // Gold
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power4.out", delay: 0.5 }
      );
    }
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ParticleBackground />
        </Canvas>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center text-center px-4" ref={containerRef}>
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0em" }}
          animate={{ opacity: 1, letterSpacing: "0.2em" }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="text-gold uppercase text-sm tracking-widest mb-4 font-medium"
        >
          Cinematic Portfolio
        </motion.p>

        <h1 ref={titleRef} className="text-5xl md:text-8xl font-bold tracking-tighter text-foreground mb-6">
          AHMED NIDHAL
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="h-[30px] overflow-hidden flex justify-center items-center"
        >
          <motion.div
            animate={{ y: [0, -30, -60, -90, -120, 0] }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-col text-lg md:text-2xl font-light text-foreground/80 text-center"
          >
            <span className="h-[30px] flex items-center justify-center">Electronics Engineer</span>
            <span className="h-[30px] flex items-center justify-center">Automotive Filmmaker</span>
            <span className="h-[30px] flex items-center justify-center">Visual Creator</span>
            <span className="h-[30px] flex items-center justify-center">Cinematic Storyteller</span>
            <span className="h-[30px] flex items-center justify-center">Creative Editor</span>
            <span className="h-[30px] flex items-center justify-center">Electronics Engineer</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12 flex space-x-6"
        >
          <a
            href="#portfolio"
            className="px-8 py-3 rounded-full border border-gold text-gold hover:bg-gold hover:text-background transition-all duration-300 tracking-wide text-sm"
          >
            Explore Portfolio
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-foreground text-background hover:bg-foreground/80 transition-all duration-300 tracking-wide text-sm"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.3em] text-foreground/40 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-gold/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
