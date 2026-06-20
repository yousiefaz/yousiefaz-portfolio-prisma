"use client";

import { Skill } from "@/types/interfaces";
import { FC, useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

const SkillItem: FC<{ item: Skill }> = ({ item }) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let current = 0;
    const step = item.value / 25;
    const interval = setInterval(() => {
      current += step;
      if (current >= item.value) {
        current = item.value;
        clearInterval(interval);
      }
      setProgress(Math.round(current));
    }, 25);
    return () => clearInterval(interval);
  }, [item.value]);

  return (
    <motion.article
      className="grid gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between gap-8 px-4">
        <h4 className="capitalize text-foreground">{item.label}</h4>
        <h4 className="text-primary/80">{item.value}%</h4>
      </div>
      <Progress
        value={progress}
        className="h-1.5 bg-primary/20 duration-1000 ease-out"
      />
    </motion.article>
  );
};

export default SkillItem;
