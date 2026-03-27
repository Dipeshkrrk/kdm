import Image from "next/image";
import { notFound } from "next/navigation";
import { AnimatedSectionWrapper } from "@/components/layout/AnimatedSectionWrapper";
import { PROJECTS } from "@/utils/dummyData";

// Required for Next.js App Router static generation of dynamic routes
export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  
  if (!project) {
    return { title: 'Project Not Found | KDM Construction' };
  }

  return {
    title: `${project.title} | KDM Construction Works`,
    description: project.description,
  };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative h-[70vh] w-full mt-24">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      <div className="container mx-auto px-6 md:px-12 py-20 pb-0">
        <AnimatedSectionWrapper className="pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Title & Description */}
            <div className="lg:col-span-8">
              <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4 block">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-light mb-8 loading-tight">
                {project.title}
              </h1>
              <p className="text-lg md:text-2xl font-light leading-relaxed text-foreground/90 mb-12">
                {project.description}
              </p>
            </div>

            {/* Facts Grid */}
            <div className="lg:col-span-4 lg:pt-16">
              <div className="grid grid-cols-2 gap-8 py-8 border-t border-border">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Location</h4>
                  <p className="font-medium">{project.location}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Year</h4>
                  <p className="font-medium">{project.year}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Client</h4>
                  <p className="font-medium">{project.client}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Area</h4>
                  <p className="font-medium">{project.area}</p>
                </div>
              </div>
            </div>

          </div>
        </AnimatedSectionWrapper>

        {/* Gallery */}
        <AnimatedSectionWrapper className="py-20 border-t border-border">
          <h2 className="text-2xl font-light mb-12">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {project.gallery.map((img, idx) => (
              <div 
                key={idx} 
                className={`relative bg-muted ${idx % 3 === 0 ? "md:col-span-2 aspect-[21/9]" : "aspect-[4/5]"}`}
              >
                <Image
                  src={img}
                  alt={`${project.title} gallery image ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </AnimatedSectionWrapper>
      </div>
    </div>
  );
}
