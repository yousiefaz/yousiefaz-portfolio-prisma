"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const ScrollToTop = () => {
  const [isOverScreen, setIsOverScreen] = React.useState<boolean>(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsOverScreen(window.scrollY > 100);
    });
  }, []);
  return (
    <Button
      size="icon"
      className={cn(
        "fixed bottom-20 md:bottom-8 right-4 md:right-8 inset-e-6 md:inset-e-12 duration-300 ease-in-out z-99",
        !isOverScreen && "opacity-0 translate-y-6 pointer-events-none",
        "",
      )}
      onClick={() => window.scrollTo(0, 0)}
    >
      <ArrowUpCircle />
    </Button>
  );
};

export default ScrollToTop;
