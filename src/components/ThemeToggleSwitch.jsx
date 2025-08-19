import { useState, useEffect } from "react";

export default function ThemeToggleSwitch() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = savedTheme === "dark" || (!savedTheme && systemPrefersDark);

    document.documentElement.classList.toggle("dark", dark);
    setIsDark(dark);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem("theme", nextDark ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme} className={`w-14 h-8 flex items-center px-1 rounded-full transition-colors duration-300 ${isDark ? "bg-gradient-to-r from-slate-900 to-sky-900" : "bg-gray-300"}`} aria-label="Toggle Dark Mode">
      <div className={`w-6 h-6 bg-white dark:bg-gray-100 rounded-full shadow-md transform transition-transform duration-300 ${isDark ? "translate-x-6" : "translate-x-0"}`} />
    </button>
  );
}
