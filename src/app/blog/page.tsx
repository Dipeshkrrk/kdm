import Link from "next/link";
import { AnimatedSectionWrapper } from "@/components/layout/AnimatedSectionWrapper";

export const metadata = {
  title: "Insights & Journal | KDM Construction",
  description: "Read our latest construction insights, company news, and industry trends.",
};

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Return of Timber in High-Rise Architecture",
    date: "October 12, 2024",
    category: "Insights",
    excerpt: "Exploring the structural and environmental benefits of mass timber in modern skyscraper construction.",
  },
  {
    id: 2,
    title: "Light as a Material: Carving Spaces with Sunshine",
    date: "September 28, 2024",
    category: "Design",
    excerpt: "How we approach natural illumination not merely as a necessity, but as a foundational building material.",
  },
  {
    id: 3,
    title: "KDM Construction Wins Infrastructure Excellence Award",
    date: "August 15, 2024",
    category: "News",
    excerpt: "Our recent project, the Lumina Tower, has been recognized for its groundbreaking kinetic façade.",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-32 pb-20 w-full min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <AnimatedSectionWrapper className="pt-0 pb-12 border-b border-border">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 loading-tight">
            Journal
          </h1>
          <p className="text-lg md:text-xl font-light text-muted-foreground max-w-2xl">
            Thoughts on design, practice, and the evolving built environment.
          </p>
        </AnimatedSectionWrapper>

        {/* Posts */}
        <AnimatedSectionWrapper delay={0.1} className="py-0">
          <div className="flex flex-col">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="group border-b border-border py-12 flex flex-col md:flex-row gap-6 md:gap-12 md:items-baseline">
                <div className="w-full md:w-48 flex-shrink-0 text-sm tracking-widest uppercase text-muted-foreground font-medium">
                  {post.date}
                </div>
                <div className="flex-1">
                  <span className="text-xs uppercase tracking-widest text-primary mb-3 block opacity-80">
                    {post.category}
                  </span>
                  <Link href="#" className="inline-block">
                    <h2 className="text-2xl md:text-3xl font-light mb-4 group-hover:text-muted-foreground transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-lg font-light text-muted-foreground leading-relaxed max-w-2xl">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center">
            <button className="uppercase tracking-widest text-sm font-medium border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors">
              Load More Articles
            </button>
          </div>
        </AnimatedSectionWrapper>

      </div>
    </div>
  );
}
