import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiHtml5,
  SiCss,
  SiGit,
  SiFigma,
  SiCplusplus,
  SiC,
  SiPython,
  SiPostgresql,
} from "react-icons/si";
import { skills } from "../data";
import { fadeUp, stagger, onScroll } from "../animations";
import "./Skills.css";

// Maps the `icon` string from data.js to a real icon component.
const iconMap = {
  react: SiReact,
  js: SiJavascript,
  ts: SiTypescript,
  node: SiNodedotjs,
  html: SiHtml5,
  css: SiCss,
  git: SiGit,
  figma: SiFigma,
  "c++": SiCplusplus,
  c: SiC,
  python: SiPython,
  Postgresql: SiPostgresql,
};

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <motion.div className="container" {...onScroll} variants={stagger}>
        <motion.h2 className="section-title" variants={fadeUp}>
          Skills
        </motion.h2>
        <motion.p className="section-subtitle" variants={fadeUp}>
          Tools and technologies I work with.
        </motion.p>

        <div className="skills-grid">
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon];
            return (
              <motion.div className="skill-card" key={skill.name} variants={fadeUp}>
                {Icon && <Icon className="skill-icon" />}
                <span>{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
