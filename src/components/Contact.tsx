"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Send } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { icon: <FaInstagram size={20} />, href: "https://www.instagram.com/binanwar_23?igsh=MTI4d2E1cnlxOHNybw%3D%3D&utm_source=qr", label: "Instagram" },
  { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/ahmed-nidhal?utm_source=share_via&utm_content=profile&utm_medium=member_ios", label: "LinkedIn" },
  { icon: <MessageCircle size={20} />, href: "https://wa.me/919567985149", label: "WhatsApp" },
  { icon: <Mail size={20} />, href: "mailto:contactnidhal05@gmail.com", label: "Email" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Let's Create Something <span className="text-gold italic">Extraordinary.</span></h2>
            <p className="text-foreground/70 font-light text-lg mb-12 max-w-md">
              Whether it's an automotive film, a commercial project, or exploring the intersection of electronics and media, I'm always open to new collaborations.
            </p>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 rounded-full bg-graphite/50 border border-white/10 flex items-center justify-center text-foreground/70 hover:text-gold hover:border-gold/50 transition-colors shadow-lg hover:shadow-[0_0_15px_rgba(197,160,89,0.3)]"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <form className="space-y-6 bg-graphite/30 p-8 md:p-10 rounded-xl border border-white/5 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs tracking-widest text-foreground/50 uppercase">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-gold transition-colors text-foreground"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs tracking-widest text-foreground/50 uppercase">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-gold transition-colors text-foreground"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs tracking-widest text-foreground/50 uppercase">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-gold transition-colors text-foreground"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs tracking-widest text-foreground/50 uppercase">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-gold transition-colors text-foreground resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="button"
                className="w-full py-4 bg-foreground text-background rounded-sm font-medium tracking-wide hover:bg-gold transition-colors flex items-center justify-center gap-2 group mt-8"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
