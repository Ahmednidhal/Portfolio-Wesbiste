"use client";

import { motion, Variants } from "framer-motion";
import { Cpu, Camera, Video, PenTool, MonitorPlay, Zap, Settings, Eye } from "lucide-react";

const engineeringSkills = [
  { name: "PLC & Industrial Automation", icon: <Settings className="w-6 h-6" /> },
  { name: "Embedded Systems", icon: <Cpu className="w-6 h-6" /> },
  { name: "Hardware Troubleshooting", icon: <Zap className="w-6 h-6" /> },
  { name: "Industrial Control Systems", icon: <MonitorPlay className="w-6 h-6" /> },
];

const creativeSkills = [
  { name: "Automotive Cinematography", icon: <Video className="w-6 h-6" /> },
  { name: "Photography & Color Grading", icon: <Camera className="w-6 h-6" /> },
  { name: "Poster Designing", icon: <PenTool className="w-6 h-6" /> },
  { name: "Brand Storytelling", icon: <Eye className="w-6 h-6" /> },
];

export default function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <section id="skills" className="py-32 bg-matte-black relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Competencies</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto font-light">
            A unique dual-skillset bridging the gap between rigorous technical systems and evocative visual media.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Engineering */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3 text-silver">
              <Cpu className="text-gold" /> Engineering & Technical
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {engineeringSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="p-6 rounded-lg bg-graphite/50 border border-white/5 hover:border-gold/30 hover:bg-graphite transition-all duration-300 group"
                >
                  <div className="text-foreground/50 group-hover:text-gold transition-colors mb-4">
                    {skill.icon}
                  </div>
                  <h4 className="font-medium text-sm tracking-wide">{skill.name}</h4>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Creative */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3 text-silver">
              <Camera className="text-gold" /> Creative & Media
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {creativeSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="p-6 rounded-lg bg-graphite/50 border border-white/5 hover:border-gold/30 hover:bg-graphite transition-all duration-300 group"
                >
                  <div className="text-foreground/50 group-hover:text-gold transition-colors mb-4">
                    {skill.icon}
                  </div>
                  <h4 className="font-medium text-sm tracking-wide">{skill.name}</h4>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
