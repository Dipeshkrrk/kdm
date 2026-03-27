import { Service } from "@/utils/dummyData";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  service: Service;
  index: number;
  className?: string;
}

export function ServiceCard({ service, index, className }: ServiceCardProps) {
  return (
    <div className={cn("group flex flex-col border-t border-border py-8 md:py-12 transition-colors hover:bg-muted/30 px-4 md:px-8 -mx-4 md:-mx-8", className)}>
      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12 lg:gap-24">
        <div className="flex-shrink-0 w-12 text-muted-foreground font-light text-sm">
          {(index + 1).toString().padStart(2, '0')}
        </div>
        
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-light tracking-wide mb-4 transition-colors group-hover:text-primary">
            {service.title}
          </h3>
          <p className="text-muted-foreground font-light leading-relaxed max-w-2xl mb-8">
            {service.description}
          </p>
          
          <Link 
            href="/services" 
            className="inline-flex items-center text-sm font-medium tracking-widest uppercase gap-2 relative overflow-hidden group/link"
          >
            <span className="relative z-10 transition-transform duration-300 group-hover/link:-translate-x-1">Explore</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground origin-left scale-x-0 transition-transform duration-300 group-hover/link:scale-x-100" />
          </Link>
        </div>
      </div>
    </div>
  );
}
