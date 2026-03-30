"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase
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
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard 🚀</h1>

      {!user ? (
        <p>Loading...</p>
      ) : (
        <div className="space-y-4 bg-zinc-900 p-6 rounded-xl">
          <p><strong>Skills:</strong> {user.skills}</p>
          <p><strong>Level:</strong> {user.level}</p>
          <p><strong>Goal:</strong> {user.goal}</p>
          <p><strong>Study Time:</strong> {user.time} hrs/day</p>
        </div>
      )}
    </div>
  );
}