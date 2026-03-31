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
    slug: "jaswant-singh-jyoti-home",
    title: "Jaswant Singh and Jyoti Home",
    category: "Architecture",
    description: "A beautiful residential project tailored to the client's vision.",
    year: 2023,
    location: "Bengaluru, Karnataka",
    client: "Jaswant Singh & Jyoti",
    area: "3,200 sq ft",
    coverImage: "/images/projects/jaswant singh and jyoti home/IMG_2876.webp",
    gallery: [
      "/images/projects/jaswant singh and jyoti home/IMG_2876.webp",
      "/images/projects/jaswant singh and jyoti home/IMG_2877.webp"
    ],
    featured: true,
  },
  {
    id: "proj-2",
    slug: "shri-hanuma-nilaya",
    title: "Shri Hanuma Nilaya",
    category: "Architecture",
    description: "An elegant home designed with modern aesthetics and traditional values.",
    year: 2023,
    location: "Bengaluru, Karnataka",
    client: "Private",
    area: "4,000 sq ft",
    coverImage: "/images/projects/shri hanuma nilaya/IMG_2831.webp",
    gallery: [
      "/images/projects/shri hanuma nilaya/IMG_2831.webp",
      "/images/projects/shri hanuma nilaya/IMG_2833.webp",
      "/images/projects/shri hanuma nilaya/IMG_2834.webp",
      "/images/projects/shri hanuma nilaya/IMG_2835.webp",
      "/images/projects/shri hanuma nilaya/IMG_2836.webp",
      "/images/projects/shri hanuma nilaya/IMG_2839.webp",
      "/images/projects/shri hanuma nilaya/IMG_2840.webp",
      "/images/projects/shri hanuma nilaya/IMG_2841.webp",
      "/images/projects/shri hanuma nilaya/IMG_2842.webp",
      "/images/projects/shri hanuma nilaya/IMG_2843.webp",
      "/images/projects/shri hanuma nilaya/IMG_2844.webp",
      "/images/projects/shri hanuma nilaya/IMG_2845.webp",
      "/images/projects/shri hanuma nilaya/IMG_2846.webp",
      "/images/projects/shri hanuma nilaya/IMG_2847.webp",
      "/images/projects/shri hanuma nilaya/IMG_2848.webp",
      "/images/projects/shri hanuma nilaya/IMG_2849.webp",
      "/images/projects/shri hanuma nilaya/IMG_2850.webp",
      "/images/projects/shri hanuma nilaya/IMG_2851.webp",
      "/images/projects/shri hanuma nilaya/IMG_2852.webp",
      "/images/projects/shri hanuma nilaya/IMG_2853.webp",
      "/images/projects/shri hanuma nilaya/IMG_2854.webp",
      "/images/projects/shri hanuma nilaya/IMG_2855.webp",
      "/images/projects/shri hanuma nilaya/IMG_2857.webp",
      "/images/projects/shri hanuma nilaya/IMG_2858.webp",
      "/images/projects/shri hanuma nilaya/IMG_2859.webp"
    ],
    featured: true,
  },
  {
    id: "proj-3",
    slug: "tejas-nilaya",
    title: "Tejas Nilaya",
    category: "Architecture",
    description: "A seamless blend of comfort and style, maximizing space and natural light.",
    year: 2024,
    location: "Bengaluru, Karnataka",
    client: "Private",
    area: "3,500 sq ft",
    coverImage: "/images/projects/tejas nilaya/IMG_2807.webp",
    gallery: [
      "/images/projects/tejas nilaya/IMG_2807.webp",
      "/images/projects/tejas nilaya/IMG_2808.webp",
      "/images/projects/tejas nilaya/IMG_2809.webp",
      "/images/projects/tejas nilaya/IMG_2810.webp",
      "/images/projects/tejas nilaya/IMG_2811.webp",
      "/images/projects/tejas nilaya/IMG_2812.webp",
      "/images/projects/tejas nilaya/IMG_2813.webp",
      "/images/projects/tejas nilaya/IMG_2814.webp",
      "/images/projects/tejas nilaya/IMG_2815.webp",
      "/images/projects/tejas nilaya/IMG_2816.webp",
      "/images/projects/tejas nilaya/IMG_2817.webp",
      "/images/projects/tejas nilaya/IMG_2818.webp",
      "/images/projects/tejas nilaya/IMG_2819.webp",
      "/images/projects/tejas nilaya/IMG_2820.webp",
      "/images/projects/tejas nilaya/IMG_2821.webp",
      "/images/projects/tejas nilaya/IMG_2822.webp",
      "/images/projects/tejas nilaya/IMG_2823.webp",
      "/images/projects/tejas nilaya/IMG_2824.webp",
      "/images/projects/tejas nilaya/IMG_2825.webp"
    ],
    featured: true,
  },
  {
    id: "proj-4",
    slug: "residential-complex",
    title: "Residential Complex",
    category: "Architecture",
    description: "A comprehensive residential development offering premium living standards.",
    year: 2024,
    location: "Bengaluru, Karnataka",
    client: "Private",
    area: "5,000 sq ft",
    coverImage: "/images/projects/generic-project/IMG_2872.webp",
    gallery: [
      "/images/projects/generic-project/IMG_2872.webp",
      "/images/projects/generic-project/IMG_2873.webp",
      "/images/projects/generic-project/IMG_2884.webp",
      "/images/projects/generic-project/IMG_2885.webp",
      "/images/projects/generic-project/IMG_2886.webp",
      "/images/projects/generic-project/IMG_2887.webp",
      "/images/projects/generic-project/IMG_2888.webp",
      "/images/projects/generic-project/IMG_2889.webp",
      "/images/projects/generic-project/IMG_2890.webp",
      "/images/projects/generic-project/IMG_2891.webp",
      "/images/projects/generic-project/IMG_2892.webp",
      "/images/projects/generic-project/IMG_2893.webp",
      "/images/projects/generic-project/IMG_2894.webp",
      "/images/projects/generic-project/IMG_2895.webp",
      "/images/projects/generic-project/IMG_2896.webp",
      "/images/projects/generic-project/IMG_2897.webp",
      "/images/projects/generic-project/IMG_2898.webp",
      "/images/projects/generic-project/IMG_2899.webp",
      "/images/projects/generic-project/IMG_2900.webp"
    ],
    featured: true,
  }
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
