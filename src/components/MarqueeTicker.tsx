import React from "react";
import { motion } from "framer-motion";

const tickerItems = [
  "🔥 No cap, DSU wifi hits different at 3am",
  "💀 POV: You forgot the assignment deadline again",
  "🫠 That moment when the prof says 'this won't be on the exam'... it was",
  "⚡ Daily Update: Canteen added new pasta, it's bussin fr fr",
  "😭 Me explaining to my parents why I need more pocket money",
  "🗿 Bro really said 'I'll study tomorrow' for the 47th time",
  "✨ Slay the semester, bestie — you got this!",
  "🤌 Campus vibes today: immaculate, no cap",
  "👀 That one friend who 'didn't study' but got 95%... sus",
  "💯 Touch grass challenge: go outside between lectures",
  "🔥 It's giving main character energy today",
  "😭 Assignment due at 11:59pm? Starting at 11:30pm is a lifestyle",
  "⚡ Daily Update: Library seats are a myth after 4pm",
  "🫡 Respect to the real ones who attend 8am classes",
  "💀 'Just one more reel' — famous last words before an all-nighter",
];

const MarqueeTicker = () => {
  const duplicated = [...tickerItems, ...tickerItems];

  return (
    <div className="w-full overflow-hidden py-2" style={{ background: "linear-gradient(90deg, hsl(var(--primary) / 0.15), hsl(var(--secondary) / 0.15), hsl(var(--primary) / 0.15))" }}>
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {duplicated.map((item, i) => (
          <span
            key={i}
            className="font-marker text-xs shrink-0"
            style={{ color: "hsl(var(--accent) / 0.85)" }}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeTicker;
