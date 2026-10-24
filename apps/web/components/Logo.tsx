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
      {/* High-Tech Vector Emblem SVG */}
      <div
        className="relative flex items-center justify-center flex-shrink-0"
        style={{ width: dimension, height: dimension }}
      >
        {/* Ambient Glow behind SVG */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/30 via-blue-500/20 to-indigo-500/30 blur-md pointer-events-none" />

        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_4px_16px_rgba(6,182,212,0.35)]"
        >
          <defs>
            {/* Primary Cyan to Indigo Gradient */}
            <linearGradient id="g360Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>

            {/* Radiant Sparkle Node Gradient */}
            <linearGradient id="sparkleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>

            {/* Outer Orbital Ring Glow Filter */}
            <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="2"
                stdDeviation="3"
                floodColor="#06B6D4"
                floodOpacity="0.45"
              />
            </filter>
          </defs>

          {/* 360-Degree Orbital Outer Shield Ring */}
          <circle
            cx="50"
            cy="50"
            r="44"
            stroke="url(#g360Gradient)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="210 25 20 25"
            className="origin-center"
            filter="url(#logoGlow)"
          />

          {/* Orbital Satellite Sensor Nodes */}
          <circle cx="85" cy="24" r="3" fill="#22D3EE" className="animate-pulse" />
          <circle cx="15" cy="76" r="2.5" fill="#818CF8" />
          <circle cx="76" cy="78" r="2" fill="#06B6D4" />

          {/* Inner Geometric Shield Contours */}
          <path
            d="M50 14 L78 28 V52 C78 68 66 81 50 87 C34 81 22 68 22 52 V28 Z"
            stroke="url(#g360Gradient)"
            strokeWidth="2.5"
            strokeOpacity="0.55"
            fill="url(#g360Gradient)"
            fillOpacity="0.08"
            strokeLinejoin="round"
          />

          {/* Stylized Justice & Equity Balance Fulcrum (Scale Motif) */}
          <path
            d="M32 44 L68 44"
            stroke="#E2E8F0"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Left Pan */}
          <path
            d="M32 44 L26 56 M32 44 L38 56 M24 56 C24 60 40 60 40 56 Z"
            stroke="#38BDF8"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="#06B6D4"
            fillOpacity="0.2"
          />
          {/* Right Pan */}
          <path
            d="M68 44 L62 56 M68 44 L74 56 M60 56 C60 60 76 60 76 56 Z"
            stroke="#818CF8"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="#6366F1"
            fillOpacity="0.2"
          />

          {/* Central Vertical Pillar of Scale */}
          <path
            d="M50 32 V68"
            stroke="url(#g360Gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M44 68 H56"
            stroke="url(#g360Gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Central AI Sparkle Node (Four-Point Star of Intelligence) */}
          <path
            d="M50 34 C50 40 44 44 38 44 C44 44 50 48 50 54 C50 48 56 44 62 44 C56 44 50 40 50 34 Z"
            fill="url(#sparkleGradient)"
            filter="url(#logoGlow)"
          />
          <circle cx="50" cy="44" r="2" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Stylized Typography: 'Grievance' in bold white + '360' in gradient cyan */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white">
              Grievance
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent font-black ml-0.5">
                360
              </span>
            </span>

            {showBadge && (
              <span className="px-1.5 py-0.5 text-[9px] font-bold tracking-wider uppercase rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.15)]">
                AICTE AI
              </span>
            )}
          </div>
          <span className="text-[10px] text-slate-400 font-medium tracking-wide hidden sm:inline -mt-0.5">
            Centralized Redressal Portal
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default Logo;
