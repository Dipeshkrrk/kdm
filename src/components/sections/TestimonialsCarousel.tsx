"use client";

import { useEffect, useRef, useState } from "react";
import { TestimonialCard } from "./TestimonialCard";
import { Testimonial } from "@/utils/dummyData";

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let intervalId: NodeJS.Timeout;

    const startScroll = () => {
      intervalId = setInterval(() => {
        if (isHovered) return;
        
        // Only auto-scroll on mobile (where scroll width is larger than client width)
        if (scrollContainer.scrollWidth > scrollContainer.clientWidth) {
          const cardWidth = scrollContainer.scrollWidth / testimonials.length;
          const currentScroll = scrollContainer.scrollLeft;
          const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
          
          let nextScroll = currentScroll + cardWidth;
          
          if (nextScroll >= maxScroll + 10) { // small buffer
            nextScroll = 0;
          }
          
          scrollContainer.scrollTo({
            left: nextScroll,
            behavior: "smooth"
          });
        }
      }, 2000); // 2 seconds
    };

    startScroll();

    return () => clearInterval(intervalId);
  }, [isHovered, testimonials.length]);

  return (
    <div 
      className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
      ref={scrollRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      {testimonials.map((testimonial) => (
        <div 
          key={testimonial.id} 
          className="w-[85vw] md:w-auto snap-center flex-shrink-0 flex h-auto"
        >
          <TestimonialCard testimonial={testimonial} className="w-full" />
        </div>
      ))}
    </div>
  );
}
