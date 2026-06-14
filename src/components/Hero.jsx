import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiFileText, FiDownload } from "react-icons/fi";
import { profile } from "../data";
import { fadeUp, stagger } from "../animations";
import { useTypingEffect } from "../hooks/useTypingEffect";
import "./Hero.css";

export default function Hero() {
  // The role text that types/deletes itself in a loop.
  const typedRole = useTypingEffect(profile.roles);

  // Build initials (e.g. "Ankit Yadav" -> "AY") for the photo fallback.
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <section id="home" className="hero">
      <motion.div
        className="container hero-inner"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Profile photo, or initials if no photo is set in data.js */}
        <motion.div className="hero-avatar" variants={fadeUp}>
          {profile.photo ? (
            <img src={profile.photo} alt={profile.name} />
          ) : (
            <span className="hero-initials">{initials}</span>
          )}
        </motion.div>

        <motion.p className="hero-greeting" variants={fadeUp}>
          Hi, I'm
        </motion.p>

        <motion.h1 className="hero-name" variants={fadeUp}>
          {profile.name}
        </motion.h1>

        {/* Typing effect: cycles through profile.roles */}
        <motion.h2 className="hero-role" variants={fadeUp}>
          {typedRole}
          <span className="type-cursor">|</span>
        </motion.h2>

        <motion.div className="hero-socials" variants={fadeUp}>
          <a href={profile.socials.github} aria-label="GitHub" target="_blank" rel="noreferrer">
            <FiGithub />
          </a>
          <a href={profile.socials.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <FiLinkedin />
          </a>
          <a href={`mailto:${profile.socials.email}`} aria-label="Email">
            <FiMail />
          </a>
          <a href={profile.socials.resume} aria-label="Resume" target="_blank" rel="noreferrer">
            <FiFileText />
          </a>
        </motion.div>

        <motion.div className="hero-actions" variants={fadeUp}>
          <a href="#projects" className="btn btn-primary">
            View my work
          </a>
          <a
            href={profile.socials.resume}
            className="btn"
            download
            target="_blank"
            rel="noreferrer"
          >
            <FiDownload /> Resume
          </a>
          <a href="#contact" className="btn">
            Get in touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
