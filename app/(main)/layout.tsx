"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  Code,
  Briefcase,
  Trophy,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Learning", path: "/learning", icon: BookOpen },
  { name: "Practice", path: "/practice", icon: Code },
  { name: "Career", path: "/career", icon: Briefcase },
  { name: "Opportunities", path: "/opportunities", icon: Trophy },
];

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen text-white">

      {/* Sidebar */}
      <div className="w-64 bg-black/20 backdrop-blur-2xl border-r border-white/5 p-5 flex flex-col shadow-[0_0_40px_rgba(255,106,0,0.05)]">

        {/* Logo */}
        <h2 className="text-xl font-semibold mb-8 tracking-wide">
          CareerForge
        </h2>

        {/* Navigation */}
        <nav className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;

            return (
              <Link key={item.path} href={item.path}>
                <motion.div
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/20 text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={18} />
                  <span className="text-sm">{item.name}</span>
                </motion.div>
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="mt-auto text-xs text-gray-500">
          CareerForge v1
        </div>
      </div>

      {/* Main Section */}
      <div className="flex-1 flex flex-col">

        {/* Top Navbar */}
        <div className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-black/20 backdrop-blur-xl">
          <h1 className="text-sm text-gray-400">
            AI Career Dashboard
          </h1>

          <div className="w-9 h-9 rounded-full bg-gradient-to-r from-orange-500 to-red-500" />
        </div>

        {/* Page Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}