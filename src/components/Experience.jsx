import { motion } from "framer-motion";
import { experience } from "../data";
import { fadeUp, stagger, onScroll } from "../animations";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <motion.div className="container" {...onScroll} variants={stagger}>
        <motion.h2 className="section-title" variants={fadeUp}>
          Experience
        </motion.h2>
        <motion.p className="section-subtitle" variants={fadeUp}>
          Although I don't have traditional corporate experience yet, I have translated my passion for software development into self-driven learning, successfully teaching myself several programming languages and core development principles. 
        </motion.p>

        <div className="timeline">
          {experience.map((item, i) => (
            <motion.div className="timeline-item" key={i} variants={fadeUp}>
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{item.role}</h3>
                  <span className="timeline-period">{item.period}</span>
                </div>
                <p className="timeline-company">{item.company}</p>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
