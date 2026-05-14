"use client";

import { motion } from "framer-motion";
import { Cpu, Eye, Activity } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Real-Time Drug Detection via Ocular Analysis",
    period: "Final Year Academic Project",
    context: "Developed in response to the rapid increase in substance abuse among teenagers.",
    description: "An advanced hardware-software integration designed to analyze eye movements and pupil dilation in real-time to detect potential drug or chemical influence. Prioritizes non-invasive, rapid screening.",
    icon: <Eye className="w-6 h-6 text-gold" />,
    tech: ["Computer Vision", "Real-time Processing", "Sensors", "Hardware Integration"],
  },
  {
    id: 2,
    title: "Automated Object Sorting & Counting Machine",
    period: "Academic Project",
    context: "Industrial Automation Focus",
    description: "Designed and implemented a fully functional sorting machine utilizing a Programmable Logic Controller (PLC). The system accurately identifies, sorts, and counts objects based on predefined parameters, simulating a real-world manufacturing environment.",
    icon: <Cpu className="w-6 h-6 text-gold" />,
    tech: ["PLC Programming", "Industrial Automation", "Actuators", "Logic Design"],
  },
];

export default function Portfolio() {
  return (
    <section id="academic-projects" className="py-32 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Academic Projects</h2>
          <p className="text-foreground/60 max-w-xl font-light">
            Highlighting key engineering projects focused on hardware integration, automation, and real-world problem solving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-graphite/30 rounded-2xl p-8 md:p-12 border border-white/5 hover:border-gold/30 transition-colors overflow-hidden"
            >
              {/* Background abstract tech element */}
              <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <Activity className="w-64 h-64 text-gold" />
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-background border border-white/10 flex items-center justify-center mb-8 shadow-lg">
                  {project.icon}
                </div>
                
                <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
                  {project.period}
                </span>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
                  {project.title}
                </h3>
                
                <p className="text-foreground/80 font-medium mb-4">
                  {project.context}
                </p>
                
                <p className="text-foreground/50 font-light text-sm leading-relaxed mb-8">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-background border border-white/5 rounded-full text-xs text-foreground/70 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
