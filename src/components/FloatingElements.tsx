import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { floatingQuotes } from "@/data/mentors";
import doodleMascot from "@/assets/doodle-mascot.png";

const FloatingElements = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % floatingQuotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Floating quote ticker */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-foreground/90 py-2 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentQuote}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center font-marker text-xs text-background/80 px-4"
          >
            {floatingQuotes[currentQuote]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Floating doodle */}
      <motion.img
        src={doodleMascot}
        alt=""
        className="fixed bottom-12 right-4 w-12 h-12 opacity-20 pointer-events-none z-20"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle floating emojis */}
      {["✨", "🔥", "💯"].map((emoji, i) => (
        <motion.span
          key={i}
          className="fixed text-lg opacity-10 pointer-events-none z-10"
          style={{
            left: `${20 + i * 30}%`,
            top: `${30 + i * 15}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
        >
          {emoji}
        </motion.span>
      ))}
    </>
  );
};

export default FloatingElements;
