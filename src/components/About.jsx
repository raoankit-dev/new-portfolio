import { motion } from "framer-motion";
import { profile } from "../data";
import { fadeUp, onScroll } from "../animations";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <motion.div className="container" {...onScroll} variants={fadeUp}>
        <h2 className="section-title">About me</h2>
        <p className="about-text">{profile.about}</p>
      </motion.div>
    </section>
  );
}
