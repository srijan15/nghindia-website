"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const floatingTooltipVariants = cva("ml-4 mt-4 font-medium", {
  variants: {
    variant: {
      default: "bg-[var(--ink)] text-[var(--bg)]",
      outline: "border border-[var(--line-strong)] bg-[var(--bg)] text-[var(--ink)] shadow-none",
    },
    size: {
      md: "rounded-md px-3.5 py-2.5 text-sm",
      lg: "rounded-lg px-5 py-4 text-base",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

interface TooltipContextType {
  setContent: (
    content: string,
    description?: string,
    contentClassName?: string,
    descriptionClassName?: string,
  ) => void;
  setIsActive: (active: boolean) => void;
}

const TooltipContext = createContext<TooltipContextType | null>(null);

export function FloatingTooltipProvider({
  children,
  className,
  variant,
  size,
}: {
  children: React.ReactNode;
  className?: string;
} & VariantProps<typeof floatingTooltipVariants>) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [contentClassName, setContentClassName] = useState("");
  const [descriptionClassName, setDescriptionClassName] = useState("");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSetContent = (
    newContent: string,
    newDescription?: string,
    newContentClassName?: string,
    newDescriptionClassName?: string,
  ) => {
    setContent(newContent);
    setDescription(newDescription || "");
    setContentClassName(newContentClassName || "");
    setDescriptionClassName(newDescriptionClassName || "");
  };

  return (
    <TooltipContext.Provider value={{ setContent: handleSetContent, setIsActive }}>
      {children}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isActive && content && (
              <motion.div
                className="pointer-events-none fixed z-50"
                animate={{ top: pos.y, left: pos.x, opacity: 1 }}
                transition={{ type: "spring", damping: 30, stiffness: 350 }}
                initial={{ opacity: 0, top: pos.y, left: pos.x }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className={cn(floatingTooltipVariants({ variant, size }), className)}
                >
                  <div className="flex flex-col gap-1">
                    <span className={cn("whitespace-nowrap font-semibold", contentClassName)}>
                      {content}
                    </span>
                    {description && (
                      <span
                        className={cn(
                          "max-w-[28ch] whitespace-normal text-sm leading-snug font-normal opacity-70",
                          descriptionClassName,
                        )}
                      >
                        {description}
                      </span>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </TooltipContext.Provider>
  );
}

export function FloatingTooltipTrigger({
  children,
  content,
  description,
  contentClassName,
  descriptionClassName,
}: {
  children: React.ReactNode;
  content: string;
  description?: string;
  contentClassName?: string;
  descriptionClassName?: string;
}) {
  const context = useContext(TooltipContext);

  if (!context) {
    throw new Error("FloatingTooltipTrigger must be used within FloatingTooltipProvider");
  }

  const { setContent, setIsActive } = context;

  const handleMouseEnter = () => {
    setContent(content, description, contentClassName, descriptionClassName);
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
    </div>
  );
}
