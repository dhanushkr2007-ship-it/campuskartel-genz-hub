export interface ClubEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  type: "event" | "recruitment";
  postedBy: string;
}

export interface Club {
  id: string;
  name: string;
  emoji: string;
  tagline: string;
  image: string;
  color: string;
  volunteers: string[];
  events: ClubEvent[];
}

export const clubs: Club[] = [
  {
    id: "performing-arts",
    name: "Centre of Performing Arts",
    emoji: "🎭",
    tagline: "Stage is our second home",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=600&h=400&fit=crop",
    color: "from-secondary to-primary",
    volunteers: ["Arjun K.", "Meera S.", "Ravi T.", "Priya N.", "Karthik M."],
    events: [
      { id: "pa1", title: "Annual Drama Fest 🎪", description: "Three days of theatre magic! Auditions open for all years. Come show your dramatic side!", date: "Mar 15, 2026", type: "event", postedBy: "Arjun K." },
      { id: "pa2", title: "Backstage Crew Recruitment 🔧", description: "We need creative minds for set design, lighting & sound. No experience needed, just passion!", date: "Feb 20, 2026", type: "recruitment", postedBy: "Meera S." },
      { id: "pa3", title: "Open Mic Night 🎤", description: "Poetry, standup, music — the stage is yours. Free entry, free vibes.", date: "Feb 28, 2026", type: "event", postedBy: "Priya N." },
    ],
  },
  {
    id: "sports-club",
    name: "Sports Club",
    emoji: "⚽",
    tagline: "Sweat, compete, repeat",
    image: "https://images.unsplash.com/photo-1461896836934-bd45ba7b5f1d?w=600&h=400&fit=crop",
    color: "from-mint to-sky",
    volunteers: ["Vikram R.", "Sneha P.", "Anil D.", "Kavya G.", "Rohit B.", "Deepa V."],
    events: [
      { id: "sc1", title: "Inter-College Cricket Tournament 🏏", description: "Assemble your squad! Registration closes soon. Prizes worth ₹50K!", date: "Mar 1, 2026", type: "event", postedBy: "Vikram R." },
      { id: "sc2", title: "Fitness Challenge 2026 💪", description: "30-day campus fitness challenge. Track your progress, win cool merch!", date: "Feb 15, 2026", type: "event", postedBy: "Sneha P." },
      { id: "sc3", title: "Sports Coordinators Needed 📋", description: "Help us organize the biggest sports fest DSU has ever seen. Leadership skills required!", date: "Feb 18, 2026", type: "recruitment", postedBy: "Anil D." },
    ],
  },
  {
    id: "dance-club",
    name: "Dance Club",
    emoji: "💃",
    tagline: "Move your body, free your soul",
    image: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=600&h=400&fit=crop",
    color: "from-lavender to-secondary",
    volunteers: ["Ananya M.", "Rajesh K.", "Divya S.", "Farhan A.", "Ishita R."],
    events: [
      { id: "dc1", title: "Flash Mob Practice Sessions 🕺", description: "Secret flash mob planned for college fest! Join rehearsals every evening at 6 PM.", date: "Ongoing", type: "event", postedBy: "Ananya M." },
      { id: "dc2", title: "Choreo Team Recruitment 🌟", description: "Looking for choreographers who can blend Bollywood + hip-hop. Auditions this Saturday!", date: "Feb 22, 2026", type: "recruitment", postedBy: "Rajesh K." },
    ],
  },
  {
    id: "code-club",
    name: "Code Club",
    emoji: "💻",
    tagline: "printf('Hello DSU');",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    color: "from-sky to-mint",
    volunteers: ["Aditya P.", "Neha R.", "Sameer J.", "Pooja K.", "Varun L.", "Tanvi S.", "Harsh M."],
    events: [
      { id: "cc1", title: "Hackathon 2026 🚀", description: "48-hour coding marathon! Build something crazy. Teams of 2-4. Prizes + internship opportunities!", date: "Mar 10, 2026", type: "event", postedBy: "Aditya P." },
      { id: "cc2", title: "DSA Bootcamp 📚", description: "Free 2-week intensive DSA bootcamp for placement prep. Limited to 50 seats!", date: "Feb 25, 2026", type: "event", postedBy: "Neha R." },
      { id: "cc3", title: "Web Dev Team Recruitment 🌐", description: "Help us build the next gen college portal. React, Node, Postgres — if you know 'em, join us!", date: "Feb 19, 2026", type: "recruitment", postedBy: "Sameer J." },
    ],
  },
  {
    id: "photography-club",
    name: "Photography Club",
    emoji: "📸",
    tagline: "Every pixel tells a story",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&h=400&fit=crop",
    color: "from-accent to-lavender",
    volunteers: ["Shreya B.", "Manish T.", "Kriti L.", "Sanjay W.", "Nidhi A."],
    events: [
      { id: "pc1", title: "Campus Photo Walk 🚶‍♂️📷", description: "Golden hour campus walk this weekend. Bring your camera or phone — all welcome!", date: "Feb 23, 2026", type: "event", postedBy: "Shreya B." },
      { id: "pc2", title: "Photo Editors Wanted ✨", description: "Can you make photos pop? We need Lightroom/Photoshop pros for our magazine team.", date: "Feb 20, 2026", type: "recruitment", postedBy: "Manish T." },
    ],
  },
];
