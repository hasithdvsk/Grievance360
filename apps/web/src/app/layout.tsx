import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grievance360 | Citizen AI Redressal & Resolution Platform",
  description: "Enterprise multi-channel grievance management with NLP-assisted triage, automated resolution pipelines, and real-time SLA metrics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased selection:bg-blue-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
