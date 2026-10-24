"use client";

import React from "react";
import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  size?: number | "sm" | "md" | "lg";
  showText?: boolean;
  showBadge?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = "md",
  showText = true,
  showBadge = true,
}) => {
  // Resolve numeric dimension
  const dimension =
    typeof size === "number"
      ? size
      : size === "sm"
      ? 28
      : size === "lg"
      ? 48
      : 38;

  return (
    <motion.div
      className={`inline-flex items-center gap-3 select-none ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      data-cursor="pointer"
    >
      {/* High-Tech Vector Emblem SVG - Monochromatic Platinum Aesthetic */}
      <div
        className="relative flex items-center justify-center flex-shrink-0"
        style={{ width: dimension, height: dimension }}
      >
        {/* Soft Monochromatic Halo behind SVG */}
        <div className="absolute inset-0 rounded-2xl bg-white/10 blur-md pointer-events-none" />

        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_12px_rgba(255,255,255,0.2)]"
        >
          <defs>
            {/* Monochromatic Platinum / Silver to Pure White Gradient */}
            <linearGradient id="monoPlatinumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#D4D4D8" />
              <stop offset="100%" stopColor="#71717A" />
            </linearGradient>

            {/* Sparkle Silver Gradient */}
            <linearGradient id="monoSparkleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#A1A1AA" />
            </linearGradient>

            {/* Subtle Silver Glow Filter */}
            <filter id="monoLogoGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="1"
                stdDeviation="2.5"
                floodColor="#FFFFFF"
                floodOpacity="0.3"
              />
            </filter>
          </defs>

          {/* 360-Degree Orbital Outer Shield Ring */}
          <circle
            cx="50"
            cy="50"
            r="44"
            stroke="url(#monoPlatinumGradient)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeDasharray="210 25 20 25"
            className="origin-center"
            filter="url(#monoLogoGlow)"
          />

          {/* Orbital Satellite Sensor Nodes */}
          <circle cx="85" cy="24" r="3" fill="#FFFFFF" className="animate-pulse" />
          <circle cx="15" cy="76" r="2.5" fill="#A1A1AA" />
          <circle cx="76" cy="78" r="2" fill="#E4E4E7" />

          {/* Inner Geometric Shield Contours */}
          <path
            d="M50 14 L78 28 V52 C78 68 66 81 50 87 C34 81 22 68 22 52 V28 Z"
            stroke="url(#monoPlatinumGradient)"
            strokeWidth="2.2"
            strokeOpacity="0.6"
            fill="url(#monoPlatinumGradient)"
            fillOpacity="0.05"
            strokeLinejoin="round"
          />

          {/* Stylized Justice & Equity Balance Fulcrum (Scale Motif) */}
          <path
            d="M32 44 L68 44"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Left Pan */}
          <path
            d="M32 44 L26 56 M32 44 L38 56 M24 56 C24 60 40 60 40 56 Z"
            stroke="#E4E4E7"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="#FFFFFF"
            fillOpacity="0.1"
          />
          {/* Right Pan */}
          <path
            d="M68 44 L62 56 M68 44 L74 56 M60 56 C60 60 76 60 76 56 Z"
            stroke="#E4E4E7"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="#FFFFFF"
            fillOpacity="0.1"
          />

          {/* Central Vertical Pillar of Scale */}
          <path
            d="M50 32 V68"
            stroke="url(#monoPlatinumGradient)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M44 68 H56"
            stroke="url(#monoPlatinumGradient)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Central AI Sparkle Node (Four-Point Star of Intelligence) */}
          <path
            d="M50 34 C50 40 44 44 38 44 C44 44 50 48 50 54 C50 48 56 44 62 44 C56 44 50 40 50 34 Z"
            fill="url(#monoSparkleGradient)"
            filter="url(#monoLogoGlow)"
          />
          <circle cx="50" cy="44" r="2" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Stylized High-Contrast Typography: 'Grievance' in Stark White + '360' in Silver */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white">
              Grievance
              <span className="text-zinc-400 font-black ml-0.5 tracking-tight">
                360
              </span>
            </span>

            {showBadge && (
              <span className="px-1.5 py-0.5 text-[9px] font-bold tracking-wider uppercase rounded-md bg-white/10 text-zinc-200 border border-white/20 shadow-sm">
                AICTE AI
              </span>
            )}
          </div>
          <span className="text-[10px] text-zinc-400 font-medium tracking-wide hidden sm:inline -mt-0.5">
            Centralized Redressal Portal
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default Logo;
