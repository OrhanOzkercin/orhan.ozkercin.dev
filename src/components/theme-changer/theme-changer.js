import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sunny } from "../../../public/icons";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return null;
  }
  return theme === "dark" ? (
    <button type="button" onClick={toggleTheme}>
      <Sunny className="text-2xl text-yellow-500" />
    </button>
  ) : (
    <button>
      <Moon type="button" className="text-2xl text-neutral-800" onClick={toggleTheme} />
    </button>
  );
};

export { ThemeSwitch };
