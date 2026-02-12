import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UtensilsCrossed, Users, GraduationCap, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import FoodSection from "@/components/FoodSection";
import CommunitySection from "@/components/CommunitySection";
import MentoringSection from "@/components/MentoringSection";
import FloatingElements from "@/components/FloatingElements";
import doodleMascot from "@/assets/doodle-mascot.png";

type Tab = "food" | "community" | "mentoring";

const tabs: { id: Tab; label: string; icon: React.ReactNode; emoji: string }[] = [
  { id: "food", label: "Food", icon: <UtensilsCrossed className="w-5 h-5" />, emoji: "🍕" },
  { id: "community", label: "Community", icon: <Users className="w-5 h-5" />, emoji: "🎭" },
  { id: "mentoring", label: "Mentoring", icon: <GraduationCap className="w-5 h-5" />, emoji: "🎓" },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState<Tab>("food");
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("campuskartel_user");
    if (!user) navigate("/");
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("campuskartel_user");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background relative">
      <FloatingElements />

      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-border/50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <motion.img
              src={doodleMascot}
              alt="mascot"
              className="w-10 h-10"
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <h1 className="text-xl font-display font-bold">
              Campus<span className="text-gradient-primary">Kartel</span>
            </h1>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </motion.button>
        </div>
      </header>

      {/* Tab Bar */}
      <div className="sticky top-[61px] z-40 glass border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex gap-1 py-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-display font-semibold text-sm transition-all ${
                  activeTab === tab.id
                    ? "gradient-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                <span>{tab.emoji}</span>
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-4 py-6 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "food" && <FoodSection />}
            {activeTab === "community" && <CommunitySection />}
            {activeTab === "mentoring" && <MentoringSection />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Home;
