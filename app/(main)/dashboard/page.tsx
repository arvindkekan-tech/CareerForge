"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase
        .from("users")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(1);

      if (data && data.length > 0) {
        setUser(data[0]);
      }
    };

    fetchUser();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-10 max-w-6xl mx-auto"
    >

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Dashboard
        </h1>
        <p className="text-gray-400 mt-2">
          Track your progress and continue your journey
        </p>
      </div>

      {!user ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* PROFILE CARD */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="lg:col-span-2 p-6 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md hover:bg-white/[0.04] hover:border-white/20 transition-all"
            >
              <h2 className="text-lg font-medium mb-4">
                Profile
              </h2>

              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                <p><span className="text-gray-500">Skills:</span> {user.skills}</p>
                <p><span className="text-gray-500">Level:</span> {user.level}</p>
                <p><span className="text-gray-500">Goal:</span> {user.goal}</p>
                <p><span className="text-gray-500">Time:</span> {user.time} hrs/day</p>
              </div>
            </motion.div>

            {/* XP CARD */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md hover:bg-white/[0.04] hover:border-white/20 transition-all"
            >
              <p className="text-sm text-gray-400">
                Experience
              </p>

              <h2 className="text-2xl font-semibold mt-2">
                140 XP
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Level 1
              </p>
            </motion.div>

          </div>

          {/* SECOND ROW */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* PROGRESS */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="lg:col-span-2 p-6 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md hover:bg-white/[0.04] hover:border-white/20 transition-all"
            >
              <p className="text-sm text-gray-400 mb-3">
                Progress
              </p>

              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "65%" }}
                  transition={{ duration: 1 }}
                  className="h-2 bg-white"
                />
              </div>

              <p className="text-sm text-gray-500 mt-2">
                65% completed
              </p>
            </motion.div>

            {/* QUICK ACTION */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md hover:bg-white/[0.04] hover:border-white/20 transition-all"
            >
              <p className="text-sm text-gray-400">
                Next Step
              </p>

              <h3 className="text-lg font-medium mt-2">
                Continue Learning
              </h3>

              <button className="mt-4 px-4 py-2 rounded-md bg-white text-black text-sm font-medium transition hover:scale-[1.03]">
                Resume
              </button>
            </motion.div>

          </div>
        </>
      )}
    </motion.div>
  );
}