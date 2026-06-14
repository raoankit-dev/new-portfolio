// Shared Framer Motion animation presets.
// Import these in components so the motion stays consistent everywhere.

// Fades + slides an element up into view.
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// A container that reveals its children one after another (staggered).
export const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

// Props you can spread onto a <motion.div> to trigger animation on scroll.
// Example: <motion.div {...onScroll} variants={fadeUp} />
export const onScroll = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.2 },
};
