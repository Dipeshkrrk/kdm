import Image from "next/image";
import { AnimatedSectionWrapper } from "@/components/layout/AnimatedSectionWrapper";

export const metadata = {
  title: "About | KDM Construction",
  description: "Learn about the mission, values, and expert team at KDM Real Estate Builder & Construction Company.",
};

const TEAM = [
  {
    name: "Marcus Thorne",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Elena Rostova",
    role: "Director of Interior Design",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "David Chen",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 w-full">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <AnimatedSectionWrapper className="pt-0 pb-16 md:pb-24">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 max-w-4xl leading-tight">
            We are a collective of dreamers and builders, into building and real estate for the past 18+ years.
          </h1>
          <div className="w-full relative aspect-video bg-muted mb-16">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="KDM Construction Office"
              fill
              priority
              className="object-cover"
            />
          </div>
        </AnimatedSectionWrapper>

        {/* Philosophy */}
        <AnimatedSectionWrapper delay={0.1} className="py-16 md:py-24 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-2xl uppercase tracking-widest font-medium text-muted-foreground">Philosophy</h2>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-8 text-lg md:text-xl font-light leading-relaxed text-foreground/90">
              <p>
                At KDM Construction, we believe that a building is more than just a structure; it's a foundation for dreams and a testament to quality. We handle every aspect of construction with precision, ensuring that from personal homes to industrial projects, excellence is the standard.
              </p>
              <p>
                Our process is built on transparency, reliability, and on-time delivery. We manage complex projects through a team of skilled professionals dedicated to creating lasting results that exceed client expectations.
              </p>
            </div>
          </div>
        </AnimatedSectionWrapper>

        {/* Team */}
        <AnimatedSectionWrapper delay={0.1} className="py-16 md:py-24 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-4">
              <h2 className="text-2xl uppercase tracking-widest font-medium text-muted-foreground">Leadership</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/90">
                A diverse team of architects, designers, and urban planners united by a shared dedication to excellence.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {TEAM.map((member, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-muted">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-medium tracking-wide mb-1">{member.name}</h3>
                <p className="text-muted-foreground font-light">{member.role}</p>
              </div>
            ))}
          </div>
        </AnimatedSectionWrapper>

      </div>
    </div>
  );
}
