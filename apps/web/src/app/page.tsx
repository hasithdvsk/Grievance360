"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  CheckCircle2,
  Clock,
  Activity,
  FilePlus2,
  Sparkles,
  Search,
  Building2,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
} from "recharts";

const analyticsData = [
  { day: "Mon", received: 45, resolved: 38 },
  { day: "Tue", received: 52, resolved: 49 },
  { day: "Wed", received: 61, resolved: 55 },
  { day: "Thu", received: 48, resolved: 50 },
  { day: "Fri", received: 70, resolved: 65 },
  { day: "Sat", received: 34, resolved: 40 },
  { day: "Sun", received: 22, resolved: 30 },
];

const departmentPerformance = [
  { name: "Public Works", resolvedRate: 92 },
  { name: "Sanitation", resolvedRate: 88 },
  { name: "Water Supply", resolvedRate: 79 },
  { name: "Electricity", resolvedRate: 85 },
  { name: "Traffic/Transit", resolvedRate: 94 },
];

export default function Grievance360Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Top Navigation */}
      <header className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-indigo-300 to-white bg-clip-text text-transparent">
                Grievance360
              </span>
              <span className="ml-2 px-2 py-0.5 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                v1.0 Monorepo
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search ticket ID or keyword..."
                className="pl-9 pr-4 py-1.5 text-sm rounded-lg bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors w-64"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 transition-all text-white shadow-lg shadow-blue-600/20">
              <FilePlus2 className="w-4 h-4" />
              File Grievance
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40 p-8"
        >
          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              Real-time NLP Triage & Semantic Redressal
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Autonomous Citizen Grievance Intelligence
            </h1>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Powered by sentence-transformers, Redis distributed queues, and Next.js 14.
              Automatically routes complaints, calculates SLA deadlines, and detects duplicate tickets with semantic AI.
            </p>
          </div>
        </motion.div>

        {/* Metric KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Total Grievances",
              value: "12,482",
              change: "+12.4% this month",
              icon: FilePlus2,
              color: "text-blue-400",
              bgColor: "bg-blue-500/10",
            },
            {
              title: "Avg Resolution Time",
              value: "18.4 hrs",
              change: "-4.2 hrs vs last quarter",
              icon: Clock,
              color: "text-emerald-400",
              bgColor: "bg-emerald-500/10",
            },
            {
              title: "High Priority Incidents",
              value: "142",
              change: "Under active dispatch",
              icon: ShieldAlert,
              color: "text-amber-400",
              bgColor: "bg-amber-500/10",
            },
            {
              title: "SLA Compliance Rate",
              value: "96.8%",
              change: "Target exceeded (95%)",
              icon: CheckCircle2,
              color: "text-purple-400",
              bgColor: "bg-purple-500/10",
            },
          ].map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="p-5 rounded-xl border border-slate-800 bg-slate-900/70 hover:border-slate-700 transition-colors shadow-sm space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">{card.title}</span>
                <div className={`p-2 rounded-lg ${card.bgColor}`}>
                  <card.icon className={`w-4 h-4 ${card.color}`} />
                </div>
              </div>
              <div className="text-2xl font-bold text-white">{card.value}</div>
              <div className="text-xs text-slate-500 flex items-center gap-1">
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                {card.change}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts & Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Resolution Velocity Chart */}
          <div className="lg:col-span-2 p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-blue-400" />
                  Resolution Velocity (Received vs Resolved)
                </h3>
                <p className="text-xs text-slate-400">Past 7 days intake and clearance velocity</p>
              </div>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={analyticsData}>
                  <defs>
                    <linearGradient id="colorReceived" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorResolved" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="day" stroke="#64748b" fontSize={12} />
                  <YAxis stroke="#64748b" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0f172a",
                      borderColor: "#334155",
                      borderRadius: "8px",
                      color: "#f8fafc",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="received"
                    stroke="#3b82f6"
                    fillOpacity={1}
                    fill="url(#colorReceived)"
                    name="Complaints Received"
                  />
                  <Area
                    type="monotone"
                    dataKey="resolved"
                    stroke="#10b981"
                    fillOpacity={1}
                    fill="url(#colorResolved)"
                    name="Cases Resolved"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Department Performance Bar Chart */}
          <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4">
            <div>
              <h3 className="text-base font-semibold text-white flex items-center gap-2">
                <Building2 className="w-4 h-4 text-indigo-400" />
                Department SLA Success %
              </h3>
              <p className="text-xs text-slate-400">Timely resolution rate by department</p>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={departmentPerformance} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis type="number" domain={[60, 100]} stroke="#64748b" fontSize={11} />
                  <YAxis dataKey="name" type="category" width={90} stroke="#94a3b8" fontSize={11} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0f172a",
                      borderColor: "#334155",
                      borderRadius: "8px",
                      color: "#f8fafc",
                    }}
                  />
                  <Bar dataKey="resolvedRate" fill="#6366f1" radius={[0, 4, 4, 0]} name="SLA %" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
