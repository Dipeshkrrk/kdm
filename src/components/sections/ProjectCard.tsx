import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/utils/dummyData";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
  priority?: boolean;
}

export function ProjectCard({ project, className, priority = false }: ProjectCardProps) {
  return (
    <Link 
      href={`/projects/${project.slug}`}
      className={cn("group block w-full relative overflow-hidden", className)}
    >
      <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-muted">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/40" />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end opacity-0 translate-y-4 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:opacity-100 group-hover:translate-y-0 text-white">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-sm font-medium tracking-widest uppercase mb-2 text-white/80">
                {project.category}
              </p>
              <h3 className="text-2xl font-light tracking-wide">{project.title}</h3>
            </div>
            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-colors duration-500">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Default Content (Visible normally, hidden on hover for some designs, but here we keep it simple below) */}
      <div className="mt-4 flex justify-between items-start md:hidden">
        <div>
          <h3 className="text-lg font-medium">{project.title}</h3>
          <p className="text-sm text-muted-foreground">{project.category}</p>
        </div>
      </div>
    </Link>
  );
}
