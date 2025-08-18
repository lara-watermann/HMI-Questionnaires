import { createContext } from "react";

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
