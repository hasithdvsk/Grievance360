import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ShieldCheck } from "lucide-react";
import ChatWidget from "@/components/ChatWidget";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import PagePreloader from "@/components/animations/PagePreloader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grievance360 | AICTE Autonomous Grievance Redressal Platform",
  description:
    "AI-powered citizen and student grievance redressal system for AICTE institutions. Real-time NLP triage, spatial tracking, and dynamic SLA accountability.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-[#050507] text-zinc-100 relative antialiased selection:bg-white selection:text-black`}>
        {/* Awwwards Cinematic Page Initializer & Transitive Preloader */}
        <PagePreloader />

        {/* Interactive Trailing Cursor Engine */}
        <CustomCursor />

        {/* Ambient Monochromatic Soft Spotlight Lights */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-white/[0.03] rounded-full blur-[140px]" />
          <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-zinc-400/[0.03] rounded-full blur-[160px]" />
          <div className="absolute -bottom-40 left-1/3 w-[32rem] h-[32rem] bg-white/[0.02] rounded-full blur-[160px]" />
        </div>

        {/* Global Glassmorphic Header with Custom SVG Logo */}
        <Navbar />

        {/* Page Content */}
        <div className="flex-1">
          {children}
        </div>

        {/* Global Footer */}
        <footer className="mt-20 border-t border-zinc-800/80 glass-panel py-8 bg-black/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-zinc-300" />
              <span>AICTE Autonomous Grievance Redressal Monitoring Cell &copy; 2026</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-zinc-400">NLP Engine Active</span>
              </span>
              <span>API: <code className="text-zinc-300 font-mono">v1.0.0</code></span>
            </div>
          </div>
        </footer>

        {/* Floating AI & Messenger Chatbot Widget (Prompt 13) */}
        <ChatWidget />
      </body>
    </html>
  );
}
