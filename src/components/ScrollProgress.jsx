import { motion, useScroll, useSpring } from "framer-motion";
import "./ScrollProgress.css";

// A thin bar pinned to the top that fills as you scroll down the page.
export default function ScrollProgress() {
  // useScroll gives a 0 → 1 value (scrollYProgress) for page scroll.
  const { scrollYProgress } = useScroll();
  // useSpring smooths it so the bar glides instead of jumping.
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}
