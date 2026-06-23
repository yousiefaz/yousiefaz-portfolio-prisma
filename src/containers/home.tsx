"use client";

import { buttonVariants } from "@/components/ui/button";
import { Effect } from "@/components/ui/effects";
import { socialLinks } from "@/constants/social-links";
import { cn } from "@/lib/utils";
import { ArrowRightCircle, Download } from "lucide-react";
import Image from "next/image";
import TypingText from "@/components/ui/shadcn-io/typing-text";

const HomeSection = () => {
  return (
    <section
      id="home"
      aria-label="Hero section"
      className="relative container grid md:grid-cols-12 items-center gap-6"
    >
      {/* SOCIAL LINKS */}
      <ul
        aria-label="Social links"
        className="flex md:flex-col gap-6 items-center size-fit mx-auto py-2 md:py-8 px-8 md:px-2 border rounded-3xl"
      >
        {socialLinks.map((link, index) => {
          const { href, icon: Icon } = link;
          return (
            <li key={index} className="hover:text-primary transition-colors">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="social link"
              >
                <Icon className="size-5" />
              </a>
            </li>
          );
        })}
      </ul>

      {/* PRESENTATION */}
      <div className="md:col-span-6 flex flex-col items-center md:items-start gap-y-4 text-center md:text-left">
        {/* SEO-FRIENDLY HEADLINE */}
        <h1 className="text-3xl md:text-4xl font-bold text-foreground capitalize">
          hello, i&apos;m <span className="sr-only">Yousief AboAlyazed</span>
          <TypingText
            text={[
              "Yousief",
              "Frontend Developer",
              "React Developer",
              "UI Engineer",
              "Creative Thinker",
            ]}
            typingSpeed={90}
            pauseDuration={2500}
            showCursor
            cursorCharacter="|"
            className="text-3xl md:text-4xl font-bold cursor-default"
            textColors={["#f43f5e"]}
            variableSpeed={{ min: 60, max: 110 }}
          />
        </h1>

        {/* SUBTITLE (SEO IMPROVED) */}
        <h2 className="text-xl md:text-2xl font-semibold capitalize text-muted-foreground">
          Building fast, scalable & modern web experiences
        </h2>

        {/* DESCRIPTION */}
        <p className="leading-7 md:leading-8 md:text-lg md:max-w-[85%] text-center md:text-start">
          I build modern frontend experiences using React, Next.js, and
          TypeScript. Focused on performance, usability, and clean UI systems
          that feel alive.
        </p>

        <p
          className="text-sm md:text-base italic text-primary cursor-default"
          title="it's art do not touch it"
        >
          &ldquo;Made with love &lt;3&rdquo;
        </p>

        {/* CTA */}
        <div className="flex items-center gap-2 py-4">
          <a
            href="#projects"
            className={cn(
              buttonVariants({ size: "lg" }),
              "px-4 md:px-8 h-9 md:h-11",
            )}
          >
            <span>View Work</span>
            <ArrowRightCircle className="size-4" />
          </a>

          <a
            href="/yousiefaz-cv.pdf"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "px-4 md:px-8 h-9 md:h-11",
            )}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <span>Download CV</span>
            <Download className="size-4" />
          </a>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="md:col-span-5 grid place-content-center">
        <div className="relative flex items-center justify-center size-80 md:size-96">
          <Effect className="size-full" opacity={0.8} />

          <Effect
            variant="ball"
            size="sm"
            className="top-[7%] left-[24%] -rotate-4 animate-float-1"
            opacity={0.7}
          />
          <Effect
            variant="ball"
            size="sm"
            className="top-[50%] left-[2%] -rotate-45 animate-float-2"
            opacity={0.5}
          />
          <Effect
            variant="ball"
            size="sm"
            className="bottom-[4%] left-[25%] rotate-30 animate-float-3"
            opacity={0.9}
          />

          <Image
            src="/images/profile-pic.png"
            alt="Yousief AboAlyazed - Frontend Developer"
            width={500}
            height={500}
            priority
            fetchPriority="high"
            className="object-contain rounded-full border-2 size-[80%] ring-4 ring-primary ring-offset-4 ring-offset-background"
            title="AURA"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
