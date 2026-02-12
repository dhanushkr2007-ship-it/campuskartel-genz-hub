import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users, Megaphone, ArrowLeft, Heart, MessageCircle, Share2, MoreHorizontal, CheckCircle2 } from "lucide-react";
import { clubs } from "@/data/community";

const CommunitySection = () => {
  const [selectedClub, setSelectedClub] = useState<string | null>(null);
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
  const activeClub = clubs.find((c) => c.id === selectedClub);

  const toggleLike = (eventId: string) => {
    setLikedPosts((prev) => {
      const next = new Set(prev);
      if (next.has(eventId)) next.delete(eventId);
      else next.add(eventId);
      return next;
    });
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="text-center py-4">
        <h2 className="section-heading text-3xl mb-2">Your Tribe Awaits 🤝</h2>
        <p className="font-body text-muted-foreground text-sm">5 clubs • Endless vibes • Join the chaos</p>
      </div>

      <AnimatePresence mode="wait">
        {!selectedClub ? (
          <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-1">
            {/* WhatsApp-style club list */}
            {clubs.map((club, i) => (
              <motion.button
                key={club.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedClub(club.id)}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-muted/30 transition-colors rounded-xl"
              >
                {/* Club avatar */}
                <div className="relative">
                  <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/30">
                    <img src={club.image} alt={club.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="absolute -bottom-1 -right-1 text-lg">{club.emoji}</span>
                </div>

                {/* Info */}
                <div className="flex-1 text-left min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-bold text-foreground text-sm truncate">{club.name}</h3>
                    <CheckCircle2 className="w-3.5 h-3.5 text-neon-green flex-shrink-0 fill-neon-green/20" />
                  </div>
                  <p className="text-xs text-muted-foreground font-body truncate mt-0.5">{club.tagline}</p>
                  <div className="flex items-center gap-2 mt-1 text-[11px] text-muted-foreground/70">
                    <Users className="w-3 h-3" />
                    <span>{club.volunteers.length} members</span>
                    <span>•</span>
                    <span>{club.events.length} posts</span>
                  </div>
                </div>

                {/* Unread badge */}
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[10px] text-muted-foreground/60">{club.events[0]?.date.split(",")[0]}</span>
                  <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-primary-foreground">
                    {club.events.length}
                  </span>
                </div>
              </motion.button>
            ))}
          </motion.div>
        ) : (
          <motion.div key="detail" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            {/* Chat-style header */}
            <div className="flex items-center gap-3 mb-4 px-2 py-2 rounded-xl bg-card/50 neon-border">
              <motion.button whileTap={{ scale: 0.9 }} onClick={() => setSelectedClub(null)}>
                <ArrowLeft className="w-5 h-5 text-primary" />
              </motion.button>
              <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/30">
                <img src={activeClub?.image} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-sm text-foreground">{activeClub?.emoji} {activeClub?.name}</h3>
                <p className="text-[11px] text-muted-foreground">
                  {activeClub?.volunteers.join(", ")}
                </p>
              </div>
            </div>

            {/* LinkedIn-style posts */}
            <div className="space-y-4">
              {activeClub?.events.map((event, i) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl overflow-hidden neon-border"
                >
                  {/* Post header - LinkedIn style */}
                  <div className="flex items-center gap-3 p-4 pb-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-secondary/30">
                      <img src={activeClub.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="font-display font-bold text-sm text-foreground">{event.postedBy}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky fill-sky/20" />
                      </div>
                      <p className="text-[11px] text-muted-foreground">
                        {activeClub.name} • {event.date}
                      </p>
                    </div>
                    <button className="p-1 hover:bg-muted/30 rounded-lg transition-colors">
                      <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>

                  {/* Post content */}
                  <div className="px-4 pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      {event.type === "recruitment" ? (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-display font-bold bg-secondary/20 text-secondary border border-secondary/30">
                          🎯 RECRUITING
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-display font-bold bg-primary/20 text-primary border border-primary/30">
                          🎪 EVENT
                        </span>
                      )}
                    </div>
                    <h4 className="font-display font-bold text-foreground mb-1">{event.title}</h4>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">{event.description}</p>
                  </div>

                  {/* Engagement stats */}
                  <div className="px-4 py-2 border-t border-border/50 flex items-center gap-1 text-[11px] text-muted-foreground/70">
                    <span>❤️ {12 + i * 7} likes</span>
                    <span className="mx-1">•</span>
                    <span>{3 + i * 2} comments</span>
                  </div>

                  {/* Action bar - LinkedIn style */}
                  <div className="px-2 py-1.5 border-t border-border/50 flex items-center">
                    <motion.button
                      whileTap={{ scale: 0.85 }}
                      onClick={() => toggleLike(event.id)}
                      className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-display font-semibold transition-colors ${
                        likedPosts.has(event.id) ? "text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${likedPosts.has(event.id) ? "fill-primary" : ""}`} />
                      Like
                    </motion.button>
                    <button className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-display font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      Comment
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-display font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors">
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CommunitySection;
