import SectionTitle from "@/components/SectionTitle";
import { buttonVariants } from "@/components/ui/button";
import { Effect } from "@/components/ui/effects";
import { Mail } from "lucide-react";
import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative container">
      <div className="bg-card bg-opacity-80 backdrop-blur-md border rounded-xl p-6 flex flex-col items-center gap-y-6 md:gap-y-12">
        <Effect
          variant="ball"
          size="default"
          opacity={0.4}
          animateIn={false}
          className="-top-4 -inset-e-4 animate-float-3"
        />
        <SectionTitle
          title="get in touch"
          description="have an idea? let's talk."
        />
        <a
          href="mailto:yousiefaboalyazed@gmail.com"
          className={buttonVariants({ size: "lg" })}
        >
          <Mail className="size-4" />
          <span>email me</span>
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
