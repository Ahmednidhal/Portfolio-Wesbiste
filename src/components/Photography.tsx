"use client";

import { motion } from "framer-motion";

const photos = [
  { id: 1, title: "BMW", imageSrc: "/assets/photos/BMW.JPG", aspectRatio: "aspect-[4/3]" },
  { id: 2, title: "Automotive 01", imageSrc: "/assets/photos/IMG_0259.JPG", aspectRatio: "aspect-square" },
  { id: 3, title: "Automotive 02", imageSrc: "/assets/photos/IMG_0264 2.JPG", aspectRatio: "aspect-[3/4]" },
  { id: 4, title: "Automotive 03", imageSrc: "/assets/photos/IMG_4052.JPG", aspectRatio: "aspect-[4/3]" },
  { id: 5, title: "Automotive 04", imageSrc: "/assets/photos/IMG_8473.JPG", aspectRatio: "aspect-square" },
  { id: 6, title: "Automotive 05", imageSrc: "/assets/photos/IMG_9002.JPG", aspectRatio: "aspect-[3/4]" },
  { id: 7, title: "Automotive 06", imageSrc: "/assets/photos/IMG_9005.JPG", aspectRatio: "aspect-[4/3]" },
  { id: 8, title: "Rolls Royce", imageSrc: "/assets/photos/RR.JPG", aspectRatio: "aspect-square" },
  { id: 9, title: "Fortuner", imageSrc: "/assets/photos/fortuner.JPG", aspectRatio: "aspect-[3/4]" },
  { id: 10, title: "Lamborghini", imageSrc: "/assets/photos/lambo.JPG", aspectRatio: "aspect-[4/3]" },
  { id: 11, title: "Toyota", imageSrc: "/assets/photos/toyota.JPG", aspectRatio: "aspect-square" },
];

export default function Photography() {
  return (
    <section id="photography" className="py-32 bg-matte-black relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase mb-4">
            Photography
          </h2>
          <p className="text-gold uppercase tracking-widest text-sm font-medium">Visual Storytelling & Captures</p>
        </div>

        {/* Masonry Grid Simulation using CSS columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: (index % 5) * 0.1 }}
              className={`group relative w-full ${photo.aspectRatio} bg-graphite rounded-xl overflow-hidden cursor-pointer border border-white/5 break-inside-avoid`}
            >
              {/* Image Placeholder or Actual Image */}
              {photo.imageSrc ? (
                <img
                  src={photo.imageSrc}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-graphite to-matte-black transition-transform duration-700 group-hover:scale-105">
                  <span className="text-white/10 font-mono text-xs tracking-widest">[PHOTO_{photo.id}_PLACEHOLDER]</span>
                </div>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
