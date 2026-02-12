import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Megaphone } from "lucide-react";
import { clubs } from "@/data/community";

const CommunitySection = () => {
  const [selectedClub, setSelectedClub] = useState<string | null>(null);
  const activeClub = clubs.find((c) => c.id === selectedClub);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center py-4">
        <h2 className="font-marker text-3xl text-foreground mb-2">Your Tribe Awaits 🤝</h2>
        <p className="font-body text-muted-foreground text-sm">5 clubs • Endless vibes • Join the chaos</p>
      </div>

      {!selectedClub ? (
        <div className="grid gap-4">
          {clubs.map((club, i) => (
            <motion.button
              key={club.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedClub(club.id)}
              className="card-hover rounded-2xl overflow-hidden bg-card border border-border text-left flex"
            >
              <div className="relative w-32 min-h-[120px]">
                <img src={club.image} alt={club.name} className="w-full h-full object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-r ${club.color} opacity-40`} />
                <span className="absolute top-2 left-2 text-2xl">{club.emoji}</span>
              </div>
              <div className="p-4 flex-1">
                <h3 className="font-display font-bold text-foreground">{club.name}</h3>
                <p className="text-xs text-muted-foreground font-body mt-1">{club.tagline}</p>
                <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                  <Users className="w-3 h-3" />
                  <span>{club.volunteers.length} volunteers</span>
                  <span className="mx-1">•</span>
                  <Calendar className="w-3 h-3" />
                  <span>{club.events.length} events</span>
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
            onClick={() => setSelectedClub(null)}
            className="flex items-center gap-2 mb-4 font-display font-semibold text-primary"
          >
            ← Back to clubs
          </motion.button>

          {/* Club Header */}
          <div className="relative rounded-2xl overflow-hidden h-40 mb-4">
            <img src={activeClub?.image} alt={activeClub?.name} className="w-full h-full object-cover" />
            <div className={`absolute inset-0 bg-gradient-to-t ${activeClub?.color} opacity-60`} />
            <div className="absolute bottom-4 left-4">
              <span className="text-3xl">{activeClub?.emoji}</span>
              <h3 className="font-display font-bold text-xl text-primary-foreground">{activeClub?.name}</h3>
            </div>
          </div>

          {/* Volunteers */}
          <div className="mb-4">
            <h4 className="font-display font-semibold text-sm text-muted-foreground mb-2">VOLUNTEERS</h4>
            <div className="flex flex-wrap gap-2">
              {activeClub?.volunteers.map((v) => (
                <span key={v} className="px-3 py-1 rounded-full bg-muted text-xs font-body font-medium text-foreground">
                  {v}
                </span>
              ))}
            </div>
          </div>

          {/* Events */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-sm text-muted-foreground">EVENTS & RECRUITMENT</h4>
            {activeClub?.events.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-4 border border-border"
              >
                <div className="flex items-start gap-2 mb-2">
                  {event.type === "recruitment" ? (
                    <Megaphone className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  ) : (
                    <Calendar className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  )}
                  <div>
                    <h5 className="font-display font-bold text-sm text-card-foreground">{event.title}</h5>
                    <p className="text-xs text-muted-foreground font-body mt-1">{event.description}</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-display font-semibold ${
                        event.type === "recruitment"
                          ? "bg-secondary/20 text-secondary"
                          : "bg-primary/20 text-primary"
                      }`}>
                        {event.type === "recruitment" ? "RECRUITING" : "EVENT"}
                      </span>
                      <span>📅 {event.date}</span>
                      <span>by {event.postedBy}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunitySection;
