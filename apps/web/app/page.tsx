"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  Clock,
  CheckCircle2,
  FilePlus2,
  Sparkles,
  ArrowRight,
  BrainCircuit,
  MapPin,
  Building2,
  TrendingUp,
  Cpu,
  Layers,
  Scale,
  GraduationCap,
} from "lucide-react";
import ComplaintTracker from "@/components/ComplaintTracker";
import StackedBureauCards from "@/components/StackedBureauCards";

const HERO_STATS = [
  {
    title: "Grievances Processed",
    value: "14,892",
    change: "+18.2% automated intake",
    icon: TrendingUp,
    color: "text-white",
    bg: "bg-white/10 border border-white/20",
  },
  {
    title: "Avg Resolution Time",
    value: "16.2 hrs",
    change: "Reduced from 72 hrs baseline",
    icon: Clock,
    color: "text-zinc-200",
    bg: "bg-zinc-800/60 border border-zinc-700/50",
  },
  {
    title: "Critical Ragging SLA",
    value: "< 12 hrs",
    change: "Direct Nodal Officer Dispatch",
    icon: ShieldAlert,
    color: "text-white",
    bg: "bg-white/10 border border-white/20",
  },
  {
    title: "SLA Compliance Rate",
    value: "97.4%",
    change: "Exceeds 95% statutory standard",
    icon: CheckCircle2,
    color: "text-zinc-300",
    bg: "bg-zinc-800/60 border border-zinc-700/50",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section */}
      <section className="relative pt-12 pb-8 sm:pt-20 sm:pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          {/* Monochromatic Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-zinc-300 text-xs font-semibold shadow-inner"
          >
            <Sparkles className="w-3.5 h-3.5 animate-spin text-white" />
            <span>AICTE Autonomous Redressal Intelligence Engine</span>
          </motion.div>

          {/* Heading with Platinum Metallic Sheen */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            Empowering Citizens with{" "}
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              AI-Driven Redressal
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 leading-relaxed"
          >
            Integrated portal for registering, monitoring, and tracking institution complaints
            across AICTE bureaus. Features automated sentence-transformer triage, PostGIS
            spatial mapping, and live SLA countdowns.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link
              href="/file-complaint"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white hover:bg-zinc-200 font-bold text-black shadow-xl shadow-white/10 hover:scale-[1.02] border border-white transition-all"
            >
              <FilePlus2 className="w-5 h-5 text-black" />
              <span>File a Grievance</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </Link>

            <a
              href="#tracker"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl glass-panel hover:bg-zinc-900/90 font-semibold text-zinc-300 hover:text-white border border-zinc-700/80 hover:border-zinc-500 transition-all"
            >
              <span>Track Ticket Status</span>
            </a>
          </motion.div>
        </div>

        {/* Animated Hero Stats KPI Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {HERO_STATS.map((stat, idx) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
              className="glass-panel glass-panel-hover p-5 rounded-2xl space-y-2 border border-zinc-800/80 hover:border-white/20 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-400">{stat.title}</span>
                <div className={`p-2 rounded-lg ${stat.bg}`}>
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                </div>
              </div>
              <div className="text-3xl font-extrabold text-white tracking-tight">{stat.value}</div>
              <div className="text-[11px] text-zinc-400 font-medium">{stat.change}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Embedded Complaint Tracker Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ComplaintTracker />
      </section>

      {/* AICTE Bureau Stacked Card Interaction Engine (Prompt 20) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StackedBureauCards />
      </section>

      {/* Technical Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl p-8 sm:p-10 border border-zinc-800 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700/60 flex items-center justify-center text-white">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Sentence-Transformers AI</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              `all-MiniLM-L6-v2` compares semantic distance to filter duplicate complaints (&gt;0.85 similarity)
              and tag critical urgency words.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700/60 flex items-center justify-center text-white">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">PostGIS Spatial Indexing</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              `GEOGRAPHY(POINT, 4326)` geospatial GIST indexes enable sub-second spatial queries,
              regional grievance heatmaps, and institute proximity triage.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700/60 flex items-center justify-center text-white">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Dynamic SLA Accountability</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              SLA thresholds adjust automatically by severity: critical ragging is compressed to 12
              hours with immediate nodal escalation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
