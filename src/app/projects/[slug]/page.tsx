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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.slug === resolvedParams.slug);
  
  if (!project) {
    return { title: 'Project Not Found | KDM Construction' };
  }

  return {
    title: `${project.title} | KDM Construction Works`,
    description: project.description,
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.slug === resolvedParams.slug);

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

        {/* Detailed Placeholder Sections */}
        <AnimatedSectionWrapper className="py-20 border-t border-border">
          {project.gallery[0] && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-32">
              <div>
                <h2 className="text-3xl font-light mb-6">Concept & Approach</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="relative aspect-[4/5] lg:aspect-square bg-muted w-full">
                <Image
                  src={project.gallery[0]}
                  alt={`${project.title} Concept`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}

          {project.gallery[1] && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-32">
              <div className="order-2 lg:order-1 relative aspect-[16/9] lg:aspect-[4/3] bg-muted w-full">
                <Image
                  src={project.gallery[1]}
                  alt={`${project.title} Design`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-light mb-6">Design Process</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                </p>
                <ul className="list-disc pl-5 text-lg text-muted-foreground leading-relaxed space-y-2">
                  <li>Innovative spatial planning and flow mapping</li>
                  <li>Sustainable material selection and sourcing</li>
                  <li>Integration of natural light and ventilation</li>
                  <li>Custom millwork and bespoke interior elements</li>
                </ul>
              </div>
            </div>
          )}

          {project.gallery[2] && (
            <div className="mb-32">
              <div className="relative aspect-[21/9] bg-muted w-full mb-12">
                <Image
                  src={project.gallery[2]}
                  alt={`${project.title} Execution`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-light mb-6">Execution & Details</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                </p>
              </div>
            </div>
          )}
        </AnimatedSectionWrapper>

        {/* Remaining Gallery */}
        {project.gallery.length > 3 && (
          <AnimatedSectionWrapper className="py-20 border-t border-border">
            <h2 className="text-2xl font-light mb-12">Additional Views</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {project.gallery.slice(3).map((img, idx) => (
                <div 
                  key={idx} 
                  className={`relative bg-muted ${idx % 3 === 0 ? "md:col-span-2 aspect-[21/9]" : "aspect-[4/5]"}`}
                >
                  <Image
                    src={img}
                    alt={`${project.title} additional image ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </AnimatedSectionWrapper>
        )}
      </div>
    </div>
  );
}
