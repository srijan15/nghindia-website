"use client";

import { motion } from "framer-motion";
import { ElementType } from "react";

export default function RevealText({
  text,
  as: Tag = "span",
  className = "",
  delay = 0,
  wordDelay = 0.05,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  wordDelay?: number;
}) {
  const words = text.split(" ");

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className={`inline-block ${className}`}
            initial={{ y: "110%", rotate: 4 }}
            whileInView={{ y: "0%", rotate: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{
              duration: 0.7,
              delay: delay + i * wordDelay,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {i !== words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
