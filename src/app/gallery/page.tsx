import Image from "next/image";
import { AnimatedSectionWrapper } from "@/components/layout/AnimatedSectionWrapper";
import { PROJECTS } from "@/utils/dummyData";

export const metadata = {
  title: "Gallery | KDM Construction",
  description: "A visual collection of our construction details, structural elements, and project highlights.",
};

export default function GalleryPage() {
  // Aggregate all images from projects for a massive gallery
  const allImages = PROJECTS.flatMap((p) => [p.coverImage, ...p.gallery]);

  return (
    <div className="pt-32 pb-20 w-full min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <AnimatedSectionWrapper className="pt-0 pb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8">Image Archive</h1>
        </AnimatedSectionWrapper>

        {/* Masonry-style Grid (CSS Columns or Flex/Grid workaround) */}
        <AnimatedSectionWrapper delay={0.1} className="py-0">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {allImages.map((src, index) => (
              <div key={index} className="relative break-inside-avoid w-full group overflow-hidden bg-muted">
                <Image
                  src={src}
                  alt={`Architecture archive image ${index}`}
                  width={800}
                  height={1200}
                  className="w-full h-auto object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </AnimatedSectionWrapper>

      </div>
    </div>
  );
}
