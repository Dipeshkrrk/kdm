import { AnimatedSectionWrapper } from "@/components/layout/AnimatedSectionWrapper";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { SERVICES } from "@/utils/dummyData";

export const metadata = {
  title: "Services | KDM Construction",
  description: "Explore our range of construction and real estate solutions, from home construction to turnkey projects.",
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20 w-full min-h-screen bg-muted/10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <AnimatedSectionWrapper className="pt-0 pb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light max-w-4xl mb-8 leading-tight">
            Quality construction solutions.
          </h1>
          <p className="text-lg md:text-xl font-light text-muted-foreground max-w-2xl">
            We offer comprehensive services ranging from individual home construction and material contracting to large-scale commercial and industrial developments.
          </p>
        </AnimatedSectionWrapper>

        {/* Services List */}
        <AnimatedSectionWrapper delay={0.1} className="py-0">
          <div className="bg-background p-8 md:p-16 lg:p-24 shadow-sm border border-border/50">
            {SERVICES.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                index={index} 
                className={index === 0 ? "border-t-0 pt-0" : ""}
              />
            ))}
          </div>
        </AnimatedSectionWrapper>
      </div>
    </div>
  );
}
