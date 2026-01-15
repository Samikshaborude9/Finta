"use client";

import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import { Testimonial } from "@/data/testimonials";

interface Props {
  items: Testimonial[];
  duration: number;
  reverse?: boolean;
}

export default function ScrollingColumn({
  items,
  duration,
  reverse = false,
}: Props) {
  return (
    <div className="overflow-hidden h-full mask-[linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
      <motion.div
        className="flex flex-col gap-6"
        animate={{
          y: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          duration: duration * 2,
          ease: "linear",
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {[...items, ...items].map((t, i) => (
          <TestimonialCard key={i} testimonial={t} />
        ))}
      </motion.div>
    </div>
  );
}
