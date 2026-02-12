import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowRight, Sparkles } from "lucide-react";
import appLogo from "@/assets/campus-kartel-logo.png";

const loginSlangs = [
  "WiFi > Feelings 📶",
  "No cap, this app slaps 🔥",
  "It's giving... campus vibes ✨",
  "Slay your semester bestie 💅",
  "Main character energy loading... 🎬",
  "Touch grass? Nah, touch your phone 📱",
  "Delulu is NOT the solulu 🤡",
];

const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentSlang, setCurrentSlang] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlang((p) => (p + 1) % loginSlangs.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const trimmed = email.trim().toLowerCase();
    if (!trimmed) {
      setError("Bro, enter your email first 😅");
      return;
    }
    if (!trimmed.endsWith("@dsu.edu.in")) {
      setError("Only @dsu.edu.in emails allowed! Nice try tho 😏");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      localStorage.setItem("campuskartel_user", trimmed);
      window.location.href = "/home";
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, hsl(15 90% 55%), transparent)", top: "-10%", left: "-15%" }}
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, hsl(280 70% 60%), transparent)", bottom: "-10%", right: "-10%" }}
          animate={{ x: [0, -50, 0], y: [0, -40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, hsl(45 95% 55%), transparent)", top: "50%", right: "20%" }}
          animate={{ x: [0, 30, -20, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />

        {["🍕", "🍔", "🌮", "🥞", "☕", "🎭", "💻", "⚽", "💀", "🗿"].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${8 + i * 10}%`,
              top: `${12 + (i % 4) * 22}%`,
              fontSize: `${20 + (i % 3) * 8}px`,
            }}
            animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        <div className="bg-card rounded-3xl p-8 shadow-2xl neon-border">
          {/* Logo */}
          <div className="flex items-center justify-center mb-4">
            <motion.img
              src={appLogo}
              alt="CampusKartel"
              className="h-20"
              style={{ filter: "drop-shadow(0 0 6px hsl(15 90% 55% / 0.15))", opacity: 0.85 }}
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <p className="text-center text-muted-foreground font-body text-sm mb-6">
            Your campus. Your vibe. Your food. 🔥
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                placeholder="yourname@dsu.edu.in"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-muted border-2 border-border font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-destructive text-sm font-body font-medium px-2"
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isLoading}
              className="w-full py-4 rounded-2xl gradient-primary text-primary-foreground font-display font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-primary/30 disabled:opacity-70 transition-opacity"
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-5 h-5" />
                </motion.div>
              ) : (
                <>
                  Let's Go <ArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </form>

          <p className="text-center text-muted-foreground text-xs mt-4 font-body">
            Only for DSU students • Made with ❤️ & caffeine
          </p>
        </div>

        {/* Rotating slang */}
        <motion.div className="mt-6 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <AnimatePresence mode="wait">
            <motion.p
              key={currentSlang}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="font-marker text-sm"
              style={{ color: "hsl(45 95% 55% / 0.6)" }}
            >
              "{loginSlangs[currentSlang]}"
            </motion.p>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
