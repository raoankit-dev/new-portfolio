import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "../data";
import { fadeUp, stagger, onScroll } from "../animations";
import "./Projects.css";

export default function Projects() {
  // Build the filter list: "All" + every unique tag across projects.
  const filters = useMemo(() => {
    const tags = new Set();
    projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return ["All", ...tags];
  }, []);

  const [filter, setFilter] = useState("All");

  // Show all projects, or only those containing the selected tag.
  const visible =
    filter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="projects">
      <motion.div className="container" {...onScroll} variants={stagger}>
        <motion.h2 className="section-title" variants={fadeUp}>
          Projects
        </motion.h2>
        <motion.p className="section-subtitle" variants={fadeUp}>
          Some things I've built.
        </motion.p>

        {/* Filter tabs */}
        <motion.div className="project-filters" variants={fadeUp}>
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <motion.div className="projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.article
                className="project-card"
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
              >
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <FiExternalLink /> Live
                  </a>
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    <FiGithub /> Code
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}
