import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/projects/he.png" // Real KDM project image
          alt="KDM Construction Project"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-[1.02] animate-ken-burns"
        />
        {/* Fine dark overlay for text readability but still feeling bright/premium */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 md:px-12 flex flex-col items-start justify-center text-white h-full mt-16">
        <div className="max-w-4xl animate-fade-in-up">
          <p className="text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-6 text-white/80">
            Shaping the Future
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.1] mb-8">
            Architecture for the <br className="hidden md:block" />
            <span className="font-medium">Modern World.</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl text-white/90 mb-12 leading-relaxed">
            We design minimalist, sustainable, and powerful spaces that elevate human experience and endure through generations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/projects"
              className="group flex items-center justify-center gap-3 bg-white text-black px-8 py-4 font-medium tracking-wide uppercase text-sm hover:bg-white/90 transition-colors"
            >
              Explore Our Work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="flex items-center justify-center gap-3 bg-transparent border border-white text-white px-8 py-4 font-medium tracking-wide uppercase text-sm hover:bg-white hover:text-black transition-colors"
            >
              Our Philosophy
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4 animate-fade-in opacity-80">
        <span className="text-xs uppercase tracking-[0.3em] text-white">Scroll</span>
        <div className="w-[1px] h-16 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
