"use client";

import { AnimatedSectionWrapper } from "@/components/layout/AnimatedSectionWrapper";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { PROJECTS } from "@/utils/dummyData";

export default function ProjectsPage() {
  const filteredProjects = PROJECTS;

  return (
    <div className="pt-32 pb-20 w-full min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <AnimatedSectionWrapper className="pt-0 pb-12 md:pb-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8">Selected Works</h1>
          <p className="text-lg md:text-xl font-light text-muted-foreground max-w-2xl">
            A comprehensive anthology of our projects spanning residential, cultural, and commercial scales.
          </p>
        </AnimatedSectionWrapper>

        {/* Grid */}
        <AnimatedSectionWrapper delay={0.1} className="py-0">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  priority={index < 3}
                />
              ))}
            </div>
          ) : (
            <div className="py-32 text-center text-muted-foreground font-light text-lg">
              No projects found in this category.
            </div>
          )}
        </AnimatedSectionWrapper>

      </div>
    </div>
  );
}
