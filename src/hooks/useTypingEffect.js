import { useEffect, useState } from "react";

// Types out each word, pauses, deletes it, then moves to the next —
// looping forever. Returns the current visible text.
export function useTypingEffect(words, { typeSpeed = 90, deleteSpeed = 45, pause = 1400 } = {}) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];

    // Decide what to do next based on whether we're typing or deleting.
    let delay = deleting ? deleteSpeed : typeSpeed;

    if (!deleting && text === current) {
      // Finished typing the word — pause, then start deleting.
      delay = pause;
      const t = setTimeout(() => setDeleting(true), delay);
      return () => clearTimeout(t);
    }

    if (deleting && text === "") {
      // Finished deleting — move to the next word.
      setDeleting(false);
      setWordIndex((i) => i + 1);
      return;
    }

    const t = setTimeout(() => {
      setText((prev) =>
        deleting
          ? current.slice(0, prev.length - 1)
          : current.slice(0, prev.length + 1)
      );
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return text;
}
