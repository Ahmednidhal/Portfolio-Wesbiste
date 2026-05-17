"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "Wharp Corp", category: "Automotive Shop, Kerala" },
  { name: "PRAD 4x4", category: "Automotive" },
  { name: "Fast Track India", category: "Brand" },
  { name: "Royal Enfield", category: "Motorcycle Brand" },
  { name: "Motomads India", category: "Automotive Community" },
];

export default function ClientLogos() {
  return (
    <section className="py-24 bg-background border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Brands I've Worked With</h2>
          <p className="text-foreground/60 font-light max-w-2xl mx-auto">
            Helping brands grow their digital presence through high-impact visual storytelling, commercial photography, and poster design.
          </p>
        </div>

        {/* Highlighted Brand */}
        <div className="flex justify-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col items-center p-10 md:p-12 bg-graphite/40 rounded-3xl border border-gold/40 shadow-[0_0_40px_rgba(197,160,89,0.1)] w-full max-w-2xl relative group"
          >
            <div className="absolute -top-4 bg-gold text-background text-xs font-bold px-6 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
              Featured Client
            </div>
            
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white flex items-center justify-center mb-8 shadow-2xl overflow-hidden relative p-4">
              <img 
                src="/assets/wasfah.jpg" 
                alt="Wasfah Clothing Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<span class="text-black font-serif text-3xl font-bold tracking-tighter">W</span>';
                }}
              />
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">Wasfah Clothing</h3>
            <p className="text-gold text-sm tracking-[0.2em] uppercase font-semibold mb-6">UAE Clothing Brand</p>
            <p className="text-foreground/70 text-center max-w-md font-light leading-relaxed">
              Leading the creative direction for social media growth, including commercial videography and high-impact poster designs to elevate their brand identity.
            </p>
          </motion.div>
        </div>

        {/* Other Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
           {clients.map((client, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
               viewport={{ once: true }}
               className="flex flex-col items-center justify-center p-8 bg-graphite/20 rounded-2xl border border-white/5 hover:border-gold/30 hover:bg-graphite/40 transition-all duration-300 h-40 group cursor-pointer"
             >
                <span className="text-xl md:text-2xl font-bold text-white mb-2 text-center group-hover:scale-105 transition-transform duration-300">{client.name}</span>
                <span className="text-xs text-foreground/50 uppercase tracking-widest text-center">{client.category}</span>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
