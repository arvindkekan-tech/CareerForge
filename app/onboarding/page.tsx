"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";

const questions = [
  "Hey! I'm here to guide you. Let's start your journey.",
  "What skills do you already have?",
  "What’s your current level?",
  "What’s your goal?",
  "How many hours can you give daily?",
];

export default function Onboarding() {
  const router = useRouter();

  const [step, setStep] = useState(0);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    skills: "",
    level: "",
    goal: "",
    time: "",
  });

  //  Female Voice
  const speak = (text: string) => {
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();

    const femaleVoice =
      voices.find((v) => v.name.toLowerCase().includes("female")) ||
      voices.find((v) => v.name.toLowerCase().includes("zira")) ||
      voices.find((v) =>
        v.name.toLowerCase().includes("google uk english female")
      );

    const utterance = new SpeechSynthesisUtterance(text);
    if (femaleVoice) utterance.voice = femaleVoice;

    utterance.rate = 1;
    synth.cancel();
    synth.speak(utterance);
  };

  //  Typing + Voice
  useEffect(() => {
    let i = 0;
    const current = questions[step] || "";
    setText("");

    const interval = setInterval(() => {
      setText(current.slice(0, i));
      i++;
      if (i > current.length) clearInterval(interval);
    }, 25);

    if (current) speak(current);

    return () => clearInterval(interval);
  }, [step]);

  const next = async () => {
    if (step === 4) {
      console.log("Saving data...", form);
  
      setLoading(true);
  
      const { data, error } = await supabase.from("users").insert([
        {
          skills: form.skills,
          level: form.level,
          goal: form.goal,
          time: form.time,
        },
      ]);
  
      console.log("Response:", data, error);
  
      if (error) {
        console.log("Error saving:", error.message);
        alert("Error saving data: " + error.message);
        setLoading(false);
        return;
      }
  
      console.log("Saved successfully ✅");
  
      setStep(5);
  
      setTimeout(() => {
        console.log("Redirecting...");
        router.push("/dashboard");
      }, 2000);
  
      return;
    }
  
    setStep((prev) => prev + 1);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">

      {/*  Particles */}
      <Particles
        options={{
          particles: {
            number: { value: 50 },
            size: { value: 2 },
            move: { enable: true, speed: 1 },
            opacity: { value: 0.3 },
          },
        }}
        className="absolute inset-0"
      />

      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-orange-500 blur-[150px] opacity-20 rounded-full"></div>

      {/* Avatar */}
      <div className="absolute top-10">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 animate-pulse"></div>
      </div>

      <motion.div
        key={step}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-10 w-full max-w-xl text-center px-6"
      >
        <h1 className="text-2xl md:text-3xl font-semibold mb-8">
          {text}
        </h1>

        {/* STEP 1 */}
        {step === 1 && (
          <input
            placeholder="HTML, CSS, Java..."
            className="w-full p-4 rounded-xl bg-zinc-900"
            onChange={(e) =>
              setForm({ ...form, skills: e.target.value })
            }
          />
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="flex gap-3 justify-center">
            {["Beginner", "Intermediate", "Advanced"].map((lvl) => (
              <motion.button
                whileHover={{ scale: 1.1 }}
                key={lvl}
                onClick={() => setForm({ ...form, level: lvl })}
                className={`px-6 py-3 rounded-xl ${
                  form.level === lvl ? "bg-orange-500" : "bg-zinc-800"
                }`}
              >
                {lvl}
              </motion.button>
            ))}
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="flex gap-3 justify-center">
            {["Internship", "Job", "Exam"].map((g) => (
              <motion.button
                whileHover={{ scale: 1.1 }}
                key={g}
                onClick={() => setForm({ ...form, goal: g })}
                className={`px-6 py-3 rounded-xl ${
                  form.goal === g ? "bg-orange-500" : "bg-zinc-800"
                }`}
              >
                {g}
              </motion.button>
            ))}
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <input
            type="number"
            placeholder="2 hours"
            className="w-full p-4 rounded-xl bg-zinc-900"
            onChange={(e) =>
              setForm({ ...form, time: e.target.value })
            }
          />
        )}

        {/* BUTTON */}
        {step > 0 && step < 5 && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={next}
            disabled={loading}
            className="mt-6 px-8 py-3 bg-orange-500 rounded-xl"
          >
            {loading ? "Saving..." : "Next →"}
          </motion.button>
        )}

        {/* START */}
        {step === 0 && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={next}
            className="px-8 py-3 bg-orange-500 rounded-xl"
          >
            Start →
          </motion.button>
        )}

        {/* FINAL */}
        {step === 5 && (
          <div className="text-xl animate-pulse">
            Generating your AI roadmap...
          </div>
        )}
      </motion.div>
    </main>
  );
}