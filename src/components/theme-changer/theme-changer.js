import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sunny } from "../../../public/icons";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return theme === "dark" ? (
    <button type="button" onClick={() => setTheme("light")}>
      <Sunny className="text-2xl text-yellow-500" />
    </button>
  ) : (
    <button>
      <Moon type="button" className="text-2xl text-neutral-800" onClick={() => setTheme("dark")} />
    </button>
  );
};

export { ThemeSwitch };
