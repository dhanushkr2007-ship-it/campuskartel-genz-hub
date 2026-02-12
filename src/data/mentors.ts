export interface Mentor {
  id: string;
  name: string;
  year: string;
  branch: string;
  specialization: string;
  rate: number;
  rating: number;
  totalRatings: number;
  avatar: string;
  bio: string;
  tags: string[];
}

export const mentors: Mentor[] = [
  {
    id: "m1",
    name: "Rahul Sharma",
    year: "4th Year",
    branch: "Computer Science",
    specialization: "Data Structures & Algorithms",
    rate: 80,
    rating: 4.8,
    totalRatings: 42,
    avatar: "🧑‍💻",
    bio: "Cracked Google & Amazon interviews. Let me help you crack yours. 500+ LeetCode problems solved.",
    tags: ["DSA", "Competitive Coding", "Placement Prep"],
  },
  {
    id: "m2",
    name: "Priya Nair",
    year: "3rd Year",
    branch: "Electronics",
    specialization: "Embedded Systems & IoT",
    rate: 60,
    rating: 4.6,
    totalRatings: 28,
    avatar: "👩‍🔬",
    bio: "Built 3 IoT projects that won national hackathons. Arduino, ESP32, Raspberry Pi — I speak their language.",
    tags: ["IoT", "Arduino", "Circuit Design"],
  },
  {
    id: "m3",
    name: "Vikash Reddy",
    year: "4th Year",
    branch: "Mechanical",
    specialization: "Thermodynamics & Fluid Mechanics",
    rate: 70,
    rating: 4.9,
    totalRatings: 35,
    avatar: "🔧",
    bio: "Topped the department 3 semesters straight. I make thermo feel like a breeze (pun intended).",
    tags: ["Thermodynamics", "Fluid Mechanics", "GATE Prep"],
  },
  {
    id: "m4",
    name: "Sneha Patel",
    year: "3rd Year",
    branch: "Computer Science",
    specialization: "Web Development & React",
    rate: 50,
    rating: 4.7,
    totalRatings: 55,
    avatar: "💅",
    bio: "Full-stack developer with 2 internships. I'll teach you to build apps that actually look good.",
    tags: ["React", "Node.js", "Full Stack"],
  },
  {
    id: "m5",
    name: "Arjun Menon",
    year: "4th Year",
    branch: "Civil",
    specialization: "Structural Analysis",
    rate: 75,
    rating: 4.5,
    totalRatings: 20,
    avatar: "🏗️",
    bio: "Structures don't have to be stressful (another pun). Simplifying complex analysis one beam at a time.",
    tags: ["Structural Analysis", "AutoCAD", "GATE Prep"],
  },
  {
    id: "m6",
    name: "Kavya Iyer",
    year: "3rd Year",
    branch: "Information Science",
    specialization: "Machine Learning & AI",
    rate: 90,
    rating: 4.9,
    totalRatings: 38,
    avatar: "🤖",
    bio: "Published 2 papers on NLP. Kaggle Expert. Let's make your ML projects go from 'meh' to 'woah'.",
    tags: ["ML", "Python", "Deep Learning"],
  },
];

export const floatingQuotes = [
  "Code karo, khana khao, repeat 🍕",
  "WiFi > Feelings 📶",
  "My GPA is imaginary but my hunger is real 😤",
  "Sleep is just a DLC I can't afford 🎮",
  "404: Motivation Not Found",
  "git commit -m 'fixed my life' ✨",
  "Attendance < 75%? Pray mode activated 🙏",
  "Campus food hits different at 2 AM",
  "Ctrl+Z my semester please",
  "BRB, debugging my existence 🐛",
  "Dosa > Drama 🥞",
  "NaN marks in NaN subjects 📊",
  "Professor: 'Any questions?' *everyone stares at ceiling*",
  "Google > Textbook. Always.",
];
