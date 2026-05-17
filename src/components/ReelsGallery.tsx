"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reels = [
  { id: 1, title: "Hycross Cinematic", videoSrc: "/assets/reels/hycross.mov" },
  { id: 2, title: "Prado 4x4", videoSrc: "/assets/reels/prad4x4.MOV" },
  { id: 3, title: "Cinematic Reel 01", videoSrc: "/assets/reels/reel1.MP4" },
  { id: 4, title: "Cinematic Reel 02", videoSrc: "/assets/reels/reel2.MP4" },
  { id: 5, title: "VW Showcase", videoSrc: "/assets/reels/vw.mov" },
];

export default function ReelsGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-screen w-full bg-background relative overflow-hidden flex items-center">
      {/* Background dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-black/50 to-background pointer-events-none z-0" />
      
      <div className="absolute top-12 left-6 md:left-12 z-10">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase mix-blend-difference">
          Cinematic Reels
        </h2>
        <p className="text-gold uppercase tracking-widest text-sm mt-2 font-medium">15 Selected Cuts</p>
      </div>

      <div ref={trackRef} className="flex gap-8 px-6 md:px-32 items-center h-full pt-16 z-10 w-max">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="group relative w-[300px] md:w-[400px] aspect-[9/16] bg-graphite rounded-xl overflow-hidden cursor-pointer border border-white/5 flex-shrink-0 transition-transform duration-500 hover:scale-[1.02]"
          >
            {/* Video Placeholder or actual video */}
            {reel.videoSrc ? (
              <video
                src={reel.videoSrc}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
                preload="metadata"
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-graphite to-matte-black">
                <span className="text-white/10 font-mono text-xs rotate-90 tracking-widest">[REEL_{reel.id}_PLACEHOLDER]</span>
              </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
               <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm bg-black/20 text-white">
                  <Play className="w-6 h-6 ml-1" />
               </div>
            </div>

            {/* Info */}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/60 to-transparent">
              <span className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase mb-1 block">
                0{reel.id} // 15
              </span>
              <h3 className="text-lg font-bold text-white tracking-wide">{reel.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
