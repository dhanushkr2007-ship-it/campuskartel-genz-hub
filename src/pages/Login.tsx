import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowRight, Sparkles } from "lucide-react";
import doodleMascot from "@/assets/doodle-mascot.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-primary">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {["🍕", "🍔", "🌮", "🥞", "☕", "🎭", "💻", "⚽"].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-20"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
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
        <div className="glass rounded-3xl p-8 shadow-2xl border border-foreground/5">
          {/* Logo & Mascot */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <motion.img
              src={doodleMascot}
              alt="CampusKartel mascot"
              className="w-16 h-16"
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>

          <h1 className="text-4xl font-display font-bold text-center text-foreground mb-1">
            Campus<span className="text-gradient-accent">Kartel</span>
          </h1>
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
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-background border-2 border-border font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
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
              className="w-full py-4 rounded-2xl gradient-accent text-accent-foreground font-display font-bold text-lg flex items-center justify-center gap-2 shadow-lg disabled:opacity-70 transition-opacity"
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

        {/* Floating quote */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="font-marker text-primary-foreground/60 text-sm">
            "WiFi &gt; Feelings" 📶
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
