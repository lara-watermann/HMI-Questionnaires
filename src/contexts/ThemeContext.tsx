import React, { createContext, useEffect, useState } from "react";

export type Theme = "light" | "dark" | "auto";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  actualTheme: "light" | "dark"; // The actual resolved theme (light or dark)
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>("auto");
  const [actualTheme, setActualTheme] = useState<"light" | "dark">("light");

  // Get the actual theme based on preference
  const getActualTheme = (themePreference: Theme): "light" | "dark" => {
    if (themePreference === "auto") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return themePreference;
  };

  // Initialize theme
  useEffect(() => {
    const getPreferredTheme = () => {
      const storedTheme = localStorage.getItem("theme") as Theme;
      if (storedTheme && ["light", "dark", "auto"].includes(storedTheme)) {
        return storedTheme;
      }
      return "auto" as Theme;
    };

    const initialTheme = getPreferredTheme();
    setThemeState(initialTheme);
    const resolvedTheme = getActualTheme(initialTheme);
    setActualTheme(resolvedTheme);
    applyTheme(resolvedTheme);
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (theme === "auto") {
        const newActualTheme = e.matches ? "dark" : "light";
        setActualTheme(newActualTheme);
        applyTheme(newActualTheme);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const applyTheme = (resolvedTheme: "light" | "dark") => {
    // Using only data-bs-theme as per Bootstrap 5.3 recommendations
    document.documentElement.setAttribute("data-bs-theme", resolvedTheme);
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    const resolvedTheme = getActualTheme(newTheme);
    setActualTheme(resolvedTheme);
    applyTheme(resolvedTheme);
  };

  const toggleTheme = () => {
    const themes: Theme[] = ["light", "dark", "auto"];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, setTheme, actualTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
