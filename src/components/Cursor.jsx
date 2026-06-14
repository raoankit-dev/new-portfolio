import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./Cursor.css";

// A custom cursor: a small solid dot + a larger trailing ring that
// lags slightly behind for a smooth, modern feel.
export default function Cursor() {
  const [hidden, setHidden] = useState(true);
  const [hovering, setHovering] = useState(false);

  // Raw mouse position.
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // The ring follows with a spring so it trails the dot.
  const ringX = useSpring(x, { stiffness: 250, damping: 28 });
  const ringY = useSpring(y, { stiffness: 250, damping: 28 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
      // Grow the ring when hovering links/buttons.
      const el = e.target;
      setHovering(!!el.closest("a, button"));
    };
    const leave = () => setHidden(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  return (
    <>
      <motion.div
        className={`cursor-dot ${hidden ? "hidden" : ""}`}
        style={{ x, y }}
      />
      <motion.div
        className={`cursor-ring ${hidden ? "hidden" : ""} ${
          hovering ? "hovering" : ""
        }`}
        style={{ x: ringX, y: ringY }}
      />
    </>
  );
}
