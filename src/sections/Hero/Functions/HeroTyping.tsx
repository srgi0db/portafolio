import { useEffect, useState } from "react";

const words = ["Backend", "Frontend", "Mobile", "Freelancer"];

export default function HeroTyping() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];

    const speed = deleting ? 50 : 120;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(currentWord.substring(0, text.length + 1));

        if (text === currentWord) {
          setTimeout(() => setDeleting(true), 1500);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));

        if (text === "") {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
    <span className="highlight">
      {text}
      <span className="cursor">|</span>
    </span>
  );
}
