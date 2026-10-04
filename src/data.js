// =============================================================
//  EDIT YOUR CONTENT HERE
//  This is the only file you need to change to make the site yours.
// =============================================================

import { link } from "framer-motion/client";
import photo from "../src/assets/avatar.jpg"

export const profile = {
  name: "Ankit Yadav",
  role: "A Software Developer",
  location: "based in India",
  // The typing effect in the hero cycles through these one by one.
  roles: [
    "Software Developer",
    "Frontend Developer",
    "React Enthusiast",
    "Problem Solver",
  ],
  // A short, friendly intro shown in the About section.
  about:
    "Hey 👋 I'm a developer who loves building clean, fast and delightful web experiences. I'm currently learning React and enjoy turning ideas into interactive interfaces.",
  // Profile photo. Put your image at src/assets/profile.jpg and it will show.
  // Until then, your initials are shown automatically as a fallback.
  photo: photo, // e.g. "/profile.jpg" if you place it in the public/ folder
  // Links — replace the # with your real URLs.
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    email: "ankitya797@gmail.com",
    resume: "./src/assets/Resume.pdf", // link to your resume PDF (e.g. "/resume.pdf" in public/ folder)
  },
};

// Work / education timeline (newest first looks best).
export const experience = [
  // {
  //   role: "Frontend Developer",
  //   company: "Company Name",
  //   period: "2024 — Present",
  //   description:
  //     "Building responsive web apps with React. Worked on UI components, animations and performance.",
  // },
  // {
  //   role: "Web Development Intern",
  //   company: "Startup Inc.",
  //   period: "2023 — 2024",
  //   description:
  //     "Helped ship landing pages and learned modern frontend tooling like Vite and Git.",
  // },
];

// Skills — the `icon` matches a key in the icon map inside Skills.jsx.
export const skills = [
  { name: "React", icon: "react" },
  { name: "JavaScript", icon: "js" },
  { name: "C++", icon: "c++" },
  { name: "C", icon: "c" },
  { name: "HTML5", icon: "html" },
  { name: "CSS3", icon: "css" },
  { name: "Git", icon: "git" },
  { name: "Python", icon: "python" },
  {name: "Postgresql", icon: "postgresql"},
  {name: "FastAPI", icon: "fastapi"},
];

// Projects — add as many as you like.
export const projects = [
  {
    title: "Weather App",
    description:
      "It's my latest project, Using the Weather API. It has a nice UI and you can search temperature of any city and see the 5 day forcast.",
    tags: ["HTML", "CSS", "Js","API"],
    link: "https://raoankit-weather.netlify.app/",
    repo: "https://github.com/raoankit-dev/Weather-app.git",
  },
  {
    title: "Old Portfolio",
    description:
      "My first Portfolio website using plane HTML, CSS and some JavaScript.",
    tags: ["HTML", "CSS","Js"],
    link: "https://raoankit.netlify.app/",
    repo: "https://github.com/raoankit-dev/portfolio.git",
  },
  {
    title: "TO-DO App",
    description:
      "It's my To-do app, which I made while learning JavaScript.",
    tags: ["HTML", "CSS","Js"],
    link: "https://raoankit-dev.github.io/todo-app/",
    repo: "https://github.com/raoankit-dev/todo-app.git",
  },
  {
    title: "Quick-Notes-App",
    description: "Built a responsive React.js note-taking app with add, edit, delete, and Local Storage support for persistent notes.",
    tags: ["React.js","HTML5","Javascript","CSS3"],
    link:"https://raoankit-quick-notes.netlify.app/",
    repo:"https://github.com/raoankit-dev/Quick-Notes.git"
  },
  {
    title: "Movie-Detail App",
    description: "A React-powered movie exploration app designed to search, discover, and display detailed information about movies using dynamic API integration.",
    tags: ["React.js","HTML5","Javascript","CSS3","API"],
    link:"https://raoankit-movie-desk.netlify.app/",
    repo:"https://github.com/raoankit-dev/Movie-Desk.git"
  },
  {
    title: "Expens Tracker(ExTracke)",
    description: "A full-stack expense management platform featuring FastAPI APIs, authentication, SQLite database integration, expense CRUD operations, analytics, and AI-powered financial insights with a responsive React frontend.",
    tags: ["React.js","FastAPI","SQLite","API"],
    link:"https://extracke.vercel.app",
    repo:"https://github.com/raoankit-dev/ExpneseFrontEnd.git"
  }
];
