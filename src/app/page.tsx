import { HeroSection } from "@/components/sections/HeroSection";
import { AnimatedSectionWrapper } from "@/components/layout/AnimatedSectionWrapper";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { PROJECTS, SERVICES, TESTIMONIALS } from "@/utils/dummyData";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="flex flex-col w-full">
      <HeroSection />

      {/* Intro Section */}
      <AnimatedSectionWrapper className="bg-background pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <h2 className="text-3xl md:text-5xl font-light leading-tight mb-8">
                At KDM Construction, we specialize in delivering high-quality construction and real estate solutions tailored to your needs.
              </h2>
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-muted-foreground font-light leading-relaxed mb-8 text-lg">
                From personal home projects to commercial buildings, we handle every aspect of construction with precision and reliability. Our team ensures strong foundations, transparent work, and lasting results you can trust.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 uppercase tracking-widest text-sm font-medium hover:text-primary transition-colors relative group/link w-max"
              >
                <span>Read Our Story</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-foreground origin-left scale-x-0 transition-transform duration-300 group-hover/link:scale-x-100" />
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSectionWrapper>

      {/* Featured Projects */}
      <AnimatedSectionWrapper delay={0.1} className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-3xl md:text-5xl font-light">Selected Work</h2>
            <Link
              href="/projects"
              className="hidden md:inline-flex items-center gap-2 uppercase tracking-widest text-sm font-medium hover:text-primary transition-colors hover:underline underline-offset-4"
            >
              View All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {featuredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                className={index % 2 !== 0 ? "md:mt-24" : ""} 
                priority={index < 2}
              />
            ))}
          </div>
          
          <div className="mt-16 flex justify-center md:hidden">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 uppercase tracking-widest text-sm font-medium bg-foreground text-background px-8 py-4 w-full justify-center"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </AnimatedSectionWrapper>

      {/* Services Overview */}
      <AnimatedSectionWrapper delay={0.1} className="bg-muted/10 py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 lg:pr-12">
              <h2 className="text-3xl md:text-5xl font-light mb-6">Expertise</h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-8">
                A holistic approach to spaces. We integrate diverse disciplines to deliver seamless, comprehensive design solutions perfectly aligned with our clients&apos; vision.
              </p>
            </div>
            <div className="lg:col-span-8">
              {SERVICES.map((service, idx) => (
                <ServiceCard key={service.id} service={service} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </AnimatedSectionWrapper>

      {/* Testimonials */}
      <AnimatedSectionWrapper delay={0.1} className="py-32">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-16">Client Perspectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </AnimatedSectionWrapper>

      {/* CTA Section */}
      <AnimatedSectionWrapper delay={0.1} className="py-0 mb-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-foreground text-background p-12 md:p-24 text-center flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-light mb-8 max-w-3xl leading-tight">
              Ready to create something remarkable?
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-background text-foreground px-10 py-5 font-medium tracking-widest uppercase text-sm hover:bg-background/90 transition-colors"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </AnimatedSectionWrapper>
    </div>
  );
}
