import { Testimonial } from "@/utils/dummyData";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <div className={cn("flex flex-col h-full bg-muted/30 p-6 md:p-10 relative", className)}>
      <Quote className="w-8 h-8 md:w-10 md:h-10 text-muted-foreground/20 absolute top-6 right-6 md:top-8 md:right-8" />
      
      <div className="flex-1 flex items-center mb-6 pt-4">
        <p className="text-base md:text-lg font-light leading-relaxed text-foreground/90">
          &quot;{testimonial.content}&quot;
        </p>
      </div>
      
      <div className="mt-auto">
        <hr className="border-border mb-6" />
        <p className="font-medium tracking-wide">{testimonial.name}</p>
        <p className="text-sm text-muted-foreground">
          {testimonial.role}, {testimonial.company}
        </p>
      </div>
    </div>
  );
}
