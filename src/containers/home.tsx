"use client";

import { buttonVariants } from "@/components/ui/button";
import { Effect } from "@/components/ui/effects";
import { socialLinks } from "@/constants/social-links";
import { cn } from "@/lib/utils";
import { ArrowRightCircle, Download } from "lucide-react";
import Image from "next/image";
import TypingText from "@/components/ui/shadcn-io/typing-text";

import React from "react";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="relative container grid md:grid-cols-12 items-center gap-6"
    >
      {/* Social links */}
      <ul className="flex md:flex-col gap-6 items-center size-fit mx-auto py-2 md:py-8 px-8 md:px-2 border rounded-3xl">
        {socialLinks.map((link, index) => {
          const { href, icon: Icon } = link;
          return (
            <li key={index} className="hover:text-primary">
              <a href={href} target="_blank" rel="noreferrer noopener">
                <Icon className="size-5" />
              </a>
            </li>
          );
        })}
      </ul>
      {/* Social links */}

      {/* Presentation */}
      <div className="md:col-span-6 flex flex-col items-center md:items-start gap-y-4 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground capitalize">
          hello, i&apos;m{" "}
          <TypingText
            text={[
              "Yousief",
              "Frontend Developer",
              "Graphic Designer",
              "UI/UX Enthusiast",
              "Creative Thinker",
            ]}
            typingSpeed={100}
            pauseDuration={3000}
            showCursor={true}
            cursorCharacter="|"
            className="text-3xl md:text-4xl font-bold cursor-default"
            textColors={["#f43f5e"]} //pink
            //textColors={["#e11d48"]} //blue
            variableSpeed={{ min: 50, max: 120 }}
          />
        </h2>

        <h5 className="text-xl text-center md:text-left md:text-xl font-semibold capitalize">
          Passionate About User-Centered Design & Insight-Driven Solutions
        </h5>

        <p className="leading-7 md:leading-8 md:text-lg md:max-w-[85%] text-center md:text-start">
          I build experiences that don&apos;t just work — they speak. Every
          pixel, every line of code, every detail reflects a story I&apos;m
          still writing — mine.
        </p>

        <p
          className="text-sm md:text-base italic text-center md:text-start text-primary cursor-default"
          title="it's art do not touch it"
        >
          &ldquo; Made with love &lt;3 &rdquo;
        </p>

        <div className="flex items-center gap-2 py-4">
          <a
            href="#projects"
            className={cn(
              buttonVariants({ size: "lg" }),
              "px-4 md:px-8 h-9 md:h-11",
            )}
          >
            <span>my work</span>
            <ArrowRightCircle className="size-4" />
          </a>
          <a
            href="/yousiefaz-cv.pdf"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "px-4 md:px-8 h-9 md:h-11",
            )}
            target="_blank"
            download={true}
          >
            <span>download CV</span>
            <Download className="size-4" />
          </a>
        </div>
      </div>
      {/* Presentation */}

      {/* Image */}
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
            className="top-[50%] left-[2%] -rotate-42 animate-float-2"
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
            alt="profile picture"
            width={500}
            height={500}
            className="object-contain rounded-full border-2 size-[80%] ring-4 ring-primary ring-offset-4 ring-offset-background"
            title="AURA"
          />
        </div>
      </div>
      {/* Image */}
    </section>
  );
};

export default HomeSection;
