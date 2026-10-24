"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Inner Dot: Highly responsive, minimal lag
  const dotX = useSpring(mouseX, { damping: 35, stiffness: 800, mass: 0.1 });
  const dotY = useSpring(mouseY, { damping: 35, stiffness: 800, mass: 0.1 });

  // Outer Ring: Spring-damped smooth trailing ring (36px dimension)
  const ringX = useSpring(mouseX, { damping: 26, stiffness: 220, mass: 0.5 });
  const ringY = useSpring(mouseY, { damping: 26, stiffness: 220, mass: 0.5 });

  useEffect(() => {
    // Check if the current device has fine pointer (mouse/trackpad). If touch, don't display
    if (typeof window === "undefined") return;
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) {
      setIsVisible(false);
      return;
    }

    let scrollTimeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = Boolean(
        target.closest(
          'a, button, input, textarea, select, [role="button"], [data-cursor="pointer"], .cursor-pointer'
        )
      );
      setIsHovered(interactive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      clearTimeout(scrollTimeout);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  // Determine scale dynamics
  let ringScale = 1;
  if (isHovered) {
    ringScale = 2.2;
  }
  if (isClicked) {
    ringScale = isHovered ? 1.7 : 0.8;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none">
      {/* Outer Spring-Damped Glassmorphic Trailing Ring (36px nominal) */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: ringScale,
          scaleY: isScrolling ? 1.3 : ringScale,
          scaleX: isScrolling ? 0.75 : ringScale,
          borderColor: isHovered
            ? "rgba(6, 182, 212, 0.8)"
            : "rgba(99, 102, 241, 0.45)",
          backgroundColor: isHovered
            ? "rgba(6, 182, 212, 0.18)"
            : "rgba(99, 102, 241, 0.1)",
          boxShadow: isHovered
            ? "0 0 24px 2px rgba(6, 182, 212, 0.55), inset 0 0 10px rgba(6, 182, 212, 0.3)"
            : "0 0 14px 1px rgba(99, 102, 241, 0.25)",
        }}
        transition={{
          type: "spring",
          stiffness: isClicked ? 600 : 350,
          damping: isClicked ? 18 : 24,
        }}
        className="w-9 h-9 rounded-full border border-indigo-400/40 bg-indigo-500/10 backdrop-blur-sm pointer-events-none transition-colors duration-150"
      />

      {/* Inner Dot: Sharp 8px Glowing Cyan Pointer */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicked ? 0.7 : isHovered ? 1.3 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.9)] pointer-events-none"
      />
    </div>
  );
};

export default CustomCursor;
