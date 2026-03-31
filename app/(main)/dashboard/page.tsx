"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

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

  // fake progress for now
  const progress = 60;
  const xp = 120;

  return (
    <div className="min-h-screen bg-black text-white p-6">

      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">Dashboard 🚀</h1>

      {!user ? (
        <p>Loading...</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">

          {/* 👤 User Info Card */}
          <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Your Profile</h2>

            <p><strong>Skills:</strong> {user.skills}</p>
            <p><strong>Level:</strong> {user.level}</p>
            <p><strong>Goal:</strong> {user.goal}</p>
            <p><strong>Study Time:</strong> {user.time} hrs/day</p>
          </div>

          {/* 📊 Progress Card */}
          <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Progress</h2>

            <p className="mb-2">Skill Progress</p>
            <div className="w-full bg-zinc-700 h-3 rounded-full">
              <div
                className="bg-orange-500 h-3 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="mt-2">{progress}% completed</p>
          </div>

          {/* ⚡ XP Card */}
          <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Gamification</h2>

            <p>XP Points: {xp}</p>
            <p>Level: Beginner</p>
          </div>

          {/* 🎯 Goal Card */}
          <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Your Goal</h2>

            <p>{user.goal}</p>
          </div>

        </div>
      )}
    </div>
  );
}