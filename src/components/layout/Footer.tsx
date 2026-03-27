import Link from "next/link";
import { ArrowUpRight, Instagram, Linkedin, Twitter, LucideIcon } from "lucide-react";

type FooterLink = {
  name: string;
  href: string;
  icon?: LucideIcon;
};

type FooterGroup = {
  title: string;
  links: FooterLink[];
};

const FOOTER_LINKS: FooterGroup[] = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/about" },
      { name: "Philosophy", href: "/about" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Architecture", href: "/services" },
      { name: "Interior Design", href: "/services" },
      { name: "Master Planning", href: "/services" },
    ],
  },
  {
    title: "Social",
    links: [
      { name: "Instagram", href: "#", icon: Instagram },
      { name: "LinkedIn", href: "#", icon: Linkedin },
      { name: "Twitter", href: "#", icon: Twitter },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl md:text-3xl font-bold tracking-tight uppercase">
                KDM<span className="font-light text-muted transition-colors">Construction</span>
              </span>
            </Link>
            <p className="text-muted/80 font-light max-w-sm leading-relaxed mb-8">
              Delivering high-quality construction and real estate solutions tailored to your needs.
            </p>
            <div className="flex flex-col gap-2 font-light text-sm text-muted/80">
              <p>187, 2nd Cross, 8th Main Rd, Prakruthi Layout</p>
              <p>K.G.Srikantapura, Bengaluru, KA 560073</p>
              <a href="mailto:contact@kdmconstruction.in" className="hover:text-background transition-colors inline-flex mt-2">
                contact@kdmconstruction.in
              </a>
              <a href="tel:+919035474472" className="hover:text-background transition-colors inline-flex">
                +91 90354 74472
              </a>
            </div>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-medium uppercase tracking-widest mb-6 opacity-70">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-4 text-sm font-light text-muted/80">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-background transition-colors flex items-center gap-1 group w-max"
                    >
                      {link.icon && <link.icon className="w-4 h-4 mr-1" />}
                      {link.name}
                      {!link.icon && (
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-muted/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light tracking-wide text-muted/60">
          <p>© {new Date().getFullYear()} KDM Construction. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-background transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-background transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
