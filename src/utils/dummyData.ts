import { LucideIcon } from "lucide-react";

export type Category = "Architecture" | "Interior Design" | "Master Planning" | "Cultural";

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: Category;
  description: string;
  year: number;
  location: string;
  client: string;
  area: string;
  coverImage: string;
  gallery: string[];
  featured: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
}

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    slug: "azure-residence",
    title: "Modern Residence - Bengaluru",
    category: "Architecture",
    description: "A minimalist cliffside retreat balancing raw concrete with warm timber elements, offering panoramic views of the ocean.",
    year: 2023,
    location: "Bengaluru, Karnataka",
    client: "Private",
    area: "4,500 sq ft",
    coverImage: "/images/projects/project1.png",
    gallery: [
      "/images/projects/project1.png",
      "/images/projects/project2.png",
    ],
    featured: true,
  },
  {
    id: "proj-2",
    slug: "valerian-museum",
    title: "Commercial Complex - Bengaluru",
    category: "Cultural",
    description: "An iconic cultural center featuring interlocking geometric forms and floating exhibition spaces illuminated by natural skylights.",
    year: 2022,
    location: "Bengaluru, Karnataka",
    client: "City of Oslo",
    area: "125,000 sq ft",
    coverImage: "/images/projects/project2.png",
    gallery: [
      "/images/projects/project1.png",
      "/images/projects/project2.png",
    ],
    featured: true,
  },
  {
    id: "proj-3",
    slug: "lumina-tower",
    title: "Lumina Tower",
    category: "Architecture",
    description: "A sustainable luxury residential skyscraper integrating vertical gardens and advanced kinetic sunshades.",
    year: 2024,
    location: "Singapore",
    client: "Horizon Developments",
    area: "450,000 sq ft",
    coverImage: "/images/projects/project1.png",
    gallery: [
      "/images/projects/project2.png",
    ],
    featured: true,
  },
  {
    id: "proj-4",
    slug: "serenity-spa",
    title: "Serenity Spa Interior",
    category: "Interior Design",
    description: "A calming sanctuary employing natural stone, water features, and diffused lighting to create a meditative atmosphere.",
    year: 2021,
    location: "Kyoto, Japan",
    client: "Serenity Wellness",
    area: "12,000 sq ft",
    coverImage: "/images/projects/project2.png",
    gallery: [
      "/images/projects/project1.png",
    ],
    featured: true,
  },
  {
    id: "proj-5",
    slug: "echo-pavilion",
    title: "Echo Pavilion",
    category: "Master Planning",
    description: "A temporary timber structure designed for the summer arts festival, demonstrating innovative parametric fabrication.",
    year: 2023,
    location: "London, UK",
    client: "Arts Council",
    area: "3,500 sq ft",
    coverImage: "/images/projects/project1.png",
    gallery: [
      "/images/projects/project2.png",
    ],
    featured: false,
  },
];

export const SERVICES: Service[] = [
  {
    id: "srv-1",
    title: "Complete Home Construction",
    description: "From foundation to finishing, we build your dream home with precision, using high-quality materials and expert craftsmanship.",
  },
  {
    id: "srv-2",
    title: "Material Contracting",
    description: "Reliable material supply and management for projects of all scales, ensuring cost-effectiveness and top-tier quality standards.",
  },
  {
    id: "srv-3",
    title: "Commercial & Industrial Projects",
    description: "Robust and functional spaces designed for business excellence, from retail outlets to large-scale industrial warehouses.",
  },
  {
    id: "srv-4",
    title: "Renovations & Remodeling",
    description: "Transforming existing spaces into modern, efficient environments with minimal disruption and maximum aesthetic impact.",
  },
  {
    id: "srv-5",
    title: "Turnkey Solutions",
    description: "End-to-end management of your construction project, handling every detail from conceptualization to final delivery.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "tst-1",
    name: "Shilpa Devraju",
    role: "Home Owner",
    company: "Private Residence",
    content: "Such an amazing construction team ..... an house we show as our taste..... remaining he did was ....jst lik a wawwwŵw....... good person ...good work.... thank you annaaa......",
  },
  {
    id: "tst-2",
    name: "Rajesh Kumar",
    role: "Managing Director",
    company: "RK Enterprises",
    content: "KDM Construction delivered our commercial warehouse ahead of schedule. Their transparency in material costs and commitment to quality is truly commendable.",
  },
  {
    id: "tst-3",
    name: "Anjali Sharma",
    role: "Client",
    company: "Luxury Villa Project",
    content: "Professionalism and excellence at its best. They managed the entire renovation of my ancestral home with great care and attention to detail. Highly recommended!",
  },
];
