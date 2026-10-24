"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Activity, FilePlus2 } from "lucide-react";
import Logo from "./Logo";

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-slate-800/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo with micro-interactions */}
        <Link href="/" className="inline-block" data-cursor="pointer">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Logo size={36} showBadge={true} />
          </motion.div>
        </Link>

        {/* Navigation & Action Links */}
        <nav className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/#tracker"
            data-cursor="pointer"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-cyan-400 rounded-lg hover:bg-slate-800/60 border border-transparent hover:border-cyan-500/20 transition-all"
          >
            <Search className="w-4 h-4 text-cyan-400" />
            <span className="hidden sm:inline">Track Ticket</span>
          </Link>

          <Link
            href="/admin/dashboard"
            data-cursor="pointer"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-emerald-400 rounded-lg hover:bg-slate-800/60 border border-transparent hover:border-emerald-500/20 transition-all"
          >
            <Activity className="w-4 h-4 text-emerald-400" />
            <span className="hidden sm:inline">Admin Analytics</span>
          </Link>

          <Link
            href="/file-complaint"
            data-cursor="pointer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 rounded-lg shadow-lg shadow-cyan-600/20 border border-cyan-400/30 transition-all hover:scale-[1.03]"
          >
            <FilePlus2 className="w-4 h-4" />
            <span>File Grievance</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
