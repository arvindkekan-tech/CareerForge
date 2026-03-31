"use client";

import Link from "next/link";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-black text-white">

      {/* Sidebar */}
      <div className="w-64 bg-zinc-900 p-5 space-y-4">

        <h2 className="text-2xl font-bold mb-6">CareerForge 🚀</h2>

        <nav className="space-y-3">
          <Link href="/dashboard" className="block hover:text-orange-500">
            Dashboard
          </Link>
          <Link href="/learning" className="block hover:text-orange-500">
            Learning
          </Link>
          <Link href="/practice" className="block hover:text-orange-500">
            Practice
          </Link>
          <Link href="/career" className="block hover:text-orange-500">
            Career
          </Link>
          <Link href="/opportunities" className="block hover:text-orange-500">
            Opportunities
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {children}
      </div>
    </div>
  );
}