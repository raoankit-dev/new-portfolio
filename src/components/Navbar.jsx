import { useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useActiveSection } from "../hooks/useActiveSection";
import "./Navbar.css";

// The links in the nav. Each `href` points to a section id below.
const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = links.map((l) => l.href.slice(1)); // ["about", ...]

export default function Navbar({ theme, toggleTheme }) {
  // Tracks whether the mobile menu is open. Starts closed.
  const [menuOpen, setMenuOpen] = useState(false);
  // The section currently in view — used to highlight its link.
  const active = useActiveSection(sectionIds);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          {"<dev />"}
        </a>

        {/* `open` class is added when the mobile menu is toggled on */}
        <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href.slice(1) ? "active" : ""}
              onClick={() => setMenuOpen(false)} // close menu after picking a link
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>

          {/* Hamburger button — only visible on small screens (see CSS) */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
