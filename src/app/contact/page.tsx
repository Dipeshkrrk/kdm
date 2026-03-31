"use client";

import { useState, FormEvent } from "react";
import { AnimatedSectionWrapper } from "@/components/layout/AnimatedSectionWrapper";

export default function ContactPage() {
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    
    const whatsappNumber = "919035474472";
    const text = `Hello KDM Construction,\n\nMy name is ${name} (${email}).\n\nProject Details:\n${message}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    
    window.open(whatsappUrl, "_blank");
    setIsPending(false);
  };

  return (
    <div className="pt-32 pb-20 w-full min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <AnimatedSectionWrapper className="pt-0 pb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 loading-tight">
            Start a dialogue.
          </h1>
          <p className="text-lg md:text-xl font-light text-muted-foreground max-w-2xl">
            Whether you have a specific project in mind or simply want to explore possibilities, we welcome conversation.
          </p>
        </AnimatedSectionWrapper>

        {/* Content */}
        <AnimatedSectionWrapper delay={0.1} className="py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            
            {/* Form */}
            <div className="order-2 lg:order-1">
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="border-b border-border bg-transparent outline-none py-3 focus:border-foreground transition-colors font-light text-lg"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="border-b border-border bg-transparent outline-none py-3 focus:border-foreground transition-colors font-light text-lg"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="border-b border-border bg-transparent outline-none py-3 focus:border-foreground transition-colors font-light text-lg resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="mt-4 self-start bg-foreground text-background px-10 py-4 text-sm font-medium tracking-widest uppercase hover:bg-foreground/90 transition-colors disabled:opacity-70 flex items-center gap-4"
                >
                  {isPending ? "Submitting..." : "Send Inquiry"}
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="order-1 lg:order-2 flex flex-col gap-12 pt-4 border-t border-border lg:border-none">
              <div>
                <h4 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
                  Bengaluru Office
                </h4>
                <div className="text-lg font-light leading-relaxed">
                  <p>187, 2nd Cross, 8th Main Rd,</p>
                  <p>Prakruthi Layout, K.G.Srikantapura</p>
                  <p>Bengaluru, Karnataka 560073</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
                  Inquiries
                </h4>
                <div className="text-lg font-light flex flex-col gap-2">
                  <a href="mailto:contact@kdmconstruction.in" className="hover:text-muted-foreground transition-colors">
                    contact@kdmconstruction.in
                  </a>
                  <a href="tel:+919035474472" className="hover:text-muted-foreground transition-colors">
                    +91 90354 74472
                  </a>
                </div>
              </div>
            </div>

          </div>
        </AnimatedSectionWrapper>

      </div>
    </div>
  );
}
