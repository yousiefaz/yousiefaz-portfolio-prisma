import SectionTitle from "@/components/SectionTitle";
import { buttonVariants } from "@/components/ui/button";
import { Effect } from "@/components/ui/effects";
import { getStatistics } from "@/constants/statistics";
import { cn } from "@/lib/utils";
import { ArrowRightCircle } from "lucide-react";
import React from "react";

const AboutSection = async () => {
  const { statistics } = await getStatistics();

  return (
    <section id="about" className="relative container">
      <Effect
        className="-left-32 md:-left-84 top-50 md:top-20 animate-float-2"
        animateIn={false}
        opacity={0.5}
      />
      <article className="relative max-w-200 mx-auto bg-background/90 border rounded-lg p-6 flex flex-col gap-y-4">
        <Effect
          variant="square"
          size="default"
          className="-top-5 -right-5 -z-10 rotate-12 animate-rotate-slow"
        />
        <SectionTitle
          title="about me"
          description="Here's a quick introduction"
          className="items-start"
        />
        <p className="text-lg ">
          I&apos;m a dedicated frontend developer focused on building efficient,
          scalable, and user-centered web applications. My goal is to write
          clean, maintainable code while delivering responsive, high-quality
          interfaces that enhance the overall user experience.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-end">
          {statistics.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:items-start"
            >
              <p className="text-foreground text-2xl md:text-4xl font-bold">
                +{item.value}
              </p>
              <p className="whitespace-nowrap text-sm md:text-lg">
                {item.label}
              </p>
            </div>
          ))}
          <a
            href="#skills"
            className={cn(
              buttonVariants({ size: "lg" }),
              "col-span-2 md:col-span-1",
            )}
          >
            <span>Discover skills</span>
            <ArrowRightCircle className="size-4" />
          </a>
        </div>
      </article>
      <div></div>
    </section>
  );
};

export default AboutSection;
