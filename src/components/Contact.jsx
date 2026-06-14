import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data";
import { emailConfig, emailConfigured } from "../emailConfig";
import { fadeUp, stagger, onScroll } from "../animations";
import "./Contact.css";

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  // status: "" | "sending" | "success" | "error"
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // If EmailJS isn't set up yet, fall back to opening the email app.
    if (!emailConfigured) {
      const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
      const body = encodeURIComponent(
        `${form.message}\n\nFrom: ${form.name} (${form.email})`
      );
      window.location.href = `mailto:${profile.socials.email}?subject=${subject}&body=${body}`;
      return;
    }

    // Otherwise, send the email directly through EmailJS.
    try {
      setStatus("sending");
      await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        formRef.current,
        { publicKey: emailConfig.publicKey }
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact">
      <motion.div className="container" {...onScroll} variants={stagger}>
        <motion.h2 className="section-title" variants={fadeUp}>
          Let's connect
        </motion.h2>
        <motion.p className="section-subtitle" variants={fadeUp}>
          Have a project in mind or just want to say hi? Drop me a message.
        </motion.p>

        <motion.form
          ref={formRef}
          className="contact-form"
          onSubmit={handleSubmit}
          variants={fadeUp}
        >
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Your message..."
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          {/* Feedback messages */}
          {status === "success" && (
            <p className="form-status success">
              ✅ Thanks! Your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p className="form-status error">
              ❌ Something went wrong. Please email me directly.
            </p>
          )}
        </motion.form>

        <motion.div className="contact-socials" variants={fadeUp}>
          <a href={profile.socials.github} aria-label="GitHub" target="_blank" rel="noreferrer">
            <FiGithub />
          </a>
          <a href={profile.socials.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <FiLinkedin />
          </a>
          <a href={`mailto:${profile.socials.email}`} aria-label="Email">
            <FiMail />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
