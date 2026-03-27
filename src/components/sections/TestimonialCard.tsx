import { Testimonial } from "@/utils/dummyData";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <div className={cn("flex flex-col h-full bg-muted/30 p-8 md:p-12 relative", className)}>
      <Quote className="w-10 h-10 text-muted-foreground/20 absolute top-8 right-8" />
      
      <div className="flex-1 flex items-center mb-8 pt-4">
        <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/90">
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
