import React from "react";
import lightIcon from "../assets/Light.svg";
import darkIcon from "../assets/Dark.svg";

const ThemeSwitcher = ({ theme, toggleTheme }) => {
  return (
    <button
      className="theme-switch-btn"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <img src={lightIcon} alt="Light Mode Icon" className="theme-icon sun-icon" />
      ) : (
        <img src={darkIcon} alt="Dark Mode Icon" className="theme-icon moon-icon" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
