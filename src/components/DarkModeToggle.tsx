import React from "react";
import { useTheme } from "../hooks/useTheme";

const DarkModeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return "light_mode";
      case "dark":
        return "dark_mode";
      case "auto":
        return "brightness_auto";
      default:
        return "brightness_auto";
    }
  };

  const getNextThemeLabel = () => {
    switch (theme) {
      case "light":
        return "dark";
      case "dark":
        return "auto";
      case "auto":
        return "light";
      default:
        return "light";
    }
  };

  return (
    <button
      className="btn d-flex align-items-center justify-content-center "
      onClick={toggleTheme}
      aria-label={`Switch to ${getNextThemeLabel()} mode`}
      title={`Switch to ${getNextThemeLabel()} mode`}
      style={{ color: "white" }}
    >
      <span
        className="material-icons"
        style={{ fontSize: "1.2rem", color: "white" }}
      >
        {getThemeIcon()}
      </span>
    </button>
  );
};

export default DarkModeToggle;
