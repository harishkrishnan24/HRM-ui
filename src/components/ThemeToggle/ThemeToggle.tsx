import { THEMES } from "@/constants";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    localStorage.setItem("theme", theme!);
    document.querySelector("html")?.setAttribute("data-theme", theme!);
  }, [theme]);

  const onThemeToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setTheme(THEMES.DARK);
    } else {
      setTheme(THEMES.LIGHT);
    }
  };

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        className="theme-controller"
        onChange={onThemeToggle}
        checked={theme === THEMES.DARK}
      />

      <Sun className="swap-on fill-current w-10 h-10" />
      <Moon className="swap-off fill-current w-10 h-10" />
    </label>
  );
};
