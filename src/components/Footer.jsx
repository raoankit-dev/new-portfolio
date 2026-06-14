import { profile } from "../data";
import "./Footer.css";

export default function Footer() {
  // new Date() gives the current year so the copyright stays up to date.
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#home" className="footer-logo">
          {"<dev />"}
        </a>
        <p className="footer-copy">
          © {year} {profile.name}. Built with React.
        </p>
      </div>
    </footer>
  );
}
