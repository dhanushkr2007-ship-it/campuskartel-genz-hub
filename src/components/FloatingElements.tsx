import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { floatingQuotes } from "@/data/mentors";
import doodleMascot from "@/assets/doodle-mascot.png";

const FloatingElements = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % floatingQuotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const doodleEmojis = ["✨", "🔥", "💯", "⚡", "🫠", "💀", "🗿", "😭", "🤌", "👀"];

  return (
    <>
      {/* Ambient background glow orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, hsl(15 90% 55%), transparent)", top: "10%", left: "-10%" }}
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, hsl(280 70% 60%), transparent)", bottom: "20%", right: "-5%" }}
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[350px] h-[350px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, hsl(45 95% 55%), transparent)", top: "50%", left: "40%" }}
          animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating quote ticker */}
      <div className="fixed bottom-0 left-0 right-0 z-30 py-2.5 overflow-hidden" style={{ background: "linear-gradient(90deg, hsl(240 15% 6%), hsl(240 15% 10%), hsl(240 15% 6%))" }}>
        <AnimatePresence mode="wait">
          <motion.p
            key={currentQuote}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center font-marker text-xs px-4"
            style={{ color: "hsl(45 95% 55% / 0.7)" }}
          >
            {floatingQuotes[currentQuote]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Floating doodle mascot */}
      <motion.img
        src={doodleMascot}
        alt=""
        className="fixed bottom-12 right-4 w-14 h-14 opacity-30 pointer-events-none z-20"
        style={{ filter: "drop-shadow(0 0 8px hsl(15 90% 55% / 0.4))" }}
        animate={{ y: [0, -12, 0], rotate: [0, 8, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating doodle emojis scattered */}
      {doodleEmojis.map((emoji, i) => (
        <motion.span
          key={i}
          className="fixed pointer-events-none z-10"
          style={{
            left: `${5 + (i * 10) % 90}%`,
            top: `${10 + ((i * 17) % 70)}%`,
            fontSize: `${12 + (i % 3) * 4}px`,
            opacity: 0.08 + (i % 3) * 0.03,
          }}
          animate={{
            y: [0, -15 - (i % 3) * 8, 0],
            rotate: [0, 10 + i * 3, -(10 + i * 3), 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4 + i * 0.7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        >
          {emoji}
        </motion.span>
      ))}
    </>
  );
};

export default FloatingElements;
