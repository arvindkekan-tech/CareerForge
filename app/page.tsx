"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Landing() {
  const router = useRouter();

  return (
    <main className="bg-[#0B0B0F] text-white">

      {/* NAVBAR */}
      <div className="flex justify-between items-center px-8 py-6 border-b border-white/5 backdrop-blur-md">
        <h1 className="text-lg font-medium tracking-tight">CareerForge</h1>

        <button
          onClick={() => router.push("/onboarding")}
          className="px-4 py-2 rounded-md bg-white text-black text-sm font-medium transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)]"
        >
          Get Started
        </button>
      </div>

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-6 py-28 text-center max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
          The smarter way to build your career
        </h1>

        <p className="mt-6 text-gray-400 text-lg leading-relaxed">
          CareerForge uses AI to guide your learning, track your progress,
          and connect you with real opportunities.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={() => router.push("/onboarding")}
            className="px-6 py-3 rounded-md bg-white text-black font-medium transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)]"
          >
            Start learning
          </button>

          <button className="px-6 py-3 rounded-md border border-white/10 text-gray-300 hover:bg-white/5 transition">
            Learn more
          </button>
        </div>
      </motion.section>

      {/* DIVIDER */}
      <div className="border-t border-white/5 max-w-6xl mx-auto" />

      {/* FEATURE GRID */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="px-6 py-20 max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="AI-powered learning"
            desc="Generate structured courses tailored to your goals and level."
          />

          <Card
            title="Skill tracking"
            desc="Track progress, identify weak areas, and improve continuously."
          />

          <Card
            title="Career guidance"
            desc="Get recommendations for internships, jobs, and real opportunities."
          />
        </div>
      </motion.section>

      {/* DIVIDER */}
      <div className="border-t border-white/5 max-w-6xl mx-auto" />

      {/* SPLIT SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="px-6 py-24 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">
            Everything in one place
          </h2>

          <p className="text-gray-400 mt-4 leading-relaxed">
            No more switching between platforms. Learn, practice, track,
            and grow — all inside one unified system.
          </p>
        </div>

        <div className="h-64 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md" />
      </motion.section>

      {/* DIVIDER */}
      <div className="border-t border-white/5 max-w-6xl mx-auto" />

      {/* HOW IT WORKS */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="px-6 py-24 text-center max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-semibold tracking-tight">
          How it works
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6 text-gray-400">
          <Step
            title="Set your goal"
            desc="Choose what you want to achieve."
          />
          <Step
            title="AI builds plan"
            desc="Personalized roadmap created instantly."
          />
          <Step
            title="Execute daily"
            desc="Learn, practice, and grow consistently."
          />
        </div>
      </motion.section>

      {/* FINAL CTA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="px-6 py-24 text-center border-t border-white/5"
      >
        <h2 className="text-3xl font-semibold tracking-tight">
          Start building your future today
        </h2>

        <button
          onClick={() => router.push("/onboarding")}
          className="mt-8 px-8 py-3 rounded-md bg-white text-black font-medium transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)]"
        >
          Get started
        </button>
      </motion.section>

    </main>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="p-6 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/[0.04] hover:border-white/20"
    >
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-gray-400 mt-3 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function Step({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div whileHover={{ y: -4 }}>
      <p className="text-white font-medium">{title}</p>
      <p className="mt-2 text-sm text-gray-400">{desc}</p>
    </motion.div>
  );
}