import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Clock, BadgeCheck, MessageCircle } from "lucide-react";
import { mentors } from "@/data/mentors";
import { toast } from "sonner";

const MentoringSection = () => {
  const [selectedMentor, setSelectedMentor] = useState<string | null>(null);
  const [userRating, setUserRating] = useState<number>(0);

  const activeMentor = mentors.find((m) => m.id === selectedMentor);

  const handleBook = (name: string) => {
    toast.success(`Booking request sent to ${name}! 📚 They'll reach out soon.`);
  };

  const handleRate = (mentorName: string, rating: number) => {
    setUserRating(rating);
    toast.success(`Rated ${mentorName} ${rating}⭐ — Thanks for the feedback!`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center py-4">
        <h2 className="section-heading text-3xl mb-2">Learn from Legends 🧠</h2>
        <p className="font-body text-muted-foreground text-sm">Verified seniors • ₹50-100/hr • Actually helpful</p>
      </div>

      {!selectedMentor ? (
        <div className="grid gap-4">
          {mentors.map((mentor, i) => (
            <motion.button
              key={mentor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedMentor(mentor.id)}
              className="rounded-2xl bg-card neon-border p-4 text-left flex items-start gap-4 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Real profile image */}
              <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/40 flex-shrink-0">
                <img src={mentor.profileImage} alt={mentor.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-foreground">{mentor.name}</h3>
                  <BadgeCheck className="w-4 h-4 text-sky flex-shrink-0 fill-sky/20" />
                </div>
                <p className="text-xs text-muted-foreground font-body">{mentor.year} • {mentor.branch}</p>
                <p className="text-xs font-display font-semibold text-primary mt-1">{mentor.specialization}</p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-accent text-accent" />
                    <span className="text-xs font-display font-bold text-foreground">{mentor.rating}</span>
                    <span className="text-xs text-muted-foreground">({mentor.totalRatings})</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    ₹{mentor.rate}/hr
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      ) : (
        <div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => { setSelectedMentor(null); setUserRating(0); }}
            className="flex items-center gap-2 mb-4 font-display font-semibold text-primary"
          >
            ← Back to mentors
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-3xl neon-border p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-20 h-20 rounded-full overflow-hidden ring-3 ring-primary/50 shadow-lg shadow-primary/20">
                <img src={activeMentor?.profileImage} alt={activeMentor?.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-xl text-foreground">{activeMentor?.name}</h3>
                  <BadgeCheck className="w-5 h-5 text-sky fill-sky/20" />
                </div>
                <p className="text-sm text-muted-foreground font-body">{activeMentor?.year} • {activeMentor?.branch}</p>
                <p className="text-sm font-display font-semibold text-primary">{activeMentor?.specialization}</p>
              </div>
            </div>

            <p className="font-body text-foreground/80 text-sm mb-4">{activeMentor?.bio}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {activeMentor?.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-display font-semibold border border-primary/20">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mb-4 p-3 rounded-xl bg-muted/50 border border-border/50">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-accent text-accent" />
                <span className="font-display font-bold text-foreground">{activeMentor?.rating}</span>
                <span className="text-xs text-muted-foreground">({activeMentor?.totalRatings} ratings)</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-display font-bold text-foreground">₹{activeMentor?.rate}/hr</span>
              </div>
            </div>

            {/* Rating */}
            <div className="mb-4">
              <p className="text-xs font-display font-semibold text-muted-foreground mb-2">RATE THIS MENTOR</p>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.button
                    key={star}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleRate(activeMentor?.name || "", star)}
                  >
                    <Star
                      className={`w-6 h-6 transition-colors ${
                        star <= userRating ? "fill-accent text-accent" : "text-muted"
                      }`}
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleBook(activeMentor?.name || "")}
              className="w-full py-4 rounded-2xl gradient-primary text-primary-foreground font-display font-bold text-lg shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" /> Book Session
            </motion.button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default MentoringSection;
